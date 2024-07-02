const { update } = require('firebase/database');
const Company = require('../models/company');

const companyController = {
    addCompany: async (request, response) => {
        try {
            // get the user id from the request parameters
            const userId = request.userId;

            // get the company details from the request body
            const { name, location } = request.body;

            // create a new company object
            const newCompany = new Company({
                name,
                location,
                user: userId
            });

            // save the company object to the database
            const savedCompany = await newCompany.save();

            // send the saved company object as a response
            response.status(201).send({
                message: 'Company added successfully',
                company: savedCompany
            });
        } catch (error) {
            response.status(500).send({ message: error.message });
        }
    },

    getAllCompanies: async (request, response) => {
        try {
            // get all companies from the database
            const companies = await Company.find().populate('user', 'name email');

            // send the companies as a response
            response.status(200).send(companies);
        } catch (error) {
            response.status(500).send({ message: error.message });
        }
    },
    getCompany: async (request, response) => {
        try {
            // get the company id from the request parameters
            const companyId = request.params.id;

            // get the company from the database
            const company = await Company.findById(companyId).populate('user', 'name email');

            // send the company as a response
            response.status(200).send(company);
        } catch (error) {
            response.status(500).send({ message: error.message });
        }
    },
    // update a company by id (params)
    updateCompany: async (request, response) => {
        try {
            // get the company id from the request parameters
            const companyId = request.params.id;

            // get the company details from the request body
            const { name, location } = request.body;

            // update the company in the database
            const updatedCompany = await Company.findByIdAndUpdate(companyId, {
                name,
                location
            });

            // send the updated company as a response
            response.status(200).send({
                message: 'Company updated successfully',
                company: updatedCompany
            });
        } catch (error) {
            response.status(500).send({ message: error.message });
        }
    },
    // delete a company by id (params)
    deleteCompany: async (request, response) => {
        try {
            // get the company id from the request parameters
            const companyId = request.params.id;

            // delete the company from the database
            await Company.findByIdAndDelete(companyId);

            // send a success response
            response.status(200).send({ message: 'Company deleted successfully' });
        } catch (error) {
            response.status(500).send({ message: error.message });
        }
    }
}

module.exports = companyController;