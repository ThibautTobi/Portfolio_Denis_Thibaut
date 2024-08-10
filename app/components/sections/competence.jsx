'use client'
import React from 'react';
import dataCompetence from '../../data/data_competence';
import Image from 'next/image';
import code from '../../../public/icone/code-solid.svg';
import SkillBar from '../skillBar';

export default function Competence() {
  // Version mémorisée du composant SkillBar pour éviter des re-rendus inutiles, ameliorations de performances , evite des recalcules
  const MemoSkillBar = React.memo(SkillBar);

  return (
        <section id="competence" className='dark:bg-stone-800 bg-slate-800 text-white p-2'>
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