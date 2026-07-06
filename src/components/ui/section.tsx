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
  id,
}: SectionProps) => {
  const backgroundClasses = {
    white: "bg-background",
    gray: "bg-secondary",
    navy: "bg-[hsl(0_0%_6%)] text-white",
    gradient: "bg-gradient-to-b from-background to-secondary",
  };

  const paddingClasses = {
    sm: "py-10",
    md: "py-16",
    lg: "py-20 md:py-24",
    xl: "py-24 md:py-32",
  };

  return (
    <section
      id={id}
      className={cn(backgroundClasses[background], paddingClasses[padding], className)}
    >
      <div className="max-w-6xl mx-auto px-6">{children}</div>
    </section>
  );
};

export default Section;
