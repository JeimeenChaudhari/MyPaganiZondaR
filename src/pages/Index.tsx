import { useRef, useEffect, useState } from "react";
import { useScroll, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import ZondaScrollCanvas from "@/components/ZondaScrollCanvas";
import ZondaExperience from "@/components/ZondaExperience";
import SpecsGrid from "@/components/SpecsGrid";
import Features from "@/components/Features";
import HistorySection from "@/components/HistorySection";
import EngineeringSection from "@/components/EngineeringSection";
import AerodynamicsSection from "@/components/AerodynamicsSection";
import PowerplantSection from "@/components/PowerplantSection";
import InteriorSection from "@/components/InteriorSection";
import ProductionSection from "@/components/ProductionSection";
import ComparisonSection from "@/components/ComparisonSection";
import OwnershipSection from "@/components/OwnershipSection";
import Footer from "@/components/Footer";
import AboutCreator from "@/components/AboutCreator";

const Index = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [isContentReady, setIsContentReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth spring animation for ultra-smooth scrolling
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Enable smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <main className="bg-pagani-black">
      <Navbar />

      {/* Scroll Sequence Section - 600vh for smooth car rotation */}
      <section
        ref={containerRef}
        className="h-[600vh] relative"
        style={{ position: 'relative' }}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <ZondaScrollCanvas
            scrollYProgress={smoothProgress}
            totalFrames={240}
            zipPath="/images/zonda-sequence.zip"
            onLoadingComplete={() => setIsContentReady(true)}
          />
          <ZondaExperience scrollYProgress={smoothProgress} isContentReady={isContentReady} />
        </div>
      </section>

      {/* Rest of the site scrolls naturally after sequence */}
      <div className="relative z-20 bg-pagani-black">
        <SpecsGrid />
        <HistorySection />
        <EngineeringSection />
        <AerodynamicsSection />
        <PowerplantSection />
        <Features />
        <InteriorSection />
        <ProductionSection />
        <ComparisonSection />
        <OwnershipSection />
        <AboutCreator />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
