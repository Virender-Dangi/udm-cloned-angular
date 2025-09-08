import Navigation from "@/components/Navigation";
import Section from "@/components/ui/section";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Code, 
  Palette, 
  Users, 
  Shield, 
  MessageCircle, 
  Zap,
  Globe,
  Smartphone
} from "lucide-react";
import developmentImage from "@/assets/development-workspace.jpg";
import designImage from "@/assets/design-mockups.jpg";

const Services = () => {
  const mainServices = [
    {
      title: "Off-Shore Software Development",
      description: "Custom applications across domains and technologies. We build scalable, robust solutions tailored to your business needs.",
      image: developmentImage,
    },
    {
      title: "Design & User Experience (UI/UX)",
      description: "Web and Mobile applications that users love. Creating intuitive interfaces that drive engagement and conversions.",
      image: designImage,
    },
    {
      title: "Recruitment & Brand Identity",
      description: "Let our RPO team find you the best talent for you. We help build strong teams and establish compelling brand presence.",
      image: developmentImage,
    },
    {
      title: "Quality Assurance & Testing",
      description: "Fault free applications and unmatched user experience. Comprehensive testing to ensure reliability and performance.",
      image: designImage,
    },
    {
      title: "Content Creation & Social Management",
      description: "Custom Social Media strategies to meet business objectives. Engaging content that builds communities and drives growth.",
      image: developmentImage,
    },
  ];

  const technologies = [
    { icon: Code, name: "Full-Stack Development", description: "React, Node.js, Python, Java" },
    { icon: Smartphone, name: "Mobile Development", description: "React Native, Flutter, iOS, Android" },
    { icon: Globe, name: "Web Technologies", description: "Modern frameworks and cloud solutions" },
    { icon: Palette, name: "Design Tools", description: "Figma, Adobe Creative Suite, Sketch" },
    { icon: Shield, name: "Security & DevOps", description: "AWS, Docker, CI/CD, Security audits" },
    { icon: Zap, name: "Performance", description: "Optimization, monitoring, analytics" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <Section padding="xl" className="pt-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-udm-navy mb-6">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-udm-gray leading-relaxed">
            Comprehensive technology solutions designed to accelerate your business growth 
            and digital transformation journey.
          </p>
        </div>
      </Section>

      {/* Main Services */}
      <Section background="gray" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-udm-navy mb-4">
            What We Offer
          </h2>
          <p className="text-xl text-udm-gray max-w-2xl mx-auto">
            End-to-end solutions that cover every aspect of your digital needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
            />
          ))}
        </div>
      </Section>

      {/* Technologies */}
      <Section padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-udm-navy mb-4">
            Technologies We Use
          </h2>
          <p className="text-xl text-udm-gray max-w-2xl mx-auto">
            We stay current with the latest technologies to deliver cutting-edge solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="text-center bg-white p-8 rounded-2xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-orange)] transition-all duration-300"
            >
              <div className="w-16 h-16 bg-udm-orange-light rounded-full flex items-center justify-center mx-auto mb-6">
                <tech.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-udm-navy mb-4">{tech.name}</h3>
              <p className="text-udm-gray leading-relaxed">{tech.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section background="navy" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Process
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            A proven methodology that ensures project success from conception to delivery.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Discovery", description: "Understanding your needs and goals" },
            { step: "02", title: "Planning", description: "Strategic roadmap and architecture" },
            { step: "03", title: "Development", description: "Agile development with regular updates" },
            { step: "04", title: "Delivery", description: "Testing, deployment, and ongoing support" },
          ].map((phase, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary mb-4">{phase.step}</div>
              <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
              <p className="text-white/80">{phase.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section padding="xl" className="text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-udm-navy mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-udm-gray mb-8">
            Let's discuss your project requirements and create a custom solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="px-8 py-6 text-lg">
                Start Your Project
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
                Learn About Us
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Services;