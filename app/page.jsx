import dynamic from 'next/dynamic';
import Competence from './components/sections/competence';
import Presentation from './components/sections/presentation';
import RootLayout from './layout';
import Header from './components/header';
import { Suspense } from 'react';


const DynamicService = dynamic(() => import('./components/sections/service'), {
  suspense: true,
});

const DynamicPortfolio = dynamic(() => import('./components/sections/projet'), {
  suspense: true,
});

const DynamicContact = dynamic(() => import('./components/sections/contact'), {
  suspense: true,
});

const DynamicFooter = dynamic(() => import('./components/footer'), {
  suspense: true,
});

export default function Home() {
  return (
    <RootLayout>
      <main className='p-0 m-0'>
        <Suspense fallback={<p>Loading...</p>}>
          <Header />
          <Presentation />
          <Competence />
          <DynamicService />
          <DynamicPortfolio />
          <DynamicContact />
          <DynamicFooter />
        </Suspense>
      </main>
    </RootLayout>
  );
}