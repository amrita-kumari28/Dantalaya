import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/917001899267"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Dantalaya on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30 group-hover:opacity-0" />
      <MessageCircle size={28} className="relative" />
    </a>
  );
}
