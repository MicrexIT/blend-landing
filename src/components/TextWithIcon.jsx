import React from "react";
import Image from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

export function TextWithIcon({ content, bold }) {
  const { checkOkIcon } = useStaticQuery(graphql`
    query TextWithIcon {
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
    <div className="my-3 flex flex-row items-center space-x-3">
      <div className="w-3">
        <Image fluid={source} />
      </div>
      {bold ? (
        <p className="font-bold">{content}</p>
      ) : (
        <p className="">{content}</p>
      )}
    </div>
  );
}
