const express = require('express');
const router = express.Router();

const { auth } = require('../middlewares/auth');
const records = require('../controllers/records.controllers');

router.post('/profit-and-loss', auth,
    // checkRole('sales.add'),
    records.profitAndLossStatement).descriptor({
        name: 'Get Profit and loss report',
    });

router.post('/daybook', auth,
    // checkRole('sales.add'),
    records.dayBookDetails).descriptor({
        name: 'Get Day Book report',
    });

module.exports = router;