"use client"

import { useState, useEffect } from "react"
import { Calendar, Clock, User, Phone, Mail, MapPin, Star, ChevronRight, Heart, Shield, Award, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Loader } from "@/components/loader"
import { MobileMenu } from "@/components/mobile-menu" // Import the new MobileMenu component

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    rating: 4.9,
    experience: "15 years",
    image: "/placeholder-lerxs.png",
    nextAvailable: "Today 2:00 PM",
    consultationFee: "$150"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurologist",
    rating: 4.8,
    experience: "12 years",
    image: "/male-neurologist.png",
    nextAvailable: "Tomorrow 10:00 AM",
    consultationFee: "$180"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    rating: 4.9,
    experience: "10 years",
    image: "/placeholder-gi9iv.png",
    nextAvailable: "Today 4:30 PM",
    consultationFee: "$120"
  }
]

const specialties = [
  { name: "Cardiology", icon: Heart, count: "12 doctors" },
  { name: "Neurology", icon: Shield, count: "8 doctors" },
  { name: "Pediatrics", icon: Award, count: "15 doctors" },
  { name: "Orthopedics", icon: User, count: "10 doctors" },
]

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loader />
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/doctors", label: "Doctors" },
    { href: "/appointments", label: "Appointments" },
    { href: "/contact", label: "Contact" },
    { href: "/patient-portal", label: "Patient Portal" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-accent shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">MediCare</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className={`text-white/90 hover:text-white transition-colors font-medium ${link.href === '/' ? 'font-bold' : ''}`}>
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="hidden sm:inline-flex bg-foreground text-background hover:bg-foreground/90">
                Sign In
              </Button>
              <Button className="bg-foreground text-background hover:bg-foreground/90">
                Book Now
              </Button>
              <MobileMenu links={navLinks} /> {/* Mobile menu toggle */}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary to-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                  Your Health,{" "}
                  <span className="text-gradient-to-r from-primary to-accent">
                    Our Priority
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Book appointments with top-rated doctors instantly. Quality healthcare made accessible and convenient.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-3">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-2 border-destructive text-destructive hover:bg-destructive hover:text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency Call
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-gray-600">Expert Doctors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">50k+</div>
                  <div className="text-gray-600">Happy Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-foreground">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/modern-medical-consultation-sketch.png"
                  alt="Medical consultation"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-r from-primary to-accent rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Medical Specialties
            </h2>
            <p className="text-xl text-gray-600">
              Find the right specialist for your healthcare needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((specialty, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <specialty.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{specialty.name}</h3>
                  <p className="text-gray-600">{specialty.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Featured Doctors
            </h2>
            <p className="text-xl text-gray-600">
              Meet our top-rated healthcare professionals
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <Card key={doctor.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="relative">
                  <img
                    src={`/simple-line-sketch.png?height=192&width=192&query=sketch of ${doctor.specialty.toLowerCase()} doctor`}
                    alt={doctor.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary">
                    Available
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{doctor.name}</h3>
                      <p className="text-primary font-medium">{doctor.specialty}</p>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span>{doctor.rating}</span>
                      </div>
                      <span>{doctor.experience}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Next available</p>
                        <p className="font-medium text-gray-800">{doctor.nextAvailable}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Consultation</p>
                        <p className="font-bold text-accent">{doctor.consultationFee}</p>
                      </div>
                    </div>
                    <Button className="w-full bg-accent hover:bg-accent/90">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Appointment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose MediCare?
            </h2>
            <p className="text-xl text-gray-600">
              Experience healthcare like never before
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">24/7 Availability</h3>
              <p className="text-gray-600">Round-the-clock medical support and emergency services</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Secure & Private</h3>
              <p className="text-gray-600">Your medical data is protected with enterprise-grade security</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary-foreground/10 to-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Expert Care</h3>
              <p className="text-gray-600">Board-certified doctors with years of experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Join thousands of patients who trust MediCare for their healthcare needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Calendar className="w-5 h-5 mr-2" />
              Book Your First Appointment
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">MediCare</span>
              </div>
              <p className="text-gray-400">
                Providing quality healthcare services with compassion and excellence.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/doctors" className="hover:text-white transition-colors">Find Doctors</Link></li>
                <li><Link href="/appointments" className="hover:text-white transition-colors">Book Appointment</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  (555) 123-4567
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@medicare.com
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  123 Health St, Medical City
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Emergency</h3>
              <p className="text-gray-400 mb-2">24/7 Emergency Hotline</p>
              <p className="text-2xl font-bold text-destructive">(555) 911-HELP</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MediCare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
