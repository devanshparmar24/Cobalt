export default function Testimonial() {

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Product Manager",
            review:
                "This dashboard completely transformed how we track our analytics. Clean, fast and intuitive.",
        },
        {
            name: "Michael Chen",
            role: "Founder, SaaSFlow",
            review:
                "The UI feels premium. The gradient typography and layout are incredibly well crafted.",
        },
        {
            name: "Emily Rodriguez",
            role: "UX Designer",
            review:
                "Performance is amazing and the design language feels modern and scalable.",
        },
    ];

    return (


        <section className="py-20 px-6 bg-[#09090B] text-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-semibold text-center mb-12
                   bg-gradient-to-b from-[#F4F4F5] to-[#52525B]
                   bg-clip-text text-transparent">
                    What People Are Saying
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-zinc-900 border border-zinc-800 
                     rounded-2xl p-6 hover:border-zinc-600 
                     transition duration-300"
                        >
                            <p className="text-zinc-400 mb-4">“{item.review}”</p>
                            <div>
                                <h4 className="font-semibold">{item.name}</h4>
                                <p className="text-sm text-zinc-500">{item.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}