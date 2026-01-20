import { motion } from "framer-motion";
import { carData } from "@/data/carData";

const ProductionSection = () => {
  return (
    <section id="production" className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(15, 15, 15, 0.94) 0%, rgba(25, 20, 18, 0.88) 50%, rgba(15, 15, 15, 0.94) 100%),
            radial-gradient(circle at 50% 30%, rgba(212, 175, 55, 0.12) 0%, transparent 50%),
            url('/production-factory.jpg.jpeg')
          `,
        }}
      />

      {/* Background number */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="font-orbitron text-[30vw] font-bold text-pagani-gold/5 select-none">
          15
        </span>
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
            Limited Production
          </span>
          <h2 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.15em] text-foreground mt-4">
            {carData.production.title}
          </h2>
          <p className="font-rajdhani text-xl text-pagani-gold mt-4 tracking-[0.2em]">
            {carData.production.subtitle}
          </p>
          <p className="font-rajdhani text-lg text-muted-foreground mt-6 max-w-3xl mx-auto leading-relaxed">
            {carData.production.description}
          </p>
        </motion.div>

        {/* Stats Display */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="border border-pagani-gold/30 bg-pagani-black/50 p-8 text-center relative group hover:border-pagani-gold transition-colors duration-300"
          >
            <p className="font-rajdhani text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
              Build Hours
            </p>
            <p className="font-orbitron text-5xl font-bold text-gradient-gold">
              {carData.production.buildHours}
            </p>
            <p className="font-rajdhani text-muted-foreground mt-2">Per Vehicle</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="border border-pagani-gold/30 bg-pagani-black/50 p-8 text-center relative group hover:border-pagani-gold transition-colors duration-300"
          >
            <p className="font-rajdhani text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
              Units Produced
            </p>
            <p className="font-orbitron text-5xl font-bold text-gradient-gold">
              {carData.production.unitsProduced}
            </p>
            <p className="font-rajdhani text-muted-foreground mt-2">Worldwide</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="border border-pagani-gold/30 bg-pagani-black/50 p-8 text-center relative group hover:border-pagani-gold transition-colors duration-300"
          >
            <p className="font-rajdhani text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
              Base Price
            </p>
            <p className="font-orbitron text-4xl font-bold text-gradient-gold">
              {carData.production.basePrice}
            </p>
            <p className="font-rajdhani text-muted-foreground mt-2">EUR</p>
          </motion.div>
        </div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {carData.production.details.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-pagani-gold/20 bg-carbon-gray/30 p-6 relative group hover:border-pagani-gold/40 transition-all duration-300"
            >
              <div className="absolute top-4 right-4 font-orbitron text-3xl font-bold text-pagani-gold/10">
                0{index + 1}
              </div>
              <h3 className="font-orbitron text-lg font-bold tracking-[0.1em] text-foreground mb-4">
                {detail.title}
              </h3>
              <p className="font-rajdhani text-muted-foreground leading-relaxed">
                {detail.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductionSection;