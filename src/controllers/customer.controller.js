const Customer = require('../models/Customer');
const { serverLogger } = require('../utils/loggerWinston');


const add = async (req, res) => {
    try {

        let requestBody = req.body;

        const existingCustomer = await Customer.findOne({ isDeleted: false, email: req.body.email });

        if (existingCustomer) {
            return res.status(400).json({ error: 'Customer already exists!..' })
        };

        requestBody.userId = req.user._id;
        requestBody.mobileNumber = `+91${req.body.mobileNumber}`;

        const newCustomer = await Customer.create(requestBody);

        if (!newCustomer) {
            return res.status(400).json({ error: 'Error while creating customer!..' })
        };

        return res.status(201).json({ msg: 'Customer created successfully!..', data: newCustomer });

    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};


const update = async (req, res) => {
    try {
        const updatedData = req.body;

        updatedData.mobileNumber = `+91${updatedData.mobileNumber}`

        const customer = await Customer.findOneAndUpdate(
            { userId: req.user._id, isDeleted: false, _id: req.body.id },
            updatedData,
        );

        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }

        // If the update is successful, you can send the updated customer data in the response
        return res.status(200).json({ msg: 'Customer Updated Successfully' });

    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const list = async (req, res) => {
    try {
        const customers = await Customer.find({ isDeleted: false, userId: req.user._id });
        return res.status(200).json({ msg: 'Customers fetched successfully!.', data: customers });
    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const remove = async (req, res) => {
    try {

        const customer = await Customer.findOne({ isDeleted: false, _id: req.body.id, userId: req.user._id });

        if (!customer) {
            return res.status(404).json({ error: 'Customer not found!..' });
        }

        customer.isDeleted = true;
        await customer.save();

        return res.status(200).json({ msg: 'Customer deleted successfully!..' })

    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    add,
    update,
    list,
    remove
}