import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCustomizer } from './components/ProductCustomizer';
import { Services } from './components/Services';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { ProjectDetail } from './components/ProjectDetail';

function HomePage() {
  return (
    <>
      <Hero />
      <ProductCustomizer />
      <Services />
      <About />
      <Gallery />
      <Contact />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="font-sans text-gray-900 bg-white">
          <Routes>
            <Route path="/" element={<><Navbar /><HomePage /></>} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;