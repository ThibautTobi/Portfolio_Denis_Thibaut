'use client'
import { useState,useEffect } from 'react';
import Link from 'next/link';
import ButtonToggle from './toggleButton';
import ProgressScrollBar from './progressScrollBar';

export default function NavBar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  /************************************ gestion ouverture fermeture modale mobile  */
    // Ouvre la modale
  const toggleMenu = () => {
    // appel la fonction setMenuOpen création d'une fonction flécher prend l'etat precedent et retourne sa negation si true retourne false ....
    setMenuOpen(prevState => !prevState);
  };

    // Ferme la modale
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Empêche la fermeture de la modale lors d'un clic à l'intérieur
  const preventClose = (e) => {
    e.stopPropagation();
  };

/************************************** active link navbar */

useEffect(() => {
  // Déclare un tableau contenant les IDs des sections
  const sections = ['presentation', 'competence', 'service', 'projet', 'contact'];
  // Initialise un tableau pour stocker les observateurs
  const observers = [];

  // Fonction de gestion des intersections
  const handleIntersection = (entries) => {
    entries.forEach(entry => {
      // Si l'entrée est intersectée "visible", met à jour la section active
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  };

  // Pour chaque section, crée un nouvel observateur
  sections.forEach(section => {
    // Initialise un observateur avec la fonction de gestion et un seuil
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });
    // Récupère l'élément DOM de la section par son ID
    const sectionElement = document.getElementById(section);
    // Si l'élément existe, commence à observer les intersections
    if (sectionElement) {
      observer.observe(sectionElement);
    }
    // Ajoute l'observateur au tableau des observateurs
    observers.push(observer);
  });

   // Nettoie les observateurs lorsque le composant est démonté
  return () => {observers
    observers.forEach(observer => observer.disconnect());
  };
}, []);


  return (
    <div className="bg-slate-800 dark:bg-stone-800 fixed w-full h-12 flex flex-col sm:h-16 lg:h-20">
      {/* Bouton "Menu" pour la version mobile */}
      <div onClick={toggleMenu} className="flex flex-col m-auto sm:hidden">
        <div className='text-white font-bold border-solid border-2 rounded p-1 hover:bg-slate-500'>Menu</div>
      </div>

      {/* Menu Modal pour la version mobile */}
      {menuOpen && (
        <>
        {/* Overlay pour l'effet d'opacité */}
        <div className="dark:bg-stone-800 fixed inset-0 bg-black opacity-50" onClick={closeMenu}></div>

          <div className="dark:bg-stone-800 fixed w-full mt-0 text-center sm:hidden z-10" onClick={preventClose}>
            <div className="dark:bg-stone-800 border-b-4 bg-white p-4 w-full flex transition flex-col ease-in-out duration-300 translate-y-212 sm:bg-slate-800">
              <div onClick={toggleMenu} className='dark:bg-neutral-600 bg-slate-800 text-white w-6 h-6 rounded hover:bg-slate-500'>X</div>

              <ul className="dark:bg-stone-800 w-full flex flex-col space-y-2 to-slate-800 font-bold sm:text-white sm:flex-row sm:p-3">
                <ButtonToggle />
                <li>
                  <Link href="#presentation" onClick={closeMenu} className={`p-2 sm:border-none sm:p-3 ${activeSection === 'presentation' ? 'bg-slate-800 text-white border-none dark:bg-neutral-600 rounded-md' : ''}`}>Présentation</Link>
                </li>
                <li>
                  <Link href="#competence" onClick={closeMenu} className={`p-2 sm:border-none sm:p-3 ${activeSection === 'competence' ? 'bg-slate-800 text-white border-none dark:bg-neutral-600 rounded-md' : ''}`}>Compétences</Link>
                </li>
                <li>
                  <Link href="#service" onClick={closeMenu} className={`p-2 sm:border-none sm:p-3 ${activeSection === 'service' ? 'bg-slate-800 text-white border-none dark:bg-neutral-600 rounded-md' : ''}`}>Services</Link>
                </li>
                <li>
                  <Link href="#projet" onClick={closeMenu} className={`p-2 sm:border-none sm:p-3 ${activeSection === 'projet' ? 'bg-slate-800 text-white border-none dark:bg-neutral-600 rounded-md' : ''}`}>Projets</Link>
                </li>
                <li>
                  <Link href="#contact" onClick={closeMenu} className={`p-2 sm:border-none sm:p-3 ${activeSection === 'contact' ? 'bg-slate-800 text-white border-none dark:bg-neutral-600 rounded-md' : ''}`}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}

      {/* Menu pour la version desktop */}

      <div className="hidden sm:flex fixed w-full h-12 mt-0 text-center justify-between sm:h-16 lg:h-20">
        <ButtonToggle />
        <ul className="dark:bg-stone-800 flex flex-row items-center space-x-2 bg-slate-800 font-bold sm:text-white sm:p-3 lg:space-x-4">
          <li className='sm:p-2 sm:rounded-lg sm:hover:bg-slate-500 dark:hover:bg-neutral-600'>
            <Link href="#presentation" className={`${activeSection === 'presentation' ? 'border-b-2 lg:border-b-3' : ''}`}>Présentation</Link>
          </li>
          <li className='sm:p-2 sm:rounded-lg sm:hover:bg-slate-500 dark:hover:bg-neutral-600'>
            <Link href="#competence" className={`${activeSection === 'competence' ? 'border-b-2 lg:border-b-3' : ''}`}>Compétences</Link>
          </li>
          <li className='sm:p-2 sm:rounded-lg sm:hover:bg-slate-500 dark:hover:bg-neutral-600'>
            <Link href="#service" className={`${activeSection === 'service' ? 'border-b-2 lg:border-b-3' : ''}`}>Services</Link>
          </li>
          <li className='sm:p-2 sm:rounded-lg sm:hover:bg-slate-500 dark:hover:bg-neutral-600'>
            <Link href="#projet" className={`${activeSection === 'projet' ? 'border-b-2 lg:border-b-3' : ''}`}>Projets</Link>
          </li>
          <li className='sm:p-2 sm:rounded-lg sm:hover:bg-slate-500 dark:hover:bg-neutral-600'>
            <Link href="#contact" className={`${activeSection === 'contact' ? 'border-b-2 lg:border-b-3' : ''}`}>Contact</Link>
          </li>
        </ul>
      </div>
      {/* Affichage conditionnel de la barre de progression */}
      <ProgressScrollBar menuOpen={menuOpen} />
    </div>
  );
};