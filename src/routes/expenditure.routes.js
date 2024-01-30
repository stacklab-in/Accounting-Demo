const express = require('express');
const router = express.Router();

const { auth } = require('../middlewares/auth');
// const { checkPermissions } = require('../middlewares/checkPermissions');
const expenditure = require('../controllers/expenditure.controller');


// expenditure
router.post('/add',
    auth,
    // checkRole('expenditure.add'),
    expenditure.add).descriptor({
        name: 'Create a expenditure',
        body: {
            price:'200', //In Rupees
            date:'date',
            category:'',
            paymentStatus:'',
            paymentMode:''

        }
    });

router.post('/update',
    auth,
    //  checkPermissions('role.update'),
    expenditure.update).descriptor({
        name: "Update a expenditure",
        body: {
            price:'200', //In Rupees
            date:'date',
            category:'',
            paymentStatus:'',
            paymentMode:''

        }
    });

router.post('/list',
    auth,
    //  checkPermissions('role.list),
    expenditure.list).descriptor({
        name: "List all roles",
    });

router.post('/delete',
    auth,
    //  checkPermissions('role.list),
    expenditure.remove).descriptor({
        name: "List all roles",
        body: {
            id: 'vendorId'
        }
    });

module.exports = router;