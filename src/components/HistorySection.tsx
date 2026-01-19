import { motion } from "framer-motion";
import { carData } from "@/data/carData";

const HistorySection = () => {
  return (
    <section id="history" className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(0, 0, 0, 0.93) 0%, rgba(15, 10, 5, 0.87) 50%, rgba(0, 0, 0, 0.93) 100%),
            radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 60%),
            url('data:image/svg+xml,<svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="vintage" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23080604;stop-opacity:1"/><stop offset="50%" style="stop-color:%23181410;stop-opacity:1"/><stop offset="100%" style="stop-color:%23080604;stop-opacity:1"/></linearGradient><pattern id="heritage" patternUnits="userSpaceOnUse" width="120" height="120"><circle cx="60" cy="60" r="40" stroke="%23d4af37" stroke-width="1" fill="none" opacity="0.08"/><circle cx="60" cy="60" r="20" stroke="%23d4af37" stroke-width="0.5" fill="none" opacity="0.1"/><line x1="60" y1="20" x2="60" y2="100" stroke="%23d4af37" stroke-width="0.5" opacity="0.06"/><line x1="20" y1="60" x2="100" y2="60" stroke="%23d4af37" stroke-width="0.5" opacity="0.06"/></pattern></defs><rect fill="url(%23vintage)" width="1920" height="1080"/><rect fill="url(%23heritage)" width="1920" height="1080"/></svg>')
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