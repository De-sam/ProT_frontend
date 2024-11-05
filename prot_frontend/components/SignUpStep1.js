"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios'; // Import axios

export default function SignUpStep1() {
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState('CUSTOMER');
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  // Password validation states
  const [hasMinLength, setHasMinLength] = useState(false);
  const [hasUpperCase, setHasUpperCase] = useState(false);
  const [hasLowerCase, setHasLowerCase] = useState(false);
  const [hasNumeric, setHasNumeric] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const validatePassword = (password) => {
    setHasMinLength(password.length >= 8);
    setHasUpperCase(/[A-Z]/.test(password));
    setHasLowerCase(/[a-z]/.test(password));
    setHasNumeric(/\d/.test(password));
    setHasSpecialChar(/[!@#$%^&*(),.?":{}|<>]/.test(password));
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setPassword1(password);
    validatePassword(password);
  };

  // Function to register user using Axios
  const registerUser = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/userauth/register/', {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password1: password1,
        password2: password2,
        role: role,
      });
  
      return response.data; // Return data if successful
    } catch (error) {
      // Log the full error details for debugging
      console.error("Full Axios Error:", error);
  
      // Log specific details from the error response
      if (error.response) {
        console.error("Response Data:", error.response.data);
        console.error("Status Code:", error.response.status);
        console.error("Headers:", error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No Response Received:", error.request);
      } else {
        // An error occurred in setting up the request
        console.error("Error in Request Setup:", error.message);
      }
  
      // Display a more specific error message to the user if available
      const errorMessage = error.response?.data?.message || 'Registration failed. Please try again.';
      alert(errorMessage);
      throw new Error(errorMessage);
    }}

    const handleLogInLink = () => {
      // Redirect to the sign-up page
      router.push('/login');
    };

  const handleContinue = async (e) => {
    e.preventDefault();
    if (email && password1 && password2 && firstName && lastName) {
      if (password1 !== password2) {
        alert("Passwords do not match!");
        return;
      }
      if (!(hasMinLength && hasUpperCase && hasLowerCase && hasNumeric && hasSpecialChar)) {
        alert("Password must meet all requirements.");
        return;
      }

      // Attempt to register the user
      const result = await registerUser();
      if (result) {
        console.log("Form Data:", { firstName, lastName, email, password1, role });
        router.push('/signup/success'); // Redirect to success page
      }
    } else {
      alert("Please fill out all fields.");
    }
  };

  if (!isMounted) return null;

  return (
    <div className="grid grid-cols-2 h-[1024px]">
      <div className="relative col-span-1 w-[720px] justify-center px-10 text-white bg-cover bg-center" style={{ backgroundImage: "url('https://s3-alpha-sig.figma.com/img/d5dc/c437/b6c3787691eff956e55a02f7f66e552c?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CYU25Cbp3Et1V24I92mqG8J-yiHI7zynIj79imlFVCTkih90vlDLZX40M8Nn8HxTPqKFyDGpqNdXVJdOUwFjrfl9hsgdvyFSyt1-t~dY7p-qsuW6zdXaIs0MNMDrB5TRWlNT19VrFvFVZVA~y8-xPYQUq0IKHi9bZI5vpYYiUIi1-OQS5fZWR52iRSJ9rfy~QdGZTItoKqbBDnXenyqpqB9oDOK5rv29FVqUrLF5UkH05Ffq4WN48UqjA42JLNnvJv~HutbgimYzI9UgsCLp4hIr89SlOWWIgLL~qIgcbwOB4tIa3lq5eE~elXw4sjeWNQvCfIRPSmiHbo8L4nXuug__')" }}>
        <div className="absolute inset-0 bg-[#1C1C1C] opacity-70"></div>

        <div className="relative z-10">
          <div className="relative">FashionFi</div>

          <div className="relative text-[48px] mt-36 font-semibold leading-tight">Begin your journey with FashionFi</div>

          <div className="text-white text-[16px] mt-7 font-light">{'//'.repeat(14)}</div>

          <div className="mt-16">
            <div className="items-start space-x-3">
              <div className="text-yellow-400 text-xl">🌟</div>
              <br />
              <div className="text-[18px]">Personalized Fitting: Enjoy a seamless tailoring experience designed around your unique measurements and style preferences.</div>
            </div>
            <div className="items-start space-x-3 mt-11">
              <div className="text-red-400 text-xl">🚀</div>
              <br />
              <p className="text-[18px]">Exclusive Offers & Updates: Be the first to know about our special promotions, new collections, and style tips.</p>
            </div>
            <div className="items-start space-x-3 mt-11">
              <div className="text-green-400 text-xl">🔓</div>
              <br />
              <div className="text-[18px]">Simple & Quick: Signing up takes just a few minutes—begin your journey towards impeccable style today!</div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-1 justify-center px-16 bg-white">
        <div className="text-3xl font-bold mb-6">Create an account</div>

        <form onSubmit={handleContinue} className="space-y-6">
          {/* First Name Field */}
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1A3A4F]"
          />

          {/* Last Name Field */}
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1A3A4F]"
          />

          {/* Email Field */}
          <input
            id="email"
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1A3A4F]"
          />

          {/* Password Field */}
          <input
            id="password1"
            type="password"
            placeholder="Password (min. 8 characters)"
            value={password1}
            onChange={handlePasswordChange}
            className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1A3A4F]"
          />

          {/* Confirm Password Field */}
          <input
            id="password2"
            type="password"
            placeholder="Confirm Password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1A3A4F]"
          />

          {/* Password Criteria Indicators */}
          <div className="space-y-1 text-sm text-gray-600">
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

          {/* Role Selection */}
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1A3A4F]"
          >
            <option value="CUSTOMER">Customer</option>
            <option value="TAILOR">Tailor</option>
          </select>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#1A3A4F] text-white py-4 rounded-md hover:bg-[#1A3A4F]/80 transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <p className="text-gray-600 text-center mt-4">
          Already have an account? <button onClick={handleLogInLink} className="text-[#1A3A4F] font-semibold">Log In</button>
        </p>
      </div>
    </div>
  );
}
