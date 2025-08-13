import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Building, Clock, Shield, Star, Heart, Eye } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "JCI Accredited",
      description: "International healthcare quality standards",
    },
    {
      icon: Star,
      title: "5-Star Rating",
      description: "Patient satisfaction excellence",
    },
    {
      icon: Shield,
      title: "ISO Certified",
      description: "Quality management systems",
    },
    {
      icon: Building,
      title: "Green Building",
      description: "Environmentally sustainable facility",
    },
  ];

  const stats = [
    { number: "50,000+", label: "Patients Treated Annually", icon: Users },
    { number: "200+", label: "Medical Specialists", icon: Users },
    { number: "25+", label: "Years of Excellence", icon: Clock },
    { number: "500+", label: "Hospital Beds", icon: Building },
    { number: "98%", label: "Patient Satisfaction", icon: Star },
    { number: "24/7", label: "Emergency Care", icon: Shield },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-fade-in">
            <Badge className="mb-4 bg-primary-light text-primary">About Mediqora</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Leading Healthcare Excellence for 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Over 25 Years</span>
            </h2>
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              At Mediqora, we combine cutting-edge medical technology with compassionate care to deliver 
              exceptional healthcare experiences. Our commitment to excellence has made us a trusted 
              healthcare partner for thousands of families.
            </p>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              From routine check-ups to complex surgical procedures, our multidisciplinary team of 
              specialists works collaboratively to ensure every patient receives personalized, 
              evidence-based care in a comfortable and healing environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Our Story
              </Button>
              <Button variant="outline" size="lg">
                Meet Our Team
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 animate-slide-up">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card 
                  key={achievement.title} 
                  className="p-6 text-center hover:shadow-medium transition-all duration-300 hover:scale-105 bg-gradient-light border-primary/10"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-0">
                    <div className="mb-4 p-3 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{achievement.title}</h3>
                    <p className="text-sm text-foreground/70">{achievement.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-light rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Healthcare Excellence by the <span className="text-primary">Numbers</span>
            </h3>
            <p className="text-lg text-foreground/70">
              Our commitment to quality healthcare is reflected in these achievements
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={stat.label} 
                  className="text-center animate-scale-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="mb-3 p-2 bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center mx-auto">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-foreground/70 leading-tight">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <Card className="p-8 text-center hover:shadow-medium transition-all duration-300 hover:scale-105 bg-white border-primary/10">
            <CardContent className="p-0">
              <div className="mb-6 p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-foreground/70 leading-relaxed">
                To provide compassionate, high-quality healthcare services that improve the health 
                and well-being of our community through innovation, excellence, and dedication.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 text-center hover:shadow-medium transition-all duration-300 hover:scale-105 bg-white border-primary/10">
            <CardContent className="p-0">
              <div className="mb-6 p-4 bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <Eye className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-foreground/70 leading-relaxed">
                To be the leading healthcare provider, recognized for clinical excellence, 
                patient satisfaction, and innovative medical solutions that transform lives.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 text-center hover:shadow-medium transition-all duration-300 hover:scale-105 bg-white border-primary/10">
            <CardContent className="p-0">
              <div className="mb-6 p-4 bg-medical-success/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-medical-success" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Our Values</h3>
              <p className="text-foreground/70 leading-relaxed">
                Compassion, integrity, excellence, innovation, and respect guide everything we do, 
                ensuring every patient receives the highest standard of care.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;