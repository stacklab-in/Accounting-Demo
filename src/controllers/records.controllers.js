const Payment = require('../models/Payment')
const Receipt = require('../models/Receipt')

const getAllReceipts = async (req, res) => {
    try {
        const receipts = await Receipt.aggregate([
            {
                $match: {
                    userId: req.user._id, // Replace 'userId' with the actual user ID you want to filter by
                    isDeleted: false
                }
            },
            {
                $lookup: {
                    from: 'salesorders', // Assuming your SalesOrder model is named 'SalesOrder'
                    localField: 'invoiceNumber',
                    foreignField: 'invoiceNumber',
                    as: 'salesOrder'
                }
            },
            {
                $unwind: '$salesOrder'
            },
            {
                $lookup: {
                    from: 'customers',
                    localField: 'salesOrder.customerId',
                    foreignField: '_id',
                    as: 'customer'
                }
            },
            {
                $lookup: {
                    from: 'payments',
                    localField: 'paymentId',
                    foreignField: '_id',
                    as: 'payment'
                }
            },
            {
                $addFields: {
                    customerName: { $arrayElemAt: ['$customer.name', 0] }, // Get the first element of the customer array
                    paymentId: { $arrayElemAt: ['$payment', 0] } // Get the first element of the customer array
                }
            },
            {
                $project: {
                    _id: 1,
                    userId: 1,
                    amount: 1,
                    bankId: 1,
                    invoiceNumber: 1,
                    paymentId: 1,
                    paymentType: 1,
                    partyType: 1,
                    paymentStatus: 1,
                    isDeleted: 1,
                    customerName: 1,
                    createdAt: 1
                }
            },
            {
                $sort: { createdAt: -1 } // Sort by createdAt in descending order
            }
        ]);

        return res.status(200).json({ msg: 'Receipts fetched successfully!.', data: receipts });
    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};



const getAllPayments = async (req, res) => {
    try {
        const payments = await Payment.find({ isDeleted: false, userId: req.user._id }).sort({ createdAt: -1 });
        return res.status(200).json({ msg: 'Payments fetched successfully!.', data: payments });
    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};


module.exports = { getAllPayments, getAllReceipts }