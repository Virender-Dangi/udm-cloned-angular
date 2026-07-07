import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Section from "@/components/ui/section";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users } from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      title: "Internship — Sales & Marketing",
      experience: "0–2 years",
      positions: "4",
      description:
        "Join our sales and marketing team as an intern. Get hands-on experience in business development, client outreach and digital marketing at a growing IT services company.",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Careers at UDM Global Solution — Build with us</title>
        <meta name="description" content="Explore current openings at UDM Global Solution in Bengaluru. Sales & Marketing Internship available now." />
        <link rel="canonical" href="https://udm-cloned-angular.lovable.app/careers" />
        <meta property="og:url" content="https://udm-cloned-angular.lovable.app/careers" />
        <meta property="og:title" content="Careers at UDM Global Solution" />
      </Helmet>
      <Navigation />

      <Section padding="xl" className="pt-32 text-center">
        <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">Careers</p>
        <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] mb-5">
          Build with us.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
          Current openings at UDM Global Solution Pvt. Ltd.
        </p>
      </Section>

      <Section background="gray" padding="xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-primary" />
            Open roles
          </h2>

          <div className="space-y-4">
            {openPositions.map((p, i) => (
              <div key={i} className="bg-background rounded-2xl p-8 shadow-[var(--shadow-card)]">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span>Experience: <strong className="text-foreground">{p.experience}</strong></span>
                      <span>Positions: <strong className="text-foreground">{p.positions}</strong></span>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-primary border-primary w-fit rounded-full">Open</Badge>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{p.description}</p>
                <a
                  href="mailto:contact@udmglobal.com?subject=Application: Internship — Sales & Marketing"
                  className="text-primary text-sm font-medium hover:underline"
                >
                  Apply now →
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-background rounded-2xl p-6 text-center">
            <p className="text-sm text-muted-foreground">
              Don't see the right role? Send your resume to{" "}
              <a href="mailto:contact@udmglobal.com" className="text-primary font-medium hover:underline">
                contact@udmglobal.com
              </a>
            </p>
          </div>
        </div>
      </Section>

      <Section background="navy" padding="xl">
        <div className="max-w-3xl mx-auto text-center">
          <Users className="h-10 w-10 text-primary mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-5">Why work with us.</h2>
          <p className="text-white/70 text-lg leading-relaxed font-light">
            Happy employees create happy customers. Compulsory paid leave, regular one-to-ones, employee
            engagement plans, soft-skills training and dedicated project allocation — our attrition rate
            is a mere 1%.
          </p>
        </div>
      </Section>

      <Footer />
    </main>
  );
};

export default Careers;
