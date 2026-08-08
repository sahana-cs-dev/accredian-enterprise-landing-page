import { SectionEyebrow } from "./WhyEnterprise";

const PROGRAMS = [
  {
    domain: "Generative AI",
    desc: "Applied LLM engineering, prompt systems, and AI-integrated workflows for technical and product teams.",
    level: "Foundation → Advanced",
  },
  {
    domain: "Data Science",
    desc: "Statistical modeling, ML pipelines, and data-driven decision-making for analysts and engineers.",
    level: "Foundation → Advanced",
  },
  {
    domain: "Product Management",
    desc: "Discovery, roadmapping, and outcome-based execution for PMs stepping into larger scope.",
    level: "Intermediate → Advanced",
  },
  {
    domain: "Leadership Elevation",
    desc: "Management fundamentals through executive strategy, sequenced for first-time managers and directors.",
    level: "All levels",
  },
  {
    domain: "Digital Transformation",
    desc: "Frameworks for modernizing legacy systems and operating models across the enterprise.",
    level: "Executive",
  },
  {
    domain: "Fintech & Operations",
    desc: "Financial modeling, risk analytics, and operational excellence for regulated industries.",
    level: "Intermediate → Advanced",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="border-b border-line bg-paper-dim/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionEyebrow index="02" label="Domain specializations" />
        <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            Seven domains, every one co-designed with practitioners.
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
            Every track is modular, so we mix and sequence domains into a
            single cohort roadmap that matches your org chart, not a course
            catalog.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((p, i) => (
            <div
              key={p.domain}
              className="group flex flex-col justify-between rounded-2xl border border-line bg-paper p-7 transition-colors hover:border-signal"
            >
              <div>
                <span className="font-mono text-xs text-line group-hover:text-signal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink">
                  {p.domain}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {p.desc}
                </p>
              </div>
              <p className="mt-6 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-signal">
                {p.level}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
