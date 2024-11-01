// components/SignUpStep3.tsx
"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SignUpStep3({ updateFormData, formData }) {
  const router = useRouter();
  
  // Initialize state for each form field
  const [firstName, setFirstName] = useState(formData.firstName || '');
  const [lastName, setLastName] = useState(formData.lastName || '');
  const [middleName, setMiddleName] = useState(formData.middleName || '');
  const [phone, setPhone] = useState(formData.phone || '');
  const [state, setState] = useState(formData.state || '');
  const [country, setCountry] = useState(formData.country || '');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensures component renders only after mounting
  }, []);
  // Handler for final submission
  const handleSubmit = () => {
    if (termsAccepted) {
      const personalInfo = { firstName, lastName, middleName, phone, state, country };
      updateFormData(personalInfo);
      
      // Placeholder for API call
      console.log('Form Data Submitted:', { ...formData, ...personalInfo });
      
      // Redirect to a success page or home page after submission
      router.push('/success');
    } else {
      alert('Please accept the terms and conditions to proceed.');
    }
  };

  if (!isMounted) return null;


  return (
    <div className="flex min-h-screen">
        {/* Left Side - Information Section */}
        <div className="w-[720px] h-[1020px] lg:w-1/2 bg-[#1A3A4F] text-white p-8 flex flex-col justify-center items-start">
        <div className="relative z-10">
            <div>FashionFi</div>
            <div className="text-[48px] mt-36 font-semibold leading-tight">Begin your journey with FashionFi</div>
            <div className="text-white text-[16px] mt-7 font-light">
                {/* Placeholder divider */}
                {'//'.repeat(14)}
            </div>
            <div className="mt-16">
            <div class=" items-start space-x-3">
                <div class="text-yellow-400 text-xl">🌟</div>
                <br/>
                <div class="text-[18px]">Personalized Fitting: Enjoy a seamless tailoring experience designed around your unique measurements and style preferences.</div>
                </div>
                <div class=" items-start space-x-3 mt-11">
                <div class="text-red-400 text-xl">🚀</div>
                <br/>
                <p class="text-[18px]">Exclusive Offers & Updates: Be the first to know about our special promotions, new collections, and style tips.</p>
                </div>
                <div class=" items-start space-x-3 mt-11">
                <div class="text-green-400 text-xl">🔓</div>
                <br/>

                <div class="text-[18px]">Simple & Quick: Signing up takes just a few minutes—begin your journey towards impeccable style today!</div>
                </div>
            </div>
        </div>
        </div>

        {/* Right Side - Personal Info Form */}
        <div className="w-full lg:w-1/2 bg-white p-8 flex flex-col">
        <div className="flex items-center text-sm text-gray-500 mb-8 space-x-2 text-left">
            <span className="bg-[#1A3A4F] text-white w-[16px] h-[16px] rounded-full font-semibold">1</span>
            <span className="text-[#1A3A4F] font-bold">Sign Up</span>
            <span></span>
            <span className="bg-[#1A3A4F] text-white w-[16px] h-[16px] rounded-full font-semibold">2</span>
            <span className="text-[#1A3A4F] font-bold">Verify Email</span>
            <span></span>
            <span className="bg-[#1A3A4F] text-white w-[16px] h-[16px] rounded-full font-semibold">3</span>
            <span className="text-[#1A3A4F] font-bold">Personnel Info</span>
        </div>

        <button onClick={() => router.back()} className="text-blue-900 text-sm self-start mb-8 ml-4">← Back</button>

        <div className="text-left">
            <span className="text-[24px] font-bold text-[#1A3A4F] mb-2 block mt-36">Let’s complete your profile</span>
            <span className="block text-[14px] text-[#808080] mb-8">Fill in the remaining details to complete your profile</span>
        </div>

        {/* Input Fields */}
        <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
            <span className="block text-[14px] text-[#1C1C1C] mb-2">First name</span>
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter firstname" className="bg-gray-100 w-[250px] h-[45px] p-2 rounded-md" />
            </div>
            <div>
            <span className="block text-[14px] text-[#1C1C1C] mb-2">Last name</span>
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter lastname" className="bg-gray-100 w-[250px] h-[45px] p-2 rounded-md" />
            </div>
            <div>
            <span className="block text-[14px] text-[#1C1C1C] mb-2">Middle name</span>
            <input value={middleName} onChange={(e) => setMiddleName(e.target.value)} placeholder="Enter middle name" className="bg-gray-100 w-[250px] h-[45px] p-2 rounded-md" />
            </div>
            <div>
            <span className="block text-[14px] text-[#1C1C1C] mb-2">Phone number</span>
            <div className="flex bg-gray-100 p-2 rounded-md">
                <span className="mr-2">🇳🇬 +234</span>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter phone number" className="bg-gray-100 w-[250px] h-[45px] p-2 rounded-md" />
            </div>
            </div>
            <div>
            <span className="block text-[14px] text-[#1C1C1C] mb-2">State</span>
            <input value={state} onChange={(e) => setState(e.target.value)} placeholder="Enter state" className="bg-gray-100 w-[250px] h-[45px] p-2 rounded-md" />
            </div>
            <div>
            <span className="block text-[14px] text-[#1C1C1C] mb-2">Country</span>
            <input value={country} onChange={(e) => setCountry(e.target.value)} placeholder="e.g Nigeria" className="bg-gray-100 w-[250px] h-[45px] p-2 rounded-md" />
            </div>
        </div>

        {/* Terms Agreement */}
        <div className="flex items-center mb-6">
            <input
            type="checkbox"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            className="bg-white border-2 border-gray-300 rounded-sm w-4 h-4 mr-2"
            />
            <span className="text-sm text-[#1C1C1C]">By continuing, you agree to our <span className="text-[#1A3A4F]">Terms</span> and <span className="text-[#1A3A4F]">Privacy Policy</span>.</span>
        </div>
        
        {/* Final Submit Button */}
        <button
            onClick={handleSubmit}
            className="bg-[#1A3A4F] w-[435px] h-[48px] mt-6 ml-28 items-center justify-center text-white py-3 px-12 rounded-lg font-semibold text-lg"
        >
            Verify
        </button>
        </div>
    </div>
  );
}
