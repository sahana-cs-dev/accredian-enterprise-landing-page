import { SectionEyebrow } from "./WhyEnterprise";

const QUOTES = [
  {
    quote:
      "The diagnostic phase alone changed how we thought about the program. What we shipped matched our actual tooling, not a generic syllabus.",
    name: "Head of L&D",
    org: "Global Financial Services Group",
  },
  {
    quote:
      "We finally had a dashboard we could bring into a budget review. Completion and skill velocity made the ROI conversation easy.",
    name: "VP, People & Talent",
    org: "Enterprise SaaS Platform",
  },
  {
    quote:
      "The mentors were practitioners, not lecturers. Our engineers noticed the difference in week one.",
    name: "Director of Engineering",
    org: "Automotive Manufacturer",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="border-b border-line py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionEyebrow index="05" label="What clients report back" />
        <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
          Quotes are lightly edited for length &mdash; the substance stays
          theirs.
        </h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {QUOTES.map((q) => (
            <figure
              key={q.name}
              className="flex flex-col justify-between rounded-2xl border border-line bg-cream p-7"
            >
              <blockquote className="font-display text-lg italic leading-snug text-ink">
                &ldquo;{q.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 border-t border-line pt-4">
                <p className="text-sm font-medium text-ink">{q.name}</p>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-ink-soft">
                  {q.org}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-xs text-ink-soft/70">
          Illustrative client feedback for demonstration purposes.
        </p>
      </div>
    </section>
  );
}
