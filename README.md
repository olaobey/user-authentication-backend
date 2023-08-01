# **RESTful API with User Authentication**

## **Description**

This project involves building a RESTful API that provides user authentication functionalities for a user management system. Users can register, log in, and access protected routes. The API uses Node.js and MongoDB to store user data and authentication information.

## **Requirements**

1. ### **User Registration**

Users can register by providing a unique username and password. Upon successful registration, a new user entry will be created in the database.

2. ### **User Login**

Registered users can log in using their credentials (username and password). Upon successful login, the API will provide an authentication token that the user can use for subsequent protected route requests.

3. ### **Authentication Middleware**

Middleware was implemented to authenticate requests to protected routes. The middleware will verify the provided authentication token and grant access to protected resources only for authenticated users.

4. ### **Protected Route - '/dashboard'**

A protected route "/dashboard" was created, which can only be accessed by authenticated users. When accessed, this route will return a simple message like "Welcome to your dashboard, [username]!".

5. ### **Database - MongoDB**

MongoDB, Nosql was used to store user data and authentication information securely. User details, such as username and hashed passwords, will be stored in the database.

6. ### **Error Handling**

Proper error handling was implemented, and informative error messages will be provided in case of issues, such as invalid credentials or database errors. The API will respond with appropriate status codes and error details.

## **Features**

- User authentication using JWT (JSON Web Tokens)
- Authorization to ensure user can only manage their protected dashboard route
- MongoDB for storing and retrieving user's data 
- Error handling with appropriate error messages and status codes
- Security measures against common threats like  XSS, CSRF attacks, NoSQL query injection, and parameter polution

## **Getting Started**

### **Prerequisites**

Before you can run the API, you will need to have the following installed:

- Node.js(v14 or later)

- Mongodb atlas

### **Installing**

Clone the repository to your local machine.

In the root directory, create a .env file and add the
following environment variables:

1. Clone the repository to your local machine.
2. Install the required dependencies with npm install
3. In the root directory, create a **`.env`** file based on the **`.env.example`** file, and update the values as needed with the following variables

- MONGO_DB= **`mongodb url`**
- PORT= **`specified number`**
- JWT_SECRET= **`jwt secret`**
- NODE_ENV= **`stage of the project`**

4. Run **`npm install`** to install the required packages.
5. The API server will start running on http://localhost:5000. You can now send HTTP requests to the API endpoints.

## **Running**

To start the API, **`run npm start dev`**.
## **API Endpoints**

## **Base_Url**

[BASE_URL](https://user-authentication-backend-5vef.onrender.com)

### **Authentication**

- POST /api/v1/auth/register: `Register a new user.`
- POST /api/v1/auth/login: `Log in and generate a JWT token.`

### **Dashboard**

- GET /api/v1/home/dashboard: `Get to a dashboard.`

## **Built With**

- bcrypt
- express
- express-validator
- jsonwebtoken
- mongoose
- helmet
- morgan
- path
- winston
- cors
- dotenv
- cookie-parser

### **Devdependency**

- nodemon

## **Credits**

The Project Name was created by **`Ajeigbe Olaoluwa Samuel`**.

## **Authors**

The author of the project is **`Ajeigbe Olaoluwa Samuel`**.

## **License**

This project is licensed under the MIT License
