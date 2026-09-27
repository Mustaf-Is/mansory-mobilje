import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCustomizer } from './components/ProductCustomizer';
import { Services } from './components/Services';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { ProjectDetail } from './components/ProjectDetail';
import { useLanguage } from './i18n/LanguageContext';

function NotFoundPage() {
  const { lang, t } = useLanguage();

  return (
    <main className="min-h-screen flex items-center justify-center px-4 text-center">
      <div>
        <h1 className="text-3xl font-serif font-bold text-dark-900 mb-4">{t.project.notFound[lang]}</h1>
        <Link to="/" className="text-gold-600 hover:text-gold-500 font-semibold focus-visible:outline focus-visible:outline-2">
          {t.project.goBack[lang]}
        </Link>
      </div>
    </main>
  );
}

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
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
