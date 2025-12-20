import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import handbagsImage from "@/assets/handbags-category.jpg";
import backpacksImage from "@/assets/backpacks-category.jpg";
import slingbagsImage from "@/assets/slingbags-category.jpg";
import walletsImage from "@/assets/wallets-category.jpg";

const categories = [
  {
    title: "Office Bags",
    description: "Professional bags designed for the modern workplace",
    image: handbagsImage,
  },
  {
    title: "Delivery Bags",
    description: "Durable and spacious bags for delivery professionals",
    image: backpacksImage,
  },
  {
    title: "Laptop Bags",
    description: "Protective and stylish bags for your tech essentials",
    image: slingbagsImage,
  },
  {
    title: "Utility Bags",
    description: "Versatile bags for everyday business needs",
    image: walletsImage,
  },
];

export const ProductCategories = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set(prev).add(index));
            
            // Set as active when mostly visible
            if (entry.intersectionRatio > 0.5) {
              setActiveIndex(index);
            }
          }
        },
        { threshold: [0.2, 0.5, 0.8], rootMargin: "-10% 0px -10% 0px" }
      );

      observer.observe(card);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container px-4" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Product Range
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive collection of bags designed for style, functionality, and durability
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <div
              key={category.title}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`transform transition-all duration-700 ease-out ${
                visibleCards.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <Card
                className={`group overflow-hidden border-2 transition-all duration-500 cursor-pointer h-full ${
                  activeIndex === index
                    ? "border-accent shadow-elegant scale-[1.02] z-10"
                    : "border-border hover:border-accent/50 shadow-card"
                }`}
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={category.image}
                    alt={category.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      activeIndex === index ? "scale-110" : "group-hover:scale-105"
                    }`}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent transition-opacity duration-500 ${
                      activeIndex === index ? "opacity-100" : "opacity-0 group-hover:opacity-70"
                    }`}
                  />
                  {/* Spotlight effect when active */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      activeIndex === index
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                    style={{
                      background: activeIndex === index
                        ? "radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.3) 100%)"
                        : "none",
                    }}
                  />
                  {/* Active indicator badge */}
                  <div
                    className={`absolute top-4 right-4 bg-accent text-primary px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
                      activeIndex === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-2"
                    }`}
                  >
                    Featured
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    className={`font-display text-xl md:text-2xl font-bold mb-2 transition-colors duration-300 ${
                      activeIndex === index ? "text-accent" : "text-primary group-hover:text-accent"
                    }`}
                  >
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">{category.description}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Progress indicator dots */}
        <div className="flex justify-center gap-2 mt-10 md:hidden">
          {categories.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                cardRefs.current[index]?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
                setActiveIndex(index);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-accent w-8"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to ${categories[index].title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
