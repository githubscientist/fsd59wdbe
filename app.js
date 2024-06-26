const express = require('express');
const userRouter = require('./routes/userRoutes');
const companyRouter = require('./routes/companyRoutes');

const app = express();

app.use(express.json());

app.use('/users', userRouter);
app.use('/', companyRouter);

module.exports = app;