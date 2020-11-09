const express = require('express');
const Router = express.Router();

const UserController = require('../controllers/userController');

Router.get('/', (req, res) => {
	res.status(200).json({
		message: "Welcome to MERN API"
	});
});

// users routes
Router.get('/users', UserController.index);
Router.post('/users', UserController.create);
Router.get('/users/:id', UserController.show);
Router.put('/users/:id', UserController.update);
Router.delete('/users/:id', UserController.delete);


module.exports = Router;