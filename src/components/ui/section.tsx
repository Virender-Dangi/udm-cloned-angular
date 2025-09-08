import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "white" | "gray" | "navy" | "gradient";
  padding?: "sm" | "md" | "lg" | "xl";
  id?: string;
}

const Section = ({ 
  children, 
  className, 
  background = "white", 
  padding = "lg",
  id
}: SectionProps) => {
  const backgroundClasses = {
    white: "bg-background",
    gray: "bg-udm-gray-light",
    navy: "bg-udm-navy text-white",
    gradient: "bg-gradient-to-br from-udm-navy to-udm-navy-light text-white",
  };

  const paddingClasses = {
    sm: "py-8",
    md: "py-16",
    lg: "py-20",
    xl: "py-32",
  };

  return (
    <section 
      id={id}
      className={cn(
        backgroundClasses[background],
        paddingClasses[padding],
        className
      )}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default Section;