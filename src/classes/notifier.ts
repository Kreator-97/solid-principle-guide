import { EmailNotifier } from "../interfaces/notifiers/email";
import { PushNotifier } from "../interfaces/notifiers/push";
import { SMSNotifier } from "../interfaces/notifiers/sms";

export class Notifier implements SMSNotifier, EmailNotifier, PushNotifier {
  async sendEmail(email: string, message: string): Promise<boolean> {
    console.log(`Sending email to ${email}: ${message}`);
    return true
  }

  async sendSMS(phoneNumber: string, message: string): Promise<boolean> {
    console.log(`Sending SMS to ${phoneNumber}: ${message}`);
    return true
  }

  async sendPushNotification(deviceId: string, message: string): Promise<boolean> {
    console.log(`Sending push notification to ${deviceId}: ${message}`);

    return true
  }
}

export class Mailer implements EmailNotifier {
  async sendEmail(email: string, message: string): Promise<boolean> {
    console.log(`Sending email to ${email}: ${message}`);
    return true
  }
}
