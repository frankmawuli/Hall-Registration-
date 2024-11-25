import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();


export const  initializePayment = async (req, res) => {
    try {
        const { email, amount } = req.body; // Expect email and amount from request body

        const response = await axios.post(
            'https://api.paystack.co/transaction/initialize',
            {
                email: email,
                amount: amount * 100, // amount in pesewas
                currency: 'GHS',
                channels: ['card', 'mobile_money']
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        res.status(200).json(response.data); // Send the response back to the client
    } catch (error) {
        console.error(error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Payment initialization failed' });
    }
}

//Verify payment endpoint
export const verifyPayment = async(req, res) => {
    const KEY = process.env.PAYSTACK_SECRET_KEY;

    const { reference } = req.body;

    if (!reference) {
        return res.status(400).json({ success: false, message: 'Transaction reference is required.' });
    }

    try {
        const response = await axios.get(`https://api.paystack.co/transaction/verify/${reference}`, {
            headers: {
                Authorization: `Bearer ${KEY}`,
            },
        });

        const transaction = response.data;

        if (transaction.data.status === 'success') {
            // Payment was successful
            return res.status(200).json({
                success: true,
                message: 'Payment verified successfully.',
                data: transaction.data,
            });
        } else {
            // Payment failed or is incomplete 
            return res.status(400).json({
                success: false,
                message: 'Payment verification failed.',
                data: transaction.data,
            });
        }
    } catch (error) {
        console.error('Error verifying payment:', error.message);
        return res.status(500).json({
            success: false,
            message: 'An error occurred while verifying payment.',
        });
    }
};
