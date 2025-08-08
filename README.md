import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally you'd integrate with a service like EmailJS or Formspree here
    alert("Thank you! We'll be in touch soon.");
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="bg-white text-black py-20 px-8 min-h-screen">
      <h1 className="text-5xl font-bold text-center mb-12">Contact Integrity Home Builders</h1>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-4 py-3"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-4 py-3"
        />
        <input
          type="text"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-3"
        />
        <textarea
          name="message"
          placeholder="Tell us about your project..."
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className="w-full border border-gray-300 rounded px-4 py-3"
        ></textarea>
        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded hover:bg-gold hover:text-black transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
