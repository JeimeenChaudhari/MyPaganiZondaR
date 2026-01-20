import { motion } from "framer-motion";
import { carData } from "@/data/carData";
import { Mail, Phone, MapPin, Globe, Instagram, Youtube, Facebook, Twitter } from "lucide-react";
import { RxInstagramLogo, RxTwitterLogo, RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { FaFacebook } from "react-icons/fa";

// Data for Creator/User Section (Top)
const creatorSocials = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/jeimeen_editzzz/",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://x.com/Jeimeen3031",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/JeimeenChaudhari",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/jeimeen-chaudhari-3a680028b/",
  },
];

const creatorContact = {
  email: "jeimeen3001@gmail.com",
  phone: "+91 9316101640",
  website: "https://cj-space-portfolio.vercel.app/",
};

// Data for Car/Pagani Section (Bottom)
const paganiIcons: Record<string, React.ReactNode> = {
  Instagram: <Instagram className="w-5 h-5" />,
  YouTube: <Youtube className="w-5 h-5" />,
  Facebook: <Facebook className="w-5 h-5" />,
  Twitter: <Twitter className="w-5 h-5" />,
};

const Footer = () => {
  return (
    <footer id="footer" className="py-16 md:py-24 px-6 border-t border-pagani-gold/10 relative overflow-hidden text-foreground">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(0, 0, 0, 0.97) 0%, rgba(5, 5, 5, 0.94) 50%, rgba(0, 0, 0, 0.97) 100%),
            radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.08) 0%, transparent 50%),
            url('data:image/svg+xml,<svg width="1920" height="600" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="footer" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23000;stop-opacity:1"/><stop offset="50%" style="stop-color:%23050505;stop-opacity:1"/><stop offset="100%" style="stop-color:%23000;stop-opacity:1"/></linearGradient><pattern id="elegant" patternUnits="userSpaceOnUse" width="100" height="100"><line x1="0" y1="50" x2="100" y2="50" stroke="%23d4af37" stroke-width="0.5" opacity="0.05"/><line x1="50" y1="0" x2="50" y2="100" stroke="%23d4af37" stroke-width="0.5" opacity="0.05"/><circle cx="50" cy="50" r="20" stroke="%23d4af37" stroke-width="0.5" fill="none" opacity="0.04"/></pattern></defs><rect fill="url(%23footer)" width="1920" height="600"/><rect fill="url(%23elegant)" width="1920" height="600"/><line x1="0" y1="0" x2="1920" y2="0" stroke="%23d4af37" stroke-width="1" opacity="0.2"/></svg>')
          `,
        }}
      />
      <div className="container mx-auto max-w-7xl relative z-10">

        {/* =======================
            SECTION 1: CREATOR (Top)
           ======================= */}
        <div className="grid md:grid-cols-2 gap-12 border-b border-pagani-gold/10 pb-12 mb-12">
          {/* Creator Brand / Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="font-orbitron text-2xl font-bold tracking-widest text-pagani-gold mb-2">
              JEIMEEN CHAUDHARI
            </h3>
            <p className="font-rajdhani text-muted-foreground mb-6 max-w-md">
              Full Stack Developer specializing in immersive web experiences. Connect with me for collaborations.
            </p>
            <div className="flex gap-4">
              {creatorSocials.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-pagani-gold/30 flex items-center justify-center text-pagani-gold hover:bg-pagani-gold hover:text-pagani-black transition-all duration-300 rounded-lg group"
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Creator Contact / Inquiry */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col md:items-end justify-center space-y-4"
          >
            <h4 className="font-orbitron text-sm tracking-[0.2em] uppercase text-foreground mb-2 text-right w-full">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-3 md:items-end w-full">
              <a href={`mailto:${creatorContact.email}`} className="flex items-center gap-3 group">
                <span className="font-rajdhani text-muted-foreground group-hover:text-pagani-gold transition-colors">{creatorContact.email}</span>
                <Mail className="w-4 h-4 text-pagani-gold" />
              </a>
              <a href={`tel:${creatorContact.phone}`} className="flex items-center gap-3 group">
                <span className="font-rajdhani text-muted-foreground group-hover:text-pagani-gold transition-colors">{creatorContact.phone}</span>
                <Phone className="w-4 h-4 text-pagani-gold" />
              </a>
              <a href={creatorContact.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                <span className="font-rajdhani text-muted-foreground group-hover:text-pagani-gold transition-colors">Interact with My Portfolio</span>
                <Globe className="w-4 h-4 text-pagani-gold" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* =======================
            SECTION 2: CAR / PAGANI (Bottom)
           ======================= */}
        <div className="grid md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
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
            {/* Pagani Social Links */}
            <div className="flex gap-4">
              {carData.footer.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-pagani-gold/30 flex items-center justify-center text-pagani-gold hover:bg-pagani-gold hover:text-pagani-black transition-all duration-300 rounded-full"
                >
                  {paganiIcons[link.label]}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Explore Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
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

          {/* Pagani Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="font-orbitron text-sm tracking-[0.2em] uppercase text-foreground mb-6">
              Headquarters
            </h4>
            <ul className="space-y-4">
              <li>
                <a href={`mailto:${carData.footer.contact.email}`} className="flex items-center gap-3 group hover:text-pagani-gold transition-colors">
                  <Mail className="w-4 h-4 text-pagani-gold" />
                  <span className="font-rajdhani text-muted-foreground group-hover:text-pagani-gold transition-colors">
                    {carData.footer.contact.email}
                  </span>
                </a>
              </li>
              <li>
                <a href={`tel:${carData.footer.contact.phone}`} className="flex items-center gap-3 group hover:text-pagani-gold transition-colors">
                  <Phone className="w-4 h-4 text-pagani-gold" />
                  <span className="font-rajdhani text-muted-foreground group-hover:text-pagani-gold transition-colors">
                    {carData.footer.contact.phone}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Pagani+Automobili+San+Cesario+sul+Panaro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group hover:text-pagani-gold transition-colors"
                >
                  <MapPin className="w-4 h-4 text-pagani-gold flex-shrink-0 mt-1" />
                  <span className="font-rajdhani text-muted-foreground text-sm group-hover:text-pagani-gold transition-colors">
                    {/* Address is now correctly typed as string in carData after revert */}
                    {/* @ts-ignore - Temporary ignore if type definition lag */}
                    {carData.footer.contact.address}
                  </span>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Inquire */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="font-orbitron text-sm tracking-[0.2em] uppercase text-foreground mb-6">
              Ownership
            </h4>
            <p className="font-rajdhani text-muted-foreground mb-6">
              Experience the legacy. Schedule your private consultation.
            </p>
            <button className="w-full px-8 py-3 border border-pagani-gold font-orbitron text-xs tracking-[0.2em] uppercase text-pagani-gold hover:bg-pagani-gold hover:text-pagani-black transition-all duration-300">
              Inquire Now
            </button>
          </motion.div>
        </div>

        {/* =======================
            SECTION 3: COPYRIGHT (Bottom)
           ======================= */}
        <div className="pt-8 border-t border-pagani-gold/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-rajdhani text-sm text-muted-foreground">
              {carData.footer.copyright}
            </p>
            <div className="flex items-center gap-6">
              <a href="/legal" className="font-rajdhani text-sm text-muted-foreground hover:text-pagani-gold transition-colors">
                Privacy Policy
              </a>
              <a href="/legal" className="font-rajdhani text-sm text-muted-foreground hover:text-pagani-gold transition-colors">
                Terms and Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;