
import './globals.css';

export const metadata = {
  title: 'Denis Thibaut Développeur',
  description: `Denis Thibaut, développeur web freelance basé à Barentin, spécialisé dans la création de sites web sur mesure, performants et adaptés aux mobiles. J'offre des solutions digitales innovantes pour les entreprises, startups et particuliers. Mon expertise couvre le développement front-end et back-end, ainsi que l'optimisation SEO. Découvrez mon portfolio et transformez votre vision en réalité digitale.`,
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  // keywords: ['Next.js', 'React', 'JavaScript'],
  // metadataBase : new URL(''),

  // alternates: {
  //   canonical: 'https://nextjs.org',
  //   languages: {
  //     'fr-FR': 'https://nextjs.org/en-US'
  //   },
  //   media: {
  //     'only screen and (max-width: 600px)': 'https://nextjs.org/mobile',
  //   },
  //   types: {
  //     'application/rss+xml': 'https://nextjs.org/rss',
  //   },
  // },

  // openGraph: {
  //   title: 'Denis Thibaut Développeur',
  //   description: `Denis Thibaut, développeur web freelance basé à Barentin, spécialisé dans la création de sites web sur mesure, performants et adaptés aux mobiles. J'offre des solutions digitales innovantes pour les entreprises, startups et particuliers. Mon expertise couvre le développement front-end et back-end, ainsi que l'optimisation SEO. Découvrez mon portfolio et transformez votre vision en réalité digitale.`,
  //   url: 'https://nextjs.org',
  //   siteName: 'Denis Thibaut Développeur',
  //   images: [
  //     {
  //       url: 'https://nextjs.org/public/og.png',
  //       width: 800,
  //       height: 600,
  //     },
  //     {
  //       url: 'https://nextjs.org/og-alt.png',
  //       width: 1800,
  //       height: 1600,
  //       alt: 'Développement Web',
  //     },
  //   ],
  //   locale: 'fr-FR',
  //   type: 'website',
  // },


  // verification: {
  //   google: 'google',
  //   yandex: 'yandex',
  //   yahoo: 'yahoo',
  //   other: {
  //     me: ['my-email', 'my-link'],
  //   },
  // },


  // robots: {
  //   index: false,
  //   follow: true,
  //   nocache: true,
  //   googleBot: {
  //     index: true,
  //     follow: false,
  //     noimageindex: true,
  //     'max-video-preview': -1,
  //     'max-image-preview': 'large',
  //     'max-snippet': -1,
  //   },
  // },

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

  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Next.js',
  //   description: 'The React Framework for the Web',
  //   siteId: '1467726470533754880',
  //   creator: '@nextjs',
  //   creatorId: '1467726470533754880',
  //   images: ['https://nextjs.org/og.png'],
  // },

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

  // category: 'technology',
/***** autes balises *****/
  // other: {
  //   custom: 'meta',
  // },
  // rendu : <meta name="custom" content="meta" />


}

export default function RootLayout({ children }) {

  // const schemaOrgData = {
  //   "@context": "http://schema.org",
  //   "@type": "Service",
  //   "name": "Thibaut Denis Développeur Web",
  //   "image": "/images/banner-pc-1200-675.jpg",
  //   "description": "Denis Thibaut, développeur web freelance basé à Barentin, spécialisé dans la création de sites web sur mesure, performants et adaptés aux mobiles. J'offre des solutions digitales innovantes pour les entreprises, startups et particuliers. Mon expertise couvre le développement front-end et back-end, ainsi que l'optimisation SEO. Découvrez mon portfolio et transformez votre vision en réalité digitale.",
  //   "openingHoursSpecification": [
  //     {
  //       "@type": "OpeningHoursSpecification",
  //       "dayOfWeek": [
  //         "Monday",
  //         "Tuesday",
  //         "Wednesday",
  //         "Thursday",
  //         "Friday"
  //       ],
  //       "opens": "09:00",
  //       "closes": "12:00"
  //     },
  //     {
  //       "@type": "OpeningHoursSpecification",
  //       "dayOfWeek": [
  //         "Monday",
  //         "Tuesday",
  //         "Wednesday",
  //         "Thursday",
  //         "Friday"
  //       ],
  //       "opens": "13:30",
  //       "closes": "17:30"
  //     }
  //   ],
  //   "address": {
  //     "@type": "PostalAddress",
  //     "addressLocality": "Barentin",
  //     "addressRegion": "76360"
  //   },
  //   "serviceType": [
  //     "Développeur Full Stack",
  //     "Développeur Front End",
  //     "Développeur Back End",
  //     "Développeur Web"
  //   ]
  // };

  return (
    <html lang='fr'>
      <body>{children}</body>
    </html>
  );
};