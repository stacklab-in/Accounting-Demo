const express = require('express');
const router = express.Router();

const { auth } = require('../middlewares/auth');
// const { checkPermissions } = require('../middlewares/checkPermissions');
const customer = require('../controllers/customer.controller');


// CUSTOMER
router.post('/add',
    auth,
    // checkRole('customer.add'),
    customer.add).descriptor({
        name: 'Create a customer',
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
                shippingAddress: {
                    line1: "871 First Street",
                    line2: "Veritatis do velit q",
                    city: "Et sit corporis sit",
                    state: "Maharashtra",
                    pincode: "Earum "
                }
            }
        }
    });

router.post('/update',
    auth,
    //  checkPermissions('role.update'),
    customer.update).descriptor({
        name: "Update a Customer",
        body: {
            id: 'customerId',
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
                shippingAddress: {
                    line1: "871 First Street",
                    line2: "Veritatis do velit q",
                    city: "Et sit corporis sit",
                    state: "Maharashtra",
                    pincode: "Earum "
                }
            }
        }
    });

router.post('/list',
    auth,
    //  checkPermissions('role.list),
    customer.list).descriptor({
        name: "List all customers",
    });

router.post('/delete',
    auth,
    //  checkPermissions('role.list),
    customer.remove).descriptor({
        name: "Delete customer",
        body: {
            id: 'customerId'
        }
    });

module.exports = router;