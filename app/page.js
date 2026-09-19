import Link from "next/link";

const programs = [
  {
    number: "01",
    title: "Foundation",
    subtitle: "Up to Class 10",
    description:
      "Build the right mindset, discipline, confidence and habits before the real competition begins.",
  },
  {
    number: "02",
    title: "JEE / NEET",
    subtitle: "Classes 11 & 12",
    description:
      "Develop focus, consistency, emotional strength and a process-driven approach towards competitive exams.",
  },
  {
    number: "03",
    title: "Beyond 12th",
    subtitle: "College & Career",
    description:
      "Navigate the transition after school with clarity, purpose, confidence and a growth-oriented mindset.",
  },
];

const principles = [
  {
    number: "01",
    title: "Schedule",
    text: "Don't manage time. Manage yourself.",
  },
  {
    number: "02",
    title: "Power of Thoughts",
    text: "Your thoughts become your actions.",
  },
  {
    number: "03",
    title: "Environment",
    text: "Your environment shapes your behaviour.",
  },
  {
    number: "04",
    title: "Follow the Process",
    text: "Don't chase the result. Master the process.",
  },
  {
    number: "05",
    title: "Visualisation",
    text: "See it before you achieve it.",
  },
  {
    number: "06",
    title: "Train Your Brain",
    text: "Your brain is not fixed. Train it.",
  },
  {
    number: "07",
    title: "E + R = O",
    text: "Event + Response = Outcome.",
  },
];

const achievements = [
  {
    value: "7+",
    label: "Years",
    description: "Working with students",
  },
  {
    value: "5,000+",
    label: "Students",
    description: "Engaged and inspired",
  },
  {
    value: "200+",
    label: "Students",
    description: "Mentored & guided",
  },
  {
    value: "IIT-B",
    label: "Recognition",
    description: "Recognised for entrepreneurship",
  },
];

export default function Home() {
  return (
    <main
      className="overflow-hidden transition-colors duration-500"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative flex min-h-screen items-center px-6 pt-28 lg:px-8">
        {/* Background Glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-[140px]"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--accent) 10%, transparent)",
          }}
        />

        <div
          className="pointer-events-none absolute right-0 top-1/3 h-[350px] w-[350px] rounded-full blur-[120px]"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--primary) 10%, transparent)",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            {/* Small Badge */}
            <div
              className="mb-7 inline-flex items-center gap-2 rounded-full border px-4 py-2"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--accent) 20%, transparent)",
                backgroundColor:
                  "color-mix(in srgb, var(--accent) 5%, transparent)",
              }}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{
                  backgroundColor: "var(--accent)",
                  boxShadow:
                    "0 0 12px color-mix(in srgb, var(--accent) 80%, transparent)",
                }}
              />

              <span
                className="text-xs font-medium uppercase tracking-[0.2em]"
                style={{ color: "var(--accent)" }}
              >
                Beyond Books
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Build the{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, var(--accent), var(--primary))",
                }}
              >
                Mindset
              </span>
              <br />
              Behind the Dream.
            </h1>

            {/* Description */}
            <p
              className="mt-7 max-w-2xl text-base leading-8 sm:text-lg"
              style={{ color: "var(--muted)" }}
            >
              Helping students develop the mental strength, discipline,
              consistency and clarity they need to move towards their goals —
              beyond what books can teach.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/programs"
                className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "var(--cta-text)",
                }}
              >
                Explore Programs

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border px-7 py-3.5 text-sm font-semibold transition duration-300"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor:
                    "color-mix(in srgb, var(--foreground) 3%, transparent)",
                  color: "var(--foreground)",
                }}
              >
                Know More
              </Link>
            </div>

            {/* Small Quote */}
            <div
              className="mt-12 border-l pl-5"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--accent) 40%, transparent)",
              }}
            >
              <p
                className="text-sm italic leading-6"
                style={{ color: "var(--muted)" }}
              >
                “Your marks don't decide your future. What you do after seeing
                those marks can change it.”
              </p>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto aspect-square max-w-[500px]">
              {/* Outer Glow */}
              <div
                className="absolute inset-8 rounded-full blur-3xl"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--accent) 5%, transparent)",
                }}
              />

              {/* Main Circle */}
              <div
                className="absolute inset-12 rounded-full border bg-gradient-to-br"
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--accent) 20%, transparent)",
                  backgroundImage:
                    "linear-gradient(135deg, color-mix(in srgb, var(--accent) 10%, transparent), color-mix(in srgb, var(--primary) 5%, transparent), transparent)",
                }}
              />

              {/* Inner Circle */}
              <div
                className="absolute inset-24 rounded-full border backdrop-blur-xl"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor:
                    "color-mix(in srgb, var(--surface) 80%, transparent)",
                }}
              />

              {/* Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div
                    className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border text-3xl font-bold"
                    style={{
                      borderColor:
                        "color-mix(in srgb, var(--accent) 30%, transparent)",
                      backgroundColor:
                        "color-mix(in srgb, var(--accent) 10%, transparent)",
                      color: "var(--accent)",
                      boxShadow:
                        "0 0 40px color-mix(in srgb, var(--accent) 12%, transparent)",
                    }}
                  >
                    M
                  </div>

                  <h2 className="text-xl font-semibold">
                    MindBuilder
                  </h2>

                  <p
                    className="mt-2 text-sm"
                    style={{ color: "var(--muted)" }}
                  >
                    Mindset & Mentorship
                  </p>
                </div>
              </div>

              {/* Floating Cards */}
              <div
                className="absolute left-0 top-1/4 rounded-2xl border px-5 py-4 shadow-2xl backdrop-blur-xl"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor:
                    "color-mix(in srgb, var(--surface) 90%, transparent)",
                }}
              >
                <p
                  className="text-xs"
                  style={{ color: "var(--muted)" }}
                >
                  Focus
                </p>

                <p className="mt-1 text-sm font-semibold">
                  Train Your Brain
                </p>
              </div>

              <div
                className="absolute bottom-1/4 right-0 rounded-2xl border px-5 py-4 shadow-2xl backdrop-blur-xl"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor:
                    "color-mix(in srgb, var(--surface) 90%, transparent)",
                }}
              >
                <p
                  className="text-xs"
                  style={{ color: "var(--muted)" }}
                >
                  Mindset
                </p>

                <p
                  className="mt-1 text-sm font-semibold"
                  style={{ color: "var(--accent)" }}
                >
                  Master The Process
                </p>
              </div>

              <div
                className="absolute bottom-5 left-1/4 rounded-2xl border px-5 py-4 shadow-2xl backdrop-blur-xl"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor:
                    "color-mix(in srgb, var(--surface) 90%, transparent)",
                }}
              >
                <p
                  className="text-xs"
                  style={{ color: "var(--muted)" }}
                >
                  Growth
                </p>

                <p className="mt-1 text-sm font-semibold">
                  Dream → Result
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
          <span
            className="text-[10px] uppercase tracking-[0.3em]"
            style={{ color: "var(--muted)" }}
          >
            Scroll
          </span>

          <div
            className="h-8 w-px"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, color-mix(in srgb, var(--accent) 60%, transparent), transparent)",
            }}
          />
        </div>
      </section>

      {/* =========================================================
          INTRO SECTION
      ========================================================= */}
      <section
        className="relative border-t px-6 py-24 lg:px-8"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-end">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-[0.25em]"
                style={{ color: "var(--accent)" }}
              >
                The Difference
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
                Success is not just about{" "}
                <span style={{ color: "var(--muted)" }}>
                  intelligence.
                </span>
              </h2>
            </div>

            <div>
              <p
                className="text-base leading-8"
                style={{ color: "var(--muted)" }}
              >
                The journey towards a dream requires more than academic
                preparation. Consistency, discipline, strategy and mindset
                shape how a student responds to pressure, setbacks and
                challenges.
              </p>

              <Link
                href="/why-us"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold transition"
                style={{ color: "var(--accent)" }}
              >
                Why mindset matters
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROGRAMS
      ========================================================= */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-[0.25em]"
                style={{ color: "var(--accent)" }}
              >
                Programs
              </p>

              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                Guidance for every stage.
              </h2>
            </div>

            <Link
              href="/programs"
              className="text-sm font-semibold transition"
              style={{ color: "var(--muted)" }}
            >
              View all programs →
            </Link>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {programs.map((program) => (
              <Link
                key={program.number}
                href="/programs"
                className="group relative overflow-hidden rounded-3xl border p-8 transition duration-500 hover:-translate-y-1"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--surface)",
                }}
              >
                <div
                  className="absolute right-0 top-0 h-32 w-32 rounded-full blur-3xl transition duration-500"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--accent) 5%, transparent)",
                  }}
                />

                <div className="relative">
                  <span
                    className="text-sm font-medium"
                    style={{ color: "var(--accent)" }}
                  >
                    {program.number}
                  </span>

                  <p
                    className="mt-12 text-xs font-medium uppercase tracking-[0.2em]"
                    style={{ color: "var(--muted)" }}
                  >
                    {program.subtitle}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold">
                    {program.title}
                  </h3>

                  <p
                    className="mt-5 text-sm leading-7"
                    style={{ color: "var(--muted)" }}
                  >
                    {program.description}
                  </p>

                  <div
                    className="mt-8 flex items-center gap-2 text-sm font-semibold"
                    style={{ color: "var(--accent)" }}
                  >
                    Learn more

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          ACHIEVEMENTS
      ========================================================= */}
      <section
        className="border-y px-6 py-24 lg:px-8"
        style={{
          borderColor: "var(--border)",
          backgroundColor:
            "color-mix(in srgb, var(--surface) 50%, transparent)",
        }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p
              className="text-xs font-semibold uppercase tracking-[0.25em]"
              style={{ color: "var(--accent)" }}
            >
              Impact
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Experience that goes beyond the classroom.
            </h2>
          </div>

          <div
            className="mt-14 grid gap-px overflow-hidden rounded-3xl border sm:grid-cols-2 lg:grid-cols-4"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--border)",
            }}
          >
            {achievements.map((item) => (
              <div
                key={item.value}
                className="p-8 transition duration-300"
                style={{ backgroundColor: "var(--surface)" }}
              >
                <p className="text-4xl font-bold tracking-tight">
                  {item.value}
                </p>

                <p
                  className="mt-3 text-sm font-semibold"
                  style={{ color: "var(--accent)" }}
                >
                  {item.label}
                </p>

                <p
                  className="mt-2 text-sm"
                  style={{ color: "var(--muted)" }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <p
            className="mt-7 text-xs"
            style={{ color: "var(--muted)" }}
          >
            Experience and recognition based on the information provided in
            the program presentation.
          </p>
        </div>
      </section>

      {/* =========================================================
          7 GOLDEN PRINCIPLES
      ========================================================= */}
     

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="px-6 py-24 lg:px-8">
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
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full blur-[100px]"
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
              Start the Journey
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              Your dream is built by what you do{" "}
              <span style={{ color: "var(--accent)" }}>
                every day.
              </span>
            </h2>

            <p
              className="mx-auto mt-6 max-w-2xl text-base leading-7"
              style={{ color: "var(--muted)" }}
            >
              Understand the process. Build the right habits. Strengthen your
              mindset. Keep moving forward.
            </p>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5"
              style={{
                backgroundColor: "var(--accent)",
                color: "var(--cta-text)",
              }}
            >
              Get Started

              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}