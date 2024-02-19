const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');
const { auth } = require('../middlewares/auth');
const { checkPermissions } = require('../middlewares/checkPermissions');


router.get('/getProfile', auth, userController.getProfile).descriptor({
    name: "Get User Info",
});

router.post('/login', userController.login).descriptor({
    name: "Login a  user",
    body: { email: "email", password: "" },
});

router.post('/update', auth, userController.update).descriptor({
    name: "Update a user",
    body: {
        id: "mongoID",
        name: "name",
        mobileNumber: "mobileNumber",
    },
});

router.post('/rolesandpermissions/update', auth, userController.updateRolesAndDetails).descriptor({
    name: "Update a user",
    body: {
        id: "mongoID",
        name: "name",
        role: "roleId",
        permissions: []
    },
});

router.post('/delete', auth, userController.delete).descriptor({
    name: "Delete a user",
    body: { id: "MongoID" },
});

router.post('/list', auth, userController.list).descriptor({
    name: "List all users",
});

router.post('/invite', auth, userController.sendInviteLink).descriptor({
    name: "Send Invitation links to users",
    body: {
        users: []
    }
});


module.exports = router;