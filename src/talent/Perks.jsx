import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Image from "gatsby-image";
import { Views } from "../views";
import { TalentPerksIllustrations } from "../components/TalentPerksIllustrations";

const perks = {
  titleNormal: "Rejoignez la",
  titleBold: "communauté",
  callToAction: "Lancez-vous!",
  link:
    "https://2e16763c.sibforms.com/serve/MUIEAC1yKKasQLg1M1CgcPg4qrWG_kGaEn0DvbgOHPOGxbVlRxgDqr2bNWAi1mF3omOdv4psXvheZAwNza3ZATfWjwkGze1iqEtzCNxu7xapEztR7I_n8atBVqlUoOfc8xJJ2h7kSMdIfn26qkp3CGDwPtTLHzWbW31NbYw6kYYrz3LSAA6O9S_BFVuN_c5z0ocUeJbKZsR3VtP3",
  illustration1: "/perks_offers.png",
  illustration2: "/perks_iphone.png",
  items: [
    {
      title: "Matching neutre",
      content: (
        <>
          Seules les données{" "}
          <span className="font-bold">
            utiles à votre recherche d’emploi sont transmises aux entreprises.
          </span>
        </>
      ),
    },
    {
      title: "Profils sans préjugés",
      content: (
        <>
          Restez visibles auprès des entreprises{" "}
          <span className="font-bold">
            sans craintes de discrimination à l’embauche.
          </span>
        </>
      ),
    },
    {
      title: "Votre privacy sous controle",
      content: (
        <>
          <span className="font-bold">Postulez sereinement. </span> Votre
          employeur n’est pas en mesure de voir votre profil sur Blend.
        </>
      ),
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
    <Views.Perks Bottom={<TalentPerksIllustrations perks={perks} />}>
      <div className="flex flex-col items-center px-24 lg:items-start lg:flex-row space-y-12 lg:space-y-0 lg:space-x-24">
        {perks.items.map(({ title, content }, index) => {
          return (
            <div
              key={title}
              className="flex flex-col items-center space-y-2 md:space-y-3 lg:space-y-4 p-1 sm:w-1/2 lg:w-2/7"
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
