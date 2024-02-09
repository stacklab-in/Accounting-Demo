const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');
const { auth } = require('../middlewares/auth');
const { checkPermissions } = require('../middlewares/checkPermissions');


router.get('/getProfile', userController.getProfile).descriptor({
    name: "Get User Info",
});


// USER
router.post('/add', checkPermissions('user.u'), userController.add).descriptor({
    name: "Add a user",
    body: {
        name: "name",
        email: "email",
        password: "password",
        roles: ["roleId"]
    },
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
        email: "email",
        password: "password",
        roles: ["roleId"]
    },
});

router.post('/delete', auth, userController.delete).descriptor({
    name: "Delete a user",
    body: { id: "MongoID" },
});

router.post('/list', auth, checkPermissions(), userController.list).descriptor({
    name: "List all users",
});


module.exports = router;