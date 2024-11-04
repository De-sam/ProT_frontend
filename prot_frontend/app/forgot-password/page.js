"use client"
import ForgotPassword from "@/components/passwordReset/resetRequest";
import { useState, useEffect } from "react"

export default function Login() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
    setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
    <div><ForgotPassword /></div>
    )
}