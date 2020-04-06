const express = require('express');

const ContactController = require('./controllers/ContactController');

const connection = require('./database/connection');

const routes = express.Router();

routes.post('/home', ContactController.create);
routes.get('/home', ContactController.index);

module.exports = routes;