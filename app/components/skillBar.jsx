/*************************** verification final */
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function SkillBar({ tech, icon, percentage }) {
    // État pour vérifier si la barre de compétence est visible
    const [isVisible, setIsVisible] = useState(false);
    // État pour le pourcentage affiché
    const [displayedPercentage, setDisplayedPercentage] = useState(0);
    // Référence pour observer le composant
    const skillRef = useRef(null);

    // Effet pour observer si le composant est visible à l'écran
    // utilisation du hook useEffect pour executer du code aprés le rendu du composant.
    useEffect(() => {
        //création de l'observateur d'intersection pour chaque barre de compétence (animation de chaque barre indépendamment).
        //IntersectionObserver est une API du navigateur qui permet de savoir quand un élément entre ou sort du viewport (la partie visible de la fenêtre).
        const observer = new IntersectionObserver(
            ([entry]) => {
                // si "entry" qui représente l'objet de la fonction intersection est visible dans la fenetre ( la section visible) 
                if (entry.isIntersecting) {
                    // mise a jour sur vrai (élément visible)
                    setIsVisible(true);
                }
            },
            // 0.6 = a 60% ou plus de l'élément visibles dans le "viewport".
            { threshold: 0.6 }
        );
        //si la reference skillRef que l'on "observe avec l'api du navigateur: new IntersectionObserver"
        //est visible , qui correspond a la ref associer a la div du jsx.
        //la constante skillRef n'est plus null mais contiendra une ref a cette div.
        if (skillRef.current) {
            observer.observe(skillRef.current);
        }

        return () => {
            //si skillRef n'est pas null ont nettoie et arréte d'observer pour les fuites de mémoires et bug
            //Arrêter d'observer l'élément lorsque le composant est démonté
            if (skillRef.current) {
                observer.unobserve(skillRef.current);
            }
        };
        // le tableau vide signifie execution qu'une seul fois aprés le rendu du composant.
    }, []);

    // Effet pour animer le pourcentage affiché
    useEffect(() => {
        // si la div est visible 
        if (isVisible) {
            // création d'un intervalle toutes les 50 millisecondes.
            const interval = setInterval(() => {
                // a chaque interval ont verifie si displayedPercentage est inferieur a percentage cible.
                if (displayedPercentage < percentage) {
                    // si c'est pas le cas  ont rajoute 1
                    setDisplayedPercentage(prev => prev + 1);
                // si le pourcentage cible est atteint ont arréte l'interval
                } else {
                    clearInterval(interval);
                }
            }, 50);
            // nettoie l'intervalle / avant reexecution nettoyage préalable
            return () => clearInterval(interval);
        }
        // si changement des dependances activation du useEffect
    }, [isVisible, displayedPercentage, percentage]);

    return (
        // div avec la ref pour l'observation
        <div className="mb-4" ref={skillRef}>
            <div className="flex justify-between items-center">
                <Image 
                    src={icon}
                    alt={tech}
                    aria-label={tech}
                    width={30}
                    // height={30}
                    height="auto"
                    className='m-2 lg:m-4'
                />
                <span>{tech}</span>
                {/* si non visible afficher 0 sinon affichage des pourcentages */}
                <span>{isVisible ? `${displayedPercentage}%` : '0%'}</span>
            </div>
            <div className="dark:bg-neutral-400 bg-slate-400 h-4 rounded">
                {/* change dynamiquement en fonction du nombre de pourcentage affiché */}
                <div
                    style={{ width: `${displayedPercentage}%` }}
                    className="bg-white h-4 rounded transition-width duration-2000"
                ></div>
            </div>
        </div>
    );
};