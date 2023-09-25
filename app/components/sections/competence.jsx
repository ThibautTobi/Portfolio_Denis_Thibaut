'use client'
import React, { useEffect, useState, useRef ,memo } from 'react';
import dataCompetence from '../../data/data_competence';
import Image from 'next/image';
import code from '../../../public/icone/code-solid.svg';
import SkillBar from '../skillBar';

export default function Competence() {
  // État pour déterminer si la section des compétences est visible à l'écran
  const [isVisible, setIsVisible] = useState(false);
  // État pour stocker les pourcentages affichés des compétences
  const [displayedPercentages, setDisplayedPercentages] = useState({});
  // Référence pour observer la section des compétences
  const competencesRef = useRef(null);
  // Version mémorisée du composant SkillBar pour éviter des rendus inutiles
  const MemoSkillBar = React.memo(SkillBar);

  // Fusion des compétences pour la mise à jour
  const skills = [].concat(...dataCompetence.map(category => category.skills));


  // Effet pour observer si la section des compétences est visible à l'écran
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Si la section est visible, mettre à jour l'état `isVisible`
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.6 }
    );
    // Commencer à observer la section
    if (competencesRef.current) {
      observer.observe(competencesRef.current);
    }
    // Arrêter d'observer la section lors du nettoyage
    return () => {
      if (competencesRef.current) {
        observer.unobserve(competencesRef.current);
      }
    };
  }, []);
  // Effet pour animer les pourcentages des compétences lorsqu'ils sont visibles
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        let allDone = true;
        const newPercentages = {};

        skills.forEach((skill) => {
          const currentPercentage = displayedPercentages[skill.tech] || 0;
          if (currentPercentage < skill.percentage) {
            allDone = false;
            newPercentages[skill.tech] = currentPercentage + 1;
          } else {
            newPercentages[skill.tech] = skill.percentage;
          }
        });
        setDisplayedPercentages(newPercentages);
        // Si tous les pourcentages sont affichés, arrêter l'intervalle
        if (allDone) {
          clearInterval(interval);
        }
      }, 50);
      // Nettoyer l'intervalle lors du nettoyage
      return () => clearInterval(interval);
    }
  }, [isVisible, displayedPercentages]);

  return (
        <section id="competence" className='bg-slate-800 text-white p-2'>
          <h2 className="text-2xl text-center font-bold m-3 lg:text-4xl">Compétences</h2>
          <Image src={code} alt='code' width={110} height={110} className='m-auto mt-4 mb-4' />
          <div className='flex flex-col md:flex-row'>
              {dataCompetence.map(category => (
                  <div key={category.category} className="mb-6 text-center p-6 ml-3 mr-3 md:w-1/2">
                      <h3 className="text-xl font-semibold mb-2 lg:text-2xl">{category.category}</h3>
                      {category.skills.map(skill => (
                          <MemoSkillBar key={skill.tech} {...skill} />
                      ))}
                  </div>
              ))}
          </div>
        </section>
  );
}