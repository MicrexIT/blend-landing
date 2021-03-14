import React from "react";
import Image from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

export function CheckTag({ content }) {
  const { checkOkIcon } = useStaticQuery(graphql`
    query CheckTagOkIcon {
      checkOkIcon: file(name: { eq: "check-ok-icon" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `);

  const source = checkOkIcon.cloudinary.fluid;
  return (
    <div className="shadow-xl bg-white rounded-lg flex flex-row items-center p-3 md:px-5 md:py-2 gap-2 md:gap-2.5 w-72">
      <div className="w-5 md:w-6 lg:w-7">
        <Image fluid={source} />
      </div>
      <div>
        <span className="font-serif text-sm font-semibold text-left  text-purple-800">
          {content}
        </span>
      </div>
    </div>
  );
}
