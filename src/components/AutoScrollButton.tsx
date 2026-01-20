import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Pause } from 'lucide-react';

const AutoScrollButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollRef = useRef<number | null>(null);

    // Show button after 5 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
            setShowTooltip(true);

            // Hide tooltip after 5 seconds of being shown
            const tooltipTimer = setTimeout(() => {
                setShowTooltip(false);
            }, 5000);

            return () => clearTimeout(tooltipTimer);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const stopAutoScroll = () => {
        if (scrollRef.current) {
            cancelAnimationFrame(scrollRef.current);
            scrollRef.current = null;
        }
        setIsScrolling(false);
    };

    const startAutoScroll = () => {
        if (isScrolling) {
            stopAutoScroll();
            return;
        }

        setIsScrolling(true);
        setShowTooltip(false);

        // Smooth auto scroll logic
        const scroll = () => {
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;
            const scrollTop = window.scrollY || document.documentElement.scrollTop;

            // Stop if reached bottom
            if (scrollTop + clientHeight >= scrollHeight - 1) {
                stopAutoScroll();
                return;
            }

            // Check position relative to Specs section dynamically
            const specsElement = document.getElementById('specs');
            let speed = 1; // Default slow speed

            if (specsElement) {
                const rect = specsElement.getBoundingClientRect();
                // If the top of the specs section is still below the top of the viewport (with a small buffer),
                // we are in the "Start" phase (Zonda 3D sequence).
                if (rect.top > 10) {
                    speed = 3.8; // Fast speed for start section
                } else {
                    speed = 1; // Slow speed after reaching specifications
                }
            } else {
                // Fallback if element not found (shouldn't happen)
                speed = 1;
            }

            window.scrollBy(0, speed);
            scrollRef.current = requestAnimationFrame(scroll);
        };

        scrollRef.current = requestAnimationFrame(scroll);
    };

    // Stop scrolling on user interaction
    useEffect(() => {
        const handleUserInteraction = () => {
            if (isScrolling) {
                stopAutoScroll();
            }
        };

        window.addEventListener('wheel', handleUserInteraction);
        window.addEventListener('touchstart', handleUserInteraction);
        window.addEventListener('keydown', handleUserInteraction);

        return () => {
            window.removeEventListener('wheel', handleUserInteraction);
            window.removeEventListener('touchstart', handleUserInteraction);
            window.removeEventListener('keydown', handleUserInteraction);
        };
    }, [isScrolling]);

    if (!isVisible) return null;

    return (
        <div className="fixed right-6 top-32 z-50 flex items-center gap-2">
            <AnimatePresence>
                {showTooltip && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="bg-black/80 text-pagani-gold border border-pagani-gold/30 px-3 py-2 rounded-md text-sm font-rajdhani backdrop-blur-sm shadow-lg max-w-[200px] text-right"
                    >
                        Click here and use this feature for better experience
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={startAutoScroll}
                onMouseEnter={() => !isScrolling && setShowTooltip(true)}
                onMouseLeave={() => !isScrolling && setShowTooltip(false)}
                animate={{
                    opacity: [1, 0.6, 1],
                    borderColor: ['rgba(212, 175, 55, 0.3)', 'rgba(255, 215, 0, 0.8)', 'rgba(212, 175, 55, 0.3)']
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className={`bg-black/60 backdrop-blur-md p-3 rounded-full border border-pagani-gold/50 text-pagani-gold hover:bg-pagani-gold/20 hover:border-pagani-gold transition-colors shadow-[0_0_15px_rgba(212,175,55,0.2)] group`}
                aria-label="Auto Scroll"
            >
                {isScrolling ? (
                    <Pause className="w-6 h-6" />
                ) : (
                    <ChevronDown className="w-6 h-6 animate-bounce" />
                )}
            </motion.button>
        </div>
    );
};

export default AutoScrollButton;
