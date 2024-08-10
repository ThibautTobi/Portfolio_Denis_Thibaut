'use client'
import { useState,useEffect } from "react"

export default function ProgressScrollBar ({menuOpen}){
    // etat de base de l'axe y a 0 (haut de la page par default)
    const [scrollY, setScrollY] = useState(0);

//pour ecouter le defillement de l'axe vertical 'Y' de la page et mise a jour du useState 
    useEffect(()=>{
        
        // création de la fonction qui sera appeler a chaque defillement de la page
        const handleScroll = () => {

        if (document && document.documentElement) {

                // document.documentElement.scrollHeight: Donne la hauteur totale de la page, y compris les parties non visibles (hors écran)
                // window.innerHeight : Donne la hauteur de la fenêtre visible (viewport)
                // totalHeight : La hauteur totale que l'utilisateur peut faire défiler, calculée comme la différence entre scrollHeight et innerHeight
                const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

                // window.scrollY : La position actuelle de défilement en pixels
                const scrollPosition = window.scrollY;
                
                // scrollPercentage : Calculé comme (scrollPosition / totalHeight) * 100, ce qui donne le pourcentage de défilement de la page
                const scrollPercentage = (scrollPosition / totalHeight) * 100;

                console.log('Total Height:', totalHeight);
                console.log('Scroll Position:', scrollPosition);
                console.log('Scroll Percentage:', scrollPercentage);

                //mise a jour avec le resultat de l'operation 
                setScrollY(scrollPercentage);
            }
        };

        //fonction appeler par l'événement load de window
        const handleLoad = () => {

            // verifie si l'objet document: toute la page a été complètement chargée, y compris toutes les feuilles de style, images et sous-documents
            if (document.readyState === 'complete') {
            // Une fois que la page est complètement chargée, l'écouteur de défilement est ajouté. Cet écouteur exécute la fonction handleScroll chaque fois qu'un défilement se produit
              window.addEventListener('scroll', handleScroll);
              //La fonction handleScroll est appelée une première fois pour initialiser la barre de progression en fonction de la position actuelle de défilement lorsque la page est chargée. Cela garantit que la barre de progression est correctement positionnée dès le début, même si l'utilisateur a chargé la page à une position autre que le sommet
              handleScroll();
            //
              }
          };


        //L'événement load est déclenché lorsque l'ensemble de la page, y compris tous les styles, images et sous-documents, a été complètement chargé. Une fois que cet événement est déclenché, la fonction handleLoad est exécutée
        window.addEventListener('load', handleLoad);

        //Cette fonction de nettoyage est appelée lorsque le composant est démonté pour éviter les fuites de mémoire en supprimant l'écouteur d'événement
        return () => {
            window.removeEventListener('scroll',handleScroll);
            window.removeEventListener('load', handleLoad);
        };
    },[]);

    // Si le menu est ouvert, on ne rend pas la barre de progression
    if (menuOpen) {
      return null; // Retourne null pour ne pas afficher la barre de progression
    }

    return (   
    <div className="dark:bg-stone-800 fixed top-12 left-0 w-full h-1 bg-slate-800 sm:top-16 lg:top-[80px]">
      {/* progress-bar : Barre elle-même. Sa largeur est définie en pourcentage basé sur l'état scrollY,
       ce qui fait que la barre se remplit en fonction du pourcentage de défilement */}
      <div
        className="h-full bg-white transition-width duration-200"
        style={{ width: `${scrollY}%` }}
      />
    </div>
    )
}