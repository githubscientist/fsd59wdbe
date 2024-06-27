const express = require('express');
const companyRouter = express.Router();
const companyController = require('../controllers/companyController');
const auth = require('../middleware/auth');

// public routes
companyRouter.get('/companies', companyController.getAllCompanies);

// protected routes
// define the route for adding a company
companyRouter.post('/users/:userId/companies', auth.verifyToken, companyController.addCompany);

module.exports = companyRouter;