'use client'

import React from 'react';
import Competence from '@/components/competence';
import Contact from '@/components/contact';
import Presentation from '@/components/presentation';
import Portfolio from '@/components//projets';
import Service from '@/components//service';
import RootLayout from './layout';
import Header from '@/components/header';
import Footer from '@/components/footer';
// import Head from 'next/head';

export default function Home() {
  return (
    <div className='p-0 m-0 h-full w-full sm:text-lg lg:text-2xl 2xl:text-3xl'>
        <RootLayout>
            <Header />
            <Presentation />
            <Competence />
            <Service />
            <Portfolio />
            <Contact />
            <Footer />
        </RootLayout>
      </div>
  );
}
