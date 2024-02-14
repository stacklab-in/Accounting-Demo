const express = require('express');
const router = express.Router();

const { auth } = require('../middlewares/auth');
const { getAllReceipts} = require('../controllers/records.controllers');

router.post('/list',
    auth,
    //  checkPermissions('role.list),
    getAllReceipts).descriptor({
        name: "List all receipt list",
    });

module.exports = router;