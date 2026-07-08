import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Section from "@/components/ui/section";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Cloud, Code2, Database, Shield, Sparkles, CheckCircle2, Layers, GitBranch } from "lucide-react";

const capabilityGroups = [
  {
    icon: Code2,
    title: "Application Development",
    tagline: "Fast, secure, scalable — for web and mobile.",
    frontend: ["Angular, React", "Responsive, component-driven UI", "Material UI / Tailwind design systems", "Accessibility & performance-focused"],
    backend: ["Node.js services", "Modular, service-oriented architectures", "RESTful APIs and GraphQL", "Secure auth & role-based access"],
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    tagline: "Cloud-native systems that scale reliably.",
    frontend: ["Amazon Web Services (AWS)", "Cloud architecture & implementation", "Managed services & cost optimization"],
    backend: ["Docker containers", "CI/CD (GitHub Actions / GitLab CI)", "Automated deploys on ECS / Fargate", "Terraform / AWS CDK (selective use)"],
  },
  {
    icon: Database,
    title: "Data & Performance",
    tagline: "Reliable data layers, optimized for real workloads.",
    frontend: ["PostgreSQL, MySQL", "MongoDB, DynamoDB"],
    backend: ["Redis caching strategies", "OpenSearch / Elasticsearch", "Background jobs & async processing"],
  },
  {
    icon: Shield,
    title: "Security & Access Control",
    tagline: "Security is built in — not bolted on.",
    frontend: ["OAuth 2.0 / OpenID Connect", "JWT-based authentication"],
    backend: ["Role-based access control (RBAC)", "Secure API design & data protection"],
  },
  {
    icon: Sparkles,
    title: "AI-Assisted Capabilities",
    tagline: "AI where it adds real value.",
    frontend: ["LLM API integrations for search & summarization", "AI-assisted workflows within existing apps"],
    backend: ["Responsible, practical use of AI features"],
  },
  {
    icon: CheckCircle2,
    title: "Quality Assurance & Stability",
    tagline: "Predictable delivery and long-term stability.",
    frontend: ["Functional & regression testing", "API & integration testing"],
    backend: ["Performance & reliability checks", "Production issue analysis & resolution"],
  },
];

const stack = {
  Frontend: ["Angular", "React"],
  Backend: ["Node.js"],
  Cloud: ["AWS", "Azure"],
  DevOps: ["Docker", "CI/CD"],
  Databases: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB"],
  "Caching & Search": ["Redis", "OpenSearch"],
  AI: ["LLM API integrations"],
};

const Services = () => {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Services — Application, Cloud, Data & AI | UDM Global Solution</title>
        <meta name="description" content="Application development, cloud & infrastructure, data engineering, security, AI-assisted workflows and QA — delivered by UDM Global Solution." />
        <link rel="canonical" href="https://udm-cloned-angular.lovable.app/services" />
        <meta property="og:url" content="https://udm-cloned-angular.lovable.app/services" />
        <meta property="og:title" content="UDM Global Solution — Services" />
      </Helmet>
      <Navigation />

      <Section padding="xl" className="pt-32 text-center">
        <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">Technology & Capabilities</p>
        <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] mb-5">
          <span className="sr-only">UDM Global Solution Services — Application Development, Cloud &amp; Data Engineering. </span>
          <span aria-hidden="true">Built for real-world systems.<br />
            <span className="text-muted-foreground">Delivered with ownership.</span>
          </span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
          Technology is a means to an outcome — not the outcome itself. We focus on
          stable, scalable, maintainable systems using proven technologies.
        </p>
      </Section>

      <Section background="gray" padding="xl">
        <h2 className="sr-only">Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {capabilityGroups.map((g, i) => (
            <div key={i} className="bg-background rounded-3xl p-10 shadow-[var(--shadow-card)]">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <g.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-1">{g.title}</h3>
              <p className="text-muted-foreground mb-6">{g.tagline}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ul className="space-y-2 text-sm">
                  {g.frontend.map((f, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                      <span className="text-foreground/80">{f}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2 text-sm">
                  {g.backend.map((b, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                      <span className="text-foreground/80">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* How we build */}
      <Section padding="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center max-w-5xl mx-auto">
          <div>
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <GitBranch className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold mb-5 leading-tight">
              How we build.
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Our engineering approach emphasizes clarity and accountability.
            </p>
          </div>
          <ul className="space-y-4">
            {[
              "Clear scope and architecture before development",
              "Incremental delivery with regular demos",
              "Code reviews and quality checks",
              "Long-term maintainability over short-term speed",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-foreground/85">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Stack */}
      <Section background="navy" padding="xl">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <Layers className="h-8 w-8 text-primary mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">Our technology stack.</h2>
          <p className="text-white/70 text-lg">At a glance.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {Object.entries(stack).map(([k, v]) => (
            <div key={k} className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="text-xs font-semibold text-primary tracking-widest uppercase mb-3">{k}</div>
              <ul className="space-y-1 text-white/85 text-sm">
                {v.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Outcomes */}
      <Section padding="xl" background="gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-10">What this means for our clients.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Systems that scale with confidence",
              "Stable platforms with predictable performance",
              "Clear ownership and accountability",
              "Technology choices made for longevity, not trends",
            ].map((o, i) => (
              <div key={i} className="bg-background rounded-2xl p-6 text-left flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground/85">{o}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section padding="xl" className="text-center">
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">Start a project.</h2>
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
    </main>
  );
};

export default Services;
