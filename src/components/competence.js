'use client'
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import code from '../../public/images/icone/code-solid.svg';
import htmlIcon from '../../public/images/icone/html5.svg';
import cssIcon from '../../public/images/icone/css3.svg';
import sassIcon from '../../public/images/icone/sass.svg';
import tailwindIcon from '../../public/images/icone/tailwindCss.svg';
import javascriptIcon from '../../public/images/icone/js.svg';
import reactIcon from '../../public/images/icone/react.svg';
import nextjsIcon from '../../public/images/icone/nextJs.svg';
import nodejsIcon from '../../public/images/icone/nodeJs.svg';
import mongoDbIcon from '../../public/images/icone/mongoDb.svg';
import vercelIcon from '../../public/images/icone/vercel.svg';
import trelloIcon from '../../public/images/icone/trello.svg';
import figmaIcon from '../../public/images/icone/figma.svg';
import lighthouseIcon from '../../public/images/icone/lighthouse.svg';
import methodeIcon from '../../public/images/icone/mug.svg';
import duckIcon from '../../public/images/icone/duckDebugging.svg';

export default function Competence() {
    const [isVisible, setIsVisible] = useState(false);
    const [displayedPercentages, setDisplayedPercentages] = useState({});
    const competencesRef = useRef(null);
      
      

  const frontEndSkills = [
    { tech: 'HTML', icon: htmlIcon, percentage: 90 },
    { tech: 'CSS', icon: cssIcon, percentage: 80 },
    { tech: 'Sass', icon: sassIcon, percentage: 80 },
    { tech: 'Tailwind', icon: tailwindIcon, percentage: 80 },
    { tech: 'JavaScript', icon: javascriptIcon, percentage: 80 },
    { tech: 'React', icon: reactIcon, percentage: 75 },
    { tech: 'Next.js', icon: nextjsIcon, percentage: 70 },
  ];

  const backEndSkills = [
    { tech: 'Node.js', icon: nodejsIcon, percentage: 80 },
    { tech: 'MongoDB', icon: mongoDbIcon, percentage: 50 },
    { tech: 'Vercel', icon: vercelIcon, percentage: 50 },
  ];

  const otherSkills = [
    { tech: 'Trello', icon: trelloIcon, percentage: 80 },
    { tech: 'Figma', icon: figmaIcon, percentage: 80 },
    { tech: 'Lighthouse', icon: lighthouseIcon, percentage: 100 },
    { tech: 'Méthode Agile', icon: methodeIcon, percentage: 100 },
    { tech: 'Duck Debugging', icon: duckIcon, percentage: 100 },
  ];

  // Fusion des compétences pour la mise à jour
  const skills = [...frontEndSkills, ...backEndSkills, ...otherSkills];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.6 }
    );

    if (competencesRef.current) {
      observer.observe(competencesRef.current);
    }

    return () => {
      if (competencesRef.current) {
        observer.unobserve(competencesRef.current);
      }
    };
  }, []);

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

        if (allDone) {
          clearInterval(interval);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isVisible, displayedPercentages]);


  return (
    <section id="competence" ref={competencesRef} className='bg-slate-800 text-white p-2'>
      <h2 className="text-2xl text-center font-bold m-3 lg:text-4xl">Compétences</h2>
      <Image
        src={code}
        alt=''
        width={110}
        height={110}
        className='m-auto mt-4 mb-4'
      />
      <div className='flex flex-col md:flex-row'>
        <div className="mb-6 text-center p-6 ml-3 mr-3 md:w-1/2">
          <h3 className="text-xl font-semibold mb-2 lg:text-2xl">Front end</h3>

          {frontEndSkills.map((item) => (
            <div key={item.tech} className="mb-4">
              <div className="flex justify-between items-center">
                <Image 
                  src={item.icon}
                  alt={item.tech}
                  width={30}
                  height={30}
                  className='m-2 lg:m-4'
                />
                <span>{item.tech}</span>
                <span>{isVisible ? `${displayedPercentages[item.tech] || 0}%` : '0%'}</span>
              </div>
              <div className="bg-slate-400 h-4 rounded">
                <div
                  style={{ width: `${displayedPercentages[item.tech] || 0}%` }}
                  className="bg-white h-4 rounded transition-width duration-2000"
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-6 text-center p-6 ml-3 mr-3 md:w-1/2">
          <h3 className="text-xl font-semibold mb-2 lg:text-2xl">Back end</h3>

          {backEndSkills.map((item) => (
            <div key={item.tech} className="mb-4">
              <div className="flex justify-between items-center">
                <Image 
                  src={item.icon}
                  alt={item.tech}
                  width={30}
                  height={30}
                  className='m-2'
                />
                <span>{item.tech}</span>
                <span>{isVisible ? `${displayedPercentages[item.tech] || 0}%` : '0%'}</span>
              </div>
              <div className="bg-slate-400 h-4 rounded">
                <div
                  style={{ width: `${displayedPercentages[item.tech] || 0}%` }}
                  className="bg-white h-4 rounded transition-width duration-2000"
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Autres compétences */}
      <div className='text-center p-6 ml-3 mr-3 md:w-1/2'>
        <h3 className="text-xl font-semibold mb-2 lg:text-2xl">Autres</h3>
        {otherSkills.map((item) => (
          <div key={item.tech} className="mb-4">
            <div className="flex justify-between items-center">
              <Image 
                src={item.icon}
                alt={item.tech}
                width={30}
                height={30}
                className='m-2'
              />
              <span>{item.tech}</span>
              <span>{isVisible ? `${displayedPercentages[item.tech] || 0}%` : '0%'}</span>
            </div>
            <div className="bg-slate-400 h-4 rounded">
              <div
                style={{ width: `${displayedPercentages[item.tech] || 0}%` }}
                className="bg-white h-4 rounded transition-width duration-2000"
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



// {frontEndSkills.map((item, index) => (
//   <div key={index} className="mb-4">
//     <div className="flex justify-between items-center">
//       <span>{item.icon}</span> {/* Affichez l'icône ici */}
//       <span>{isVisible ? `${displayedPercentages[item.tech] || 0}%` : '0%'}</span>
//     </div>
//     <div className="bg-slate-400 h-4 rounded">
//       <div
//         style={{ width: `${displayedPercentages[item.tech] || 0}%` }}
//         className="bg-white h-4 rounded transition-width duration-2000"
//       ></div>
//     </div>
//   </div>
// ))}


// import { useEffect, useState, useRef } from 'react';
// import Image from 'next/image';
// import code from '../../../images/icone/code-solid.svg';

// export default function Competence() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [displayedPercentages, setDisplayedPercentages] = useState({});
//   const competencesRef = useRef(null);



//   const otherSkills = [
//     { tech: 'Trello', percentage: 80 },
//     { tech: 'Figma', percentage: 80 },
//     { tech: 'Méthode Agile', percentage: 100 },
//   ];

//   // Fusion des compétences pour la mise à jour
//   const skills = [...frontEndSkills, ...backEndSkills, ...otherSkills];

//   // Observer pour détecter quand la section est visible
//   useEffect(() => {
//     /* ... (votre code d'observation existant) ... */
//   }, []);

//   // Mettre à jour les pourcentages affichés lors de la visibilité
//   useEffect(() => {
//     /* ... (votre code de mise à jour existant) ... */
//   }, [isVisible, displayedPercentages]);

//   return (
//     <section id="competence" ref={competencesRef} className='bg-slate-800 text-white p-2'>
//       {/* ... (votre code d'affichage existant pour le titre et l'image) ... */}

//       <div className='flex flex-col md:flex-row '>
//         {/* Section Front-end */}
//         <div className="mb-6 text-center p-6 ml-3 mr-3 md:w-1/2">
//           {/* ... (votre code d'affichage existant pour les compétences front-end) ... */}
//         </div>

//         {/* Section Back-end */}
//         <div className="mb-6 text-center p-6 ml-3 mr-3 md:w-1/2">
//           {/* ... (votre code d'affichage existant pour les compétences back-end) ... */}
//         </div>
//       </div>

      
//     </section>
//   );
// }
