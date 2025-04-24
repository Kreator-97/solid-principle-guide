
export interface EmailNotifier {
  sendEmail(email: string, message: string): Promise<boolean>;
}
