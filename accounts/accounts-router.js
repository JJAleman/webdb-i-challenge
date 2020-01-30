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

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try{
        const account = await db('account')
        .where('id', id)
        res.status(200).json({message: `Retrieved account`, account})
    } catch(err){
        res.status(500).json({message: 'Failed to get post'});
    }
});

module.exports = router;