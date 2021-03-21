import React from "react";
import Image from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

export function CheckTagFixed({ content, right = false }) {
  const { checkOkFixedIcon } = useStaticQuery(graphql`
    query CheckTagOkFixedIcon {
      checkOkFixedIcon: file(name: { eq: "check-ok-icon" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `);

  const source = checkOkFixedIcon.cloudinary.fluid;

  let positionStyle = {
    left: "-175px",
    bottom: "41px",
  };
  if (right) {
    positionStyle = {
      right: "-163px",
      bottom: "10px",
      maxWidth: "20rem",
      minWidth: "16rem",
      paddingRight: "10px",
    };
  }
  return (
    <div
      className={` shadow-xl hidden lg:flex absolute bg-white rounded-lg flex-row items-center px-6 py-2 space-x-4 w-80 ${
        right ? "justify-end" : ""
      }`}
      style={positionStyle}
    >
      <div className="w-5">
        <Image fluid={source} />
      </div>
      <div style={{ width: "185px" }}>
        <p className="font-serif text-left md:leading-18 tracking-1px text-2xs font-medium text-purple-800 ">
          {content}
        </p>
      </div>
    </div>
  );
}
