const express = require('express');
const routes = express.Router();

const userController = require('./controllers/UserController')
const productController = require('./controllers/productController')

routes.get('/users', userController.index);
routes.post('/users', userController.create);

routes.get('/product', productController.index);
routes.post('/product', productController.create);
routes.put('/product/:id', productController.update);
routes.delete('/product/:id', productController.delete);

module.exports = routes;