import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-background">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-sm font-medium text-primary mb-5 tracking-wide">
          UDM Global Solution
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground leading-[1.05] mb-6">
          In it for the
          <br />
          <span className="bg-gradient-to-r from-primary to-[hsl(13_94%_48%)] bg-clip-text text-transparent">
            long haul.
          </span>
        </h1>
        <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light">
          Stable, scalable, maintainable software — built with ownership,
          delivered with discipline.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-6 py-3 rounded-full text-[15px] font-medium hover:bg-primary/90 transition-colors"
          >
            Explore services
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-1.5 text-primary px-6 py-3 text-[15px] font-medium hover:underline"
          >
            Learn more <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
