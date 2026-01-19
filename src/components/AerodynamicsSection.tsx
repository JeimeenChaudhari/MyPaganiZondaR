import { motion } from "framer-motion";
import { carData } from "@/data/carData";
import { Wind, ArrowDown, ChevronRight } from "lucide-react";

const AerodynamicsSection = () => {
  return (
    <section id="aerodynamics" className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(0, 0, 0, 0.92) 0%, rgba(0, 0, 0, 0.85) 50%, rgba(0, 0, 0, 0.92) 100%),
            linear-gradient(to right, rgba(212, 175, 55, 0.08) 0%, transparent 50%, rgba(212, 175, 55, 0.08) 100%),
            url('data:image/svg+xml,<svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23111;stop-opacity:1"/><stop offset="50%" style="stop-color:%23222;stop-opacity:1"/><stop offset="100%" style="stop-color:%23111;stop-opacity:1"/></linearGradient></defs><rect fill="url(%23g1)" width="1920" height="1080"/><path d="M0,300 Q480,250 960,300 T1920,300" stroke="%23d4af37" stroke-width="2" fill="none" opacity="0.3"/><path d="M0,500 Q480,450 960,500 T1920,500" stroke="%23d4af37" stroke-width="2" fill="none" opacity="0.2"/><path d="M0,700 Q480,650 960,700 T1920,700" stroke="%23d4af37" stroke-width="2" fill="none" opacity="0.15"/></svg>')
          `,
        }}
      />

      {/* Animated wind lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-pagani-gold/20 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              width: '200%',
              left: '-50%',
            }}
            animate={{
              x: ['0%', '50%'],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="font-rajdhani text-xs tracking-[0.5em] uppercase text-pagani-gold">
            Wind Tunnel Perfected
          </span>
          <h2 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.15em] text-foreground mt-4">
            {carData.aerodynamics.title}
          </h2>
          <p className="font-rajdhani text-xl text-pagani-gold mt-4 tracking-[0.2em]">
            {carData.aerodynamics.subtitle}
          </p>
          <p className="font-rajdhani text-lg text-muted-foreground mt-6 max-w-3xl mx-auto leading-relaxed">
            {carData.aerodynamics.description}
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="border border-pagani-gold/30 bg-carbon-gray/30 p-8 text-center relative group hover:border-pagani-gold transition-colors duration-300"
          >
            <Wind className="w-12 h-12 text-pagani-gold mx-auto mb-4" />
            <p className="font-rajdhani text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">
              Total Downforce
            </p>
            <p className="font-orbitron text-4xl md:text-5xl font-bold text-foreground">
              {carData.aerodynamics.totalDownforce}
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pagani-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="border border-pagani-gold/30 bg-carbon-gray/30 p-8 text-center relative group hover:border-pagani-gold transition-colors duration-300"
          >
            <ArrowDown className="w-12 h-12 text-pagani-gold mx-auto mb-4" />
            <p className="font-rajdhani text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">
              Drag Coefficient
            </p>
            <p className="font-orbitron text-4xl md:text-5xl font-bold text-foreground">
              {carData.aerodynamics.dragCoefficient}
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pagani-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {carData.aerodynamics.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-pagani-gold/20 bg-carbon-gray/20 p-6 group hover:border-pagani-gold/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <ChevronRight className="w-6 h-6 text-pagani-gold flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform duration-300" />
                <div>
                  <h3 className="font-orbitron text-lg font-bold tracking-[0.1em] text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-rajdhani text-muted-foreground leading-relaxed mb-3">
                    {feature.description}
                  </p>
                  <p className="font-orbitron text-sm text-pagani-gold">
                    {feature.value}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AerodynamicsSection;