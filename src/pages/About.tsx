import Navigation from "@/components/Navigation";
import Section from "@/components/ui/section";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Target, Award, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Team Extension",
      description: "We become an integral part of your team, understanding your goals and working towards them as if they were our own."
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Every project is approached with clear objectives and measurable outcomes to ensure maximum value delivery."
    },
    {
      icon: Award,
      title: "Quality First",
      description: "We maintain the highest standards in everything we do, from code quality to client communication."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay ahead of technology trends to provide cutting-edge solutions that give you a competitive advantage."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <Section padding="xl" className="pt-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-udm-navy mb-6">
            About <span className="text-primary">UDM Global</span>
          </h1>
          <p className="text-xl text-udm-gray leading-relaxed">
            We're an independent design & development company based out of Bangalore, India, 
            committed to building long-term relationships with our clients.
          </p>
        </div>
      </Section>

      {/* Mission Section */}
      <Section background="gray" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-udm-navy mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-udm-gray leading-relaxed mb-6">
              At UDM Global, we believe in the power of technology to transform businesses. 
              Our mission is to provide world-class software development and design services 
              that help our clients achieve their goals and stay ahead in the digital landscape.
            </p>
            <p className="text-lg text-udm-gray leading-relaxed mb-8">
              We don't just deliver projects; we build partnerships. We're in it for the long haul, 
              committed to your success every step of the way.
            </p>
            <Link to="/contact">
              <Button size="lg" className="px-8">
                Work With Us
              </Button>
            </Link>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-[var(--shadow-card)]">
            <blockquote className="text-xl italic text-udm-navy mb-4">
              "We want to build a relationship, not just a customer base."
            </blockquote>
            <cite className="text-udm-gray">— UDM Global Philosophy</cite>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-udm-navy mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-udm-gray max-w-2xl mx-auto">
            These values guide everything we do and shape how we work with our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="text-center bg-white p-8 rounded-2xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-orange)] transition-all duration-300"
            >
              <div className="w-16 h-16 bg-udm-orange-light rounded-full flex items-center justify-center mx-auto mb-6">
                <value.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-udm-navy mb-4">{value.title}</h3>
              <p className="text-udm-gray leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Team Section */}
      <Section background="navy" padding="xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why Choose UDM Global?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-white">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-white">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-white">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section padding="xl" className="text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-udm-navy mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-udm-gray mb-8">
            Let's discuss how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="px-8 py-6 text-lg">
                Get Started
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default About;