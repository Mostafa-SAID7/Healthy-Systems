"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Phone,
  Mail,
  MapPin,
  Star,
  Shield,
  Award,
  Clock,
  Users,
  Smile,
  CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Play,
  CheckCircle,
  Heart,
  Globe,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns"

export default function DentaraClinic() {
  const [currentService, setCurrentService] = useState(0)
  const [bookingStep, setBookingStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0)

  const services = ["Brighten Your Smile", "Pain-Free Dentistry", "Book Instantly", "Advanced Care"]

  const treatments = [
    {
      title: "General Cleanings",
      description: "Professional dental cleanings and preventive care",
      icon: "🦷",
      price: "From $120",
    },
    {
      title: "Teeth Whitening",
      description: "Professional whitening for a brighter smile",
      icon: "✨",
      price: "From $299",
    },
    {
      title: "Orthodontics",
      description: "Braces and clear aligners for perfect alignment",
      icon: "🔧",
      price: "From $2,999",
    },
    {
      title: "Dental Implants",
      description: "Permanent tooth replacement solutions",
      icon: "🔩",
      price: "From $1,899",
    },
    {
      title: "Pediatric Dentistry",
      description: "Gentle dental care for children",
      icon: "👶",
      price: "From $89",
    },
    {
      title: "Cosmetic Dentistry",
      description: "Veneers, bonding, and smile makeovers",
      icon: "💎",
      price: "From $599",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Dr. Martinez transformed my smile completely. The process was painless and the results exceeded my expectations!",
      rating: 5,
      treatment: "Veneers",
    },
    {
      name: "Michael Chen",
      text: "Best dental experience I've ever had. The team is professional, caring, and the technology is cutting-edge.",
      rating: 5,
      treatment: "Implants",
    },
    {
      name: "Emily Rodriguez",
      text: "My kids actually look forward to their dental visits now. Dr. Martinez has a wonderful way with children.",
      rating: 5,
      treatment: "Pediatric Care",
    },
  ]

  const galleryImages = [
    {
      before: "/placeholder.svg?height=300&width=400&text=Before+Whitening",
      after: "/placeholder.svg?height=300&width=400&text=After+Whitening",
      treatment: "Teeth Whitening",
      description: "Professional whitening treatment results",
    },
    {
      before: "/placeholder.svg?height=300&width=400&text=Before+Veneers",
      after: "/placeholder.svg?height=300&width=400&text=After+Veneers",
      treatment: "Porcelain Veneers",
      description: "Complete smile makeover with veneers",
    },
    {
      before: "/placeholder.svg?height=300&width=400&text=Before+Braces",
      after: "/placeholder.svg?height=300&width=400&text=After+Braces",
      treatment: "Orthodontics",
      description: "Teeth alignment correction",
    },
  ]

  const faqs = [
    {
      question: "How often should I visit the dentist?",
      answer:
        "We recommend visiting every 6 months for regular cleanings and check-ups to maintain optimal oral health.",
    },
    {
      question: "Do you accept insurance?",
      answer:
        "Yes, we accept most major dental insurance plans. Our team will help verify your benefits and maximize your coverage.",
    },
    {
      question: "Is teeth whitening safe?",
      answer:
        "Professional teeth whitening is completely safe when performed by our experienced dental team using FDA-approved materials.",
    },
    {
      question: "What should I expect during my first visit?",
      answer:
        "Your first visit includes a comprehensive exam, digital X-rays, oral cancer screening, and a personalized treatment plan discussion.",
    },
    {
      question: "Do you offer emergency dental services?",
      answer:
        "Yes, we provide emergency dental care. Call our emergency line at (555) 123-4567 for urgent dental needs.",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [services.length])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-teal-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Smile className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Dentara
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gray-700 hover:text-teal-600 transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-teal-600 transition-colors">
              About
            </Link>
            <Link href="#gallery" className="text-gray-700 hover:text-teal-600 transition-colors">
              Gallery
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-teal-600 transition-colors">
              Contact
            </Link>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-gray-500" />
              <Select defaultValue="en">
                <SelectTrigger className="w-16 border-none">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">EN</SelectItem>
                  <SelectItem value="es">ES</SelectItem>
                  <SelectItem value="fr">FR</SelectItem>
                  <SelectItem value="ar">AR</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600">
                Book Now
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Book Your Appointment</DialogTitle>
                <DialogDescription>Schedule your visit with our expert dental team</DialogDescription>
              </DialogHeader>

              {/* Multi-step booking form */}
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-6">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          bookingStep >= step ? "bg-teal-500 text-white" : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        {step}
                      </div>
                      {step < 3 && (
                        <div className={`w-16 h-1 mx-2 ${bookingStep > step ? "bg-teal-500" : "bg-gray-200"}`} />
                      )}
                    </div>
                  ))}
                </div>

                {bookingStep === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Patient Information</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" placeholder="(555) 123-4567" />
                    </div>
                    <div>
                      <Label htmlFor="notes">Additional Notes</Label>
                      <Textarea id="notes" placeholder="Any specific concerns or requests..." />
                    </div>
                  </div>
                )}

                {bookingStep === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Treatment & Schedule</h3>
                    <div>
                      <Label>Select Treatment</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a treatment" />
                        </SelectTrigger>
                        <SelectContent>
                          {treatments.map((treatment, index) => (
                            <SelectItem key={index} value={treatment.title}>
                              {treatment.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Preferred Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal bg-transparent"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div>
                      <Label>Preferred Time</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="9:00">9:00 AM</SelectItem>
                          <SelectItem value="10:00">10:00 AM</SelectItem>
                          <SelectItem value="11:00">11:00 AM</SelectItem>
                          <SelectItem value="14:00">2:00 PM</SelectItem>
                          <SelectItem value="15:00">3:00 PM</SelectItem>
                          <SelectItem value="16:00">4:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {bookingStep === 3 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Confirmation</h3>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="w-5 h-5 text-teal-500" />
                        <span className="font-semibold text-teal-700">Appointment Confirmed!</span>
                      </div>
                      <p className="text-sm text-teal-600">
                        Your appointment has been scheduled. You'll receive a confirmation email shortly.
                      </p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong>Date:</strong> {selectedDate ? format(selectedDate, "PPP") : "Not selected"}
                      </p>
                      <p>
                        <strong>Treatment:</strong> General Consultation
                      </p>
                      <p>
                        <strong>Location:</strong> 123 Dental Ave, Suite 100
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex justify-between pt-4">
                  {bookingStep > 1 && (
                    <Button variant="outline" onClick={() => setBookingStep(bookingStep - 1)}>
                      <ChevronLeft className="w-4 h-4 mr-2" />
                      Previous
                    </Button>
                  )}
                  {bookingStep < 3 ? (
                    <Button
                      className="ml-auto bg-gradient-to-r from-teal-500 to-blue-500"
                      onClick={() => setBookingStep(bookingStep + 1)}
                    >
                      Next
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button className="ml-auto bg-gradient-to-r from-teal-500 to-blue-500">Done</Button>
                  )}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Badge variant="secondary" className="bg-teal-100 text-teal-700">
                <Shield className="w-3 h-3 mr-1" />
                Certified
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                <Heart className="w-3 h-3 mr-1" />
                Pain-Free Promise
              </Badge>
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
                <Star className="w-3 h-3 mr-1" />
                5-Star Rated
              </Badge>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentService}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="block"
                  >
                    {services[currentService]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <span className="text-gray-800 block mt-2">at Dentara</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience the future of dental care with our state-of-the-art technology, compassionate team, and
              commitment to your perfect smile.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-lg px-8 py-3"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Appointment
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Book Your Appointment</DialogTitle>
                  </DialogHeader>
                  {/* Booking form content would go here */}
                </DialogContent>
              </Dialog>

              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 border-teal-200 hover:bg-teal-50 bg-transparent"
              >
                <Play className="w-5 h-5 mr-2" />
                Explore Treatments
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Our Treatments
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive dental care tailored to your unique needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((treatment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-teal-50">
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-4">{treatment.icon}</div>
                    <CardTitle className="text-xl text-gray-800">{treatment.title}</CardTitle>
                    <CardDescription className="text-gray-600">{treatment.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-2xl font-bold text-teal-600 mb-4">{treatment.price}</div>
                    <Button variant="outline" className="w-full border-teal-200 hover:bg-teal-50 bg-transparent">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Dentist */}
      <section id="about" className="py-16 px-4 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=400&text=Dr.+Martinez"
                  alt="Dr. Martinez"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Award className="w-6 h-6 text-yellow-500" />
                    <div>
                      <div className="font-semibold text-sm">15+ Years</div>
                      <div className="text-xs text-gray-500">Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                  Meet Dr. Martinez
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  Leading the future of dental care with compassion and expertise
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Dr. Sofia Martinez brings over 15 years of experience in cosmetic and general dentistry. She graduated
                  summa cum laude from Harvard School of Dental Medicine and completed her residency at Massachusetts
                  General Hospital.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Her passion for creating beautiful, healthy smiles combined with the latest dental technology ensures
                  every patient receives world-class care in a comfortable environment.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="w-5 h-5 text-teal-500" />
                    <span className="font-semibold">5,000+</span>
                  </div>
                  <div className="text-sm text-gray-600">Happy Patients</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="flex items-center space-x-2 mb-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="font-semibold">4.9/5</span>
                  </div>
                  <div className="text-sm text-gray-600">Patient Rating</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge className="bg-teal-100 text-teal-700">Harvard Graduate</Badge>
                <Badge className="bg-blue-100 text-blue-700">Cosmetic Specialist</Badge>
                <Badge className="bg-purple-100 text-purple-700">Implant Certified</Badge>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Patient Stories
            </h2>
            <p className="text-xl text-gray-600">Real experiences from our valued patients</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <Card className="border-0 bg-gradient-to-br from-teal-50 to-blue-50 p-8">
                  <CardContent className="space-y-6">
                    <div className="flex justify-center space-x-1">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-xl italic text-gray-700 leading-relaxed">
                      "{testimonials[currentTestimonial].text}"
                    </blockquote>
                    <div>
                      <div className="font-semibold text-gray-800">{testimonials[currentTestimonial].name}</div>
                      <div className="text-sm text-teal-600">{testimonials[currentTestimonial].treatment}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-teal-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Smile Gallery */}
      <section id="gallery" className="py-16 px-4 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Smile Gallery
            </h2>
            <p className="text-xl text-gray-600">See the amazing transformations we've achieved</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="whitening">Whitening</TabsTrigger>
                <TabsTrigger value="veneers">Veneers</TabsTrigger>
                <TabsTrigger value="orthodontics">Braces</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-8">
                {galleryImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden border-0 shadow-xl">
                      <CardContent className="p-0">
                        <div className="grid md:grid-cols-2">
                          <div className="relative">
                            <Image
                              src={image.before || "/placeholder.svg"}
                              alt="Before treatment"
                              width={400}
                              height={300}
                              className="w-full h-64 object-cover"
                            />
                            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              Before
                            </div>
                          </div>
                          <div className="relative">
                            <Image
                              src={image.after || "/placeholder.svg"}
                              alt="After treatment"
                              width={400}
                              height={300}
                              className="w-full h-64 object-cover"
                            />
                            <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              After
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2">{image.treatment}</h3>
                          <p className="text-gray-600">{image.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">Everything you need to know about your dental care</p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="border border-teal-100 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:text-teal-600">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-teal-500 to-blue-500">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready for Your Perfect Smile?</h2>
            <p className="text-xl text-teal-100 mb-8">
              Join thousands of satisfied patients who trust Dentara for their dental care
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 text-lg px-8 py-3">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Consultation
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Schedule Your Consultation</DialogTitle>
                  </DialogHeader>
                  {/* Booking form would go here */}
                </DialogContent>
              </Dialog>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-teal-600 text-lg px-8 py-3 bg-transparent"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (555) 123-4567
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Smile className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold">Dentara</span>
              </div>
              <p className="text-gray-400">
                Creating beautiful, healthy smiles with advanced dental care and compassionate service.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="#services" className="block text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
                <Link href="#about" className="block text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
                <Link href="#gallery" className="block text-gray-400 hover:text-white transition-colors">
                  Gallery
                </Link>
                <Link href="#contact" className="block text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <div className="space-y-2">
                <div className="text-gray-400">General Dentistry</div>
                <div className="text-gray-400">Cosmetic Dentistry</div>
                <div className="text-gray-400">Orthodontics</div>
                <div className="text-gray-400">Dental Implants</div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-teal-400" />
                  <span className="text-gray-400">
                    123 Dental Ave, Suite 100
                    <br />
                    City, State 12345
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-teal-400" />
                  <span className="text-gray-400">(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-teal-400" />
                  <span className="text-gray-400">info@dentara.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-teal-400" />
                  <span className="text-gray-400">
                    Mon-Fri: 8AM-6PM
                    <br />
                    Sat: 9AM-3PM
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">© 2024 Dentara. All rights reserved.</div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="text-red-500 text-sm font-semibold">🚨 Emergency: (555) 123-4567</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
