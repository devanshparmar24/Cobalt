import Image from "next/image";

export default function Feature1() {
  return (
    <section className="bg-[#09090B] py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight bg-gradient-to-b from-white to-zinc-500  bg-clip-text text-transparent">
            Everything you need.
            <br />
            Nothing you don’t.
          </h2>

          <p className="mt-6 text-white/60 leading-relaxed">
            Financial management and visibility in one place. Experience a
            flexible toolkit that makes every task feel like a breeze.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-6 gap-6">

          {/* Card 1 */}
          <div className="md:col-span-2 bg-gradient-to-b from-[black] to-[#0001] rounded-2xl p-6 border border-white/5 hover:border-white/10 transition">
            <div className="h-48 mb-6 overflow-hidden rounded-xl">
              <Image
                src="/img2.png"
                alt="Insights"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-medium">
              Insights at your fingertips
            </h3>
            <p className="mt-3 text-white/60 text-sm leading-relaxed">
              All your data and finances in one place to provide quick answers
              and make decisions instantly.
            </p>
          </div>

          {/* Card 2 */}
          <div className="md:col-span-2 bg-gradient-to-b from-[black] to-[#0001] rounded-2xl p-6 border border-white/5 hover:border-white/10 transition">
            <div className="h-48 mb-6 overflow-hidden rounded-xl">
              <Image
                src="/img3.png"
                alt="Insights"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-medium">
              Manage in real time
            </h3>
            <p className="mt-3 text-white/60 text-sm leading-relaxed">
              Have full control of your business finances on the go using our
              iOS/Android mobile apps.
            </p>
          </div>

          {/* Card 3 */}
          <div className="md:col-span-2 bg-gradient-to-b from-[#black] to-[#0001] rounded-2xl p-6 border border-white/5 hover:border-white/10 transition">
            <div className="h-48 mb-6 overflow-hidden rounded-xl">
              <Image
                src="/img4.png"
                alt="Insights"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-medium">
              Important business alerts
            </h3>
            <p className="mt-3 text-white/60 text-sm leading-relaxed">
              Choose the alerts you need and receive them via email or Slack.
              Review and take action in one click.
            </p>
          </div>

          {/* Card 4 (Wide) */}
          <div className="md:col-span-3 bg-gradient-to-b from-[#black] to-[#0001] rounded-2xl p-6 border border-white/5 hover:border-white/10 transition">
            <div className="h-48 mb-6 overflow-hidden rounded-xl">
              <Image
                src="/img5.png"
                alt="Insights"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-medium">
              Connect all your apps
            </h3>
            <p className="mt-3 text-white/60 text-sm leading-relaxed">
              Bring your data with our built-in integrations for accounting,
              revenue tools and banking.
            </p>
          </div>

          {/* Card 5 (Wide) */}
          <div className="md:col-span-3 bg-gradient-to-b from-[black] to-[#0001] rounded-2xl p-6 border border-white/5 hover:border-white/10 transition">
            <div className="h-48 mb-6 overflow-hidden rounded-xl">
              <Image
                src="/img6.png"
                alt="Insights"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-medium">
              You’re in control
            </h3>
            <p className="mt-3 text-white/60 text-sm leading-relaxed">
              Lightning fast shortcuts for everything. Command+K on Mac,
              Ctrl+K on Windows. Dark mode included.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}