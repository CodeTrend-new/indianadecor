import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Clock, Star } from "lucide-react";
import logo from "@/assets/logo.jpg";

const stats = [
  { icon: Award, number: "150+", label: "Projets Réalisés" },
  { icon: Users, number: "120+", label: "Clients Satisfaits" },
  { icon: Clock, number: "10+", label: "Années d'Expérience" },
  { icon: Star, number: "5.0", label: "Note Moyenne" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="apropos" className="section-padding bg-background/80 backdrop-blur-sm" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <img src={logo} alt="Indiana Decor" className="h-12 w-12 rounded-full object-cover border border-border" />
              <div>
                <span className="gold-line block" />
                <span className="text-accent font-body text-sm uppercase tracking-[0.3em] font-medium">
                  À Propos
                </span>
              </div>
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Créateurs d'Espaces
              <br />
              <span className="italic text-primary">d'Exception</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              <span className="text-foreground font-semibold">Indiana Tanger</span> est votre partenaire de confiance pour la décoration et
              l'aménagement intérieur à Tanger. Nous croyons que chaque espace raconte
              une histoire magnifique.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground leading-relaxed">
                  <span className="text-foreground font-semibold">Conception sur mesure</span> : Du simple espace à la rénovation complète d'appartements, maisons et jardins
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground leading-relaxed">
                  <span className="text-foreground font-semibold">Processus collaboratif</span> : Création de prototypes et design personnalisé selon vos choix
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground leading-relaxed">
                  <span className="text-foreground font-semibold">Rangements sur mesure</span> : Solutions entièrement adaptées à vos besoins spécifiques
                </p>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 font-body text-sm uppercase tracking-[0.2em] font-medium rounded-sm hover:bg-primary/90 transition-all duration-300"
            >
              Parlons de Votre Projet
            </a>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="w-full">
              <img src={logo} alt="Indiana Decor" className="w-full h-48 object-cover rounded-md border border-border" />
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-card border border-border rounded-sm p-8 text-center hover-lift"
                >
                  <stat.icon className="text-accent mx-auto mb-4" size={28} />
                  <div className="font-heading text-3xl font-bold text-foreground mb-1">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Procedure de Travail Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 pt-16 border-t border-border"
        >
          <div className="text-center mb-12">
            <span className="text-accent font-body text-sm uppercase tracking-[0.3em] font-medium">
              Notre Processus
            </span>
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
              Procédure de Travail d'Équipe
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Découvrez comment nous transformons vos idées en réalité magnifique
            </p>
          </div>

          {/* Video Placeholder */}
          <div className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden border border-border bg-background/50">
            <div className="w-full h-96 md:h-[500px] flex items-center justify-center bg-muted/20">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
                <p className="text-muted-foreground font-medium">Vidéo à venir</p>
                <p className="text-muted-foreground text-sm mt-1">La vidéo de présentation sera affichée ici</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
