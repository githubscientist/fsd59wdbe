const User = require('../models/user');

// define the contoller for the user
const userController = {
    getAllUsers: async (request, response) => {
        try {
            const users = await User.find({}, {_id: 0, password: 0});
            response.status(200).json(users);
        } catch (error) {
            response.status(500).send({ message: error.message });
        }
    },
    register: async (request, response) => {
        try {
            // get the user inputs from the request body
            const { name, email, password } = request.body;

            // create a new user
            const newUser = new User({ name, email, password });

            // save the user
            const savedUser = await newUser.save();

            response.status(201).send({
                message: 'User created successfully',
                user: savedUser
            });
        } catch (error) {
            response.status(500).send({ message: error.message });
        }
    }
}

module.exports = userController;