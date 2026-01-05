import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Building2, Briefcase, Store, Globe, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import client logos
import nestoLogo from "@/assets/clients/nesto-logo.jpg";
import freshtohomeLogo from "@/assets/clients/freshtohome-logo.jpeg";
import kalyanSilksLogo from "@/assets/clients/kalyan-silks-logo.png";
import pothysLogo from "@/assets/clients/pothys-logo.png";
import dlifeLogo from "@/assets/clients/dlife-logo.png";
import grandLogo from "@/assets/clients/grand-logo.png";
import abcLogo from "@/assets/clients/abc-logo.png";
import stylePlusLogo from "@/assets/clients/style-plus-logo.jpg";
import anthusLogo from "@/assets/clients/anthus-logo.jpeg";

const clientTypes = [
  {
    icon: Building2,
    title: "Retail Chains",
    description: "Partnering with major retail chains across India and international markets",
    count: "50+",
  },
  {
    icon: Briefcase,
    title: "B2B Clients",
    description: "Trusted by businesses for corporate and commercial bag requirements",
    count: "100+",
  },
  {
    icon: Store,
    title: "Stores",
    description: "Supplying to individual stores and regional retail outlets",
    count: "200+",
  },
  {
    icon: Globe,
    title: "Online Retailers",
    description: "E-commerce partners and online marketplace sellers",
    count: "10+",
  },
];

const clientLogos = [
  { src: nestoLogo, alt: "Nesto" },
  { src: freshtohomeLogo, alt: "Fresh to Home" },
  { src: kalyanSilksLogo, alt: "Kalyan Silks" },
  { src: pothysLogo, alt: "Pothys" },
  { src: dlifeLogo, alt: "D'Life Home Interiors" },
  { src: grandLogo, alt: "Grand" },
  { src: abcLogo, alt: "ABC" },
  { src: stylePlusLogo, alt: "Style Plus" },
  { src: anthusLogo, alt: "Anthus Pharmaceuticals" },
];

export const OurClients = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollByAmount = (amount: number) => {
    if (scrollRef.current) {
      const newPosition = scrollPosition + amount;
      const maxScroll = scrollRef.current.scrollWidth / 2;
      
      let finalPosition = newPosition;
      if (finalPosition < 0) {
        finalPosition = maxScroll + finalPosition;
      } else if (finalPosition >= maxScroll) {
        finalPosition = finalPosition - maxScroll;
      }
      
      setScrollPosition(finalPosition);
      scrollRef.current.scrollLeft = finalPosition;
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        setScrollPosition(prev => {
          let newPos = prev + 0.5;
          if (newPos >= scrollContainer.scrollWidth / 2) {
            newPos = 0;
          }
          scrollContainer.scrollLeft = newPos;
          return newPos;
        });
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <section id="clients" className="py-12 md:py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 md:mb-4">
            Our Valued Clients
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Trusted by leading retailers, brands, and distributors worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-10 md:mb-16">
          {clientTypes.map((client, index) => {
            const Icon = client.icon;
            return (
              <Card
                key={client.title}
                className="p-4 md:p-6 text-center hover:shadow-lg transition-all duration-300 hover:border-accent border-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-accent/10 rounded-full mb-3 md:mb-4">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-accent" />
                </div>
                <div className="text-2xl md:text-3xl font-display font-bold text-primary mb-1 md:mb-2">
                  {client.count}
                </div>
                <h3 className="font-display text-sm sm:text-base md:text-xl font-semibold text-primary mb-1 md:mb-2">
                  {client.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">{client.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="bg-card rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-12 shadow-lg">
          <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-primary text-center mb-8 md:mb-12">
            Our Clients
          </h3>
          <div className="relative">
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background shadow-md -ml-3 md:-ml-4"
              onClick={() => scrollByAmount(-200)}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div 
              ref={scrollRef}
              className="overflow-hidden mx-6 md:mx-8"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="flex gap-8 md:gap-12 items-center" style={{ width: 'max-content' }}>
                {[...clientLogos, ...clientLogos].map((logo, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-24 h-16 md:w-32 md:h-20 lg:w-40 lg:h-24 flex items-center justify-center bg-white rounded-lg p-2 md:p-3"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background shadow-md -mr-3 md:-mr-4"
              onClick={() => scrollByAmount(200)}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
