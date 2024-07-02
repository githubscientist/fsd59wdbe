const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: String,
    location: String,
    date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    jobs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job'
    }]
});

module.exports = mongoose.model('Company', companySchema, 'companies');