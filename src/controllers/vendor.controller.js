const Vendor = require('../models/Vendor');
const { serverLogger } = require('../utils/loggerWinston');


const add = async (req, res) => {
    try {

        let requestBody = req.body;

        const existingCustomer = await Vendor.findOne({ isDeleted: false, email: req.body.email });

        if (existingCustomer) {
            return res.status(400).json({ error: 'Vendor already exists!..' })
        };

        requestBody.userId = req.user._id;
        requestBody.mobileNumber = `+91${req.body.mobileNumber}`;

        const newVendor = await Vendor.create(requestBody);

        if (!newVendor) {
            return res.status(400).json({ error: 'Error while creating vendor!..' })
        };

        return res.status(201).json({ msg: 'Vendor created successfully!..', data: newVendor });

    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};


const update = async (req, res) => {
    try {
        const updatedData = req.body;
        updatedData.mobileNumber = `+91${req.body.mobileNumber}`;
        
        const vendor = await Vendor.findOneAndUpdate(
            { userId: req.user._id, isDeleted: false, _id: req.body.id },
            updatedData,
        );

        if (!vendor) {
            return res.status(404).json({ error: 'Vendor not found' });
        }

        // If the update is successful, you can send the updated vendor data in the response
        return res.status(200).json({ msg: 'Vendor Updated Successfully' });

    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const list = async (req, res) => {
    try {
        const vendors = await Vendor.find({ isDeleted: false, userId: req.user._id });
        return res.status(200).json({ msg: 'Vendors fetched successfully!.', data: vendors });
    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const remove = async (req, res) => {
    try {

        const vendor = await Vendor.findOne({ isDeleted: false, _id: req.body.id, userId: req.user._id });

        if (!vendor) {
            return res.status(404).json({ error: 'Vendor not found!..' });
        }

        vendor.isDeleted = true;
        await vendor.save();

        return res.status(200).json({ msg: 'Vendor deleted successfully!..' })

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