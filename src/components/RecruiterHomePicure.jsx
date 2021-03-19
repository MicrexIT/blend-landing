import React from "react";
import Image from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

export function RecruiterHomePicture() {
  const { recruiterHomePhone } = useStaticQuery(graphql`
    query RecruiterHomePhone {
      recruiterHomePhone: file(name: { eq: "screens-home-entreprises" }) {
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

  const sources = [recruiterHomePhone.cloudinary.fluid];
  return (
    <div className="flex flex-col md:justify-center lg:pb-16 items-center relative z-20">
      <div className="block w-343 md:m-w-412 lg:w-500 xl:w-550">
        <Image fluid={sources} />
      </div>
    </div>
  );
}
