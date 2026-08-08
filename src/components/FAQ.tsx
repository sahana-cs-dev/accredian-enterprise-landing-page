"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { SectionEyebrow } from "./WhyEnterprise";

const FAQS = [
  {
    q: "Which academic institutions co-certify programs?",
    a: "Curricula are co-designed with faculty from IITs and IIMs, and certificates carry co-branding from the partnering institution for that domain.",
  },
  {
    q: "Can training content integrate with our corporate LMS?",
    a: "Yes. Content and completion data can be exported via SCORM or xAPI so progress shows up inside your existing LMS alongside other internal training.",
  },
  {
    q: "What's the minimum team size for a dedicated cohort?",
    a: "We typically run dedicated enterprise cohorts starting at 25 learners. Smaller teams can join a shared cohort in the same domain.",
  },
  {
    q: "How is program ROI actually measured?",
    a: "We track completion, engagement, assessment scores, and skill velocity, then tie outcomes back to the KPIs your L&D and business stakeholders agreed on at kickoff.",
  },
  {
    q: "How long does it take to launch a first cohort?",
    a: "Most enterprise cohorts launch 3–5 weeks after the diagnostic phase, depending on how much curriculum customization is required.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-b border-line bg-paper-dim/40 py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <SectionEyebrow index="06" label="Questions procurement usually asks" />
        <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
          Frequently asked
        </h2>

        <div className="mt-10 border-t border-line">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className="border-b border-line">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-base font-medium text-ink sm:text-lg">
                    {item.q}
                  </span>
                  <Plus
                    size={18}
                    className={`shrink-0 text-signal transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="max-w-2xl pb-6 text-sm leading-relaxed text-ink-soft">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
