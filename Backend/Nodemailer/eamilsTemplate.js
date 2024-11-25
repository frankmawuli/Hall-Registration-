


export const RegistrationEmail =`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Hall Registration</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f9;
      margin: 0;
      padding: 0;
    }
    .container {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      background-color: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    h1 {
      color: #4CAF50;
    }
    p {
      font-size: 16px;
      line-height: 1.5;
      color: #333;
    }
    .details {
      background-color: #f9f9f9;
      padding: 15px;
      border-radius: 8px;
      margin-top: 20px;
    }
    .footer {
      text-align: center;
      margin-top: 30px;
      font-size: 14px;
      color: #777;
    }
    .btn {
      background-color: #4CAF50;
      color: #fff;
      padding: 12px 25px;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
      display: inline-block;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Welcome, {{studentName}}!</h1>
    <p>Thank you for registering for a hall. We're excited to have you as a part of our campus community.</p>

    <p>Here are the details of your hall registration:</p>

    <div class="details">
      <p><strong>Hall Name:</strong> {{hallName}}</p>
      <p><strong>Registration Fee:</strong> GHS {{hallFee}}</p>
      <p><strong>Registration Date:</strong> {{registrationDate}}</p>
    </div>

    <p>If you have any questions or need assistance, feel free to contact our support team.</p>

    <a href="mailto:support@yourcampus.com" class="btn">Contact Support</a>

    <div class="footer">
      <p>&copy; {{currentYear}} Your Campus. All rights reserved.</p>
    </div>
  </div>
</body>
</html>

`

export const PaymentEmail = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Payment Confirmation</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f9;
      margin: 0;
      padding: 0;
    }
    .container {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      background-color: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    h1 {
      color: #4CAF50;
    }
    p {
      font-size: 16px;
      line-height: 1.5;
      color: #333;
    }
    .details {
      background-color: #f9f9f9;
      padding: 15px;
      border-radius: 8px;
      margin-top: 20px;
    }
    .footer {
      text-align: center;
      margin-top: 30px;
      font-size: 14px;
      color: #777;
    }
    .btn {
      background-color: #4CAF50;
      color: #fff;
      padding: 12px 25px;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
      display: inline-block;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Payment Confirmation</h1>
    <p>Dear {{studentName}},</p>

    <p>We are happy to confirm that your payment has been successfully processed.</p>

    <p>Here are the details of your payment:</p>

    <div class="details">
      <p><strong>Payment Amount:</strong> GHS {{paymentAmount}}</p>
       <p><strong>Payment Type:</strong>  {{type}}</p>
      <p><strong>Payment Date:</strong> {{paymentDate}}</p>
      <p><strong>Transaction ID:</strong> {{transactionId}}</p>
    </div>

    <p>Thank you for completing your hall registration payment. Your registration is now confirmed!</p>

    <p>If you have any questions or need further assistance, please don't hesitate to contact us.</p>

    <a href="mailto:support@yourcampus.com" class="btn">Contact Support</a>

    <div class="footer">
      <p>&copy; {{currentYear}} Your Campus. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`