const Hero = () => {
  const scrollToForm = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-blue-600 text-white py-20 px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Sell Your Unused Software Licenses</h1>
      <p className="mb-6 text-lg md:text-xl">Turn unused licenses into cash in just a few steps.</p>
      <button
        onClick={scrollToForm}
        className="bg-white text-blue-600 hover:bg-blue-100 font-semibold px-6 py-3 rounded transition"
      >
        Get a Quote
      </button>
    </section>
  );
};

export default Hero;
