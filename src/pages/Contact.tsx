import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Nachricht gesendet",
        description: "Vielen Dank für Ihre Nachricht. Wir melden uns bald bei Ihnen.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        subject: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <main className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      <Header />
      
      <section className="pt-24 pb-12">
        <div className="content-container">
          <h1 className="uppercase tracking-wide text-3xl md:text-4xl lg:text-5xl mb-8">Kontakt</h1>
        </div>
      </section>
      
      {/* Contact Info & Form */}
      <section className="pb-16">
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="uppercase tracking-wide text-xl md:text-2xl mb-4">Kontakt aufnehmen</h2>
                <p className="text-noto-gray max-w-lg">
                  Wir sind stets daran interessiert, neue Projekte, kreative Ideen oder Möglichkeiten zu besprechen und Teil Ihrer Vision zu werden.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="font-medium">Besuchen Sie uns</h3>
                  <address className="not-italic text-noto-gray">
                    <p>NOTO Architektur</p>
                    <p>Thedestraße 2</p>
                    <p>22767 Hamburg</p>
                    <p>Germany</p>
                  </address>
                </div>
                
                <div className="space-y-1">
                  <h3 className="font-medium">Kontakt</h3>
                  <p className="text-noto-gray">
                    <a href="tel:+04034967040" className="hover-underline">+040 34967040</a>
                  </p>
                  <p className="text-noto-gray">
                    <a href="mailto:mail@bueronoto.de" className="hover-underline">mail@bueronoto.de</a>
                  </p>
                </div>
                
                <div className="space-y-1">
                  <h3 className="font-medium">Folgen Sie uns</h3>
                  <div className="flex space-x-4">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-noto-gray hover-underline">
                      Instagram
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-noto-gray hover-underline">
                      LinkedIn
                    </a>
                    <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-noto-gray hover-underline">
                      Pinterest
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="uppercase tracking-wide text-xl md:text-2xl mb-8">Senden Sie uns eine Nachricht</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Ihr Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-noto-lightgray focus:border-noto-gray focus:ring-0 rounded-none"
                  />
                </div>
                
                <div>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="E-Mail-Adresse"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-noto-lightgray focus:border-noto-gray focus:ring-0 rounded-none"
                  />
                </div>
                
                <div>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Telefonnummer (optional)"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-noto-lightgray focus:border-noto-gray focus:ring-0 rounded-none"
                  />
                </div>
                
                <div>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full py-2 px-3 border border-noto-lightgray focus:border-noto-gray focus:outline-none bg-white"
                  >
                    <option value="" disabled>Betreff auswählen</option>
                    <option value="general">Allgemeine Anfrage</option>
                    <option value="project">Projektberatung</option>
                    <option value="collaboration">Kooperationsmöglichkeiten</option>
                    <option value="careers">Karriere</option>
                    <option value="press">Presseanfrage</option>
                  </select>
                </div>
                
                <div>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Ihre Nachricht"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="border-noto-lightgray focus:border-noto-gray focus:ring-0 rounded-none resize-none"
                  />
                </div>
                
                <div>
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-noto-black text-white hover:bg-noto-black/80 rounded-none px-6 py-3 h-auto"
                  >
                    {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="pb-16">
        <div className="content-container">
          <div className="aspect-[16/9] bg-noto-lightgray w-full">
            <iframe
              src="https://maps.google.com/maps?q=Thedestra%C3%9Fe+2+22767+Hamburg&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Standort des NOTO Architekturbüros"
            ></iframe>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Contact;
