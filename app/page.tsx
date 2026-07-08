import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import ProgramSection from "./components/ProgramSection";
import LitterSection from "./components/LitterSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <ProgramSection />
      <LitterSection />
    </main>
  );
}
