
import { FC } from "react";

type NotificationType = "success" | "error" | "warning" | "info" | 'default' | 'custom' | 'brand';

interface Props {
  type: NotificationType
  message: string
}

const notificationStyles: Record<NotificationType, { color: string }> = {
  success: { color: "green" },
  error: { color: "red" },
  warning: { color: "orange" },
  info: { color: "blue" },
  custom: { color: "purple" },
  brand: { color: "pink" },
  default: { color: "black" },
}

export const Notification: FC<Props> = ({ type, message }) => {
  const style = notificationStyles[type] || notificationStyles.default;

  return <div style={style}>{message}</div>;
};