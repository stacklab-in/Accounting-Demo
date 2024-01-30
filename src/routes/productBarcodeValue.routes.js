const express = require('express');
const router = express.Router();

const productBarcodeValueController = require('../controllers/productBarcodeValue.controller');
const { auth } = require('../middlewares/auth');
// const { checkPermissions } = require('../middlewares/checkPermissions');



// USER
router.post('/add', auth, productBarcodeValueController.add).descriptor({
    name: "Add a Barcode Values",
    body: {
        percentageValue: '100',
        value: '1'
    },
});


router.post('/update', auth, productBarcodeValueController.update).descriptor({
    name: "Update a Barcode Values",
    body: {
        id: "mongoID",
        percentageValue: '100',
        value: '1'
    },
});

router.post('/details', auth, productBarcodeValueController.fetchBarcodeValues).descriptor({
    name: "Fetch Barcode Values",
});


module.exports = router;