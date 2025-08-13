import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Brain, Baby, Bone, Eye, Stethoscope, Activity, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Cardiology",
      description: "Advanced heart care with state-of-the-art cardiac procedures and treatments.",
      features: ["Heart Surgery", "Cardiac Catheterization", "Preventive Care"],
    },
    {
      icon: Brain,
      title: "Neurology",
      description: "Comprehensive neurological care for brain and nervous system conditions.",
      features: ["Brain Surgery", "Stroke Treatment", "Neurological Rehabilitation"],
    },
    {
      icon: Baby,
      title: "Pediatrics",
      description: "Specialized medical care for infants, children, and adolescents.",
      features: ["Newborn Care", "Pediatric Surgery", "Child Development"],
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description: "Expert treatment for musculoskeletal conditions and sports injuries.",
      features: ["Joint Replacement", "Sports Medicine", "Fracture Care"],
    },
    {
      icon: Eye,
      title: "Ophthalmology",
      description: "Complete eye care services from routine exams to complex surgeries.",
      features: ["Cataract Surgery", "LASIK", "Retinal Care"],
    },
    {
      icon: Stethoscope,
      title: "Internal Medicine",
      description: "Comprehensive primary care for adult medical conditions and wellness.",
      features: ["Preventive Care", "Chronic Disease Management", "Health Screenings"],
    },
    {
      icon: Activity,
      title: "Emergency Care",
      description: "24/7 emergency medical services with rapid response capabilities.",
      features: ["Trauma Care", "Critical Care", "Emergency Surgery"],
    },
    {
      icon: Shield,
      title: "Preventive Care",
      description: "Proactive healthcare focused on preventing illness and promoting wellness.",
      features: ["Health Screenings", "Vaccination", "Lifestyle Counseling"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-medical-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Medical <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Comprehensive healthcare services delivered by our expert medical team using the latest 
            technology and evidence-based treatment approaches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title} 
                className="group hover:shadow-medium transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border-primary/10 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gradient-light rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-gradient-primary transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-foreground/70">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-sm text-foreground/80 flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="px-8 py-4">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;