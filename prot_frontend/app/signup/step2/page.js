// pages/signup/step2.tsx
"use client";
import SignUpStep2 from '../../../components/SignUpStep2';
import { useEffect, useState } from 'react';

export default function Step2() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <SignUpStep2 />;
}
