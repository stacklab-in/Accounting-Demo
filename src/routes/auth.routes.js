const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

router.post('/login', userController.login).descriptor({
    name: "Login a  user",
    body: { email: "email", password: "" },
});


//  Forget password


// Change password


module.exports = router;