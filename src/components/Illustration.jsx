import * as React from "react";
import Image from "gatsby-image";

export function Illustration({ source, caption }) {
  return (
    <div className="illustration">
      <div className=" w-36 md:w-40 lg:w-60 xl:w-64">
        <Image fluid={source} alt="illustration" />
      </div>
      <p className="caption">{caption}</p>
    </div>
  );
}
