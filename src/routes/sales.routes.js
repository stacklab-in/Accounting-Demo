const express = require('express');
const router = express.Router();

const { auth } = require('../middlewares/auth');
const sales = require('../controllers/sales.controller');


// sales
router.post('/add', auth,
    // checkRole('sales.add'),
    sales.add).descriptor({
        name: 'Create a sales',
        body: {
            code: 'asj3sa',
            description: 'Create a new sales',
            status: 'Draft',
            type: 'Percentage',
        }
    });

// router.post('/update',
//     auth,
//     //  checkPermissions('role.update'),
//     sales.update).descriptor({
//         name: "Update a sales",
//         body: {
//             code: 'asj3sa',
//             description: 'Create a new sales',
//             status: 'Draft',
//             type: 'Percentage',
//         }
//     });

router.post('/list',
    auth,
    //  checkPermissions('role.list),
    sales.list).descriptor({
        name: "List all sales list",
    });


router.post('/record-payment',
    auth,
    //  checkPermissions('role.list),
    sales.recordPayment).descriptor({
        name: "Record Pending Payments",
        body: {
            salesOrderId: '',
            amountToPay: '',
            paymentDate: '',
            paymentMode: '',
            bank: ''     // If not CASH account then only it will come
        }
    });

// router.post('/delete',
//     auth,
//     //  checkPermissions('role.list),
//     sales.remove).descriptor({
//         name: "List all roles",
//         body: {
//             id: 'vendorId'
//         }
//     });

module.exports = router;