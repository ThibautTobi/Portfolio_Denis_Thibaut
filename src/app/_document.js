// import Document, { Html, Head, Main, NextScript } from 'next/document';

// class MyDocument extends Document {

//   render()
  
//   {
//     const schemaOrgData = {
//       "@context": "http://schema.org",
//       "@type": "Service",
//       "name": "Thibaut Denis Développeur Web",
//       "image": "/images/banner-pc-1200-675.jpg",
//       "description": "Denis Thibaut, développeur web freelance basé à Barentin, spécialisé dans la création de sites web sur mesure, performants et adaptés aux mobiles. J'offre des solutions digitales innovantes pour les entreprises, startups et particuliers. Mon expertise couvre le développement front-end et back-end, ainsi que l'optimisation SEO. Découvrez mon portfolio et transformez votre vision en réalité digitale.",
//       "openingHoursSpecification": [
//         {
//           "@type": "OpeningHoursSpecification",
//           "dayOfWeek": [
//             "Monday",
//             "Tuesday",
//             "Wednesday",
//             "Thursday",
//             "Friday"
//           ],
//           "opens": "09:00",
//           "closes": "12:00"
//         },
//         {
//           "@type": "OpeningHoursSpecification",
//           "dayOfWeek": [
//             "Monday",
//             "Tuesday",
//             "Wednesday",
//             "Thursday",
//             "Friday"
//           ],
//           "opens": "13:30",
//           "closes": "17:30"
//         }
//       ],
//       "address": {
//         "@type": "PostalAddress",
//         "addressLocality": "Barentin",
//         "addressRegion": "76360"
//       },
//       "serviceType": [
//         "Développeur Full Stack",
//         "Développeur Front End",
//         "Développeur Back End",
//         "Développeur Web"
//       ]
//     };

//     return (
//       <Html lang="fr">
//         <Head>
//           {/* Balise Canonical : Pour éviter les problèmes de contenu dupliqué. */}
//           <link rel="canonical" href="URL_COMPLÈTE_DE_VOTRE_PAGE" />

//           <meta charSet="UTF-8" />
//           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//           <title>Portfolio Denis Thibaut Developpeur Web</title>
//           <meta name="description" 
//                 content="Denis Thibaut, développeur web freelance basé à Barentin,
//                 spécialisé dans la création de sites web sur mesure, performants et adaptés aux mobiles.
//                 j'offre des solutions digitales innovantes pour les entreprises,
//                 startups et particuliers. Mon expertise couvre le développement front-end et back-end,
//                 ainsi que l'optimisation SEO.
//                 Découvrez mon portfolio et transformez votre vision en réalité digitale." />

//           {/* Métadonnées Open Graph pour les réseaux sociaux */}
//           <meta property="og:title" content="Thibaut Denis - Développeur Web Freelance" />
//           <meta property="og:description" 
//                 content="Thibaut Denis, développeur web freelance basé à Barentin.
//                 Spécialisé dans la création de sites web sur mesure,
//                 performants et adaptés aux mobiles. Découvrez mon portfolio!" />
//           <meta property="og:image" content="/images/banner-pc-1200-630.jpg" />
//           <meta property="og:url" content="URL de la page ..." />

//           {/* Métadonnées Twitter Card pour Twitter */}
//           <meta name="twitter:card" content="summary_large_image" />
//           <meta name="twitter:title" content="Thibaut Denis - Développeur Web Freelance" />
//           <meta name="twitter:description" content="Création de sites web sur mesure pour entreprises et particuliers. Découvrez mon expertise et mon portfolio!" />
//           <meta name="twitter:image" content="/images/banner-pc-1200-628.jpg" />

//           {/* Balises de favicons */}
//           <link rel="icon" type="image/png" sizes="32x32" href="/src/app/dev-32.png" />
//           <link rel="icon" type="image/png" sizes="16x16" href="/src/app/dev-16.png" />
//           <link rel="apple-touch-icon" sizes="180x180" href="/src/app/dev-180.png" />

//           {/* shema org */}
//           <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgData) }} />

//         </Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }

// export default MyDocument;



/********
 * 
 * 
Il existe trois valeurs possibles pour l'attribut loading :

auto : C'est la valeur par défaut. L'image sera chargée immédiatement lorsque la page sera chargée.
lazy : L'image sera chargée lorsque l'utilisateur fera défiler la page et que l'image deviendra visible dans la fenêtre du navigateur.
eager : L'image sera chargée immédiatement, même si elle n'est pas encore visible dans la fenêtre du navigateur. 

exemple:
<img
  src="chemin/vers/image.jpg"
  alt="Description de l'image"
  loading="lazy"
>

propose une alternative si le navigateur ne supporte pas le format d'image

exemple:
<picture>
  <source srcset="chemin/vers/image.webp" type="image/webp">
  <source srcset="chemin/vers/image.jpg" type="image/jpeg">
  <img src="chemin/vers/image.jpg" alt="Description de l'image">
</picture>

partager directement le site web dans les publication reseau sociaux

Chaque réseau social a sa propre manière de gérer les liens de partage. Voici comment vous pouvez créer des liens de partage pour quelques réseaux sociaux populaires :

Facebook :
Pour partager un lien sur Facebook, vous pouvez utiliser l'URL suivante :

arduino
Copy code
https://www.facebook.com/sharer/sharer.php?u={URL_DU_CONTENU}
Remplacez {URL_DU_CONTENU} par l'URL que vous souhaitez partager. Vous pouvez placer ce lien dans la balise <a> pour créer un bouton de partage.

Twitter :
Pour partager sur Twitter, utilisez :

vbnet
Copy code
https://twitter.com/intent/tweet?url={URL_DU_CONTENU}&text={TEXTE_DU_TWEET}
Remplacez {URL_DU_CONTENU} par l'URL et {TEXTE_DU_TWEET} par le texte que vous voulez inclure dans le tweet.

LinkedIn :
Pour LinkedIn, utilisez :

arduino
Copy code
https://www.linkedin.com/shareArticle?url={URL_DU_CONTENU}&title={TITRE_DU_CONTENU}
Remplacez {URL_DU_CONTENU} par l'URL et {TITRE_DU_CONTENU} par le titre de la page que vous souhaitez partager.

 * 
 */


{/* <script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "Service",
  "name": "Thibaut Denis Développeur Web",
  "image": "/images/thibaut.webp",
  "description": "Denis Thibaut, développeur web freelance basé à Barentin, spécialisé dans la création de sites web sur mesure, performants et adaptés aux mobiles. J'offre des solutions digitales innovantes pour les entreprises, startups et particuliers. Mon expertise couvre le développement front-end et back-end, ainsi que l'optimisation SEO. Découvrez mon portfolio et transformez votre vision en réalité digitale.",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "12:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "13:30",
      "closes": "17:30"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Barentin",
    "addressRegion": "76360"
  },
  "serviceType": [
    "Développeur Full Stack",
    "Développeur Front End",
    "Développeur Back End",
    "Développeur Web"
  ]
}
</script> */}