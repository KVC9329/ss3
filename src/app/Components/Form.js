"use client"

import { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here, e.g., API call
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-screen max-w-lg shadow-md rounded-lg p-6 bg-white"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-black font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-black bg-transparent rounded-lg focus:outline-none focus:ring-4 focus:ring-black text-black"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-black font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-black bg-transparent rounded-lg focus:outline-none focus:ring-4 focus:ring-black text-black"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-black font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border border-black bg-transparent rounded-lg focus:outline-none focus:ring-4 focus:ring-black text-black"
            placeholder="Enter your message"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-black transition duration-300 hover:bg-gray-900"
          Submit
        >
          submit
        </button>
      </form>
    </div>
  );
}
