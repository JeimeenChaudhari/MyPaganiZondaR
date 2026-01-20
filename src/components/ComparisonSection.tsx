import { motion } from "framer-motion";
import { carData } from "@/data/carData";

const ComparisonSection = () => {
  return (
    <section id="comparison" className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(0, 0, 0, 0.50) 0%, rgba(10, 10, 10, 0.40) 50%, rgba(0, 0, 0, 0.50) 100%),
            linear-gradient(to bottom, transparent 0%, rgba(212, 175, 55, 0.05) 50%, transparent 100%),
            url('/comparison-lineup.jpg.png')
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
            Track-Only Legends
          </span>
          <h2 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.15em] text-foreground mt-4">
            {carData.comparison.title}
          </h2>
          <p className="font-rajdhani text-xl text-pagani-gold mt-4 tracking-[0.2em]">
            {carData.comparison.subtitle}
          </p>
          <p className="font-rajdhani text-lg text-muted-foreground mt-6 max-w-3xl mx-auto leading-relaxed">
            {carData.comparison.description}
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-pagani-gold/30">
                <th className="p-4 text-left font-orbitron text-sm tracking-[0.1em] uppercase text-muted-foreground">
                  Model
                </th>
                <th className="p-4 text-center font-orbitron text-sm tracking-[0.1em] uppercase text-muted-foreground">
                  Power
                </th>
                <th className="p-4 text-center font-orbitron text-sm tracking-[0.1em] uppercase text-muted-foreground">
                  Weight
                </th>
                <th className="p-4 text-center font-orbitron text-sm tracking-[0.1em] uppercase text-muted-foreground">
                  Top Speed
                </th>
                <th className="p-4 text-center font-orbitron text-sm tracking-[0.1em] uppercase text-muted-foreground">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {carData.comparison.competitors.map((car, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`border-b border-pagani-gold/10 transition-colors duration-300 ${car.highlight
                    ? "bg-pagani-gold/10 border-pagani-gold/30"
                    : "hover:bg-carbon-gray/30"
                    }`}
                >
                  <td className="p-4 md:p-6">
                    <div className="flex items-center gap-3">
                      {car.highlight && (
                        <div className="w-2 h-2 bg-pagani-gold rounded-full" />
                      )}
                      <span className={`font-orbitron text-base md:text-lg ${car.highlight ? "text-pagani-gold font-bold" : "text-foreground"
                        }`}>
                        {car.name}
                      </span>
                    </div>
                  </td>
                  <td className="p-4 md:p-6 text-center font-rajdhani text-foreground">
                    {car.power}
                  </td>
                  <td className="p-4 md:p-6 text-center font-rajdhani text-foreground">
                    {car.weight}
                  </td>
                  <td className="p-4 md:p-6 text-center font-rajdhani text-foreground">
                    {car.topSpeed}
                  </td>
                  <td className="p-4 md:p-6 text-center font-rajdhani text-foreground">
                    {car.price}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Zonda R Advantage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 border border-pagani-gold/30 bg-carbon-gray/20 p-8 md:p-12 text-center"
        >
          <h3 className="font-orbitron text-2xl font-bold tracking-[0.1em] text-foreground mb-4">
            The Zonda R Advantage
          </h3>
          <p className="font-rajdhani text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            With the best power-to-weight ratio in its class and unmatched naturally aspirated V12 symphony,
            the Zonda R delivers a driving experience that no turbocharged competitor can match.
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
            <div className="p-4 border border-pagani-gold/20 bg-pagani-black/50">
              <p className="font-orbitron text-2xl font-bold text-pagani-gold">701</p>
              <p className="font-rajdhani text-xs uppercase tracking-[0.15em] text-muted-foreground">HP/Tonne</p>
            </div>
            <div className="p-4 border border-pagani-gold/20 bg-pagani-black/50">
              <p className="font-orbitron text-2xl font-bold text-pagani-gold">N/A</p>
              <p className="font-rajdhani text-xs uppercase tracking-[0.15em] text-muted-foreground">Aspiration</p>
            </div>
            <div className="p-4 border border-pagani-gold/20 bg-pagani-black/50">
              <p className="font-orbitron text-2xl font-bold text-pagani-gold">130</p>
              <p className="font-rajdhani text-xs uppercase tracking-[0.15em] text-muted-foreground">dB Sound</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;