import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-team.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="UDM Global Team Collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-udm-navy/80"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 animate-fade-in max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-semibold mb-6 leading-tight tracking-tight">
          In it for the long haul.
        </h1>
        <p className="text-lg md:text-xl mb-10 text-white/85 max-w-2xl mx-auto leading-relaxed font-light">
          We want to build a relationship, not just a customer base.
        </p>
        <Link to="/about">
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border border-white/70 text-white hover:bg-white hover:text-udm-navy font-medium px-8"
          >
            Learn More
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
