const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

router.post('/login', userController.login).descriptor({
    name: "Login a  user",
    body: { email: "email", password: "" },
});


// Change password
router.post('/passwordtable/details', userController.getPasswordTableDetails).descriptor({
    name: "Get details of passwordtable using email",
    body: {
        email: "email",
    },
});


// USER
router.post('/register', userController.add).descriptor({
    name: "Add a user",
    body: {
        firstName: "name",
        lastName: "name",
        email: 'Email address',
        password: "password",
    },
});



module.exports = router;