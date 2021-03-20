import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Image from "gatsby-image";
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
    >
      <div className="flex flex-col items-center default-padding-x lg:items-start lg:flex-row gap-12 lg:gap-24">
        {perks.items.map(({ title, content }, index) => {
          return (
            <div
              key={title}
              className="flex flex-col items-center gap-2 md:gap-3 lg:gap-4 p-1 sm:w-1/2 lg:w-2/7"
            >
              <div className="w-10 md:w-12 lg:w-14 mb-w-12 mb-5 lg:mb-10">
                <Image fluid={sources[index]} />
              </div>
              <h3 className="text-center">{title}</h3>
              <p className="text-center font-sans text-base text-white font-light">
                {content}
              </p>
            </div>
          );
        })}
      </div>
    </Views.Perks>
  );
}
