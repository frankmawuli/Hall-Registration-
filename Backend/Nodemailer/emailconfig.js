import { MailtrapClient } from "mailtrap";

const TOKEN = "ea9984ad84326a50aab90d6913cd27a0";

 export const mailClient = new MailtrapClient({
  token: TOKEN,
});

export const mailSender = {
  email: "hello@demomailtrap.com",
  name: "Mailtrap Test",
};


