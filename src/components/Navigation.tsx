import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/udm-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Life @ UDM", href: "/life" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/60">
      <nav aria-label="Primary" className="w-full">

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-2 min-h-[48px]" aria-label="UDM Global Solution — Home">
            <img src={logo} alt="UDM Global Solution logo" width="120" height="28" className="h-7 w-auto" />
            <span className="text-[13px] font-medium text-foreground/80 hidden sm:inline">
              Global Solution
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-[13px] font-normal transition-colors px-3 min-h-[48px] inline-flex items-center rounded-md",
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-foreground/80 hover:text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            className="lg:hidden inline-flex items-center justify-center w-12 h-12 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden py-2 border-t border-border/60">
            <div className="flex flex-col">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-base min-h-[48px] flex items-center px-2 transition-colors",
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-foreground/80"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      </nav>
    </header>
  );
};

export default Navigation;
