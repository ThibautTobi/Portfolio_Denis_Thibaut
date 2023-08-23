import Layout from "../../../components/displayLayout";

export default function Presentation (){


        const presentData = 
                        `Je suis Denis Thibaut, un développeur web junior enthousiaste.
                        J'aime les challenges et je suis passionné par la création de solutions numériques.
                        Je suis compétent en HTML, CSS, JavaScript,
                        React et Node.js, et j'ai une expérience pratique avec MongoDB.
                        Je suis constamment à la recherche de nouvelles opportunités d'apprentissage et j'adore travailler en équipe.
                        Je suis prêt à relever des défis et à repousser les limites pour créer des interfaces intuitives et esthétiques.
                        Si vous recherchez un développeur web motivé, je serais ravi de contribuer à votre projet et de créer des produits numériques exceptionnels.
                        Contactez-moi pour en discuter davantage.`
        
        return (
            <Layout>
                <section id='present'>
                    <article className="present_article">
                    <h1>Denis Thibaut</h1>
                        <p className="present_p">
                            {presentData}
                        </p>
                    </article>
                </section>
            </Layout>
        )
     }

// };
//     return(
//         <>
//             <Layout>
//                 <h2>Présentation</h2>



//             </Layout>
//         </>
//     )
// }
