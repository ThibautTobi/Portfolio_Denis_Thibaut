//import Image from 'next/image'
//import Header from '../components/header';
//import HeadSeo from '../components/headSeo';
//import Link from 'next/link';
import Layout from '../components/displayLayout';
// import Competence from './pages/competence/page';
// import Contact from './pages/contact/page';
// import Presentation from './pages/presentation/page';
// import Projets from './pages/projets/page';
// import Service from './pages/service/page';

export default function Home() {
  return (
          <div>
            <Layout>
              {/* <HeadSeo /> */}
              <h1 className='bg-red-400'>Portfolio Denis Thibaut</h1>
              <h2>Developpeur Web Full Stack</h2>
              {/* <Presentation /> */}
              <p>paragraphe se paration  </p>
              {/* <Competence /> */}
              <p>paragraphe se paration  </p>
              {/* <Service /> */}
              <p>paragraphe se paration  </p>
              {/* <Projets /> */}
              <p>paragraphe se paration  </p>
              {/* <Contact /> */}
           </Layout> 
          </div>
  )
}

/*******
 * 
 * exemple lien active
 
'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export function Navigation({ navLinks }) {
  const pathname = usePathname()
 
  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href
 
        return (
          <Link
            className={isActive ? 'text-blue' : 'text-black'}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        )
      })}
    </>
  )
}

 * 
 */



// export default function Home() {
//   return (
//     <main>
//       <div className="text-center">
//           <h1 className='bg-red-400 text-slate-700'>welcome doudou</h1>
//       </div>
//     </main>
//   )
// }
