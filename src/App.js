import "./App.css";
import Header from "./components/header/Header";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import Technologies from "./components/Technologies";
import Portfolio from "./components/Portfolio";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <AboutSection />
        <ServicesSection />
        <Technologies />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default App;
