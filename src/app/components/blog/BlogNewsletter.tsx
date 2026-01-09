"use client";
import React from 'react';
import { toast } from 'sonner';

export default function BlogNewsletter() {
    return (
        <div className="p-10 bg-white/5 backdrop-blur-xl border border-border dark:border-dark_border rounded-[3rem] shadow-xl">
            <h3 className="text-2xl font-black text-midnight_text dark:text-white uppercase tracking-tighter italic mb-6">Stay Informed</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">Join our inner circle for strategic updates and market wisdom.</p>
            <form
                className="space-y-4"
                onSubmit={async (e) => {
                    e.preventDefault();
                    const email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value;

                    const toastId = toast.loading('Joining...');

                    try {
                        const res = await fetch('/api/resendapi', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ email, type: 'newsletter' })
                        });

                        if (res.ok) {
                            toast.success('Thank you for joining!', { id: toastId });
                            (e.target as HTMLFormElement).reset();
                        } else {
                            toast.error('Failed to join. Please try again.', { id: toastId });
                        }
                    } catch (err) {
                        toast.error('An error occurred.', { id: toastId });
                    }
                }}
            >
                <input
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full p-5 bg-white dark:bg-semidark border border-border dark:border-dark_border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium"
                />
                <button type="submit" className="w-full py-5 bg-primary text-white font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-primary/30 hover:bg-blue-700 transition-all">
                    Join Now
                </button>
            </form>
        </div>
    );
}
