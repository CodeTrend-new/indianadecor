import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import marbleBg from "@/assets/marble-bg.jpg";
import Products from "@/components/Products";

const Index = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url(${marbleBg})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      <Hero />
       <About />
      <Services />
      {/* <Gallery /> */}
     
      {/* <Contact /> */}
      <Products />
      <Footer />
    </div>
  );
};

export default Index;
