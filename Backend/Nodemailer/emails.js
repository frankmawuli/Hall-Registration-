import {RegistrationEmail,PaymentEmail} from './eamilsTemplate.js'
import { mailClient } from './emailconfig.js';
import { mailSender } from './emailconfig.js';

export const sendRegistrationEmail = async (email,hall,amount,name,date) => {
    const recipient = [{email}]

    try{
        const res = await mailClient.send({
            to: recipient,
            from: mailSender,
            subject: "Hall Registration",
            html: RegistrationEmail.replace('{studentName}',name ).replace('{hallName}',hall).replace('{hallFee}',amount).replace('{registrationDate}', date)
        });
        console.log("Registration Email Sent: ", res);
    }
    catch (err) {
        console.log("Registration Email Error: ", err);
        console.error(err);
    }
}




//Payment email
export const sendPaymentEmail = async (email, amount, name, date, type, transactionId) => {
    const recipient = [{ email }]

    try {
        const res = await mailClient.send({
            to: recipient,
            from: mailSender,
            subject: `Payment Confirmation - ${type}`,
            html: PaymentEmail.replace('{studentName}', name).replace('{paymentAmount}', amount).replace('{paymentDate}', date).replace(`{transactionId}`, transactionId).replace(`{type}`, type)
        });
        console.log("Registration Email Sent: ", res);
    }
    catch (err) {
        console.log("Registration Email Error: ", err);
        console.error(err);
    }
}

