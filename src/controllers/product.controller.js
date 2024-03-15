const Product = require('../models/Product');
const ProductBarcode = require('../models/ProductBarcodes');
const { serverLogger } = require('../utils/loggerWinston');
const mongoose = require('mongoose');

const add = async (req, res) => {
    const session = await mongoose.startSession();
    let isSuccess = false;
    let isDBTransactionInProgress = false;
    try {

        // Start transaction
        session.startTransaction();
        isDBTransactionInProgress = true;

        const newDate = new Date();
        let requestBody = req.body;

        const lastProduct = await Product.findOne({ isDeleted: false }).sort({ createdAt: -1 }).session(session);

        let productCode;
        let sequentialNumber = 1; // Default value if no previous product exists

        if (lastProduct) {
            const lastProductCode = lastProduct?.code;
            const currentYear = lastProductCode.substring(2, 4);
            if (currentYear === newDate.getFullYear().toString().substring(2, 4)) {
                sequentialNumber = parseInt(lastProductCode.substring(4)) + 1;
            }
        }

        const currentYear = newDate.getFullYear().toString().substring(2, 4);
        const lastYear = (newDate.getFullYear() - 1).toString().substring(2, 4);
        const paddedSequentialNumber = sequentialNumber.toString().padStart(6, '0');

        productCode = lastYear + currentYear + paddedSequentialNumber;

        const existingCustomer = await Product.findOne({ isDeleted: false, name: req.body.name }).session(session);

        if (existingCustomer) {
            return res.status(400).json({ error: 'Product already exists!..' })
        };

        requestBody.userId = req.user._id;
        requestBody.code = productCode;
        requestBody.createdAt = newDate;
        requestBody.updatedAt = newDate;
        requestBody.isDeleted = false;
        requestBody.vendorId = req.body.vendor._id;
        delete requestBody.category;

        console.log("🚀 ~ add ~ requestBody:", requestBody);

        const newProduct = new Product(requestBody, { session });

        if (!newProduct) {
            return res.status(400).json({ error: 'Error while creating product!..' })
        };

        const productBarcode = new ProductBarcode({
            userId: req.user._id,
            barcode: requestBody.barcode,
            purchasePrice: requestBody.purchasePrice,
            productId: newProduct._id,
            code: productCode,
            vendorId: req.body.vendor._id,
            createdAt: newDate,
            updatedAt: newDate,
            isDeleted: false
        }, { session });

        if (!productBarcode) {
            return res.status(400).json({ error: 'Error while creating product barcode!..' })
        }

        await productBarcode.save({ session });
        await newProduct.save({ session });

        // Commit the transaction
        await session.commitTransaction();
        isSuccess = true;

        return res.status(201).json({ msg: 'Product created successfully!..', data: newProduct });

    } catch (error) {
        console.log(error);
        serverLogger("error", { error: error.stack || error.toString() });
        res.status(400).json({ error: error.toString() });
    } finally {
        isSuccess ? undefined : (isDBTransactionInProgress ? await session.abortTransaction() : undefined);
        // End the session
        session.endSession();
    };
};


const update = async (req, res) => {
    try {
        const updatedData = req.body;
        console.log(updatedData);
        const newDate = new Date();
        updatedData.updatedAt = newDate;

        const existingBarcode = await ProductBarcode.findOne({ purchasePrice: updatedData.purchasePrice, isDeleted: false })

        if (!existingBarcode) {
            //  Create the barcode then
            const productBarcode = new ProductBarcode({
                userId: req.user._id,
                barcode: updatedData.barcode,
                purchasePrice: updatedData.purchasePrice,
                productId: updatedData.id,
                createdAt: newDate,
                updatedAt: newDate
            });

            if (!productBarcode) {
                return res.status(400).json({ error: 'Error while creating product barcode!..' })
            };
            await productBarcode.save();
        }


        delete updatedData.vendor;
        const product = await Product.findOneAndUpdate(
            { userId: req.user._id, isDeleted: false, _id: req.body.id },
            updatedData,
        );

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // If the update is successful, you can send the updated product data in the response
        return res.status(200).json({ msg: 'Product Updated Successfully' });

    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const list = async (req, res) => {
    try {
        const products = await Product.find({ isDeleted: false, userId: req.user._id, quantity: { $gt: 0 } }).sort({ createdAt: -1 }).populate('category vendorId');
        return res.status(200).json({ msg: 'Products fetched successfully!.', data: products });
    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const remove = async (req, res) => {
    try {
        console.log('Removing', req.body);
        const product = await Product.findOne({ isDeleted: false, _id: req.body.id, userId: req.user._id })

        if (!product) {
            return res.status(404).json({ error: 'Product not found!..' });
        }

        product.isDeleted = true;
        await product.save();

        return res.status(200).json({ msg: 'Product deleted successfully!..' })

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