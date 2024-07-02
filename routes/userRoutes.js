const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `./uploads/`)
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
});

const upload = multer({ storage: storage });

// public routes
userRouter.post('/', userController.register);
userRouter.post('/login', userController.login);

// protected routes
// define the route for getting all users
userRouter.get('/', auth.verifyToken, auth.isAdmin, userController.getAllUsers);
userRouter.get('/logout', auth.verifyToken, userController.logout);

userRouter.get('/profile', auth.verifyToken, userController.getProfile);
userRouter.put('/profile', auth.verifyToken, userController.updateProfile);
userRouter.put('/profile/picture', auth.verifyToken, upload.single('profilePicture'), userController.setProfilePicture);

userRouter.get('/:id', auth.verifyToken, userController.getUserById);
userRouter.put('/:id', auth.verifyToken, userController.updateUser);
userRouter.delete('/:id', auth.verifyToken, userController.deleteUser);

module.exports = userRouter;