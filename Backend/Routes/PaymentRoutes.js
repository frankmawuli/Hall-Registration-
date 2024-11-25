import express from "express";
import { initializePayment, verifyPayment } from "../Controllers/paymentControllers.js";
const router = express()


//Make Payment to Paystack gateway
router.post('/initialize-payment',initializePayment )

//Verify Payment
router.get('/verifyPayment', verifyPayment)


export default router;