import { motion } from "framer-motion";
import { carData } from "@/data/carData";
import { CheckCircle } from "lucide-react";

const InteriorSection = () => {
  return (
    <section id="interior" className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(0, 0, 0, 0.70) 0%, rgba(10, 10, 10, 0.60) 50%, rgba(0, 0, 0, 0.70) 100%),
            radial-gradient(ellipse at top left, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at bottom right, rgba(212, 175, 55, 0.08) 0%, transparent 50%),
            url('/interior-cockpit.jpg')
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
            Driver Focused
          </span>
          <h2 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.15em] text-foreground mt-4">
            {carData.interior.title}
          </h2>
          <p className="font-rajdhani text-xl text-pagani-gold mt-4 tracking-[0.2em]">
            {carData.interior.subtitle}
          </p>
          <p className="font-rajdhani text-lg text-muted-foreground mt-6 max-w-3xl mx-auto leading-relaxed">
            {carData.interior.description}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {carData.interior.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-pagani-gold/20 bg-carbon-gray/30 p-6 md:p-8 relative group hover:border-pagani-gold/40 transition-all duration-300"
            >
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-pagani-gold/50" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-pagani-gold/50" />

              <h3 className="font-orbitron text-xl font-bold tracking-[0.1em] text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="font-rajdhani text-lg text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Materials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border border-pagani-gold/30 bg-carbon-gray/20 p-8 md:p-12"
        >
          <h3 className="font-orbitron text-2xl font-bold tracking-[0.1em] text-foreground mb-8 text-center">
            Premium Materials
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {carData.interior.materials.map((material, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 border border-pagani-gold/10 bg-pagani-black/50 hover:border-pagani-gold/30 transition-colors duration-300"
              >
                <CheckCircle className="w-5 h-5 text-pagani-gold flex-shrink-0" />
                <span className="font-rajdhani text-sm text-foreground">
                  {material}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteriorSection;