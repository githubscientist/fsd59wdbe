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

- [x] User registration
- [x] User login

- [ ] Admin Dashboard

  - [x] Add a Company
  - [x] Update a Company
  - [x] Delete a Company
  - [x] View all Companies
  - [x] View a Company
  - [x] Add a Job
  - [x] Update a Job
  - [x] Delete a Job
  - [x] View all Jobs
  - [x] View a Job
  - [x] View all users
  - [x] View a user - by query & url params
  - [x] Update a user
  - [x] Delete a user
  - [] View all applications

- [ ] User Dashboard
  - [x] View all jobs
  - [x] View a job
  - [x] Apply for a job
  - [x] View all applied jobs
  - [ ] View a applied job
  - [x] View profile
  - [x] Update profile
  - [x] Delete profile
  - [x] logout

## API Endpoints

- [x] POST /api/v1/users/register : Register a user
- [x] POST /api/v1/users/login : Login a user
- [x] GET /api/v1/users : Get all users
- [x] GET /api/v1/users/:id : Get a user
- [x] PUT /api/v1/users/:id : Update a user
- [x] DELETE /api/v1/users/:id : Delete a user
- [x] GET /api/v1/users/profile : Get user profile
- [x] PUT /api/v1/users/profile : Update user profile
- [x] DELETE /api/v1/users/profile : Delete user profile
- [x] GET /api/v1/companies : Get all companies
- [x] GET /api/v1/companies/:id : Get a company
- [x] POST /api/v1/companies : Add a company
- [x] PUT /api/v1/companies/:id : Update a company
- [x] DELETE /api/v1/companies/:id : Delete a company
- [x] GET /api/v1/jobs : Get all jobs
- [x] GET /api/v1/jobs/:id : Get a job
- [x] POST /api/v1/jobs : Add a job
- [x] PUT /api/v1/jobs/:id : Update a job
- [x] DELETE /api/v1/jobs/:id : Delete a job
- [x] GET /api/users/logout : Logout a user
