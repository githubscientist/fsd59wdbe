const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');

// define the route for getting all users
userRouter.get('/', userController.getAllUsers);
userRouter.post('/', userController.register);

module.exports = userRouter;