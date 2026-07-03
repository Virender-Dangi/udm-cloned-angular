import Navigation from "@/components/Navigation";
import Section from "@/components/ui/section";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users } from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      title: "Internship (Sales and Marketing)",
      experience: "0-2 years",
      positions: "4",
      description: "Join our sales and marketing team as an intern. Gain hands-on experience in business development, client outreach, and digital marketing initiatives at a growing IT services company.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <Section padding="xl" className="pt-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold text-udm-navy mb-4 tracking-tight">Careers</h1>
          <p className="text-lg text-udm-gray leading-relaxed">
            Current Openings at UDM Global Solution Pvt. Ltd.
          </p>
        </div>
      </Section>

      <Section background="gray" padding="xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-udm-navy mb-8 flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-primary" />
            Current Openings
          </h2>

          <div className="space-y-5">
            {openPositions.map((position, index) => (
              <Card key={index} className="border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-udm-navy font-semibold mb-2">{position.title}</CardTitle>
                      <div className="flex flex-wrap gap-4 text-sm text-udm-gray">
                        <span>Experience Required: <strong className="text-udm-navy">{position.experience}</strong></span>
                        <span>No. of Positions: <strong className="text-udm-navy">{position.positions}</strong></span>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-primary border-primary w-fit">Open</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-udm-gray mb-5 text-sm leading-relaxed">{position.description}</p>
                  <Button variant="outline">View Details</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 p-6 bg-white border rounded-md text-center">
            <p className="text-udm-gray text-sm">
              Don't see a role that fits? Send your resume to{" "}
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
          <h2 className="text-3xl font-semibold text-white mb-4">Why work with us</h2>
          <p className="text-white/80 leading-relaxed">
            At UDM Global we believe happy employees create happy customers. We offer compulsory paid leave,
            regular one-to-one meetings, employee engagement plans, soft-skills training and dedicated project
            allocation — our attrition rate is a mere 1%.
          </p>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Careers;
