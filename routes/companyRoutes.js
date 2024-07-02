const express = require('express');
const companyRouter = express.Router();
const companyController = require('../controllers/companyController');
const auth = require('../middleware/auth');

// public routes
companyRouter.get('/', auth.verifyToken, companyController.getAllCompanies);

// protected routes
// define the route for adding a company
companyRouter.post('/', auth.verifyToken, auth.isAdmin, companyController.addCompany);
companyRouter.get('/:id', auth.verifyToken, companyController.getCompany);
companyRouter.put('/:id', auth.verifyToken, auth.isAdmin, companyController.updateCompany);
companyRouter.delete('/:id', auth.verifyToken, auth.isAdmin, companyController.deleteCompany);

module.exports = companyRouter;