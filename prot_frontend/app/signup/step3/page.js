"use client";
import SignUpStep3 from '../../../components/SignUpStep3';
import { useState, useEffect } from 'react';

export default function Step3() {
  const [formData, setFormData] = useState({});
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const updateFormData = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  if (!isMounted) return null;

  return <SignUpStep3 updateFormData={updateFormData} formData={formData} />;
}
