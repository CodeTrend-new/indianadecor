import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const heroImages = [heroBg, project1, project2, project3, project4, project5, project6];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with crossfade */}
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentIndex}
          src={heroImages[currentIndex]}
          alt="Réalisation Indiana Decor"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.5, ease: "easeInOut" }, scale: { duration: 6, ease: "easeOut" } }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-12 h-px bg-accent" />
            <span className="text-accent font-body text-sm uppercase tracking-[0.3em] font-medium">
              Décoration & Aménagement
            </span>
            <span className="w-12 h-px bg-accent" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight mb-6"
        >
          Transformons Vos
          <br />
          <span className="italic text-accent">Espaces en Art</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-cream/80 font-body text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Décoration sur mesure, aménagement d'espaces et rénovation complète
          à Tanger. Chaque projet est une œuvre unique.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#realisations"
            className="bg-primary text-primary-foreground px-8 py-4 font-body text-sm uppercase tracking-[0.2em] font-medium rounded-sm hover:bg-primary/90 transition-all duration-300"
          >
            Voir Nos Réalisations
          </a>
          <a
            href="#contact"
            className="border border-cream/40 text-cream px-8 py-4 font-body text-sm uppercase tracking-[0.2em] font-medium rounded-sm hover:bg-cream/10 transition-all duration-300"
          >
            Demander un Devis
          </a>
        </motion.div>
      </div>

      {/* Image indicators */}
      {/* <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === currentIndex ? "w-8 bg-accent" : "w-3 bg-cream/40"
            }`}
          />
        ))}
      </div> */}

      {/* Scroll Indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="text-cream/60" size={28} />
        </motion.div>
      </motion.div> */}
    </section>
  );
};

export default Hero;
