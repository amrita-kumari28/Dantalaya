import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dantalaya.in"),
  title: {
    default: "Dantalaya | Dental Clinic in Asansol",
    template: "%s | Dantalaya",
  },

  description:
    "Dantalaya is a modern dental clinic in Asansol offering dental check-ups, root canal treatment, smile designing, crowns, bridges, fillings, preventive care and more.",

  keywords: [
    "Dentist Asansol",
    "Dental Clinic Asansol",
    "Root Canal Treatment",
    "Dental Checkup",
    "Smile Designing",
    "Crowns and Bridges",
    "Dental Fillings",
    "Dantalaya",
  ],

  openGraph: {
    title: "Dantalaya | Dental Clinic in Asansol",
    description:
      "Modern and compassionate dental care in Asansol led by Dr. Shreya Kumari.",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  themeColor: "#16697a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full bg-background antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
