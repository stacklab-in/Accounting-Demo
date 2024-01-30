const express = require('express');
const router = express.Router();

const { auth } = require('../middlewares/auth');
const { checkPermissions } = require('../middlewares/checkPermissions');
const role = require('../controllers/role.controller');


// ROLES
router.post('/add',

    auth,
    // , checkRole('role.add'),
    role.add).descriptor({
        name: "Add a Role",
        body: {
            name: "",
            defaultRole: "",
            description: "",
            permissions: ["permissionId"]
        },
    });

router.post('/update',

    // auth, checkPermissions('role.update'),
    role.update).descriptor({
        name: "Update a existing Role",
        body: {
            id: "",
            name: "",
            defaultRole: "",
            description: "",
            permissions: ["user.add,..."]
        },
    });

router.post('/list',
    // auth,
    //  checkPermissions('role.list),
    role.list).descriptor({
        name: "List all roles",
    });

module.exports = router;