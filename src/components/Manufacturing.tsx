import { CheckCircle2 } from "lucide-react";
import manufacturingImage from "@/assets/manufacturing.jpg";
import indiamartTrustseal from "@/assets/indiamart-trustseal.jpeg";

const capabilities = [
  "Custom design and development",
  "High-volume production capacity",
  "Quality control at every stage",
  "Sustainable materials sourcing",
  "Private label manufacturing",
  "Fast turnaround times",
];

export const Manufacturing = () => {
  return (
    <section id="manufacturing" className="py-12 md:py-20 bg-background">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6">
              World-Class Manufacturing
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
              Our state-of-the-art manufacturing facility combines traditional craftsmanship with modern technology to produce premium bags that meet international quality standards.
            </p>
            
            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {capabilities.map((capability) => (
                <div key={capability} className="flex items-start gap-2 md:gap-3">
                  <CheckCircle2 className="text-accent w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base md:text-lg text-foreground">{capability}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="bg-muted p-4 md:p-6 rounded-lg">
                <div className="text-2xl md:text-3xl font-display font-bold text-accent mb-1 md:mb-2">10,000+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Units per month</div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={indiamartTrustseal}
                  alt="IndiaMART TrustSEAL Certified"
                  className="max-h-20 md:max-h-24 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right order-first lg:order-last">
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl aspect-video lg:aspect-auto">
              <img
                src={manufacturingImage}
                alt="OZO Manufacturing Facility"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
