import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Corporate Gifting", href: "#corporate-gifting" },
    { label: "Manufacturing", href: "#manufacturing" },
    { label: "Products", href: "#products" },
    { label: "Our Clients", href: "#clients" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <h1 className="font-display text-3xl font-bold text-primary">
              OZO<span className="text-accent">.</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-accent transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button variant="default" className="bg-primary hover:bg-primary/90">
              Request Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border bg-white">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-3 text-foreground hover:text-accent transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button variant="default" className="w-full mt-4 bg-primary hover:bg-primary/90">
              Request Quote
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
