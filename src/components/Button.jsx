import * as React from "react";

export function Button({
  handleClick,
  secondary = false,
  small = false,
  label = "button",
  large = false,
}) {
  return (
    <div
      className={`${small ? "small " : " "}${secondary ? "secondary " : ""}${
        large ? "large " : " "
      }btn`}
    >
      <button>{label}</button>
    </div>
  );
}
