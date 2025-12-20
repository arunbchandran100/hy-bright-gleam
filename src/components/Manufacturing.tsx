import { CheckCircle2 } from "lucide-react";
import manufacturingImage from "@/assets/manufacturing.jpg";

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
    <section id="manufacturing" className="py-20 bg-white">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              World-Class Manufacturing
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our state-of-the-art manufacturing facility combines traditional craftsmanship with modern technology to produce premium bags that meet international quality standards.
            </p>
            
            <div className="space-y-4 mb-8">
              {capabilities.map((capability) => (
                <div key={capability} className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent w-6 h-6 flex-shrink-0 mt-1" />
                  <span className="text-lg text-foreground">{capability}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-muted p-6 rounded-lg">
                <div className="text-3xl font-display font-bold text-accent mb-2">10,000+</div>
                <div className="text-sm text-muted-foreground">Units per month</div>
              </div>
              <div className="bg-muted p-6 rounded-lg">
                <div className="text-2xl md:text-3xl font-display font-bold text-accent mb-2">IndiaMART</div>
                <div className="text-sm text-muted-foreground">TrustSEAL Certified</div>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={manufacturingImage}
                alt="OZO Manufacturing Facility"
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
