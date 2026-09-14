"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const navItems = [
  { label: "Overview", href: "/" },
  { label: "Logo", href: "/logo" },
  { label: "Typography", href: "/typography" },
  { label: "Color", href: "/color" },
  { label: "Imagery", href: "/imagery" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[#20222b]/10 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        {/* Brand identity */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-7 relative flex items-center">
            <Image
              src="/assets/logos/svg/PUAI Icon_Coral.svg"
              alt="PUAI Icon"
              width={36}
              height={26}
              priority
              className="transition-transform duration-200 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight text-[#20222b] leading-tight">
              People using ai
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${isActive
                  ? "text-[#20222b] bg-[#ffebee] font-semibold"
                  : "text-[#5d5d6b] hover:text-[#20222b] hover:bg-black/[0.03]"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/assets/downloads/puai-full-brand-kit.zip"
            download="puai-full-brand-kit.zip"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-[#20222b] text-white hover:bg-[#f03c4f] transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98]"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Brand Kit (.zip)
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#20222b] hover:bg-black/5"
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#20222b]/10 bg-white px-6 py-5 space-y-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-base font-medium ${isActive
                  ? "text-[#20222b] bg-[#ffebee] font-semibold"
                  : "text-[#5d5d6b] hover:text-[#20222b] hover:bg-black/[0.03]"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-2 border-t border-black/5">
            <a
              href="/assets/downloads/puai-full-brand-kit.zip"
              download="puai-full-brand-kit.zip"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider bg-[#20222b] text-white"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Full Brand Kit (.zip)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
