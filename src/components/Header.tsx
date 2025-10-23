'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-teal-600 font-bold text-xl">N</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#about"
                className="text-white hover:text-teal-200 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </a>
              <a
                href="#events"
                className="text-white hover:text-teal-200 px-3 py-2 text-sm font-medium transition-colors"
              >
                Events
              </a>
              <a
                href="#contact"
                className="text-white hover:text-teal-200 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </a>
              <a
                href="#join"
                className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Join Us
              </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-teal-200 inline-flex items-center justify-center p-2 rounded-md"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
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
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-sm rounded-lg mt-2">
              <a
                href="#about"
                className="text-gray-700 hover:text-teal-600 block px-3 py-2 text-base font-medium"
              >
                About
              </a>
              <a
                href="#events"
                className="text-gray-700 hover:text-teal-600 block px-3 py-2 text-base font-medium"
              >
                Events
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-teal-600 block px-3 py-2 text-base font-medium"
              >
                Contact
              </a>
              <a
                href="#join"
                className="bg-teal-500 hover:bg-teal-600 text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Join Us
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
