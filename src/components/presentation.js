import Image from "next/image";
import moi from '../../public/images/Thibaut_Art.jpg';

export default function Presentation (){

        return (
                <section id='present'>
                    <article className="text-center">
                        <h1 className="text-slate-800 font-bold text-2xl mb-4 pt-20 lg:pt-26">Denis Thibaut</h1>
                        <Image 
                            src={moi}
                            alt="moi"
                            width={200}
                            height={200}
                            className="rounded-xl m-auto border-solid border-4 border-slate-800"
                        />
                        <h2 className="text-slate-800 mt-4 mb-4 text-xl font-bold"> Développeur Full Stack</h2>
                        <p className="w-4/5 bg-slate-400 rounded-xl m-auto p-4 mb-6 lg:mb-10">
                        Je suis Denis Thibaut, un développeur web enthousiaste.<br/>
                        J'aime les challenges et je suis passionné par la création de solutions numériques.<br/>
                        Je suis compétent en HTML, CSS, JavaScript,
                        React, nextJs et NodeJs, et j'ai une expérience pratique avec MongoDB et Vercel.<br/>
                        Je suis constamment à la recherche de nouvelles opportunités d'apprentissage et j'adore travailler en équipe.<br/>
                        Je suis prêt à relever des défis et à repousser les limites pour créer des interfaces intuitives et esthétiques.<br/>
                        Si vous recherchez un développeur web motivé, je serais ravi de contribuer à votre projet et de créer des produits numériques exceptionnels.<br/>
                        Contactez-moi pour en discuter davantage.
                        </p>
                    </article>
                </section>
        )
     }
