'use client'
import { useState,useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/icone/dev.svg';

export default function NavBar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  /************************************ gestion ouverture fermeture modale mobile  */
    // Ouvre la modale
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
  const sections = ['presentation', 'competence', 'service', 'projet', 'contact'];
  const observers = [];

  const handleIntersection = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  };

  sections.forEach(section => {
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      observer.observe(sectionElement);
    }
    observers.push(observer);
  });

  return () => {
    observers.forEach(observer => observer.disconnect());
  };
}, []);


  return (
    <div className="bg-slate-800 fixed w-full h-12 flex flex-col sm:h-16 lg:h-20">
      {/* Bouton "Menu" pour la version mobile */}
      <div onClick={toggleMenu} className="flex flex-col m-auto sm:hidden">
        <div className='text-white font-bold border-solid border-2 rounded p-1 hover:bg-slate-500'>Menu</div>
      </div>

      {/* Menu Modal pour la version mobile */}
      {menuOpen && (
        <>
        {/* Overlay pour l'effet d'opacité */}
        <div className="fixed inset-0 bg-black opacity-50" onClick={closeMenu}></div>

          <div className="fixed w-full mt-0 text-center sm:hidden z-10" onClick={preventClose}>
            <div className="border-b-4 bg-white p-4 w-full flex transition flex-col ease-in-out duration-300 translate-y-212 sm:bg-slate-800">
              <div onClick={toggleMenu} className='bg-slate-800 text-white w-6 h-6 rounded hover:bg-slate-500'>X</div>
              <ul className="w-full flex flex-col space-y-2 to-slate-800 font-bold sm:text-white sm:flex-row sm:p-3">
                <li>
                  <Link href="#presentation" className={`border-b-2 p-1 sm:border-none sm:p-3 ${activeSection === 'presentation' ? 'bg-slate-800 text-white border-none' : ''}`}>Présentation</Link>
                </li>
                <li>
                  <Link href="#competence" className={`border-b-2 p-1 sm:border-none sm:p-3 ${activeSection === 'competence' ? 'bg-slate-800 text-white border-none' : ''}`}>Compétences</Link>
                </li>
                <li>
                  <Link href="#service" className={`border-b-2 p-1 sm:border-none sm:p-3 ${activeSection === 'service' ? 'bg-slate-800 text-white border-none' : ''}`}>Services</Link>
                </li>
                <li>
                  <Link href="#projet" className={`border-b-2 p-1 sm:border-none sm:p-3 ${activeSection === 'projet' ? 'bg-slate-800 text-white border-none' : ''}`}>Projets</Link>
                </li>
                <li>
                  <Link href="#contact" className={`border-b-2 p-1 sm:border-none sm:p-3 ${activeSection === 'contact' ? 'bg-slate-800 text-white border-none' : ''}`}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}

      {/* Menu pour la version desktop */}

      <div className="hidden sm:flex fixed w-full h-12 mt-0 text-center justify-between sm:h-16 lg:h-20">
        <Image
          src={logo}
          alt='logo'
          width={60}
          height={60}
          className='m-1'
        />
        <ul className="flex flex-row items-center space-x-2 to-slate-800 font-bold sm:text-white sm:p-3 lg:space-x-4">
          <li className='sm:p-2 sm:rounded-lg sm:hover:bg-slate-500'>
            <Link href="#presentation" className={`${activeSection === 'presentation' ? 'border-b-2 lg:border-b-3' : ''}`}>Présentation</Link>
          </li>
          <li className='sm:p-2 sm:rounded-lg sm:hover:bg-slate-500'>
            <Link href="#competence" className={`${activeSection === 'competence' ? 'border-b-2 lg:border-b-3' : ''}`}>Compétences</Link>
          </li>
          <li className='sm:p-2 sm:rounded-lg sm:hover:bg-slate-500'>
            <Link href="#service" className={`${activeSection === 'service' ? 'border-b-2 lg:border-b-3' : ''}`}>Services</Link>
          </li>
          <li className='sm:p-2 sm:rounded-lg sm:hover:bg-slate-500'>
            <Link href="#projet" className={`${activeSection === 'projet' ? 'border-b-2 lg:border-b-3' : ''}`}>Projets</Link>
          </li>
          <li className='sm:p-2 sm:rounded-lg sm:hover:bg-slate-500'>
            <Link href="#contact" className={`${activeSection === 'contact' ? 'border-b-2 lg:border-b-3' : ''}`}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};