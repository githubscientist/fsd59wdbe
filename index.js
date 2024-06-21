const mongoose = require('mongoose');
const app = require('./app');
const { MONGODB_URI } = require('./utils/config');

console.log(`Connecting to MongoDB...`);

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');

        // after connecting to MongoDB, start the server
        app.listen(3001, () => {
            console.log(`Server is running on http://localhost:3001`);
        });
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB', error);
    });