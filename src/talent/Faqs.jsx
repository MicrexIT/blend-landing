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
        title: "EST-CE QUE BLEND EST GRATUIT?",
        content:
          "Blend est 100% gratuit pour les talents. Il n'y a aucune limitation ou fonctionnalités cachées payantes.",
      },
      {
        title: " QUEL GENRE DE SOCIÉTÉ EST SUR BLEND?",
        content:
          "Uniquement des sociétés de l'écosystème Tech. Ça peut aller de la startup en e-commerce à Facebook ou Google.",
      },
      {
        title: "POURQUOI CE FOCUS SUR LA DIVERSITÉ?",
        content:
          "Une entreprise a besoin de diversité pour rester innovante. Si tout le monde a le même profil, les idées seront toujours les mêmes...",
      },
    ],
  };

  return <Views.Faqs faqs={faqs} />;
}
