
export interface INotifier {
  sendEmail(email: string, message: string): void
  sendSMS(phoneNumber: string, message: string): void
  sendPushNotification(deviceId: string, message: string): void
}

export class Notifier implements INotifier {

  sendEmail(email: string, message: string): void {
    console.log(`Sending email to ${email}: ${message}`)
  }

  sendSMS(phoneNumber: string, message: string): void {
    console.log(`Sending SMS to ${phoneNumber}: ${message}`)
  }

  sendPushNotification(deviceId: string, message: string): void {
    console.log(`Sending push notification to ${deviceId}: ${message}`)
  }
}
