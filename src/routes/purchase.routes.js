const express = require('express');
const router = express.Router();

const { auth } = require('../middlewares/auth');
const purchase = require('../controllers/purchase.controller');


// purchase
router.post('/add', auth,
    // checkRole('purchase.add'),
    purchase.add).descriptor({
        name: 'Create a purchase',
        body: {
          
        }
    });

router.post('/update',
    auth,
    //  checkPermissions('role.update'),
    purchase.update).descriptor({
        name: "Update a purchase",
        body: {
            id: '',
            invoiceDueDate: '',
            paymentStatus: ''
        }
    });

router.post('/list',
    auth,
    //  checkPermissions('role.list),
    purchase.list).descriptor({
        name: "List all purchase list",
    });


router.post('/record-payment',
    auth,
    //  checkPermissions('role.list),
    purchase.recordPayment).descriptor({
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
    purchase.getSummaryOfPurchase).descriptor({
        name: "List all Summary of purchase order",
    });


router.post('/delete',
    auth,
    purchase.remove).descriptor({
        name: "Delete a purchase order",
        body: {
            id: ''
        }
    });

module.exports = router;