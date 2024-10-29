// components/SignUpForm.js
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SignUpForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [usernameAvailable, setUsernameAvailable] = useState(null);

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleGoBack = () => {
    router.push(`/login`);
  };

  // Debounce API call to check username availability
  useEffect(() => {
    const checkUsername = async () => {
      if (formData.username) {
        try {
          const response = await fetch(`/api/check-username?username=${formData.username}`);
          const data = await response.json();
          setUsernameAvailable(data.available);
        } catch (error) {
          console.error("Error checking username:", error);
        }
      } else {
        setUsernameAvailable(null);
      }
    };

    // Delay checking username availability by 500ms
    const debounceTimeout = setTimeout(checkUsername, 500);
    return () => clearTimeout(debounceTimeout);
  }, [formData.username]);

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
    if (usernameAvailable === false) {
      newErrors.username = "Username is already taken.";
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
            username: formData.username,
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
      {/* Title Section with Gradient Text */}
      <div className="text-5xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">
        ProT
      </div>

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

      {/* Username field with availability check */}
      <div className="w-full max-w-xs">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg bg-slate-100 text-black py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {usernameAvailable === false && (
          <p className="text-red-500 text-sm">Username is already taken.</p>
        )}
        {usernameAvailable === true && (
          <p className="text-green-500 text-sm">Username is available.</p>
        )}
        {errors.username && (
          <p className="text-red-500 text-sm">{errors.username}</p>
        )}
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
        className="w-full max-w-xs py-2 px-4 text-white rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-600 hover:to-red-600 transition duration-300"
      >
        Sign Up
      </button>

      <div>
        Already have an account? <Link href="/login" className="text-blue-500">Log in</Link>
      </div>
    </form>
  );
}
