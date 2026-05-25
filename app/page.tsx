export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Conversion Optimization
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          A/B test SaaS pricing pages{" "}
          <span className="text-[#58a6ff]">without developers</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Embed one script. Configure variants in a dashboard. Watch which pricing strategy converts best — no engineering tickets required.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $16/mo
        </a>
        <p className="text-xs text-[#8b949e] mt-3">No credit card required for 14-day trial</p>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="border border-[#58a6ff]/40 rounded-2xl p-8 bg-[#161b22] max-w-sm mx-auto">
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-4xl font-bold text-white">$16</span>
            <span className="text-[#8b949e]">/mo</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to optimize pricing conversions</p>
          <ul className="space-y-3 mb-8">
            {[
              "Unlimited A/B test variants",
              "PostHog analytics integration",
              "Supabase data storage",
              "Embeddable widget script",
              "Conversion funnel dashboard",
              "Email alerts on significance"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "How does the embed work?",
              a: "Add a single JavaScript snippet to your pricing page. PriceTest handles variant assignment, rendering, and event tracking automatically — no code changes needed after setup."
            },
            {
              q: "What metrics does it track?",
              a: "Clicks on pricing CTAs, plan selections, checkout initiations, and completed purchases. All events flow into your PostHog project so you own the data."
            },
            {
              q: "Can I test more than two variants?",
              a: "Yes. Run multivariate tests with up to 8 variants simultaneously. The dashboard shows statistical significance for each variant so you know when to call a winner."
            }
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} PriceTest. All rights reserved.
      </footer>
    </main>
  );
}
