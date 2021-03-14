import * as React from "react";
import Image from "gatsby-image";

export function Illustration({ source, caption }) {
  return (
    <div className="illustration w-36 md:w-38 lg:w-40 lg:mx-9">
      <div className=" w-36 md:w-40 lg:w-60 xl:w-64">
        <Image fluid={source} alt="illustration" />
      </div>
      <span className="caption">{caption}</span>
    </div>
  );
}
