// 1. import express module
const express = require('express');

// 2. create express app
const app = express();

// 4. create a route
app.get('/', (request, response) => {
    response.send('Hello World');
});

// 3. run the server
app.listen(3001, () => {
    console.log(`Server is running on http://localhost:3001`);
});