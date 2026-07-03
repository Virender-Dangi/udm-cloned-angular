import Navigation from "@/components/Navigation";
import Section from "@/components/ui/section";
import Footer from "@/components/Footer";
import { Users, Heart, Sparkles } from "lucide-react";

const Life = () => {
  const highlights = [
    {
      icon: Users,
      title: "Fantastic Team",
      text: "Every project came to us with a set of challenges, including seemingly impossible deadlines. Each time, our teams have risen to the challenge and gone above and beyond to deliver results that exceeded client expectations. The team's USP is their cusp of creativity and problem-solving abilities.",
    },
    {
      icon: Heart,
      title: "Social Contribution",
      text: "As an organisation we want to do more than meet SLAs and grow our business. We have a policy of One-Day-No-Work twice a year, contributing our man hours towards Corporate Social Responsibility — volunteering with charitable organisations and participating in causes like Swach Bharat Abhiyaan.",
    },
    {
      icon: Sparkles,
      title: "Amazing Benefits",
      text: "The way to satisfied customers is through happy employees. We have compulsory paid leave, regular one-to-one meetings to align aspirations with work, and Employee Engagement Plans. Every month, 10% of employee hours go into activities of personal interest, plus soft-skill trainings in Kannada, French, blog writing and digital marketing. Our attrition rate is a mere 1%.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <Section padding="xl" className="pt-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold text-udm-navy mb-4 tracking-tight">Life @ UDM Global</h1>
          <p className="text-lg text-udm-gray">A place where people, purpose and passion come together.</p>
        </div>
      </Section>

      <Section background="gray" padding="xl">
        <div className="max-w-5xl mx-auto space-y-6">
          {highlights.map((h, i) => (
            <div key={i} className="bg-white border rounded-md p-8 shadow-[var(--shadow-card)] flex flex-col md:flex-row gap-6">
              <div className="w-12 h-12 bg-udm-orange-light rounded-md flex items-center justify-center flex-shrink-0">
                <h.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-udm-navy mb-3">{h.title}</h3>
                <p className="text-udm-gray leading-relaxed">{h.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section background="navy" padding="lg" className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">This is why we love what we do.</h2>
        <p className="text-white/70">Committed in heart and mind — every single day.</p>
      </Section>

      <Footer />
    </div>
  );
};

export default Life;
