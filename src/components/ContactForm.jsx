import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", type: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <section id="contact" className="p-10 bg-gray-100 text-center">
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 text-left">
        {["name", "email", "company", "message"].map((field) => (
          <input
            key={field}
            name={field}
            value={form[field]}
            onChange={handleChange}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            className="w-full p-2 border rounded"
            required
          />
        ))}
        <select name="type" value={form.type} onChange={handleChange} className="w-full p-2 border rounded" required>
          <option value="">Select License Type</option>
          <option>Windows</option>
          <option>MS Office</option>
          <option>Adobe</option>
        </select>
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full" type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
