import React from "react";
import { Helmet } from "react-helmet";
import "tailwindcss/tailwind.css";
import { NavigationBar } from "./NavigationBar";
import { Footer } from "./Footer";

import "@fontsource/open-sans/index.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/poppins/index.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "../styles/global.css";

export function Layout({ children }) {
  return (
    <div className="relative overflow-x-hidden">
      <Helmet>
        <meta charSet="utf-8" />
        <title>blend</title>
      </Helmet>
      <NavigationBar />
      <main className="overflow-x-hidden">{children}</main>
      <Footer />
    </div>
  );
}
