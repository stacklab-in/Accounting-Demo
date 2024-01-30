const express = require('express');
const router = express.Router();

const { auth } = require('../middlewares/auth');
// const { checkPermissions } = require('../middlewares/checkPermissions');
const product = require('../controllers/product.controller');


// product
router.post('/add',
    auth,
    // checkRole('product.add'),
    product.add).descriptor({
        name: 'Create a product',
        body: {
            name: 'T Shirt',
            category: 'Category ID',
            purchasePrice: '',
            sellingPrice: '',
            gstValue: '',
            quantity: '',
            barcode: ''
        }
    });

router.post('/update',
    auth,
    //  checkPermissions('role.update'),
    product.update).descriptor({
        name: "Update a product",
        body: {
            id: '',
            name: 'T Shirt',
            category: 'Category ID',
            purchasePrice: '',
            sellingPrice: '',
            gstValue: '',
            quantity: '',
            barcode: ''
        }
    });

router.post('/list',
    auth,
    //  checkPermissions('role.list),
    product.list).descriptor({
        name: "List all products",
    });

router.post('/delete',
    auth,
    //  checkPermissions('role.list),
    product.remove).descriptor({
        name: "Remove a product",
        body: {
            id: 'productID'
        }
    });

module.exports = router;