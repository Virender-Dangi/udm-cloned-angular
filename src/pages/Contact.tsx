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
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your interest in UDM Global Solution. We will get in touch with you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Phone, title: "Phone", details: "+91 80-43009165", description: "Mon–Fri, 9am to 6pm" },
    { icon: Mail, title: "Email", details: "contact@udmglobal.com", description: "We reply within 24 hours" },
    { icon: MapPin, title: "Office", details: "HSR Layout, Bangalore", description: "#1282, 17th Cross, 5th Main, Sector 7, Bangalore - 560102" },
    { icon: Clock, title: "Working Hours", details: "Mon – Fri: 9am to 6pm", description: "Saturday & Sunday: Closed" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <Section padding="xl" className="pt-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold text-udm-navy mb-4 tracking-tight">Contacts</h1>
          <p className="text-lg text-udm-gray leading-relaxed">Tell us how we can delight you today.</p>
        </div>
      </Section>

      <Section background="gray" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="border shadow-[var(--shadow-card)]">
            <CardHeader>
              <CardTitle className="text-2xl text-udm-navy font-semibold">Get In Touch</CardTitle>
              <p className="text-sm text-udm-gray mt-2">
                Thank you for your interest in UDM Global Solution. Please fill out the form below and we will get in touch with you within 24 hours.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="mt-2" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" name="company" value={formData.company} onChange={handleChange} className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required className="mt-2" rows={6} placeholder="How can we help?" />
                </div>
                <Button type="submit" size="lg" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-udm-navy mb-3">Contact Info</h2>
              <p className="text-udm-gray leading-relaxed">
                We're here to answer any question you might have. Reach out through any of the channels below.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 p-5 bg-white rounded-md border shadow-[var(--shadow-card)]">
                  <div className="w-10 h-10 bg-udm-orange-light rounded-md flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-udm-navy text-sm uppercase tracking-wide mb-1">{info.title}</h3>
                    <p className="text-udm-navy font-medium">{info.details}</p>
                    <p className="text-sm text-udm-gray mt-1">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section padding="lg">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-udm-navy mb-3">Office Location</h2>
          <p className="text-udm-gray">Located in the heart of Bangalore's tech hub</p>
        </div>

        <div className="bg-udm-gray-light rounded-md p-10 text-center border">
          <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="h-7 w-7 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-udm-navy mb-2">UDM Global Solution Pvt. Ltd.</h3>
          <p className="text-udm-gray leading-relaxed">
            #1282, 17th Cross, 5th Main<br />
            Sector 7, HSR Layout<br />
            Bangalore - 560102, India
          </p>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Contact;
