const Expenditure = require('../models/Expenditure');
const { serverLogger } = require('../utils/loggerWinston');

const add = async (req, res) => {
    try {

        let requestBody = req.body;
        console.log("🚀 ~ add ~ requestBody:", requestBody)
        requestBody.userId = req.user._id;
        requestBody.date = new Date(requestBody.date);

        console.log(requestBody.userId, requestBody.date)
        const newExpenditure = await Expenditure.create(requestBody);

        if (!newExpenditure) {
            return res.status(400).json({ error: 'Error while creating new expense!..' })
        };

        return res.status(201).json({ msg: 'Expenditure created successfully!..', data: newExpenditure });

    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};


const update = async (req, res) => {
    try {
        const updatedData = req.body;

        const expenditure = await Expenditure.findOneAndUpdate(
            { userId: req.user._id, isDeleted: false, _id: req.body.id },
            updatedData,
        );

        if (!expenditure) {
            return res.status(404).json({ error: 'Expenditure not found' });
        }

        // If the update is successful, you can send the updated vendor data in the response
        return res.status(200).json({ msg: 'Expenditure Updated Successfully' });

    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const list = async (req, res) => {
    try {
        const expenditureArray = await Expenditure.find({ isDeleted: false, userId: req.user._id });
        return res.status(200).json({ msg: 'Expenses fetched successfully!.', data: expenditureArray });
    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const remove = async (req, res) => {
    try {

        const expenditure = await Expenditure.findOne({ isDeleted: false, _id: req.body.id, userId: req.user._id });

        if (!expenditure) {
            return res.status(404).json({ error: 'Expenditure not found!..' });
        }

        expenditure.isDeleted = true;
        await expenditure.save();

        return res.status(200).json({ msg: 'Expenditure deleted successfully!..' })

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