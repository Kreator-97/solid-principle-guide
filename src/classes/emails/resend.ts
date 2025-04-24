import { EmailNotifier } from "../../interfaces/notifiers/email";
import { Resend } from 'resend';

const resend = new Resend('re_123456789');

export class ResendMailer implements EmailNotifier {
  async sendEmail(email: string, message: string): Promise<boolean> {
    const { error } = await  resend.emails.send({
      from: "",
      to: email,
      subject: "Hello ✔",
      text: message,
    })

    if (error) {
      // Handle the error
      console.error("Error sending email:", error);
      return false;
    }

    return true;
  }
}
