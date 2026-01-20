import { motion } from "framer-motion";
import { carData } from "@/data/carData";
import { Zap, Gauge, Weight, Timer, Flame, Settings } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  engine: <Flame className="w-8 h-8" />,
  power: <Zap className="w-8 h-8" />,
  torque: <Settings className="w-8 h-8" />,
  speed: <Gauge className="w-8 h-8" />,
  acceleration: <Timer className="w-8 h-8" />,
  weight: <Weight className="w-8 h-8" />,
};

const SpecsGrid = () => {
  return (
    <section id="specs" className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(0, 0, 0, 0.50) 0%, rgba(10, 10, 10, 0.40) 50%, rgba(0, 0, 0, 0.50) 100%),
            radial-gradient(circle at 30% 40%, rgba(212, 175, 55, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 70% 60%, rgba(212, 175, 55, 0.06) 0%, transparent 40%),
            url('/racing-action.jpg.png')
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
          <span className="inline-block font-rajdhani text-xs tracking-[0.5em] uppercase text-pagani-gold px-4 py-2 bg-black/30 backdrop-blur-sm drop-shadow-[0_2px_8px_rgba(0,0,0,0.9),0_0_15px_rgba(212,175,55,0.3)]">
            Technical Data
          </span>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold tracking-[0.15em] text-foreground mt-4">
            <span className="inline-block px-6 py-3 bg-black/20 backdrop-blur-sm drop-shadow-[0_4px_12px_rgba(0,0,0,0.95),0_0_20px_rgba(255,255,255,0.1)] brightness-110">
              SPECIFICATIONS
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {carData.specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative border-2 border-pagani-gold/30 bg-black/40 backdrop-blur-sm p-6 md:p-8 hover:border-pagani-gold/60 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-pagani-gold/50" />
              <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-pagani-gold/50" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-pagani-gold/50" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-pagani-gold/50" />

              <div className="text-pagani-gold mb-4 group-hover:text-bright-gold transition-colors duration-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9),0_0_15px_rgba(212,175,55,0.3)]">
                {iconMap[spec.icon]}
              </div>

              <p className="font-rajdhani text-xs tracking-[0.2em] uppercase text-foreground mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] brightness-110">
                {spec.label}
              </p>

              <p className="font-orbitron text-2xl md:text-3xl font-bold text-foreground mb-1 drop-shadow-[0_4px_12px_rgba(0,0,0,0.95),0_0_20px_rgba(255,255,255,0.1)] brightness-110">
                {spec.value}
              </p>

              <p className="font-rajdhani text-sm text-foreground drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] brightness-105">
                {spec.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecsGrid;
