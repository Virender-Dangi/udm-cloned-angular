import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Section from "@/components/ui/section";
import Footer from "@/components/Footer";
import HappyClients from "@/components/HappyClients";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const About = () => {
  const values = [
    { title: "Leadership", desc: "Inspire through action, not direction." },
    { title: "Collaboration", desc: "Leverage collective genius." },
    { title: "Integrity", desc: "Be real." },
    { title: "Accountability", desc: "If it is to be, it's up to me." },
    { title: "Passion", desc: "Committed in heart and mind." },
    { title: "Diversity", desc: "As inclusive as our brands." },
    { title: "Quality", desc: "What we do, we do well." },
  ];

  const outcomes = [
    "Improved scalability and responsiveness",
    "Enhanced platform stability and reliability",
    "Cloud-ready, future-proof architecture",
    "Better infrastructure efficiency",
    "Stronger foundation for product innovation",
  ];

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>About UDM Global Solution — In it for the long haul</title>
        <meta name="description" content="UDM Global Solution is a Bengaluru-based IT company founded in April 2017. Meet our team, values and mission." />
        <link rel="canonical" href="https://udm-cloned-angular.lovable.app/about" />
        <meta property="og:url" content="https://udm-cloned-angular.lovable.app/about" />
        <meta property="og:title" content="About UDM Global Solution" />
      </Helmet>
      <Navigation />

      <Section padding="xl" className="pt-32 text-center">
        <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">About</p>
        <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] mb-6">
          We're in it for
          <br />
          <span className="text-muted-foreground">the long haul.</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
          An Information Technology company based in Bengaluru, India. Founded April 2017.
        </p>
      </Section>

      <Section background="gray" padding="xl">
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-foreground/80 leading-relaxed font-light">
          <p>
            Our team has years of experience across Healthcare, Media & Entertainment, Mortgage & Lending, eLearning,
            Supply Chain Management and e-Commerce.
          </p>
          <p>
            We're a mix of young go-getters and seasoned professionals who together produce solutions customised
            to each client's needs — passionate about what we do and committed to our clients' success.
          </p>
        </div>
      </Section>

      <Section padding="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          <div className="bg-secondary rounded-3xl p-10">
            <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              Astound every customer by exceeding their tangible aspirations and making their success our mission —
              orchestrated by an obsessive, committed and dependable team.
            </p>
          </div>
          <div className="bg-secondary rounded-3xl p-10">
            <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To become the global benchmark for customer delight.
            </p>
          </div>
        </div>
      </Section>

      <Section background="gray" padding="xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold">Our values.</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {values.map((v, i) => (
            <div key={i} className="bg-background rounded-2xl p-6">
              <div className="text-primary text-xs font-semibold tracking-widest mb-3">0{i + 1}</div>
              <h4 className="font-semibold mb-1">{v.title}</h4>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Case study */}
      <Section background="navy" padding="xl">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">Case Study</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">
            UDM × Difuze.
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8 font-light">
            UDM partnered with Difuze to support the cloud transformation and architectural modernization of their
            core platforms — DifuzeGo and DifuzeDub — products designed to streamline content workflows and media
            operations at scale.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h4 className="text-white font-semibold mb-2">Challenge</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                Difuze needed scalable, resilient infrastructure to support growing workloads, evolving feature demands,
                and improved operational efficiency.
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h4 className="text-white font-semibold mb-2">Approach</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                Cloud migration with minimal disruption, re-architecting for cloud-native efficiency, and optimizing
                infrastructure design and deployment workflows.
              </p>
            </div>
          </div>

          <h4 className="text-white font-semibold mb-4">Business Outcomes</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {outcomes.map((o, i) => (
              <li key={i} className="flex gap-2 text-white/85 text-sm">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" /> {o}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section padding="xl" className="text-center">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">Let's talk.</h2>
        <Link
          to="/contact"
          className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-6 py-3 rounded-full text-[15px] font-medium hover:bg-primary/90"
        >
          Contact us <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>

      <Footer />
    </div>
  );
};

export default About;
