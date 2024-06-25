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
    }
}

module.exports = userController;