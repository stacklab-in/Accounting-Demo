const express = require('express');
const router = express.Router();

const { auth } = require('../middlewares/auth');
const purchaseReturn = require('../controllers/purchaseReturn.controller');


// purchaseReturn
router.post('/add', auth,
    // checkRole('purchaseReturn.add'),
    purchaseReturn.add).descriptor({
        name: 'Create a purchaseReturn Order',
        body: {
          
        }
    });

router.post('/update',
    auth,
    //  checkPermissions('role.update'),
    purchaseReturn.update).descriptor({
        name: "Update a purchaseReturn Order",
        body: {
            id: '',
            invoiceDueDate: '',
            paymentStatus: ''
        }
    });

router.post('/list',
    auth,
    //  checkPermissions('role.list),
    purchaseReturn.list).descriptor({
        name: "List all purchaseReturn list",
    });


router.post('/record-payment',
    auth,
    //  checkPermissions('role.list),
    purchaseReturn.recordPayment).descriptor({
        name: "Record Pending Payments",
        body: {
            salesOrderId: '',
            amountToPay: '',
            paymentDate: '',
            paymentMode: '',
            bank: ''     // If not CASH account then only it will come
        }
    });

router.get('/summary',
    auth,
    purchaseReturn.getSummaryOfPurchase).descriptor({
        name: "List all Summary of purchaseReturn order",
    });


router.post('/delete',
    auth,
    purchaseReturn.remove).descriptor({
        name: "Delete a purchaseReturn order",
        body: {
            id: ''
        }
    });

module.exports = router;