const ProductCategory = require("../models/ProductCatergory");

module.exports.add = async (req, res) => {
    try {

        console.log(req.body)
        // create a new user
        const newCategory = await ProductCategory.create({
            userId: req.user._id,
            name: req.body.name,
            description: req.body.description
        });

        return res.status(201).json({
            status: true,
            message: "Category created successfully",
            data: newCategory
        });
    } catch (err) {
        console.error(err);
        // Implement logger function if any
        return res.status(500).json({
            status: false,
            error: `${err.message}`
        });
    }
}

module.exports.update = async (req, res) => {
    try {
        const requestBody = req.body;

        // update the user
        const productCategory = await ProductCategory.findByIdAndUpdate(req.body._id, requestBody, { new: true });

        if (!productCategory) {
            return res.status(404).json({
                status: false,
                error: "ProductCategory not found"
            });
        };

        return res.status(200).json({
            status: true,
            message: "ProductCategory updated successfully",
            data: productCategory
        });
    } catch (err) {
        console.error(err);
        // Implement logger function if any
        return res.status(500).json({
            status: false,
            error: `${err.message}`
        });
    }
};

module.exports.list = async (req, res) => {
    try {
        const ProductCategories = await ProductCategory.find({ isDeleted: false, userId: req.user._id }).sort({ createdAt: -1 });
        return res.status(200).json({ msg: 'Product Categories fetched successfully!.', data: ProductCategories });
    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports.remove = async (req, res) => {
    try {

        const productCategory = await ProductCategory.findOne({ isDeleted: false, _id: req.body.id, userId: req.user._id });

        if (!productCategory) {
            return res.status(404).json({ error: 'ProductCategory not found!..' });
        }

        productCategory.isDeleted = true;
        await productCategory.save();

        return res.status(200).json({ msg: 'ProductCategory deleted successfully!..' })

    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};


