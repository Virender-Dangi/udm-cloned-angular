import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
  style?: React.CSSProperties;
}

const ServiceCard = ({ title, description, image, className, style }: ServiceCardProps) => {
  return (
    <Card 
      className={cn(
        "group overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-card)] border-0",
        className
      )}
      style={style}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-udm-navy mb-3">{title}</h3>
        <p className="text-udm-gray leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;