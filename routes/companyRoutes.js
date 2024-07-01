const express = require('express');
const companyRouter = express.Router();
const companyController = require('../controllers/companyController');
const auth = require('../middleware/auth');

// public routes
companyRouter.get('/', companyController.getAllCompanies);

// protected routes
// define the route for adding a company
companyRouter.post('/', auth.verifyToken, auth.isAdmin, companyController.addCompany);

module.exports = companyRouter;