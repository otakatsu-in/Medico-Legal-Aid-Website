import React, { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Shield, CheckCircle, AlertTriangle, FileText,
  Users, ClipboardList, Search, Award, ArrowRight,
  ChevronDown, Mail, Phone, Building2, Scale,
  Stethoscope, BookOpen, BarChart3, Lock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import logoImg from "@assets/Company_logo_1776338533281.png";
import WhatsAppButton from "@/components/WhatsAppButton";

const faqs = [
  {
    q: "How long does the audit take?",
    a: "Depending on the size of the facility, an audit typically takes 2–5 business days on-site, followed by a written report within 7–10 working days."
  },
  {
    q: "Will our staff need to be present?",
    a: "Key personnel (medical superintendent, nursing head, records in-charge) are required for interviews. Other staff may be consulted as needed."
  },
  {
    q: "Is the audit confidential?",
    a: "Yes. All findings, documents, and discussions are strictly confidential and covered by a non-disclosure agreement signed before the audit begins."
  },
  {
    q: "Do you audit smaller nursing homes and clinics?",
    a: "Absolutely. We offer scalable audit packages tailored to the size and complexity of your facility — from single-specialty clinics to multispecialty hospitals."
  },
  {
    q: "What happens after the audit?",
    a: "You receive a comprehensive written report with findings, risk ratings (High / Medium / Low), and specific corrective action recommendations. We also offer a follow-up review session."
  },
  {
    q: "Can this protect us in ongoing litigation?",
    a: "While the audit is a proactive compliance tool and not a legal defence strategy, demonstrating a commitment to legal compliance can be valuable in establishing your hospital's standard of care."
  }
];

const services = [
  {
    icon: <FileText className="h-7 w-7" />,
    title: "Consent Documentation Audit",
    desc: "Review of all patient consent forms for legal validity — checking language, disclosure adequacy, procedural specificity, and signatures. Covers routine, high-risk, and emergency consent procedures.",
    items: ["Informed consent form review", "High-risk procedure disclosures", "Emergency consent compliance", "Minor patient consent protocols"]
  },
  {
    icon: <ClipboardList className="h-7 w-7" />,
    title: "MLC Case Handling Review",
    desc: "Evaluation of your hospital's MLC (Medico-Legal Case) documentation and protocols across OPD, IPD, and emergency settings — ensuring compliance with statutory obligations.",
    items: ["OPD & IPD MLC documentation", "Police intimation protocols", "Brought-dead case procedures", "Dying declaration handling"]
  },
  {
    icon: <Shield className="h-7 w-7" />,
    title: "Medical Records Compliance",
    desc: "Assessment of medical record accuracy, completeness, and legal sufficiency — including discharge summaries, operation notes, nursing records, and case sheet standards.",
    items: ["Case sheet and nursing notes", "Discharge summary standards", "Operation note completeness", "Record retention practices"]
  },
  {
    icon: <Scale className="h-7 w-7" />,
    title: "Statutory Compliance Review",
    desc: "Verification of compliance with relevant Indian healthcare regulations and acts that every hospital must adhere to.",
    items: ["Clinical Establishment Act", "PCPNDT Act compliance", "NMC / INC regulations", "Consumer Protection Act preparedness"]
  },
  {
    icon: <AlertTriangle className="h-7 w-7" />,
    title: "Emergency Protocol Assessment",
    desc: "Review of emergency department protocols in light of Supreme Court mandates — ensuring your hospital cannot be held liable for refusal of treatment or procedural lapses.",
    items: ["Emergency treatment refusal compliance", "Triage documentation protocols", "Critical care consent pathways", "Supreme Court mandate adherence"]
  },
  {
    icon: <Users className="h-7 w-7" />,
    title: "Staff Training Assessment",
    desc: "Evaluation of how well your clinical and administrative staff understand their medicolegal obligations — identifying knowledge gaps that create institutional risk.",
    items: ["Doctor medicolegal awareness", "Nursing staff protocol knowledge", "Administrative staff readiness", "Recommended training plan"]
  },
  {
    icon: <BarChart3 className="h-7 w-7" />,
    title: "Consumer Forum Risk Assessment",
    desc: "Analysis of your hospital's exposure to consumer complaints and NCDRC cases — with specific attention to documentation gaps that have led to adverse verdicts.",
    items: ["NCDRC/State forum readiness", "Billing practice review", "Complaint-prone scenario mapping", "Prior incident risk analysis"]
  },
  {
    icon: <Lock className="h-7 w-7" />,
    title: "Actionable Risk Report",
    desc: "A comprehensive written report categorising all findings with risk severity ratings (High / Medium / Low) and specific, prioritised recommendations for corrective action.",
    items: ["Executive summary for management", "Departmental risk breakdown", "Corrective action roadmap", "Follow-up review session"]
  }
];

const steps = [
  { num: "01", title: "Initial Consultation", desc: "We begin with a confidential call to understand your facility's size, specialty mix, past incidents, and specific concerns. An NDA is signed before any discussion." },
  { num: "02", title: "Document Collection", desc: "Your team shares relevant sample records, consent forms, MLC registers, and internal protocols for pre-audit review." },
  { num: "03", title: "On-Site Audit", desc: "Our expert conducts structured interviews with key personnel, reviews physical and electronic records, and observes documentation workflows across departments." },
  { num: "04", title: "Analysis & Findings", desc: "All findings are analysed, risk-rated (High / Medium / Low), and mapped to relevant legal standards, regulations, and landmark court judgments." },
  { num: "05", title: "Written Report Delivery", desc: "You receive a comprehensive report within 7–10 working days — with an executive summary, departmental breakdown, and a prioritised corrective action plan." },
  { num: "06", title: "Follow-Up Session", desc: "A debrief session with hospital leadership to walk through findings, answer questions, and plan implementation of recommendations." }
];

const clients = [
  { icon: <Building2 className="h-6 w-6" />, label: "Multispecialty Hospitals" },
  { icon: <Stethoscope className="h-6 w-6" />, label: "Nursing Homes" },
  { icon: <BookOpen className="h-6 w-6" />, label: "Teaching Institutions" },
  { icon: <Users className="h-6 w-6" />, label: "Specialty Clinics" },
  { icon: <Award className="h-6 w-6" />, label: "Healthcare Groups" },
  { icon: <Shield className="h-6 w-6" />, label: "Diagnostic Centres" }
];

export default function HospitalsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-background text-foreground">

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <img src={logoImg} alt="MedicoLegalAid Logo" className="h-14 w-14 object-contain" />
            <span className="font-serif text-xl font-bold text-primary tracking-tight hidden sm:block">
              MedicoLegalAid
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">About</Link>
            <Link href="/#course" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Course</Link>
            <Link href="/#modules" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Modules</Link>
            <Link href="/hospitals" className="text-sm font-medium text-primary border-b-2 border-accent pb-0.5 transition-colors">For Hospitals</Link>
            <Link href="/#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Contact</Link>
          </div>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-sm">
            <a href="/#enroll">Join Course Now</a>
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-28 pb-36 overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 70% 50%, hsl(43 74% 49%) 0%, transparent 60%)" }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 mb-6">
              <Shield className="h-4 w-4 text-accent" />
              <span className="text-xs font-bold tracking-wider uppercase text-accent">Hospital Medicolegal Services</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
              Is Your Hospital<br />
              <span className="text-accent">Legally Protected?</span>
            </h1>
            <p className="text-xl text-white/75 mb-10 leading-relaxed max-w-2xl font-light">
              A comprehensive medicolegal audit identifies every legal gap in your hospital's documentation, consent, MLC handling, and compliance — before they become court cases.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 h-14 rounded-sm font-semibold">
                <a href="#contact">Request an Audit</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 h-14 rounded-sm font-semibold bg-transparent">
                <a href="#services">View Services</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Risk Banner */}
      <section className="bg-accent/10 border-y border-accent/20 py-10">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-6 text-center max-w-4xl mx-auto">
            {[
              { stat: "₹11 Crore", label: "Largest compensation in Indian medical negligence" },
              { stat: "Rising", label: "Consumer forum cases against hospitals — year on year" },
              { stat: "1 Report", label: "All findings, risks & fixes — delivered in writing" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="text-3xl font-serif font-bold text-primary mb-1">{item.stat}</p>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What is a Hospital Legal Audit */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-serif font-bold text-primary mb-6">What is a Hospital Medicolegal Audit?</h2>
              <div className="space-y-5 text-lg text-foreground/80 leading-relaxed">
                <p>
                  A medicolegal audit is a structured, expert-led review of a hospital's legal compliance — examining every process and document that could become the basis of a negligence claim, consumer complaint, or criminal prosecution.
                </p>
                <p>
                  Conducted by Dr. Vinaykumar (LLB + PGDMLE, NLSIU), the audit goes well beyond a checklist. It identifies the specific gaps in your current practice that courts and consumer forums have repeatedly used against hospitals in India.
                </p>
                <p>
                  The result is a confidential, written report with risk ratings and an actionable roadmap — so your hospital can fix problems before they find you in a courtroom.
                </p>
              </div>
              <div className="mt-8 p-5 bg-accent/10 border border-accent/20 rounded-sm">
                <p className="text-sm font-semibold text-primary italic">
                  "A single gap in consent documentation or MLC handling is enough for a case worth crores. Proactive compliance costs a fraction of what litigation does."
                </p>
                <p className="mt-2 text-xs text-muted-foreground">— Dr. Vinaykumar, Medicolegal Expert</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-primary mb-5">The audit covers gaps that lead to:</h3>
              {[
                "Consumer forum and NCDRC complaints",
                "Criminal charges under IPC / BNS against doctors",
                "Massive compensation awards in civil courts",
                "Loss of hospital license or accreditation",
                "Reputation damage and staff morale collapse",
                "Regulatory action from NMC or State Medical Councils"
              ].map((risk, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-muted/50 border border-border rounded-sm">
                  <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{risk}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">What the Audit Covers</h2>
            <p className="text-lg text-muted-foreground">Eight areas of institutional legal risk — each reviewed in depth, documented, and rated for severity.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
                className="bg-background border border-border rounded-sm p-7 hover:border-primary/40 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-sm bg-primary/5 flex items-center justify-center mb-5 text-primary group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-5 leading-relaxed text-sm">{service.desc}</p>
                <ul className="space-y-2">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Process */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">How the Audit Works</h2>
            <p className="text-lg text-muted-foreground">A structured, transparent six-step process — from initial consultation to a final written report.</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                  className="flex gap-5 p-6 border border-border rounded-sm bg-muted/20 hover:border-accent/40 transition-colors"
                >
                  <div className="text-4xl font-serif font-bold text-primary/15 shrink-0 leading-none mt-1">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Who Should Get an Audit?</h2>
            <p className="text-lg text-primary-foreground/75 font-light">Any healthcare facility that handles patients, generates medical records, or employs clinical staff has medicolegal exposure.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {clients.map((client, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex flex-col items-center gap-3 p-6 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  {client.icon}
                </div>
                <p className="font-semibold text-center text-sm">{client.label}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-primary-foreground/70 text-sm max-w-xl mx-auto">
              If your hospital has faced a complaint, inquiry, or adverse outcome in the past — or simply wants to reduce its legal exposure before it does — this audit is for you.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">Everything you need to know before requesting an audit.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="border border-border rounded-sm overflow-hidden bg-background"
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/30 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  data-testid={`faq-toggle-${i}`}
                >
                  <span className="font-semibold text-primary pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-border pt-4">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-serif font-bold text-primary mb-6">Request a Hospital Audit</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Fill in the form and our team will reach out within 24 hours to discuss your hospital's needs, schedule a confidential consultation, and provide a tailored audit proposal.
              </p>

              <div className="space-y-5 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center border border-border shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-xs text-muted-foreground uppercase tracking-wider mb-0.5">WhatsApp / Call</p>
                    <a href="https://wa.me/919108764680" className="font-medium text-primary hover:underline">+91 91087 64680</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center border border-border shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Email</p>
                    <a href="mailto:contact@medicolegalaid.com" className="font-medium text-primary hover:underline">contact@medicolegalaid.com</a>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  "Response within 24 hours",
                  "Strict confidentiality — NDA signed upfront",
                  "Customised proposal for your facility size",
                  "Conducted by a certified medicolegal expert"
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-foreground/80">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-muted/30 p-8 rounded-sm shadow-xl border border-border"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">Audit Enquiry Form</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="hosp-name">Your Name</Label>
                    <Input id="hosp-name" placeholder="Dr. / Mr. / Ms." className="rounded-sm" data-testid="input-name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hosp-designation">Designation</Label>
                    <Input id="hosp-designation" placeholder="Medical Superintendent" className="rounded-sm" data-testid="input-designation" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hosp-hospital">Hospital / Institution Name</Label>
                  <Input id="hosp-hospital" placeholder="City Hospital & Research Centre" className="rounded-sm" data-testid="input-hospital" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="hosp-email">Email Address</Label>
                    <Input id="hosp-email" type="email" placeholder="admin@hospital.com" className="rounded-sm" data-testid="input-email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hosp-phone">Phone / WhatsApp</Label>
                    <Input id="hosp-phone" type="tel" placeholder="+91" className="rounded-sm" data-testid="input-phone" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hosp-city">City & State</Label>
                  <Input id="hosp-city" placeholder="e.g. Bengaluru, Karnataka" className="rounded-sm" data-testid="input-city" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hosp-size">Approximate Hospital Bed Strength</Label>
                  <Input id="hosp-size" placeholder="e.g. 50 beds / 200 beds" className="rounded-sm" data-testid="input-size" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hosp-message">Specific Concerns or Requirements (Optional)</Label>
                  <Textarea id="hosp-message" placeholder="Any past complaints, ongoing litigation, or specific departments of concern..." className="min-h-[100px] rounded-sm" data-testid="input-message" />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-sm" data-testid="button-submit">
                  Submit Audit Request
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  All information shared is strictly confidential. An NDA is signed before any consultation begins.
                </p>
              </form>
            </motion.div>
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
                <span className="font-serif text-2xl font-bold text-white tracking-tight">MedicoLegalAid</span>
              </div>
              <p className="text-primary-foreground/70 max-w-sm">
                Expert medicolegal guidance for doctors and healthcare institutions across India.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-primary-foreground/70">
                <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
                <li><Link href="/#course" className="hover:text-accent transition-colors">Course</Link></li>
                <li><Link href="/hospitals" className="hover:text-accent transition-colors">For Hospitals</Link></li>
                <li><Link href="/#contact" className="hover:text-accent transition-colors">Contact</Link></li>
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
          <div className="pt-8 border-t border-primary-foreground/10 text-primary-foreground/60 text-sm space-y-2">
            <p>The information provided is for educational and informational purposes only and does not constitute legal advice for individual cases.</p>
            <p>2024 MedicoLegalAid.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <WhatsAppButton />
    </div>
  );
}
