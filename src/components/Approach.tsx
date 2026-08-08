import { SectionEyebrow } from "./WhyEnterprise";

const STEPS = [
  {
    step: "01",
    title: "Diagnose",
    body: "We run a skill-gap assessment against your tech stack and business goals to find the highest-leverage curriculum, not the most popular one.",
  },
  {
    step: "02",
    title: "Design",
    body: "Curriculum architects and IIT/IIM faculty co-build the syllabus, labs, and assessment rubric around your real use cases.",
  },
  {
    step: "03",
    title: "Deliver",
    body: "Cohorts run live with practitioner mentors, async labs, and a dedicated program manager handling onboarding and attendance.",
  },
  {
    step: "04",
    title: "Demonstrate",
    body: "Completion, engagement, and skill-velocity metrics roll into a dashboard your leadership can review at any point in the cohort.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="border-b border-line py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionEyebrow index="03" label="How a cohort actually runs" />
        <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
          A four-stage process, because upskilling is a project &mdash; not a
          purchase.
        </h2>

        <ol className="mt-14 grid gap-0 border-t border-line lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li
              key={s.step}
              className={`flex flex-col gap-4 border-b border-line px-0 py-8 lg:border-b-0 lg:border-r lg:px-8 lg:py-2 ${
                i === 0 ? "lg:pl-0" : ""
              } ${i === STEPS.length - 1 ? "lg:border-r-0 lg:pr-0" : ""}`}
            >
              <span className="font-mono text-sm text-signal">{s.step}</span>
              <h3 className="font-display text-lg font-semibold text-ink">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-soft">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
