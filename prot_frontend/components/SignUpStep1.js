// components/SignUpStep1.jsx
"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SignUpStep1({ updateFormData }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensures component renders only after mounting
  }, []);

  const handleContinue = (e) => {
    e.preventDefault();
    if (email && password) {
      updateFormData({ email, password });
      router.push('/signup/step2'); // Move to the next page
    }
  };

  // Avoid rendering if not mounted
  if (!isMounted) return null;

  return (
    <div className="grid grid-cols-2 h-[1024px]">
      <div
        className="relative col-span-1 w-[720px] justify-center px-10 text-white bg-cover bg-center"
        style={{
          backgroundImage: `url('https://s3-alpha-sig.figma.com/img/d5dc/c437/b6c3787691eff956e55a02f7f66e552c?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CYU25Cbp3Et1V24I92mqG8J-yiHI7zynIj79imlFVCTkih90vlDLZX40M8Nn8HxTPqKFyDGpqNdXVJdOUwFjrfl9hsgdvyFSyt1-t~dY7p-qsuW6zdXaIs0MNMDrB5TRWlNT19VrFvFVZVA~y8-xPYQUq0IKHi9bZI5vpYYiUIi1-OQS5fZWR52iRSJ9rfy~QdGZTItoKqbBDnXenyqpqB9oDOK5rv29FVqUrLF5UkH05Ffq4WN48UqjA42JLNnvJv~HutbgimYzI9UgsCLp4hIr89SlOWWIgLL~qIgcbwOB4tIa3lq5eE~elXw4sjeWNQvCfIRPSmiHbo8L4nXuug__')`,
        }}
      >
        <div className="absolute inset-0 bg-[#1C1C1C] opacity-70"></div>
        <div className="relative z-10">
          <div>FashionFi</div>
          <div className="text-[48px] mt-36 font-semibold leading-tight">Begin your journey with FashionFi</div>
          <div className="text-white text-[16px] mt-7 font-light">
            {/* Placeholder divider */}
            {'//'.repeat(14)}
          </div>
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
        <div class="flex items-center space-x-2 text-gray-500 text-sm mb-4">
            <span class="bg-[#1A3A4F] text-white w-[16px] h-[16px] rounded-full font-semibold">1</span> <span class="text-black">Sign Up</span>
            <span class="text-black">›</span>
            <span class="text-black border w-[16px] h-[16px] rounded-full">2 </span><span class="text-black">Verify email</span>
            <span class="text-black">›</span>
            <span class="text-black w-[16px] h-[16px] rounded-full border">3 </span> <span class="text-black">PersonalInfo</span>
        </div>

        <div className="text-xl font-semibold mb-2 mt-36">Step 1/3</div>
        <div className="text-3xl font-bold mb-6">Create an account</div>
        <p className="text-gray-500 mb-8">Sign up with FashionFi.</p>

        <form onSubmit={handleContinue} className="space-y-6">
          <div>
            <input
              id="email"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1A3A4F]"
            />
          </div>

          <div>
            <input
              id="password"
              type="password"
              placeholder="Password (min. 8 characters)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1A3A4F]"
            />
          </div>

          <button type="submit" className="w-full py-4 bg-[#1A3A4F] text-white font-semibold rounded-md hover:bg-[#1A3A4F]">
            Continue
          </button>
        </form>

        <p className="text-gray-600 text-center mt-4">
          Already have an account? <a href="#" className="text-[#1A3A4F] font-semibold">Login</a>
        </p>
      </div>
    </div>
  );
}
