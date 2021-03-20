import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Views } from "../views";
import { TextWithIcon } from "../components/TextWithIcon";
import { Button } from "../components/Button";

export const privacy = {
  titleNormal: "Ne passez plus ",
  titleBold: "des heures à sourcer",
  description1: "Identification automatique des candidats potentiels.",
  description2: "Des profils candidat augmentées, pas juste de CV",
  description3: "Partagez l’opportunité et prenez rendez-vous en 1 click.",
  callToAction: "Commencez maintenant",
};

export function Privacy() {
  const {
    recruiterComputerSm,
    recruiterComputerMd,
    recruiterComputerLg,
  } = useStaticQuery(graphql`
    query RecruiterComputer {
      recruiterComputerSm: file(name: { eq: "computer-entreprises-s" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }

      recruiterComputerMd: file(name: { eq: "computer-entreprises-m" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }

      recruiterComputerLg: file(name: { eq: "computer-entreprises-l" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `);

  const sources = [
    recruiterComputerSm.cloudinary.fluid,
    {
      ...recruiterComputerMd.cloudinary.fluid,
      media: `(min-width: 491px)`,
    },
    {
      ...recruiterComputerLg.cloudinary.fluid,
      media: `(min-width: 1021px)`,
    },
  ];

  return (
    <Views.Privacy
      sources={sources}
      privacy={privacy}
      Button={<Button label={privacy.callToAction} secondary large />}
    >
      <TextWithIcon content={privacy.description1} />
      <TextWithIcon content={privacy.description2} />
      <TextWithIcon content={privacy.description3} />
    </Views.Privacy>
  );
}
