
import { FC } from "react";

interface Props {
  type: "success" | "error" | "warning";
  message: string;
}

export const Notification: FC<Props> = ({ type, message }) => {
  let style = {};

  if (type === "success") {
    style = { color: "green" };
  } else if (type === "error") {
    style = { color: "red" };
  } else if (type === "warning") {
    style = { color: "orange" };
  }

  return <div style={style}>{message}</div>;
};