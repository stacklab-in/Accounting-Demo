const express = require('express');
const router = express.Router();

const { auth } = require('../middlewares/auth');
// const { checkPermissions } = require('../middlewares/checkPermissions');
const vendor = require('../controllers/vendor.controller');


// vendor
router.post('/add',
    auth,
    // checkRole('vendor.add'),
    vendor.add).descriptor({
        name: 'Create a vendor',
        body: {
            name: "Hoyt Vinson",
            email: "jicigum@mailinator.com",
            mobileNumber: "9893274823",
            type: "Exempted",
            company: {
                name: "Cruz and Benton Plc",
                gstNumber: "MNHGRY667TYGUG",
                billingAddress: {
                    line1: "76 East Green First Extension",
                    line2: "Voluptates voluptate",
                    city: "Perspiciatis labore",
                    state: "Maharashtra",
                    pincode: "Repell"
                },
            }
        }
    });

router.post('/update',
    auth,
    //  checkPermissions('role.update'),
    vendor.update).descriptor({
        name: "Update a vendor",
        body: {
            id: 'vendorId',
            name: "Hoyt Vinson",
            email: "jicigum@mailinator.com",
            mobileNumber: "9893274823",
            type: "Exempted",
            company: {
                name: "Cruz and Benton Plc",
                gstNumber: "MNHGRY667TYGUG",
                billingAddress: {
                    line1: "76 East Green First Extension",
                    line2: "Voluptates voluptate",
                    city: "Perspiciatis labore",
                    state: "Maharashtra",
                    pincode: "Repell"
                }

            }
        }
    });

router.post('/list',
    auth,
    //  checkPermissions('role.list),
    vendor.list).descriptor({
        name: "List all roles",
    });

router.post('/delete',
    auth,
    //  checkPermissions('role.list),
    vendor.remove).descriptor({
        name: "List all roles",
        body: {
            id: 'vendorId'
        }
    });

module.exports = router;