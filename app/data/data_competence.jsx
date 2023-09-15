import htmlIcon from '../../public/icone/html5.svg';
import cssIcon from '../../public/icone/css3.svg';
import sassIcon from '../../public/icone/sass.svg';
import tailwindIcon from '../../public/icone/tailwindCss.svg';
import javascriptIcon from '../../public/icone/js.svg';
import reactIcon from '../../public/icone/react.svg';
import nextjsIcon from '../../public/icone/nextJs.svg';
import nodejsIcon from '../../public/icone/nodeJs.svg';
import mongoDbIcon from '../../public/icone/mongoDb.svg';
import vercelIcon from '../../public/icone/vercel.svg';
import trelloIcon from '../../public/icone/trello.svg';
import figmaIcon from '../../public/icone/figma.svg';
import lighthouseIcon from '../../public/icone/lighthouse.svg';
import methodeIcon from '../../public/icone/mug.svg';
import duckIcon from '../../public/icone/duckDebugging.svg';

export const dataCompetence = [
  {
    category: "Front-end",
    skills: [
      { tech: 'HTML', icon: htmlIcon, percentage: 90 },
      { tech: 'CSS', icon: cssIcon, percentage: 80 },
      { tech: 'Sass', icon: sassIcon, percentage: 80 },
      { tech: 'Tailwind', icon: tailwindIcon, percentage: 80 },
      { tech: 'JavaScript', icon: javascriptIcon, percentage: 80 },
      { tech: 'React', icon: reactIcon, percentage: 75 },
      { tech: 'Next.js', icon: nextjsIcon, percentage: 70 },
    ]
  },
  {
    category: "Back-end",
    skills: [
      { tech: 'Node.js', icon: nodejsIcon, percentage: 80 },
      { tech: 'MongoDB', icon: mongoDbIcon, percentage: 50 },
      { tech: 'Vercel', icon: vercelIcon, percentage: 50 },
    ]
  },
  {
    category: "Autres",
    skills: [
      { tech: 'Trello', icon: trelloIcon, percentage: 80 },
      { tech: 'Figma', icon: figmaIcon, percentage: 80 },
      { tech: 'Lighthouse', icon: lighthouseIcon, percentage: 100 },
      { tech: 'Méthode Agile', icon: methodeIcon, percentage: 100 },
      { tech: 'Duck Debugging', icon: duckIcon, percentage: 100 },
    ]
  }
];

export default dataCompetence;