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
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.6 }
        );

        if (skillRef.current) {
            observer.observe(skillRef.current);
        }

        return () => {
            if (skillRef.current) {
                observer.unobserve(skillRef.current);
            }
        };
    }, []);

    // Effet pour animer le pourcentage affiché
    useEffect(() => {
        if (isVisible) {
            const interval = setInterval(() => {
                if (displayedPercentage < percentage) {
                    setDisplayedPercentage(prev => prev + 1);
                } else {
                    clearInterval(interval);
                }
            }, 50);

            return () => clearInterval(interval);
        }
    }, [isVisible, displayedPercentage, percentage]);

    return (
        // Conteneur de la barre de compétence
        <div className="mb-4" ref={skillRef}>
            <div className="flex justify-between items-center">
                <Image 
                    src={icon}
                    alt={tech}
                    aria-label={tech}
                    width={30}
                    height={30}
                    className='m-2 lg:m-4'
                />
                <span>{tech}</span>
                <span>{isVisible ? `${displayedPercentage}%` : '0%'}</span>
            </div>
            <div className="bg-slate-400 h-4 rounded">
                <div
                    style={{ width: `${displayedPercentage}%` }}
                    className="bg-white h-4 rounded transition-width duration-2000"
                ></div>
            </div>
        </div>
    );
};