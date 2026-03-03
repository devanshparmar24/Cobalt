import Button from "../ui/Button";

export default function Pricing() {
  return (
    <section className="relative bg-[#09090B] py-32">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold">
          Simple pricing
        </h2>

        <p className="mt-6 text-white/60 max-w-2xl mx-auto">
          Transparent pricing. No hidden fees. Scale as you grow.
        </p>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {[
            { name: "Starter", price: "$19" },
            { name: "Pro", price: "$29" },
            { name: "Enterprise", price: "Custom" },
          ].map((plan, i) => (
            <div
              key={i}
              className={`
                relative p-8 rounded-2xl bg-[#0D1523]
                border transition duration-300
                hover:-translate-y-1
                ${
                  i === 1
                    ? "border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.04)]"
                    : "border-white/5 hover:border-white/10"
                }
              `}
            >

              {/* Highlight badge for Pro */}
              {i === 1 && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20">
                  Most Popular
                </div>
              )}

              <h3 className="text-lg font-medium">
                {plan.name}
              </h3>

              <p className="mt-6 text-4xl font-semibold tracking-tight">
                {plan.price}
              </p>

              <p className="mt-2 text-white/50 text-sm">
                Per month
              </p>

              <ul className="mt-8 space-y-3 text-sm text-white/60">
                <li>✓ Unlimited transactions</li>
                <li>✓ Real-time analytics</li>
                <li>✓ Priority support</li>
              </ul>

              <div className="mt-10">
                <Button variant={i === 1 ? "primary" : "secondary"}>
                  Get Started
                </Button>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}