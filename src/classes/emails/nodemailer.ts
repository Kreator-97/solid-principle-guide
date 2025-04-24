import nodemailer from "nodemailer";
import { EmailNotifier } from "../../interfaces/notifiers/email";

export class Nodemailer implements EmailNotifier {

  async sendEmail(email: string, message: string): Promise<boolean> {
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for port 465, false for other ports
      auth: {
        user: "maddison53@ethereal.email",
        pass: "jn7jnAPss4f63QBp6D",
      },
    })

    const { rejected } = await transporter.sendMail({
      from: "Fred Foo 👻",
      to: email,
      subject: "Hello ✔",
      text: message,
    })

    if( rejected.length > 0) {
      // Handle the error
      console.error("Error sending email:", rejected);
      return false
    }

    return true
  }
}




