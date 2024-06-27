const express = require('express');
const userRouter = require('./routes/userRoutes');
const companyRouter = require('./routes/companyRoutes');
const cookieParser = require('cookie-parser');

const app = express();

// parse the cookies of the request
app.use(cookieParser());

// to parse the body of the request
app.use(express.json());

app.use('/users', userRouter);
app.use('/', companyRouter);

module.exports = app;