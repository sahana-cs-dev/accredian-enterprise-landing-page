import { SectionEyebrow } from "./WhyEnterprise";

const METRICS = [
  { label: "Avg. completion rate", value: "94%", bar: 94 },
  { label: "Learner engagement", value: "88%", bar: 88 },
  { label: "Skill velocity vs. baseline", value: "2.3x", bar: 76 },
  { label: "Manager-reported readiness", value: "91%", bar: 91 },
];

const LOG = [
  ["Wk 1", "Kickoff & diagnostic assessment", "Complete"],
  ["Wk 3", "Applied lab: capstone brief issued", "Complete"],
  ["Wk 6", "Mentor checkpoint & peer review", "Complete"],
  ["Wk 9", "Capstone submission & scoring", "In progress"],
];

export default function Outcomes() {
  return (
    <section id="outcomes" className="border-b border-line bg-ink py-20 text-paper lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionEyebrow index="04" label="Outcomes, not vanity metrics" />
        <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight text-paper sm:text-4xl">
          The same dashboard your program manager and your CFO look at.
        </h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-paper/15 bg-paper/[0.03] p-7 sm:p-8">
            <div className="flex items-center justify-between border-b border-paper/15 pb-4">
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-paper/60">
                Program Analytics
              </span>
              <span className="font-mono text-[0.65rem] text-signal">Live</span>
            </div>
            <div className="mt-6 flex flex-col gap-6">
              {METRICS.map((m) => (
                <div key={m.label}>
                  <div className="flex items-baseline justify-between text-sm">
                    <span className="text-paper/75">{m.label}</span>
                    <span className="font-mono text-paper">{m.value}</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-paper/10">
                    <div
                      className="h-full rounded-full bg-signal"
                      style={{ width: `${m.bar}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-paper/15 bg-paper/[0.03] p-7 sm:p-8">
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-paper/60">
              Cohort Log
            </span>
            <ul className="mt-6 flex flex-col gap-5">
              {LOG.map(([week, title, status]) => (
                <li
                  key={title}
                  className="flex items-start justify-between gap-4 border-b border-paper/10 pb-5 last:border-0 last:pb-0"
                >
                  <div className="flex gap-4">
                    <span className="font-mono text-xs text-paper/50">{week}</span>
                    <span className="text-sm text-paper/90">{title}</span>
                  </div>
                  <span
                    className={`shrink-0 font-mono text-[0.62rem] uppercase tracking-[0.1em] ${
                      status === "Complete" ? "text-signal" : "text-amber"
                    }`}
                  >
                    {status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
