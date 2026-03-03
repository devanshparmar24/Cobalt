import FeatureCard from "../ui/FeatureCard";
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

          <FeatureCard
            image="/img2.png"
            alt="Insights"
            title="Insights at your fingertips"
            description="All your data and finances in one place to provide quick answers and make decisions instantly."
          />

          <FeatureCard
            image="/img3.png"
            alt="Manage in real time"
            title="Manage in real time"
            description="Have full control of your business finances on the go using our iOS/Android mobile apps."
          />

          <FeatureCard
            image="/img4.png"
            alt="Business alerts"
            title="Important business alerts"
            description="Choose the alerts you need and receive them via email or Slack. Review and take action in one click."
          />

          <FeatureCard
            image="/img5.png"
            alt="Connect apps"
            title="Connect all your apps"
            description="Bring your data with our built-in integrations for accounting, revenue tools and banking."
            colSpan="md:col-span-3"
            imageHeight="h-52 md:h-56"
            className="md:min-h-[480px]"
          />

          <FeatureCard
            image="/img6.png"
            alt="You're in control"
            title="You’re in control"
            description="Lightning fast shortcuts for everything. Command+K on Mac, Ctrl+K on Windows. Dark mode included."
            colSpan="md:col-span-3"
            imageHeight="h-52 md:h-56"
            className="md:min-h-[480px]"
          />

        </div>
      </div>
    </section>
  );
}