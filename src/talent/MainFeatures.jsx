import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import { Views } from "../views";
import { CheckTag } from "../components/CheckTag";
import { CheckTagFixed } from "../components/CheckTagFixed";

const mainFeatures = {
  titleNormal: "Ne passez plus des",
  titleBold: "heures à postuler",
  features: [
    "Choisissez vos critères et la culture d’entreprise souhaités",
    "Blend séléctionne pour vous les meilleures opportunités",
    "Postulez en 1 clic",
  ],
  callToAction: "Lancez-vous!",
  link: "https://2e16763c.sibforms.com/serve/MUIEAC1yKKasQLg1M1CgcPg4qrWG_kGaEn0DvbgOHPOGxbVlRxgDqr2bNWAi1mF3omOdv4psXvheZAwNza3ZATfWjwkGze1iqEtzCNxu7xapEztR7I_n8atBVqlUoOfc8xJJ2h7kSMdIfn26qkp3CGDwPtTLHzWbW31NbYw6kYYrz3LSAA6O9S_BFVuN_c5z0ocUeJbKZsR3VtP3"
  
};

export function MainFeatures({ ...props }) {
  const { talentPhoneMockupFeatures } = useStaticQuery(graphql`
    query TalentPhoneMockupFeature {
      talentPhoneMockupFeatures: file(name: { eq: "phones-mockup-talents" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `);
  const source = talentPhoneMockupFeatures.cloudinary.fluid;
  return (
    <Views.MainFeatures source={source} mainFeatures={mainFeatures}>
      <div className=" flex flex-col items-center justify-end z-20 lg:w-2/3 space-y-5">
        <div className="w-72 md:w-96 lg:w-400 xl:w-500 relative">
          <Image fluid={source} className="z-30 mb-4 md:mb-8 lg:mb-2" />
          <CheckTagFixed
            content={
              <>
                Analyze du <span className="font-bold">culture fit</span>,
                matching affinataire
              </>
            }
          />
          <CheckTagFixed
            right
            content={
              <>
                Estimation du <span className="font-bold">salaire</span>,
                candidature simplifiée
              </>
            }
          />
        </div>
        <div className="w-full flex flex-col items-center lg:hidden space-y-2.5">
          <CheckTag
            className="lg:hidden "
            content={
              <>
                Analyze du <span className="font-bold">culture fit</span>,
                matching affinataire
              </>
            }
          />
          <CheckTag
            className="lg:hidden"
            content={
              <>
                Estimation du <span className="font-bold">salaire</span>,
                candidature simplifiée
              </>
            }
          />
        </div>
      </div>
    </Views.MainFeatures>
  );
}
