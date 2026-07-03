import Navigation from "@/components/Navigation";
import Section from "@/components/ui/section";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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

  const testimonials = [
    {
      quote: "UDM has been providing Managed Services on the AWS Cloud platform for desiredesire.com for more than a year. They have proactively solved issues impacting the business and handled the continuous releases of the applications without downtime.",
      name: "Praveen Krishnaiah",
      role: "Founder, Handpick 3d Solution Pvt Ltd",
    },
    {
      quote: "We are very satisfied with our relationship with UDM Global. They are professionals, hard workers and they help us to achieve any new idea that we come up with for our product. Thank you for your outstanding support and flexibility over the years.",
      name: "Rouette Jean-Sebastien",
      role: "Manager, Software Development & Support, Technicolor Montreal Canada",
    },
    {
      quote: "I am very impressed by the quality of the team working on our project. The code is top quality and the team displays a real understanding of our issues, coming to the table with suggestions and ideas that are very impressive. If I had to do it all over again, I would select UDM as our outsourcing provider again.",
      name: "Pankaj Singh",
      role: "CTO, Engagedly Software Solutions Pvt Ltd",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <Section padding="xl" className="pt-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold text-udm-navy mb-4 tracking-tight">About Us</h1>
          <p className="text-lg text-udm-gray">Get to know us a little.</p>
        </div>
      </Section>

      <Section background="gray" padding="xl">
        <div className="max-w-4xl mx-auto space-y-6 text-udm-gray leading-relaxed">
          <p>
            UDM Global Solution is an Information Technology company, based out of Bangalore, India. Founded in April 2017,
            we already have 6 satisfied customers from around the world.
          </p>
          <p>
            Our team has years of experience in several key domains such as Healthcare, Media and Entertainment, Mortgage
            and Lending, eLearning, Supply Chain Management and e-Commerce. We are a mix of individuals who bring both the
            energy and out-of-the-box thinking of young go-getters and the depth of knowledge and caution of seasoned
            professionals, and together produce the best possible solutions customized to each client's needs.
          </p>
          <p>
            As a group we are extremely passionate about what we do and we are committed to the success of our clients.
          </p>
        </div>
      </Section>

      <Section padding="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-8 border rounded-md bg-white shadow-[var(--shadow-card)]">
            <h3 className="text-xl font-semibold text-udm-navy mb-3">Our Mission</h3>
            <p className="text-udm-gray leading-relaxed">
              Strive to astound every customer by exceeding their tangible aspiration and making their success our mission,
              orchestrated by an obsessive, committed and dependable team, great customer experiences and services.
            </p>
          </div>
          <div className="p-8 border rounded-md bg-white shadow-[var(--shadow-card)]">
            <h3 className="text-xl font-semibold text-udm-navy mb-3">Our Vision</h3>
            <p className="text-udm-gray leading-relaxed">
              To become the global benchmark for customer delight.
            </p>
          </div>
        </div>
      </Section>

      <Section background="gray" padding="xl">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-udm-navy text-center mb-10">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <div key={i} className="p-6 bg-white border rounded-md">
                <div className="text-primary text-sm font-semibold mb-2">0{i + 1}</div>
                <h4 className="font-semibold text-udm-navy mb-1">{v.title}</h4>
                <p className="text-sm text-udm-gray">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section padding="xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-udm-navy mb-4">Fantastic Team</h2>
          <p className="text-udm-gray leading-relaxed">
            Every project we have completed so far came to us with a set of challenges, including seemingly impossible
            deadlines. Each time, our teams have risen to the challenge, and gone above and beyond their call of duty to
            deliver results that not just met but exceeded client expectations. The team's USP is their cusp of creativity
            and problem solving abilities, which help identify potential roadblocks and find creative solutions for them.
          </p>
        </div>
      </Section>

      <Section background="navy" padding="xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-white mb-3">This is why we love what we do</h2>
          <p className="text-white/70">Kind words from our clients</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-md p-6">
              <p className="text-white/85 text-sm leading-relaxed mb-5 italic">"{t.quote}"</p>
              <div>
                <div className="font-semibold text-white">{t.name}</div>
                <div className="text-xs text-white/60 mt-1">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section padding="lg" className="text-center">
        <p className="text-udm-gray mb-6">
          Email Us: <a href="mailto:contact@udmglobal.com" className="text-primary font-medium">contact@udmglobal.com</a>
          {"  or  "}
          Call us @ <a href="tel:+918043009165" className="text-primary font-medium">+91 80-43009165</a>
        </p>
        <Link to="/contact"><Button size="lg">Get In Touch</Button></Link>
      </Section>

      <Footer />
    </div>
  );
};

export default About;
