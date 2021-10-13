const router = require('express').Router();
require('../database/db');
const portfolio = require('./portfolio');

router.get('/', (req,res) => {
    res.json({
        success: false,
        message: 'não chame /api pois não há informações de servidor'
    });
});

router.use('/portfolio', portfolio);

module.exports = router;