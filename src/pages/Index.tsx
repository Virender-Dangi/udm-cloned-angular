import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Section from "@/components/ui/section";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import developmentImage from "@/assets/development-workspace.jpg";
import designImage from "@/assets/design-mockups.jpg";

const Index = () => {
  const services = [
    {
      title: "Off-Shore Software Development",
      description: "Custom applications across domains and technologies.",
      image: developmentImage,
    },
    {
      title: "Design & User Experience (UI/UX)",
      description: "Web and Mobile applications that users love.",
      image: designImage,
    },
    {
      title: "Recruitment & Brand Identity",
      description: "Let our RPO team find you the best talent for you.",
      image: developmentImage,
    },
    {
      title: "Quality Assurance & Testing",
      description: "Fault free applications and unmatched user experience.",
      image: designImage,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Company Introduction */}
      <Section padding="xl" className="text-center">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-udm-navy mb-6">
            We're an independent design & development company based out of Bangalore, India.
          </h2>
          <p className="text-xl text-udm-gray leading-relaxed">
            Our mission is to become an extension of your team, delivering exceptional results that exceed expectations.
          </p>
        </div>
      </Section>

      {/* Services Grid */}
      <Section background="gray" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-udm-navy mb-4">Our Services</h2>
          <p className="text-xl text-udm-gray max-w-2xl mx-auto">
            We offer comprehensive solutions to help your business thrive in the digital world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` } as React.CSSProperties}
            />
          ))}
        </div>
      </Section>

      {/* Values Section */}
      <Section padding="xl" background="navy">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-center">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-primary mb-4">It's all about you!</h3>
            <p className="text-white/90 leading-relaxed">
              We don't stop at meeting SLAs, we become your most trusted partners.
            </p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' } as React.CSSProperties}>
            <h3 className="text-2xl font-bold text-primary mb-4">We get it right!</h3>
            <p className="text-white/90 leading-relaxed">
              We are not perfect, but we won't stop until we get there.
            </p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' } as React.CSSProperties}>
            <h3 className="text-2xl font-bold text-primary mb-4">Strategy & Execution</h3>
            <p className="text-white/90 leading-relaxed">
              We become an extension of your team, bringing expertise and dedication.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section padding="xl" className="text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-udm-navy mb-6">
            Ready to start your next project?
          </h2>
          <p className="text-xl text-udm-gray mb-8">
            Let's build something amazing together. Get in touch with our team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="px-8 py-6 text-lg">
                Contact Us
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Index;
