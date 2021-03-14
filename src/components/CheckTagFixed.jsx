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
    bottom: "34px",
  };
  if (right) {
    positionStyle = {
      right: "-160px",
      bottom: "0px",
      maxWidth: "20rem",
      minWidth: "16rem",
    };
  }
  return (
    <div
      className={` shadow-xl hidden lg:flex absolute bg-white rounded-lg flex-row items-center px-4 py-2 gap-2.5 w-80 ${
        right ? "justify-end" : ""
      }`}
      style={positionStyle}
    >
      <div className="w-7">
        <Image fluid={source} />
      </div>
      <div style={{ width: "180px" }}>
        <span className="font-serif text-sm font-semibold text-left  text-purple-800 ">
          {content}
        </span>
      </div>
    </div>
  );
}
