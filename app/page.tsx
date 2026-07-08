import Nav from "./components/Nav";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import ProgramSection from "./components/ProgramSection";
import LitterSection from "./components/LitterSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <ProgramSection />
        <LitterSection />
      </main>
      <Footer />
    </>
  );
}
