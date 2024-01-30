const express = require('express');
const router = express.Router();

const ProductCategoryController = require('../controllers/productCategory.controller');
const { auth } = require('../middlewares/auth');
// const { checkPermissions } = require('../middlewares/checkPermissions');


// USER
router.post('/add', auth, ProductCategoryController.add).descriptor({
    name: "Add a Product Category",
    body: {
        name: 'T Shirt',
        description: ' T shirts ...'
    },
});


router.post('/update', auth, ProductCategoryController.update).descriptor({
    name: "Update a Product Category",
    body: {
        _id: "mongoID",
        name: 'T Shirt',
        description: ' T shirts ...'
    },
});

router.post('/list', auth, ProductCategoryController.list).descriptor({
    name: "List Product Categories",
});

router.post('/delete', auth, ProductCategoryController.remove).descriptor({
    name: "Delete a Product Category",
    body: { id: "" },
});

module.exports = router;