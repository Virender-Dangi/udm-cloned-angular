import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Section from "@/components/ui/section";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Cloud, Code2, Database, Shield, Sparkles, LineChart } from "lucide-react";

const Index = () => {
  const capabilities = [
    { icon: Code2, title: "Application Development", desc: "Modern web and mobile apps built on Angular, React and Node.js." },
    { icon: Cloud, title: "Cloud & Infrastructure", desc: "AWS-native architectures, containers and CI/CD you can rely on." },
    { icon: Database, title: "Data & Performance", desc: "PostgreSQL, MongoDB, Redis and OpenSearch — tuned for real workloads." },
    { icon: Shield, title: "Security & Access", desc: "OAuth 2.0, OIDC, JWT and RBAC baked in from day one." },
    { icon: Sparkles, title: "AI-Assisted Workflows", desc: "LLM integrations that add real value — never as a buzzword." },
    { icon: LineChart, title: "Quality & Stability", desc: "Predictable delivery and long-term system stability." },
  ];

  const testimonials = [
    {
      quote:
        "UDM has been providing Managed Services on the AWS Cloud platform for more than a year. They have proactively solved issues impacting the business and handled continuous releases without downtime.",
      name: "Praveen Krishnaiah",
      role: "Founder, Handpick 3d Solution Pvt Ltd",
    },
    {
      quote:
        "We are very satisfied with our relationship with UDM Global. They are professionals, hard workers and they help us achieve every new idea we come up with for our product.",
      name: "Rouette Jean-Sebastien",
      role: "Manager, Technicolor Montreal Canada",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      {/* Feature banner — Apple product-tile style */}
      <Section padding="sm" background="gray">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-background rounded-3xl p-10 md:p-14 text-center shadow-[var(--shadow-card)]">
            <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-3">Case Study</p>
            <h3 className="text-3xl md:text-4xl font-semibold mb-3">Difuze × UDM</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Cloud transformation and architectural modernization for DifuzeGo and DifuzeDub.
            </p>
            <Link to="/about" className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:underline">
              Read the story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="bg-[hsl(0_0%_6%)] text-white rounded-3xl p-10 md:p-14 text-center">
            <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-3">Careers</p>
            <h3 className="text-3xl md:text-4xl font-semibold mb-3">Build with us.</h3>
            <p className="text-white/70 mb-6 max-w-md mx-auto">
              Join a team that treats engineering as craft. Attrition rate: 1%.
            </p>
            <Link to="/careers" className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:underline">
              See open roles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Capabilities */}
      <Section padding="xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-3">Capabilities</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight">
            Built for real-world systems.
            <br />
            <span className="text-muted-foreground">Delivered with ownership.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((c, i) => (
            <div
              key={i}
              className="bg-secondary rounded-2xl p-8 hover:shadow-[var(--shadow-card)] transition-shadow"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <c.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Philosophy — dark hero */}
      <Section background="navy" padding="xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-semibold text-white leading-tight mb-6">
            Technology is a means to an outcome —{" "}
            <span className="text-white/50">not the outcome itself.</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            We choose proven technologies and disciplined engineering practices,
            shaped by production experience and long-term partnerships.
          </p>
        </div>
      </Section>

      {/* Testimonials */}
      <Section padding="xl" background="gray">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-3">Kind Words</p>
          <h2 className="text-4xl md:text-5xl font-semibold">This is why we love what we do.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-background rounded-2xl p-8 shadow-[var(--shadow-card)]">
              <p className="text-foreground leading-relaxed mb-6 text-lg font-light">"{t.quote}"</p>
              <div className="text-sm">
                <div className="font-semibold">{t.name}</div>
                <div className="text-muted-foreground mt-0.5">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section padding="xl" className="text-center">
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">Let's build something lasting.</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Email <a href="mailto:contact@udmglobal.com" className="text-primary">contact@udmglobal.com</a>
          {"  ·  "}
          Call <a href="tel:+917338559996" className="text-primary">+91 73385 59996</a>
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-6 py-3 rounded-full text-[15px] font-medium hover:bg-primary/90"
        >
          Get in touch <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>

      <Footer />
    </div>
  );
};

export default Index;
