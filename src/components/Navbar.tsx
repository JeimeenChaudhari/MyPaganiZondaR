import { useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const navItems = [
    { label: "Showcase", targetId: "showcase" },
    { label: "Specs", targetId: "specs" },
    { label: "Heritage", targetId: "history" },
    { label: "Engineering", targetId: "engineering" },
    { label: "Design", targetId: "aerodynamics" },
    { label: "Engine", targetId: "powerplant" },
    { label: "Features", targetId: "features" },
    { label: "Comparison", targetId: "comparison" },
    { label: "Ownership", targetId: "ownership" },
    { label: "Contect Me", targetId: "footer" },
  ];

  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0.6)", "rgba(0, 0, 0, 0.8)"]
  );

  const navBorder = useTransform(
    scrollY,
    [0, 100],
    ["rgba(212, 175, 55, 0)", "rgba(212, 175, 55, 0)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Slower, eased smooth scroll to section ids so nav links feel luxurious
  const handleNavClick = useCallback((targetId: string) => {
    const element = document.getElementById(targetId);
    if (!element) return;

    const navOffset = 80; // offset to keep section title visible beneath nav
    const startY = window.scrollY;
    const targetY = element.getBoundingClientRect().top + window.scrollY - navOffset;
    const distance = targetY - startY;
    const duration = 1200; // ms for a slower glide

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);
      window.scrollTo(0, startY + distance * eased);
      if (elapsed < duration) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, []);

  return (
    <motion.nav
      style={{
        backgroundColor: navBackground,
        borderColor: navBorder,
      }}
      className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md transition-all duration-300 ${isScrolled ? "shadow-[0_12px_40px_rgba(0,0,0,0.35)]" : ""
        }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <img
              src="/Pagani-Logo-Transparent.png"
              alt="Pagani Automobili"
              className="h-16 w-auto object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
            />
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex items-center gap-8"
          >
            {navItems.map((item) => (
              <a
                key={item.targetId}
                href={`#${item.targetId}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.targetId);
                }}
                className="font-rajdhani text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-pagani-gold transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-pagani-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleNavClick("footer")}
            className="relative px-6 py-2 font-orbitron text-xs tracking-[0.2em] uppercase overflow-hidden group"
          >
            <span className="relative z-10 text-pagani-gold group-hover:text-pagani-black transition-colors duration-300">
              Inquire
            </span>
            <div className="absolute inset-0 border border-pagani-gold/50 group-hover:border-pagani-gold transition-colors duration-300" />
            <div className="absolute inset-0 bg-pagani-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
