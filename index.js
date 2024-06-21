const mongoose = require('mongoose');
const app = require('./app');

console.log(`Connecting to MongoDB...`);

mongoose.connect(`mongodb+srv://guvi:Guvi2023@atlascluster.nzeb00e.mongodb.net/`)
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