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
    <div className="shadow-xl bg-white rounded-lg flex flex-row items-center p-2 px-4 md:px-7 md:py-3 md:pl-10  gap-5 md:gap-6 w-48 md:w-72">
      <div className="w-7 md:w-10">
        <Image fluid={source} />
      </div>
      <div className="">
        <p className="font-serif text-4xs tracking-2 leading-2 md:leading-18 md:tracking-1px md:text-2xs font-medium text-left  text-purple-800">
          {content}
        </p>
      </div>
    </div>
  );
}
