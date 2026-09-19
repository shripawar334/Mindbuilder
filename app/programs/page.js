import Link from "next/link";

const programs = [
  {
    number: "01",
    title: "Student Mindset & Performance",
    shortTitle: "Mindset & Performance",
    description:
      "Helping students build the mental strength behind academic performance.",
    audience: [
      "Schools",
      "JEE/NEET Institutes",
      "Colleges",
    ],
    topics: [
      "Goal Setting & Clarity",
      "Focus & Attention",
      "Discipline & Consistency",
      "Time Management",
      "Growth Mindset",
      "Handling Failure & Setbacks",
      "Visualization",
      "Habits & Self-Management",
    ],
  },
  {
    number: "02",
    title: "Soft Skills Training",
    shortTitle: "Soft Skills",
    description:
      "Developing the communication and interpersonal skills students need beyond academics.",
    audience: [
      "Schools",
      "Colleges",
      "Educational Institutions",
      "Young Professionals",
    ],
    topics: [
      "Communication Skills",
      "Public Speaking",
      "Presentation Skills",
      "Confidence Building",
      "Interpersonal Skills",
      "Professional Etiquette",
      "Teamwork",
    ],
  },
  {
    number: "03",
    title: "Personal Development",
    shortTitle: "Personal Development",
    description:
      "Helping individuals understand themselves, build better habits and take meaningful action.",
    audience: [],
    topics: [
      "Self-Awareness",
      "Goal Setting",
      "Confidence",
      "Habits & Discipline",
      "Decision Making",
      "Accountability",
      "Growth",
    ],
  },
];

export default function Programs() {
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
      <section className="relative px-6 pb-24 pt-40 lg:px-8">
        <div
          className="pointer-events-none absolute left-1/2 top-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-[150px]"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--accent) 10%, transparent)",
          }}
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p
              className="text-xs font-semibold uppercase tracking-[0.3em]"
              style={{ color: "var(--accent)" }}
            >
              Programs
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Build the{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, var(--accent), var(--primary))",
                }}
              >
                person behind the goal.
              </span>
            </h1>

            <p
              className="mt-7 max-w-2xl text-base leading-8 sm:text-lg"
              style={{ color: "var(--muted)" }}
            >
              Programs designed to help students and individuals develop
              stronger mindsets, practical skills, better habits and the
              confidence to move forward.
            </p>

            <div className="mt-9">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "var(--cta-text)",
                }}
              >
                Discuss a Program
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROGRAMS
      ========================================================= */}
      <section
        className="border-y px-6 py-24 lg:px-8"
        style={{
          borderColor: "var(--border)",
          backgroundColor:
            "color-mix(in srgb, var(--surface) 40%, transparent)",
        }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="space-y-8">
            {programs.map((program) => (
              <article
                key={program.number}
                className="group relative overflow-hidden rounded-[2rem] border transition duration-500 hover:-translate-y-1"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--surface)",
                }}
              >
                {/* Background Glow */}
                <div
                  className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-[100px] transition duration-500 group-hover:scale-125"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--accent) 6%, transparent)",
                  }}
                />

                <div className="relative p-8 sm:p-10 lg:p-12">
                  {/* Program Header */}
                  <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-3xl">
                      <div className="flex items-center gap-4">
                        <span
                          className="text-xs font-semibold"
                          style={{ color: "var(--accent)" }}
                        >
                          {program.number}
                        </span>

                        <div
                          className="h-px w-10"
                          style={{
                            backgroundColor:
                              "color-mix(in srgb, var(--accent) 30%, transparent)",
                          }}
                        />

                        <span
                          className="text-xs uppercase tracking-[0.2em]"
                          style={{ color: "var(--muted)" }}
                        >
                          Program
                        </span>
                      </div>

                      <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl">
                        {program.title}
                      </h2>

                      <p
                        className="mt-5 max-w-2xl text-base leading-8"
                        style={{ color: "var(--muted)" }}
                      >
                        {program.description}
                      </p>
                    </div>

                    {/* Program Number */}
                    <div
                      className="hidden h-20 w-20 shrink-0 items-center justify-center rounded-2xl border text-2xl font-bold lg:flex"
                      style={{
                        borderColor:
                          "color-mix(in srgb, var(--accent) 20%, transparent)",
                        backgroundColor:
                          "color-mix(in srgb, var(--accent) 5%, transparent)",
                        color: "var(--accent)",
                      }}
                    >
                      {program.number}
                    </div>
                  </div>

                  {/* Topics + Audience */}
                  <div className="mt-10 grid gap-10 border-t pt-10 lg:grid-cols-[1.4fr_0.6fr]">
                    {/* Topics */}
                    <div>
                      <p
                        className="text-xs font-semibold uppercase tracking-[0.22em]"
                        style={{ color: "var(--accent)" }}
                      >
                        Focus Areas
                      </p>

                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {program.topics.map((topic, index) => (
                          <div
                            key={topic}
                            className="flex items-center gap-3 rounded-xl border px-4 py-3.5 transition duration-300 hover:-translate-y-0.5"
                            style={{
                              borderColor: "var(--border)",
                              backgroundColor:
                                "color-mix(in srgb, var(--foreground) 2%, transparent)",
                            }}
                          >
                            <span
                              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold"
                              style={{
                                backgroundColor:
                                  "color-mix(in srgb, var(--accent) 10%, transparent)",
                                color: "var(--accent)",
                              }}
                            >
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            <span className="text-sm font-medium">
                              {topic}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Audience */}
                    {program.audience.length > 0 && (
                      <div>
                        <p
                          className="text-xs font-semibold uppercase tracking-[0.22em]"
                          style={{ color: "var(--accent)" }}
                        >
                          Designed For
                        </p>

                        <div className="mt-6 space-y-3">
                          {program.audience.map((item) => (
                            <div
                              key={item}
                              className="flex items-center gap-3 text-sm"
                              style={{ color: "var(--muted)" }}
                            >
                              <span
                                className="h-1.5 w-1.5 shrink-0 rounded-full"
                                style={{
                                  backgroundColor: "var(--accent)",
                                }}
                              />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Program CTA */}
                  <div
                    className="mt-10 flex flex-col gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <p
                      className="text-sm leading-6"
                      style={{ color: "var(--muted)" }}
                    >
                      Interested in this program? Get in touch to discuss the
                      right approach.
                    </p>

                    <Link
                      href="/contact"
                      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5"
                      style={{
                        borderColor:
                          "color-mix(in srgb, var(--accent) 25%, transparent)",
                        backgroundColor:
                          "color-mix(in srgb, var(--accent) 5%, transparent)",
                        color: "var(--accent)",
                      }}
                    >
                      Enquire Now
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW IT WORKS
      ========================================================= */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            {/* Left */}
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-[0.25em]"
                style={{ color: "var(--accent)" }}
              >
                Start The Conversation
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
                Find the right program for your journey.
              </h2>

              <p
                className="mt-6 max-w-xl text-base leading-8"
                style={{ color: "var(--muted)" }}
              >
                Every individual and institution has different needs. Connect
                directly to understand which program or training format fits
                your goals.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "var(--cta-text)",
                }}
              >
                Get In Touch
                <span>→</span>
              </Link>
            </div>

            {/* Right */}
            <div className="space-y-4">
              {[
                {
                  number: "01",
                  title: "Explore",
                  text: "Understand the programs and areas of focus.",
                },
                {
                  number: "02",
                  title: "Connect",
                  text: "Reach out directly to discuss your requirements.",
                },
                {
                  number: "03",
                  title: "Discuss",
                  text: "Have a conversation about the right program or approach.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="group flex gap-5 rounded-2xl border p-6 transition duration-300 hover:-translate-y-1"
                  style={{
                    borderColor: "var(--border)",
                    backgroundColor: "var(--surface)",
                  }}
                >
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border text-xs font-semibold"
                    style={{
                      borderColor:
                        "color-mix(in srgb, var(--accent) 20%, transparent)",
                      backgroundColor:
                        "color-mix(in srgb, var(--accent) 5%, transparent)",
                      color: "var(--accent)",
                    }}
                  >
                    {item.number}
                  </div>

                  <div>
                    <h3 className="text-base font-semibold">
                      {item.title}
                    </h3>

                    <p
                      className="mt-2 text-sm leading-6"
                      style={{ color: "var(--muted)" }}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="px-6 pb-24 lg:px-8">
        <div
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border px-8 py-16 text-center sm:px-12 lg:py-20"
          style={{
            borderColor:
              "color-mix(in srgb, var(--accent) 20%, transparent)",
            backgroundImage:
              "linear-gradient(135deg, var(--surface), var(--background))",
          }}
        >
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full blur-[110px]"
            style={{
              backgroundColor:
                "color-mix(in srgb, var(--accent) 10%, transparent)",
            }}
          />

          <div className="relative mx-auto max-w-3xl">
            <p
              className="text-xs font-semibold uppercase tracking-[0.25em]"
              style={{ color: "var(--accent)" }}
            >
              Beyond Books
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              The right conversation can be{" "}
              <span style={{ color: "var(--accent)" }}>
                the first step.
              </span>
            </h2>

            <p
              className="mx-auto mt-6 max-w-2xl text-base leading-7"
              style={{ color: "var(--muted)" }}
            >
              Explore the programs, understand what they offer and connect
              directly to discuss your requirements.
            </p>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5"
              style={{
                backgroundColor: "var(--accent)",
                color: "var(--cta-text)",
              }}
            >
              Contact Us
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}