
export interface SMSNotifier {
  sendSMS(phone: string, message: string): Promise<boolean>
}
