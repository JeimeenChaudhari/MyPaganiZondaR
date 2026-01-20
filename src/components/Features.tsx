import { motion } from "framer-motion";
import { carData } from "@/data/carData";

const Features = () => {
  return (
    <section id="features" className="py-24 md:py-32 px-6 relative overflow-hidden bg-pagani-black">
      {/* Background Image with Gradient Overlay */}
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/Feature-section.png')",
          backgroundSize: 'contain'
        }}
      />
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(18, 18, 18, 0.50) 0%, rgba(28, 28, 28, 0.40) 50%, rgba(18, 18, 18, 0.50) 100%),
            linear-gradient(to right, rgba(212, 175, 55, 0.06) 0%, transparent 45%, transparent 55%, rgba(212, 175, 55, 0.06) 100%)
          `
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
                  {/* Feature Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                    style={{ backgroundImage: `url(${feature.image})` }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-br from-pagani-black/80 via-transparent to-pagani-black/80" />
                  <div className="absolute inset-0 bg-gradient-to-br from-pagani-gold/10 to-transparent mix-blend-overlay" />

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
