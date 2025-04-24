
export interface PushNotifier {
  sendPushNotification(device: string, message: string): Promise<boolean>;
}
