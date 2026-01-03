import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-inquiry", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Inquiry Sent!",
        description: "Thank you for your interest. We'll get back to you soon.",
      });

      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error: any) {
      console.error("Error sending inquiry:", error);
      toast({
        title: "Error",
        description: "Failed to send inquiry. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 md:mb-4">
              Let's Work Together
            </h2>
            <p className="text-base md:text-xl text-muted-foreground px-2">
              Ready to start your next project? Get in touch with our team
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <div className="animate-slide-in-left">
              <h3 className="font-display text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary mb-1 text-sm md:text-base">Email</div>
                    <a href="mailto:info@ozobags.com" className="text-muted-foreground hover:text-accent transition-colors text-sm md:text-base break-all">
                      info@ozobags.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary mb-1 text-sm md:text-base">Phone</div>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-accent transition-colors text-sm md:text-base">
                       00 91 755 9886665
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary mb-1 text-sm md:text-base">Location</div>
                    <p className="text-muted-foreground text-sm md:text-base">
                      48/1016 A <br />
Karugapilly Junction<br/>
Desabhimani Rd, Cochin -682026<br/>
Kerala - India<br/>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-accent/5 p-4 md:p-6 rounded-lg">
                <h4 className="font-display font-semibold text-primary mb-2 text-sm md:text-base">
                  Order Quantity
                </h4>
                <p className="text-muted-foreground text-sm md:text-base">
                  We accommodate any amount of units. Contact us for your custom requirements.
                </p>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Name
                    </label>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name" 
                      required 
                      className="h-11 md:h-12" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Company
                    </label>
                    <Input 
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Company name" 
                      required 
                      className="h-11 md:h-12" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com" 
                    required 
                    className="h-11 md:h-12" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Phone
                  </label>
                  <Input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (234) 567-890" 
                    required 
                    className="h-11 md:h-12" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project requirements..."
                    rows={4}
                    required
                    className="resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 h-12 md:h-14"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Inquiry"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
