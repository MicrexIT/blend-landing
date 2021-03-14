import React from "react";
import "tailwindcss/tailwind.css";
import { graphql, useStaticQuery } from "gatsby";
import { NavigationBar } from "./NavigationBar";
import { Footer } from "./Footer";

import "../styles/global.css";

export function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="relative overflow-x-hidden">
      <NavigationBar />
      <main className="overflow-x-hidden">{children}</main>
      <Footer />
    </div>
  );
}
