const express = require('express');
const userRouter = require('./routes/userRoutes');

const app = express();

app.use(express.json());

app.use('/users', userRouter);

module.exports = app;