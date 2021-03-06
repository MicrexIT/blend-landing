import React, { useState } from "react";
import { Logo } from "./Logo";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { Menu } from "../components/Menu";

export function NavigationBar({ location }) {
  const [headerVisible, setHeaderVisible] = useState({
    transition: "all 200ms ease-in",
  });

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isVisible = currPos.y > prevPos.y - 10;

      const newHeaderVisible = {
        visibility: isVisible ? "visible" : "hidden",
        transition: `all 200ms ${isVisible ? "ease-in" : "ease-out"}`,
        transform: isVisible ? "" : "translate(0, -100%)",
      };

      if (JSON.stringify(newHeaderVisible) === JSON.stringify(headerVisible)) {
        return;
      }

      setHeaderVisible(newHeaderVisible);
    },
    [headerVisible]
  );

  return (
    <nav style={{ ...headerVisible }}>
      <Logo />
      <Menu pathName={location.pathName || ""} />
    </nav>
  );
}
