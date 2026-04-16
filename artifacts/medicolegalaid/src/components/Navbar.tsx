import React, { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImg from "@assets/Company_logo_1776338533281.png";

interface NavbarProps {
  activePage?: "home" | "hospitals";
}

export default function Navbar({ activePage = "home" }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "About", href: activePage === "hospitals" ? "/#about" : "#about", isRouter: activePage === "hospitals" },
    { label: "Course", href: activePage === "hospitals" ? "/#course" : "#course", isRouter: activePage === "hospitals" },
    { label: "Modules", href: activePage === "hospitals" ? "/#modules" : "#modules", isRouter: activePage === "hospitals" },
    { label: "For Hospitals", href: "/hospitals", isRouter: true },
    { label: "Contact", href: activePage === "hospitals" ? "/#contact" : "#contact", isRouter: activePage === "hospitals" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <img src={logoImg} alt="MedicoLegalAid Logo" className="h-14 w-14 object-contain" />
          <span className="font-serif text-xl font-bold text-primary tracking-tight hidden sm:block">
            MedicoLegalAid
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) =>
            link.isRouter ? (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  (activePage === "hospitals" && link.label === "For Hospitals")
                    ? "text-primary border-b-2 border-accent pb-0.5"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            )
          )}
        </div>

        {/* Right side: CTA + hamburger */}
        <div className="flex items-center gap-3">
          <Button asChild size="lg" className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-sm">
            <a href={activePage === "hospitals" ? "/#enroll" : "#enroll"}>Join Course Now</a>
          </Button>
          <button
            className="md:hidden p-2 rounded-sm text-primary hover:bg-muted transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-border/40 bg-background/98 backdrop-blur px-4 py-4 flex flex-col gap-1 shadow-lg">
          {links.map((link) =>
            link.isRouter ? (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-3 px-2 text-base font-medium border-b border-border/30 transition-colors ${
                  activePage === "hospitals" && link.label === "For Hospitals"
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 px-2 text-base font-medium text-muted-foreground hover:text-primary border-b border-border/30 transition-colors"
              >
                {link.label}
              </a>
            )
          )}
          <Button asChild size="lg" className="mt-4 w-full bg-primary text-primary-foreground font-semibold rounded-sm">
            <a href={activePage === "hospitals" ? "/#enroll" : "#enroll"} onClick={() => setOpen(false)}>
              Join Course Now
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
}
