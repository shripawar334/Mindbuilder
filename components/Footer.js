import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Why Us", href: "/why-us" },
  { name: "Impact", href: "/impact" },
  { name: "Testimonials", href: "/testimonials" },
];

export default function Footer() {
  return (
    <footer
      className="border-t transition-colors duration-500"
      style={{
        borderColor: "var(--border)",
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-3"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl border text-xl font-bold transition-colors duration-500"
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--accent) 30%, transparent)",
                  backgroundColor:
                    "color-mix(in srgb, var(--accent) 10%, transparent)",
                  color: "var(--accent)",
                }}
              >
                R
              </div>

              <div>
                <h2 className="text-base font-semibold tracking-wide">
                  Rishabh Randive
                </h2>

                <p
                  className="text-xs"
                  style={{ color: "var(--muted)" }}
                >
                  Mindset & Mentorship
                </p>
              </div>
            </Link>

            <p
              className="mt-6 max-w-md text-sm leading-7"
              style={{ color: "var(--muted)" }}
            >
              Beyond Books — empowering students with the right mindset,
              discipline, consistency and mental strength to move towards
              their goals.
            </p>

            {/* Tagline */}
            <div className="mt-6">
              <p
                className="text-sm font-medium"
                style={{ color: "var(--accent)" }}
              >
                Dream → Discipline → Consistency → Result
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-block text-sm transition duration-300"
                    style={{ color: "var(--muted)" }}
                  >
                    <span className="transition duration-300 group-hover:text-[var(--accent)]">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Get In Touch
            </h3>

            <div
              className="mt-5 space-y-4 text-sm"
              style={{ color: "var(--muted)" }}
            >
              <a
                href="mailto:your@email.com"
                className="group block transition duration-300 hover:text-[var(--accent)]"
              >
                your@email.com
              </a>

              <a
                href="tel:+910000000000"
                className="group block transition duration-300 hover:text-[var(--accent)]"
              >
                +91 XXXXX XXXXX
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 pt-2 font-medium transition duration-300 hover:translate-x-1"
                style={{ color: "var(--accent)" }}
              >
                Contact Us
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-10 h-px"
          style={{ backgroundColor: "var(--border)" }}
        />

        {/* Bottom Footer */}
        <div
          className="flex flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between"
          style={{ color: "var(--muted)" }}
        >
          <p>
            © {new Date().getFullYear()} Rishabh Randive. All rights reserved.
          </p>

          <p>
            Built with purpose. Driven by impact.
          </p>
        </div>
      </div>
    </footer>
  );
}