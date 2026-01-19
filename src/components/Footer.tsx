import { motion } from "framer-motion";
import { carData } from "@/data/carData";
import { Instagram, Youtube, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

const socialIcons: Record<string, React.ReactNode> = {
  Instagram: <Instagram className="w-5 h-5" />,
  YouTube: <Youtube className="w-5 h-5" />,
  Facebook: <Facebook className="w-5 h-5" />,
  Twitter: <Twitter className="w-5 h-5" />,
};

const Footer = () => {
  return (
    <footer className="py-16 md:py-24 px-6 border-t border-pagani-gold/10 relative overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(0, 0, 0, 0.97) 0%, rgba(5, 5, 5, 0.94) 50%, rgba(0, 0, 0, 0.97) 100%),
            radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.08) 0%, transparent 50%),
            url('data:image/svg+xml,<svg width="1920" height="600" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="footer" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23000;stop-opacity:1"/><stop offset="50%" style="stop-color:%23050505;stop-opacity:1"/><stop offset="100%" style="stop-color:%23000;stop-opacity:1"/></linearGradient><pattern id="elegant" patternUnits="userSpaceOnUse" width="100" height="100"><line x1="0" y1="50" x2="100" y2="50" stroke="%23d4af37" stroke-width="0.5" opacity="0.05"/><line x1="50" y1="0" x2="50" y2="100" stroke="%23d4af37" stroke-width="0.5" opacity="0.05"/><circle cx="50" cy="50" r="20" stroke="%23d4af37" stroke-width="0.5" fill="none" opacity="0.04"/></pattern></defs><rect fill="url(%23footer)" width="1920" height="600"/><rect fill="url(%23elegant)" width="1920" height="600"/><line x1="0" y1="0" x2="1920" y2="0" stroke="%23d4af37" stroke-width="1" opacity="0.2"/></svg>')
          `,
        }}
      />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 border-2 border-pagani-gold rounded-full flex items-center justify-center">
                <span className="font-orbitron text-pagani-gold text-lg font-bold">P</span>
              </div>
              <span className="font-orbitron text-xl font-bold tracking-[0.3em] text-foreground">
                {carData.footer.brand}
              </span>
            </div>
            <p className="font-rajdhani text-muted-foreground mb-6">
              {carData.footer.tagline}
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {carData.footer.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="w-10 h-10 border border-pagani-gold/30 flex items-center justify-center text-pagani-gold hover:bg-pagani-gold hover:text-pagani-black transition-all duration-300"
                >
                  {socialIcons[link.label]}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-orbitron text-sm tracking-[0.2em] uppercase text-foreground mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              {carData.footer.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-rajdhani text-muted-foreground hover:text-pagani-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-orbitron text-sm tracking-[0.2em] uppercase text-foreground mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-pagani-gold" />
                <span className="font-rajdhani text-muted-foreground">
                  {carData.footer.contact.email}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-pagani-gold" />
                <span className="font-rajdhani text-muted-foreground">
                  {carData.footer.contact.phone}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-pagani-gold flex-shrink-0 mt-1" />
                <span className="font-rajdhani text-muted-foreground text-sm">
                  {carData.footer.contact.address}
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Inquire */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-orbitron text-sm tracking-[0.2em] uppercase text-foreground mb-6">
              Inquire
            </h4>
            <p className="font-rajdhani text-muted-foreground mb-6">
              Experience the Zonda R. Schedule your private consultation with our team.
            </p>
            <button className="w-full px-8 py-3 border border-pagani-gold font-orbitron text-xs tracking-[0.2em] uppercase text-pagani-gold hover:bg-pagani-gold hover:text-pagani-black transition-all duration-300">
              Contact Us
            </button>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-pagani-gold/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-rajdhani text-sm text-muted-foreground">
              {carData.footer.copyright}
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="font-rajdhani text-sm text-muted-foreground hover:text-pagani-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-rajdhani text-sm text-muted-foreground hover:text-pagani-gold transition-colors">
                Terms of Service
              </a>
              <a href="#" className="font-rajdhani text-sm text-muted-foreground hover:text-pagani-gold transition-colors">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;