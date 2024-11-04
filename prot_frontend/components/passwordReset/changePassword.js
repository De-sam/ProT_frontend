// components/NewPassword.jsx
"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function NewPassword({ uid, token }) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const router = useRouter();

  // Password validation states
  const [hasMinLength, setHasMinLength] = useState(false);
  const [hasUpperCase, setHasUpperCase] = useState(false);
  const [hasLowerCase, setHasLowerCase] = useState(false);
  const [hasNumeric, setHasNumeric] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);

  // Validate password function
  const validatePassword = (password) => {
    setHasMinLength(password.length >= 8);
    setHasUpperCase(/[A-Z]/.test(password));
    setHasLowerCase(/[a-z]/.test(password));
    setHasNumeric(/\d/.test(password));
    setHasSpecialChar(/[!@#$%^&*(),.?":{}|<>]/.test(password));
  };

  // Function to confirm password reset using Axios
  const confirmPasswordReset = async () => {
    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/userauth/password-reset-confirm/${uid}/${token}/`, {
        new_password: newPassword,
        confirm_password: confirmPassword,
      });

      console.log("Password reset successful:", response.data);
      setStatusMessage("Your password has been reset successfully!");
      
      // Redirect to login page after successful reset
      router.push('/login');
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
      const errorMessage = error.response?.data?.message || 'Password reset failed. Please try again.';
      setStatusMessage(errorMessage);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword && confirmPassword) {
      if (newPassword !== confirmPassword) {
        setStatusMessage("Passwords do not match.");
        return;
      }
      
      // Check if all password criteria are met
      if (!(hasMinLength && hasUpperCase && hasLowerCase && hasNumeric && hasSpecialChar)) {
        setStatusMessage("Password must meet all requirements.");
        return;
      }

      confirmPasswordReset();
    } else {
      setStatusMessage("Please fill out all fields.");
    }
  };

  // Update password state and validation
  const handleNewPasswordChange = (e) => {
    const password = e.target.value;
    setNewPassword(password);
    validatePassword(password);
  };

  return (
    <div className="w-screen h-screen m-6 flex items-center justify-center">
      <div className="items-center justify-center border w-[491px] h-auto rounded-lg bg-[#B2DDF9] p-6">
        {/* Header */}
        <div className="text-center font-semibold text-[24px]">
          Create New Password
        </div>
        <div className="text-center text-[14px] text-gray-600 mt-2">
          Create a new password to securely access your account. Make sure it’s strong and easy for you to remember.
        </div>

        {/* New Password Field */}
        <div className="mt-8 text-[14px] font-semibold ml-6">
          New Password
        </div>
        <input
          type="password"
          placeholder="Min of eight characters"
          value={newPassword}
          onChange={handleNewPasswordChange}
          className="w-[427px] h-[42px] rounded-lg ml-6 mt-2 border border-gray-300 p-2"
        />

        {/* Password Requirements */}
        <div className="ml-6 mt-3 text-[12px] text-gray-600">
          <div className={hasMinLength ? "text-green-500" : "text-gray-600"}>
            {hasMinLength ? "✓" : "✗"} Minimum 8 characters
          </div>
          <div className={hasUpperCase ? "text-green-500" : "text-gray-600"}>
            {hasUpperCase ? "✓" : "✗"} At least one uppercase letter
          </div>
          <div className={hasLowerCase ? "text-green-500" : "text-gray-600"}>
            {hasLowerCase ? "✓" : "✗"} At least one lowercase letter
          </div>
          <div className={hasNumeric ? "text-green-500" : "text-gray-600"}>
            {hasNumeric ? "✓" : "✗"} At least one number
          </div>
          <div className={hasSpecialChar ? "text-green-500" : "text-gray-600"}>
            {hasSpecialChar ? "✓" : "✗"} At least one special character
          </div>
        </div>

        {/* Confirm Password Field */}
        <div className="mt-5 text-[14px] font-semibold ml-6">
          Confirm Password
        </div>
        <input
          type="password"
          placeholder="Min of eight characters"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-[427px] h-[42px] rounded-lg ml-6 mt-2 border border-gray-300 p-2"
        />

        {/* Reset Password Button */}
        <button
          onClick={handleSubmit}
          className="w-[427px] h-[42px] rounded-lg ml-6 mt-6 bg-[#1A3A4F] text-white hover:bg-[#427ea7]"
        >
          Reset Password
        </button>

        {/* Status Message */}
        {statusMessage && (
          <div className="text-center text-[14px] text-red-600 mt-4">
            {statusMessage}
          </div>
        )}
      </div>
    </div>
  );
}
