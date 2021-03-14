import React from "react";
import { Accordion } from "../components/Accordion";
import { Button } from "../components/Button";
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

  return (
    <section
      className="default-padding-x py-16 lg:py-7 flex flex-col md:items-start lg:items-center lg:flex-row lg:justify-between gap-16  xl:gap-80"
      style={{
        background:
          "linear-gradient(270deg, rgba(254, 140, 1, 0.25) -79.53%, rgba(112, 29, 218, 0.10) 106.57%)",
      }}
    >
      <div className="flex flex-col gap-4 md:gap-5 lg:gap-6">
        <h2 className="text-black font-bold">{faqs.titleBold}</h2>
        <p className="text-black">{faqs.description}</p>

        <Button label={faqs.callToAction} />
      </div>
      <QuestionAndAnswer faqs={faqs} />
    </section>
  );
}

function QuestionAndAnswer({ faqs }) {
  return (
    <div
      className="bg-white bg-opacity-20 questionAndAnswer px-5 flex flex-col justify-center"
      style={{
        boxShadow: " 0px 2px 8px rgba(204, 190, 223, 0.4), 0px 0px 1px #cab7e6",
      }}
    >
      {faqs.items.map(({ title, content }, index) => (
        <Accordion key={index} title={title}>
          {content}
        </Accordion>
      ))}
    </div>
  );
}
