"use client"
import LoginPage from "@/components/login/login";
import { useState, useEffect } from "react"

export default function Login() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
    setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
    <div><LoginPage /></div>
    )
}