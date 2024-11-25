# UGEL Backend Documentation

## Overview
This project is a backend application for managing user authentication, payments, and email notifications. It uses Express.js for the server, Mongoose for MongoDB interactions, and Mailtrap for sending emails.

## Project Structure
.env
App.js
config/
    db.js
Controllers/
    paymentControllers.js
Models/
    Authmodel.js
Nodemailer/
    eamilsTemplate.js
    emailconfig.js
    emails.js
package.json
Routes/
    AuthRoutes.js
    PaymentRoutes.js


### Configuration Files
- **.env**: Contains environment variables such as `PAYSTACK_SECRET_KEY`, `PORT`, and `MONGO_URI`.

### Main Application File
- **App.js**: The main entry point of the application. It sets up the Express server, connects to the MongoDB database, and defines routes.

### Configuration
- **config/db.js**: Contains the MongoDB connection logic using Mongoose.

### Controllers
- **Controllers/paymentControllers.js**: Contains functions to initialize and verify payments using Paystack.

### Models
- **Models/Authmodel.js**: Defines the Mongoose schema for the User model, including fields for user details, payments, and hall registration.

### Nodemailer
- **Nodemailer/emailconfig.js**: Configures the Mailtrap client for sending emails.
- **Nodemailer/emails.js**: Contains functions to send registration and payment confirmation emails.
- **Nodemailer/eamilsTemplate.js**: Contains HTML templates for registration and payment confirmation emails.

### Routes
- **Routes/AuthRoutes.js**: Defines routes for user authentication (register, login, logout, delete, update, find).
- **Routes/PaymentRoutes.js**: Defines routes for initializing and verifying payments.

### package.json
- **package.json**: Lists the project's dependencies and scripts.

## Environment Variables
- `PAYSTACK_SECRET_KEY`: Secret key for Paystack API.
- `PORT`: Port number for the server.
- `MONGO_URI`: MongoDB connection URI.

## Setting Up the Project
1. Clone the repository.
2. Install dependencies:
    ```sh
    npm install
    ```
3. Create a `.env` file in the root directory and add the required environment variables.
4. Start the server:
    ```sh
    npm start
    ```

## API Endpoints

### User Authentication
- **POST /api/user/register**: Register a new user.
- **POST /api/user/login**: Login a user.
- **POST /api/user/logout**: Logout a user.
- **DELETE /api/user/delete**: Delete a user.
- **PUT /api/user/update**: Update a user.
- **GET /api/user/find**: Find a user.

### Payment
- **POST /api/payment/initialize-payment**: Initialize a payment using Paystack.
- **GET /api/payment/verifyPayment**: Verify a payment using Paystack.

## Email Notifications
- **sendRegistrationEmail**: Sends a registration email to the user.
- **sendPaymentEmail**: Sends a payment confirmation email to the user.

## Database
- MongoDB is used as the database, and Mongoose is used for object data modeling (ODM).

## Dependencies
- Express: Web framework for Node.js.
- Mongoose: MongoDB object modeling tool.
- Axios: Promise-based HTTP client.
- Dotenv: Loads environment variables from a `.env` file.
- Mailtrap: Email testing tool.
- Nodemailer: Module for sending emails.
- Paystack: Payment gateway integration.

## Running the Project
To run the project, use the following command:
```sh
npm start