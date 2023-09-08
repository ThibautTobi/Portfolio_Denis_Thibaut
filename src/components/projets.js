'use client'
import { useState } from 'react';
import { dataProjets } from "@/data/data_projets";
import Image from "next/image";
import flecheFermer from "../../public/images/icone/flecheFermer.svg";
import flecheOuvert from "../../public/images/icone/flecheOuvert.svg";
import Link from 'next/link';

function Projets() {
  // État pour suivre les sections ouvertes/fermées
  const [openSections, setOpenSections] = useState({});

  //voir changement d'etat en true si ouvert dans l'ojets qui prend en mémoire l'etat de chaque collapse
  //console.log(openSections);

  // Fonction pour basculer l'ouverture/fermeture d'une section
  const toggleSection = (index, section) => {
    const key = `${index}-${section}`;
    setOpenSections(prevState => ({
      ...prevState,
      [key]: !prevState[key]
    }));
  };

  return (
    <section id="projet">
      <div className="bg-slate-800 text-white p-4 text-center">
        <h2 className="m-4 text-xl font-bold lg:text-4xl lg:m-8">Mes différents Projets :</h2>
        <div className='flex flex-wrap justify-around'>
          {dataProjets.map((item, index) => (
            <div key={index} className="border-solid border-white border-2 p-3 mb-4 rounded-lg hover:bg-transparent items-center max-w-[350px] sm:max-w-[500px]">
              <h3 className="text-lg sm:text-xl lg:text-2xl mt-3 mb-3">{item.name}</h3>
              <h4 className="text-lg sm:text-xl lg:text-2xl mt-3 mb-3">{item.projet}</h4>
              <Image 
                src={item.image} 
                alt={item.name} 
                width={300}
                height={300}
                className="m-auto rounded-lg"
              />
              <p className='m-4 '>Objectif Projet :<br/>{item.description}</p>
              <Link href={item.lien} className='p-1 font-bold bg-white text-slate-800 rounded-lg hover:opacity-50'>Le lien</Link>
              {/* Section "langages utilisés" */}
              <div onClick={() => toggleSection(index, 'langages')} className='flex flex-row justify-between bg-slate-500 rounded-xl m-4'>
                <h3 className="p-2 text-lg sm:text-xl lg:text-2xl cursor-pointer">langages utilisés</h3>
                <Image 
                  src={openSections[`${index}-langages`] ? flecheOuvert : flecheFermer} 
                  alt="fleche" 
                  width={20}
                  height={20}
                  className='mr-2'
                />
              </div>
              <div className={`${openSections[`${index}-langages`] ? 'block' : 'hidden'}`}>
                <ul>
                  {item.langage.map((lang) => (
                    <li key={lang}>{lang}</li>
                  ))}
                </ul>
              </div>

              {/* Section "Problématiques rencontrées" */}
              <div onClick={() => toggleSection(index, 'problematiques')} className='flex flex-row justify-between bg-slate-500 rounded-xl m-4'>
                <h3 className="p-2 text-lg sm:text-xl lg:text-2xl cursor-pointer">les Problématiques rencontrées</h3>
                <Image 
                  src={openSections[`${index}-problematiques`] ? flecheOuvert : flecheFermer} 
                  alt="fleche" 
                  width={20}
                  height={20}
                  className='mr-2'
                />
              </div>
              <div className={`${openSections[`${index}-problematiques`] ? 'block' : 'hidden'}`}>
                <p>{item.problematique}</p>
              </div>

              {/* Section "Compétences utilisées" */}
              <div onClick={() => toggleSection(index, 'competences')} className='flex flex-row justify-between bg-slate-500 rounded-xl m-4'>
                <h3 className="p-2 text-lg sm:text-xl lg:text-2xl cursor-pointer">les compétences utilisées</h3>
                <Image 
                  src={openSections[`${index}-competences`] ? flecheOuvert : flecheFermer} 
                  alt="fleche" 
                  width={20}
                  height={20}
                  className='mr-2'
                />
              </div>
              <div className={`${openSections[`${index}-competences`] ? 'block' : 'hidden'}`}>
                <ul>
                  {item.competence.map((comp, idx) => (
                    <li key={idx} className="text-left p-2">{comp}</li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

  // export async function getStaticProps() {
  //   return {
  //     props: {
  //       projetsData: dataProjets
  //     }
  //   };
  // }

export default Projets;