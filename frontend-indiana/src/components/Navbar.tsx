import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const navItems = [
  { label: "Accueil", href: "#accueil" },
  {
    label: "Services",
    href: "#services",
    children: [
      {
        label: "Architecte par espace",
        href: "#architecte-par-espace",
        children: [
          {
            label: "Salon & Séjour",
            href: "#salon",
            children: [
              { label: "Traditionnel", href: "#salon-traditionnel" },
              { label: "Moderne", href: "#salon-moderne" },
            ],
          },
          { label: "Salle à manger", href: "#salle-a-manger" },
          { label: "Chambre adulte", href: "#chambre-adulte" },
          { label: "Chambre enfant", href: "#chambre-enfant" },
          { label: "Chambre bébé", href: "#chambre-bebe" },
          {
            label: "Cuisine",
            href: "#cuisine",
            children: [
              { label: "Européenne", href: "#cuisine-europeenne" },
              { label: "Américaine", href: "#cuisine-americaine" },
            ],
          },
          { label: "Mobilier de jardin", href: "#mobilier-jardin" },
        ],
      },
      { label: "Architecte complet", href: "#architecte-complet" },
      { label: "Rangement et Décoration", href: "#decoration-conseil" },
    ],
  },
  { label: "Réalisations", href: "#realisations" },
  { label: "À Propos", href: "#apropos" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [espaceOpen, setEspaceOpen] = useState(false);
  const [styleOpen, setStyleOpen] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#accueil" className="flex items-center gap-3">
          <img src={logo} alt="Indiana Decor" className="h-10 md:h-12 w-auto" />
          <span className={`font-heading text-xl md:text-2xl font-bold tracking-tight ${isScrolled ? "text-foreground" : "text-primary-foreground"} transition-colors duration-500`}>
            Indiana <span className="text-accent">Decor</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => {
                if (item.children) setServicesOpen(item.label === "Services");
              }}
              onMouseLeave={() => {
                if (item.children) {
                  setServicesOpen(false);
                  setEspaceOpen(false);
                }
              }}
            >
              {!item.children ? (
                <a
                  href={item.href}
                  className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-primary ${
                    isScrolled ? "text-foreground" : "text-primary-foreground"
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <button
                  onClick={() => setServicesOpen((s) => !s)}
                  className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-primary flex items-center gap-2 ${
                    isScrolled ? "text-foreground" : "text-primary-foreground"
                  }`}
                >
                  {item.label}
                  <span className="text-xs">▾</span>
                </button>
              )}

              {/* Dropdown for item.children */}
              <AnimatePresence>
                {item.children && servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.12 }}
                    className="absolute left-0 top-full mt-3 w-56 bg-background border border-border rounded-md shadow-lg z-50"
                  >
                    <div className="py-2">
                      {item.children.map((child) => (
                        <div key={child.label} className="relative">
                          {!child.children ? (
                            <a
                              href={child.href}
                              className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                              onClick={() => setServicesOpen(false)}
                            >
                              {child.label}
                            </a>
                          ) : (
                            <div
                              onMouseEnter={() => setEspaceOpen(true)}
                              onMouseLeave={() => setEspaceOpen(false)}
                              className="group"
                            >
                              <button
                                onClick={() => setEspaceOpen((s) => !s)}
                                className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary flex items-center justify-between"
                              >
                                <span>{child.label}</span>
                                <span className="text-xs">▸</span>
                              </button>

                              {/* Nested dropdown */}
                              <AnimatePresence>
                                {child.children && espaceOpen && (
                                  <motion.div
                                    initial={{ opacity: 0, x: -6 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -6 }}
                                    transition={{ duration: 0.12 }}
                                    className="absolute left-full top-0 ml-2 w-56 bg-background border border-border rounded-md shadow-lg"
                                  >
                                    <div className="py-2">
                                      {child.children.map((sub) => (
                                        <div key={sub.label} className="relative group">
                                          {!sub.children ? (
                                            <a
                                              href={sub.href}
                                              className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                                              onClick={() => {
                                                setServicesOpen(false);
                                                setEspaceOpen(false);
                                              }}
                                            >
                                              {sub.label}
                                            </a>
                                          ) : (
                                            <div
                                              onMouseEnter={() => setStyleOpen(sub.label)}
                                              onMouseLeave={() => setStyleOpen(null)}
                                            >
                                              <button className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary flex items-center justify-between">
                                                <span>{sub.label}</span>
                                                <span className="text-xs">▸</span>
                                              </button>

                                              {/* Style dropdown */}
                                              <AnimatePresence>
                                                {sub.children && styleOpen === sub.label && (
                                                  <motion.div
                                                    initial={{ opacity: 0, x: -6 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -6 }}
                                                    transition={{ duration: 0.12 }}
                                                    className="absolute left-full top-0 ml-2 w-48 bg-background border border-border rounded-md shadow-lg"
                                                  >
                                                    <div className="py-2">
                                                      {sub.children.map((style) => (
                                                        <a
                                                          key={style.label}
                                                          href={style.href}
                                                          className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                                                          onClick={() => {
                                                            setServicesOpen(false);
                                                            setEspaceOpen(false);
                                                            setStyleOpen(null);
                                                          }}
                                                        >
                                                          {style.label}
                                                        </a>
                                                      ))}
                                                    </div>
                                                  </motion.div>
                                                )}
                                              </AnimatePresence>
                                            </div>
                                          )}
                                        </div>
                                      ))}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium uppercase tracking-wider rounded-sm hover:bg-primary/90 transition-all duration-300"
          >
            Devis Gratuit
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setStyleOpen(null);
          }}
          className={`md:hidden ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/98 backdrop-blur-md border-t border-border"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.label} className="w-full">
                  {!item.children ? (
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-foreground text-lg font-medium py-2 border-b border-border/50 hover:text-primary transition-colors block"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <div className="w-full">
                      <button
                        onClick={() => setServicesOpen((s) => !s)}
                        className="w-full text-left text-foreground text-lg font-medium py-2 border-b border-border/50 hover:text-primary transition-colors flex items-center justify-between"
                      >
                        <span>{item.label}</span>
                        <span className="text-sm">{servicesOpen ? '▾' : '▸'}</span>
                      </button>

                      {item.children && servicesOpen && (
                        <div className="pl-4 pt-2">
                          {item.children.map((child) => (
                            <div key={child.label} className="w-full">
                              {!child.children ? (
                                <a
                                  href={child.href}
                                  onClick={() => setIsOpen(false)}
                                  className="block text-foreground text-base py-2 hover:text-primary"
                                >
                                  {child.label}
                                </a>
                              ) : (
                                <div>
                                  <button
                                    onClick={() => setEspaceOpen((s) => !s)}
                                    className="w-full text-left text-foreground text-base py-2 hover:text-primary flex items-center justify-between"
                                  >
                                    <span>{child.label}</span>
                                    <span className="text-sm">{espaceOpen ? '▾' : '▸'}</span>
                                  </button>

                                  {child.children && espaceOpen && (
                                    <div className="pl-4 pt-1 pb-2">
                                      {child.children.map((sub) => (
                                        <div key={sub.label} className="w-full">
                                          {!sub.children ? (
                                            <a
                                              href={sub.href}
                                              onClick={() => setIsOpen(false)}
                                              className="block text-foreground text-base py-2 hover:text-primary"
                                            >
                                              {sub.label}
                                            </a>
                                          ) : (
                                            <div>
                                              <button
                                                onClick={() => setStyleOpen(styleOpen === sub.label ? null : sub.label)}
                                                className="w-full text-left text-foreground text-base py-2 hover:text-primary flex items-center justify-between"
                                              >
                                                <span>{sub.label}</span>
                                                <span className="text-sm">{styleOpen === sub.label ? '▾' : '▸'}</span>
                                              </button>

                                              {sub.children && styleOpen === sub.label && (
                                                <div className="pl-4 pt-1 pb-2">
                                                  {sub.children.map((style) => (
                                                    <a
                                                      key={style.label}
                                                      href={style.href}
                                                      onClick={() => setIsOpen(false)}
                                                      className="block text-foreground text-base py-2 hover:text-primary"
                                                    >
                                                      {style.label}
                                                    </a>
                                                  ))}
                                                </div>
                                              )}
                                            </div>
                                          )}
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="bg-primary text-primary-foreground px-6 py-3 text-center text-sm font-medium uppercase tracking-wider rounded-sm mt-2"
              >
                Devis Gratuit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
