// pages/signup/success.jsx
"use client";
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Success() {
  const router = useRouter();

  useEffect(() => {
    // Redirect after 3 seconds
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000);

    // Clean up the timer if the component unmounts before the timeout completes
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="w-screen h-screen mt-36">
      <div className="flex items-center justify-center">
        <div className="text-center">
          <Image
            className="w-[350px]"
            src="https://s3-alpha-sig.figma.com/img/a26e/3285/8ff9814ecba62a4b5672cece7f720045?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RqgIs1s1-snnd7PkdLREx8K6DYUrVKqNOCweUgbpCoWBKQS22HvryXVwF5wjee87ZjTfqlvEwmRtNgXVKRXGFiNNjv~Ysr5hfW-vvcKfoHMKy2yh1EDMs1kizqh3Zs6UN-pSxoThLFikFzgbkq1-cxoVpwTyVDKzArXUgYfEs7yHoVK-vqg2uXnDFFA0nbp4gmW22J~KTKiXBRxlHaYVNl2Aw91DAAuk5THlSKrw48cL1O6XqykW1md7V7W25bb2y6PUEysfNoCOX39hIrjTrxtYBM8UIR9C~cPd73B07OzRvLxMbMTy6saX77C0skWQNCzrR4hrNH-k4te3B~sGHg__"
            alt="Success"
          />
        </div>
      </div>
      <div className="text-center text-[32px] font-semibold">Account Successfully Created</div>
      <div className="text-center text-[14px] mt-4">
        Congratulations! You&apos;ve successfully signed up as a user with FashionFi.
        Now you can explore exciting <br /> opportunities and start making a real impact.
      </div>
    </div>
  );
}
