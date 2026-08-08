import { Microscope, FlaskConical, LineChart, Handshake } from "lucide-react";

const FEATURES = [
  {
    icon: Microscope,
    title: "Skill-gap diagnostics",
    body: "We audit your current tech stack, role maturity, and business goals before writing a single slide, so the curriculum is built for your team, not a generic cohort.",
  },
  {
    icon: FlaskConical,
    title: "Applied, not theoretical",
    body: "Live labs, shared code repositories, and embedded AI tooling replace passive lectures, so learners ship work that resembles their actual job.",
  },
  {
    icon: LineChart,
    title: "Dashboards your CFO reads",
    body: "Engagement, assessment scores, and skill velocity roll up into a live dashboard, so you can report learning ROI the same way you report any other line item.",
  },
  {
    icon: Handshake,
    title: "White-glove delivery",
    body: "From onboarding to attendance to post-program impact review, a dedicated program manager runs the operation end to end.",
  },
];

export default function WhyEnterprise() {
  return (
    <section id="why" className="border-b border-line py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionEyebrow index="01" label="Why enterprises choose us" />
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
          Off-the-shelf courses don&rsquo;t move a P&amp;L. Structured,
          mentored programs do.
        </h2>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {FEATURES.map((f) => (
            <div key={f.title} className="bg-paper p-8">
              <f.icon size={22} className="text-signal" strokeWidth={1.5} />
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                {f.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionEyebrow({ index, label }: { index: string; label: string }) {
  return (
    <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-signal">
      <span className="text-ink-soft/60">&sect;{index}</span>
      {label}
    </p>
  );
}
