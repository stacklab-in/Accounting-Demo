const Payment = require('../models/Payment')
const Receipt = require('../models/Receipt')

const getAllReceipts = async (req, res) => {
    try {
        const receipts = await Receipt.find({ isDeleted: false, userId: req.user._id }).populate('paymentId')
        return res.status(200).json({ msg: 'Receipts fetched successfully!.', data: receipts });
    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};



const getAllPayments = async (req, res) => {
    try {
        const payments = await Payment.find({ isDeleted: false, userId: req.user._id });
        return res.status(200).json({ msg: 'Payments fetched successfully!.', data: payments });
    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};


module.exports = { getAllPayments, getAllReceipts }