"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Why Us", href: "/why-us" },
  { name: "Impact", href: "/impact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const isBlue = theme === "blue";

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav
        className="border-b backdrop-blur-xl transition-all duration-500"
        style={{
          backgroundColor: "var(--nav-bg)",
          borderColor: "var(--border)",
        }}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3"
            onClick={() => setMenuOpen(false)}
          >
            <div
              className="flex h-11 w-11 items-center justify-center rounded-xl border text-lg font-bold transition-all duration-500"
              style={{
                borderColor: "var(--accent)",
                color: "var(--accent)",
                backgroundColor: "var(--accent-soft)",
              }}
            >
              M
            </div>

            <div className="hidden sm:block">
              <h1
                className="text-sm font-semibold tracking-wide"
                style={{ color: "var(--foreground)" }}
              >
                MindBuilder
              </h1>

              <p
                className="text-xs"
                style={{ color: "var(--muted)" }}
              >
                Mindset & Mentorship
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative text-sm font-medium transition-all duration-300"
                style={{ color: "var(--muted)" }}
              >
                {link.name}

                <span
                  className="absolute -bottom-2 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: "var(--accent)" }}
                />
              </Link>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--surface)",
              color: "var(--foreground)",
            }}
            aria-label="Toggle website theme"
          >
            <span className="text-sm">
              {isBlue ? "◐" : "◑"}
            </span>

            <span>
              {isBlue ? "B&W" : "Blue"}
            </span>
          </button>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300"
              style={{
                backgroundColor: "var(--accent)",
                color: "var(--cta-text)",
              }}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border lg:hidden"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--surface)",
              color: "var(--foreground)",
            }}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-5 bg-current transition duration-300 ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />

              <span
                className={`block h-0.5 w-5 bg-current transition duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`block h-0.5 w-5 bg-current transition duration-300 ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`overflow-hidden border-t transition-all duration-300 lg:hidden ${
            menuOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
          style={{
            backgroundColor: "var(--nav-bg)",
            borderColor: "var(--border)",
          }}
        >
          <div className="space-y-1 px-6 py-5">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-medium transition-all duration-300"
                style={{ color: "var(--muted)" }}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-medium"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--surface)",
                color: "var(--foreground)",
              }}
            >
              <span>{isBlue ? "◐" : "◑"}</span>
              Switch to {isBlue ? "Black & White" : "Blue"}
            </button>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 block rounded-lg px-4 py-3 text-center text-sm font-semibold"
              style={{
                backgroundColor: "var(--accent)",
                color: "var(--cta-text)",
              }}
            >
              Get Started
            </Link>

          </div>
        </div>
      </nav>
    </header>
  );
}