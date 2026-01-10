"use client";

import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

interface SocialShareProps {
    title: string;
    variant?: "sidebar" | "bottom";
}

export default function SocialShare({ title, variant = "sidebar" }: SocialShareProps) {
    const [url, setUrl] = useState("");

    useEffect(() => {
        setUrl(window.location.href);
    }, []);

    const shareLinks = [
        {
            name: "Facebook",
            icon: "mdi:facebook",
            color: "hover:bg-blue-600",
            href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        },
        {
            name: variant === "sidebar" ? "X / Twitter" : "Twitter",
            icon: "mdi:twitter",
            color: "hover:bg-sky-500",
            href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
        },
        {
            name: variant === "sidebar" ? "LinkedIn" : "Linkedin",
            icon: "mdi:linkedin",
            color: "hover:bg-blue-700",
            href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        },
    ];

    if (variant === "bottom") {
        return (
            <div className="mt-12 pt-8 border-t border-border dark:border-dark_border">
                <h3 className="text-2xl font-black text-midnight_text dark:text-white uppercase tracking-tighter italic mb-6">
                    Share This Insights
                </h3>
                <ul className="flex flex-wrap gap-6">
                    {shareLinks.map((social) => (
                        <li key={social.name}>
                            <a
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary font-bold uppercase tracking-widest text-sm transition-colors group"
                            >
                                <Icon icon={social.icon} className="text-xl group-hover:scale-110 transition-transform" />
                                {social.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    return (
        <div className="p-10 bg-midnight_text dark:bg-black rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 size-32 bg-primary/20 blur-3xl -translate-y-1/2 translate-x-1/2" />
            <h3 className="text-2xl font-black text-white uppercase tracking-tighter italic mb-8">Spread the Word</h3>
            <div className="flex flex-col gap-4">
                {shareLinks.map((social) => (
                    <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-4 p-5 rounded-2xl bg-white/10 text-white font-bold uppercase tracking-widest text-sm border border-white/10 ${social.color} transition-all group`}
                    >
                        <Icon icon={social.icon} className="text-xl group-hover:scale-125 transition-transform" />
                        {social.name}
                    </a>
                ))}
            </div>
        </div>
    );
}
