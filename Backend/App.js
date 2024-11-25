import express from 'express';
import dotenv from 'dotenv';
import connectDB from "./config/db.js"; 
import { sendPaymentEmail, sendRegistrationEmail } from './Nodemailer/emails.js';
import paymentRouter from "./Routes/PaymentRoutes.js"
import AuthRouter from "./Routes/AuthRoutes.js"



dotenv.config(); // Load environment variables from .env file

const app = express();

// Middleware to parse JSON requests (if needed for POST requests)
app.use(express.json());

// Route to check if server is running
app.get('/', (req, res) => {
    const date = Date.now()
    const readableDate = new Date(date).toLocaleString(); // Convert to readable format

    res.send('Hello World');
    // sendRegistrationEmail("slymawuli3@gmail.com","Sarbah Main","300","John Doe",readableDate)
    sendPaymentEmail("slymawuli3@gmail.com","300","John Doe",readableDate,"JCR Dues","123456789")
});

// Route to initialize Paystack transaction
app.use('/api/payment', paymentRouter);




//User Routes by admin
app.use('/api/user',AuthRouter);











// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    connectDB(); // Connect to database
    
    console.log(`Server running on http://localhost:${PORT}`);
});
