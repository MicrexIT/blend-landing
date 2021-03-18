import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Views } from "../views";

export const privacy = {
  titleNormal: "Ne passez plus ",
  titleBold: "des heures à sourcer",
  description1: "Identification automatique des candidats potentiels.",
  description2: "Des profils candidat augmentées, pas juste de CV",
  description3: "Partagez l’opportunité et prenez rendez-vous en 1 click.",
  callToAction: "Obtenez votre accès gratuit",
};

export function Privacy({ props }) {
  const { recruiterComputer } = useStaticQuery(graphql`
    query RecruiterComputer {
      recruiterComputer: file(name: { eq: "mockupCV_entreprises" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `);

  const sources = [recruiterComputer.cloudinary.fluid];

  return <Views.Privacy sources={sources} privacy={privacy} />;
}
