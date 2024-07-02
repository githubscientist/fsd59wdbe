const express = require('express');
const userRouter = require('./routes/userRoutes');
const companyRouter = require('./routes/companyRoutes');
const jobRouter = require('./routes/jobRoutes');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// parse the cookies of the request
app.use(cookieParser());

// enable CORS
app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true
    }
));

app.use('/uploads', express.static('uploads'));

// app.use(express.urlencoded({ extended: true }));

// app.use((request, response, next) => {
//     response.header('Access-Control-Allow-Origin', 'http://localhost:5173');
//     response.header('Access-Control-Allow-Credentials', true);
//     response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// });

// log requests
app.use(morgan('dev'));

// to parse the body of the request
app.use(express.json());

app.use('/users', userRouter);
app.use('/companies', companyRouter);
app.use('/jobs', jobRouter);

module.exports = app;