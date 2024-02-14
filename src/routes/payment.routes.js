const express = require('express');
const router = express.Router();

const { auth } = require('../middlewares/auth');
const { getAllPayments } = require('../controllers/records.controllers');

router.post('/list',
    auth,
    //  checkPermissions('role.list),
    getAllPayments).descriptor({
        name: "List all payment list",
    });

module.exports = router;