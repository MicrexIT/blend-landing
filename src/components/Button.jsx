import * as React from "react";

export function Button({
  handleClick,
  secondary = false,
  small = false,
  label = "button",
}) {
  return (
    <div
      className={`${small ? "small " : " "}${
        secondary ? "secondary " : ""
      } btn`}
    >
      <button>{label}</button>
    </div>
  );
}
