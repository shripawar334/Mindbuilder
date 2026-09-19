import Link from "next/link";
import Image from "next/image";

const highlights = [
  {
    value: "7+",
    title: "Years of Experience",
    text: "Working with and guiding students.",
  },
  {
    value: "5,000+",
    title: "Students Engaged",
    text: "Students reached through mentoring and engagement.",
  },
  {
    value: "200+",
    title: "Students Mentored",
    text: "Students personally mentored and guided.",
  },
  {
    value: "IIT-B",
    title: "Recognition",
    text: "Recognised by IIT-Bombay for entrepreneurship.",
  },
];

const milestones = [
  {
    number: "01",
    title: "Academic Foundation",
    text: "Graduated from Nagpur University in 2022.",
  },
  {
    number: "02",
    title: "Psychology Students",
    text: "Pursuing a Master's in Psychology at RTMNU Campus while working with students.",
  },
  {
    number: "03",
    title: "Student Mentorship",
    text: "Built extensive experience engaging with students and mentoring them towards their goals.",
  },
  {
    number: "04",
    title: "Recognition & Speaking",
    text: "Recognised by IIT-Bombay for entrepreneurship and invited for guest sessions at leading institutions.",
  },
];

const speakingHighlights = [
  "National Speaker",
  "Genesis Event — New Delhi",
  "Guest Session — Amity University, Pune",
  "Guest at COEP — 2024, 2025 & 2026",
];

export default function About() {
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
        {/* Background Glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-20 h-[450px] w-[450px] -translate-x-1/2 rounded-full blur-[140px]"
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
              About
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Helping students build the{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, var(--accent), var(--primary))",
                }}
              >
                mindset
              </span>{" "}
              behind their goals.
            </h1>

            <p
              className="mt-7 max-w-2xl text-base leading-8 sm:text-lg"
              style={{ color: "var(--muted)" }}
            >
              We works with students to help them develop the
              mindset, discipline, consistency and mental strength required
              to move forward in their journey.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROFILE
      ========================================================= */}
      <section
        className="border-y px-6 py-24 lg:px-8"
        style={{
          borderColor: "var(--border)",
          backgroundColor:
            "color-mix(in srgb, var(--surface) 50%, transparent)",
        }}
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

          {/* Profile Visual */}
          <div className="relative mx-auto w-full max-w-md">
            {/* Glow */}
            <div
              className="absolute -inset-5 rounded-[2rem] blur-2xl"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--accent) 5%, transparent)",
              }}
            />

            {/* Image Card */}
            <div
              className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border"
              style={{
                borderColor: "var(--border)",
                background:
                  "linear-gradient(135deg, var(--surface), var(--background))",
              }}
            >
              {/* Sir's Image */}
              <div className="relative h-full w-full">
                <Image
                  src="/sir.png"
                  alt="Rishabh Randive"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />

                {/* Bottom Gradient */}
                <div
                  className="absolute inset-x-0 bottom-0 h-48"
                  style={{
                    background:
                      "linear-gradient(to top, var(--background), transparent)",
                  }}
                />

                {/* Profile Information */}
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h2 className="text-2xl font-semibold">
                    Rishabh Randive
                  </h2>

                  <p
                    className="mt-2 text-sm"
                    style={{ color: "var(--muted)" }}
                  >
                    Trainer | Mentor | Speaker
                  </p>

                  <div
                    className="mt-5 h-px w-16"
                    style={{
                      backgroundColor: "var(--accent)",
                    }}
                  />

                  <p
                    className="mt-4 text-sm font-medium"
                    style={{ color: "var(--accent)" }}
                  >
                    Beyond Books
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.25em]"
              style={{ color: "var(--accent)" }}
            >
              The Person Behind The Mission
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              Education is more than what happens inside a classroom.
            </h2>

            <div
              className="mt-7 space-y-5 text-base leading-8"
              style={{ color: "var(--muted)" }}
            >
              <p>
                With over 7 years of experience working with students,
                Rishabh Randive has engaged with more than 5,000 students and
                mentored over 200 students.
              </p>

              <p>
                His approach focuses on the areas that often determine how a
                student responds to challenges — discipline, consistency,
                thoughts, environment, focus and the ability to follow the
                right process.
              </p>

              <p>
                Alongside his work with students, he is pursuing a Master's
                in Psychology at RTMNU Campus, bringing a psychology-oriented
                perspective to student mentorship.
              </p>
            </div>

            {/* Expertise Tags */}
            <div className="mt-9 flex flex-wrap gap-3">
              <span
                className="rounded-full border px-4 py-2 text-xs font-medium"
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--accent) 20%, transparent)",
                  backgroundColor:
                    "color-mix(in srgb, var(--accent) 5%, transparent)",
                  color: "var(--accent)",
                }}
              >
                Student Mentorship
              </span>

              <span
                className="rounded-full border px-4 py-2 text-xs font-medium"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor:
                    "color-mix(in srgb, var(--foreground) 3%, transparent)",
                  color: "var(--muted)",
                }}
              >
                Mindset
              </span>

              <span
                className="rounded-full border px-4 py-2 text-xs font-medium"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor:
                    "color-mix(in srgb, var(--foreground) 3%, transparent)",
                  color: "var(--muted)",
                }}
              >
                Personal Development
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HIGHLIGHTS
      ========================================================= */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p
              className="text-xs font-semibold uppercase tracking-[0.25em]"
              style={{ color: "var(--accent)" }}
            >
              At A Glance
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Experience that speaks through impact.
            </h2>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div
                key={item.value}
                className="group rounded-3xl border p-7 transition duration-300 hover:-translate-y-1"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--surface)",
                }}
              >
                <p className="text-4xl font-bold tracking-tight">
                  {item.value}
                </p>

                <p
                  className="mt-4 text-sm font-semibold"
                  style={{ color: "var(--accent)" }}
                >
                  {item.title}
                </p>

                <p
                  className="mt-3 text-sm leading-6"
                  style={{ color: "var(--muted)" }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          JOURNEY
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
          <div className="max-w-3xl">
            <p
              className="text-xs font-semibold uppercase tracking-[0.25em]"
              style={{ color: "var(--accent)" }}
            >
              The Journey
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              From learning to leading.
            </h2>

            <p
              className="mt-5 text-base leading-7"
              style={{ color: "var(--muted)" }}
            >
              A journey shaped by education, student interaction, mentorship,
              psychology and opportunities to speak with young minds.
            </p>
          </div>

          <div className="relative mt-16">
            {/* Timeline Line */}
            <div
              className="absolute left-[19px] top-2 hidden h-[calc(100%-10px)] w-px sm:block"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, color-mix(in srgb, var(--accent) 50%, transparent), var(--border), transparent)",
              }}
            />

            <div className="space-y-10">
              {milestones.map((item) => (
                <div
                  key={item.number}
                  className="relative grid gap-6 sm:grid-cols-[40px_1fr]"
                >
                  {/* Number */}
                  <div
                    className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border text-xs font-semibold"
                    style={{
                      borderColor:
                        "color-mix(in srgb, var(--accent) 30%, transparent)",
                      backgroundColor: "var(--surface)",
                      color: "var(--accent)",
                    }}
                  >
                    {item.number}
                  </div>

                  {/* Content */}
                  <div
                    className="rounded-2xl border p-7 transition duration-300 hover:-translate-y-0.5"
                    style={{
                      borderColor: "var(--border)",
                      backgroundColor: "var(--surface)",
                    }}
                  >
                    <h3 className="text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p
                      className="mt-3 max-w-3xl text-sm leading-7"
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
          SPEAKING & RECOGNITION
      ========================================================= */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-[0.25em]"
                style={{ color: "var(--accent)" }}
              >
                Recognition & Speaking
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
                Taking the message beyond the classroom.
              </h2>

              <p
                className="mt-6 text-base leading-8"
                style={{ color: "var(--muted)" }}
              >
                His work with students has also led to opportunities to speak
                and engage with audiences at educational institutions and
                events.
              </p>

              <Link
                href="/impact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold transition duration-300 hover:-translate-y-0.5"
                style={{ color: "var(--accent)" }}
              >
                Explore the impact
                <span>→</span>
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {speakingHighlights.map((item, index) => (
                <div
                  key={item}
                  className={`rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 ${
                    index === 0 ? "sm:col-span-2" : ""
                  }`}
                  style={{
                    borderColor: "var(--border)",
                    backgroundColor: "var(--surface)",
                  }}
                >
                  <span
                    className="text-xs font-semibold"
                    style={{ color: "var(--accent)" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-5 text-base font-medium leading-6">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PHILOSOPHY CTA
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
              The Philosophy
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              Don&apos;t chase the result.
              <br />
              <span style={{ color: "var(--accent)" }}>
                Master the process.
              </span>
            </h2>

            <p
              className="mx-auto mt-6 max-w-2xl text-base leading-7"
              style={{ color: "var(--muted)" }}
            >
              You cannot control the rank. You can control today&apos;s
              preparation.
            </p>

            <Link
              href="/programs"
              className="mt-9 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5"
              style={{
                backgroundColor: "var(--accent)",
                color: "var(--cta-text)",
              }}
            >
              Explore Programs
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}