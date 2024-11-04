// components/ForgotPassword.jsx
"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const router = useRouter(); // Next.js router for navigation

  // Function to handle password reset request using Axios
  const requestPasswordReset = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/userauth/password-reset/', {
        email,
      });

      // Handle successful response
      console.log("Password reset request successful:", response.data);
      setStatusMessage("Password reset link has been sent to your email.");
      
      // Redirect to New Password UI
      router.push('/new-password');
    } catch (error) {
      // Detailed error handling for debugging
      console.error("Full Axios Error:", error);

      if (error.response) {
        console.error("Response Data:", error.response.data);
        console.error("Status Code:", error.response.status);
        console.error("Headers:", error.response.headers);
      } else if (error.request) {
        console.error("No Response Received:", error.request);
      } else {
        console.error("Error in Request Setup:", error.message);
      }

      // Display specific error message or fallback
      const errorMessage = error.response?.data?.message || 'Password reset request failed. Please try again.';
      setStatusMessage(errorMessage);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      requestPasswordReset();
    } else {
      setStatusMessage("Please enter a valid email address.");
    }
  };

  const handleLogInLink = () => {
    // Redirect to the sign-up page
    router.push('/login');
  };


  return (
    <div className="w-screen h-screen m-6 flex items-center justify-center">
      <div className="w-[491px] h-[442px] rounded-lg border bg-[#B2DDF9] p-6">
        {/* Header */}
        <div className="text-center font-semibold text-[24px] mb-4">
          Forgot Password
        </div>
        <div className="text-center text-[14px] text-gray-600 mb-6">
          Enter your email, and we&apos;ll send you a link to reset it and get back into your account.
        </div>

        {/* Email Label */}
        <label htmlFor="email" className="block text-[14px] font-semibold mb-2 ml-1">
          Email address
        </label>

        {/* Email Input */}
        <input
          type="email"
          id="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-[42px] rounded-lg p-3 mb-4 border border-gray-300"
        />

        {/* Continue Button */}
        <button
          onClick={handleSubmit}
          className="w-full h-[42px] rounded-lg bg-[#1A3A4F] text-white hover:bg-[#427ea7]"
        >
          Continue
        </button>

        {/* Status Message */}
        {statusMessage && (
          <div className="text-center text-[14px] text-red-600 mt-4">
            {statusMessage}
          </div>
        )}

        {/* Login Redirect */}
        <div className="text-center mt-6 text-[14px]">
        <p className="text-gray-600 text-center mt-4">
          Don&apos;t have an account? <button onClick={handleLogInLink} className="text-[#1A3A4F] font-semibold">Sign up</button>
        </p>
        </div>
      </div>
    </div>
  );
}
