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
        title: "C’EST QUOI LE BOOST VISIBILITÉ?",
        content:
          "Nous montrons votre offre en première parmi les match disponibles au candidat.",
      },
      {
        title: "C’EST QUOI LE CRÉDITS DE CONTACT?",
        content:
          "Vous pouvez utiliser les crédits pour envoyer des demandes aux talents qualifiés dans la base de données. Dès que le talent accepte votre demande, ses informations de contact seront visibles.",
      },
      {
        title: "EST IL POSSIBLE D’INTEGRER BLEND À MON ATS?",
        content:
          "Pas pour l'instant mais nous travaillons pour intégrer Blend aux principaux ATS. Si vous souhaitez savoir si votre ATS est sur notre roadmap n'hésitez pas à nous contacter.",
      },
    ],
  };

  return <Views.Faqs faqs={faqs} />;
}
