"use client";
import SignUpStep1 from '../../../components/SignUpStep1';
import { useState, useEffect } from 'react';

export default function Step1() {
  const [formData, setFormData] = useState({});
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const updateFormData = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  if (!isMounted) return null;

  return <SignUpStep1 updateFormData={updateFormData} />;
}
