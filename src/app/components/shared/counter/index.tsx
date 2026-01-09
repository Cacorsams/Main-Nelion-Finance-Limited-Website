"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface CounterProps {
    from: number;
    to: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
}

export default function Counter({ from, to, duration = 4, suffix = "", prefix = "" }: CounterProps) {
    const [count, setCount] = useState(from);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number | null = null;
        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            setCount(Math.floor(progress * (to - from) + from));
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }, [isInView, from, to, duration]);

    return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
}
