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
    <section className="relative default-padding-x py-16 lg:py-7 flex flex-col md:items-start lg:items-center lg:flex-row lg:justify-between gap-16 xl:gap-80">
      <div
        style={{
          background:
            "linear-gradient(270deg, #D7ABAC 0, rgba(112, 29, 218, 0) 100%)",
        }}
        className="absolute top-0 bottom-0 left-0 right-0 opacity-50"
      ></div>
      <div className="relative z-30 flex flex-col gap-4 md:gap-5 lg:gap-6">
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
      className="relative z-10 questionAndAnswer px-5 flex flex-col justify-center lg:w-500 xl:w-auto"
      style={{
        boxShadow: " 0px 2px 8px rgba(204, 190, 223, 0.4), 0px 0px 1px #cab7e6",
      }}
    >
      <div
        className="absolute z-20 top-0 bottom-0 left-0 right-0 bg-white opacity-50"
        style={{
          boxShadow:
            " 0px 2px 8px rgba(204, 190, 223, 0.4), 0px 0px 1px #cab7e6",
        }}
      ></div>
      {faqs.items.map(({ title, content }, index) => (
        <Accordion key={index} title={title}>
          {content}
        </Accordion>
      ))}
    </div>
  );
}
