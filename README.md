# Express Todo App with Authentication

This is a simple backend API built with Express.js for a Todo App with authentication using JSON Web Token (JWT). 

## Features

- Get all todo list items for a specific user
- Create a new TODO element with unique ID
- Edit a TODO element
- Delete a TODO element
- Signup feature with hashed password
- Login feature with password comparison

## Technology Stack

- Node.js
- Express.js
- PostgreSQL
- CORS
- UUID
- Bcrypt
- JSON Web Token

## Usage

1. Clone the repository
2. Install dependencies using `npm install`
3. Change Postgres username and password in `db.js` and `docker-compose.yml` files
4. Start Postgres database using `docker-compose up -d`
5. Create database tables using `npm run migrate`
6. Start the server using `npm run start` after you cd into both the client and server directories
7. You can use REST client (like Postman) to test the endpoints.

## Endpoints

- GET /todos/:userEmail - Get all todo list items for a specific user
- POST /todos - Create a new TODO element with unique ID
- PUT /todos/:id - Edit a TODO element
- DELETE /todos/:id - Delete a TODO element
- POST /signup - Signup feature with hashed password
- POST /login - Login feature with password comparison

