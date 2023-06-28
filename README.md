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

git clone https://github.com/ajayratha4/NodeJS-Typescript
Navigate to the project directory:

Using docker :-
    cd docker
    docker-compose up --build

cd node-express-ts-prisma-mysql
Install the dependencies:

npm install
Set up the database:

Create a new MySQL database.
Configure the database connection details in the .env file. You can find an example in .env.example.
Run the database migrations:

npx prisma migrate dev
Start the development server:

npm run dev
The server should now be running at http://localhost:8080. You can test the API using tools like Postman or curl.

Project Structure
The project has the following structure:
.
├── src
│   ├── controllers      # Request handlers for routes
│   ├── middlewares      # Custom middleware functions
│   ├── models           # Prisma models and database schema
│   ├── routes           # API route definitions
│   ├── services         # Business logic services
│   ├── utils            # Utility functions
│   ├── app.ts           # Express application configuration
│   ├── server.ts        # Entry point for the server
├── migrations           # Prisma migrations
├── .env.example         # Example environment variables
├── .gitignore           # Git ignore file
├── package.json         # NPM dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── README.md            # Project readme file

Available Scripts
In the project directory, you can run the following commands:

npm install to install all dependencies
npx prisma migrate dev to Create a new migration
npx prisma generate to Generate Prisma client

npm run dev: Starts the development server with automatic restarts on file changes.
npm run build: Compiles TypeScript files into JavaScript.
npm start: Starts the production server (requires running npm run build first).
