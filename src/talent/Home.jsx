import React from "react";
import BackgroundImage from "gatsby-background-image-es5";
import { useStaticQuery, graphql } from "gatsby";
import { TalentHomeIphone } from "../components/TalentHomeIphone";
import { Button } from "../components/Button";

const bannerText = {
  title: "Trouvez le job",
  titleBold: "Qui vous correspond",
  messages: [
    "Vous êtes plus que juste un CV. Vous méritez mieux q’une jungle.",
    "Notre mission est de trouver pour vous les meilleures opportunités.",
  ],
  callToAction: "commencer",
};

export function Home() {
  const {
    talentHomeBgSm,
    talentHomeBgMd,
    talentHomeBgLg,
  } = useStaticQuery(graphql`
    query TalentHomeBg {
      talentHomeBgSm: file(name: { eq: "bg-talents-s" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }

      talentHomeBgMd: file(name: { eq: "bg-talents-m" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
      talentHomeBgLg: file(name: { eq: "bg-talents-l" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `);

  const sources = [
    talentHomeBgSm.cloudinary.fluid,
    {
      ...talentHomeBgMd.cloudinary.fluid,
      media: `(min-width: 491px)`,
    },
    {
      ...talentHomeBgLg.cloudinary.fluid,
      media: `(min-width: 921px)`,
    },
  ];
  return (
    <BackgroundImage
      fluid={sources}
      Tag="section"
      className="home relative bg-bottom"
    >
      <div className="message">
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
