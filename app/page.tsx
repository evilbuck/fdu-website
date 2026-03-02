import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import TrustBar from "./sections/TrustBar";
import ServiceCards from "./sections/ServiceCards";
import PersonaPathways from "./sections/PersonaPathways";
import AboutSnippet from "./sections/AboutSnippet";
import FinalCTA from "./sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <TrustBar />
        <ServiceCards />
        <PersonaPathways />
        <AboutSnippet />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
