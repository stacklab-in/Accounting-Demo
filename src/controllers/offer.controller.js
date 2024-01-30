const Offer = require('../models/Offer');
const { serverLogger } = require('../utils/loggerWinston');


const add = async (req, res) => {
    try {

        let requestBody = req.body;

        const existingOffer = await Offer.findOne({ isDeleted: false, code: req.body.code });

        if (existingOffer) {
            return res.status(400).json({ error: 'Offer already exists!..' })
        };

        requestBody.userId = req.user._id;
        delete requestBody.status;

        const newOffer = await Offer.create(requestBody);

        if (!newOffer) {
            return res.status(400).json({ error: 'Error while creating vendor!..' })
        };

        return res.status(201).json({ msg: 'Offer created successfully!..', data: newOffer });

    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};


const update = async (req, res) => {
    try {
        const updatedData = req.body;

        const offer = await Offer.findOneAndUpdate(
            { userId: req.user._id, isDeleted: false, _id: req.body.id },
            updatedData,
        );

        if (!offer) {
            return res.status(404).json({ error: 'Offer not found' });
        }

        // If the update is successful, you can send the updated vendor data in the response
        return res.status(200).json({ msg: 'Offer Updated Successfully' });

    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const list = async (req, res) => {
    try {
        const offers = await Offer.find({ isDeleted: false, userId: req.user._id });
        return res.status(200).json({ msg: 'Offers fetched successfully!.', data: offers });
    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const remove = async (req, res) => {
    try {

        const offer = await Offer.findOne({ isDeleted: false, _id: req.body.id, userId: req.user._id });

        if (!offer) {
            return res.status(404).json({ error: 'Offer not found!..' });
        }

        offer.isDeleted = true;
        await offer.save();

        return res.status(200).json({ msg: 'Offer deleted successfully!..' })

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