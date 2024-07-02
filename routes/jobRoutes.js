const express = require('express');
const jobRouter = express.Router();
const auth = require('../middleware/auth');
const jobController = require('../controllers/jobController');

// define the job routes
jobRouter.post('/', auth.verifyToken, auth.isAdmin, jobController.createJob);
jobRouter.get('/', auth.verifyToken, jobController.getJobs);

jobRouter.get('/applied', auth.verifyToken, jobController.getAppliedJobs);
jobRouter.get('/applications', auth.verifyToken, auth.isAdmin, jobController.getApplications);

jobRouter.get('/:id', auth.verifyToken, jobController.getJob);
jobRouter.put('/:id', auth.verifyToken, auth.isAdmin, jobController.updateJob);
jobRouter.delete('/:id', auth.verifyToken, auth.isAdmin, jobController.deleteJob);
jobRouter.post('/:id/apply', auth.verifyToken, jobController.applyJob);

module.exports = jobRouter;