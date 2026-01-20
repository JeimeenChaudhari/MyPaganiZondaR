import { motion } from "framer-motion";
import { carData } from "@/data/carData";

const HistorySection = () => {
  return (
    <section id="history" className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(0, 0, 0, 0.70) 0%, rgba(15, 10, 5, 0.60) 50%, rgba(0, 0, 0, 0.70) 100%),
            radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 60%),
            url('/history-legacy.jpg.jpeg')
          `,
        }}
      />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(90deg, hsl(var(--pagani-gold)) 0px, hsl(var(--pagani-gold)) 1px, transparent 1px, transparent 100px)`,
        }} />
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
            Heritage
          </span>
          <h2 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.15em] text-foreground mt-4">
            {carData.history.title}
          </h2>
          <p className="font-rajdhani text-xl text-pagani-gold mt-4 tracking-[0.2em]">
            {carData.history.subtitle}
          </p>
          <p className="font-rajdhani text-lg text-muted-foreground mt-6 max-w-3xl mx-auto leading-relaxed">
            {carData.history.intro}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-pagani-gold/50 via-pagani-gold to-pagani-gold/50 hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {carData.history.timeline.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative md:flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <div className="bg-carbon-gray/50 border border-pagani-gold/20 p-6 md:p-8 relative group hover:border-pagani-gold/40 transition-colors duration-300">
                    {/* Corner decorations */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-pagani-gold/50" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-pagani-gold/50" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-pagani-gold/50" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-pagani-gold/50" />

                    <span className="font-orbitron text-3xl md:text-4xl font-bold text-pagani-gold">
                      {event.year}
                    </span>
                    <h3 className="font-orbitron text-xl font-bold tracking-[0.1em] text-foreground mt-3 mb-3">
                      {event.title}
                    </h3>
                    <p className="font-rajdhani text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center">
                  <div className="w-4 h-4 bg-pagani-gold rounded-full shadow-glow-gold" />
                  <div className="absolute w-8 h-8 border border-pagani-gold/50 rounded-full animate-ping" />
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;