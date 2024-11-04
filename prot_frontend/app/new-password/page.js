"use client"
import NewPassword from "@/components/passwordReset/changePassword"
import { useState, useEffect } from "react"

export default function Login() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
    setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
    <div><NewPassword /></div>
    )
}