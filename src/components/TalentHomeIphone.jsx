import React from "react";
import Image from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

export function TalentHomeIphone() {
  const { talentHomePhone, talentHomePhoneLg } = useStaticQuery(graphql`
    query TalentHomePhone {
      talentHomePhone: file(name: { eq: "phone-home-centered" }) {
        cloudinary: childCloudinaryAsset {
          fixed {
            ...CloudinaryAssetFixed
          }
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
      talentHomePhoneLg: file(name: { eq: "phone-home" }) {
        cloudinary: childCloudinaryAsset {
          fixed {
            ...CloudinaryAssetFixed
          }
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `);

  const sources = [
    talentHomePhone.cloudinary.fluid,
    {
      ...talentHomePhoneLg.cloudinary.fluid,
      media: `(min-width: 491px)`,
    },
  ];
  return (
    <div className="flex flex-col md:justify-end lg:justify-center items-center">
      <div className="block w-52 md:w-76 xl:w-80">
        <Image fluid={sources} />
      </div>
    </div>
  );
}
