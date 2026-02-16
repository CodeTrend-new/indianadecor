import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import logo from "@/assets/logo.jpg";

const categories = [
  {
    id: 1,
    title: "Meubles & Mobilier",
    image: logo,
    description: "Sélectionnez parmi nos collections de meubles",
  },
  {
    id: 2,
    title: "Revêtements & Textures",
    image: logo,
    description: "Explorez nos options de revêtements",
  },
  {
    id: 3,
    title: "Éclairage & Accessoires",
    image: logo,
    description: "Découvrez nos solutions d'éclairage",
  },
  {
    id: 4,
    title: "Rangements Personnalisés",
    image: logo,
    description: "Visitez nos solutions de rangement",
  },
];

interface Product {
  id: number;
  name: string;
  category: string;
  price?: string;
}

const mockProducts: Record<number, Product[]> = {
  1: [
    { id: 1, name: "Canapé Design", category: "Meubles & Mobilier", price: "À partir de 5000 DH" },
    { id: 2, name: "Table Basse", category: "Meubles & Mobilier", price: "À partir de 2000 DH" },
    { id: 3, name: "Chaises Modernes", category: "Meubles & Mobilier", price: "À partir de 1500 DH" },
  ],
  2: [
    { id: 4, name: "Peinture Intérieure", category: "Revêtements & Textures" },
    { id: 5, name: "Papier Peint Premium", category: "Revêtements & Textures" },
    { id: 6, name: "Carrelage Moderne", category: "Revêtements & Textures" },
  ],
  3: [
    { id: 7, name: "Suspension LED", category: "Éclairage & Accessoires" },
    { id: 8, name: "Lampadaire Design", category: "Éclairage & Accessoires" },
    { id: 9, name: "Spots Encastrés", category: "Éclairage & Accessoires" },
  ],
  4: [
    { id: 10, name: "Dressing Complet", category: "Rangements Personnalisés" },
    { id: 11, name: "Étagères Murales", category: "Rangements Personnalisés" },
    { id: 12, name: "Placards Intégrés", category: "Rangements Personnalisés" },
  ],
};

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  const handleChooseCategory = (categoryId: number) => {
    setSelectedCategory(categoryId);
    setProducts(mockProducts[categoryId] || []);
  };

  const handleReset = () => {
    setSelectedCategory(null);
    setProducts([]);
  };

  return (
    <section id="produits" className="section-padding bg-background/80 backdrop-blur-sm" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-body text-sm uppercase tracking-[0.3em] font-medium">
            Nos Produits
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4 mt-4">
            Sélectionnez Votre Catégorie
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explorez notre large gamme de produits et solutions pour votre projet
          </p>
        </motion.div>

        {/* Categories Grid */}
        {!selectedCategory && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg border border-border bg-card">
                  {/* Image */}
                  <div className="w-full h-56 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      {category.description}
                    </p>

                    {/* Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleChooseCategory(category.id)}
                      className="w-full bg-primary text-primary-foreground py-2.5 px-4 rounded-sm font-medium text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
                    >
                      Choisir
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Products List */}
        {selectedCategory && products.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {categories.find((c) => c.id === selectedCategory)?.title}
                </h3>
                <p className="text-muted-foreground">
                  {products.length} produit{products.length > 1 ? "s" : ""} disponible{products.length > 1 ? "s" : ""}
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleReset}
                className="bg-muted text-foreground px-6 py-2.5 rounded-sm font-medium text-sm uppercase tracking-wider hover:bg-muted/80 transition-colors"
              >
                Retour
              </motion.button>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {product.name}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    {product.category}
                  </p>
                  {product.price && (
                    <p className="text-primary font-semibold text-lg mb-4">
                      {product.price}
                    </p>
                  )}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-primary/10 text-primary py-2.5 px-4 rounded-sm font-medium text-sm uppercase tracking-wider hover:bg-primary/20 transition-colors"
                  >
                    En Savoir Plus
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Products;
