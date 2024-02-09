const express = require('express');
const router = express.Router();

const { auth } = require('../middlewares/auth');
// const { checkPermissions } = require('../middlewares/checkPermissions');
const bank = require('../controllers/bank.controller');


// bank
router.post('/add',
    auth,
    // checkRole('bank.add'),
    bank.addBankAccount).descriptor({
        name: 'Create a bank',
        body: {
            accountNumber: '',
            ifscCode: '',
            bankName: '',
            branchName: '',
            isDefault: false
        }
    });

// router.post('/update',
//     auth,
//     //  checkPermissions('role.update'),
//     bank.u).descriptor({
//         name: "Update a bank",
//         body: {
//             accountNumber: '',
//             ifscCode: '',
//             bankName: '',
//             branchName: '',
//             isDefault: false
//         }
//     });

router.post('/list',
    auth,
    //  checkPermissions('role.list),
    bank.list).descriptor({
        name: "List all roles",
    });


router.post('/setasdefault',
    auth,
    //  checkPermissions('role.list),
    bank.setAsDefault).descriptor({
        name: "List all roles",
        body: { id: '' }
    });

router.post('/delete',
    auth,
    //  checkPermissions('role.list),
    bank.deleteAccount).descriptor({
        name: "List all roles",
        body: {
            id: 'vendorId'
        }
    });


router.post('/transfer',
    auth,
    //  checkPermissions('role.list),
    bank.transferFunds).descriptor({
        name: "Transfer funds from account to account ",
        body: {
            fromAccount: '',
            toAccount: '',
            amount: '',
            transferDate: 'Date String'
        }
    });

module.exports = router;