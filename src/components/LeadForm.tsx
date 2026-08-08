"use client";

import { useState, FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import { SectionEyebrow } from "./WhyEnterprise";

type Status = "idle" | "loading" | "success" | "error";

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      company: data.get("company"),
      message: data.get("message"),
      teamSize: data.get("teamSize"),
      domain: data.get("domain"),
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(json.error ?? "Something went wrong. Try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Check your connection and try again.");
    }
  }

  return (
    <section id="contact" className="border-b border-line py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <SectionEyebrow index="07" label="Start a conversation" />
        <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-lg font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            Tell us about your team. We&rsquo;ll come back with a proposed
            curriculum, not a sales deck.
          </h2>
        </div>

        <div className="mt-12 rounded-2xl border border-line bg-cream p-7 sm:p-10">
          {status === "success" ? (
            <div className="flex flex-col items-center gap-3 py-10 text-center">
              <CheckCircle2 size={32} className="text-signal" />
              <p className="font-display text-xl font-semibold text-ink">
                Request received.
              </p>
              <p className="max-w-sm text-sm text-ink-soft">
                A program lead will reach out within two business days with
                next steps.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-2 text-sm font-medium text-signal underline underline-offset-4"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
              <Field label="Full name" name="name" required placeholder="Jordan Reyes" />
              <Field
                label="Work email"
                name="email"
                type="email"
                required
                placeholder="jordan@company.com"
              />
              <Field label="Company" name="company" required placeholder="Company name" />
              <div>
                <label className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-soft">
                  Team size
                </label>
                <select
                  name="teamSize"
                  className="mt-2 w-full rounded-lg border border-line bg-paper px-4 py-3 text-sm text-ink outline-none focus-visible:border-signal"
                  defaultValue="25-50"
                >
                  <option value="<25">Fewer than 25</option>
                  <option value="25-50">25 – 50</option>
                  <option value="50-200">50 – 200</option>
                  <option value="200+">200+</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-soft">
                  Domain of interest
                </label>
                <select
                  name="domain"
                  className="mt-2 w-full rounded-lg border border-line bg-paper px-4 py-3 text-sm text-ink outline-none focus-visible:border-signal"
                  defaultValue="Generative AI"
                >
                  {[
                    "Generative AI",
                    "Data Science",
                    "Product Management",
                    "Leadership Elevation",
                    "Digital Transformation",
                    "Fintech & Operations",
                  ].map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-soft">
                  What are you hoping to solve? <span className="text-signal">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  minLength={10}
                  rows={4}
                  placeholder="e.g. We need to upskill 60 engineers on applied GenAI within a quarter..."
                  className="mt-2 w-full resize-none rounded-lg border border-line bg-paper px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-soft/50 focus-visible:border-signal"
                />
              </div>

              {status === "error" && (
                <p className="sm:col-span-2 text-sm text-red-700">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-signal disabled:opacity-60 sm:col-span-2"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending
                  </>
                ) : (
                  <>
                    Request a proposal
                    <ArrowUpRight size={16} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-soft">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-line bg-paper px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-soft/50 focus-visible:border-signal"
      />
    </div>
  );
}
