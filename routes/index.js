const express = require('express');
const routes  = express.Router();

const auth  = require('./auth');
const users = require('./users');
const items = require('./items');

routes.use('/', auth);
routes.use('/users', users);
routes.use('/items', items);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Ok' });
});

routes.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

module.exports = routes;