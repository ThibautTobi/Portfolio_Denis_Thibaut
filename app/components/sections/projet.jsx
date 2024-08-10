'use client'
/*************************** verification final */
import { useState } from 'react';
import dataProjets from "../../data/data_projets";
import Image from "next/image";
import flecheFermer from "../../../public/icone/flecheFermer.svg";
import flecheOuvert from "../../../public/icone/flecheOuvert.svg";
import Link from 'next/link';
import FilterButton from '../filterButton';


function Projets() {
  // Etat pour suivre les sections ouvertes/fermées
  const [openSections, setOpenSections] = useState({});
  // Etat filtrage
  const [filter, setFilter] = useState("all");

  // Fonction pour basculer l'ouverture/fermeture d'une section
  const toggleSection = (index, section) => {
    // ici dans key ont recupére l'index du projet et la section qui est cibler ce qui créé une clés unique a ouvrir ou fermer.
    const key = `${index}-${section}`;
    // mise a jour de l'etat 
    setOpenSections(prevState => ({
      //passage d'un callBack (copie les etats precedent)
      ...prevState,
      // "!prevState[key]" inverse la valeur actuelle de key :
      //Si prevState[key] est true, cela devient false
      //Si prevState[key] est false ou undefined, cela devient true
      [key]: !prevState[key]
    }));
  };

  return (
    <section id="projet" className="dark:bg-stone-800 bg-slate-800 text-white p-4 text-center">
        <h2 className="dark:text-white m-4 text-xl font-bold lg:text-4xl lg:m-8">Mes différents Projets :</h2>
        <div className='flex flex-row justify-center p-4 items-center space-x-3 mb-4'>
            <FilterButton label='All' onClick={()=> setFilter('all')} isActive={filter === 'all'}/>
            <FilterButton label='Front' onClick={()=> setFilter('front')} isActive={filter === 'front'}/>
            <FilterButton label='Back' onClick={()=> setFilter('back')} isActive={filter === 'back'}/>
            <FilterButton label='Full' onClick={()=> setFilter('full')} isActive={filter === 'full'}/>
        </div>
        <div className='flex flex-wrap justify-around'>
          {dataProjets.filter(projet => filter === 'all' || projet.type.includes(filter)).map((item,index) => (
            <div key={index} className="border-solid border-white border-2 p-3 mb-4 rounded-lg hover:bg-transparent items-center max-w-[350px] sm:max-w-[500px] lg:m-8">
            <h3 className="text-lg sm:text-xl lg:text-2xl mt-3 mb-3 dark:text-white">{item.name}</h3>
            <h4 className="text-lg sm:text-xl lg:text-2xl mt-3 mb-3">{item.projet}</h4>
            <Image 
              src={item.image} 
              alt={item.name} 
              width={300}
              height={300}
              className="m-auto rounded-lg"
              loading="lazy"
            />
            <p className='m-4 dark:bg-stone-800 dark:text-white text-white'>Objectif Projet :<br/>{item.description}</p>
            <Link href={item.lien} className='p-1 font-bold bg-white dark:bg-neutral-600 text-slate-800 rounded-lg hover:opacity-50'>Le lien</Link>
            {/* Section "langages utilisés" */}
            <div onClick={() => toggleSection(index, 'langages')} className='dark:bg-neutral-600 flex flex-row justify-between bg-slate-500 rounded-xl m-4'>
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
                  <li key={lang} className='dark:text-white'>{lang}</li>
                ))}
              </ul>
            </div>

            {/* Section "Problématiques rencontrées" */}
            <div onClick={() => toggleSection(index, 'problematiques')} className='dark:bg-neutral-600 flex flex-row justify-between bg-slate-500 rounded-xl m-4'>
              <h3 className="p-2 text-lg sm:text-xl lg:text-2xl cursor-pointer ">les Problématiques rencontrées</h3>
              <Image 
                src={openSections[`${index}-problematiques`] ? flecheOuvert : flecheFermer} 
                alt="fleche" 
                width={20}
                height={20}
                className='mr-2'
              />
            </div>
            <div className={`${openSections[`${index}-problematiques`] ? 'block' : 'hidden'}`}>
              <p className='dark:text-white dark:bg-stone-800 text-white'>{item.problematique}</p>
            </div>

            {/* Section "Compétences utilisées" */}
            <div onClick={() => toggleSection(index, 'competences')} className='dark:bg-neutral-600 flex flex-row justify-between bg-slate-500 rounded-xl m-4'>
              <h3 className="p-2 text-lg sm:text-xl lg:text-2xl cursor-pointer ">les compétences utilisées</h3>
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
                  <li key={idx} className="text-left p-2 dark:text-white">{comp}</li>
                ))}
              </ul>
            </div>

          </div>
          ))}
        </div>
    </section>
  );
};
export default Projets;