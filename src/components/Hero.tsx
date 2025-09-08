import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-team.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="UDM Global Team Collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-udm-navy/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            In it for the <span className="text-primary">long haul!</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            We want to build a relationship, not just a customer base.
          </p>
          <Link to="/about">
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-udm-navy font-semibold px-8 py-6 text-lg transition-all duration-300"
            >
              LEARN MORE
            </Button>
          </Link>
        </div>
      </div>

      {/* Navigation arrows - decorative */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60">
        <div className="w-12 h-12 flex items-center justify-center">
          <span className="text-2xl">‹</span>
        </div>
      </div>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60">
        <div className="w-12 h-12 flex items-center justify-center">
          <span className="text-2xl">›</span>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-white"></div>
        <div className="w-3 h-3 rounded-full bg-white/40"></div>
        <div className="w-3 h-3 rounded-full bg-white/40"></div>
      </div>
    </section>
  );
};

export default Hero;