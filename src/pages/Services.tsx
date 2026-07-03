import Navigation from "@/components/Navigation";
import Section from "@/components/ui/section";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code2, Users, Wrench, Palette, ShieldCheck, Share2 } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Development",
    description:
      "As a specialized offshore software development company, we design and develop custom applications to effectively meet our customers' needs. Our expert technical team is skilled in Microsoft Technologies, Cloud Computing and Hosting, Web Services and Micro Programming, and Media Encoding, with deep understanding of Healthcare, Media & Entertainment, Mortgage & Lending, eLearning, Supply Chain Management and eCommerce. We work on the Agile Scrum model, delivering high quality, innovative and cost-effective solutions.",
  },
  {
    icon: Users,
    title: "Recruitment Process Outsourcing",
    description:
      "As a recruitment partner, UDM provides customized recruitment solutions for both permanent and temporary positions. From scouting and screening potential hires all the way to on-boarding, our experienced recruitment team takes care of every function of the process. We help lower your costs and time-to-hire, and find you quality candidates who best fit your requirements.",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description:
      "Timely maintenance of business applications is as important as a good design or efficient code — whether it is to rectify errors, incorporate new features, improve performance or adapt to technological advancements. Our experienced service team is fully equipped to help businesses with corrective or adaptive maintenance, with a keen focus on improved efficiency and minimal downtime.",
  },
  {
    icon: Palette,
    title: "UI Development",
    description:
      "We have a creative and highly skilled team that specialises in delivering outstanding user experience for Web and Mobile apps. Our UX designers help reconcile client goals with user expectations with equal emphasis on intuitive layout and functionality. Our UI designers produce interfaces that are visually appealing while being functionally consistent and powerful.",
  },
  {
    icon: ShieldCheck,
    title: "Testing",
    description:
      "Businesses depend on applications for almost all crucial functions of their day-to-day operations. Ensuring these applications perform flawlessly is critical. Our Quality Assurance (QA) team uses best-in-industry testing methods and QA processes to find risk areas before they become threats. We are equipped to handle all kinds of testing processes.",
  },
  {
    icon: Share2,
    title: "Content Creation & Social Media Management",
    description:
      "Reaching new customers, connecting with existing ones, understanding customer preferences, addressing grievances, keeping an eye on competitors and monitoring mentions — all require an efficiently managed social media presence. Our team handles brand communications, social media marketing, social strategy planning, content creation, email marketing, advertising and marketing automation.",
  },
];

const valueAdds = [
  {
    title: "Agile Development Methodology",
    text: "All our dev work follows Agile-Scrum methodology ensuring quick and continuous delivery of working software, collaborated effort between business and tech experts, and room to adapt to changes while maintaining highest attention to design and quality.",
  },
  {
    title: "No Shared Resources",
    text: "We never allocate one developer to more than one project, irrespective of the workload. Our team members are dedicated to the customer and project they are assigned to at all times.",
  },
  {
    title: "Customisable Billing",
    text: "Our customer base ranges from start-ups to MNCs across varied domains. Their requirements, involvement and budgets differ, so we customise our billing to each customer to give the best value for money.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <Section padding="xl" className="pt-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold text-udm-navy mb-4 tracking-tight">Services</h1>
          <p className="text-lg text-udm-gray">Here's what we do best.</p>
        </div>
      </Section>

      <Section background="gray" padding="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <div key={i} className="bg-white border rounded-md p-7 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-shadow">
              <div className="w-11 h-11 bg-udm-orange-light rounded-md flex items-center justify-center mb-4">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-udm-navy mb-3">{s.title}</h3>
              <p className="text-sm text-udm-gray leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section padding="xl">
        <div className="text-center mb-3">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-2">Knowledge, experience, fresh and good ideas</p>
          <h2 className="text-3xl font-semibold text-udm-navy">Value Add Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-10">
          {valueAdds.map((v, i) => (
            <div key={i} className="p-6 border-t-2 border-primary bg-udm-gray-light rounded-b-md">
              <h4 className="font-semibold text-udm-navy mb-3">{v.title}</h4>
              <p className="text-sm text-udm-gray leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section background="navy" padding="lg" className="text-center">
        <p className="text-white/85 mb-5">
          Email Us: <a href="mailto:contact@udmglobal.com" className="text-primary font-medium">contact@udmglobal.com</a>
          {"  or  "}
          Call us @ <a href="tel:+918043009165" className="text-primary font-medium">+91 80-43009165</a>
        </p>
        <Link to="/contact"><Button size="lg">Start a Project</Button></Link>
      </Section>

      <Footer />
    </div>
  );
};

export default Services;
