import { ArrowUpRight } from "lucide-react";
import { SECTIONS } from "@/lib/sections";

export default function Footer() {
  return (
    <footer className="bg-ink py-16 text-paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#top" className="flex items-baseline gap-2">
              <span className="font-display text-xl font-semibold tracking-tight text-paper">
                Accredian
              </span>
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-signal">
                Enterprise
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/60">
              Cohort-based upskilling in AI, data, product, and leadership
              &mdash; co-designed with IIT and IIM faculty.
            </p>
          </div>

          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-paper/50">
              Navigate
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-sm text-paper/75 transition-colors hover:text-paper"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-paper/50">
              Company
            </p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-paper/75">
              <li>About</li>
              <li>Careers</li>
              <li>Faculty network</li>
              <li>Press</li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-paper/50">
              Get in touch
            </p>
            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-1.5 text-sm text-paper underline decoration-paper/30 underline-offset-4 hover:decoration-signal"
            >
              Book a consultation
              <ArrowUpRight size={14} />
            </a>
            <p className="mt-4 text-sm text-paper/60">enterprise@accredian.com</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-paper/10 pt-6 text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Accredian Enterprise. Built as a
            student project &mdash; unaffiliated demo, not the live product.
          </p>
          <p className="font-mono">Designed &amp; built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
