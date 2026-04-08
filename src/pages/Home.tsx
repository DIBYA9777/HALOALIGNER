import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Showcase from '../components/Showcase';
import Pricing from '../components/Pricing';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-[#1A56DB] selection:text-[#D5E100]">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Showcase />
        <Pricing />
        <Reviews />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
