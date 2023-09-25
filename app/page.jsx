import Competence from './components/sections/competence';
import Contact from './components/sections/contact';
import Presentation from './components/sections/presentation';
import Portfolio from './components/sections/projet';
import Service from './components/sections/service';
import RootLayout from './layout';
import Header from './components/header';
import Footer from './components/footer';
import { Suspense } from 'react';

export const jsonLd = 
{
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    "name": "Thibaut Denis Développeur Web",
    "image": "http://www.denis-thibaut.com/public/banner-pc-800-600.webp/",
    "description": "Denis Thibaut, développeur web freelance basé à Barentin, spécialisé dans la création de sites web sur mesure, performants et adaptés aux mobiles. J'offre des solutions digitales innovantes pour les entreprises, startups et particuliers. Mon expertise couvre le développement front-end et back-end, ainsi que l'optimisation SEO. Découvrez mon portfolio et transformez votre vision en réalité digitale.",
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Développeur Full Stack"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Développeur Front End"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Développeur Back End"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Développeur Web"
        }
      }
    ],
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
    }
};

export default function Home() {

  return (
        <RootLayout>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
          <main className='p-0 m-0'>
            {/* <Suspense fallback={<p>Loading ...</p>}> */}
                <Header />
                <Presentation />
                <Competence />
                <Service />
                <Portfolio />
                <Contact />
                <Footer />
            {/* </Suspense> */}
          </main>
        </RootLayout>
  );
}
