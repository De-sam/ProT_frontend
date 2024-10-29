// components/SignUpForm.js
import { useState } from "react";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for errors before submitting
    const newErrors = {};
    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.password = "Passwords do not match.";
    }
    setErrors(newErrors);

    // Only submit if there are no errors
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch("/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
          }),
        });
        const result = await response.json();
        console.log("Form submitted successfully:", result);
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center border rounded-lg m-8 p-6 bg-gray-100 space-y-6"
    >
      <div className="text-5xl font-extrabold font-mono text-black">ProT</div>

      {/* Input fields */}
      <div className="w-full max-w-xs">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg bg-slate-100 text-black py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="w-full max-w-xs">
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg bg-slate-100 text-black py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="w-full max-w-xs">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg bg-slate-100 text-black py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div className="w-full max-w-xs">
        <input
          type="password"
          name="password"
          placeholder="Input Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg bg-slate-100 text-black py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="w-full max-w-xs">
        <input
          type="password"
          name="confirmPassword"
          placeholder="Re-enter Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg bg-slate-100 text-black py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full max-w-xs py-2 px-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
      >
        Sign Up
      </button>

      <div>
        Already have an account? <a href="/login">Log in</a>
      </div>
    </form>
  );
}
