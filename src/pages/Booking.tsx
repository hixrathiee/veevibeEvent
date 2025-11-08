import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { toast } from "sonner";
import { Calendar, Users, DollarSign, MapPin, Clock, CheckCircle2, Sparkles, Mail, Phone, FileText, ArrowRight, ArrowLeft, Heart, Briefcase, Music, Trophy, Cake, Star, Award, Shield, TrendingUp, Target } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    budget: "",
    venue: "",
    requirements: "",
  });

  // Auto-save to localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('bookingFormData');
    if (savedData) {
      try {
        setFormData(JSON.parse(savedData));
        toast.info("Your previous form data has been restored");
      } catch (e) {
        console.error('Failed to parse saved form data');
      }
    }
  }, []);

  useEffect(() => {
    if (Object.values(formData).some(val => val !== "")) {
      localStorage.setItem('bookingFormData', JSON.stringify(formData));
    }
  }, [formData]);

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email";
      }
      if (formData.phone && !/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/.test(formData.phone)) {
        newErrors.phone = "Please enter a valid phone number";
      }
    }

    if (step === 2) {
      if (!formData.eventType) newErrors.eventType = "Event type is required";
      if (!formData.eventDate) {
        newErrors.eventDate = "Event date is required";
      } else {
        const selectedDate = new Date(formData.eventDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selectedDate < today) {
          newErrors.eventDate = "Event date must be in the future";
        }
      }
      if (formData.guestCount && parseInt(formData.guestCount) < 1) {
        newErrors.guestCount = "Guest count must be at least 1";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    } else {
      toast.error("Please fix the errors before continuing");
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateStep(1) || !validateStep(2)) {
      toast.error("Please fill in all required fields correctly");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Clear localStorage after successful submission
      localStorage.removeItem('bookingFormData');

      toast.success("Booking request submitted! We'll contact you shortly to process payment.", {
        description: `Check your email (${formData.email}) for confirmation details.`,
        duration: 5000,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        eventDate: "",
        guestCount: "",
        budget: "",
        venue: "",
        requirements: "",
      });
      setCurrentStep(1);
      setErrors({});
    } catch (error) {
      toast.error("Failed to submit booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 gradient-luxury relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Book Your Dream Event
            </h1>
            <p className="text-xl text-white/90 font-sans max-w-3xl mx-auto leading-relaxed">
              Let's bring your vision to life. Fill out the form and we'll create a custom proposal tailored to your needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Progress Steps */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full max-w-3xl mx-auto">
              <div className="flex items-center justify-between w-full">
                {[
                  { num: 1, label: "Personal Info", icon: Mail },
                  { num: 2, label: "Event Details", icon: Calendar },
                  { num: 3, label: "Requirements", icon: FileText },
                ].map((step, index) => (
                  <React.Fragment key={step.num}>
                    <div className="flex flex-col items-center flex-shrink-0 relative">
                      <div
                        className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300 z-10 ${
                          currentStep >= step.num
                            ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white shadow-lg scale-110"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {currentStep > step.num ? (
                          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                        ) : (
                          <step.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                        )}
                      </div>
                      <span className={`text-[10px] xs:text-xs mt-1.5 font-medium whitespace-nowrap ${
                        currentStep >= step.num ? "text-foreground" : "text-muted-foreground"
                      }`}>
                        {step.label}
                      </span>
                    </div>
                    {index < 2 && (
                      <div 
                        className={`h-1 flex-1 mx-1 sm:mx-2 md:mx-4 max-w-[50px] sm:max-w-[100px] md:max-w-[150px] transition-all duration-300 ${
                          currentStep > step.num 
                            ? "bg-gradient-to-r from-yellow-400 to-yellow-600" 
                            : "bg-muted"
                        }`}
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-4 sm:p-8 md:p-12 shadow-2xl border-border/50 bg-card backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <AnimatePresence mode="wait">
                  {/* Personal Information */}
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center">
                          <Mail className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-card-foreground">
                          Personal Information
                        </h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                        <div>
                          <label className="block text-sm font-semibold text-card-foreground mb-2">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className={`h-12 bg-background/50 border-border focus:border-yellow-400 transition-all ${errors.name ? "border-red-500" : ""
                              }`}
                          />
                          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-card-foreground mb-2">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className={`h-12 bg-background/50 border-border focus:border-yellow-400 transition-all ${errors.email ? "border-red-500" : ""
                              }`}
                          />
                          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-card-foreground mb-2">
                            Phone Number
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                            <Input
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+91 2345670890"
                              className={`h-12 pl-11 bg-background/50 border-border focus:border-yellow-400 transition-all ${errors.phone ? "border-red-500" : ""
                                }`}
                            />
                          </div>
                          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                        </div>
                      </div>

                      <div className="flex justify-end mt-8">
                        <Button
                          type="button"
                          onClick={nextStep}
                          variant="luxury"
                          className="h-11 sm:h-12 px-4 sm:px-8 w-full sm:w-auto text-sm sm:text-base"
                        >
                          <span className="hidden sm:inline">Next Step</span>
                          <ArrowRight className="w-5 h-5 sm:ml-2" />
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* Event Details */}
                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center gap-3 mb-6 mt-8">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-card-foreground">
                          Event Details
                        </h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-card-foreground mb-2">
                            Event Type <span className="text-red-500">*</span>
                          </label>
                          <Select
                            value={formData.eventType}
                            onValueChange={(value) => handleSelectChange('eventType', value)}
                          >
                            <SelectTrigger className={`h-12 bg-background/50 border-border focus:border-yellow-400 transition-all ${errors.eventType ? "border-red-500" : ""
                              }`}>
                              <SelectValue placeholder="Select event type" />
                            </SelectTrigger>
                            <SelectContent className="bg-popover border-border">
                              <SelectItem value="wedding">
                                <div className="flex items-center gap-2">
                                  <Heart className="w-4 h-4" />
                                  <span>Wedding</span>
                                </div>
                              </SelectItem>
                              <SelectItem value="corporate">
                                <div className="flex items-center gap-2">
                                  <Briefcase className="w-4 h-4" />
                                  <span>Corporate Event</span>
                                </div>
                              </SelectItem>
                              <SelectItem value="entertainment">
                                <div className="flex items-center gap-2">
                                  <Music className="w-4 h-4" />
                                  <span>Entertainment</span>
                                </div>
                              </SelectItem>
                              <SelectItem value="sports">
                                <div className="flex items-center gap-2">
                                  <Trophy className="w-4 h-4" />
                                  <span>Sports Event</span>
                                </div>
                              </SelectItem>
                              <SelectItem value="birthday">
                                <div className="flex items-center gap-2">
                                  <Cake className="w-4 h-4" />
                                  <span>Birthday Party</span>
                                </div>
                              </SelectItem>
                              <SelectItem value="other">
                                <div className="flex items-center gap-2">
                                  <Sparkles className="w-4 h-4" />
                                  <span>Other</span>
                                </div>
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.eventType && <p className="text-red-500 text-xs mt-1">{errors.eventType}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-card-foreground mb-2">
                            Event Date <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground pointer-events-none" />
                            <Input
                              name="eventDate"
                              type="date"
                              value={formData.eventDate}
                              onChange={handleChange}
                              min={new Date().toISOString().split('T')[0]}
                              className={`h-12 pl-11 bg-background/50 border-border focus:border-yellow-400 transition-all ${errors.eventDate ? "border-red-500" : ""
                                }`}
                            />
                          </div>
                          {errors.eventDate && <p className="text-red-500 text-xs mt-1">{errors.eventDate}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-card-foreground mb-2">
                            Expected Guests
                          </label>
                          <div className="relative">
                            <Users className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                            <Input
                              name="guestCount"
                              type="number"
                              value={formData.guestCount}
                              onChange={handleChange}
                              placeholder="100"
                              min="1"
                              className={`h-12 pl-11 bg-background/50 border-border focus:border-yellow-400 transition-all ${errors.guestCount ? "border-red-500" : ""
                                }`}
                            />
                          </div>
                          {errors.guestCount && <p className="text-red-500 text-xs mt-1">{errors.guestCount}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-card-foreground mb-2">
                            Budget Range
                          </label>
                          <div className="relative">
                            <DollarSign className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground z-10 pointer-events-none" />
                            <Select
                              value={formData.budget}
                              onValueChange={(value) => handleSelectChange('budget', value)}
                            >
                              <SelectTrigger className="h-12 pl-11 bg-background/50 border-border focus:border-yellow-400 transition-all">
                                <SelectValue placeholder="Select budget" />
                              </SelectTrigger>
                              <SelectContent className="bg-popover border-border">
                                <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                                <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                                <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                                <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                                <SelectItem value="100k+">$100,000+</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-semibold text-card-foreground mb-2">
                            Preferred Venue
                          </label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                            <Input
                              name="venue"
                              value={formData.venue}
                              onChange={handleChange}
                              placeholder="Leave blank for venue recommendations"
                              className="h-12 pl-11 bg-background/50 border-border focus:border-yellow-400 transition-all"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row justify-between gap-3 mt-8">
                        <Button
                          type="button"
                          onClick={prevStep}
                          variant="outline"
                          className="h-11 sm:h-12 px-4 sm:px-8 w-full sm:w-auto order-2 sm:order-1 text-sm sm:text-base"
                        >
                          <ArrowLeft className="w-5 h-5 sm:mr-2" />
                          <span className="hidden sm:inline">Previous</span>
                        </Button>
                        <Button
                          type="button"
                          onClick={nextStep}
                          variant="luxury"
                          className="h-11 sm:h-12 px-4 sm:px-8 w-full sm:w-auto order-1 sm:order-2 text-sm sm:text-base"
                        >
                          <span className="hidden sm:inline">Next Step</span>
                          <ArrowRight className="w-5 h-5 sm:ml-2" />
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* Additional Requirements */}
                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center gap-3 mb-4 mt-8">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                          <FileText className="w-5 h-5 text-white" />
                        </div>
                        <label className="text-lg sm:text-xl md:text-2xl font-bold text-card-foreground">
                          Special Requirements
                        </label>
                      </div>
                      <Textarea
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleChange}
                        placeholder="Tell us about your vision, special requests, dietary requirements, accessibility needs, entertainment preferences, etc."
                        rows={6}
                        className="bg-background/50 border-border focus:border-yellow-400 transition-all resize-none"
                      />

                      {/* Payment Info Notice */}
                      <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 p-4 md:p-6 rounded-xl border-2 border-yellow-200 dark:border-yellow-800 mt-6">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 text-left">

                          {/* Clock Icon */}
                          <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mx-12  md:mx-0">
                            <Clock className="w-6 h-6 text-white" />
                          </div>

                          {/* Content */}
                          <div>
                            <h4 className="font-bold text-card-foreground mb-2 text-sm sm:text-base md:text-lg mx-3">
                              What Happens Next?
                            </h4>
                            <ul className="text-sm text-muted-foreground font-sans space-y-2">
                              <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                <span>Our team reviews your request within 24 hours</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                <span>Receive a detailed proposal with pricing</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                <span>Secure payment via credit card or bank transfer</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>


                      <div className="flex flex-col sm:flex-row justify-between gap-3 mt-8">
                        <Button
                          type="button"
                          onClick={prevStep}
                          variant="outline"
                          className="h-11 sm:h-12 px-4 sm:px-8 w-full sm:w-auto order-2 sm:order-1 text-sm sm:text-base"
                        >
                          <ArrowLeft className="w-5 h-5 sm:mr-2" />
                          <span className="hidden sm:inline">Previous</span>
                        </Button>
                        <Button
                          variant="luxury"
                          type="submit"
                          disabled={isSubmitting}
                          className="h-11 sm:h-14 px-4 sm:px-12 text-sm sm:text-lg font-bold shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto order-1 sm:order-2"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              <span className="hidden sm:inline sm:ml-2">Submitting...</span>
                            </>
                          ) : (
                            <>
                              <Sparkles className="w-5 h-5" />
                              <span className="hidden sm:inline sm:ml-2">Submit Booking Request</span>
                            </>
                          )}
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground mt-4 text-center">
                        By submitting, you agree to our terms and privacy policy
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </Card>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <p className="text-sm text-muted-foreground mb-4">Trusted by leading brands and individuals</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              {[
                { icon: Award, text: "Award Winning" },
                { icon: Shield, text: "Secure Payments" },
                { icon: Star, text: "5-Star Rated" },
                { icon: Target, text: "100% Satisfaction" }
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                  <badge.icon className="w-4 h-4" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;
