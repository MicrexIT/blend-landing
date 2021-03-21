import React from "react";

import { Views } from "../views";
export function Faqs() {
  const faqs = {
    titleBold: "Une question?",
    description:
      "Nous restons à votre écoute. Il suffit de nous envoyer un email.",
    callToAction: "Contactez-nous",
    items: [
      {
        title: "QU’EST-CE QUE LE BOOST VISIBILITÉ ?",
        content:
          "Nous montrons votre offre en premier parmi les matchs visibles par le candidat.",
      },
      {
        title: "QU’EST-CE QUE LES CRÉDITS DE SOURCING ?",
        content:
          "Vous pouvez utiliser les crédits de sourcing pour rendre visibles les informations d’un.e candidat.e.",
      },
      {
        title: "EST-IL POSSIBLE D’INTÉGRER BLEND À MON ATS?",
        content:
          "Pas pour l'instant mais nous travaillons pour intégrer Blend aux principaux ATS. Si vous souhaitez savoir si votre ATS est sur notre roadmap n'hésitez pas à nous contacter.",
      },
    ],
  };

  return <Views.Faqs faqs={faqs} />;
}
