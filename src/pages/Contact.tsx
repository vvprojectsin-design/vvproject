import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import * as React from "react";
import { useState } from "react";

const companyContact = {
  owner: "Medapati Saisubbireddy",
  phonePrimary: "+91 95739 30371",
  phoneSecondary: "+91 94947 51980",
  email: "vvcspvtltd@gmail.com",
  website: "vvprojects.in",
  registerNo: "37AALCV9479J1Z9",
  address: "1-150, Nagashesha Building Street, Ravulapalem, East Godavari, Andhra Pradesh - 533238",
};

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data to a server
    alert("Thank you for your message! Our team will get back to you soon.");
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-20 premium-gradient text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Get in touch with us for reliable industrial services and project support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-8">Get in Touch</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Our Office</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {companyContact.address}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Call Us</h4>
                      <p className="text-slate-600 text-sm">{companyContact.phonePrimary}</p>
                      <p className="text-slate-600 text-sm">{companyContact.phoneSecondary}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Email Us</h4>
                      <p className="text-slate-600 text-sm">{companyContact.email}</p>
                      <p className="text-slate-600 text-sm">{companyContact.website}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Register No</h4>
                      <p className="text-slate-600 text-sm">{companyContact.registerNo}</p>
                      <p className="text-slate-600 text-sm">{companyContact.owner}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Working Hours</h4>
                      <p className="text-slate-600 text-sm">Mon - Sat: 9:00 AM - 6:00 PM</p>
                      <p className="text-slate-600 text-sm">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="p-8 md:p-12 bg-slate-50 rounded-3xl border shadow-sm">
                <h2 className="text-2xl font-bold text-primary mb-8">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        placeholder="John Doe" 
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        required
                        className="bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        required
                        className="bg-white"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="Project Inquiry" 
                      value={formState.subject}
                      onChange={(e) => setFormState({...formState, subject: e.target.value})}
                      required
                      className="bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project requirements..." 
                      rows={6}
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      required
                      className="bg-white"
                    />
                  </div>
                  <Button type="submit" className="w-full md:w-auto bg-accent hover:bg-accent/90 text-white px-10 h-14 text-lg">
                    Send Message <Send className="ml-2" size={18} />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-slate-200 relative">
        <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-bold">
          <div className="text-center">
            <MapPin size={48} className="mx-auto mb-4 opacity-20" />
            <p className="uppercase tracking-widest text-xs">Google Maps Integration Placeholder</p>
            <p className="text-sm mt-2">Ravulapalem, East Godavari, Andhra Pradesh - 533238</p>
          </div>
        </div>
      </section>
    </div>
  );
}
