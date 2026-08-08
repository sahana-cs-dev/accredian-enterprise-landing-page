import { ArrowUpRight, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:px-10 lg:pb-28 lg:pt-24">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
            §00 &mdash; Enterprise Learning, Filed &amp; Measured
          </p>
          <h1 className="mt-6 max-w-xl font-display text-[2.6rem] font-semibold leading-[1.06] tracking-tight text-ink sm:text-[3.4rem]">
            Upskilling, engineered like a curriculum,{" "}
            <span className="italic text-signal">measured like a P&amp;L.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
            We design and run cohort-based training in Generative AI, data,
            product, and leadership &mdash; co-built with IIT and IIM faculty,
            tracked to completion, engagement, and skill velocity your L&amp;D
            team can defend in a boardroom.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-signal"
            >
              Talk to our team
              <ArrowUpRight size={16} />
            </a>
            <a
              href="#approach"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink underline decoration-line decoration-2 underline-offset-4 transition-colors hover:decoration-signal"
            >
              <PlayCircle size={18} className="text-signal" />
              See how a cohort runs
            </a>
          </div>
        </div>

        {/* Signature element: the case-file / ledger card */}
        <div className="relative">
          <div className="rounded-2xl border border-line bg-cream p-6 shadow-[0_1px_0_0_rgba(23,27,26,0.04)] sm:p-8">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-soft">
                Cohort File / Q3 Intake
              </span>
              <span className="font-mono text-[0.65rem] text-signal">Active</span>
            </div>
            <dl className="mt-5 grid grid-cols-2 gap-y-5 text-sm">
              {[
                ["Domain", "Generative AI"],
                ["Cohort size", "212 learners"],
                ["Faculty", "IIT & IIM"],
                ["Format", "Live + async labs"],
                ["Completion", "94.2%"],
                ["Skill velocity", "+2.3x baseline"],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-col gap-1">
                  <dt className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-ink-soft/80">
                    {k}
                  </dt>
                  <dd className="font-medium text-ink">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-paper-dim">
              <div className="h-full w-[94%] rounded-full bg-signal" />
            </div>
            <p className="mt-2 font-mono text-[0.62rem] text-ink-soft">
              Program impact, tracked from kickoff to capstone.
            </p>
          </div>
          <div
            aria-hidden
            className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border border-line sm:-bottom-6 sm:-right-6"
          />
        </div>
      </div>

      {/* Ledger ticker strip */}
      <div className="border-t border-line bg-ink py-3">
        <div className="flex overflow-hidden">
          <div className="ticker-track flex shrink-0 items-center gap-10 whitespace-nowrap pr-10 font-mono text-xs uppercase tracking-[0.12em] text-paper/80">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} className="flex items-center gap-10">
                <span>{item}</span>
                <span className="text-signal">&bull;</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const TICKER_ITEMS = [
  "94% avg. completion rate",
  "500+ practitioner mentors",
  "60+ enterprise cohorts delivered",
  "7 domain specializations",
  "IIT & IIM co-designed curricula",
  "Real-time L&D dashboards",
];
