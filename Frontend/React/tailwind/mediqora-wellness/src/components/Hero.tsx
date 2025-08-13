import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Clock, Award } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-light">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-primary/10 backdrop-blur-[1px]"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="px-4 py-2 bg-white/90 backdrop-blur-sm">
              <Clock className="w-4 h-4 mr-2" />
              24/7 Emergency Care
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 bg-white/90 backdrop-blur-sm">
              <Award className="w-4 h-4 mr-2" />
              Accredited Hospital
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 bg-white/90 backdrop-blur-sm">
              <Users className="w-4 h-4 mr-2" />
              Expert Medical Team
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Mediqora
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-4 font-light">
            Where Medical Excellence Meets Compassionate Care
          </p>
          <p className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto">
            Experience world-class healthcare with our cutting-edge technology, renowned specialists, 
            and patient-centered approach to wellness and healing.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="px-8 py-4 text-lg animate-scale-in"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Appointment
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg bg-white/90 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-white animate-scale-in"
            >
              Find a Doctor
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-3xl mx-auto">
            <div className="text-center animate-slide-up">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-sm text-foreground/70">Patients Treated</div>
            </div>
            <div className="text-center animate-slide-up">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-sm text-foreground/70">Medical Experts</div>
            </div>
            <div className="text-center animate-slide-up">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-foreground/70">Years of Excellence</div>
            </div>
            <div className="text-center animate-slide-up">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-foreground/70">Hospital Beds</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse-glow hidden lg:block"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-pulse-glow hidden lg:block"></div>
    </section>
  );
};

export default Hero;