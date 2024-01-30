const ProductBarcodeValue = require("../models/ProductBarcodeValues");

module.exports.add = async (req, res) => {
    try {

        // create a new user
        const newBarcodeValues = await ProductBarcodeValue.create({
            userId: req.user._id,
            percentageValue: req.body.percentageValue,
            value: req.body.value
        });

        return res.status(201).json({
            status: true,
            message: "Barcode value created successfully",
            data: newBarcodeValues
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
        const updatedProductBarcodeValue = await ProductBarcodeValue.findByIdAndUpdate(req.body._id, requestBody, { new: true });

        if (!updatedProductBarcodeValue) {
            return res.status(404).json({
                status: false,
                error: "ProductBarcodeValue not found"
            });
        };

        return res.status(200).json({
            status: true,
            message: "ProductBarcodeValue updated successfully",
            data: updatedProductBarcodeValue
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

module.exports.fetchBarcodeValues = async (req, res) => {
    try {
        // update the user
        const productBarcodeValue = await ProductBarcodeValue.findOne({ userId: req.user._id });

        return res.status(200).json({
            status: true,
            message: "ProductBarcodeValue fetched successfully",
            data: productBarcodeValue
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


