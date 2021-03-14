import React, { useState } from "react";
import { Logo } from "./Logo";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { Menu } from "../components/Menu";

const defaultHorizontalPadding = "px-4 md:px-6 lg:px-16";
const defaultVerticalPadding = "py-2 md:py-3 lg:py-4";
export function NavigationBar({ ...props }) {
  const [headerVisible, setHeaderVisible] = useState({
    transition: "all 200ms ease-in",
  });

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isVisible = currPos.y > prevPos.y;

      const newHeaderVisible = {
        visibility: isVisible ? "visible" : "hidden",
        transition: `all 200ms ${isVisible ? "ease-in" : "ease-out"}`,
        transform: isVisible ? "none" : "translate(0, -100%)",
      };

      if (JSON.stringify(newHeaderVisible) === JSON.stringify(headerVisible))
        return;

      setHeaderVisible(newHeaderVisible);
    },
    [headerVisible]
  );

  return (
    <nav style={{ ...headerVisible }}>
      <Logo />
      <Menu />
    </nav>
  );
}
