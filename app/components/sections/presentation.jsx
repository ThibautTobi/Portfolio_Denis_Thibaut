'use client';
import Image from "next/image";
import moi from '../../../public/Thibaut_Art.jpg';
import { useEffect, useState } from 'react';

export default function Presentation() {
  const [activeStep, setActiveStep] = useState(0); // Suivre l'étape actuelle

  useEffect(() => {
    // setTimeout met a jour aprés un certain nombre de seconde l'etat pour faire apparaitre 
    const timers = [
      setTimeout(() => setActiveStep(1), 4000),  // 4 secondes pour la première bulle
      setTimeout(() => setActiveStep(2), 8000),  // 4 secondes après la première
      setTimeout(() => setActiveStep(3), 12000), // 4 secondes après la deuxième
      setTimeout(() => setActiveStep(4), 16000), // 4 secondes après la troisième
      setTimeout(() => setActiveStep(5), 20000), // 4 secondes après la quatrième
      setTimeout(() => setActiveStep(6), 24000), // 4 secondes après la cinquième
    ];    

    return () => timers.forEach(timer => clearTimeout(timer)); // Nettoyage des timers
  }, []);

  return (
    <section id="presentation" className="py-20">
      <article className="text-center">
        <h1 className="font-ubuntu dark:text-stone-800 text-slate-800 font-bold text-2xl mb-4 pt-10 lg:pt-26">Denis Thibaut</h1>
        <Image 
          src={moi}
          alt="Portrait de Denis Thibaut, développeur Full Stack"
          aria-label="Portrait de Denis Thibaut, développeur Full Stack"
          width={200}
          height={200}
          className="rounded-xl m-auto border-4 border-slate-800"
          loading="lazy"
        />
        <h2 className="font-ubuntu italic dark:text-stone-800 text-slate-800 mt-8 mb-8 text-2xl font-bold">Développeur Full Stack</h2>

        <article className="dark:bg-neutral-400 bg-slate-400 w-4/5 text-lg rounded-xl m-auto p-5 mb-8 lg:mb-10 shadow-combined h-[680px] sm:h-[528px]">
          {/* 
            // Les blocs de texte ne sont rendus qu'à partir d'un certain activeStep.
            // Par exemple, le premier paragraphe apparaît lorsque activeStep est 1 ou plus.
            // Si activeStep est exactement 1, il affiche un texte en train de "pulsation" (...),
            // puis le timer continue ont pas a 2 et il affiche le texte normal.
            //méme chose pour le paragraphe deux ont commence avec les ... et une fois etat a 3 le text s'affiche.
          */}
          {activeStep >= 1 && (
            <div className="font-caveat font-bold text-xl m-4 p-3 rounded-2xl max-w-fit transition-all duration-700 ease-in-out text-left dark:bg-neutral-600 bg-white text-slate-800">
              {activeStep === 1 ? <p className="animate-pulse font-bold">...</p> : <p className="dark:text-white">Je suis Thibaut</p>}
            </div>
          )}
          {activeStep >= 2 && (
            <div className="font-caveat font-bold text-xl ml-auto text-right m-4 p-3 rounded-2xl max-w-fit transition-all duration-700 ease-in-out dark:bg-neutral-500  bg-blue-200 text-slate-800">
              {activeStep === 2 ? <p className="animate-pulse">...</p> : <p className="dark:text-white">J’aime créer des interfaces intuitives et esthétiques tout en répondant précisément aux besoins de mes clients.</p>}
            </div>
          )}
          {activeStep >= 3 && (
            <div className="font-caveat font-bold m-4 p-3 rounded-2xl max-w-fit transition-all duration-700 ease-in-out text-left dark:bg-neutral-600 text-slate-800 bg-white">
              {activeStep === 3 ? <p className="animate-pulse">...</p> : <p className="dark:text-white">J'aime les challenges et je suis passionné par la création de solutions numériques innovatrices.</p>}
            </div>
          )}
          {activeStep >= 4 && (
            <div className="font-caveat font-bold text-xl ml-auto text-right m-4 p-3 rounded-2xl max-w-fit transition-all duration-700 ease-in-out dark:bg-neutral-500  bg-blue-200 text-slate-800">
              {activeStep === 4 ? <p className="animate-pulse">...</p> : <p className="dark:text-white">Je suis prêt à apporter mon expertise pour faire de votre projet un succès.</p>}
            </div>
          )}
          {activeStep >= 5 && (
            <div className="font-caveat font-bold m-4 p-3 rounded-2xl max-w-fit transition-all duration-700 ease-in-out text-left dark:bg-neutral-600 bg-white text-slate-800">
              {activeStep === 5 ? <p className="animate-pulse">...</p> : <p className="dark:text-white">Contactez-moi pour en discuter davantage.</p>}
            </div>
          )}
        </article>
      </article>
    </section>
  );
}
