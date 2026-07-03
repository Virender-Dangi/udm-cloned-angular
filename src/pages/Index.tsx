import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Section from "@/components/ui/section";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code2, Palette, Users, ShieldCheck, Share2 } from "lucide-react";

const Index = () => {
  const services = [
    { icon: Code2, title: "Off-Shore Software Development", desc: "Custom applications across domains and technologies." },
    { icon: Palette, title: "Design & User Experience (UI/UX)", desc: "Web and Mobile applications that users love." },
    { icon: Users, title: "Recruitment & Brand Identity", desc: "Let our RPO team find you the best talent for you." },
    { icon: ShieldCheck, title: "Quality Assurance & Testing", desc: "Fault-free applications and unmatched user experience." },
    { icon: Share2, title: "Content Creation & Social Management", desc: "Custom social media strategies to meet business objectives." },
  ];

  const testimonials = [
    {
      quote: "UDM has been providing Managed Services on the AWS Cloud platform for desiredesire.com for more than a year. They have proactively solved issues impacting the business and handled the continuous releases of the applications without downtime.",
      name: "Praveen Krishnaiah",
      role: "Founder, Handpick 3d Solution Pvt Ltd",
    },
    {
      quote: "We are very satisfied with our relationship with UDM Global. They are professionals, hard workers and they help us to achieve any new idea that we come up with for our product.",
      name: "Rouette Jean-Sebastien",
      role: "Manager, Technicolor Montreal Canada",
    },
  ];

  const clients = ["Technicolor", "NNE", "Engagedly", "Vince Software", "DesireDesire", "Difuze"];

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />

      <Section padding="xl" className="text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">Who we are</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-udm-navy leading-tight">
            We're an independent design & development company based out of Bangalore, India.
          </h2>
        </div>
      </Section>

      <Section background="gray" padding="xl">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">What we do</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-udm-navy">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <div key={i} className="bg-white border rounded-md p-7 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-shadow">
              <div className="w-11 h-11 bg-udm-orange-light rounded-md flex items-center justify-center mb-4">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-udm-navy mb-2">{s.title}</h3>
              <p className="text-sm text-udm-gray leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section background="navy" padding="xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div>
            <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">Our Philosophy</p>
            <h3 className="text-2xl font-semibold text-white mb-3">It's all about you.</h3>
            <p className="text-white/75 leading-relaxed">We don't stop at meeting SLAs, we become your most trusted partners.</p>
          </div>
          <div>
            <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">Our Standard</p>
            <h3 className="text-2xl font-semibold text-white mb-3">We get it right.</h3>
            <p className="text-white/75 leading-relaxed">We are not perfect, but we won't stop until we get there.</p>
          </div>
          <div>
            <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">Our Approach</p>
            <h3 className="text-2xl font-semibold text-white mb-3">Strategy & Execution</h3>
            <p className="text-white/75 leading-relaxed">We become an extension of your team, bringing expertise and dedication.</p>
          </div>
        </div>
      </Section>

      <Section padding="xl">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">Kind Words</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-udm-navy">This is why we love what we do</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-udm-gray-light border rounded-md p-7">
              <p className="text-udm-gray leading-relaxed italic mb-5 text-sm">"{t.quote}"</p>
              <div>
                <div className="font-semibold text-udm-navy">{t.name}</div>
                <div className="text-xs text-udm-gray mt-1">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section background="gray" padding="lg">
        <div className="text-center mb-10">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">Trusted By</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-udm-navy">Our Happy Clients</h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 max-w-4xl mx-auto">
          {clients.map((c, i) => (
            <div key={i} className="text-udm-navy/60 font-semibold text-lg tracking-wide">{c}</div>
          ))}
        </div>
      </Section>

      <Section padding="lg" className="text-center">
        <p className="text-udm-gray mb-6">
          Email Us: <a href="mailto:contact@udmglobal.com" className="text-primary font-medium">contact@udmglobal.com</a>
          {"  or  "}
          Call us @ <a href="tel:+918043009165" className="text-primary font-medium">+91 80-43009165</a>
        </p>
        <Link to="/contact"><Button size="lg">Get In Touch</Button></Link>
      </Section>

      <Footer />
    </div>
  );
};

export default Index;
