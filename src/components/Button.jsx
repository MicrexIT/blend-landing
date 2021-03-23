import * as React from "react";

export function Button({
  link,
  secondary = false,
  small = false,
  label = "button",
  large = false,
}) {
  return (
    <div
    className={`${small ? "small " : ""}${secondary ? "secondary " : ""}${
        large ? "large " : ""
      } btn`}
    >
      <a
        className="p-0 m-0 align-top transform-none no-underline"
        href={link}
        target="_blank"
      >
        <button>{label}</button>
      </a>
    </div>
  );
}
