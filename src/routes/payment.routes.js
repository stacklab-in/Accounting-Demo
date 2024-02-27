const express = require('express');
const router = express.Router();

const { auth } = require('../middlewares/auth');
const { getAllPayments,addPayment } = require('../controllers/records.controllers');

router.post('/list',
    auth,
    //  checkPermissions('role.list),
    getAllPayments).descriptor({
        name: "List all payment list",
    });


router.post('/add',
    auth,
    //  checkPermissions('role.list),
    addPayment).descriptor({
        name: "Add payment ",
        body: {
            partyType:'VENDOR',
            invoices:[],
            totalAmount:0,
            paymentDate:'date',
            paymentMode:'CASH',
            bankId:'',
            chequeNumber:'' // IF paymentType is Cheque
        }
    });

module.exports = router;