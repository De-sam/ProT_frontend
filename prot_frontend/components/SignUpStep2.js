"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SignUpStep2({ updateFormData }) {
  const router = useRouter();
  const [code, setCode] = useState(['', '', '', '']);
  const [role, setRole] = useState(''); // Role state
  const [gender, setGender] = useState(''); // Gender state
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensures component renders only after mounting
  }, []);

  // Handle role selection
  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
    updateFormData({ role: selectedRole, gender }); // Include gender when updating form data
  };

  // Update specific digit in code array
  const handleCodeChange = (value, index) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  // Handle gender selection
  const handleGenderSelection = (selectedGender) => {
    setGender(selectedGender);
    updateFormData({ role, gender: selectedGender }); // Update form data with gender
  };

  // Handle "Verify" button click
  const handleVerify = () => {
    if (code.every((digit) => digit)) {
      const verificationCode = code.join('');
      console.log('Verification Code:', verificationCode); // Placeholder for actual verification
      router.push('/signup/step3'); // Navigate to next step
    } else {
      alert('Please enter the full verification code.');
    }
  };

  if (!isMounted) return null;

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Information Section */}
      <div className="w-full lg:w-1/2 bg-[#1A3A4F] text-white p-8 flex flex-col justify-center items-start">
        <div className="relative z-10">
          <div>FashionFi</div>
          <div className="text-[48px] mt-36 font-semibold leading-tight">Begin your journey with FashionFi</div>
          <div className="text-white text-[16px] mt-7 font-light">
            {'//'.repeat(14)}
          </div>
          <div className="mt-16">
            <div className="items-start space-x-3">
              <div className="text-yellow-400 text-xl">🌟</div>
              <br/>
              <div className="text-[18px]">Personalized Fitting: Enjoy a seamless tailoring experience designed around your unique measurements and style preferences.</div>
            </div>
            <div className="items-start space-x-3 mt-11">
              <div className="text-red-400 text-xl">🚀</div>
              <br/>
              <p className="text-[18px]">Exclusive Offers & Updates: Be the first to know about our special promotions, new collections, and style tips.</p>
            </div>
            <div className="items-start space-x-3 mt-11">
              <div className="text-green-400 text-xl">🔓</div>
              <br/>
              <div className="text-[18px]">Simple & Quick: Signing up takes just a few minutes—begin your journey towards impeccable style today!</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Verification Section */}
      <div className="w-full lg:w-1/2 bg-white p-8 flex flex-col">
        <div className="flex items-center text-sm text-gray-500 mb-8 space-x-2 text-left">
          <span className="bg-[#1A3A4F] text-white w-[16px] h-[16px] rounded-full font-semibold">1</span>
          <span className="text-[#1A3A4F] font-bold">Sign Up</span>
          <span></span>
          <span className="bg-[#1A3A4F] text-white w-[16px] h-[16px] rounded-full font-semibold">2</span>
          <span className="text-[#1A3A4F] font-bold">Select Role</span>
          <span></span>
          <span className="w-[16px] h-[16px] border-2 rounded-full">3</span>
          <span className="text-black">Personnel Info</span>
        </div>

        <button onClick={() => router.back()} className="text-blue-900 text-sm self-start mb-8 ml-4">← Back</button>

        <div className="text-center">
          <span className="text-2xl font-bold text-[#1A3A4F] mb-2 block mt-36">Select Your Role</span>
          <span className="text-sm text-gray-600 block mb-6">
            Choose to sign up as either a client or a fashion designer.
          </span>
        </div>

        {/* Role Selection Buttons */}
        <div className="grid grid-cols-2 gap-4 mx-12 mb-6">
          <button
            onClick={() => handleRoleSelection('Client/User')}
            className={`col-span-1 border w-full h-[200px] ${role === 'Client/User' ? 'bg-[#1A2A4F]' : 'bg-gray-100'} text-[20px] font-semibold rounded-lg`}
          >
            <span className="text-white align-middle flex justify-center">Client/User</span>
          </button>
          <button
            onClick={() => handleRoleSelection('Fashion Designer')}
            className={`col-span-1 border w-full h-[200px] ${role === 'Fashion Designer' ? 'bg-[#8B3A3A]' : 'bg-gray-100'} text-[20px] font-semibold rounded-lg`}
          >
            <span className="text-white align-middle flex justify-center">Fashion Designer</span>
          </button>
        </div>

        {/* Gender Selection Section */}
        <div className="text-center mb-6">
          <span className="text-2xl font-bold text-[#1A3A4F] mb-2 block">Select Your Gender</span>
          <span className="text-sm text-gray-600 block mb-6">
            Please choose your gender.
          </span>
          <div className="flex justify-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="Male"
                checked={gender === 'Male'}
                onChange={() => handleGenderSelection('M')}
                className="mr-2"
              />
              Male
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="Female"
                checked={gender === 'Female'}
                onChange={() => handleGenderSelection('F')}
                className="mr-2"
              />
              Female
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="Other"
                checked={gender === 'Other'}
                onChange={() => handleGenderSelection('Other')}
                className="mr-2"
              />
              Other
            </label>
          </div>
        </div>

        {/* Verification Code Section */}
        <div className="text-center">
          <span className="text-2xl font-bold text-[#1A3A4F] mb-2 block">Verification Code</span>
          <span className="text-sm text-gray-600 block mb-6">
            Please enter the code sent to your email/phone to verify your identity and continue.
          </span>
        </div>

        <div className="flex items-center justify-center space-x-4 mb-6">
          {code.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleCodeChange(e.target.value, index)}
              className="w-16 h-16 border border-gray-300 rounded-lg text-center text-lg text-gray-800"
            />
          ))}
        </div>

        <button
          onClick={() => alert('Resend code functionality here')}
          className="text-[#1A3A4F] font-semibold text-sm mb-4"
        >
          Didn’t get a code? <span className="underline">Click to resend</span>
        </button>

        <button
          onClick={handleVerify}
          className="bg-[#1A3A4F] w-[435px] h-[48px] items-center justify-center text-white py-3 px-12 rounded-lg font-semibold text-lg"
        >
          Verify
        </button>
      </div>
    </div>
  );
}
