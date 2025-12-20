import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductCategories } from "@/components/ProductCategories";
import { CorporateGifting } from "@/components/CorporateGifting";
import { Manufacturing } from "@/components/Manufacturing";
import { OurClients } from "@/components/OurClients";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen" id="home">
      <Navbar />
      <Hero />
      <CorporateGifting />
      <Manufacturing />
      <ProductCategories />
      <OurClients />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
