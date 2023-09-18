import Competence from './components/sections/competence';
import Contact from './components/sections/contact';
import Presentation from './components/sections/presentation';
import Portfolio from './components/sections/projet';
import Service from './components/sections/service';
import RootLayout from './layout';
import Header from './components/header';
import Footer from './components/footer';

export default function Home() {
 
  return (
        <RootLayout>
          <main className='p-0 m-0'>
            <Header />
            <Presentation />
            <Competence />
            <Service />
            <Portfolio />
            <Contact />
            <Footer />
          </main>
        </RootLayout>
  );
}
