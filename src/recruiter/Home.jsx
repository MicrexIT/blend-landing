import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Views } from "../views";

const bannerText = {
  title: "Des profils qualifiés",
  titleBold: "Qui reflètent vos valeurs",
  messages: [
    "Remplissez votre pipeline avec des candidats qualifiés. Pas n’importe quel candidat.",
  ],
  callToAction: "Obtenez votre accès gratuit",
};

export function Home() {
  const {
    recruiterHomeBgSm,
    recruiterHomeBgMd,
    recruiterHomeBgLg,
  } = useStaticQuery(graphql`
    query RecruiterHomeBg {
      recruiterHomeBgSm: file(name: { eq: "bg-home-entreprises" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }

      recruiterHomeBgMd: file(name: { eq: "bg-home-entreprises" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
      recruiterHomeBgLg: file(name: { eq: "bg-home-entreprises" }) {
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
      media: `(min-width: 921px)`,
    },
  ];
  return <Views.Home sources={sources} bannerText={bannerText} />;
}
