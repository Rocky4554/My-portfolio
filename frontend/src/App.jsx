import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from './providers/ThemeProvider';
import Header from './pages/Header';
import Footer from './pages/Footer';

// Lazy load big sections
const Hero = lazy(() => import('./pages/Hero'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Skills = lazy(() => import('./pages/Skills'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white transition-colors duration-300">
        <Header />
        <main>
          <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
