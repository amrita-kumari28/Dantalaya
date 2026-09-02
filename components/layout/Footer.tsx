import Link from "next/link";
import { MapPin, Phone, MessageCircle, Mail, Clock } from "lucide-react";
import Container from "@/components/ui/Container";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <span
                aria-hidden
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground text-base font-semibold text-primary"
              >
                D
              </span>
              <span className="font-serif text-2xl font-bold">Dantalaya</span>
            </Link>

            <p className="mt-4 max-w-xs leading-relaxed text-primary-foreground/75">
              Crafting beautiful smiles with modern, compassionate and
              affordable dental care in Asansol.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold">Quick Links</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold">Contact</h3>
            <ul className="mt-5 flex flex-col gap-4 text-primary-foreground/75">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
                <span>Asansol, West Bengal</span>
              </li>
              <li>
                <a
                  href="tel:7001899267"
                  className="flex items-start gap-3 transition-colors hover:text-primary-foreground"
                >
                  <Phone size={18} className="mt-0.5 shrink-0 text-accent" />
                  +91 70018 99267
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917001899267"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 transition-colors hover:text-primary-foreground"
                >
                  <MessageCircle size={18} className="mt-0.5 shrink-0 text-accent" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:dantalaya.asansol@gmail.com"
                  className="flex items-start gap-3 break-all transition-colors hover:text-primary-foreground"
                >
                  <Mail size={18} className="mt-0.5 shrink-0 text-accent" />
                  dantalaya.asansol@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-serif text-lg font-semibold">Clinic Hours</h3>
            <div className="mt-5 flex items-start gap-3 text-primary-foreground/75">
              <Clock size={18} className="mt-0.5 shrink-0 text-accent" />
              <div className="leading-relaxed">
                <p className="font-medium text-primary-foreground">
                  Tuesday – Sunday
                </p>
                <p>10 AM – 1 PM</p>
                <p>6 PM – 8 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 py-6 text-center text-sm text-primary-foreground/70">
          © {new Date().getFullYear()} Dantalaya. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}
