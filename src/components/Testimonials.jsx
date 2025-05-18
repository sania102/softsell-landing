const reviews = [
  { name: "Amit Sharma", role: "CTO", company: "FinPro", review: "Smooth and easy process!" },
  { name: "Sara Lee", role: "Manager", company: "Techify", review: "Got paid within a day!" },
];

const Testimonials = () => (
  <section className="p-10 bg-gray-100 text-center">
    <h2 className="text-2xl font-bold mb-6">Customer Testimonials</h2>
    <div className="flex flex-col md:flex-row gap-6 justify-center">
      {reviews.map((r, i) => (
        <div key={i} className="bg-white p-4 shadow-md rounded">
          <p className="italic">"{r.review}"</p>
          <p className="mt-2 font-semibold">{r.name}</p>
          <p className="text-sm">{r.role}, {r.company}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
