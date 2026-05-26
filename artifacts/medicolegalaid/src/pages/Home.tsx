import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  Scale, Shield, AlertTriangle, BookOpen, 
  CheckCircle, ArrowRight, PlayCircle, 
  FileText, Users, Award, ChevronDown, Mail,
  Phone, MapPin, Clock, Building2, Medal, Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import logoImg from "@assets/logomla-removebg-preview_1778045570177.png";
import drVinayImg from "@assets/Dr_Vinay_pic_1_1776338533281.JPG";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-background text-foreground">
      <Navbar activePage="home" />

      {/* Hero Section — 2-column with embedded video */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 80% 50%, hsl(43 74% 49%) 0%, transparent 55%)" }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — Text */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 mb-6 backdrop-blur-sm">
                <AlertTriangle className="h-4 w-4 text-accent" />
                <span className="text-xs font-bold tracking-wider uppercase text-accent">Medical negligence cases are rising. Ignorance of law is no longer an excuse.</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-white leading-tight mb-6">
                Protect Your Practice. <br/>
                <span className="text-accent">Master Medico-Legal Knowledge.</span>
              </h1>
              <p className="text-lg text-white/75 mb-8 leading-relaxed font-light">
                Expert-led online masterclasses that help practising doctors navigate everyday legal challenges — confidently, safely, and professionally.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-7 h-12 rounded-sm font-semibold">
                  <a href="#enroll">Join Course Now</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base px-7 h-12 rounded-sm font-semibold border-white/30 text-white hover:bg-white/10 bg-transparent">
                  <a href="#course">Learn More</a>
                </Button>
              </div>
              {/* Quick contact strip */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                <a
                  href="https://wa.me/919108764680"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-[#25D366]">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
                <a href="mailto:contact@medicolegalaid.com" className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors">
                  <Mail className="h-4 w-4 text-accent" />
                  contact@medicolegalaid.com
                </a>
              </div>
            </motion.div>

            {/* Right — Video */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="relative">
                <div className="text-center mb-4">
                  <p className="text-accent font-semibold text-sm uppercase tracking-wider">Dr. Vinaykumar — Why This Course Matters</p>
                </div>
                <div className="relative w-full rounded-sm overflow-hidden border-2 border-accent/30 shadow-2xl" style={{ paddingTop: "56.25%" }}>
                  <iframe
                    src="https://drive.google.com/file/d/1-5iOvbyBMe51onyFqO9tXm7tH2VfJjQG/preview"
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay"
                    allowFullScreen
                    title="Dr. Vinaykumar explains the MedicoLegal Masterclass"
                  />
                </div>
                <div className="mt-4 flex items-center gap-2 justify-center text-white/60 text-xs">
                  <PlayCircle className="h-4 w-4 text-accent" />
                  Watch Dr. Vinaykumar explain why every doctor needs this course
                </div>
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
              <div className="absolute inset-0 bg-accent translate-x-4 translate-y-4 rounded-sm"></div>
              <img 
                src={drVinayImg}
                alt="Dr. Vinaykumar" 
                className="relative z-10 w-full h-[500px] object-cover object-top rounded-sm"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-serif font-bold text-primary mb-2">Meet Your Instructor</h2>
              <h3 className="text-2xl text-accent font-serif mb-6">Dr. Vinaykumar S</h3>
              
              <div className="space-y-5 text-lg text-foreground/80 leading-relaxed mb-8">
                <p>
                  Widely regarded as one of India's most trusted medicolegal advisors for the medical community. He is a top choice for medical associations and is regularly invited to speak on legal topics affecting doctors.
                </p>
                <p>
                  His rare combination of medical and legal expertise allows him to explain complex medicolegal issues with unmatched clarity and relevance for practising doctors.
                </p>
              </div>

              <div className="bg-white p-6 rounded-sm border-l-4 border-accent shadow-sm">
                <h4 className="font-bold text-primary mb-3">Qualifications</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent shrink-0"/> MBBS, DCH, DNB, MNAMS</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent shrink-0"/> Professor of Paediatrics</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent shrink-0"/> LLB</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent shrink-0"/> PGDMLE — National Law School of India University (NLSIU), Bengaluru</li>
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

      {/* Seminars teaser */}
      <section id="seminars" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-secondary/50 rounded-sm p-8 md:p-12 border border-border shadow-lg">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 mb-5">
                <Medal className="h-4 w-4 text-accent" />
                <span className="text-xs font-bold tracking-wider uppercase text-accent">For Hospitals &amp; Medical Associations</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">CME Medicolegal Workshop</h2>
              <p className="text-xl text-muted-foreground">Live, on-site medicolegal training for doctors — conducted by Dr. Vinaykumar S</p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  A full-day, interactive CME workshop for hospitals and medical associations. Designed for practising doctors, residents, and clinical staff who need practical, court-ready medicolegal knowledge — not just theory.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    { icon: Clock, label: "Full-Day Session", sub: "6–7 Hours" },
                    { icon: Users, label: "50–200 Doctors", sub: "& Clinical Staff" },
                    { icon: Building2, label: "On-Site", sub: "At Your Venue" },
                    { icon: Medal, label: "CME Credit Points", sub: "Applicable" },
                  ].map(({ icon: Icon, label, sub }, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white rounded-sm border border-border p-3">
                      <Icon className="h-5 w-5 text-accent shrink-0" />
                      <div>
                        <p className="font-semibold text-primary text-sm leading-tight">{label}</p>
                        <p className="text-xs text-muted-foreground">{sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="bg-white p-6 rounded-sm border border-border mb-6">
                  <h4 className="font-bold text-primary mb-4">Workshop covers</h4>
                  <ul className="space-y-2">
                    {[
                      "Consent Documentation — What Holds Up in Court",
                      "MLC Handling in OPD & IPD Settings",
                      "Medical Negligence — Civil vs Criminal Liability",
                      "MLC Documentation, Drafting & Model Formats",
                      "Top Medicolegal Mistakes and How to Avoid Them",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button asChild size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-sm">
                  <a href="/seminars">Know More</a>
                </Button>
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
              
              <div className="space-y-5 mb-10">
                <div className="flex items-center gap-4 text-foreground">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-border shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-muted-foreground uppercase tracking-wider">WhatsApp / Call</p>
                    <a href="https://wa.me/919108764680" className="font-medium text-primary hover:underline">+91 91087 64680</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-foreground">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-border shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-muted-foreground uppercase tracking-wider">Email</p>
                    <a href="mailto:contact@medicolegalaid.com" className="font-medium text-primary hover:underline">contact@medicolegalaid.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-foreground">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-border shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-muted-foreground uppercase tracking-wider">Location</p>
                    <p className="font-medium">Bengaluru, Karnataka, India</p>
                  </div>
                </div>
              </div>
              <div className="bg-primary/5 border border-primary/10 rounded-sm p-5 mb-6">
                <p className="font-bold text-primary text-sm mb-1">Instructor</p>
                <p className="font-semibold text-foreground">Dr. Vinaykumar S</p>
                <p className="text-sm text-muted-foreground">MBBS, DCH, DNB, MNAMS | Professor of Paediatrics</p>
                <p className="text-sm text-muted-foreground">LLB | PGDMLE — National Law School of India University (NLSIU), Bengaluru</p>
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
              <div className="flex items-center gap-3 mb-6">
                <img src={logoImg} alt="MedicoLegalAid Logo" className="h-14 w-14 object-contain brightness-0 invert" />
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
                <li><a href="#seminars" className="hover:text-accent transition-colors">Seminars</a></li>
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
      <WhatsAppButton />
    </div>
  );
};

export default Home;
