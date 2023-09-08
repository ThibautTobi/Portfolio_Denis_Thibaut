import Image from 'next/image';
import cree from '../../public/images/icone/cree_site.svg';
import seo from '../../public/images/icone/optimisation.svg';
import consultant from '../../public/images/icone/consultant.svg';
import maintenance from '../../public/images/icone/upload-solid.svg';
export default function Service (){

    return(
            <section id="service">
                <div className="p-4 text-center mb-3">
                    <h2 className="text-2xl mb-2 font-bold text-slate-800 lg:text-4xl">Services</h2>
                    <article className='w-4/5 bg-slate-400 rounded-xl m-auto p-4 mb-6 lg:mb-10'>
                        <Image 
                        src={cree} 
                        alt='Creation de site'
                        width={130} 
                        height={130}
                        className='inline m-3'
                        />
                        <h3 className='font-bold text-slate-800 mb-2 sm:text-xl lg:text-2xl'>Conception de sites web</h3>
                        <p className='text-left'>
                        Mon expertise vous offre bien plus qu'un simple site web,<br/>
                        c'est une expérience sur mesure qui prend vie.<br/>
                        Chaque projet est une toile vierge, prête à être imprégnée de vos idées uniques.<br/>
                        Je m'immerge dans votre vision pour concevoir un site qui raconte votre histoire,<br/>
                        véhicule votre identité et répond précisément aux besoins de votre public.<br/>
                        De la conception à la réalisation, chaque élément est soigneusement élaboré pour garantir une expérience utilisateur exceptionnelle.<br/>
                        Avec une approche axée sur la créativité et l'agilité ,je crée des sites web qui captivent, convertissent et laissent une empreinte mémorable.
                        </p>
                    </article>
                    <article className='w-4/5 bg-slate-400 rounded-xl m-auto p-4 mb-6 lg:mb-10'>
                        <Image src={seo} alt='Optimisation et Seo' 
                        width={130} 
                        height={130}
                        className='inline m-3'/>
                        <h3 className='font-bold text-slate-800 mb-2 sm:text-xl lg:text-2xl'>Optimisation SEO et des Performances</h3>
                        <p className='text-left'>
                        Élevez votre présence en ligne grâce à mon expertise en optimisation SEO.
                        Je m'assure que votre site se démarque en tête des résultats de recherche tout en garantissant une performance exceptionnelle.
                        L'association de la visibilité et de la vitesse crée une expérience utilisateur inoubliable.
                        </p>
                    </article>
                    <article className='w-4/5 bg-slate-400 rounded-xl m-auto p-4 mb-6 lg:mb-10'>
                        <Image 
                        src={consultant} 
                        alt='Consultant Web'
                        width={110}
                        height={110}
                        className='inline m-3' 
                        />
                        <h3 className='font-bold text-slate-800 mb-2 sm:text-xl lg:text-2xl'>Consultation et Conseils</h3>
                        <p className='text-left'>
                        Accompagnement personnalisé dans le monde du développement web.
                        Je suis votre conseiller pour transformer vos idées en stratégies digitales.
                        Comprendre vos besoins spécifiques me permet de proposer des solutions sur mesure qui vous aident à prospérer dans l'univers en ligne.
                        </p>
                    </article>
                    <article className='w-4/5 bg-slate-400 rounded-xl m-auto p-4 lg:mb-10'>
                        <Image 
                        src={maintenance} 
                        alt='Maintenance Web'
                        width={110}
                        height={110}
                        className='inline m-3' 
                        />
                        <h3 className='font-bold text-slate-800 mb-2 sm:text-xl lg:text-2xl'>Maintenance et Optimisation de vos Applications Web</h3>
                        <p className='text-left'>
                        Assurez la pérennité et l'efficacité de vos applications web avec un service spécialisé dans la maintenance.<br/>
                        De la mise à jour régulière à la correction de bugs, en passant par l'amélioration des performances,<br/>
                        nous veillons à ce que votre application reste à la pointe de la technologie.<br/>
                        Bénéficiez d'une expérience utilisateur sans faille, d'une sécurité renforcée et d'une application toujours opérationnelle.<br/>
                        Faites confiance à un expert en développement web pour garantir la longévité et la robustesse de vos solutions numériques.
                        </p>
                    </article>
                </div>
            </section>
    )
};