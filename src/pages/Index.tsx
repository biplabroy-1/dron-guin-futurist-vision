
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Philosophy from '../components/Philosophy';
import Company from '../components/Company';
import Projects from '../components/Projects';
import Creative from '../components/Creative';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import MusicPlayer from '../components/MusicPlayer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black font-montserrat">
      <MusicPlayer />
      <Navigation />
      <Hero />
      <About />
      <Philosophy />
      <Company />
      <Projects />
      <Creative />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
