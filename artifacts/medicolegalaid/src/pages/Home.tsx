import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  Scale, Shield, AlertTriangle, BookOpen, 
  CheckCircle, ArrowRight, PlayCircle, 
  FileText, Users, Award, ChevronDown, Mail,
  Phone, MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Scale className="h-8 w-8 text-primary" />
            <span className="font-serif text-2xl font-bold text-primary tracking-tight">
              MedicoLegalAid
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#course" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Course</a>
            <a href="#modules" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Modules</a>
            <a href="#hospitals" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">For Hospitals</a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>
          <div>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-sm">
              <a href="#enroll">Join Course Now</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-40 lg:pt-48 lg:pb-56 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-bg.png" 
            alt="Golden gavel on medical books" 
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-primary/40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent-foreground mb-6 backdrop-blur-sm">
                <AlertTriangle className="h-4 w-4 text-accent" />
                <span className="text-xs font-bold tracking-wider uppercase text-accent">Medical negligence cases are rising. Ignorance of law is no longer an excuse.</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6">
                Protect Your Practice. <br/>
                <span className="text-accent">Master Medico-Legal Knowledge.</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-10 leading-relaxed max-w-2xl font-light">
                Expert-led online masterclasses that help practising doctors navigate everyday legal challenges — confidently, safely, and professionally.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="xl" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 h-14 rounded-sm font-semibold">
                  <a href="#enroll">Join Course Now</a>
                </Button>
                <Button asChild size="xl" variant="outline" className="text-lg px-8 h-14 rounded-sm font-semibold border-white/20 text-primary hover:bg-white/10 hover:text-white bg-white">
                  <a href="#course">Learn More</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why This Matters (Stats/Alert Section) */}
      <section id="why-matters" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-serif font-bold text-primary mb-6">The Legal Risk Every Doctor Faces</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center shrink-0 mt-1">
                    <Shield className="h-5 w-5 text-destructive" />
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Doctors are being taken to court, paying huge compensations, and facing criminal charges.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center shrink-0 mt-1">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Patients increasingly use AI tools to detect errors, leading to legal harassment.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center shrink-0 mt-1">
                    <FileText className="h-5 w-5 text-destructive" />
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    A single mistake in consent, communication, or documentation can destroy years of reputation.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-sm shadow-xl border border-border relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-destructive/5 rounded-bl-full"></div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-6">Recent Court Compensations</h3>
              <ul className="space-y-6">
                <li className="flex justify-between items-center border-b border-border pb-4">
                  <span className="font-medium text-foreground">Kunal Saha vs Dr. Sukumar Mukherjee</span>
                  <span className="text-destructive font-bold text-lg">₹11 crore</span>
                </li>
                <li className="flex justify-between items-center border-b border-border pb-4">
                  <span className="font-medium text-foreground">V. Krishnakumar vs State of TN</span>
                  <span className="text-destructive font-bold text-lg">₹1.38 cr + 18%</span>
                </li>
                <li className="flex justify-between items-center border-b border-border pb-4">
                  <span className="font-medium text-foreground">Indu Sharma vs Apollo Hospital</span>
                  <span className="text-destructive font-bold text-lg">₹1 crore</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium text-foreground">Maharaja Agrasen Hospital vs Master Rishabh</span>
                  <span className="text-destructive font-bold text-lg">₹76 lakhs</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section id="course" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">Medico-Legal Masterclasses for Doctors</h2>
            <p className="text-xl text-primary-foreground/80 font-light">
              8 focused modules. Case-based. Practical. Pre-recorded for flexible learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: PlayCircle, title: "Pre-recorded Classes", desc: "Learn at your own pace, perfectly suited for busy medical schedules." },
              { icon: BookOpen, title: "8 Focused Modules", desc: "Structured curriculum covering every critical medicolegal aspect." },
              { icon: Award, title: "Expert-led", desc: "Taught by Dr. Vinaykumar, combining medical and legal expertise." },
              { icon: FileText, title: "Case-based Learning", desc: "Practical insights drawn from real-world court cases and judgments." },
              { icon: Users, title: "Coordinator Support", desc: "Dedicated support team to assist you throughout the course." },
              { icon: CheckCircle, title: "Recognized Certification", desc: "Receive a certificate recognized for every practising doctor." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-sm backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <feature.icon className="h-10 w-10 text-accent mb-6" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-primary-foreground/70">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section id="modules" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-6">The Curriculum</h2>
            <p className="text-lg text-muted-foreground">Comprehensive coverage of the legal realities you face daily.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { num: "01", title: "Legal Framework for Doctors", desc: "How the Constitution protects patient rights; how doctors came under the Consumer Protection Act; key changes under BNS vs IPC; landmark Supreme Court judgments." },
              { num: "02", title: "Consent", desc: "Principles of valid consent; required disclosures; increasing validity before high-risk procedures; model consent forms." },
              { num: "03", title: "Handling MLC in Hospitals", desc: "Definition of MLC; police intimation vs FIR; correct OPD/IPD protocols; handling brought-dead cases and dying declarations." },
              { num: "04", title: "Negligence — Concept & Understanding", desc: "Meaning of medical negligence; civil vs criminal negligence; contributory negligence; Bolam and Bolitho tests." },
              { num: "05", title: "MLC Documentation", desc: "Legal importance; essential components; accurate drafting; common errors; proper preservation; model formats." },
              { num: "06", title: "Special Clinical Scenarios", desc: "Practical safeguards for complex cases; special situations; real-world scenario-based learning." },
              { num: "07", title: "Top Medico-Legal Mistakes", desc: "Common medico-legal mistakes; consequences; special situations; practical safeguards." },
              { num: "08", title: "Confidence Building & Real-World Practice", desc: "Building confidence for real-world medico-legal challenges; practical strategies; final case consolidation." }
            ].map((mod, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex gap-6 p-6 border border-border rounded-sm hover:border-primary/50 transition-colors bg-secondary/30"
              >
                <div className="text-4xl font-serif font-bold text-primary/20 group-hover:text-accent transition-colors">
                  {mod.num}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{mod.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{mod.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Instructor */}
      <section id="about" className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 rounded-sm"></div>
              <img 
                src="/doctor-legal.png" 
                alt="Dr. Vinaykumar reviewing legal documents" 
                className="relative z-10 w-full h-[500px] object-cover rounded-sm grayscale-[20%] contrast-125"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-serif font-bold text-primary mb-2">Meet Your Instructor</h2>
              <h3 className="text-2xl text-accent font-serif mb-6">Dr. Vinaykumar</h3>
              
              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed mb-8">
                <p>
                  Widely regarded as one of India's most trusted medicolegal advisors for the medical community. He is a top choice for medical associations and is regularly invited to speak on legal topics affecting doctors.
                </p>
                <p>
                  His rare combination of medical and legal expertise allows him to explain complex medicolegal issues with unmatched clarity and relevance for practising doctors.
                </p>
              </div>

              <div className="bg-white p-6 rounded-sm border-l-4 border-accent shadow-sm">
                <h4 className="font-bold text-primary mb-2">Credentials</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent"/> LLB</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent"/> Diploma in Medical Law and Ethics (PGDMLE)</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent"/> National Law School of India University (NLSIU), Bengaluru</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Legal Facts */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-serif font-bold mb-6">What Every Doctor Must Know</h2>
            <p className="text-xl text-primary-foreground/80 font-light">Ignorance of law is never a defense — knowledge is your strongest protection.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              "It is a legal and ethical duty for doctors to report an MLC to the police immediately — the patient's consent is NOT required.",
              "No hospital can refuse emergency treatment, regardless of medicolegal implications (Supreme Court mandate).",
              "An MLC report prepared by a doctor is crucial documentary evidence in criminal trials.",
              "A single mistake in consent documentation can lead to massive compensation claims."
            ].map((fact, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-primary-foreground/5 p-8 border border-primary-foreground/10 rounded-sm"
              >
                <p className="text-lg leading-relaxed">{fact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Trusted by Practising Doctors Across India</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto text-center">
            {[
              "Designed for real clinical scenarios",
              "Recommended for every doctor, regardless of specialty",
              "Taught by a practising medicolegal expert",
              "Recognized certification program"
            ].map((text, i) => (
              <div key={i} className="flex flex-col items-center gap-3 p-4">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-2">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <p className="font-medium text-foreground/80 text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospital Audit */}
      <section id="hospitals" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-secondary/50 rounded-sm p-8 md:p-12 border border-border shadow-lg">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Hospital Medicolegal Audit</h2>
              <p className="text-xl text-muted-foreground">Is your hospital legally protected? Find out before a case does.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-foreground mb-8 leading-relaxed">
                  We offer comprehensive medicolegal audits for hospitals and healthcare institutions. Our audit identifies gaps in consent procedures, MLC documentation, emergency protocols, staff training, and legal compliance — before they become court cases.
                </p>
                <div className="bg-white p-6 rounded-sm border border-border">
                  <h4 className="font-bold text-primary mb-4">Who it's for</h4>
                  <p className="text-muted-foreground">Hospitals, nursing homes, multispecialty clinics, and healthcare groups who want to proactively manage medicolegal risk.</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-xl text-primary mb-6">What's included in the audit:</h4>
                <ul className="space-y-4">
                  {[
                    "Review of patient consent forms and documentation practices",
                    "MLC case handling protocols — OPD and IPD",
                    "Emergency treatment refusal compliance",
                    "Staff training assessment on medicolegal obligations",
                    "Documentation review: MLC reports, dying declarations",
                    "Legal compliance gap analysis & written report"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button asChild size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-sm">
                    <a href="#contact">Request an Audit</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Enrollment */}
      <section id="enroll" className="py-24 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-serif font-bold text-primary mb-6">Ready to Protect Your Practice?</h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                For group class inquiries, registration support, hospital audits, or questions, contact our course coordinator.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4 text-foreground">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-border">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-muted-foreground uppercase tracking-wider">Email Us</p>
                    <p className="font-medium">contact@medicolegalaid.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-foreground">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-border">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-muted-foreground uppercase tracking-wider">Location</p>
                    <p className="font-medium">Bengaluru, India</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-accent/10 p-6 rounded-sm border border-accent/20">
                <p className="text-sm text-foreground/80 font-medium italic">
                  Note: The information provided in these medicolegal masterclasses is for educational purposes only and should not be construed as legal advice for individual cases.
                </p>
              </div>
            </div>

            <div id="contact" className="bg-white p-8 rounded-sm shadow-xl border border-border">
              <h3 className="text-2xl font-bold text-primary mb-6">Get in Touch</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Dr. First Last" className="rounded-sm" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="doctor@hospital.com" className="rounded-sm" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input id="phone" type="tel" placeholder="+91" className="rounded-sm" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="specialty">Specialty / Institution</Label>
                  <Input id="specialty" placeholder="e.g. Cardiology / City Hospital" className="rounded-sm" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="How can we help you?" className="min-h-[120px] rounded-sm" />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-sm">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 border-t border-primary-foreground/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Scale className="h-8 w-8 text-accent" />
                <span className="font-serif text-2xl font-bold text-white tracking-tight">
                  MedicoLegalAid
                </span>
              </div>
              <p className="text-primary-foreground/70 max-w-sm">
                Empowering Indian doctors with practical, case-based medicolegal knowledge to protect their practice and reputation.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-primary-foreground/70">
                <li><a href="#" className="hover:text-accent transition-colors">Home</a></li>
                <li><a href="#course" className="hover:text-accent transition-colors">Course</a></li>
                <li><a href="#modules" className="hover:text-accent transition-colors">Modules</a></li>
                <li><a href="#hospitals" className="hover:text-accent transition-colors">For Hospitals</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-primary-foreground/70">
                <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Refund Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-primary-foreground/10 text-center md:text-left md:flex justify-between items-center text-primary-foreground/60 text-sm">
            <p>2024 MedicoLegalAid.com. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed for the medical community of India.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
