import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const categories = ["Tout", "Salon", "Cuisine", "Jardin", "Chambre", "Salle de Bain", "Bureau"];

const projects = [
  { image: project1, title: "Salon Contemporain", category: "Salon", location: "Tanger, Marshan" },
  { image: project2, title: "Cuisine Moderne", category: "Cuisine", location: "Tanger, Malabata" },
  { image: project3, title: "Jardin Méditerranéen", category: "Jardin", location: "Tanger, Cap Spartel" },
  { image: project4, title: "Suite Parentale", category: "Chambre", location: "Tanger, Iberia" },
  { image: project5, title: "Salle de Bain Luxe", category: "Salle de Bain", location: "Tanger, Centre Ville" },
  { image: project6, title: "Bureau Design", category: "Bureau", location: "Tanger, Boukhalef" },
];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("Tout");

  const filteredProjects =
    activeCategory === "Tout"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="realisations" className="section-padding bg-muted/60 backdrop-blur-sm" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="gold-line" />
            <span className="text-accent font-body text-sm uppercase tracking-[0.3em] font-medium">
              Portfolio
            </span>
            <span className="gold-line" />
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Nos Réalisations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Découvrez nos projets de décoration et d'aménagement réalisés à Tanger
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-sm font-medium tracking-wide rounded-sm transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground border border-border hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
              className="group relative overflow-hidden rounded-sm cursor-pointer aspect-[4/5]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-accent text-xs uppercase tracking-[0.2em] font-medium">
                  {project.category}
                </span>
                <h3 className="font-heading text-xl font-semibold text-cream mt-1">
                  {project.title}
                </h3>
                <p className="text-cream/70 text-sm mt-1">{project.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
