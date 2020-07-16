const express = require('express');

const SpotController = require('./controllers/SpotController');

const routes = express.Router();

routes.get('/api/spots', SpotController.findAll);

module.exports = routes;
