import Hero from "./sections/Hero";
import TrustBar from "./sections/TrustBar";
import Brands from "./sections/Brands";
import ServiceCards from "./sections/ServiceCards";
import PersonaPathways from "./sections/PersonaPathways";
import AboutSnippet from "./sections/AboutSnippet";
import FinalCTA from "./sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Brands />
      <ServiceCards />
      <PersonaPathways />
      <AboutSnippet />
      <FinalCTA />
    </>
  );
}
