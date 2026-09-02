"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-18 items-center justify-between py-3">
          <Link
  href="/"
  className="flex items-center gap-3"
>
  <Image
    src="/logo.png"
    alt="Dantalaya Logo"
    width={40}
    height={40}
    className="rounded-full"
    priority
  />

  <span className="font-serif text-2xl font-bold text-primary">
    Dantalaya
  </span>
</Link>

          <nav className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative text-sm font-medium text-muted-foreground transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-secondary after:transition-all after:duration-300 hover:text-primary hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:7001899267"
              className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg md:inline-flex"
            >
              <Phone size={16} />
              Call Now
            </a>

            <button
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              className="flex h-10 w-10 items-center justify-center rounded-full text-primary transition-colors hover:bg-muted md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </Container>

      {isMenuOpen && (
        <div className="border-t border-border bg-surface md:hidden">
          <div className="flex flex-col gap-1 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
              >
                {link.label}
              </Link>
            ))}

            <a
              href="tel:7001899267"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-center font-semibold text-primary-foreground"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
