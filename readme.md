# Backend Application

## Description

This is a backend application that provides a RESTful API examples. The application is built using the following technologies:

- Node.js
- Express.js
- MongoDB
- Mongoose

### Steps to setup the application:

1. Create an empty directory
2. Generate a package.json file by running `npm init -y` or `npm init`
3. Install the required dependencies:
   - `npm install express`
4. Create an entry point file (e.g. `index.js`) in the root directory
5. In the index.js file:
   - Import express
   - Create an express app
   - Define a basic root route for the app inside index.js after creating the express app
   ```javascript
   app.get("/", (req, res) => {
     res.send("Hello World");
   });
   ```
   - listen for incoming http requests on a specific port
6. Run the application by running `node index.js`

### Enable git version control

1. Initialize a git repository by running `git init`
2. Create a `.gitignore` file and add the following entries:
   ```
   node_modules/
   .DS_Store
   package-lock.json
   ```
3. Rename the branch to `main` by running `git branch -M main`
4. Add the changes to the staging area by running `git add .`
5. Commit the changes by running `git commit -m "Initial commit"`
6. Create a new repository on GitHub and copy the repository URL
7. Add the remote repository in the vscode terminal by running `git remote add origin <repository-url>`
8. Push the changes to the remote repository by running `git push -u origin main`

### Create a README.md file

1. Create a README.md file in the root directory
2. Add a description of the application

### Enable nodemon for automatic server restarts

1. Install nodemon as a development dependency by running `npm install --save-dev nodemon`
2. Add a start script in the package.json file
   ```json
   "scripts": {
     "start": "node index.js",
     "dev": "nodemon index.js"
   }
   ```
3. Run the application in development mode by running `npm run dev`

## Application

Job Portal System

## Features

- [ ] User registration
- [ ] User login

- [ ] Admin Dashboard

  - [ ] Add a Company
  - [ ] Update a Company
  - [ ] Delete a Company
  - [ ] View all Companies
  - [ ] View a Company
  - [ ] Add a Job
  - [ ] Update a Job
  - [ ] Delete a Job
  - [ ] View all Jobs
  - [ ] View a Job
  - [ ] View all users
  - [ ] View a user
  - [ ] Update a user
  - [ ] Delete a user
  - [ ] View all applications

- [ ] User Dashboard
  - [ ] View all jobs
  - [ ] View a job
  - [ ] Apply for a job
  - [ ] View all applied jobs
  - [ ] View a applied job
  - [ ] View profile
  - [ ] Update profile
  - [ ] Delete profile
  - [ ] logout

## API Endpoints

- [ ] POST /api/v1/users/register : Register a user
- [ ] POST /api/v1/users/login : Login a user
- [ ] GET /api/v1/users : Get all users
- [ ] GET /api/v1/users/:id : Get a user
- [ ] PUT /api/v1/users/:id : Update a user
- [ ] DELETE /api/v1/users/:id : Delete a user
- [ ] GET /api/v1/users/profile : Get user profile
- [ ] PUT /api/v1/users/profile : Update user profile
- [ ] DELETE /api/v1/users/profile : Delete user profile
- [ ] GET /api/v1/companies : Get all companies
- [ ] GET /api/v1/companies/:id : Get a company
- [ ] POST /api/v1/companies : Add a company
- [ ] PUT /api/v1/companies/:id : Update a company
- [ ] DELETE /api/v1/companies/:id : Delete a company
- [ ] GET /api/v1/jobs : Get all jobs
- [ ] GET /api/v1/jobs/:id : Get a job
- [ ] POST /api/v1/jobs : Add a job
- [ ] PUT /api/v1/jobs/:id : Update a job
- [ ] DELETE /api/v1/jobs/:id : Delete a job
- [ ] GET /api/v1/applications : Get all applications
- [ ] GET /api/v1/applications/:id : Get an application
- [ ] POST /api/v1/applications : Add an application
- [ ] GET /api/users/logout : Logout a user
