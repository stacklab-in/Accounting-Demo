const Product = require('../models/Product');
const { serverLogger } = require('../utils/loggerWinston');


const add = async (req, res) => {
    try {

        let requestBody = req.body;

        const existingCustomer = await Product.findOne({ isDeleted: false, name: req.body.name });

        if (existingCustomer) {
            return res.status(400).json({ error: 'Product already exists!..' })
        };

        requestBody.userId = req.user._id;

        const newProduct = await Product.create(requestBody);

        if (!newProduct) {
            return res.status(400).json({ error: 'Error while creating product!..' })
        };

        return res.status(201).json({ msg: 'Product created successfully!..', data: newProduct });

    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};


const update = async (req, res) => {
    try {
        const updatedData = req.body;
        console.log(updatedData);
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
        const products = await Product.find({ isDeleted: false, userId: req.user._id, quantity: { $gt: 0 } }).sort({ createdAt: -1 }).populate('category');
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