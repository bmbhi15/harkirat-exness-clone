import nodemailer from "nodemailer";
import { WELCOME_EMAIL_TEMPLATE } from "./templates";

export const sendEmailNodemailer = async (
  name: string,
  email: string,
  mainContent: string
) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: process.env.NODEMAILER_EMAIL, // your email
      pass: process.env.NODEMAILER_PASSWORD, // the app password you generated, paste without spaces
    },
    secure: true,
    port: 465,
  });

  try {
    const body = WELCOME_EMAIL_TEMPLATE.replace(
      "{{intro}}",
      mainContent
    ).replace("{{name}}", name);
    await transporter.sendMail({
      from: process.env.NODEMAILER_EMAIL, // your email
      to: "anagh.awesome@gmail.com", // the email address you want to send an email to
      subject: "Welcome Aboard", // The title or subject of the email
      html: body, // I like sending my email as html, you can send \
      // emails as html or as plain text
    });

    console.log("Email sent");
  } catch (error) {
    console.log("Error sending email");
  }
};
