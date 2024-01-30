const express = require('express');
const router = express.Router();

const { auth } = require('../middlewares/auth');
// const { checkPermissions } = require('../middlewares/checkPermissions');
const offer = require('../controllers/offer.controller');


// offer
router.post('/add',
    auth,
    // checkRole('offer.add'),
    offer.add).descriptor({
        name: 'Create a offer',
        body: {
            code: 'asj3sa',
            description: 'Create a new offer',
            status: 'Draft',
            type: 'Percentage',
        }
    });

router.post('/update',
    auth,
    //  checkPermissions('role.update'),
    offer.update).descriptor({
        name: "Update a offer",
        body: {
            code: 'asj3sa',
            description: 'Create a new offer',
            status: 'Draft',
            type: 'Percentage',
        }
    });

router.post('/list',
    auth,
    //  checkPermissions('role.list),
    offer.list).descriptor({
        name: "List all roles",
    });

router.post('/delete',
    auth,
    //  checkPermissions('role.list),
    offer.remove).descriptor({
        name: "List all roles",
        body: {
            id: 'vendorId'
        }
    });

module.exports = router;