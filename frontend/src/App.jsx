import React from 'react';
import { ThemeProvider } from './providers/ThemeProvider';
import Header from './pages/Header';
import Hero from './pages/Hero';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;