const User = require('../models/user');
const bcrypt = require('bcrypt');

// define the contoller for the user
const userController = {
    getAllUsers: async (request, response) => {
        try {
            const { email } = request.query;

            if (email) {
                // find the user by email
                const user = await User.findOne({ email });

                if (!user) {
                    return response.status(404).send({ message: 'User not found' });
                }

                return response.status(200).json(user);
            }

            // if no query parameters are provided, return all users
            const users = await User.find();
            response.status(200).json(users);
        } catch (error) {
            response.status(500).send({ message: error.message });
        }
    },
    register: async (request, response) => {
        try {
            // get the user inputs from the request body
            const { name, email, password } = request.body;

            // check if the user already exists in the database with same email
            const user = await User.findOne({ email });

            // if the user exists, return an error response
            if (user) {
                return response.status(400).send({ message: 'User already exists' });
            }

            // hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // create a new user
            const newUser = new User({ name, email, password: hashedPassword });

            // save the user
            const savedUser = await newUser.save();

            response.status(201).send({
                message: 'User created successfully',
                user: savedUser
            });
        } catch (error) {
            response.status(500).send({ message: error.message });
        }
    },
    getUserById: async (request, response) => {
        try {
            // get the user id from the request parameters
            const userId = request.params.id;

            // find the user by id
            const user = await User.findById(userId);

            if (!user) {
                return response.status(404).send({ message: 'User not found' });
            }

            response.status(200).json(user);
        } catch (error) {
            response.status(500).send({ message: error.message });
        }
    }
}

module.exports = userController;