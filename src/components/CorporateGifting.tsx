import { Button } from "@/components/ui/button";
import { CheckCircle, Package, Truck, Users, Building2, GraduationCap, Calendar, Briefcase } from "lucide-react";
import corporateHero from "@/assets/corporate-gifting-hero.jpg";
import corporateLaptopBags from "@/assets/corporate-laptop-bags.jpg";
import corporateCustomization from "@/assets/corporate-customization.jpg";

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
  { icon: Truck, name: "Travel" },
  { icon: Building2, name: "Medical" },
  { icon: Package, name: "Delivery" },
  { icon: Briefcase, name: "Corporate offices and businesses" },
  { icon: Users, name: "Organisations planning bulk gifting initiatives" },
];

export const CorporateGifting = () => {
  return (
    <section id="corporate-gifting" className="py-20 bg-muted/30">
      <div className="container px-4">
        {/* Hero Image */}
        <div className="relative rounded-2xl overflow-hidden mb-16 shadow-elegant">
          <img 
            src={corporateHero} 
            alt="Corporate gift bags collection featuring branded laptop bags and backpacks" 
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
            <div className="p-8 md:p-12">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Corporate Solutions</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mt-2">
                Corporate Gifting
              </h2>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ozobags is a <strong className="text-foreground">corporate gift bag manufacturer based in Kochi, Kerala</strong>, 
            specialising in bulk and customised bag solutions for companies, institutions, and organisations. 
            With in-house manufacturing and a dedicated production team, we support businesses looking for 
            reliable, functional, and well-finished corporate gifting bags.
          </p>
          <p className="text-muted-foreground mt-4">
            Our bags are suitable for employee onboarding kits, festive gifting, conferences, seminars, and corporate events.
          </p>
        </div>

        {/* Bag Solutions */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
          <div className="rounded-2xl overflow-hidden shadow-card order-2 lg:order-1">
            <img 
              src={corporateLaptopBags} 
              alt="Corporate welcome kit with branded laptop bags" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-card rounded-2xl p-8 shadow-card order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Package className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                Corporate Bag Solutions We Offer
              </h3>
            </div>
            <p className="text-muted-foreground mb-6">
              We manufacture and supply a wide range of bags designed specifically for corporate and institutional use:
            </p>
            <ul className="space-y-3">
              {bagSolutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{solution}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground mt-6 italic">
              All products are designed keeping <strong>durability, usability, and brand presentation</strong> in mind.
            </p>
          </div>
        </div>

        {/* Customisation Options */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                Customisation Options Available
              </h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Ozobags offers end-to-end customisation support for corporate bulk orders:
            </p>
            <ul className="space-y-3">
              {customisationOptions.map((option, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{option}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground mt-6 italic">
              Our team works closely with clients to ensure the final output meets both functional and branding expectations.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img 
              src={corporateCustomization} 
              alt="Custom branded corporate bags with logo embossing" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* MOQ & Delivery */}
        <div className="bg-primary rounded-2xl p-8 md:p-12 mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Truck className="w-8 h-8 text-accent" />
              <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
                Minimum Order Quantity & Delivery Timelines
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-primary-foreground/10 rounded-xl p-6">
                <h4 className="font-display font-bold text-accent mb-2">MOQ</h4>
                <p className="text-primary-foreground/90 text-sm">
                  Depends on the bag design and level of customisation
                </p>
              </div>
              <div className="bg-primary-foreground/10 rounded-xl p-6">
                <h4 className="font-display font-bold text-accent mb-2">Production Timeline</h4>
                <p className="text-primary-foreground/90 text-sm">
                  Clearly communicated after finalising specifications
                </p>
              </div>
              <div className="bg-primary-foreground/10 rounded-xl p-6">
                <h4 className="font-display font-bold text-accent mb-2">Delivery Coverage</h4>
                <p className="text-primary-foreground/90 text-sm">
                  Kerala and across India
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-center">
              We prioritise realistic timelines, consistent quality, and transparent communication throughout the production process.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="font-display text-3xl font-bold text-foreground mb-6">
              Why Choose Ozobags for Corporate Gift Bags in Kerala?
            </h3>
            <ul className="space-y-4">
              {whyChooseUs.map((reason, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{reason}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground mt-6 border-l-4 border-accent pl-4 italic">
              Our objective is to build <strong className="text-foreground">long-term supplier relationships</strong>, not one-time transactions.
            </p>
          </div>

          <div>
            <h3 className="font-display text-3xl font-bold text-foreground mb-6">
              Industries & Organisations We Serve
            </h3>
            <div className="space-y-4">
              {industries.map((industry, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-card hover:shadow-elegant transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                    <industry.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{industry.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-accent to-accent/80 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
            Get a Quote for Corporate Gift Bags
          </h3>
          <p className="text-primary/80 max-w-2xl mx-auto mb-8">
            If you are searching for a <strong className="text-primary">reliable corporate gift bag supplier in Kerala</strong>, 
            Ozobags can support your bulk and custom requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
              📞 Contact Us Now
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8">
              📩 Share Your Brief
            </Button>
          </div>
          <p className="text-primary/70 text-sm mt-6">
            Ozobags – Custom Bag Manufacturer in Kerala
          </p>
        </div>
      </div>
    </section>
  );
};
