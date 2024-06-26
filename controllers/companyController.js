const Company = require('../models/company');

const companyController = {
    addCompany: async (request, response) => {
        try {
            // get the user id from the request parameters
            const userId = request.params.userId;

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
    }
}

module.exports = companyController;