"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext } from 'react';
import { PropertyContext } from '@/context-api/PropertyContext';
import { EMAIL, PHONE } from "@/constants";
import { useTheme } from "next-themes";

const Footer = () => {
  const { updateFilter } = useContext(PropertyContext)!;
  const { theme, setTheme } = useTheme();

  return (
    <div role="contentinfo" className="relative z-10 bg-midnight_text dark:bg-semidark">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md pt-10 pb-5 px-0 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-4">
          <div className="md:col-span-4 col-span-12 flex flex-col items-start px-4 sm:px-0">
            <Link href="/" className="mb-6 inline-block max-w-40">
              <Image
                src="/images/logo/logo-white.svg"
                alt="logo"
                width={156}
                height={38}
              />
            </Link>

            {/* Theme Toggle in Footer */}
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex items-center gap-3 text-white/70 hover:text-white transition-colors py-2 px-3 border border-white/20 rounded-xl mb-6 bg-white/5"
            >
              {theme === "dark" ? (
                <>
                  <svg viewBox="0 0 16 16" className="h-4 w-4 fill-white">
                    <path d="M4.50663 3.2267L3.30663 2.03337L2.36663 2.97337L3.55996 4.1667L4.50663 3.2267ZM2.66663 7.00003H0.666626V8.33337H2.66663V7.00003ZM8.66663 0.366699H7.33329V2.33337H8.66663V0.366699V0.366699ZM13.6333 2.97337L12.6933 2.03337L11.5 3.2267L12.44 4.1667L13.6333 2.97337ZM11.4933 12.1067L12.6866 13.3067L13.6266 12.3667L12.4266 11.1734L11.4933 12.1067ZM13.3333 7.00003V8.33337H15.3333V7.00003H13.3333ZM7.99996 3.6667C5.79329 3.6667 3.99996 5.46003 3.99996 7.6667C3.99996 9.87337 5.79329 11.6667 7.99996 11.6667C10.2066 11.6667 12 9.87337 12 7.6667C12 5.46003 10.2066 3.6667 7.99996 3.6667ZM7.33329 14.9667H8.66663V13H7.33329V14.9667ZM2.36663 12.36L3.30663 13.3L4.49996 12.1L3.55996 11.16L2.36663 12.36Z" />
                  </svg>
                  <span className="text-xs font-bold uppercase tracking-widest">Light Mode</span>
                </>
              ) : (
                <>
                  <svg viewBox="0 0 23 23" className="h-4 w-4 fill-white">
                    <path d="M16.6111 15.855C17.591 15.1394 18.3151 14.1979 18.7723 13.1623C16.4824 13.4065 14.1342 12.4631 12.6795 10.4711C11.2248 8.47905 11.0409 5.95516 11.9705 3.84818C10.8449 3.9685 9.72768 4.37162 8.74781 5.08719C5.7759 7.25747 5.12529 11.4308 7.29558 14.4028C9.46586 17.3747 13.6392 18.0253 16.6111 15.855Z" />
                  </svg>
                  <span className="text-xs font-bold uppercase tracking-widest">Dark Mode</span>
                </>
              )}
            </button>
          </div>
          <div className="md:col-span-8 col-span-12 grid grid-cols-12 gap-4 px-4 sm:px-0">
            <div className="w-full lg:col-span-4 col-span-12">
              <h4 className="mb-4 text-lg text-white dark:text-white font-bold uppercase tracking-widest">
                Our Office
              </h4>
              <p className="mb-6 text-gray text-base leading-relaxed">
                Main Headquarters - Tegeta Branch<br />
                Dar es Salaam, Tanzania
              </p>
              <div className="flex items-center gap-2">
                <a
                  aria-label="social link"
                  href="/#"
                  className="p-1 rounded-md text-midnight_text bg-white bg-opacity-50 hover:bg-primary"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path d="M16.294 8.86875H14.369H13.6815V8.18125V6.05V5.3625H14.369H15.8128C16.1909 5.3625 16.5003 5.0875 16.5003 4.675V1.03125C16.5003 0.653125 16.2253 0.34375 15.8128 0.34375H13.3034C10.5878 0.34375 8.69714 2.26875 8.69714 5.12187V8.1125V8.8H8.00964H5.67214C5.19089 8.8 4.74402 9.17812 4.74402 9.72812V12.2031C4.74402 12.6844 5.12214 13.1313 5.67214 13.1313H7.94089H8.62839V13.8188V20.7281C8.62839 21.2094 9.00652 21.6562 9.55652 21.6562H12.7878C12.994 21.6562 13.1659 21.5531 13.3034 21.4156C13.4409 21.2781 13.544 21.0375 13.544 20.8312V13.8531V13.1656H14.2659H15.8128C16.2596 13.1656 16.6034 12.8906 16.6721 12.4781V12.4438V12.4094L17.1534 10.0375C17.1878 9.79688 17.1534 9.52187 16.9471 9.24687C16.8784 9.075 16.569 8.90312 16.294 8.86875Z" />
                  </svg>
                </a>
                <a
                  aria-label="social link"
                  href="/#"
                  className="p-1 rounded-md text-midnight_text bg-white bg-opacity-50 hover:bg-primary"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                  </svg>
                </a>
                <a
                  aria-label="social link"
                  href="/#"
                  className="p-1 rounded-md text-midnight_text bg-white bg-opacity-50 hover:bg-primary"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="w-full lg:col-span-4 col-span-12">
              <h4 className="mb-4 text-lg text-white dark:text-white font-bold uppercase tracking-widest">
                Resources
              </h4>
              <ul>
                <li>
                  <Link href="/faq" className="mb-3 inline-block text-base text-gray hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/impact" className="mb-3 inline-block text-base text-gray hover:text-white">
                    Social Impact
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="mb-3 inline-block text-base text-gray hover:text-white">
                    Company News
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full lg:col-span-4 col-span-12">
              <h4 className="mb-4 text-lg text-white dark:text-white font-bold uppercase tracking-widest">
                Our Solutions
              </h4>
              <ul>
                <li>
                  <Link href="/#micro-lending" className="mb-3 inline-block text-base text-gray hover:text-white">
                    Market Trader Loans
                  </Link>
                </li>
                <li>
                  <Link href="/#asset-financing" className="mb-3 inline-block text-base text-gray hover:text-white">
                    Vehicle Financing
                  </Link>
                </li>
                <li>
                  <Link href="/#sme" className="mb-3 inline-block text-base text-gray hover:text-white">
                    Enterprise Credit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border dark:border-dark_border py-8">
        <div className="container flex flex-col lg:flex-row justify-between items-center mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="lg:max-w-45 max-w-full text-center lg:text-left mb-4 lg:mb-0">
            <div className="flex lg:flex-nowrap flex-wrap lg:flex-row lg:gap-11 gap-4 text-base sm:text-lg md:text-xl text-black text-opacity-50">
              <p className="text-white">
                Hotline :
                <Link href={`tel:${PHONE.replace(/\s/g, '')}`} className="text-gray hover:text-white ml-2">{PHONE}</Link>
              </p>
              <p className="text-white">
                Support :
                <Link href={`mailto:${EMAIL}`} className="text-gray hover:text-white ml-2">{EMAIL}</Link>
              </p>
            </div>
          </div>
          <div className="max-w-lg w-full">
            <div className="flex justify-center lg:justify-end">
              <p className="items-center flex mr-3 text-base sm:text-lg md:text-xl font-bold text-white uppercase tracking-widest">Newsletter</p>
              <input
                type="text"
                className="py-3 dark:bg-darkmode dark:text-gray !rounded-r-none border border-transparent dark:border-dark_border dark:focus:border-primary focus-visible:outline-none rounded-l-lg px-3 w-full sm:w-auto "
                placeholder="Email address"
              />
              <button className="py-2 px-5 sm:px-9 bg-primary text-base text-white rounded-r-lg hover:bg-blue-700 font-bold uppercase tracking-widest">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;