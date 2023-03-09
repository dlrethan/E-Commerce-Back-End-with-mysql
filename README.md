# Ecommerce Back-End

This is a back-end application for an ecommerce website that allows users to create, read, update, and delete products and categories in a database.

## Video Walkthrough

https://youtu.be/5VI2s7w9rQI

## Technologies Used

JavaScript
Node.js
Express.js
Sequelize ORM
MySQL

## Installation

Clone the repository to your local machine.
Install the dependencies by running npm install in your terminal.
Create a MySQL database using the schema provided in the db folder.
Configure the database connection settings in the .env file.
Start the application by running npm start in your terminal.

## Usage

The application provides several RESTful API endpoints for interacting with the database. Here's a list of the available routes:

GET /api/categories: Returns all categories with their associated products.

GET /api/categories/:id: Returns a single category with its associated products.

POST /api/categories: Creates a new category.

PUT /api/categories/:id: Updates an existing category.

DELETE /api/categories/:id: Deletes a category.

GET /api/products: Returns all products with their associated categories.

GET /api/products/:id: Returns a single product with its associated category.

POST /api/products: Creates a new product.

PUT /api/products/:id: Updates an existing product.

DELETE /api/products/:id: Deletes a product.

To use the API endpoints, you can make HTTP requests using a tool like Postman or use them to build a front-end application.

## Learning Experience

While working on this assignment, I learned how to use JavaScript to create a back-end server and how to interact with a database using the Sequelize ORM. I gained experience in setting up database schemas, defining models, and writing queries to perform CRUD operations. Overall, this project helped me to develop my skills in back-end development and database management.
