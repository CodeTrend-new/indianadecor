import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-muted/60 backdrop-blur-sm" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="gold-line" />
            <span className="text-accent font-body text-sm uppercase tracking-[0.3em] font-medium">
              Contact
            </span>
            <span className="gold-line" />
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Parlons de Votre Projet
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Contactez-nous pour un devis gratuit et sans engagement
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Téléphone</h3>
                <p className="text-muted-foreground">+212 6 00 00 00 00</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Email</h3>
                <p className="text-muted-foreground">contact@indiana-tanger.ma</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Adresse</h3>
                <p className="text-muted-foreground">Tanger, Maroc</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-4">Suivez-nous</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/indiana.decor/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-sm bg-card border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-sm bg-card border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-sm bg-card border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                >
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-card border border-border rounded-sm p-8 space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Nom</label>
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Téléphone</label>
                <input
                  type="tel"
                  placeholder="+212 6 00 00 00 00"
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
              <input
                type="email"
                placeholder="votre@email.com"
                className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Type de Projet</label>
              <select className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all">
                <option value="">Sélectionnez un service</option>
                <option value="decoration">Décoration sur mesure</option>
                <option value="amenagement">Aménagement complet</option>
                <option value="jardin">Jardin & Extérieur</option>
                <option value="renovation">Rénovation d'espace</option>
                <option value="conseil">Conseil en décoration</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
              <textarea
                rows={4}
                placeholder="Décrivez votre projet..."
                className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-4 font-body text-sm uppercase tracking-[0.2em] font-medium rounded-sm hover:bg-primary/90 transition-all duration-300"
            >
              Envoyer la Demande
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
