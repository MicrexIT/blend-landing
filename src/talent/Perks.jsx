import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Views } from "../views";

const perks = {
  titleNormal: "Rejoignez la",
  titleBold: "communauté",
  callToAction: "2mn pour s'inscrire",
  illustration1: "/perks_offers.png",
  illustration2: "/perks_iphone.png",
  items: [
    {
      title: "Matching sans préjugés",
      content:
        "Notre algoritme prend en compte uniquement les données utiles à votre recherche d’emploi",
    },
    {
      title: "Anonymisation de votre profil",
      content:
        "Rendez vous visible auprès de sociétés qui utilisent Blend, en sachant que votre identité est protégée et que vous ne serez pas rejeté pour les mauvaises raisons. Nous excluons les meme informations que dans notre matching",
    },
    {
      title: "Votre privacy sous controle",
      content:
        "Les recruteurs peuvent voir votre nom et vos coordonnées seulement si vous acceptez leur demande. Vos données vous appartiennent, pourquoi seraient-elle être en libre service et votre recherche d’emploi visible à tous?",
    },
  ],
};

export function Perks() {
  const {
    talentOkIcon,
    talentMatchIcon,
    talentAnonymousIcon,
    talentJobOffersPhonePerk,
    talentJobOffersCut,
  } = useStaticQuery(graphql`
    query TalentPerksIcons {
      talentOkIcon: file(name: { eq: "ok-icon" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }

      talentMatchIcon: file(name: { eq: "match-icon" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }

      talentAnonymousIcon: file(name: { eq: "anonymous-icon" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }

      talentJobOffersPhonePerk: file(name: { eq: "phone-mockup-offer" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }

      talentJobOffersCut: file(
        name: { eq: "talent-job-offers-cut-illustrated" }
      ) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `);
  const sources = [
    talentMatchIcon.cloudinary.fluid,
    talentAnonymousIcon.cloudinary.fluid,
    talentOkIcon.cloudinary.fluid,
  ];
  const jobOfferLeftSource = talentJobOffersCut.cloudinary.fluid;
  const jobOfferRightSource = talentJobOffersPhonePerk.cloudinary.fluid;
  return (
    <Views.Perks
      sources={sources}
      perks={perks}
      pictureLeft={jobOfferLeftSource}
      pictureRight={jobOfferRightSource}
    />
  );
}
