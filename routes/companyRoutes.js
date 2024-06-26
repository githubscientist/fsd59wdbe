const express = require('express');
const companyRouter = express.Router();
const companyController = require('../controllers/companyController');

// define the route for adding a company
companyRouter.post('/users/:userId/companies', companyController.addCompany);
companyRouter.get('/companies', companyController.getAllCompanies);

module.exports = companyRouter;