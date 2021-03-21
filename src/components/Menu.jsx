import React, { useState } from "react";
import { Button } from "../components/Button";
import Image from "gatsby-image";
import { graphql, Link, useStaticQuery } from "gatsby";
import { MenuMobile } from "./MenuMobile";

export function Menu() {
  const [open, setOpen] = useState(false);
  const data = useStaticQuery(graphql`
    query BurgerIcon {
      burgerIcon: file(name: { eq: "burger_mobile_icon" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `);

  const burgerIcon = data.burgerIcon.cloudinary.fluid;
  return (
    <>
      {open && <MenuMobile closeMenu={() => setOpen(false)} />}
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className="cursor-pointer md:hidden  relative z-50"
      >
        <div className="w-5">
          <Image fluid={burgerIcon} />
        </div>
      </div>
      <div className="hidden md:flex flex-row items-center space-x-4">
        <div className="flex border-r border-black flex-row items-center space-x-4 px-4 font-sans">
          <Link to="/">
            <span className="hover:opacity-70 cursor-pointer font-bold text-black">
              Talents
            </span>
          </Link>

          <Link to="/entreprises">
            <span className=" hover:opacity-70 cursor-pointer text-black">
              Entreprises
            </span>
          </Link>
          <Link to="/contact">
            <span className=" hover:opacity-70 cursor-pointer text-black">
              Nous contacter
            </span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Button secondary small label="start" />
          <span className="serif font-semi-bold cursor-pointer hover:text-purple-400 text-gray-500">
            Log in
          </span>
        </div>
      </div>
    </>
  );
}
