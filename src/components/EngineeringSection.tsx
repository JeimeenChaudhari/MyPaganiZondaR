import { motion } from "framer-motion";
import { carData } from "@/data/carData";

const EngineeringSection = () => {
  return (
    <section id="engineering" className="py-16 md:py-20 px-6 relative overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(10, 10, 10, 0.50) 0%, rgba(20, 20, 20, 0.40) 50%, rgba(10, 10, 10, 0.50) 100%),
            linear-gradient(45deg, rgba(212, 175, 55, 0.05) 0%, transparent 30%, transparent 70%, rgba(212, 175, 55, 0.05) 100%),
            url('/engineering-chassis.jpg.jpeg')
          `,
        }}
      />
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
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
          <p className="font-rajdhani text-lg text-muted-foreground mt-4 max-w-3xl mx-auto leading-relaxed">
            {carData.engineering.description}
          </p>
        </motion.div>

        <div className="grid gap-6 md:gap-8">
          {carData.engineering.sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="grid md:grid-cols-3 gap-6 border border-pagani-gold/20 bg-pagani-black/50 p-5 md:p-6 hover:border-pagani-gold/40 transition-all duration-300">
                {/* Content */}
                <div className="md:col-span-2">
                  <div className="flex items-center gap-4 mb-3">
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
                      className="border border-pagani-gold/10 bg-carbon-gray/30 p-3 text-center group-hover:border-pagani-gold/30 transition-colors duration-300"
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