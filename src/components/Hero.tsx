import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bags.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium OZO Bags Collection"
          className="w-full h-full object-cover opacity-20"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
      </div>
      
      <div className="container relative z-10 px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 animate-fade-in">
            Premium Bag Manufacturing
            <span className="block text-accent mt-2">Crafted for Excellence</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-primary-foreground/90 max-w-2xl mx-auto animate-fade-in px-2" style={{ animationDelay: '0.2s' }}>
            Leading manufacturer of high-quality handbags, backpacks, and custom bag solutions for wholesale and B2B clients worldwide
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center animate-fade-in px-4" style={{ animationDelay: '0.4s' }}>
            <a href="https://ozobag.com/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 bg-accent hover:bg-accent/90 text-primary font-semibold w-full sm:w-auto">
                View Our Catalog
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline-light" className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 font-semibold w-full sm:w-auto">
                Get Quote
              </Button>
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-10 md:mt-16 pt-8 md:pt-16 border-t border-primary-foreground/20">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-accent mb-1 md:mb-2">10+</div>
              <div className="text-xs sm:text-sm md:text-base text-primary-foreground/80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-accent mb-1 md:mb-2">100K+</div>
              <div className="text-xs sm:text-sm md:text-base text-primary-foreground/80">Bags Produced</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-accent mb-1 md:mb-2">200+</div>
              <div className="text-xs sm:text-sm md:text-base text-primary-foreground/80">B2B Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-accent mb-1 md:mb-2">5+</div>
              <div className="text-xs sm:text-sm md:text-base text-primary-foreground/80">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
