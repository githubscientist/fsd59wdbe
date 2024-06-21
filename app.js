const express = require('express');

const app = express();

app.use(express.json());

// define the routes

module.exports = app;