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
      paddingRight: "11px",
    };
  }
  return (
    <div
      className={` shadow-xl hidden lg:flex absolute bg-white rounded-lg flex-row items-center px-6 py-2 gap-4 w-80 ${
        right ? "justify-end" : ""
      }`}
      style={positionStyle}
    >
      <div className="w-5">
        <Image fluid={source} />
      </div>
      <div style={{ width: "185px" }}>
        <span className="font-serif text-sm font-semibold text-left  text-purple-800 ">
          {content}
        </span>
      </div>
    </div>
  );
}
