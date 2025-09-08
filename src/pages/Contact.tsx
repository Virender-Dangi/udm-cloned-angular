import Navigation from "@/components/Navigation";
import Section from "@/components/ui/section";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "info@udmglobal.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 (0) 80 1234 5678",
      description: "Mon-Fri from 9am to 6pm IST"
    },
    {
      icon: MapPin,
      title: "Office",
      details: "Bangalore, India",
      description: "123 Tech Park, Electronic City"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "9:00 AM - 6:00 PM IST",
      description: "Monday to Friday"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <Section padding="xl" className="pt-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-udm-navy mb-6">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-xl text-udm-gray leading-relaxed">
            Ready to start your next project? Get in touch with our team and let's discuss 
            how we can help bring your vision to life.
          </p>
        </div>
      </Section>

      {/* Contact Form and Info */}
      <Section background="gray" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-[var(--shadow-card)]">
            <CardHeader>
              <CardTitle className="text-2xl text-udm-navy">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-2"
                    rows={6}
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-udm-navy mb-6">Get in Touch</h2>
              <p className="text-lg text-udm-gray leading-relaxed mb-8">
                We're here to help and answer any question you might have. 
                We look forward to hearing from you.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-[var(--shadow-card)]">
                  <div className="w-12 h-12 bg-udm-orange-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-udm-navy mb-1">{info.title}</h3>
                    <p className="text-udm-navy font-medium">{info.details}</p>
                    <p className="text-sm text-udm-gray">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <Section padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-udm-navy mb-4">
            Visit Our Office
          </h2>
          <p className="text-xl text-udm-gray">
            Located in the heart of Bangalore's tech hub
          </p>
        </div>
        
        <div className="bg-udm-gray-light rounded-2xl p-8 text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-udm-navy mb-2">UDM Global Solutions</h3>
          <p className="text-udm-gray">123 Tech Park, Electronic City, Bangalore, India 560100</p>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="navy" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">How do you ensure project quality?</h3>
            <p className="text-white/80">We follow industry best practices, conduct thorough testing, and maintain regular communication throughout the development process.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">What is your typical project timeline?</h3>
            <p className="text-white/80">Project timelines vary based on complexity, but we provide detailed estimates and keep you updated on progress regularly.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Do you provide ongoing support?</h3>
            <p className="text-white/80">Yes, we offer comprehensive post-launch support and maintenance services to ensure your solution continues to perform optimally.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Can you work with our existing team?</h3>
            <p className="text-white/80">Absolutely! We integrate seamlessly with your existing team and processes, acting as an extension of your organization.</p>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Contact;