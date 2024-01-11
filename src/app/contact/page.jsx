"use client"
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.username) tempErrors.username = "Username is required.";
    if (!formData.email) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is not valid.";
    }
    if (!formData.message) tempErrors.message = "Message is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form data:", formData);
      // Process form data here
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="max-w-lg mx-auto p-4 shadow-md">
    <div className="mb-4">
      <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
        Username
      </label>
      <input
        type="text"
        id="username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      {errors.username && <p className="text-red-500 text-xs italic">{errors.username}</p>}
    </div>

    <div className="mb-4">
      <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
    </div>

    <div className="mb-6">
      <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      ></textarea>
      {errors.message && <p className="text-red-500 text-xs italic">{errors.message}</p>}
    </div>

    <div className="flex items-center justify-between">
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Submit
      </button>
    </div>
  </form>
  );
}

export default Contact;