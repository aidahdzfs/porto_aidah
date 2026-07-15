import React from 'react';
import Navbar from '../components/navbar';
import Hero from '../sections/hero';
import Stack from '../sections/stack';
import Projects from '../sections/projects';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className="selection:bg-blue-100 selection:text-blue-800">
      <Navbar />
      <main>
        <Hero />
        <Stack />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}