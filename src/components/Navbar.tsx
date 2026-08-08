"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { SECTIONS } from "@/lib/sections";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-[1.35rem] font-semibold tracking-tight text-ink">
            Accredian
          </span>
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-signal">
            Enterprise
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="group flex items-center gap-1.5 text-sm text-ink-soft transition-colors hover:text-ink"
            >
              <span className="font-mono text-[0.65rem] text-line group-hover:text-signal">
                {s.index}
              </span>
              {s.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-signal lg:inline-flex"
        >
          Book a consultation
          <ArrowUpRight size={15} />
        </a>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-ink lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-paper px-6 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 border-b border-line/70 py-3 text-sm text-ink-soft"
              >
                <span className="font-mono text-[0.65rem] text-signal">{s.index}</span>
                {s.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper"
          >
            Book a consultation
            <ArrowUpRight size={15} />
          </a>
        </div>
      )}
    </header>
  );
}
