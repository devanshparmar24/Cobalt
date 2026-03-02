export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold">{title}</h2>
      <p className="mt-4 text-muted">{subtitle}</p>
    </div>
  );
}