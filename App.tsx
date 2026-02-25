import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCustomizer } from './components/ProductCustomizer';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { ProjectDetail } from './components/ProjectDetail';

function HomePage() {
  return (
    <>
      <Hero />
      <ProductCustomizer />
      <About />
      <Gallery />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="font-sans text-gray-900 bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;