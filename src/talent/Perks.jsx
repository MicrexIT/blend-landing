import React from "react";
import Image from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

import { Button } from "../components/Button";

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
    <section className="pb-16 bg-gradient-to-bl from-purple-900 to-purple-brilliant flex flex-col relative z-0 pt-14 md:pt-20 lg:pt-32 gap-6 md:gap-12 lg:gap-20 xl:gap-28">
      <div className="flex flex-col items-center default-padding-x lg:items-start lg:flex-row gap-12 lg:gap-24">
        {perks.items.map(({ title, content }, index) => {
          return (
            <div
              key={title}
              className="flex flex-col items-center gap-2 md:gap-3 lg:gap-4 w-1/2 lg:w-2/7"
            >
              {/* <div className="mb-w-12 md:w-14 mb-5 lg:mb-10">
                <img src={icon} />
              </div> */}
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
      <div className="flow-band skew-y-12 relative"></div>
      <div
        // style={{ minHeight: "535px" }}
        // className="relative z-10 flex flex-row flex-wrap w-screen items-center justify-center pr-8"
        className="relative z-10 w-screen grid grid-cols-3 grid-rows-title-with-split lg:grid-rows-1 items-center md:gap-16 "
        // style={{ minHeight: "700px" }}
      >
        {/* <div className="row-start-1 col-span-2 w-full lg:w-1/4 lg:order-2 flex flex-col items-center"> */}
        <div className=" self-center row-start-1 col-span-3 lg:row-span-1 lg:col-span-1 w-full h-443 flex flex-col items-center justify-center gap-4">
          <h2 className="text-white font-medium">{perks.titleNormal}</h2>
          <h2 className="text-white font-bold mb-10 md:mb-12 lg:mb-16 xl:mb-20">
            {perks.titleBold}
          </h2>
          <Button />
        </div>
        {/* <div className="col-span-1 row-start-2 w-1/3 lg:w-1/4 lg:order-1 self-start"> */}
        <div className="col-span-1 row-start-2 lg:row-start-1 col-start-1 self-stretch lg:self-center max-h-550 max-w-xs lg:max-w-sm">
          <Image fluid={jobOfferLeftSource} />
        </div>
        {/* <div className="col-span-1 row-start-2 col-start-2 w-1/3 md:w-1/4 lg:w-1/5 lg:order-3 self-end"> */}
        <div className="col-span-1 row-start-2 lg:row-start-1 col-start-3 self-stretch lg:self-center  max-w-xs lg:max-w-sm">
          <Image fluid={jobOfferRightSource} />
        </div>
      </div>
    </section>
  );
}
