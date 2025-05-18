const points = [
  { icon: "⚡", text: "Instant Valuation" },
  { icon: "🔒", text: "Secure Transactions" },
  { icon: "📈", text: "Best Market Rates" },
  { icon: "📞", text: "24/7 Support" },
];

const WhyChooseUs = () => (
  <section className="p-10 text-center">
    <h2 className="text-2xl font-bold mb-6">Why Choose Us</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {points.map((point, i) => (
        <div key={i} className="bg-blue-50 p-4 rounded shadow">
          <div className="text-3xl">{point.icon}</div>
          <p className="mt-2 font-medium">{point.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WhyChooseUs;
