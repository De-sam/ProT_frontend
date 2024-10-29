// components/LoginForm.js
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router"; // Import useRouter

export default function LoginForm() {
  const router = useRouter(); // Initialize useRouter
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    const newErrors = {};
    if (!formData.username) {
      newErrors.username = "Please enter a username, email, or phone number.";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    setErrors(newErrors);

    // Proceed if there are no validation errors
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const result = await response.json();
          console.log("Login successful:", result);

          // Redirect to the dashboard after a successful login
          router.push("/dashboard");
        } else {
          // Handle login failure (e.g., invalid credentials)
          const errorData = await response.json();
          console.error("Login error:", errorData.message);
          setErrors({ ...errors, form: "Invalid login credentials." });
        }
      } catch (error) {
        console.error("Error logging in:", error);
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
      <div className="text-6xl font-extrabold tracking-tighter font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">
        ProT
      </div>

      {/* Username/Email/Phone Number Field */}
      <div className="w-full max-w-xs">
        <p className="mb-1 text-[12px]">Username/Email/Phone number</p>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg bg-slate-100 text-black py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
      </div>

      {/* Password Field */}
      <div className="w-full max-w-xs">
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg bg-slate-100 text-black py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        <p>
          <Link href="/forgot-password">
            <a className="text-blue-500 hover:text-blue-600">Forgotten Password?</a>
          </Link>
        </p>
      </div>

      {/* Form-level Error Message */}
      {errors.form && <p className="text-red-500 text-sm">{errors.form}</p>}

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full max-w-xs py-2 px-4 text-white text-2xl rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-600 hover:to-red-600 transition duration-300"
      >
        Log in
      </button>

      {/* Sign Up Link */}
      <div>
        Don't have an account?{" "}
        <Link href="/signup">
          <a className="text-blue-400 hover:text-blue-600">Sign up</a>
        </Link>
      </div>
    </form>
  );
}
