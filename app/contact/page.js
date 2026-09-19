import Link from "next/link";

const contactDetails = [
  {
    number: "01",
    title: "Email",
    value: "consult.rishabhr@gmail.com",
    description: "For program and mentorship enquiries.",
    href: "mailto:consult.rishabhr@gmail.com",
  },
  {
    number: "02",
    title: "Phone",
    value: "+91 8459348307",
    description: "Connect directly for more information.",
    href: "tel:+918459348307",
  },
  {
    number: "03",
    title: "Location",
    value: "Location to be updated",
    description: "Details will be updated soon.",
    href: "#",
  },
];

export default function Contact() {
  return (
    <main
      className="overflow-hidden transition-colors duration-500"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative px-6 pb-20 pt-40 lg:px-8">
        <div
          className="pointer-events-none absolute left-1/2 top-10 h-[450px] w-[450px] -translate-x-1/2 rounded-full blur-[140px]"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--accent) 10%, transparent)",
          }}
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p
              className="text-xs font-semibold uppercase tracking-[0.3em]"
              style={{ color: "var(--accent)" }}
            >
              Contact
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Let&apos;s start a{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, var(--accent), var(--primary))",
                }}
              >
                conversation.
              </span>
            </h1>

            <p
              className="mx-auto mt-7 max-w-2xl text-base leading-8 sm:text-lg"
              style={{ color: "var(--muted)" }}
            >
              Have questions about the programs, mentorship or the right path
              for your student? Get in touch and let&apos;s take the next step.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT DETAILS
      ========================================================= */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-5 md:grid-cols-3">
            {contactDetails.map((item) => (
              <a
                key={item.number}
                href={item.href}
                className="group relative overflow-hidden rounded-3xl border p-8 transition duration-500 hover:-translate-y-1"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--surface)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
                }}
              >
                {/* Glow */}
                <div
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl transition duration-500"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--accent) 5%, transparent)",
                  }}
                />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs font-semibold"
                      style={{ color: "var(--accent)" }}
                    >
                      {item.number}
                    </span>

                    <span
                      className="text-lg transition duration-300 group-hover:translate-x-1"
                      style={{ color: "var(--muted)" }}
                    >
                      →
                    </span>
                  </div>

                  <h2 className="mt-10 text-xl font-semibold">
                    {item.title}
                  </h2>

                  <p
                    className="mt-3 break-words text-sm font-medium"
                    style={{ color: "var(--accent)" }}
                  >
                    {item.value}
                  </p>

                  <p
                    className="mt-4 text-sm leading-6"
                    style={{ color: "var(--muted)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SIMPLE MESSAGE
      ========================================================= */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div
            className="relative overflow-hidden rounded-[2rem] border px-8 py-14 text-center sm:px-12"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--surface)",
            }}
          >
            <div
              className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full blur-[100px]"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--accent) 5%, transparent)",
              }}
            />

            <div className="relative">
              <p
                className="text-xs font-semibold uppercase tracking-[0.25em]"
                style={{ color: "var(--accent)" }}
              >
                Beyond Books
              </p>

              <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                Every journey starts with{" "}
                <span style={{ color: "var(--accent)" }}>
                  one conversation.
                </span>
              </h2>

              <p
                className="mx-auto mt-5 max-w-2xl text-sm leading-7"
                style={{ color: "var(--muted)" }}
              >
                Whether you are a student, parent or someone looking to know
                more about the mentorship programs, reach out using the
                contact details above.
              </p>

              <Link
                href="/programs"
                className="mt-8 inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5"
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--accent) 20%, transparent)",
                  backgroundColor:
                    "color-mix(in srgb, var(--accent) 5%, transparent)",
                  color: "var(--accent)",
                }}
              >
                Explore Programs
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <div
            className="h-px w-full"
            style={{ backgroundColor: "var(--border)" }}
          />

          <div className="py-16">
            <p
              className="text-sm"
              style={{ color: "var(--muted)" }}
            >
              Dream → Discipline → Consistency → Result
            </p>

            <p
              className="mt-3 text-xs"
              style={{
                color: "var(--muted)",
                opacity: 0.65,
              }}
            >
              Your journey towards the goal starts with what you do today.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}