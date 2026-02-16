import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Ruler, Home, TreePine, Palette, Lightbulb, Wrench, ChevronDown, X, Sofa } from "lucide-react";
import img1 from "@/assets/project-1.jpg";
import img2 from "@/assets/project-2.jpg";
import img3 from "@/assets/project-3.jpg";
import img4 from "@/assets/project-4.jpg";
import img5 from "@/assets/project-5.jpg";
import img6 from "@/assets/project-6.jpg";
import heroImg from "@/assets/hero-bg.jpg";
import manger from "@/assets/manger.jpeg";
import adulte from "@/assets/adulte.jpg";
import enfant from "@/assets/enfant.jpg";
import bebe from "@/assets/bebe.jpg";
import cuisine from "@/assets/cuisine.jpg";
import jardin from "@/assets/jardin.jpg";
const services = [
       {
        icon: Home,
        title: "Rénovation Complète",
        description:
          "Travaux complets pour transformer un logement : remplacement de sols, plafonds, murs, cloisons et finitions — choix de matériaux et suivi chantier.",
      },
      {
        icon: Ruler,
        title: "Décoration Sur Mesure",
        description:
          "Projet global pour un espace complet choisi par vous (salon, chambre, cuisine…). Conception et agencement sur mesure incluant mobilier, matériaux et finitions selon vos goûts.",
      },
      {
        icon: Sofa,
        title: "Réaménagement & Mobilier",
        description:
          "Interventions ciblées pour repenser un espace existant : remplacement ou réorganisation du mobilier, optimisation des volumes sans travaux lourds.",
      },
      {
        icon: Wrench,
        title: "Archtecte Intérieur",
        description:
          "Service spécialisé dans l'installation et le remplacement de sols, plafonds, murs, cloisons et finitions dans l'espace de votre choix. Nous gérons chaque détail technique pour un résultat impeccable.",
      },
      {
        icon: TreePine,
        title: "Jardins & Extérieurs",
        description:
          "Création de jardins, terrasses et espaces extérieurs qui prolongent votre intérieur en toute élégance.",
      },
      {
        icon: Palette,
        title: "Conseil en Décoration",
        description:
          "Accompagnement pour le choix des couleurs, matériaux et mobilier, avec des recommandations réalisables par notre équipe ou un architecte d'intérieur.",
      },
      
    ];
    const Services = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const panelRef = useRef<HTMLDivElement | null>(null);
    const SCROLL_OFFSET = -80;
    const formRef = useRef<HTMLDivElement | null>(null);
    const FORM_SCROLL_OFFSET = -60;
    const [activeService, setActiveService] = useState<string | null>(null);
    const [clickedService, setClickedService] = useState<string | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [formData, setFormData] = useState({ fullName: "", phone: "", address: "", space: "", amenageSol: "", amenagePlafond: "", amenageMur: "", amenagementAmeublement: "", salonStyle: "", cuisineStyle: "" });

  const imagesList = [
    { img:  heroImg, label: "Salon & Séjour" },
    { img: manger, label: "Salle à manger" },
    { img: adulte, label: "Chambre adulte" },
    { img: enfant, label: "Chambre enfant" },
    { img: bebe, label: "Chambre bébé" },
    { img: cuisine, label: "Cuisine" },
    { img: jardin, label: "Mobilier de jardin" },
  ];

  const handleImageClick = (label: string) => {
    setSelectedImage(label);
    setFormData({ ...formData, space: label, salonStyle: "", cuisineStyle: "" });
  };

  const handleFormClose = () => {
    setSelectedImage(null);
    setFormData({ fullName: "", phone: "", address: "", space: "", amenageSol: "", amenagePlafond: "", amenageMur: "", amenagementAmeublement: "", salonStyle: "", cuisineStyle: "" });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    handleFormClose();
  };


  useEffect(() => {
    if (clickedService === "Décoration Sur Mesure" && panelRef.current) {
      const rectTop = panelRef.current.getBoundingClientRect().top + window.scrollY;
      const target = Math.max(0, Math.round(rectTop + SCROLL_OFFSET));
      window.scrollTo({ top: target, behavior: "smooth" });
    }
  }, [clickedService]);

  useEffect(() => {
    if (selectedImage && formRef.current) {
      try {
        const rectTop = formRef.current.getBoundingClientRect().top + window.scrollY;
        const target = Math.max(0, Math.round(rectTop + FORM_SCROLL_OFFSET));
        window.scrollTo({ top: target, behavior: "smooth" });
      } catch (e) {
        // fallback: do nothing
      }
    }
  }, [selectedImage]);

  // Scrolling to panel is handled when the card is clicked (see effect on `clickedService`)


  return (
    <section id="services" className="section-padding bg-background/80 backdrop-blur-sm" ref={ref}>
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="gold-line" />
            <span className="text-accent font-body text-sm uppercase tracking-[0.3em] font-medium">
              Nos Services
            </span>
            <span className="gold-line" />
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            L'Art de la Décoration
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Des solutions complètes pour transformer chaque espace en un lieu de vie exceptionnel
          </p>
        </motion.div>

        {/* categories panel will be rendered inline after the grid */}

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...cardEntrance, delay: index * 0.12 }}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 18px 40px rgba(2,6,23,0.06)",
                transition: cardInteraction,
              }}
              whileTap={{ scale: 0.99 }}
              onClick={() => {
                if (service.title === "Décoration Sur Mesure") {
                  setClickedService((s) => (s === "Décoration Sur Mesure" ? null : "Décoration Sur Mesure"));
                }
              }}
              className="relative group p-8 bg-card rounded-sm border border-border cursor-pointer"
            >
              <div className="space-y-3">
                <div className="w-14 h-14 rounded-sm bg-primary/10 flex items-center justify-center mb-6 transition-colors duration-300 relative">
                  <service.icon className="text-primary" size={26} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>

              <motion.button
                aria-label={service.title + " toggle"}
                onClick={(e) => {
                  e.stopPropagation();
                  if (service.title === "Décoration Sur Mesure") {
                    setClickedService((s) => (s === "Décoration Sur Mesure" ? null : "Décoration Sur Mesure"));
                  }
                }}
                initial={{ rotate: 0 }}
                animate={clickedService === service.title ? { rotate: 180 } : { rotate: 0 }}
                transition={{ duration: 0.35 }}
                className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-sm bg-muted/5 hover:bg-muted/10 text-muted-foreground"
              >
                <ChevronDown size={16} />
              </motion.button>
            </motion.div>
          ))}
        </div>
        {/* Inline categories panel inserted after the grid (pushes content down) */}
        <motion.div
          initial={{ maxHeight: 0, opacity: 0 }}
          animate={
            clickedService === "Décoration Sur Mesure"
              ? { maxHeight: 600, opacity: 1 }
              : { maxHeight: 0, opacity: 0 }
          }
          transition={{ duration: 0.22 }}
          style={{ overflow: "hidden" }}
          ref={panelRef}
        >
          <div className="bg-background/70 border border-border rounded-sm p-6 mt-6">
            <div className="mb-4 text-lg md:text-xl font-semibold text-foreground">Choisissez votre espace</div>
            <div className="flex gap-6 overflow-x-auto py-2 px-6">
              {imagesList.map((c) => (
                <div
                  key={c.label}
                  className="min-w-[200px] md:min-w-[220px] flex-shrink-0 cursor-pointer"
                  onClick={() => handleImageClick(c.label)}
                >
                  <div className="w-full h-36 md:h-40 rounded-md overflow-hidden mb-3 hover:opacity-80 transition-opacity">
                    <img src={c.img} alt={c.label} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-foreground font-medium">{c.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form Inline Section (renders below image list and centered) */}
        {selectedImage && (
          <motion.div
            initial={{ maxHeight: 0, opacity: 0 }}
            animate={selectedImage ? { maxHeight: 800, opacity: 1 } : { maxHeight: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
            style={{ overflow: "hidden" }}
            className="mt-6"
            ref={formRef}
          >
            <div className="max-w-md mx-auto bg-card border border-border rounded-lg p-8 shadow-2xl max-h-[500px] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-heading font-bold text-foreground">Contacter Nous</h3>
                <button
                  onClick={handleFormClose}
                  className="w-9 h-9 flex items-center justify-center rounded-sm bg-muted/5 hover:bg-muted/10 text-muted-foreground transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Nom complet</label>
                  <input
                    type="text"
                    placeholder="Prénom et nom"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-2 rounded-sm bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Téléphone</label>
                  <input
                    type="tel"
                    placeholder="06 00 00 00 00"
                    maxLength="10"
                    pattern="[0-9]{10}"
                    inputMode="numeric"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                    className="w-full px-4 py-2 rounded-sm bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Adresse complète</label>
                  <input
                    type="text"
                    placeholder="Rue, ville, code postal"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-2 rounded-sm bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Espace Sélectionné</label>
                  <select
                    value={formData.space}
                    onChange={(e) => setFormData({ ...formData, space: e.target.value })}
                    className="w-full px-4 py-2 rounded-sm bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Choisir un espace</option>
                    {imagesList.map((item) => (
                      <option key={item.label} value={item.label}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* nouveau groupe de questions oui/non */}
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-foreground">
                    Souhaitez-vous aménager :
                  </label>

                  {/* sol */}
                  <div className="flex items-center gap-4">
                    <span className="text-sm">Sol ?</span>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="amenageSol"
                        value="oui"
                        checked={formData.amenageSol === "oui"}
                        onChange={(e) =>
                          setFormData({ ...formData, amenageSol: e.target.value })
                        }
                        className="form-radio"
                      />
                      Oui
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="amenageSol"
                        value="non"
                        checked={formData.amenageSol === "non"}
                        onChange={(e) =>
                          setFormData({ ...formData, amenageSol: e.target.value })
                        }
                        className="form-radio"
                      />
                      Non
                    </label>
                  </div>

                  {/* plafond */}
                  <div className="flex items-center gap-4">
                    <span className="text-sm">Plafond ?</span>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="amenagePlafond"
                        value="oui"
                        checked={formData.amenagePlafond === "oui"}
                        onChange={(e) =>
                          setFormData({ ...formData, amenagePlafond: e.target.value })
                        }
                        className="form-radio"
                      />
                      Oui
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="amenagePlafond"
                        value="non"
                        checked={formData.amenagePlafond === "non"}
                        onChange={(e) =>
                          setFormData({ ...formData, amenagePlafond: e.target.value })
                        }
                        className="form-radio"
                      />
                      Non
                    </label>
                  </div>

                  {/* murs */}
                  <div className="flex items-center gap-4">
                    <span className="text-sm">Murs ?</span>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="amenageMur"
                        value="oui"
                        checked={formData.amenageMur === "oui"}
                        onChange={(e) =>
                          setFormData({ ...formData, amenageMur: e.target.value })
                        }
                        className="form-radio"
                      />
                      Oui
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="amenageMur"
                        value="non"
                        checked={formData.amenageMur === "non"}
                        onChange={(e) =>
                          setFormData({ ...formData, amenageMur: e.target.value })
                        }
                        className="form-radio"
                      />
                      Non
                    </label>
                  </div>

                  {/* ameublement */}
                  <div className="flex items-center gap-4">
                    <span className="text-sm">Aménagement mobilier ?</span>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="amenagementAmeublement"
                        value="oui"
                        checked={formData.amenagementAmeublement === "oui"}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            amenagementAmeublement: e.target.value,
                          })
                        }
                        className="form-radio"
                      />
                      Oui
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="amenagementAmeublement"
                        value="non"
                        checked={formData.amenagementAmeublement === "non"}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            amenagementAmeublement: e.target.value,
                          })
                        }
                        className="form-radio"
                      />
                      Non
                    </label>
                  </div>
                </div>

                {/* champs conditionnels selon l'espace sélectionné */}
                {selectedImage === "Salon & Séjour" && (
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-foreground mb-2">Style</label>
                    <div className="flex items-center gap-4">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="salonStyle"
                          value="traditionnel"
                          checked={formData.salonStyle === "traditionnel"}
                          required={selectedImage === "Salon & Séjour"}
                          onChange={(e) => setFormData({ ...formData, salonStyle: e.target.value })}
                          className="form-radio"
                        />
                        Traditionnel
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="salonStyle"
                          value="moderne"
                          checked={formData.salonStyle === "moderne"}
                          onChange={(e) => setFormData({ ...formData, salonStyle: e.target.value })}
                          className="form-radio"
                        />
                        Moderne
                      </label>
                    </div>
                  </div>
                )}

                {selectedImage === "Cuisine" && (
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-foreground mb-2">Type de cuisine</label>
                    <div className="flex items-center gap-4">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="cuisineStyle"
                          value="americaine"
                          checked={formData.cuisineStyle === "americaine"}
                          required={selectedImage === "Cuisine"}
                          onChange={(e) => setFormData({ ...formData, cuisineStyle: e.target.value })}
                          className="form-radio"
                        />
                        Américaine
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="cuisineStyle"
                          value="europeenne"
                          checked={formData.cuisineStyle === "europeenne"}
                          onChange={(e) => setFormData({ ...formData, cuisineStyle: e.target.value })}
                          className="form-radio"
                        />
                        Européenne
                      </label>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full mt-6 px-6 py-2 rounded-sm bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </div>

      {/* Partners Section */}
      <div className="mt-24 pt-16 border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-body text-sm uppercase tracking-[0.3em] font-medium">
            Nos Partenaires
          </span>
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
            Nos Collaborateurs de Confiance
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Des entreprises et fournisseurs de qualité qui nous font confiance
          </p>
        </motion.div>

        {/* Partners Carousel */}
        <div className="overflow-hidden bg-card/30 border border-border rounded-sm py-8">
          <motion.div
            className="flex gap-8 px-6"
            animate={{ x: -1000 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="min-w-[180px] h-24 flex items-center justify-center bg-background border border-border rounded-sm flex-shrink-0"
              >
                <div className="text-center">
                  <div
                    className="w-12 h-12 rounded-full mx-auto mb-2"
                    style={{
                      backgroundColor: `hsl(${Math.random() * 360}, 70%, 60%)`,
                    }}
                  />
                  <p className="text-muted-foreground text-xs font-medium">
                    Partenaire {i + 1}
                  </p>
                </div>
              </div>
            ))}
            {/* Duplicate pour boucle infinie */}
            {[...Array(6)].map((_, i) => (
              <div
                key={`dup-${i}`}
                className="min-w-[180px] h-24 flex items-center justify-center bg-background border border-border rounded-sm flex-shrink-0"
              >
                <div className="text-center">
                  <div
                    className="w-12 h-12 rounded-full mx-auto mb-2"
                    style={{
                      backgroundColor: `hsl(${Math.random() * 360}, 70%, 60%)`,
                    }}
                  />
                  <p className="text-muted-foreground text-xs font-medium">
                    Partenaire {i + 1}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Smooth card interaction settings
const cardEntrance = { duration: 0.6, ease: [0.2, 0.9, 0.2, 1] };
const cardInteraction = { type: "spring", stiffness: 260, damping: 22 };


export default Services;
