import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Section from "@/components/ui/section";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
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
      description: "Thanks for reaching out. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Phone, title: "Call", details: "+91 73385 59996", description: "Mon–Fri, 9am to 6pm IST" },
    { icon: Mail, title: "Email", details: "contact@udmglobal.com", description: "We reply within 24 hours" },
    {
      icon: MapPin,
      title: "Visit",
      details: "Vajram Esteva, Devarabisanahalli",
      description:
        "1st Floor, Vajram Esteva, New Survey No. 57/4, Old Survey No. 57/2, Marathahalli–Sarjapur Outer Ring Road (ORR), Varthur, Devarabisanahalli, Bengaluru, Karnataka 560103",
    },
    { icon: Clock, title: "Hours", details: "Mon – Fri · 9am – 6pm", description: "Saturday & Sunday: Closed" },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Contact UDM Global Solution — Bengaluru, India</title>
        <meta name="description" content="Get in touch with UDM Global Solution. Call +91 73385 59996 or email contact@udmglobal.com. Office in Devarabisanahalli, Bengaluru." />
        <link rel="canonical" href="https://udm-cloned-angular.lovable.app/contact" />
        <meta property="og:url" content="https://udm-cloned-angular.lovable.app/contact" />
        <meta property="og:title" content="Contact UDM Global Solution" />
      </Helmet>
      <Navigation />

      <Section padding="xl" className="pt-32 text-center">
        <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">Contact</p>
        <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] mb-5">
          Let's talk.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto font-light">
          Tell us how we can delight you today.
        </p>
      </Section>

      <Section background="gray" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          <div className="lg:col-span-3 bg-background rounded-3xl p-8 md:p-10 shadow-[var(--shadow-card)]">
            <h2 className="text-2xl font-semibold mb-2">Get in touch</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Fill out the form and we'll be with you within 24 hours.
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full name *</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-2 rounded-xl" />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="mt-2 rounded-xl" />
                </div>
              </div>
              <div>
                <Label htmlFor="company">Company</Label>
                <Input id="company" name="company" value={formData.company} onChange={handleChange} className="mt-2 rounded-xl" />
              </div>
              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} placeholder="How can we help?" className="mt-2 rounded-xl" />
              </div>
              <Button type="submit" size="lg" className="w-full rounded-full">Send message</Button>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-3">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-background rounded-2xl p-6 flex gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <info.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">{info.title}</h3>
                  <p className="font-medium text-foreground">{info.details}</p>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{info.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section padding="xl" className="text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Find us in Bengaluru.</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
          Located along the Outer Ring Road tech corridor in Devarabisanahalli.
        </p>
        <div className="max-w-3xl mx-auto bg-secondary rounded-3xl p-10 text-center">
          <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-5">
            <MapPin className="h-7 w-7 text-primary-foreground" />
          </div>
          <h3 className="text-xl font-semibold mb-3">UDM Global Solution Pvt. Ltd.</h3>
          <p className="text-muted-foreground leading-relaxed">
            1st Floor, Vajram Esteva,<br />
            New Survey No. 57/4, Old Survey No. 57/2,<br />
            Marathahalli–Sarjapur Outer Ring Road (ORR),<br />
            Varthur, Devarabisanahalli,<br />
            Bengaluru, Karnataka 560103, India
          </p>
        </div>
      </Section>

      <Footer />
    </main>
  );
};

export default Contact;
