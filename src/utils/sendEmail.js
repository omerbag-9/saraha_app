import nodemailer from 'nodemailer'
import { htmlTemplate } from './htmlTemplate.js';

export const sendEmail = async (email,token)=>{
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth: {
          user: "omerbag2002@gmail.com",
          pass: "mgzsycjhskkndqsy",
        },
      });
    
      const info = await transporter.sendMail({
        from: '"saraha app" <omerbag2002@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "verify your email", // Subject line
        text: "please verify your account", // plain text body
        html: htmlTemplate(token), // html body
      });
      console.log("Message sent: %s", info.messageId);
}

  