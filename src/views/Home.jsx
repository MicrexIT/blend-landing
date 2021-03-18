
import React from "react";
import BackgroundImage from "gatsby-background-image-es5";
import { TalentHomeIphone } from "../components/TalentHomeIphone";
import { Button } from "../components/Button";
import { BackgroundGrandientBand } from "../components/BackgroundGradientBrand";


export function Home({bannerText, sources }) {
  return (
    <BackgroundImage fluid={sources} Tag="section" className="home bg-bottom">
      <BackgroundGrandientBand />
      <div className="message relative z-20">
        <h1>
          {bannerText.title}
          <br />
          <span>{bannerText.titleBold}</span>
        </h1>

        <p className="text-white sm:text-sm md:text-base lg:text-lg w-367 md:w-500 lg:w-550">
          {bannerText.messages.map((m) => {
            return <span key={m}>{`${m} `} </span>;
          })}
        </p>
        <Button label={bannerText.callToAction} />
      </div>
      <TalentHomeIphone />
    </BackgroundImage>
  );
}
