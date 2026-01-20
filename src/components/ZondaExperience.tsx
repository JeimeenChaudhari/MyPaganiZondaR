import { MotionValue, motion, useTransform } from "framer-motion";
import { carData } from "@/data/carData";

interface ZondaExperienceProps {
  scrollYProgress: MotionValue<number>;
  isContentReady: boolean;
}

const ZondaExperience = ({ scrollYProgress, isContentReady }: ZondaExperienceProps) => {
  // Phase calculations (0-33% Hero, 33-66% Design, 66-100% Engine)
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25, 0.33], [1, 1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.33], [0, -50]);

  const designOpacity = useTransform(scrollYProgress, [0.28, 0.35, 0.58, 0.66], [0, 1, 1, 0]);
  const designY = useTransform(scrollYProgress, [0.28, 0.35], [30, 0]);

  const engineOpacity = useTransform(scrollYProgress, [0.60, 0.70, 0.95], [0, 1, 1]);
  const engineY = useTransform(scrollYProgress, [0.60, 0.70], [30, 0]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden scanlines">
      {/* HUD Corner Decorations */}
      <div className="absolute top-6 left-6 w-16 h-16 border-l-2 border-t-2 border-pagani-gold/30" />
      <div className="absolute top-6 right-6 w-16 h-16 border-r-2 border-t-2 border-pagani-gold/30" />
      <div className="absolute bottom-6 left-6 w-16 h-16 border-l-2 border-b-2 border-pagani-gold/30" />
      <div className="absolute bottom-6 right-6 w-16 h-16 border-r-2 border-b-2 border-pagani-gold/30" />

      {/* Hero Phase - Only show after loading completes */}
      {isContentReady && (
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="absolute inset-0 flex flex-col items-center justify-center px-6"
        >
          <div className="text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-6"
            >
              <p className="font-rajdhani text-lg md:text-xl lg:text-2xl italic font-semibold text-foreground drop-shadow-[0_2px_10px_rgba(0,0,0,0.95),0_0_25px_rgba(255,255,255,0.15)] brightness-125 leading-relaxed">
                Not just <span className="text-pagani-gold font-bold not-italic">"a"</span> supercar,
                <br />
                it's <span className="text-pagani-gold font-bold not-italic text-gradient-gold">"the"</span> supercar
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-black tracking-[0.25em] mb-2"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              <span className="text-pagani-gold text-modern-border">
                {carData.hero.title}
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="font-orbitron text-xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.3em] text-foreground mb-8"
            >
              <span className="text-bright-border drop-shadow-[0_4px_12px_rgba(0,0,0,0.95),0_0_20px_rgba(255,255,255,0.1)]">
                {carData.hero.subtitle}
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12"
            >
              <div className="flex items-center gap-3">
                <div className="w-px h-8 bg-pagani-gold/50" />
                <div className="text-left">
                  <p className="font-rajdhani text-xs tracking-[0.2em] uppercase text-foreground drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] brightness-110">
                    Starting From
                  </p>
                  <p className="font-orbitron text-2xl font-bold text-pagani-gold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9),0_0_15px_rgba(212,175,55,0.4)] brightness-110">
                    {carData.price}
                  </p>
                </div>
              </div>

              <button
                onClick={() => document.getElementById('specs')?.scrollIntoView({ behavior: 'smooth' })}
                className="pointer-events-auto px-8 py-3 border border-pagani-gold/50 font-orbitron text-xs tracking-[0.3em] uppercase text-pagani-gold hover:bg-pagani-gold hover:text-pagani-black transition-all duration-300 glow-gold-sm"
              >
                {carData.hero.cta}
              </button>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          >
            <span className="font-rajdhani text-xs tracking-[0.3em] uppercase text-foreground drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] brightness-125">
              Scroll to Explore
            </span>
            <div className="w-6 h-10 border border-pagani-gold/50 rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-2 bg-pagani-gold rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Design Phase */}
      <motion.div
        style={{ opacity: designOpacity, y: designY }}
        className="absolute inset-0 flex items-center px-6 md:px-12 lg:px-24"
      >
        <div className="max-w-xl">
          <div className="mb-6">
            <span className="font-rajdhani text-xs tracking-[0.5em] uppercase text-pagani-gold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9),0_0_15px_rgba(212,175,55,0.3)]">
              01 / Design
            </span>
          </div>

          <h2 className="font-orbitron text-4xl md:text-5xl font-bold tracking-[0.15em] text-foreground mb-3">
            <span className="text-bright-border drop-shadow-[0_4px_12px_rgba(0,0,0,0.95),0_0_20px_rgba(255,255,255,0.1)]">
              {carData.design.title}
            </span>
          </h2>

          <h3 className="font-orbitron text-xl md:text-2xl font-light tracking-[0.2em] text-pagani-gold mb-6">
            <span className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.9),0_0_20px_rgba(212,175,55,0.3)] brightness-110">
              {carData.design.subtitle}
            </span>
          </h3>

          <p className="font-rajdhani text-base md:text-lg leading-relaxed text-foreground mb-8 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] brightness-105">
            {carData.design.description}
          </p>

          <div className="grid grid-cols-3 gap-4">
            {carData.design.features.map((feature, index) => (
              <div
                key={index}
                className="p-4"
              >
                <p className="font-rajdhani text-xs tracking-[0.2em] uppercase text-foreground mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] brightness-110">
                  {feature.label}
                </p>
                <p className="font-orbitron text-sm font-bold text-pagani-gold drop-shadow-[0_2px_6px_rgba(0,0,0,0.9),0_0_15px_rgba(212,175,55,0.3)] brightness-110">
                  {feature.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Engine Phase */}
      <motion.div
        style={{ opacity: engineOpacity, y: engineY }}
        className="absolute inset-0 flex items-center justify-end px-2 md:px-6 lg:px-12"
      >
        <div className="max-w-xl text-right">
          <div className="mb-6 flex justify-end">
            <span className="font-rajdhani text-xs tracking-[0.5em] uppercase text-pagani-gold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9),0_0_15px_rgba(212,175,55,0.3)]">
              02 / Performance
            </span>
          </div>

          <h2 className="font-orbitron text-4xl md:text-5xl font-bold tracking-[0.15em] text-foreground mb-3">
            <span className="text-bright-border drop-shadow-[0_4px_12px_rgba(0,0,0,0.95),0_0_20px_rgba(255,255,255,0.1)]">
              {carData.engine.title}
            </span>
          </h2>

          <h3 className="font-orbitron text-xl md:text-2xl font-light tracking-[0.2em] text-pagani-gold mb-6">
            <span className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.9),0_0_20px_rgba(212,175,55,0.3)] brightness-110">
              {carData.engine.subtitle}
            </span>
          </h3>

          <p className="font-rajdhani text-base md:text-lg leading-relaxed text-foreground mb-8 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] brightness-105">
            {carData.engine.description}
          </p>

          <div className="grid grid-cols-2 gap-3">
            {carData.engine.specs.map((spec, index) => (
              <div
                key={index}
                className="p-3 text-right"
              >
                <p className="font-rajdhani text-xs tracking-[0.15em] uppercase text-foreground drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] brightness-110">
                  {spec.label}
                </p>
                <p className="font-orbitron text-lg font-bold text-pagani-gold drop-shadow-[0_2px_6px_rgba(0,0,0,0.9),0_0_15px_rgba(212,175,55,0.3)] brightness-110">
                  {spec.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ZondaExperience;
