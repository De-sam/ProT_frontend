"use client";
import SignUpStep1 from '../../../components/SignUpStep1';
import { useState, useEffect } from 'react';

export default function Step1() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <SignUpStep1 />;
}
