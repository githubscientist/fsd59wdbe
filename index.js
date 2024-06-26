const mongoose = require('mongoose');
const app = require('./app');
const { MONGODB_URI, PORT } = require('./utils/config');

console.log(`Connecting to MongoDB...`);

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');

        // after connecting to MongoDB, start the server
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB', error);
    });