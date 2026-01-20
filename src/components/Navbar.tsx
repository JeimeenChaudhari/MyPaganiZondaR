import { useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
  ];

  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0.6)", "rgba(0, 0, 0, 0.95)"]
  );

  const navBorder = useTransform(
    scrollY,
    [0, 100],
    ["rgba(212, 175, 55, 0)", "rgba(212, 175, 55, 0.2)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback((targetId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (!element) return;

    const navOffset = 80;
    const startY = window.scrollY;
    const targetY = element.getBoundingClientRect().top + window.scrollY - navOffset;
    const distance = targetY - startY;
    const duration = 1200;

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
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 shrink-0"
          >
            <img
              src="/Pagani-Logo-Transparent.png"
              alt="Pagani Automobili"
              className="h-10 sm:h-12 md:h-16 w-auto object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
            />
          </motion.div>

          {/* Desktop Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex items-center gap-6 xl:gap-8"
          >
            {navItems.map((item) => (
              <a
                key={item.targetId}
                href={`#${item.targetId}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.targetId);
                }}
                className="font-rajdhani text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-pagani-gold transition-colors duration-300 relative group whitespace-nowrap"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-pagani-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </motion.div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* CTA Button - Hidden on very small screens, visible in mobile menu instead */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleNavClick("footer")}
              className="hidden sm:block relative px-4 md:px-6 py-2 font-orbitron text-[10px] md:text-xs tracking-[0.2em] uppercase overflow-hidden group border border-pagani-gold/50 hover:border-pagani-gold transition-colors duration-300 bg-black/20"
            >
              <span className="relative z-10 text-pagani-gold group-hover:text-pagani-black transition-colors duration-300">
                Inquire
              </span>
              <div className="absolute inset-0 bg-pagani-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.button>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-pagani-gold p-2 md:p-0"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-[60px] bg-pagani-black/95 backdrop-blur-xl border-t border-pagani-gold/20 flex flex-col pt-8 pb-12 px-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-6 items-center">
              {navItems.map((item, index) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 + 0.1 }}
                  key={item.targetId}
                  href={`#${item.targetId}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.targetId);
                  }}
                  className="font-rajdhani text-xl tracking-[0.2em] uppercase text-white hover:text-pagani-gold transition-colors duration-300"
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 + 0.1 }}
                onClick={() => handleNavClick("footer")}
                className="mt-8 px-8 py-3 font-orbitron text-sm tracking-[0.2em] uppercase border border-pagani-gold text-pagani-gold hover:bg-pagani-gold hover:text-pagani-black transition-all duration-300"
              >
                Inquire Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
