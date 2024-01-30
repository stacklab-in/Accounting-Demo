const express = require('express');
const router = express.Router();

const { auth } = require('../middlewares/auth');
// const { checkPermissions } = require('../middlewares/checkPermissions');
const employee = require('../controllers/employee.controller');


// CUSTOMER
router.post('/add',
    auth,
    // checkRole('employee.add'),
    employee.createEmployee).descriptor({
        name: 'Create a employee',
        body: {
            name: "Hoyt Vinson",
            code: '83bjb',
            mobileNumber: "9893274823",
            dateOfBirth: "date",
            address: {
                line1: "76 East Green First Extension",
                line2: "Voluptates voluptate",
                city: "Perspiciatis labore",
                state: "Maharashtra",
                pincode: "Repell"
            }
        }
    });

router.post('/update',
    auth,
    //  checkPermissions('role.update'),
    employee.updateEmployee).descriptor({
        name: "Update a Customer",
        body: {
            name: "Hoyt Vinson",
            code: '83bjb',
            mobileNumber: "9893274823",
            dateOfBirth: "date",
            address: {
                line1: "76 East Green First Extension",
                line2: "Voluptates voluptate",
                city: "Perspiciatis labore",
                state: "Maharashtra",
                pincode: "Repell"
            }
        }
    });

router.post('/list',
    auth,
    //  checkPermissions('role.list),
    employee.getAllEmployees).descriptor({
        name: "List all employees",
    });

router.post('/delete',
    auth,
    //  checkPermissions('role.list),
    employee.deleteEmployee).descriptor({
        name: "Delete employee",
        body: {
            id: 'customerId'
        }
    });

module.exports = router;