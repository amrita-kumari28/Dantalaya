"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import type { FAQ } from "@/data/services";

type FaqAccordionProps = {
  faqs: FAQ[];
};

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = open === index;

        return (
          <div
            key={faq.question}
            className={`overflow-hidden rounded-2xl border bg-surface transition-all duration-300 ${
              isOpen
                ? "border-secondary/50 shadow-md"
                : "border-border hover:border-secondary/30"
            }`}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span className="font-medium leading-6 text-foreground">
                {faq.question}
              </span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                  isOpen
                    ? "rotate-45 bg-primary text-primary-foreground"
                    : "bg-muted text-primary"
                }`}
              >
                <Plus size={18} />
              </span>
            </button>

            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 leading-relaxed text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
