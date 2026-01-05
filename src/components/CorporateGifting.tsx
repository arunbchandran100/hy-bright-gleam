import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Package, Truck, Users, Building2, Calendar, Briefcase, ChevronUp, ChevronDown } from "lucide-react";
import corporateHero1 from "@/assets/corporate-hero-1.jpg";
import corporateHero2 from "@/assets/corporate-hero-2.jpg";
import corporateHero3 from "@/assets/corporate-hero-3.jpg";
import corporateHero4 from "@/assets/corporate-hero-4.jpg";
import corporateLaptopBags from "@/assets/corporate-laptop-bags.jpg";
import corporateCustomization from "@/assets/corporate-customization.jpg";

const heroImages = [
  { src: corporateHero1, alt: "Corporate gift bags collection" },
  { src: corporateHero2, alt: "Employee welcome kit with branded backpack" },
  { src: corporateHero3, alt: "Custom branded corporate bags" },
  { src: corporateHero4, alt: "Conference and event giveaway bags" },
];

const bagSolutions = [
  "Laptop bags for employee onboarding & welcome kits",
  "Backpacks for training programs and conferences",
  "Office and utility bags for staff gifting",
  "Custom PU bags with company branding",
  "Event and promotional giveaway bags",
];

const customisationOptions = [
  "Logo branding (printing, embossing, or branding options based on requirement)",
  "Material selection (PU, fabric, or mixed materials)",
  "Colour customisation aligned with brand guidelines",
  "Size and internal compartment customisation",
  "Packaging support for gifting and distribution",
];

const whyChooseUs = [
  "In-house manufacturing unit in Kochi",
  "Experience handling bulk and customised corporate orders",
  "Focus on quality materials and workmanship",
  "Clear coordination during sampling and production",
  "Suitable for startups, SMEs, and large organisations",
];

const industries = [
  { icon: Truck, name: "Travel & Tourism Industry" },
  { icon: Building2, name: "Healthcare & Medical Sector" },
  { icon: Package, name: "Logistics & Delivery Services" },
  { icon: Briefcase, name: "Corporate Offices & Enterprises" },
  { icon: Users, name: "Organisations Planning Bulk Gifting" },
];

export const CorporateGifting = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<Set<number>>(new Set());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <section id="corporate-gifting" className="py-12 md:py-20 bg-muted/30">
      <div className="container px-4">
        {/* Hero Image Carousel */}
        <div className="relative rounded-xl md:rounded-2xl overflow-hidden mb-10 md:mb-16 shadow-elegant">
          <div className="relative h-48 sm:h-64 md:h-80 lg:h-96">
            {heroImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                onLoad={() => setImagesLoaded(prev => new Set(prev).add(index))}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                  index === currentImageIndex
                    ? "opacity-100 translate-y-0"
                    : index < currentImageIndex
                    ? "opacity-0 -translate-y-full"
                    : "opacity-0 translate-y-full"
                }`}
              />
            ))}
          </div>
          
          {/* Navigation buttons */}
          <button
            onClick={goToPrevious}
            className="absolute right-3 md:right-4 top-3 md:top-4 bg-primary/80 hover:bg-primary text-primary-foreground p-1.5 md:p-2 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronUp className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-3 md:right-4 top-12 md:top-16 bg-primary/80 hover:bg-primary text-primary-foreground p-1.5 md:p-2 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Next image"
          >
            <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          
          {/* Slide indicators */}
          <div className="absolute right-12 md:right-16 top-3 md:top-4 flex flex-col gap-1.5 md:gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-1.5 md:w-2 h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? "bg-accent h-4 md:h-6"
                    : "bg-primary-foreground/50 hover:bg-primary-foreground/80"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end pointer-events-none">
            <div className="p-4 sm:p-6 md:p-8 lg:p-12">
              <span className="text-accent font-semibold text-xs md:text-sm uppercase tracking-wider">Corporate Solutions</span>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-primary-foreground mt-1 md:mt-2">
                Corporate Gifting
              </h2>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16 px-2">
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            Ozobags is a <strong className="text-foreground">corporate gift bag manufacturer based in Kochi, Kerala</strong>, 
            specialising in bulk and customised bag solutions for companies, institutions, and organisations. 
            With in-house manufacturing and a dedicated production team, we support businesses looking for 
            reliable, functional, and well-finished corporate gifting bags.
          </p>
          <p className="text-muted-foreground mt-3 md:mt-4 text-sm md:text-base">
            Our bags are suitable for employee onboarding kits, festive gifting, conferences, seminars, and corporate events.
          </p>
        </div>

        {/* Bag Solutions */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 mb-12 md:mb-20 items-center">
          <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-card order-2 lg:order-1 aspect-[4/3]">
            <img 
              src={corporateLaptopBags} 
              alt="Corporate welcome kit with branded laptop bags" 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-card rounded-xl md:rounded-2xl p-5 md:p-8 shadow-card order-1 lg:order-2">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Package className="w-5 h-5 md:w-6 md:h-6 text-accent" />
              </div>
              <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-foreground">
                Corporate Bag Solutions We Offer
              </h3>
            </div>
            <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base">
              We manufacture and supply a wide range of bags designed specifically for corporate and institutional use:
            </p>
            <ul className="space-y-2 md:space-y-3">
              {bagSolutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-2 md:gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm md:text-base">{solution}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs md:text-sm text-muted-foreground mt-4 md:mt-6 italic">
              All products are designed keeping <strong>durability, usability, and brand presentation</strong> in mind.
            </p>
          </div>
        </div>

        {/* Customisation Options */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 mb-12 md:mb-20 items-center">
          <div className="bg-card rounded-xl md:rounded-2xl p-5 md:p-8 shadow-card">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-foreground">
                Customisation Options Available
              </h3>
            </div>
            <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base">
              Ozobags offers end-to-end customisation support for corporate bulk orders:
            </p>
            <ul className="space-y-2 md:space-y-3">
              {customisationOptions.map((option, index) => (
                <li key={index} className="flex items-start gap-2 md:gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm md:text-base">{option}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs md:text-sm text-muted-foreground mt-4 md:mt-6 italic">
              Our team works closely with clients to ensure the final output meets both functional and branding expectations.
            </p>
          </div>
          <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-card aspect-[4/3]">
            <img 
              src={corporateCustomization} 
              alt="Custom branded corporate bags with logo embossing"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* MOQ & Delivery */}
        <div className="bg-primary rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-12 mb-12 md:mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <Truck className="w-6 h-6 md:w-8 md:h-8 text-accent" />
              <h3 className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary-foreground">
                Minimum Order Quantity & Delivery Timelines
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
              <div className="bg-primary-foreground/10 rounded-lg md:rounded-xl p-4 md:p-6">
                <h4 className="font-display font-bold text-accent mb-1 md:mb-2 text-sm md:text-base">MOQ</h4>
                <p className="text-primary-foreground/90 text-xs md:text-sm">
                  Depends on the bag design and level of customisation
                </p>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg md:rounded-xl p-4 md:p-6">
                <h4 className="font-display font-bold text-accent mb-1 md:mb-2 text-sm md:text-base">Production Timeline</h4>
                <p className="text-primary-foreground/90 text-xs md:text-sm">
                  Clearly communicated after finalising specifications
                </p>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg md:rounded-xl p-4 md:p-6">
                <h4 className="font-display font-bold text-accent mb-1 md:mb-2 text-sm md:text-base">Delivery Coverage</h4>
                <p className="text-primary-foreground/90 text-xs md:text-sm">
                  Kerala and across India. We also export internationally to meet global demand.
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-center text-sm md:text-base">
              We prioritise realistic timelines, consistent quality, and transparent communication throughout the production process.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-20">
          <div>
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6">
              Why Choose Ozobags for Corporate Gift Bags?
            </h3>
            <ul className="space-y-3 md:space-y-4">
              {whyChooseUs.map((reason, index) => (
                <li key={index} className="flex items-start gap-2 md:gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                  </div>
                  <span className="text-foreground text-sm md:text-base">{reason}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground mt-4 md:mt-6 border-l-4 border-accent pl-3 md:pl-4 italic text-sm md:text-base">
              Our objective is to build <strong className="text-foreground">long-term supplier relationships</strong>, not one-time transactions.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6">
              Industries & Organisations We Serve
            </h3>
            <div className="space-y-3 md:space-y-4">
              {industries.map((industry, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-card rounded-lg md:rounded-xl shadow-card hover:shadow-elegant transition-shadow"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <industry.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <span className="text-foreground font-medium text-sm md:text-base">{industry.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
