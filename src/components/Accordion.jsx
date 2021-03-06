import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

export function Accordion({ title, children }) {
  const { downAccordionIcon } = useStaticQuery(graphql`
    query AccordionIcon {
      downAccordionIcon: file(name: { eq: "arrow-down-icon" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `);

  const [isOpen, setOpen] = React.useState(true);
  const defaultStyle = {
    overflow: "hidden",
    transition: "max-height 0.3s cubic-bezier(1, 0, 1, 0)",
    height: "auto",
    maxHeight: "9999px",
  };
  const collapsedStyle = {
    ...defaultStyle,
    maxHeight: "0",
    transition: "max-height 0.35s cubic-bezier(0, 1, 0, 1)",
  };

  const downSource = downAccordionIcon.cloudinary.fluid;
  const rotate = isOpen ? "" : "rotate(270deg)";

  return (
    <div className="relative z-30 py-7 text-purple-800 border-white border-b">
      <div
        className=" flex flex-row justify-between items-center cursor-pointer"
        onClick={() => setOpen(!isOpen)}
      >
        <Question>{title}</Question>
        <div style={{ width: "14px", transform: rotate }}>
          <Image fluid={downSource} />
        </div>
      </div>
      <div style={isOpen ? defaultStyle : collapsedStyle}>{children}</div>
    </div>
  );
}

function Question({ children }) {
  return <h4 className="faq_question">{children}</h4>;
}
