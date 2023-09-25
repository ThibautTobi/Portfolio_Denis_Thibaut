import './globals.css';

export const metadata = {
  charset: "UTF-8",
  viewport: "width=device-width, initial-scale=1.0",
  title: 'Denis Thibaut Développeur',
  description: `Denis Thibaut, développeur web freelance basé à Barentin, spécialisé dans la création de sites web sur mesure, performants et adaptés aux mobiles. J'offre des solutions digitales innovantes pour les entreprises, startups et particuliers. Mon expertise couvre le développement front-end et back-end, ainsi que l'optimisation SEO. Découvrez mon portfolio et transformez votre vision en réalité digitale.`,
  keywords: ['Developpeur Web', 'Developpeur Front End', 'Developpeur Back End', 'Developpeur Full Stack'],
  author: 'Denis Thibaut',
  robots: 'index, follow',
  canonical: 'https://denis-thibaut.com',
  url: 'https://denis-thibaut.com',
  image: 'https://denis-thibaut.com/public/banner-pc-1800-1600.webp',
  alt: `Developpeur Denis Thibaut`,
  locale: 'fr-FR',
  type: 'website',
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
  twitter: {
    card: 'summary_large_image',
    title: 'Développeur Denis Thibaut',
    description: `Denis Thibaut, développeur web freelance basé à Barentin, spécialisé dans la création de sites web sur mesure, performants et adaptés aux mobiles. J'offre des solutions digitales innovantes pour les entreprises, startups et particuliers. Mon expertise couvre le développement front-end et back-end, ainsi que l'optimisation SEO. Découvrez mon portfolio et transformez votre vision en réalité digitale.`,
    creator: 'Denis Thibaut',
    images: ['https://denis-thibaut.com/public/banner-pc-1800-1600.webp'],
  },

  // icons: {
  //   icon: '/icon.png',
  //   shortcut: '/shortcut-icon.png',
  //   apple: '/apple-icon.png',
  //   other: {
  //     rel: 'apple-touch-icon-precomposed',
  //     url: '/apple-touch-icon-precomposed.png',
  //   },
  // },

  // manifest: 'https://nextjs.org/manifest.json',

  // itunes: {
  //   appId: 'myAppStoreID',
  //   appArgument: 'myAppArgument',
  // },
  // appleWebApp: {
  //   title: 'Apple Web App',
  //   statusBarStyle: 'black-translucent',
  //   startupImage: [
  //     '/assets/startup/apple-touch-startup-image-768x1004.png',
  //     {
  //       url: '/assets/startup/apple-touch-startup-image-1536x2008.png',
  //       media: '(device-width: 768px) and (device-height: 1024px)',
  //     },
  //   ],
  // },


  // appLinks: {
  //   ios: {
  //     url: 'https://nextjs.org/ios',
  //     app_store_id: 'app_store_id',
  //   },
  //   android: {
  //     package: 'com.example.android/package',
  //     app_name: 'app_name_android',
  //   },
  //   web: {
  //     url: 'https://nextjs.org/web',
  //     should_fallback: true,
  //   },
  // },

}

export default function RootLayout({ children }) {

  return (
    <html lang='fr'>
      <body>{children}</body>
    </html>
  );
};