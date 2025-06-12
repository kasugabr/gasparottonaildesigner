import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Booking from './components/Booking';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Policy from './components/Policy';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Booking />
      <Testimonials />
      <Blog />
      <Contact />
      <FAQ />
      <Policy />
      <Footer />
    </div>
  );
}

export default App;