import Navigation from "@/components/Navigation";
import Section from "@/components/ui/section";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Code, 
  Palette, 
  Shield, 
  Briefcase,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Bangalore",
      type: "Full-time",
      experience: "4-6 years",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      description: "Join our engineering team to build scalable web applications using modern technologies."
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Bangalore",
      type: "Full-time",
      experience: "3-5 years",
      skills: ["Figma", "Adobe Creative Suite", "User Research", "Prototyping"],
      description: "Create intuitive and beautiful user experiences for web and mobile applications."
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Bangalore",
      type: "Full-time",
      experience: "3-5 years",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      description: "Build and maintain scalable infrastructure to support our growing applications."
    },
    {
      title: "Quality Assurance Engineer",
      department: "QA",
      location: "Bangalore",
      type: "Full-time",
      experience: "2-4 years",
      skills: ["Automation Testing", "Selenium", "API Testing", "Mobile Testing"],
      description: "Ensure the highest quality standards for our applications through comprehensive testing."
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "Bangalore",
      type: "Full-time",
      experience: "5-7 years",
      skills: ["Agile", "Scrum", "Project Planning", "Client Management"],
      description: "Lead cross-functional teams to deliver successful projects on time and within budget."
    },
    {
      title: "Business Development Manager",
      department: "Sales",
      location: "Bangalore",
      type: "Full-time",
      experience: "4-6 years",
      skills: ["Sales", "Client Relations", "Market Research", "Proposal Writing"],
      description: "Drive business growth by identifying opportunities and building client relationships."
    }
  ];

  const benefits = [
    "Competitive salary and performance bonuses",
    "Comprehensive health insurance",
    "Flexible working hours and remote options",
    "Professional development and training programs",
    "Modern office with recreational facilities",
    "Annual team retreats and celebrations"
  ];

  const departments = [
    { icon: Code, name: "Engineering", count: 2, color: "bg-blue-100 text-blue-800" },
    { icon: Palette, name: "Design", count: 1, color: "bg-purple-100 text-purple-800" },
    { icon: Shield, name: "Infrastructure", count: 1, color: "bg-green-100 text-green-800" },
    { icon: Users, name: "Operations", count: 2, color: "bg-orange-100 text-orange-800" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <Section padding="xl" className="pt-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-udm-navy mb-6">
            Join Our <span className="text-primary">Team</span>
          </h1>
          <p className="text-xl text-udm-gray leading-relaxed mb-8">
            Build your career with a company that values innovation, growth, and work-life balance. 
            Discover exciting opportunities to make an impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#positions">
              <Button size="lg" className="px-8 py-6 text-lg">
                View Open Positions
              </Button>
            </a>
            <Link to="/life">
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
                Life @ UDM Global
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Why Work With Us */}
      <Section background="gray" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-udm-navy mb-4">
            Why Choose UDM Global?
          </h2>
          <p className="text-xl text-udm-gray max-w-2xl mx-auto">
            We're committed to creating an environment where talented individuals can thrive and grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-[var(--shadow-card)]">
            <h3 className="text-xl font-bold text-udm-navy mb-4">Growth Opportunities</h3>
            <p className="text-udm-gray">Continuous learning, skill development, and clear career progression paths.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-[var(--shadow-card)]">
            <h3 className="text-xl font-bold text-udm-navy mb-4">Innovation Culture</h3>
            <p className="text-udm-gray">Work with cutting-edge technologies and contribute to innovative solutions.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-[var(--shadow-card)]">
            <h3 className="text-xl font-bold text-udm-navy mb-4">Work-Life Balance</h3>
            <p className="text-udm-gray">Flexible schedules, remote work options, and supportive team environment.</p>
          </div>
        </div>
      </Section>

      {/* Departments */}
      <Section padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-udm-navy mb-4">Our Departments</h2>
          <p className="text-xl text-udm-gray">Find opportunities across different areas of expertise</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {departments.map((dept, index) => (
            <div key={index} className="text-center bg-white p-6 rounded-lg shadow-[var(--shadow-card)]">
              <div className="w-12 h-12 bg-udm-orange-light rounded-lg flex items-center justify-center mx-auto mb-4">
                <dept.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-udm-navy mb-2">{dept.name}</h3>
              <Badge variant="secondary" className={dept.color}>
                {dept.count} open position{dept.count > 1 ? 's' : ''}
              </Badge>
            </div>
          ))}
        </div>
      </Section>

      {/* Open Positions */}
      <Section background="gray" padding="xl" id="positions">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-udm-navy mb-4">
            Open Positions
          </h2>
          <p className="text-xl text-udm-gray max-w-2xl mx-auto">
            Explore current opportunities and find the perfect role for your skills and career goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {openPositions.map((position, index) => (
            <Card key={index} className="border-0 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-orange)] transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <CardTitle className="text-xl text-udm-navy mb-2">{position.title}</CardTitle>
                    <Badge variant="outline" className="text-primary border-primary">
                      {position.department}
                    </Badge>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm text-udm-gray">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{position.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{position.type}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Briefcase className="h-4 w-4" />
                    <span>{position.experience}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-udm-gray mb-4">{position.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-udm-navy mb-2">Required Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {position.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Button className="w-full group">
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section background="navy" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Benefits & Perks
            </h2>
            <p className="text-xl text-white/80 mb-8">
              We believe in taking care of our team with comprehensive benefits and a supportive work environment.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white/90">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Apply?</h3>
            <p className="text-white/80 mb-6">
              Don't see a position that matches your skills? We're always looking for talented individuals.
            </p>
            <div className="space-y-4">
              <Button size="lg" variant="outline" className="w-full bg-transparent border-white text-white hover:bg-white hover:text-udm-navy">
                Send Your Resume
              </Button>
              <p className="text-sm text-white/60">
                Email us at careers@udmglobal.com
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Careers;