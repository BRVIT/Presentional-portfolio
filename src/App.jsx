import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import PortfolioSection from "./components/PortfolioSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import usePortfolioInteractions from "./hooks/usePortfolioInteractions";

function App() {
  usePortfolioInteractions();

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
