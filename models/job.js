const mongoose = require('mongoose');

// define the schema for a job
const jobSchema = new mongoose.Schema({
    title: String,
    description: String,
    location: String,
    date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['open', 'closed'],
        default: 'open'
    },
    type: {
        type: String,
        enum: ['full-time', 'part-time', 'contract'],
        default: 'full-time'
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    applicants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});

// create the model and export it
module.exports = mongoose.model('Job', jobSchema, 'jobs');