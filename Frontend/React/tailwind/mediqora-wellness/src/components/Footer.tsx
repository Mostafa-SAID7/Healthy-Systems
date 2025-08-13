import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Heart,
  Shield,
  Award
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Find a Doctor", href: "#doctors" },
    { name: "Departments", href: "#departments" },
    { name: "Patient Portal", href: "#portal" },
    { name: "Careers", href: "#careers" },
  ];

  const services = [
    { name: "Emergency Care", href: "#emergency" },
    { name: "Cardiology", href: "#cardiology" },
    { name: "Neurology", href: "#neurology" },
    { name: "Orthopedics", href: "#orthopedics" },
    { name: "Pediatrics", href: "#pediatrics" },
    { name: "Surgery", href: "#surgery" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        {/* Emergency Banner */}
        <div className="bg-gradient-primary rounded-lg p-6 mb-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Medical Emergency?</h3>
          <p className="text-white/90 mb-4">Call our 24/7 emergency hotline for immediate assistance</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90">
              <Phone className="w-5 h-5 mr-2" />
              +1 (555) 911-HELP
            </Button>
            <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">
              Emergency Services
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Mediqora
            </h2>
            <p className="text-background/70 mb-6 leading-relaxed">
              Leading healthcare excellence for over 25 years. Providing compassionate, 
              innovative medical care with a patient-centered approach.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-2 bg-background/10 rounded-full hover:bg-primary transition-colors duration-300 group"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5 text-background group-hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-background">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors duration-300 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-background">Medical Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-background/70 hover:text-primary transition-colors duration-300 hover:underline"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-background">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-background/90 font-medium">Main Hospital</p>
                  <p className="text-background/70 text-sm">
                    123 Healthcare Ave<br />
                    Medical District<br />
                    City, State 12345
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-background/90 font-medium">Main Line</p>
                  <p className="text-background/70 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-background/90 font-medium">General Info</p>
                  <p className="text-background/70 text-sm">info@mediqora.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-background/90 font-medium">Visiting Hours</p>
                  <p className="text-background/70 text-sm">
                    Mon-Sun: 8:00 AM - 8:00 PM<br />
                    Emergency: 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accreditations */}
        <div className="bg-background/5 rounded-lg p-6 mb-8">
          <h4 className="text-lg font-semibold text-background mb-4 text-center">
            Accreditations & Certifications
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-background/80 text-sm">JCI Accredited</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-background/80 text-sm">ISO 9001:2015</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-primary" />
              <span className="text-background/80 text-sm">Heart Safe Facility</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-background/80 text-sm">Magnet Recognition</span>
            </div>
          </div>
        </div>

        <Separator className="bg-background/20 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-background/70 text-sm">
            <p>&copy; 2024 Mediqora Hospital. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#privacy" className="text-background/70 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-background/70 hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#accessibility" className="text-background/70 hover:text-primary transition-colors">
              Accessibility
            </a>
            <a href="#sitemap" className="text-background/70 hover:text-primary transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;