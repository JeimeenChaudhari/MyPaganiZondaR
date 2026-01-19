import { motion } from "framer-motion";
import { carData } from "@/data/carData";

const Features = () => {
  return (
    <section id="heritage" className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(18, 18, 18, 0.95) 0%, rgba(28, 28, 28, 0.90) 50%, rgba(18, 18, 18, 0.95) 100%),
            linear-gradient(to right, rgba(212, 175, 55, 0.06) 0%, transparent 30%, transparent 70%, rgba(212, 175, 55, 0.06) 100%),
            url('data:image/svg+xml,<svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="feat" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23141414;stop-opacity:1"/><stop offset="50%" style="stop-color:%231e1e1e;stop-opacity:1"/><stop offset="100%" style="stop-color:%23141414;stop-opacity:1"/></linearGradient><pattern id="showcase" patternUnits="userSpaceOnUse" width="120" height="120"><circle cx="60" cy="60" r="30" stroke="%23d4af37" stroke-width="0.5" fill="none" opacity="0.08"/><line x1="30" y1="60" x2="90" y2="60" stroke="%23d4af37" stroke-width="0.5" opacity="0.06"/><line x1="60" y1="30" x2="60" y2="90" stroke="%23d4af37" stroke-width="0.5" opacity="0.06"/></pattern></defs><rect fill="url(%23feat)" width="1920" height="1080"/><rect fill="url(%23showcase)" width="1920" height="1080"/></svg>')
          `,
        }}
      />
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-rajdhani text-xs tracking-[0.5em] uppercase text-pagani-gold">
            Engineering Excellence
          </span>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold tracking-[0.15em] text-foreground mt-4">
            FEATURES
          </h2>
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {carData.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 md:gap-12 items-center`}
            >
              <div className="flex-1 w-full">
                <div className="relative aspect-video border border-pagani-gold/20 bg-pagani-black overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-pagani-gold/5 to-transparent" />

                  {/* Decorative corners */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-pagani-gold/50" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-pagani-gold/50" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-pagani-gold/50" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-pagani-gold/50" />

                  {/* Feature number */}
                  <div className="absolute top-4 left-4 font-orbitron text-6xl font-bold text-pagani-gold/10">
                    0{index + 1}
                  </div>

                  {/* Feature icon placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 border border-pagani-gold/30 rounded-full flex items-center justify-center group-hover:border-pagani-gold/60 transition-colors duration-500">
                      <div className="w-16 h-16 border border-pagani-gold/20 rounded-full flex items-center justify-center">
                        <div className="w-8 h-8 bg-pagani-gold/20 rounded-full group-hover:bg-pagani-gold/40 transition-colors duration-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 w-full">
                <span className="font-rajdhani text-xs tracking-[0.5em] uppercase text-pagani-gold">
                  Feature 0{index + 1}
                </span>

                <h3 className="font-orbitron text-2xl md:text-3xl font-bold tracking-[0.1em] text-foreground mt-3 mb-4">
                  {feature.title}
                </h3>

                <p className="font-rajdhani text-lg leading-relaxed text-muted-foreground mb-6">
                  {feature.description}
                </p>

                <button className="px-6 py-3 border border-pagani-gold/30 font-rajdhani text-sm tracking-[0.2em] uppercase text-pagani-gold hover:bg-pagani-gold hover:text-pagani-black transition-all duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
