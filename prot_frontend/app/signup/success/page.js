"use client"
import Success from "@/components/success"
import { useState, useEffect } from "react"

export default function Succes() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
    setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
    <div><Success /></div>
    )
}
