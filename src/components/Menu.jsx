import React, { useState } from "react";
import { Button } from "../components/Button";
import Image from "gatsby-image";
import { graphql, Link, useStaticQuery } from "gatsby";
import { MenuMobile } from "./MenuMobile";

export function Menu({ pathName }) {
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
  const inscriptionLink =
    pathName === "entreprises"
      ? "https://meetings.hubspot.com/yann35"
      : "https://2e16763c.sibforms.com/serve/MUIEAC1yKKasQLg1M1CgcPg4qrWG_kGaEn0DvbgOHPOGxbVlRxgDqr2bNWAi1mF3omOdv4psXvheZAwNza3ZATfWjwkGze1iqEtzCNxu7xapEztR7I_n8atBVqlUoOfc8xJJ2h7kSMdIfn26qkp3CGDwPtTLHzWbW31NbYw6kYYrz3LSAA6O9S_BFVuN_c5z0ocUeJbKZsR3VtP3";
  return (
    <>
      {open && (
        <MenuMobile
          inscriptionLink={inscriptionLink}
          closeMenu={() => setOpen(false)}
        />
      )}
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
          <Link to="/" activeClassName="font-bold">
            <span className="hover:opacity-70 cursor-pointer  text-black">
              Talents
            </span>
          </Link>

          <Link to="/entreprises" activeClassName="font-bold">
            <span className=" hover:opacity-70 cursor-pointer text-black">
              Entreprises
            </span>
          </Link>

          <a href="mailto:hello@blend.careers?subject=Get In Touch">
            <span className=" hover:opacity-70 cursor-pointer text-black">
              Nous contacter
            </span>
          </a>
        </div>
        <div className="flex flex-row items-center space-x-4">
          <Button secondary small label="Inscription" link={inscriptionLink} />

          <a href={inscriptionLink} target="_blank">
            <span className="serif font-semi-bold cursor-pointer hover:text-purple-400 text-gray-500">
              Log in
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
