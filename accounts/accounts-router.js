const express = require('express');

const db = require('../data/dbConfig.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const accounts = await db('accounts');
        console.log(accounts);
        res.status(200).json({message: 'Accounts retrieved'})
    } catch(err){
        res.status(500).json({message: 'Can not /GET Accounts'});
    }
});

module.exports = router;