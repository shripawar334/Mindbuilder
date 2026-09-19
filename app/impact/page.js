import Link from "next/link";

const impactStats = [
  {
    value: "7+",
    title: "Years",
    description: "Experience working with students.",
  },
  {
    value: "5,000+",
    title: "Students",
    description: "Students engaged through the journey.",
  },
  {
    value: "200+",
    title: "Mentored",
    description: "Students mentored and guided.",
  },
  {
    value: "IIT-B",
    title: "Recognition",
    description: "Recognised for entrepreneurship.",
  },
];

const recognitions = [
  {
    number: "01",
    title: "IIT-Bombay",
    subtitle: "Entrepreneurship Recognition",
    description:
      "Recognised by IIT-Bombay for entrepreneurship.",
  },
  {
    number: "02",
    title: "National Speaker",
    subtitle: "Speaking & Student Engagement",
    description:
      "Invited as a National Speaker and engaged with audiences through speaking opportunities.",
  },
];

const speakingEvents = [
  {
    number: "01",
    title: "Genesis Event",
    location: "New Delhi",
    type: "National Speaking Engagement",
  },
  {
    number: "02",
    title: "Amity University",
    location: "Pune",
    type: "Guest Session",
  },
  {
    number: "03",
    title: "COEP",
    location: "Pune",
    type: "Guest Invitation",
  },
];

const journeyStats = [
  {
    value: "5,000+",
    text: "Students engaged",
  },
  {
    value: "200+",
    text: "Students mentored & guided",
  },
  {
    value: "7+",
    text: "Years working with students",
  },
];

export default function Impact() {
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
              Impact & Achievements
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              A journey measured by{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, var(--accent), var(--primary))",
                }}
              >
                people impacted.
              </span>
            </h1>

            <p
              className="mt-7 max-w-2xl text-base leading-8 sm:text-lg"
              style={{ color: "var(--muted)" }}
            >
              Years of working with students, mentoring young minds and
              opportunities to share the message of mindset and personal
              growth beyond the classroom.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          IMPACT NUMBERS
      ========================================================= */}
      <section
        className="border-y px-6 py-20 lg:px-8"
        style={{
          borderColor: "var(--border)",
          backgroundColor:
            "color-mix(in srgb, var(--surface) 50%, transparent)",
        }}
      >
        <div className="mx-auto max-w-7xl">
          <div
            className="grid gap-px overflow-hidden rounded-3xl border sm:grid-cols-2 lg:grid-cols-4"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--border)",
            }}
          >
            {impactStats.map((item) => (
              <div
                key={item.title}
                className="group p-8 transition duration-300"
                style={{
                  backgroundColor: "var(--surface)",
                }}
              >
                <p className="text-4xl font-bold tracking-tight sm:text-5xl">
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
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <p
            className="mt-6 text-xs"
            style={{ color: "var(--muted)" }}
          >
            Figures and recognitions based on the information provided in the
            program presentation.
          </p>
        </div>
      </section>

      {/* =========================================================
          STUDENT IMPACT
      ========================================================= */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-[0.25em]"
                style={{ color: "var(--accent)" }}
              >
                Student Impact
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
                Beyond numbers, towards meaningful guidance.
              </h2>

              <p
                className="mt-6 text-base leading-8"
                style={{ color: "var(--muted)" }}
              >
                The work is centred around student engagement and mentorship —
                helping young minds understand the importance of mindset,
                discipline, consistency and the process behind their goals.
              </p>

              <Link
                href="/programs"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold transition hover:-translate-y-0.5"
                style={{ color: "var(--accent)" }}
              >
                Explore Programs
                <span>→</span>
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {journeyStats.map((item, index) => (
                <div
                  key={item.text}
                  className="group flex items-center gap-6 rounded-2xl border p-6 transition duration-300 hover:-translate-y-1"
                  style={{
                    borderColor: "var(--border)",
                    backgroundColor: "var(--surface)",
                  }}
                >
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border text-xs font-semibold"
                    style={{
                      borderColor:
                        "color-mix(in srgb, var(--accent) 20%, transparent)",
                      backgroundColor:
                        "color-mix(in srgb, var(--accent) 5%, transparent)",
                      color: "var(--accent)",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <p className="text-2xl font-bold">
                      {item.value}
                    </p>

                    <p
                      className="mt-1 text-sm"
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
          RECOGNITION
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
          <div className="mx-auto max-w-3xl text-center">
            <p
              className="text-xs font-semibold uppercase tracking-[0.25em]"
              style={{ color: "var(--accent)" }}
            >
              Recognition
            </p>

            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
              Recognition beyond the classroom.
            </h2>

            <p
              className="mt-5 text-base leading-7"
              style={{ color: "var(--muted)" }}
            >
              Alongside student mentorship, the journey includes recognition
              and opportunities to engage with wider educational communities.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {recognitions.map((item) => (
              <div
                key={item.number}
                className="group relative overflow-hidden rounded-3xl border p-8 transition duration-500 hover:-translate-y-1"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--surface)",
                }}
              >
                <div
                  className="absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl transition duration-500"
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
                      className="h-2 w-2 rounded-full"
                      style={{
                        backgroundColor: "var(--accent)",
                        boxShadow:
                          "0 0 12px color-mix(in srgb, var(--accent) 50%, transparent)",
                      }}
                    />
                  </div>

                  <h3 className="mt-12 text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p
                    className="mt-2 text-sm font-medium"
                    style={{ color: "var(--accent)" }}
                  >
                    {item.subtitle}
                  </p>

                  <p
                    className="mt-5 max-w-lg text-sm leading-7"
                    style={{ color: "var(--muted)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SPEAKING ENGAGEMENTS
      ========================================================= */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-[0.25em]"
                style={{ color: "var(--accent)" }}
              >
                Speaking & Engagements
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
                Taking the message to wider audiences.
              </h2>

              <p
                className="mt-6 text-base leading-8"
                style={{ color: "var(--muted)" }}
              >
                Speaking opportunities have created platforms to connect with
                students and audiences beyond regular mentorship settings.
              </p>
            </div>

            <div className="space-y-4">
              {speakingEvents.map((event) => (
                <div
                  key={event.number}
                  className="group flex flex-col gap-5 rounded-2xl border p-6 transition duration-300 hover:-translate-y-0.5"
                  style={{
                    borderColor: "var(--border)",
                    backgroundColor: "var(--surface)",
                  }}
                >
                  <div className="flex items-center gap-5 sm:flex-row sm:items-center">
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
                      {event.number}
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">
                        {event.title}
                      </h3>

                      <p
                        className="mt-1 text-sm"
                        style={{ color: "var(--accent)" }}
                      >
                        {event.type}
                      </p>
                    </div>

                    <div className="sm:text-right">
                      <p
                        className="text-sm"
                        style={{ color: "var(--muted)" }}
                      >
                        {event.location}
                      </p>

                      {event.title === "COEP" && (
                        <p
                          className="mt-1 text-xs"
                          style={{ color: "var(--muted)" }}
                        >
                          2024 · 2025 · 2026
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          IMPACT STATEMENT
      ========================================================= */}
      <section
        className="border-y px-6 py-24 lg:px-8"
        style={{
          borderColor: "var(--border)",
          backgroundColor:
            "color-mix(in srgb, var(--surface) 50%, transparent)",
        }}
      >
        <div className="mx-auto max-w-5xl text-center">
          <div
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border text-xl font-bold"
            style={{
              borderColor:
                "color-mix(in srgb, var(--accent) 20%, transparent)",
              backgroundColor:
                "color-mix(in srgb, var(--accent) 5%, transparent)",
              color: "var(--accent)",
            }}
          >
            R
          </div>

          <p className="mt-8 text-2xl font-semibold leading-relaxed sm:text-3xl">
            The journey is about helping students build clarity, discipline,
            consistency and the mindset to keep moving forward.
          </p>

          <p
            className="mt-6 text-sm"
            style={{ color: "var(--muted)" }}
          >
            Mindset & Mentorship
          </p>
        </div>
      </section>

      {/* =========================================================
          CTA
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
              Continue The Journey
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              Impact begins with{" "}
              <span style={{ color: "var(--accent)" }}>
                one student at a time.
              </span>
            </h2>

            <p
              className="mx-auto mt-6 max-w-2xl text-base leading-7"
              style={{ color: "var(--muted)" }}
            >
              Discover the programs designed to help students build clarity,
              discipline, consistency and mental strength.
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