import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-10 md:py-12">
      <div className="container px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-display text-xl md:text-2xl font-bold mb-3 md:mb-4">
              OZO<span className="text-accent">.</span>
            </h3>
            <p className="text-primary-foreground/70 text-sm md:text-base">
              Leading manufacturer of premium bags for B2B clients worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-3 md:mb-4 text-sm md:text-base">Quick Links</h4>
            <ul className="space-y-1.5 md:space-y-2 text-primary-foreground/70 text-sm">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#corporate-gifting" className="hover:text-accent transition-colors">Corporate Gifting</a></li>
              <li><a href="#manufacturing" className="hover:text-accent transition-colors">Manufacturing</a></li>
              <li><a href="#products" className="hover:text-accent transition-colors">Products</a></li>
              <li><a href="#clients" className="hover:text-accent transition-colors">Our Clients</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-3 md:mb-4 text-sm md:text-base">Services</h4>
            <ul className="space-y-1.5 md:space-y-2 text-primary-foreground/70 text-sm">
              <li>Custom Manufacturing</li>
              <li>Private Label</li>
              <li>Wholesale Orders</li>
              <li>Design Consultation</li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="font-display font-semibold mb-3 md:mb-4 text-sm md:text-base">Connect</h4>
            <div className="flex gap-3 md:gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all"
              >
                <Facebook size={18} className="md:w-5 md:h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all"
              >
                <Instagram size={18} className="md:w-5 md:h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all"
              >
                <Youtube size={18} className="md:w-5 md:h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all"
              >
                <Linkedin size={18} className="md:w-5 md:h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 md:pt-8 text-center text-primary-foreground/60 text-xs md:text-sm">
          <p>&copy; {new Date().getFullYear()} OZO Bags. All rights reserved. Designed for excellence in manufacturing.</p>
        </div>
      </div>
    </footer>
  );
};
