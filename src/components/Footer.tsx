import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">
              OZO<span className="text-accent">.</span>
            </h3>
            <p className="text-white/70">
              Leading manufacturer of premium bags for B2B clients worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#corporate-gifting" className="hover:text-accent transition-colors">Corporate Gifting</a></li>
              <li><a href="#manufacturing" className="hover:text-accent transition-colors">Manufacturing</a></li>
              <li><a href="#products" className="hover:text-accent transition-colors">Products</a></li>
              <li><a href="#clients" className="hover:text-accent transition-colors">Our Clients</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/70">
              <li>Custom Manufacturing</li>
              <li>Private Label</li>
              <li>Wholesale Orders</li>
              <li>Design Consultation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} OZO Bags. All rights reserved. Designed for excellence in manufacturing.</p>
        </div>
      </div>
    </footer>
  );
};
