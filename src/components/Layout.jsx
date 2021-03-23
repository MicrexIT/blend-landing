import React from "react";
import { Helmet } from "react-helmet";
import "tailwindcss/tailwind.css";
import { NavigationBar } from "./NavigationBar";
import { Footer } from "./Footer";
import { SEO } from "./SEO";

import "@fontsource/open-sans/index.css";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/poppins/index.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "../styles/global.css";

export function Layout({ location, children }) {
  console.log(location);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blend</title>

        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/19557139.js"
        ></script>
      </Helmet>
      <SEO />
      <NavigationBar location={location} />
      <main className="relative overflow-x-hidden">{children}</main>
      <Footer />
    </>
  );
}
