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

router.post('/ledgers', auth,
    // checkRole('sales.add'),
    records.ledgers).descriptor({
        name: 'Get Ledger Report',
    });

router.post('/ledger-details', auth,
    // checkRole('sales.add'),
    records.ledgerDetails).descriptor({
        name: 'Get Ledger Details Report',
    });


module.exports = router;