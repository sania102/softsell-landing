const steps = [
  { title: "Upload License", icon: "📤" },
  { title: "Get Valuation", icon: "💰" },
  { title: "Get Paid", icon: "🏦" },
];

const HowItWorks = () => (
  <section className="p-10 bg-gray-100 text-center">
    <h2 className="text-2xl font-bold mb-6">How It Works</h2>
    <div className="flex flex-col md:flex-row justify-center gap-8">
      {steps.map((step, index) => (
        <div key={index} className="bg-white shadow-md p-4 rounded">
          <div className="text-4xl">{step.icon}</div>
          <h3 className="mt-2 font-semibold">{step.title}</h3>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks;
