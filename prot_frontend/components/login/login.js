// components/LoginPage.jsx
"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  // Log in user function
  const loginUser = async () => {
    try {
      const response = await fetch('/api/userauth/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('access_token', data.access);
        router.push('/dashboard'); // Redirect after successful login
      } else {
        alert(`Error: ${data.message || 'Login failed'}`);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login.");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      loginUser(); // Call API if fields are filled
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className="grid grid-cols-2 h-[1024px]">
      {/* Left Column with Background Image */}
      <div
        className="relative col-span-1 w-[720px] justify-center px-10 text-white bg-cover bg-center"
        style={{
          backgroundImage: `url('https://s3-alpha-sig.figma.com/img/9554/5c6f/32e3d92e190d548e078619d6907eb48c?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=au2VAwdtORHwlQoP2YKDefzFgoUIgFQLG0lrSjTkQ575HH1mJqLiYYyEeoZOkeZPmSUnmFuHqSEVumxcF9zG36mPdIqG38WoQCpXm47z-C3QXvcmLj~NX9f-7e6KGAhrnkG9intum6bns7vPOkHaCFftpff784VstGFhpqxfTLJkua~DDHsZ0NNz1XbSMGjCjBorx6yc-NSyJn~ReV2mTx0gwXuJ3Ic~HDRXj5ugUMbKebWQhPsAevlvB2C5AuOvjQa~mnq~uKwGpUVgNHu~1sDhCk36j4A85mvZJWzOspSxLY75e9osUI~rDvSSIWfJ5sPYSgF7jMgPdHYcI2kmQg__')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#1C1C1C] opacity-70"></div>
        
        {/* Main Content */}
        <div className="relative items-center justify-center z-10 m-3 mt-80">
          <div className="text-[48px] text-left font-semibold">
            Continue your journey with FashionFi
          </div>
          <div className="text-[14px] mt-2">
            Login to unlock a world of custom-tailored fashion, crafted just for you.
            Whether it&apos;s a fit for every occasion or unique designs that reflect your personality, our tailoring services are here to meet your every need.
          </div>
        </div>
      </div>

      {/* Right Column with Form */}
      <div className="col-span-1 justify-center px-16 bg-white">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center text-[20px] font-bold text-[#1C1C1C] text-sm mb-4">
          FashionFi
        </div>

        {/* Form Title */}
        <div className="text-xl font-semibold mb-2 mt-36">Step 1/3</div>
        <div className="text-3xl font-bold mb-6">Log in to your account</div>
        <p className="text-gray-500 mb-8 text-[14px]">
          Log in now to stay connected and continue making an impact.
        </p>

        {/* Sign-Up Buttons */}
        <div className="space-y-4 grid grid-cols-2">
          <button className="col-span-1 mr-3 flex items-center justify-center w-full py-3 border border-gray-300 rounded-md bg-[#EAF2FF] hover:bg-gray-100">
            <Image src="https://img.icons8.com/color/48/000000/google-logo.png" className="w-[24px] h-[24px]" alt="Google logo" />
            Sign up with Google
          </button>
          <button className="col-span-1 ml-3 flex items-center justify-center w-full py-3 border border-gray-300 rounded-md bg-[#EAF2FF] hover:bg-gray-100">
            <Image src="https://img.icons8.com/ios-filled/50/000000/mac-os.png" className="w-[24px] h-[24px] mr-2" alt="Apple logo" />
            Login with Apple
          </button>
        </div>

        {/* Divider Line */}
        <div className="relative flex items-center justify-center my-6">
          <span className="absolute px-4 bg-white text-black">OR CONTINUE WITH EMAIL</span>
          <div className="w-full border-t border-gray-300"></div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1A3A4F]"
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password (min. 8 characters)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1A3A4F]"
            />
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="grid grid-cols-2">
            <div className="col-span-1 flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                className="mr-2"
              />
              <label htmlFor="rememberMe" className="text-sm text-[#1C1C1C]">Remember me</label>
            </div>
            <div className="col-span-1 text-right">
              <button className="text-[#1A3A4F] text-[14px] font-semibold">
                Forgotten password?
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-[#1A3A4F] text-white font-semibold rounded-md hover:bg-[#1A3A4F]"
          >
            Login
          </button>
        </form>

        {/* Sign-Up Link */}
        <p className="text-gray-600 text-center mt-4">
          Don&apos;t have an account? <a href="#" className="text-[#1A3A4F] font-semibold">Sign up</a>
        </p>
      </div>
    </div>
  );
}
