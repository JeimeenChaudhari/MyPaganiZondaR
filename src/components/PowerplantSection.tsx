import { motion } from "framer-motion";
import { carData } from "@/data/carData";

const PowerplantSection = () => {
  return (
    <section id="powerplant" className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(15, 15, 15, 0.50) 0%, rgba(25, 25, 25, 0.40) 50%, rgba(15, 15, 15, 0.50) 100%),
            radial-gradient(circle at 30% 50%, rgba(212, 175, 55, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 70% 50%, rgba(212, 175, 55, 0.08) 0%, transparent 50%),
            url('/powerplant-exhaust.jpg.jpeg')
          `,
        }}
      />

      {/* Engine graphic background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="engine-pattern" patternUnits="userSpaceOnUse" width="20" height="20">
              <circle cx="10" cy="10" r="1" fill="hsl(var(--pagani-gold))" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#engine-pattern)" />
        </svg>
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
            Mercedes-AMG V12
          </span>
          <h2 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.15em] text-foreground mt-4">
            {carData.powerplant.title}
          </h2>
          <p className="font-rajdhani text-xl text-pagani-gold mt-4 tracking-[0.2em]">
            {carData.powerplant.subtitle}
          </p>
          <p className="font-rajdhani text-lg text-muted-foreground mt-6 max-w-3xl mx-auto leading-relaxed">
            {carData.powerplant.description}
          </p>
        </motion.div>

        {/* Main Power Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="border border-pagani-gold/30 bg-pagani-black/50 p-8 md:p-12 text-center relative">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-pagani-gold" />
            <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-pagani-gold" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-pagani-gold" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-pagani-gold" />

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="font-rajdhani text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">
                  Maximum Power
                </p>
                <p className="font-orbitron text-5xl md:text-6xl font-bold text-gradient-gold">
                  750
                </p>
                <p className="font-orbitron text-xl text-pagani-gold">HP</p>
              </div>
              <div>
                <p className="font-rajdhani text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">
                  Peak Torque
                </p>
                <p className="font-orbitron text-5xl md:text-6xl font-bold text-gradient-gold">
                  710
                </p>
                <p className="font-orbitron text-xl text-pagani-gold">Nm</p>
              </div>
              <div>
                <p className="font-rajdhani text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">
                  Redline
                </p>
                <p className="font-orbitron text-5xl md:text-6xl font-bold text-gradient-gold">
                  9,000
                </p>
                <p className="font-orbitron text-xl text-pagani-gold">RPM</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Specifications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 mb-16">
          {carData.powerplant.specifications.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="border border-pagani-gold/20 bg-pagani-black/30 p-4 text-center hover:border-pagani-gold/50 transition-colors duration-300"
            >
              <p className="font-rajdhani text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1">
                {spec.label}
              </p>
              <p className="font-orbitron text-sm font-bold text-foreground">
                {spec.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Engine Features */}
        <div className="grid md:grid-cols-3 gap-6">
          {carData.powerplant.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-pagani-gold/20 bg-carbon-gray/30 p-6 relative group hover:border-pagani-gold/50 transition-all duration-300"
            >
              <div className="absolute top-4 right-4 font-orbitron text-4xl font-bold text-pagani-gold/10">
                0{index + 1}
              </div>
              <h3 className="font-orbitron text-lg font-bold tracking-[0.1em] text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="font-rajdhani text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PowerplantSection;