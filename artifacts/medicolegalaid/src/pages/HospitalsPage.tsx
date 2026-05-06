import React, { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Shield, CheckCircle, AlertTriangle, FileText,
  ClipboardList, Search, Scale, Users, BarChart3,
  Lock, Mail, Phone, ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import logoImg from "@assets/logomla-removebg-preview_1778045570177.png";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";

const services = [
  { icon: <FileText className="h-6 w-6" />, title: "Consent Documentation", desc: "Review of all patient consent forms for legal validity, disclosure adequacy, and procedural specificity." },
  { icon: <ClipboardList className="h-6 w-6" />, title: "MLC Case Handling", desc: "Evaluation of MLC documentation and protocols across OPD, IPD, and emergency — ensuring statutory compliance." },
  { icon: <Shield className="h-6 w-6" />, title: "Medical Records Compliance", desc: "Assessment of record accuracy and legal sufficiency — case sheets, discharge summaries, and operation notes." },
  { icon: <Scale className="h-6 w-6" />, title: "Statutory Compliance", desc: "Verification of compliance with Clinical Establishment Act, PCPNDT, NMC/INC regulations, and Consumer Protection Act." },
  { icon: <AlertTriangle className="h-6 w-6" />, title: "Emergency Protocols", desc: "Review of emergency department protocols against Supreme Court mandates on treatment refusal and triage." },
  { icon: <Users className="h-6 w-6" />, title: "Staff Training Gaps", desc: "Identification of medicolegal knowledge gaps in clinical and administrative staff that create institutional risk." },
  { icon: <BarChart3 className="h-6 w-6" />, title: "Consumer Forum Risk", desc: "Analysis of your hospital's exposure to NCDRC / State forum complaints, with documentation gap mapping." },
  { icon: <Lock className="h-6 w-6" />, title: "Actionable Risk Report", desc: "A written report with High / Medium / Low risk ratings and a prioritised corrective action roadmap." },
];

const steps = [
  { num: "01", title: "Confidential Consultation", desc: "We begin with a signed NDA and a call to understand your facility's size, specialty mix, and specific concerns." },
  { num: "02", title: "Document Review", desc: "Consent forms, MLC registers, sample records, and internal protocols are shared for pre-audit analysis." },
  { num: "03", title: "On-Site Audit", desc: "Structured interviews with key personnel and review of physical and electronic records across departments." },
  { num: "04", title: "Report & Debrief", desc: "A written report (delivered in 7–10 days) with risk ratings, recommendations, and a leadership debrief session." },
];

const faqs = [
  { q: "How long does the audit take?", a: "Typically 2–5 business days on-site, with a written report delivered within 7–10 working days." },
  { q: "Is the audit confidential?", a: "Yes. All findings are covered by an NDA signed before the process begins." },
  { q: "Do you audit smaller nursing homes and clinics?", a: "Yes. Packages are scaled to the size and complexity of your facility — from single-specialty clinics upward." },
  { q: "Can this help in ongoing litigation?", a: "It is a proactive compliance tool. Demonstrating a commitment to legal standards can be valuable in establishing your standard of care." },
];

export default function HospitalsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", hospital: "", role: "", phone: "", email: "", message: "" });

  return (
    <div className="flex flex-col min-h-screen font-sans bg-background text-foreground">
      <Navbar activePage="hospitals" />

      {/* Hero */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-10"
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
              <Shield className="h-4 w-4 text-accent" />
              <span className="text-xs font-bold tracking-wider uppercase text-accent">Hospital Medicolegal Services</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-5">
              Is Your Hospital<br />
              <span className="text-accent">Legally Protected?</span>
            </h1>
            <p className="text-lg text-white/75 mb-8 max-w-2xl font-light leading-relaxed">
              A structured medicolegal audit by Dr. Vinaykumar S (LLB, PGDMLE — NLSIU) identifies every legal gap in your hospital's documentation, consent practices, MLC handling, and regulatory compliance — before they become court cases.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 h-12 rounded-sm font-semibold">
                <a href="#contact">Request an Audit</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-base px-8 h-12 rounded-sm font-semibold bg-transparent">
                <a href="#services">What We Audit</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-accent/10 border-y border-accent/20 py-8">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-6 text-center max-w-4xl mx-auto">
            {[
              { stat: "₹11 Crore", label: "Largest compensation in Indian medical negligence" },
              { stat: "Rising", label: "Consumer forum cases against hospitals every year" },
              { stat: "1 Report", label: "All findings, risks, and fixes — delivered in writing" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <p className="text-3xl font-serif font-bold text-primary mb-1">{item.stat}</p>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-3">What the Audit Covers</h2>
            <p className="text-muted-foreground">Eight areas of institutional legal risk — each reviewed, documented, and rated for severity.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
                className="bg-background border border-border rounded-sm p-5 hover:border-primary/40 hover:shadow-sm transition-all group"
              >
                <div className="w-10 h-10 rounded-sm bg-primary/5 flex items-center justify-center mb-4 text-primary group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                  {s.icon}
                </div>
                <h3 className="font-bold text-primary mb-2 text-sm">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-3">How the Audit Works</h2>
            <p className="text-muted-foreground">A transparent four-step process — from consultation to written report.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative"
              >
                <p className="text-4xl font-serif font-bold text-accent/30 mb-3">{step.num}</p>
                <h3 className="font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + Contact */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">

            {/* FAQ */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-2">Common Questions</h2>
              <p className="text-muted-foreground mb-8">Answers to questions hospital leadership often asks.</p>
              <div className="space-y-2">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-border rounded-sm overflow-hidden">
                    <button
                      className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-primary hover:bg-muted/40 transition-colors"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span className="text-sm pr-4">{faq.q}</span>
                      <ChevronDown className={`h-4 w-4 shrink-0 text-accent transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-border bg-muted/20">
                        <p className="pt-3">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Enquiry Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-2">Request an Audit</h2>
              <p className="text-muted-foreground mb-6">Fill in the form and our team will respond within 24 hours to discuss your hospital's needs.</p>

              <div className="flex flex-col gap-3 mb-8">
                <a href="https://wa.me/919108764680" className="flex items-center gap-3 text-sm text-primary font-medium hover:underline">
                  <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center border border-border shrink-0">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  +91 91087 64680
                </a>
                <a href="mailto:contact@medicolegalaid.com" className="flex items-center gap-3 text-sm text-primary font-medium hover:underline">
                  <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center border border-border shrink-0">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  contact@medicolegalaid.com
                </a>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label htmlFor="name" className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Your Name</Label>
                    <Input id="name" placeholder="Dr. / Mr. / Ms." className="rounded-sm" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="role" className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Role</Label>
                    <Input id="role" placeholder="Medical Director, CMO…" className="rounded-sm" />
                  </div>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="hospital" className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Hospital / Institution Name</Label>
                  <Input id="hospital" placeholder="Name and city" className="rounded-sm" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label htmlFor="phone" className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Phone / WhatsApp</Label>
                    <Input id="phone" type="tel" placeholder="+91" className="rounded-sm" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="email" className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="rounded-sm" />
                  </div>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="msg" className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Anything you'd like us to know?</Label>
                  <Textarea id="msg" placeholder="Facility size, specific concerns, urgency…" rows={3} className="rounded-sm resize-none" />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-sm">
                  Send Enquiry
                </Button>
                <p className="text-xs text-muted-foreground text-center">All enquiries are treated in strict confidence.</p>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-10 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <img src={logoImg} alt="MedicoLegalAid Logo" className="h-10 w-10 object-contain" />
                <span className="font-serif text-lg font-bold">MedicoLegalAid</span>
              </div>
              <p className="text-sm text-primary-foreground/70 max-w-xs">Expert medicolegal education and compliance services for India's medical community.</p>
            </div>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              <a href="https://wa.me/919108764680" className="hover:text-accent transition-colors">+91 91087 64680</a>
              <a href="mailto:contact@medicolegalaid.com" className="hover:text-accent transition-colors">contact@medicolegalaid.com</a>
              <span>Bengaluru, Karnataka, India</span>
            </div>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              <Link href="/" className="hover:text-accent transition-colors">Masterclass Course</Link>
              <Link href="/hospitals" className="hover:text-accent transition-colors">Hospital Audit</Link>
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            </div>
          </div>
          <div className="pt-6 border-t border-primary-foreground/10 text-xs text-primary-foreground/50 flex flex-col sm:flex-row justify-between gap-2">
            <p>The information provided is for educational purposes and does not constitute legal advice for individual cases.</p>
            <p>© 2024 MedicoLegalAid.com</p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
}
