import React from "react";
import BackgroundImage from "gatsby-background-image-es5";
import { useStaticQuery, graphql } from "gatsby";
import { TalentHomeIphone } from "../components/TalentHomeIphone";
import { Button } from "../components/Button";

const bannerText = {
  titleBold: "Trouvez le job",
  title: "Qui vous correspond",
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
      talentHomeBgSm: file(name: { eq: "bg-home" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }

      talentHomeBgMd: file(name: { eq: "bg-home-md" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
      talentHomeBgLg: file(name: { eq: "bg-home-lg" }) {
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
      media: `(min-width: 1101px)`,
    },
  ];
  return (
    <BackgroundImage fluid={sources} Tag="section" className="home relative">
      <div className="message">
        <h1>{bannerText.titleBold}</h1>
        <h1 className="">{bannerText.title}</h1>
        {bannerText.messages.map((m) => {
          return (
            <p className="text-white sm:text-sm md:text-base lg:text-lg">{m}</p>
          );
        })}
        <Button label={bannerText.callToAction} />
      </div>
      <TalentHomeIphone />
    </BackgroundImage>
  );
}
