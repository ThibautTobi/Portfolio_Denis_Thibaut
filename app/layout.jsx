import { ThemeProvider } from './components/themeContexe';
import './globals.css';
import { Ubuntu, Caveat } from 'next/font/google';

// Importer les variantes de poids et de style que vous souhaitez utiliser
const ubuntu = Ubuntu({
  weight: ['400', '700'], // Normale et gras
  style: ['normal', 'italic'], // Italique et normale
  subsets: ['latin'], // Sous-ensemble de caractères
  variable: '--font-ubuntu', // Variable CSS pour Tailwind
});

const caveat = Caveat({
  weight: ['400', '700'], // Seulement 'normal' disponible pour Caveat
  style: ['normal'], // Italique non supporté par Caveat
  subsets: ['latin'],
  variable: '--font-caveat',
});

// Utilisation de l'API des métadonnées de Next.js
export const metadata = {
  charset: "UTF-8",
  viewport: "width=device-width, initial-scale=1.0",
  title: 'Denis Thibaut Développeur',
  description: `Denis Thibaut, développeur web freelance basé à Barentin, spécialisé dans la création de sites web sur mesure, performants et adaptés aux mobiles. J'offre des solutions digitales innovantes pour les entreprises, startups et particuliers. Mon expertise couvre le développement front-end et back-end, ainsi que l'optimisation SEO. Découvrez mon portfolio et transformez votre vision en réalité digitale.`,
  keywords: ['Developpeur Web', 'Developpeur Front End', 'Developpeur Back End', 'Developpeur Full Stack'],
  author: 'Denis Thibaut',
  robots: 'index, follow',
  canonical: 'https://denis-thibaut.com',

  // Balises Open Graph pour le partage sur les réseaux sociaux
  openGraph: {
    title: 'Denis Thibaut Développeur',
    description: `Denis Thibaut, développeur web freelance basé à Barentin, spécialisé dans la création de sites web sur mesure, performants et adaptés aux mobiles. J'offre des solutions digitales innovantes pour les entreprises, startups et particuliers. Mon expertise couvre le développement front-end et back-end, ainsi que l'optimisation SEO. Découvrez mon portfolio et transformez votre vision en réalité digitale.`,
    url: 'https://denis-thibaut.com',
    siteName: 'Denis Thibaut Développeur',
    images: [
      {
        url: 'https://denis-thibaut.com/public/banner-pc-800-600.webp',
        width: 800,
        height: 600,
        alt: 'Développeur Web'
      },
      {
        url: 'https://denis-thibaut.com/public/banner-pc-1800-1600.webp',
        width: 1800,
        height: 1600,
        alt: 'Développement Web',
      },
    ],
    locale: 'fr-FR',
    type: 'website',
  },

    // Balises Twitter Card pour le partage sur Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Développeur Denis Thibaut',
    description: `Denis Thibaut, développeur web freelance basé à Barentin, spécialisé dans la création de sites web sur mesure, performants et adaptés aux mobiles. J'offre des solutions digitales innovantes pour les entreprises, startups et particuliers. Mon expertise couvre le développement front-end et back-end, ainsi que l'optimisation SEO. Découvrez mon portfolio et transformez votre vision en réalité digitale.`,
    creator: 'Denis Thibaut',
    images: ['https://denis-thibaut.com/public/banner-pc-1800-1600.webp'],
  },

  // Balises de lien pour favicons et manifest
    // link: [
    //   { rel: 'icon', href: '/favicon.ico' },
    //   { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    //   { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    //   { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    //   { rel: 'manifest', href: '/site.webmanifest' },
    //   { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
    //   { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
    // ],

  // Balises méta supplémentaires pour l'optimisation
  // meta: [
  //   { name: 'theme-color', content: '#000000' }, // Couleur de la barre d'adresse sur mobile
  //   { name: 'HandheldFriendly', content: 'True' },
  //   { name: 'MobileOptimized', content: '320' }, // Optimisation mobile
  //   { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }, // Compatibilité IE
  //   { name: 'referrer', content: 'no-referrer-when-downgrade' }, // Politique de referrer
  // ],

  // Ajout du JSON-LD via l'API des métadonnées
  script: [
    {
      type: 'application/ld+json',
      json: {
        "@context": "http://schema.org",
        "@type": "LocalBusiness",
        "name": "Thibaut Denis Développeur Web",
        "image": "http://www.denis-thibaut.com/public/banner-pc-800-600.webp",
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
      }
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang='fr' className={`${ubuntu.variable} ${caveat.variable}`}>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}