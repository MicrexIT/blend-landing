import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Views } from "../views";
import { RecruiterHomePicture } from "../components/RecruiterHomePicure";

const bannerText = {
  title: "Des profils qualifiés",
  titleBold: "Qui reflètent vos valeurs",
  messages: ["Trouvez le bon candidat en un rien de temps"],
  callToAction: "Essai 30 jours gratuits",
};

export function Home() {
  const {
    recruiterHomeBgSm,
    recruiterHomeBgMd,
    recruiterHomeBgLg,
  } = useStaticQuery(graphql`
    query RecruiterHomeBg {
      recruiterHomeBgSm: file(name: { eq: "bg-entreprises-home-small" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }

      recruiterHomeBgMd: file(name: { eq: "bg-entreprises-home-md" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
      recruiterHomeBgLg: file(name: { eq: "bg-entreprises-home-lg" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `);

  const sources = [
    recruiterHomeBgSm.cloudinary.fluid,
    {
      ...recruiterHomeBgMd.cloudinary.fluid,
      media: `(min-width: 491px)`,
    },
    {
      ...recruiterHomeBgLg.cloudinary.fluid,
      media: `(min-width: 1021px)`,
    },
  ];
  return (
    <Views.Home
      sources={sources}
      bannerText={bannerText}
      messages={
        <p className="text-white sm:text-sm md:text-base lg:text-lg w-367 md:w-500 lg:w-550">
          {bannerText.messages[0]}
        </p>
      }
      recruiter={true}
    >
      <RecruiterHomePicture />
    </Views.Home>
  );
}
