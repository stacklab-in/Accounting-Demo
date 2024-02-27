const Employee = require('../models/Employee');
const SalesOrder = require('../models/SalesOrder');
const Joi = require('joi');
const { serverLogger } = require('../utils/loggerWinston');
const { request } = require('express');

// Joi schema for validation
const employeeSchema = Joi.object({
    id: Joi.string().optional(),
    code: Joi.string().required(),
    name: Joi.string().required(),
    mobileNumber: Joi.string().regex(/^\d{10}$/).required().messages({
        'string.pattern.base': 'Mobile number must be exactly 10 digits!'
    }),
    dateOfBirth: Joi.date().required(),
    address: Joi.object({
        line1: Joi.string().allow(''),
        line2: Joi.string().allow(''),
        city: Joi.string().allow(''),
        state: Joi.string().allow(''),
        pincode: Joi.alternatives().try(Joi.string().allow(''), Joi.number())
    })
});

// Create an employee
const createEmployee = async (req, res) => {
    try {
        const body = req.body;
        const { error } = employeeSchema.validate(body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        };

        let existingEmployee = await Employee.findOne({ name: body.name, isDeleted: false, userId: req.user._id })
        if (existingEmployee) {
            return res.status(409).json({ error: 'Employee already exists!.' });
        };

        // Add Explicitly userId and mobileNumber
        body.userId = req.user._id;
        body.mobileNumber = `+91${body.mobileNumber}`;
        body.dateOfBirth = new Date(body.dateOfBirth);


        const employee = await Employee.create(body);

        res.status(201).json({ msg: 'Employee created successfully', data: employee });
    } catch (error) {
        console.log(error);
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get all employees
const getAllEmployees = async (req, res) => {
    try {
        const employeeDataWithSoldQuantities = await Employee.aggregate([
            {
                $match: { isDeleted: false, userId: req.user._id }
            },
            {
                $lookup: {
                    from: "salesorders",
                    let: { employeeId: "$_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$salesManId", "$$employeeId"] },
                                isDeleted: false
                            }
                        },
                        {
                            $unwind: "$products"
                        },
                        {
                            $group: {
                                _id: null,
                                totalSold: { $sum: "$products.quantity" },
                                totalAmount: { $sum: "$totalAmount" }
                            }
                        },
                        {
                            $project: {
                                _id: 0,
                                totalSold: 1,
                                totalAmount: 1
                            }
                        }
                    ],
                    as: "salesData"
                }
            },
            {
                $lookup: {
                    from: "employees",
                    localField: "_id",
                    foreignField: "_id",
                    as: "employeeObj"
                }
            },
            {
                $project: {
                    _id: 1,
                    name: 1,
                    code: 1,
                    mobileNumber: 1,
                    soldQuantities: { $ifNull: [{ $arrayElemAt: ["$salesData.totalSold", 0] }, 0] },
                    totalSales: { $ifNull: [{ $arrayElemAt: ["$salesData.totalAmount", 0] }, 0] },
                    address: { $arrayElemAt: ["$employeeObj.address", 0] },
                    dateOfBirth: { $arrayElemAt: ["$employeeObj.dateOfBirth", 0] },
                    attendance: 1
                }
            },
            {
                $lookup: {
                    from: "employees",
                    localField: "_id",
                    foreignField: "_id",
                    as: "createdAtObj"
                }
            },
            {
                $sort: { "createdAtObj.createdAt": -1 }
            }
        ]);

        res.status(200).json({ msg: 'All employees', data: employeeDataWithSoldQuantities });
    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get employee by ID
const getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById({ _id: req.body.id, isDeleted: false });
        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.json(employee);
    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Update an employee
const updateEmployee = async (req, res) => {
    try {
        const { error } = employeeSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        };

        const updatedData = req.body;
        updatedData.mobileNumber = `+91${req.body.mobileNumber}`;
        updatedData.dateOfBirth = new Date(req.body.dateOfBirth);

        const employee = await Employee.findByIdAndUpdate({ _id: req.body.id, isDeleted: false, userId: req.user._id }, req.body, { new: true });
        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.status(200).json({ msg: 'Employee updated', data: employee });
    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getSalesHistory = async (req, res) => {
    try {

        if (!req.body.employeeId) {
            return res.status(400).json({ error: 'Employee Id is required' });
        };

        const salesHistory = await SalesOrder.find({ userId: req.user._id, salesManId: req.body.employeeId, isDeleted: false }).populate('customerId payments.paymentID');

        return res.status(200).json({ msg: 'Sales History', data: salesHistory });
    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    };
};
// Delete an employee
const deleteEmployee = async (req, res) => {
    try {
        const employee = await Employee.findByIdAndDelete({ _id: req.body.id, isDeleted: false, userId: req.user._id });
        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.status(200).json({ message: 'Employee deleted successfully' });
    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const markAttendance = async (req, res) => {
    const { employeeId, attendance } = req.body;
    try {
        // // Find the employee by ID
        // const employee = await Employee.findOne({ _id: employeeId, isDeleted: false });

        // if (!employee) {
        //     return res.status(404).json({ error: 'Employee not found!' });
        // };

        const updates = {};

        // Iterate over the dates in the attendance object
        for (let date in attendance) {
            if (attendance[date] === 'present') {
                // If the current attendance is marked as present,
                // check if there was a previous entry for the same date marked as absent
                if (updates[`${date}`] === 'absent') {
                    // If so, remove the previous entry for the same date marked as absent
                    updates.$unset = updates.$unset || {};
                    updates.$unset[`${date}`] = '';
                }
            } else {
                // If the current attendance is marked as absent, simply update the employee's attendance
                updates[`${date}`] = attendance[date];
            }
        };


        // // Iterate over the dates in the attendance object
        // for (let date in attendance) {
        //     if (attendance[date] === 'present') {
        //         // If the current attendance is marked as present, 
        //         // check if there was a previous entry for the same date marked as absent
        //         if (employee.attendance[date] === 'absent') {
        //             // If so, delete the previous entry for the same date marked as absent
        //             delete employee.attendance[date];
        //         }
        //     } else {
        //         // If the current attendance is marked as absent, simply update the employee's attendance
        //         employee.attendance[date] = attendance[date];
        //     }
        // };
        // console.log(employee);
        // Save the updated employee data
        // await employee.save();

        // res.status(200).json({ message: 'Attendance marked successfully' });
        // Update the attendance directly in the database
        const result = await Employee.findOneAndUpdate(
            { _id: employeeId, isDeleted: false },
            { $set: { attendance: updates } }, // Corrected syntax
            { new: true }
        );

        // Check if the document was found and updated
        if (!result) {
            return res.status(404).json({ error: 'Employee not found!' });
        }

        res.status(200).json({ message: 'Attendance marked successfully' });
    } catch (error) {
        console.error('Error marking attendance:', error);
        serverLogger("error", { error: error.stack || error.toString() });
        res.status(500).json({ error: 'Failed to mark attendance' });
    }
};

module.exports = {
    createEmployee,
    getAllEmployees,
    getEmployeeById,
    getSalesHistory,
    updateEmployee,
    deleteEmployee,
    markAttendance
};
