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
        title: "BLEND EST-IL GRATUIT ?",
        content:
          "Blend est 100% gratuit pour les talents. Il n'y a aucune limitation ou fonctionnalités cachées payantes..",
      },
      {
        title: "QUELS GENRES DE SOCIÉTÉS SONT SUR BLEND ?",
        content:
          "Uniquement des sociétés de l'écosystème Tech. Ça peut aller de la startup en e-commerce à Facebook ou Google.",
      },
      {
        title: "POURQUOI LA DIVERSITÉ EST IMPORTANTE POUR BLEND ?",
        content:
          "Une entreprise a besoin de diversité pour rester innovante. Si tout le monde a le même profil, les idées seront toujours les mêmes...",
      },
    ],
  };

  return <Views.Faqs faqs={faqs} />;
}
