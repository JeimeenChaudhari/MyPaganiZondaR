import { motion } from "framer-motion";
import { carData } from "@/data/carData";
import { Shield, Calendar, Phone, Wrench } from "lucide-react";

const icons = [Shield, Calendar, Phone, Wrench];

const OwnershipSection = () => {
  return (
    <section id="ownership" className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(15, 15, 15, 0.96) 0%, rgba(25, 22, 20, 0.92) 50%, rgba(15, 15, 15, 0.96) 100%),
            radial-gradient(ellipse at top right, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at bottom left, rgba(212, 175, 55, 0.08) 0%, transparent 50%),
            url('data:image/svg+xml,<svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="luxury" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23101010;stop-opacity:1"/><stop offset="50%" style="stop-color:%231a1a1a;stop-opacity:1"/><stop offset="100%" style="stop-color:%23101010;stop-opacity:1"/></linearGradient><pattern id="premium" patternUnits="userSpaceOnUse" width="150" height="150"><rect x="74" y="0" width="2" height="150" fill="%23d4af37" opacity="0.08"/><rect x="0" y="74" width="150" height="2" fill="%23d4af37" opacity="0.08"/><circle cx="75" cy="75" r="50" stroke="%23d4af37" stroke-width="1" fill="none" opacity="0.05"/></pattern></defs><rect fill="url(%23luxury)" width="1920" height="1080"/><rect fill="url(%23premium)" width="1920" height="1080"/></svg>')
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
            Exclusive Benefits
          </span>
          <h2 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.15em] text-foreground mt-4">
            {carData.ownership.title}
          </h2>
          <p className="font-rajdhani text-xl text-pagani-gold mt-4 tracking-[0.2em]">
            {carData.ownership.subtitle}
          </p>
          <p className="font-rajdhani text-lg text-muted-foreground mt-6 max-w-3xl mx-auto leading-relaxed">
            {carData.ownership.description}
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {carData.ownership.benefits.map((benefit, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-pagani-gold/20 bg-pagani-black/50 p-6 md:p-8 relative group hover:border-pagani-gold/50 transition-all duration-300"
              >
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-pagani-gold/30 group-hover:border-pagani-gold/60 transition-colors duration-300" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-pagani-gold/30 group-hover:border-pagani-gold/60 transition-colors duration-300" />

                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 border border-pagani-gold/30 flex items-center justify-center flex-shrink-0 group-hover:border-pagani-gold transition-colors duration-300">
                    <Icon className="w-8 h-8 text-pagani-gold" />
                  </div>
                  <div>
                    <h3 className="font-orbitron text-xl font-bold tracking-[0.1em] text-foreground mb-3">
                      {benefit.title}
                    </h3>
                    <p className="font-rajdhani text-lg text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="font-rajdhani text-lg text-muted-foreground mb-6">
            Interested in joining the Pagani family?
          </p>
          <button className="px-12 py-4 bg-pagani-gold text-pagani-black font-orbitron text-sm tracking-[0.3em] uppercase hover:bg-bright-gold transition-colors duration-300">
            Schedule a Private Viewing
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default OwnershipSection;