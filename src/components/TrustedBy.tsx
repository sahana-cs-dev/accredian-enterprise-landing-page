const CLIENT_TYPES = [
  "Global Financial Services Group",
  "Fortune 500 FMCG",
  "Enterprise SaaS Platform",
  "National Banking Group",
  "Healthcare & Life Sciences",
  "Automotive Manufacturer",
];

export default function TrustedBy() {
  return (
    <section className="border-b border-line bg-paper-dim/60 py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-soft">
          Trusted by L&amp;D teams at organizations like
        </p>
        <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-6">
          {CLIENT_TYPES.map((c) => (
            <span
              key={c}
              className="font-display text-sm italic leading-snug text-ink-soft"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
