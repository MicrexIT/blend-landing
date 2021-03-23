import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Views } from "../views";
import { TextWithIcon } from "../components/TextWithIcon";
import { Button } from "../components/Button";

export const privacy = {
  titleNormal: "Automatisez le sourcing",
  titleBold: "de vos futurs talents",
  description1: "Identification automatique de candidats potentiels",
  description2: "Présentation de profils ultra-qualifiés",
  description3: "Plannification d’entretien en 1 clic",
  callToAction: "Essai 30 jours gratuits",
  link: "https://meetings.hubspot.com/yann35",
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
      Button={
        <Button
          label={privacy.callToAction}
          secondary
          large
          link={privacy.link}
        />
      }
    >
      <TextWithIcon content={privacy.description1} />
      <TextWithIcon content={privacy.description2} />
      <TextWithIcon content={privacy.description3} />
    </Views.Privacy>
  );
}
