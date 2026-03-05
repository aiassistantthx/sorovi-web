"use client";

import * as React from "react";
import { cn } from "@/lib/utils/cn";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div
      className={cn(
        "border border-white/10 rounded-xl overflow-hidden transition-all duration-300",
        isOpen && "border-[var(--brand-primary)]/50"
      )}
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left hover:bg-white/5 transition-colors"
      >
        <span className="text-lg font-medium text-white flex-1">{question}</span>
        <svg
          className={cn(
            "w-5 h-5 text-[var(--brand-primary)] transition-transform duration-300 flex-shrink-0 mt-1",
            isOpen && "rotate-180"
          )}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 pb-5 text-[var(--text-gray-300)] leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: Array<{ question: string; answer: string }>;
  allowMultiple?: boolean;
}

export function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openIndexes, setOpenIndexes] = React.useState<number[]>([]);

  const handleToggle = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndexes.includes(index)}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}
