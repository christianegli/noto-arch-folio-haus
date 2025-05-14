
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
        title: "Message sent",
        description: "Thank you for reaching out. We'll get back to you soon.",
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
      
      <section className="pt-32 pb-12">
        <div className="content-container">
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-8">Contact</h1>
        </div>
      </section>
      
      {/* Contact Info & Form */}
      <section className="pb-24">
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl md:text-2xl mb-4">Get in Touch</h2>
                <p className="text-noto-gray max-w-lg">
                  We're always interested in discussing new projects, creative ideas or opportunities to be part of your vision.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="font-medium">Visit Us</h3>
                  <address className="not-italic text-noto-gray">
                    <p>NOTO Architektur</p>
                    <p>Torstraße 140</p>
                    <p>10119 Berlin</p>
                    <p>Germany</p>
                  </address>
                </div>
                
                <div className="space-y-1">
                  <h3 className="font-medium">Contact</h3>
                  <p className="text-noto-gray">
                    <a href="tel:+493012345678" className="hover-underline">+49 30 123 45 678</a>
                  </p>
                  <p className="text-noto-gray">
                    <a href="mailto:info@noto-architektur.de" className="hover-underline">info@noto-architektur.de</a>
                  </p>
                </div>
                
                <div className="space-y-1">
                  <h3 className="font-medium">Follow Us</h3>
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
              
              <div className="pt-8">
                <h3 className="font-medium mb-4">Working Hours</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-noto-gray">Monday — Friday:</div>
                  <div>9:00 — 18:00</div>
                  <div className="text-noto-gray">Saturday:</div>
                  <div>By appointment</div>
                  <div className="text-noto-gray">Sunday:</div>
                  <div>Closed</div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-xl md:text-2xl mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your Name"
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
                    placeholder="Email Address"
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
                    placeholder="Phone Number (optional)"
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
                    <option value="" disabled>Select Subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="project">Project Consultation</option>
                    <option value="collaboration">Collaboration Opportunity</option>
                    <option value="careers">Careers</option>
                    <option value="press">Press Inquiry</option>
                  </select>
                </div>
                
                <div>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
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
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="pb-24">
        <div className="content-container">
          <div className="aspect-[16/9] bg-noto-lightgray w-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.6868555216393!2d13.397493115822259!3d52.528932479814695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851e3b9367145%3A0x81440a3919409!2sTorstra%C3%9Fe%20140%2C%2010119%20Berlin%2C%20Germany!5e0!3m2!1sen!2sus!4v1653467026718!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="NOTO Architecture Office Location"
            ></iframe>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Contact;
