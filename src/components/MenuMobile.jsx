import React, { useState } from "react";
import Image from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

export function MenuMobile({ closeMenu }) {
  const data = useStaticQuery(graphql`
    query XCloseIcon {
      xCloseIcon: file(name: { eq: "x-icon" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `);

  const xIcon = data.xCloseIcon.cloudinary.fluid;
  return (
    <div
      className="
  fixed z-20 top-0 bottom-0 right-0 left-0
  flex flex-col justify-between gap-4 p-4 pb-8
  bg-white overscroll-none overflow-hidden
  "
      style={{
        zIndex: "1000",
      }}
    >
      <div className="cursor-pointer w-3" onClick={closeMenu}>
        <Image fluid={xIcon} />
      </div>
      <div className="flex flex-col gap-8">
        <span className="sans font-bold text-lg">Talents</span>
        <span className="sans font-bold text-lg">Entreprises</span>
        <span className="sans font-bold text-lg">Nous Contacter</span>
      </div>
      <div className="flex flex-row justify-self-end items-center justify-between">
        <span className="serif font-bold cursor-pointer hover:text-purple-400 text-gray-500">
          Log in
        </span>
        <div></div>
      </div>
    </div>
  );
}
