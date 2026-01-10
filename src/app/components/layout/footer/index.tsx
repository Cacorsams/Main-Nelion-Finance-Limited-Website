"use client";
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Mail, Moon, Sun } from 'lucide-react';
import { useTheme } from "next-themes";
import { PHONE, EMAIL, LOCATION, COMPANY_NAME } from '@/constants';
import { toast } from 'sonner';

// --- Sub-components ---
function NewsletterSection() {
  return (
    <div className="w-full bg-white dark:bg-gray-900 py-20 px-4 flex flex-col items-center text-center transition-colors duration-300">
      <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 tracking-tight">
        Subscribe
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg text-lg">
        We respect your financial privacy
      </p>

      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md mb-10">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-lg leading-5 bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-black dark:focus:ring-white focus:border-black dark:focus:border-white sm:text-sm transition-colors"
            placeholder="Enter your email address"
          />
        </div>
        <button className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors whitespace-nowrap">
          Subscribe
        </button>
      </div>
    </div>
  )
}

function DottedGlobe() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 overflow-hidden pointer-events-none opacity-80">
      <svg viewBox="0 0 400 400" className="w-full h-full text-white/20">
        <defs>
          <radialGradient id="globe-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
          <mask id="globe-mask">
            <circle cx="200" cy="200" r="180" fill="white" />
          </mask>
        </defs>

        <circle
          cx="200"
          cy="200"
          r="180"
          stroke="rgba(245, 240, 240, 0.11)"
          fill="url(#globe-gradient)"
          className="opacity-70000"
        />
        <circle
          cx="200"
          cy="200"
          r="180"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1"
          fill="none"
        />

        <path
          d="M 20 300 Q 600 50 380 200"
          stroke="rgba(168, 85, 247, 0.4)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 200 20 Q 350 600 200 380"
          stroke="rgba(168, 85, 247, 0.2)"
          strokeWidth="1"
          fill="none"
        />

        <g mask="url(#globe-mask)" fill="currentColor">
          {mounted && Array.from({
            length: 20,
          }).map((_, row) =>
            Array.from({
              length: 20,
            }).map((_, col) => {
              return null
            }),
          )}

          <image
            href="/africa.png"
            x="80"
            y="60"
            width="240"
            height="280"
            opacity="0.8"
            preserveAspectRatio="xMidYMid meet"
          />
          <circle
            cx="280"
            cy="240"
            r="3"
            className="text-purple-400 animate-pulse"
          />

          <circle
            cx="280"
            cy="240"
            r="8"
            stroke="rgba(168, 85, 247, 0.5)"
            fill="none"
          />

          <circle
            cx="280"
            cy="240"
            r="3"
            className="text-purple-400 animate-pulse"
            style={{
              animationDelay: '0.5s',
            }}
          />
          <circle
            cx="280"
            cy="240"
            r="8"
            stroke="rgba(168, 85, 247, 0.5)"
            fill="none"
          />

          <circle
            cx="280"
            cy="240"
            r="3"
            className="text-purple-400 animate-pulse"
            style={{
              animationDelay: '1s',
            }}
          />
          <circle
            cx="280"
            cy="240"
            r="8"
            stroke="rgba(168, 85, 247, 0.5)"
            fill="none"
          />
        </g>
      </svg>
    </div>
  )
}

function PromoCard() {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mb-24 z-10">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0a0a0a] border border-white/10 shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/40 via-black to-black opacity-80"></div>
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

        <div className="absolute inset-0 backdrop-blur-[2px]"></div>

        <div className="relative flex flex-col md:flex-row items-center justify-between p-10 md:p-16 min-h-[400px]">
          <div className="w-full md:w-1/2 z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Empowering <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 overflow-hidden">
                Tanzanian Ambition
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 animate-shine" style={{ animation: 'shine 3s ease-in-out' }}></span>
              </span>
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Flexible financing solutions for traders and businesses
            </p>
            <Link href="/#lets-grow" className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 active:scale-95 inline-block">
              Get started
            </Link>
          </div>

          <DottedGlobe />
        </div>
      </div>
    </div>
  )
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-2 text-white opacity-50">
        <div className="w-12 h-6 bg-gray-700 rounded-full" />
        <span className="text-sm font-medium">Switch Mood</span>
        <Sun className="w-4 h-4" />
      </div>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors group"
      aria-label="Toggle theme"
    >
      <div className="relative w-12 h-6 bg-gray-700 rounded-full transition-colors group-hover:bg-gray-600">
        <div
          className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${isDark ? 'translate-x-6' : 'translate-x-0'}`}
        />
      </div>
      <span className="text-sm font-medium">Switch Mood</span>
      {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
    </button>
  )
}

function FooterLinks() {
  return (
    <div className="bg-black pt-32 pb-12 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="flex items-center gap-4">
              <Image
                src="/nel.png"
                alt="Nelion Finance Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-2xl font-bold tracking-wide">
                Nelion Finance
              </span>
            </Link>

            <div>
              <h3 className="text-gray-400 font-medium mb-3">Our Office</h3>
              <div className="text-white space-y-1">
                <p className="font-semibold">Main Headquarters</p>
                <p>Tegeta Branch</p>
                <p>Dar es Salaam, Tanzania</p>
              </div>
            </div>

            <div>
              <ThemeToggle />
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2 lg:col-start-5">
            <h3 className="text-gray-400 font-medium mb-6">Company</h3>
            <ul className="space-y-4">
              {[
                { label: 'Home', href: '/' },
                { label: 'Careers', href: '/careers' },
                { label: 'News', href: '/blogs' },
                { label: 'Contact', href: '/contact' }
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white hover:text-purple-400 transition-colors text-sm font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-2">
            <h3 className="text-gray-400 font-medium mb-6">Solutions</h3>
            <ul className="space-y-4">
              {[
                { label: 'Micro-Lending', href: '/#micro-lending' },
                { label: 'Asset Financing', href: '/#asset-financing' },
                { label: 'SME Financing', href: '/#sme' }
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white hover:text-purple-400 transition-colors text-sm font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ),
              )}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h3 className="text-gray-400 font-medium mb-6">Resources</h3>
            <ul className="space-y-4">
              {[
                { label: 'FAQ', href: '/faq' },
                { label: 'Impact', href: '/impact' },
                { label: 'Let\'s Grow', href: '/#lets-grow' }
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white hover:text-purple-400 transition-colors text-sm font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h3 className="text-gray-400 font-medium mb-6">Support</h3>
            <ul className="space-y-4">
              <li>
                <div className="text-sm">
                  <p className="text-gray-400 mb-1">Hotline</p>
                  <Link
                    href={`tel:${PHONE.replace(/\s/g, '')}`}
                    className="text-white hover:text-purple-400 transition-colors font-medium"
                  >
                    {PHONE}
                  </Link>
                </div>
              </li>
              <li>
                <div className="text-sm">
                  <p className="text-gray-400 mb-1">Email</p>
                  <Link
                    href={`mailto:${EMAIL}`}
                    className="text-white hover:text-purple-400 transition-colors font-medium break-all"
                  >
                    {EMAIL}
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 Nelion Finance Limited • Empowering Tanzanian Ambition
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <div className="flex flex-col w-full">
      <NewsletterSection />
      <div className="bg-black">
        <div className="-mt-32">
          <PromoCard />
        </div>
        <FooterLinks />
      </div>
    </div>
  )
}