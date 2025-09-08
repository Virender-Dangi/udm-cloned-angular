import Navigation from "@/components/Navigation";
import Section from "@/components/ui/section";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Coffee, 
  Users, 
  Gamepad2, 
  GraduationCap, 
  Heart, 
  Trophy,
  Calendar,
  Gift
} from "lucide-react";

const Life = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs."
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "Continuous learning opportunities, conference attendance, and skill development programs."
    },
    {
      icon: Calendar,
      title: "Flexible Schedule",
      description: "Work-life balance with flexible hours and remote work options."
    },
    {
      icon: Gift,
      title: "Perks & Benefits",
      description: "Performance bonuses, festival celebrations, and team outings."
    },
    {
      icon: Coffee,
      title: "Great Workspace",
      description: "Modern office with ergonomic furniture, free snacks, and recreational areas."
    },
    {
      icon: Trophy,
      title: "Recognition",
      description: "Employee of the month, innovation awards, and career advancement opportunities."
    }
  ];

  const culture = [
    {
      icon: Users,
      title: "Collaborative Environment",
      description: "We believe in the power of teamwork and open communication. Everyone's voice matters."
    },
    {
      icon: Gamepad2,
      title: "Fun Activities",
      description: "Regular team building activities, gaming tournaments, and social events."
    },
    {
      icon: Coffee,
      title: "Innovation Time",
      description: "Dedicated time for personal projects and exploring new technologies."
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Senior Developer",
      quote: "UDM Global has been an amazing place to grow my career. The supportive team and challenging projects keep me motivated every day."
    },
    {
      name: "Rahul Kumar",
      role: "UI/UX Designer",
      quote: "The creative freedom and collaborative culture here allow me to produce my best work. It's more than a job - it's a passion."
    },
    {
      name: "Anita Patel",
      role: "Project Manager",
      quote: "The work-life balance and growth opportunities at UDM Global are exceptional. I feel valued and supported in every aspect of my role."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <Section padding="xl" className="pt-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-udm-navy mb-6">
            Life @ <span className="text-primary">UDM Global</span>
          </h1>
          <p className="text-xl text-udm-gray leading-relaxed">
            Join a team that values innovation, collaboration, and personal growth. 
            Discover what makes UDM Global a great place to work.
          </p>
        </div>
      </Section>

      {/* Culture Section */}
      <Section background="gray" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-udm-navy mb-4">
            Our Culture
          </h2>
          <p className="text-xl text-udm-gray max-w-2xl mx-auto">
            We foster an environment where creativity thrives and every team member can reach their full potential.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {culture.map((item, index) => (
            <Card key={index} className="text-center border-0 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-orange)] transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-udm-orange-light rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-udm-navy mb-4">{item.title}</h3>
                <p className="text-udm-gray leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Benefits Section */}
      <Section padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-udm-navy mb-4">
            Benefits & Perks
          </h2>
          <p className="text-xl text-udm-gray max-w-2xl mx-auto">
            We care about our team's well-being and provide comprehensive benefits to support their success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-orange)] transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-udm-orange-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-udm-navy mb-2">{benefit.title}</h3>
                  <p className="text-udm-gray leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Team Testimonials */}
      <Section background="navy" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Team Says
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Hear from our team members about their experience working at UDM Global.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-8">
                <blockquote className="text-lg italic mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-white/80">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Work Environment */}
      <Section padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-udm-navy mb-6">
              A Day in the Life
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">9</span>
                </div>
                <div>
                  <h4 className="font-semibold text-udm-navy">Morning Standup</h4>
                  <p className="text-udm-gray">Start the day with team sync and planning</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">10</span>
                </div>
                <div>
                  <h4 className="font-semibold text-udm-navy">Deep Work</h4>
                  <p className="text-udm-gray">Focused development time with minimal interruptions</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-udm-navy">Lunch & Recharge</h4>
                  <p className="text-udm-gray">Team lunch and recreational activities</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-udm-navy">Collaboration</h4>
                  <p className="text-udm-gray">Client meetings, code reviews, and team collaboration</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">5</span>
                </div>
                <div>
                  <h4 className="font-semibold text-udm-navy">Learning Time</h4>
                  <p className="text-udm-gray">Personal development and innovation projects</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-udm-gray-light rounded-2xl p-8 text-center">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-udm-navy mb-4">Join Our Team</h3>
            <p className="text-udm-gray mb-6">
              Ready to be part of something amazing? Explore career opportunities and grow with us.
            </p>
            <a 
              href="/careers"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Life;