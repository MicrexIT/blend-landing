import React from "react";
import { Helmet } from "react-helmet";
import "tailwindcss/tailwind.css";
import { NavigationBar } from "./NavigationBar";
import { Footer } from "./Footer";

import "@fontsource/open-sans"; // Defaults to weight 400.
import "@fontsource/poppins"; // Defaults to weight 400.

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
