#  Task Management API

This is my first RESTful API project built with Node.js, Express, and SQLite. It allows users to create, read, update, and delete tasks with persistent data storage. The project was developed as part of my learning journey and serves as a portfolio example of backend development.

---

##  Features

- Full CRUD operations
- SQLite database integration
- Modular code structure (controllers, models, routes)
- Tested using Postman

---

##  Technologies Used

- Node.js
- Express
- SQLite
- Knex.js
- Postman

---

##  Installation

```bash
# Clone the repository
git clone https://github.com/GerolamoGG/task-api-node.git
cd task-api-node

# Install dependencies
npm install

# Create the database and table
node src/database/init.js

# Start the server
npm run dev

Server will run at: http://localhost:3000
```
## API Endpoints

*Create a task*

POST /api/tasks

{
  "title": "Learn Node.js",
  "description": "Build a CRUD API"
}
-----------------------------------
*Get all tasks*

GET /api/tasks
-----------------------------------
*Get a task by ID*

GET /api/tasks/:id
-----------------------------------
*Update a task*

## PUT /api/tasks/:id

{
  "completed": true
}
-----------------------------------
*Delete a task*

DELETE /api/tasks/:id
-----------------------------------

## What I Learned

How to build a RESTful API with Express

How to use SQLite and Knex for data persistence

How to organize backend code using MVC principles

How to test endpoints using Postman

How to handle errors and validate input

## Next Steps

Add fields like dueDate and priority

Implement user authentication

Build a frontend interface (React or HTML)

Deploy the API using Render or Railway



This project is licensed under the MIT License.
