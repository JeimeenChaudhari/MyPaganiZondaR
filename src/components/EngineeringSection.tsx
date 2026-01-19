import { motion } from "framer-motion";
import { carData } from "@/data/carData";

const EngineeringSection = () => {
  return (
    <section id="engineering" className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(20, 20, 20, 0.90) 50%, rgba(10, 10, 10, 0.95) 100%),
            linear-gradient(45deg, rgba(212, 175, 55, 0.05) 0%, transparent 30%, transparent 70%, rgba(212, 175, 55, 0.05) 100%),
            url('data:image/svg+xml,<svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="engineering-tech" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%230f0f0f;stop-opacity:1"/><stop offset="50%" style="stop-color:%231f1f1f;stop-opacity:1"/><stop offset="100%" style="stop-color:%230f0f0f;stop-opacity:1"/></linearGradient><pattern id="engineering-grid" patternUnits="userSpaceOnUse" width="60" height="60"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="%23d4af37" stroke-width="0.5" opacity="0.15"/><circle cx="0" cy="0" r="2" fill="%23d4af37" opacity="0.3"/></pattern></defs><rect fill="url(%23engineering-tech)" width="1920" height="1080"/><rect fill="url(%23engineering-grid)" width="1920" height="1080"/><line x1="0" y1="270" x2="1920" y2="270" stroke="%23d4af37" stroke-width="1" opacity="0.1"/><line x1="0" y1="540" x2="1920" y2="540" stroke="%23d4af37" stroke-width="1" opacity="0.1"/><line x1="0" y1="810" x2="1920" y2="810" stroke="%23d4af37" stroke-width="1" opacity="0.1"/></svg>')
          `,
        }}
      />
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="font-rajdhani text-xs tracking-[0.5em] uppercase text-pagani-gold">
            Technical Excellence
          </span>
          <h2 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.15em] text-foreground mt-4">
            {carData.engineering.title}
          </h2>
          <p className="font-rajdhani text-xl text-pagani-gold mt-4 tracking-[0.2em]">
            {carData.engineering.subtitle}
          </p>
          <p className="font-rajdhani text-lg text-muted-foreground mt-6 max-w-3xl mx-auto leading-relaxed">
            {carData.engineering.description}
          </p>
        </motion.div>

        <div className="grid gap-8 md:gap-12">
          {carData.engineering.sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="grid md:grid-cols-3 gap-6 border border-pagani-gold/20 bg-pagani-black/50 p-6 md:p-8 hover:border-pagani-gold/40 transition-all duration-300">
                {/* Content */}
                <div className="md:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-orbitron text-4xl font-bold text-pagani-gold/30">
                      0{index + 1}
                    </span>
                    <h3 className="font-orbitron text-2xl font-bold tracking-[0.1em] text-foreground">
                      {section.title}
                    </h3>
                  </div>
                  <p className="font-rajdhani text-lg text-muted-foreground leading-relaxed">
                    {section.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid gap-3">
                  {section.stats.map((stat, statIndex) => (
                    <div
                      key={statIndex}
                      className="border border-pagani-gold/10 bg-carbon-gray/30 p-4 text-center group-hover:border-pagani-gold/30 transition-colors duration-300"
                    >
                      <p className="font-rajdhani text-xs tracking-[0.2em] uppercase text-muted-foreground">
                        {stat.label}
                      </p>
                      <p className="font-orbitron text-lg font-bold text-pagani-gold mt-1">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringSection;