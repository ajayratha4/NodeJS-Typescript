# NodeJS-Typescript
This is a project for building a RESTful API using Node.js, Express, TypeScript, Prisma, and MySQL.

Features
Server built with Node.js and Express
Written in TypeScript for better developer productivity
Database integration with Prisma ORM
MySQL as the database
Basic CRUD operations for a sample resource (e.g., users)
JWT-based authentication for protected routes
Error handling and validation using middleware
Logging using Winston
Prerequisites
Make sure you have the following installed on your machine:

Node.js (v14 or higher)
MySQL database
Getting Started
Clone the repository:

bash
Copy code
git clone [https://github.com/your-username/node-express-ts-prisma-mysql.git](https://github.com/ajayratha4/NodeJS-Typescript)
Navigate to the project directory:

bash
Copy code
cd node-express-ts-prisma-mysql
Install the dependencies:

bash
Copy code
npm install
Set up the database:

Create a new MySQL database.
Configure the database connection details in the .env file. You can find an example in .env.example.
Run the database migrations:

bash
Copy code
npx prisma migrate dev
Start the development server:

bash
Copy code
npm run dev
The server should now be running at http://localhost:8080. You can test the API using tools like Postman or curl.

Project Structure
The project has the following structure:

graphql
Copy code
.
├── src
│   ├── controllers      # Request handlers for routes
│   ├── middlewares      # Custom middleware functions
│   ├── models           # Prisma models and database schema
│   ├── routes           # API route definitions
│   ├── services         # Business logic services
│   ├── utils            # Utility functions
│   ├── index.ts         # Entry point for the server
├── prisma               # Prisma migrations and modals
├── .env.example         # Example environment variables
├── .gitignore           # Git ignore file
├── package.json         # NPM dependencies and scripts
├── nodemon.json         # Nodemon configuration
├── .env                 # to Store environment variable
└── README.md            # Project readme file
Available Scripts
In the project directory, you can run the following commands:

npm install to install all dependencies
npx prisma migrate dev to Create a new migration
npx prisma generate to Generate Prisma client

npm run dev: Starts the development server with automatic restarts on file changes.
npm run build: Compiles TypeScript files into JavaScript.
npm start: Starts the production server (requires running npm run build first).
