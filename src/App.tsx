import Navigation from '@components/Navigation/Navigation';
import Hero from '@components/Hero/Hero';
import Tabs from '@components/Tabs/Tabs';
import About from '@components/About/About';
import Skills from '@components/Skills/Skills';
import Projects from '@components/Projects/Projects';
import Experience from '@components/Experience/Experience';
import Certifications from '@components/Certifications/Certifications';
import Resume from '@components/Resume/Resume';
import Contact from '@components/Contact/Contact';
import Footer from '@components/Footer/Footer';

function App() {
  const PortfolioView = (
    <>
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Resume />
      <Contact />
    </>
  );

  const tabItems = [
    {
      id: 'portfolio',
      label: 'Portfolio',
      content: PortfolioView
    }
  ];

  return (
    <>
      <Navigation />
      <Hero />
      <Tabs items={tabItems} defaultTab="portfolio" />
      <Footer />
    </>
  );
}

export default App;
