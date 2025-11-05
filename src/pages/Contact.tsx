import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    toast.success("Thank you! We'll get back to you soon.", {
      icon: <CheckCircle2 className="text-secondary" />,
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Luxury Lane, Premium District, City 12345",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (234) 567-890",
      link: "tel:+1234567890",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@prestigeevents.com",
      link: "mailto:info@prestigeevents.com",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Mon - Fri: 9AM - 6PM",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 gradient-luxury">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-white">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground font-sans max-w-3xl mx-auto text-white">
            Let's start planning your extraordinary event together
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index}
                className="p-8 text-center hover-lift bg-card border-luxury group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${info.bgColor} mb-4 transition-elegant group-hover:scale-110`}>
                  <info.icon className={`h-8 w-8 ${info.color}`} />
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-3">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-muted-foreground hover:text-secondary transition-elegant block font-sans"
                  >
                    {info.details}
                  </a>
                ) : (
                  <p className="text-muted-foreground font-sans">{info.details}</p>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
<section className="py-20 px-4">
  <div className="container mx-auto w-6xl">
    <div className="grid lg:grid-cols-2 gap-16 items-start">

      {/* Left Column - Info + Map */}
      <div className="space-y-10 animate-slide-up">
        <div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Let's Create Something <span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you're planning a corporate event, wedding, or social gathering,
            our team is here to make it unforgettable. Fill out the form and we'll
            get back to you within 24 hours.
          </p>
        </div>

        {/* Features */}
        <div className="space-y-4">
          {[
            { title: "Quick Response", desc: "We respond to all inquiries within 24 hours" },
            { title: "Free Consultation", desc: "Get expert advice at no cost" },
            { title: "Custom Solutions", desc: "Tailored plans for your unique needs" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start space-x-4 p-4 rounded-lg bg-muted/50 border border-border/50 hover:shadow-md hover:bg-muted/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Map Integration */}
        <div className="rounded-xl overflow-hidden shadow-luxury border border-border/40 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1635959523651!5m2!1sen!2sus"
            width="100%"
            height="170"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Office Location"
          ></iframe>
        </div>
      </div>

      {/* Right Column - Form */}
      <Card className="p-8 md:p-10 shadow-luxury-lg border-luxury bg-card animate-scale-in">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-card-foreground mb-2">
                Full Name <span className="text-destructive">*</span>
              </label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="h-12 bg-background/50 border-border/50 focus:border-secondary transition-elegant"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-card-foreground mb-2">
                Email Address <span className="text-destructive">*</span>
              </label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="xyz@gmail.com"
                required
                className="h-12 bg-background/50 border-border/50 focus:border-secondary transition-elegant"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-card-foreground mb-2">
                Phone Number
              </label>
              <Input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 xxxxxxxx23"
                className="h-12 bg-background/50 border-border/50 focus:border-secondary transition-elegant"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-card-foreground mb-2">
                Subject
              </label>
              <Input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Event Inquiry"
                className="h-12 bg-background/50 border-border/50 focus:border-secondary transition-elegant"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-card-foreground mb-2">
                Your Message <span className="text-destructive">*</span>
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your event and how we can help..."
                rows={5}
                required
                className="bg-background/50 border-border/50 focus:border-secondary transition-elegant resize-none"
              />
            </div>
          </div>

          <Button variant="luxury" size="lg" type="submit" className="w-full group">
            Send Message
            <Send className="ml-2 group-hover:translate-x-1 transition-elegant" size={18} />
          </Button>
        </form>
      </Card>
    </div>
  </div>
</section>


      <Footer />
    </div>
  );
};

export default Contact;
