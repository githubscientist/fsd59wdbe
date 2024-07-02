const Job = require('../models/job');
const Company = require('../models/company');

const jobController = {
    createJob: async (req, res) => {
        try {
            // get the job data from the request body
            const { title, description, location, company } = req.body;

            // get the user ID from the request object
            const userId = req.userId;

            // create a new job with the job data
            const newJob = new Job({
                title,
                description,
                location,
                company,
                createdBy: userId
            });

            // save the job to the database
            const savedJob = await newJob.save();

            // push the job id to the company's jobs array
            await Company.findByIdAndUpdate(company, {
                $push: { jobs: savedJob._id }
            });

            // send the saved job in the response
            res.status(201).json({ message: 'Job created successfully', job: savedJob });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getJobs: async (req, res) => {
        try {
            // get all jobs from the database
            const jobs = await Job.find().populate('company').exec();

            // send the jobs in the response
            res.status(200).json(jobs);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    // get a single job by id (params)
    getJob: async (req, res) => {
        try {
            // get the job id from the request parameters
            const { id } = req.params;

            // get the job from the database
            const job = await Job.findById(id).populate('company').exec();

            // send the job in the response
            res.status(200).json(job);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    // update a job by id (params)
    updateJob: async (req, res) => {
        try {
            // get the job id and updated job data from the request parameters and body
            const { id } = req.params;
            const { title, description, location } = req.body;

            // update the job in the database
            const updatedJob = await Job.findByIdAndUpdate(id, {
                title,
                description,
                location
            }, { new: true });

            // send the updated job in the response
            res.status(200).json({ message: 'Job updated successfully', job: updatedJob });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    // delete a job by id (params)
    deleteJob: async (req, res) => {
        try {
            // get the job id from the request parameters
            const { id } = req.params;

            // delete the job from the database
            await Job.findByIdAndDelete(id);

            // send a success message in the response
            res.status(200).json({ message: 'Job deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    // apply for a job by id (params)
    applyJob: async (req, res) => {
        try {
            // get the job id from the request parameters
            const { id } = req.params;

            // get the user ID from the request object
            const userId = req.userId;

            // get the job from the database
            const job = await Job.findById(id);

            // check if the user has already applied for the job
            if (job.applicants.includes(userId)) {
                return res.status(200).json({ message: 'You have already applied for this job' });
            }

            // push the user id to the job's applicants array
            const updatedJob = await Job.findByIdAndUpdate(id, {
                $push: { applicants: userId }
            }, { new: true });

            // send the updated job in the response
            res.status(200).json({ message: 'Job applied successfully', job: updatedJob });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    // get applied jobs by user logged in
    getAppliedJobs: async (req, res) => {
        try {
            // get the user ID from the request object
            const userId = req.userId;

            // get all jobs where the user ID is in the applicants array
            const jobs = await Job.find({ applicants: userId }).populate('company').exec();

            // send the jobs in the response
            res.status(200).json(jobs);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    // get all the applications (admin only)
    getApplications: async (req, res) => {
        try {
            // get all jobs where the applicants array is not empty
            const jobs = await Job.find({ applicants: { $exists: true, $not: { $size: 0 } } }).populate('company').populate('applicants').lean().exec();

            // send the jobs in the response
            res.status(200).json(jobs);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = jobController;