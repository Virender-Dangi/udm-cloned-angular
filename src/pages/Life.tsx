import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Section from "@/components/ui/section";
import Footer from "@/components/Footer";
import { Users, Heart, Sparkles } from "lucide-react";

const Life = () => {
  const highlights = [
    {
      icon: Users,
      title: "Fantastic team",
      text:
        "Every project came with challenges — often impossible deadlines. Our teams have consistently risen to meet them, and gone beyond to deliver results that exceeded client expectations.",
    },
    {
      icon: Heart,
      title: "Social contribution",
      text:
        "We want to do more than meet SLAs. Twice a year we run One-Day-No-Work, contributing our hours toward CSR — volunteering with charitable organisations and causes like Swachh Bharat Abhiyaan.",
    },
    {
      icon: Sparkles,
      title: "Amazing benefits",
      text:
        "Compulsory paid leave, regular one-to-ones and employee engagement plans. Every month, 10% of employee hours go into personal interests. Attrition rate: 1%.",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Life @ UDM — People, purpose and passion</title>
        <meta name="description" content="Life at UDM Global Solution: fantastic teams, social contribution and amazing benefits. Attrition rate: 1%." />
        <link rel="canonical" href="https://udm-cloned-angular.lovable.app/life" />
        <meta property="og:url" content="https://udm-cloned-angular.lovable.app/life" />
        <meta property="og:title" content="Life @ UDM Global Solution" />
      </Helmet>
      <Navigation />

      <Section padding="xl" className="pt-32 text-center">
        <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">Life @ UDM</p>
        <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] mb-5">
          People. Purpose.
          <br />
          <span className="text-muted-foreground">Passion.</span>
        </h1>
      </Section>

      <Section background="gray" padding="xl">
        <h2 className="sr-only">What life at UDM looks like</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {highlights.map((h, i) => (
            <div key={i} className="bg-background rounded-3xl p-8">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <h.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{h.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{h.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section background="navy" padding="xl" className="text-center">
        <h2 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
          Committed in heart and mind —
          <br />
          <span className="text-white/50">every single day.</span>
        </h2>
      </Section>

      <Footer />
    </main>
  );
};

export default Life;
