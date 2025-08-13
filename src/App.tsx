import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Philosophy from './components/Philosophy';
import Company from './components/Company';
import Projects from './components/Projects';
import Creative from './components/Creative';
import Footer from './components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black font-montserrat">
      <audio src="https://open.spotify.com/track/0ntzAN5M82DHT50G9M9G2w?si=9c2f16faf27a4896" autoPlay loop />
      <Navigation />
      <Hero />
      <About />
      <Philosophy />
      <Company />
      <Projects />
      <Creative />
      <Footer />
    </div>
  );
};

export default Index;
