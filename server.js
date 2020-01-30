const express = require('express');

// const db = require('./data/dbConfig.js');

const AccountsRouter = require('./accounts/accounts-router.js');

const server = express();

server.use(express.json());

server.use('/api/accounts', AccountsRouter);

server.get('/', (req, res) => {
    res.send('<h3>Web DB Challenge I');
  });

module.exports = server;