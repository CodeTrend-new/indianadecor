import { Instagram, Facebook, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-background/100 backdrop-blur-sm text-foreground py-16 px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 items-start">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Indiana Decor" className="h-12 w-12 rounded-full object-cover border border-border" />
              <h3 className="font-heading text-2xl font-bold text-foreground">
                Indiana <span className="text-accent">Decor</span>
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Spécialiste de la décoration et l'aménagement intérieur à Tanger. Nous
              transformons vos espaces en lieux de vie exceptionnels.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a href="#contact" className="bg-primary text-primary-foreground px-4 py-2 rounded-sm text-sm hover:bg-primary/90 transition">Contactez-nous</a>
              <a href="#services" className="text-sm text-muted-foreground hover:text-accent transition">Nos Services</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-4">Navigation</h4>
            <div className="flex flex-col gap-2 text-sm">
              {['Accueil','Services','Réalisations','À Propos','Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s/g,'').replace('à','a')}`}
                  className="text-muted-foreground hover:text-accent transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-4">Contact</h4>
            <p className="text-muted-foreground text-sm mb-4">63 Boulevard, Tanger · +212 6X XX XX XX · hello@indianadecor.ma</p>

            <div className="flex gap-3 mb-4">
              <a
                href="https://www.instagram.com/indiana.decor/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm border border-border flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-sm border border-border flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-sm border border-border flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200"
              >
                <MessageCircle size={18} />
              </a>
            </div>

            <form className="flex gap-2">
              <input
                aria-label="Votre email"
                type="email"
                placeholder="Votre email"
                className="flex-1 bg-input border border-border rounded-sm px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="bg-accent text-accent-foreground px-4 py-2 rounded-sm text-sm hover:brightness-95 transition">S'inscrire</button>
            </form>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Indiana Tanger. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
