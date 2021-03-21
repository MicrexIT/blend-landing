import React from "react";
import BackgroundImage from "gatsby-background-image-es5";
import { Button } from "../components/Button";
import { BackgroundGrandientPurpleDark } from "../components/BackgroundGradientBrand";

export function Home({ bannerText, sources, messages, recruiter, children }) {
  return (
    <BackgroundImage
      fluid={sources}
      Tag="section"
      className={`home bg-bottom ${recruiter ? "recruiter" : ""}`}
    >
      <BackgroundGrandientPurpleDark />
      <div className="message relative z-20">
        <h1>
          {bannerText.title}
          <br />
          <span>{bannerText.titleBold}</span>
        </h1>

        {messages}
        <Button label={bannerText.callToAction} large={recruiter} />
      </div>
      {children}
    </BackgroundImage>
  );
}
