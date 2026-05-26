import React, { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  CheckCircle, Clock, Users, Building2, Medal, Award,
  ArrowRight, Mail, Phone, MapPin, ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import logoImg from "@assets/logomla-removebg-preview_1778045570177.png";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";

const topics = [
  "Legal Framework, Consumer Protection Act & Landmark Judgments",
  "Valid Consent Documentation — What Holds Up in Court",
  "MLC Handling in OPD & IPD Settings",
  "Medical Negligence — Civil vs Criminal Liability, Bolam Test",
  "MLC Documentation — Drafting, Preservation & Model Formats",
  "Clinical Specialty Scenarios (Customisable)",
  "Top Medicolegal Mistakes Doctors Make — and How to Avoid Them",
  "Confidence Building for Real-World Medicolegal Challenges",
];

const facts = [
  "It is a legal and ethical duty for doctors to report an MLC to the police immediately — the patient's consent is NOT required.",
  "A single mistake in consent documentation can lead to massive compensation claims.",
  "An MLC report prepared by a doctor is crucial documentary evidence in criminal trials.",
];

const faqs = [
  { q: "Can the workshop be customised for our hospital's specialty?", a: "Yes. Topics are tailored to your hospital's specialty mix and risk areas — whether you're a surgical centre, maternity hospital, or multispecialty institution." },
  { q: "How many attendees can the workshop accommodate?", a: "Workshops are designed for 50 to 200 doctors and clinical staff. For larger groups, we can discuss split sessions." },
  { q: "Is CME credit applicable?", a: "CME Credit Points are applicable to this workshop. Details can be confirmed on enquiry based on your state medical council." },
  { q: "How far in advance do we need to book?", a: "We recommend enquiring at least 4–6 weeks in advance to allow adequate planning, coordination, and material preparation." },
  { q: "Will all attendees receive a certificate?", a: "Yes. A Certificate of Participation is issued to every doctor and clinical staff member who attends the workshop." },
];

export default function SeminarsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-background text-foreground">
      <Navbar activePage="seminars" />

      {/* Hero */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-primary">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 70% 50%, hsl(43 74% 49%) 0%, transparent 60%)" }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 mb-6">
              <Medal className="h-4 w-4 text-accent" />
              <span className="text-xs font-bold tracking-wider uppercase text-accent">For Hospitals &amp; Medical Associations</span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-white leading-tight mb-6">
              CME Medicolegal <br />
              <span className="text-accent">Workshop</span>
            </h1>
            <p className="text-xl text-white/75 mb-4 leading-relaxed font-light">
              Live, on-site medicolegal training for doctors — conducted by Dr. Vinaykumar S
            </p>
            <p className="text-lg text-white/60 mb-10 leading-relaxed font-light">
              A full-day, interactive CME workshop designed for hospitals and medical associations. Built for practising doctors, residents, and clinical staff who need practical, court-ready medicolegal knowledge — not just theory.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-7 h-12 rounded-sm font-semibold">
                <a href="#enquiry">Request a Workshop</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base px-7 h-12 rounded-sm font-semibold border-white/30 text-white hover:bg-white/10 bg-transparent">
                <a href="#topics">See Topics</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Workshop Snapshot — 4 stat cards */}
      <section className="py-16 bg-secondary border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { icon: Clock, stat: "Full-Day Session", sub: "6–7 Hours" },
              { icon: Users, stat: "50–200 Participants", sub: "Doctors & Clinical Staff" },
              { icon: Building2, stat: "On-Site", sub: "At Your Hospital or Venue" },
              { icon: Medal, stat: "CME Credit Points", sub: "Applicable" },
            ].map(({ icon: Icon, stat, sub }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white border border-border rounded-sm p-6 text-center shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <p className="font-bold text-primary text-base leading-tight">{stat}</p>
                <p className="text-sm text-muted-foreground mt-1">{sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-3">Who Should Attend</h2>
            <p className="text-muted-foreground text-lg">This workshop is designed for institutions, not individuals.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-secondary/50 border border-border rounded-sm p-8"
            >
              <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-5">
                <Building2 className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Hospitals &amp; Nursing Homes</h3>
              <p className="text-muted-foreground leading-relaxed">In-house CME, induction training, or medicolegal compliance sessions for medical and nursing staff. Ideal for hospitals looking to proactively reduce risk and upskill their clinical teams.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-secondary/50 border border-border rounded-sm p-8"
            >
              <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-5">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Medical Associations</h3>
              <p className="text-muted-foreground leading-relaxed">IMA Chapters, Specialty Societies — member education events, annual conferences, or dedicated medicolegal workshops. A structured, high-value addition to any medical association calendar.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Topics Covered */}
      <section id="topics" className="py-24 bg-secondary">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-3">Topics Covered</h2>
            <p className="text-muted-foreground text-lg">Topics can be customised to your hospital's specialty and risk areas.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {topics.map((topic, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-4 bg-white border border-border rounded-sm p-5"
              >
                <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-foreground leading-relaxed">{topic}</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 flex items-start gap-4 bg-primary text-primary-foreground rounded-sm p-5 max-w-xl">
            <Award className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <span className="font-medium">Certificate of Participation issued to all attendees</span>
          </div>
        </div>
      </section>

      {/* What Your Institution Gains */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif font-bold mb-8">What Your Institution Gains</h2>
              <ul className="space-y-5">
                {[
                  "Reduced medicolegal risk exposure for all clinical staff",
                  "Practical upgrades to consent and MLC documentation practices",
                  "Doctors confident in handling police, courts, and patient disputes",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-primary-foreground/85 leading-relaxed text-lg">{item}</span>
                  </li>
                ))}
                <li className="flex items-start gap-4 pt-4 border-t border-primary-foreground/20">
                  <ArrowRight className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/85 leading-relaxed">
                    Complements the{" "}
                    <Link href="/hospitals" className="text-accent underline underline-offset-2 hover:text-accent/80 transition-colors">
                      Hospital Medicolegal Audit
                    </Link>
                    {" "}— for complete institutional coverage.
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-sm p-8"
            >
              <h3 className="text-xl font-bold mb-6">Why Dr. Vinaykumar</h3>
              <p className="text-primary-foreground/70 mb-6 leading-relaxed">Widely regarded as one of India's most trusted medicolegal advisors for the medical community.</p>
              <ul className="space-y-4">
                {[
                  "MBBS, DCH, DNB, MNAMS | LLB | PGDMLE — NLSIU Bengaluru",
                  "Professor of Paediatrics — rare dual expertise: practising clinician + medicolegal expert",
                  "Regularly invited by hospitals and medical associations across India",
                  "Case-based, practical delivery — not a law lecture",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-primary-foreground/80 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-3">What Every Doctor Must Know</h2>
            <p className="text-muted-foreground">Ignorance of law is never a defense — knowledge is your strongest protection.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {facts.map((fact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-border rounded-sm p-6 shadow-sm"
              >
                <p className="text-foreground leading-relaxed">{fact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-3">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-border rounded-sm overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-5 text-left bg-secondary/30 hover:bg-secondary/60 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-primary pr-4">{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="p-5 bg-white border-t border-border">
                    <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry" className="py-24 bg-secondary border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-serif font-bold text-primary mb-4">Request a CME Workshop</h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Fill in your details and we'll respond within 24 hours with a proposal tailored to your institution.
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
                    <p className="font-bold text-sm text-muted-foreground uppercase tracking-wider">Based In</p>
                    <p className="font-medium">Bengaluru, Karnataka, India</p>
                  </div>
                </div>
              </div>
              <div className="bg-primary/5 border border-primary/10 rounded-sm p-5">
                <p className="font-bold text-primary text-sm mb-1">Conducted By</p>
                <p className="font-semibold text-foreground">Dr. Vinaykumar S</p>
                <p className="text-sm text-muted-foreground">MBBS, DCH, DNB, MNAMS | Professor of Paediatrics</p>
                <p className="text-sm text-muted-foreground">LLB | PGDMLE — National Law School of India University (NLSIU), Bengaluru</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-xl border border-border">
              <h3 className="text-2xl font-bold text-primary mb-6">Send Workshop Enquiry</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="sem-name">Full Name <span className="text-destructive">*</span></Label>
                    <Input id="sem-name" placeholder="Dr. First Last" required className="rounded-sm" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sem-designation">Designation <span className="text-destructive">*</span></Label>
                    <Input id="sem-designation" placeholder="e.g. Medical Superintendent" required className="rounded-sm" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="sem-org">Hospital / Association Name <span className="text-destructive">*</span></Label>
                    <Input id="sem-org" placeholder="e.g. City General Hospital" required className="rounded-sm" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sem-city">City <span className="text-destructive">*</span></Label>
                    <Input id="sem-city" placeholder="e.g. Bengaluru" required className="rounded-sm" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="sem-attendees">Estimated Attendees <span className="text-destructive">*</span></Label>
                    <select
                      id="sem-attendees"
                      required
                      className="w-full h-10 rounded-sm border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Select range…</option>
                      <option value="50-100">50–100</option>
                      <option value="100-150">100–150</option>
                      <option value="150-200">150–200</option>
                      <option value="200+">200+</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sem-date">Preferred Date Range <span className="text-destructive">*</span></Label>
                    <Input id="sem-date" placeholder="e.g. March 2026" required className="rounded-sm" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sem-topics">Specialty Focus or Topics of Interest <span className="text-xs text-muted-foreground">(optional)</span></Label>
                  <Textarea id="sem-topics" placeholder="e.g. Consent documentation, MLC handling for ICU staff…" className="min-h-[90px] rounded-sm" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="sem-phone">Phone Number <span className="text-destructive">*</span></Label>
                    <Input id="sem-phone" type="tel" placeholder="+91 98765 43210" required className="rounded-sm" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sem-email">Email Address <span className="text-destructive">*</span></Label>
                    <Input id="sem-email" type="email" placeholder="doctor@hospital.com" required className="rounded-sm" />
                  </div>
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-sm">
                  Send Workshop Enquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 border-t border-primary-foreground/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-5 w-fit">
                <img src={logoImg} alt="MedicoLegalAid Logo" className="h-12 w-12 object-contain brightness-0 invert" />
                <span className="font-serif text-xl font-bold text-white tracking-tight">MedicoLegalAid</span>
              </Link>
              <p className="text-primary-foreground/70 max-w-sm">
                Empowering Indian doctors with practical, case-based medicolegal knowledge to protect their practice and reputation.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-primary-foreground/70">
                <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
                <li><Link href="/#course" className="hover:text-accent transition-colors">Course</Link></li>
                <li><Link href="/hospitals" className="hover:text-accent transition-colors">Hospital Audit</Link></li>
                <li><a href="#enquiry" className="hover:text-accent transition-colors">Request Workshop</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">© {new Date().getFullYear()} MedicoLegalAid. All rights reserved.</p>
            <p className="text-primary-foreground/50 text-xs text-center md:text-right max-w-md">
              Workshop content is for educational purposes only and does not constitute legal advice.
            </p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
}
