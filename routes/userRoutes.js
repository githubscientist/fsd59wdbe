const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

// public routes
userRouter.post('/', userController.register);
userRouter.post('/login', userController.login);

// protected routes
// define the route for getting all users
userRouter.get('/', auth.verifyToken, userController.getAllUsers);
userRouter.get('/logout', auth.verifyToken, userController.logout);
userRouter.get('/:id', auth.verifyToken, userController.getUserById);

module.exports = userRouter;