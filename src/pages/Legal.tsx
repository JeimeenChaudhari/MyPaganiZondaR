import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Legal = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-pagani-black min-h-screen text-foreground font-rajdhani">
            <Navbar />

            <div className="pt-32 pb-24 px-6 relative">
                {/* Background Ambience */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pagani-gold/10 via-pagani-black to-pagani-black pointer-events-none" />

                <div className="container mx-auto max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="font-orbitron text-4xl md:text-6xl font-bold text-pagani-gold mb-12 text-center">
                            Legal Information
                        </h1>

                        {/* Terms and Conditions Section */}
                        <section className="mb-16 bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-2xl">
                            <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-6 border-b border-pagani-gold/30 pb-4">
                                Terms and Conditions
                            </h2>

                            <div className="space-y-6 text-muted-foreground leading-relaxed">
                                <p>
                                    <strong>1. Introduction</strong><br />
                                    Welcome to the Pagani Zonda R Showcase ("the Website"). By accessing this website, you agree to be bound by these Terms and Conditions. This website is a fan-made portfolio showcase created by Jeimeen Chaudhari and is not officially affiliated with, endorsed by, or connected to Pagani Automobili S.p.A.
                                </p>

                                <p>
                                    <strong>2. Intellectual Property Rights</strong><br />
                                    All official Pagani trademarks, logos, images, and brand names are the property of their respective owners (Pagani Automobili S.p.A.). This project is developed for educational and portfolio demonstration purposes only. The custom code, design implementation, and interactive elements are the intellectual property of Jeimeen Chaudhari.
                                </p>

                                <p>
                                    <strong>3. Use of Content</strong><br />
                                    You are permitted to view and interact with the Website for personal, non-commercial purposes. You may not republish, sell, rent, or sub-license material from this Website without explicit permission from the creator or the respective rights holders.
                                </p>

                                <p>
                                    <strong>4. Disclaimer</strong><br />
                                    The materials on this Website are provided on an 'as is' basis. The creator makes no warranties, expressed or implied, regarding the accuracy or reliability of the car specifications provided, which are based on public knowledge and fan resources.
                                </p>
                            </div>
                        </section>

                        {/* Privacy Policy Section */}
                        <section className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-2xl">
                            <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-6 border-b border-pagani-gold/30 pb-4">
                                Privacy Policy
                            </h2>

                            <div className="space-y-6 text-muted-foreground leading-relaxed">
                                <p>
                                    <strong>1. Information Collection</strong><br />
                                    This Website is a static portfolio project and does not actively collect personal data from visitors (e.g., no account creation, no tracking pixels by the creator).
                                </p>

                                <p>
                                    <strong>2. Third-Party Links</strong><br />
                                    This Website may contain links to external sites (e.g., Social Media profiles, Official Pagani Website). We are not responsible for the privacy practices or content of these third-party sites. We encourage you to read the privacy policies of any external sites you visit.
                                </p>

                                <p>
                                    <strong>3. Contact Information</strong><br />
                                    If you have any questions about this Privacy Policy or the Terms and Conditions, please contact the creator via the methods provided in the footer section (Email or Social Media).
                                </p>

                                <p>
                                    <strong>4. Changes to This Policy</strong><br />
                                    We reserve the right to update or change our Privacy Policy at any time. Your continued use of the Website after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.
                                </p>
                            </div>
                        </section>

                        <div className="mt-12 text-center">
                            <p className="text-sm text-muted-foreground">Last updated: January 2026</p>
                        </div>

                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Legal;
