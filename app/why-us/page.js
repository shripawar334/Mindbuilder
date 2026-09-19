import Link from "next/link";

const challenges = [
  {
    number: "01",
    title: "Limiting Beliefs",
    text: "The belief that you cannot achieve something can become a barrier before the journey even begins.",
  },
  {
    number: "02",
    title: "No Clear Goal",
    text: "Without clarity about where you want to go, effort can easily lose direction.",
  },
  {
    number: "03",
    title: "Fear of Failure",
    text: "Fear can stop students from taking action, learning from mistakes and moving forward.",
  },
  {
    number: "04",
    title: "Distractions",
    text: "Attention is valuable. Managing distractions is an important part of building consistency.",
  },
  {
    number: "05",
    title: "Weak Foundation",
    text: "Strong progress starts with understanding the concepts and building the right foundation.",
  },
  {
    number: "06",
    title: "Comparison",
    text: "Constantly comparing yourself with others can take attention away from your own process.",
  },
  {
    number: "07",
    title: "Not Analysing Mistakes",
    text: "Mistakes become useful when you understand them, learn from them and improve.",
  },
];

const reasons = [
  {
    number: "01",
    title: "Mindset First",
    text: "Develop the mental approach needed to face pressure, challenges and setbacks.",
  },
  {
    number: "02",
    title: "Process Over Results",
    text: "Focus on what you can control every day instead of constantly chasing the final result.",
  },
  {
    number: "03",
    title: "Discipline & Consistency",
    text: "Turn goals into daily actions and build habits that support long-term progress.",
  },
  {
    number: "04",
    title: "Personal Growth",
    text: "Go beyond academic preparation and develop focus, confidence and personality.",
  },
];

const outcomes = [
  "Better clarity",
  "Stronger discipline",
  "Consistent preparation",
  "Improved focus",
  "Healthy response to setbacks",
  "Process-oriented thinking",
];

const process = [
  {
    step: "01",
    title: "Goal",
    text: "Know what you are working towards.",
  },
  {
    step: "02",
    title: "Daily Process",
    text: "Convert the goal into daily actions.",
  },
  {
    step: "03",
    title: "Habits",
    text: "Repeat the right actions consistently.",
  },
  {
    step: "04",
    title: "Consistency",
    text: "Keep moving even when motivation changes.",
  },
  {
    step: "05",
    title: "Result",
    text: "Allow the process to create the outcome.",
  },
];

export default function WhyUs() {
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
          className="pointer-events-none absolute left-1/2 top-10 h-[450px] w-[450px] -translate-x-1/2 rounded-full blur-[140px]"
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
              Why Us
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Because the journey needs{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, var(--accent), var(--primary))",
                }}
              >
                more than books.
              </span>
            </h1>

            <p
              className="mt-7 max-w-2xl text-base leading-8 sm:text-lg"
              style={{ color: "var(--muted)" }}
            >
              Academic preparation matters. But the way a student thinks,
              responds, prepares and stays consistent can shape the journey
              just as deeply.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "var(--cta-text)",
                }}
              >
                Explore Programs
                <span>→</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border px-7 py-3.5 text-sm font-semibold transition duration-300"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor:
                    "color-mix(in srgb, var(--foreground) 3%, transparent)",
                  color: "var(--foreground)",
                }}
              >
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY STUDENTS STRUGGLE
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
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Heading */}
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-[0.25em]"
                style={{ color: "var(--accent)" }}
              >
                Understand The Challenge
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
                Why do only a few students succeed?
              </h2>

              <p
                className="mt-6 text-base leading-8"
                style={{ color: "var(--muted)" }}
              >
                The difference is not simply intelligence. Discipline,
                consistency, strategy and mindset can influence how students
                approach their preparation and challenges.
              </p>

              <div
                className="mt-8 rounded-2xl border p-6"
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--accent) 10%, transparent)",
                  backgroundColor:
                    "color-mix(in srgb, var(--accent) 5%, transparent)",
                }}
              >
                <p
                  className="text-sm leading-7"
                  style={{ color: "var(--muted)" }}
                >
                  The goal is not to create pressure around the result. It is
                  to help students understand the process that leads towards
                  it.
                </p>
              </div>
            </div>

            {/* Challenges */}
            <div className="grid gap-3 sm:grid-cols-2">
              {challenges.map((item) => (
                <div
                  key={item.number}
                  className="group rounded-2xl border p-6 transition duration-300 hover:-translate-y-1"
                  style={{
                    borderColor: "var(--border)",
                    backgroundColor: "var(--surface)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs font-semibold"
                      style={{ color: "var(--accent)" }}
                    >
                      {item.number}
                    </span>

                    <span
                      className="h-2 w-2 rounded-full transition duration-300 group-hover:scale-125"
                      style={{ backgroundColor: "var(--muted)" }}
                    />
                  </div>

                  <h3 className="mt-6 text-base font-semibold">
                    {item.title}
                  </h3>

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
        </div>
      </section>

      {/* =========================================================
          OUR APPROACH
      ========================================================= */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p
              className="text-xs font-semibold uppercase tracking-[0.25em]"
              style={{ color: "var(--accent)" }}
            >
              Our Approach
            </p>

            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
              Build the person behind the performance.
            </h2>

            <p
              className="mt-5 text-base leading-7"
              style={{ color: "var(--muted)" }}
            >
              The focus goes beyond a single test or result. It is about
              developing habits and thinking patterns that students can carry
              forward.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((item) => (
              <div
                key={item.number}
                className="group relative overflow-hidden rounded-3xl border p-7 transition duration-500 hover:-translate-y-1"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--surface)",
                }}
              >
                <div
                  className="absolute -right-10 -top-10 h-28 w-28 rounded-full blur-2xl transition duration-500"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--accent) 5%, transparent)",
                  }}
                />

                <div className="relative">
                  <span
                    className="text-xs font-semibold"
                    style={{ color: "var(--accent)" }}
                  >
                    {item.number}
                  </span>

                  <h3 className="mt-10 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p
                    className="mt-4 text-sm leading-7"
                    style={{ color: "var(--muted)" }}
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
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
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            {/* Left */}
            <div>
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
                className="mt-6 max-w-xl text-base leading-8"
                style={{ color: "var(--muted)" }}
              >
                A student cannot control every outcome. But preparation,
                daily actions, habits and consistency are within their
                control.
              </p>

              <Link
                href="/programs"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold transition"
                style={{ color: "var(--accent)" }}
              >
                See our programs
                <span>→</span>
              </Link>
            </div>

            {/* Right Process */}
            <div className="relative">
              <div
                className="absolute left-6 top-7 hidden h-[calc(100%-55px)] w-px sm:block"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, color-mix(in srgb, var(--accent) 50%, transparent), color-mix(in srgb, var(--accent) 20%, transparent), transparent)",
                }}
              />

              <div className="space-y-4">
                {process.map((item) => (
                  <div
                    key={item.step}
                    className="relative flex gap-5 rounded-2xl border p-5 transition duration-300 hover:-translate-y-0.5"
                    style={{
                      borderColor: "var(--border)",
                      backgroundColor: "var(--surface)",
                    }}
                  >
                    <div
                      className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border text-xs font-semibold"
                      style={{
                        borderColor:
                          "color-mix(in srgb, var(--accent) 20%, transparent)",
                        backgroundColor: "var(--surface-hover)",
                        color: "var(--accent)",
                      }}
                    >
                      {item.step}
                    </div>

                    <div>
                      <h3 className="font-semibold">{item.title}</h3>

                      <p
                        className="mt-1 text-sm leading-6"
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
        </div>
      </section>

      {/* =========================================================
          WHAT STUDENTS BUILD
      ========================================================= */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p
              className="text-xs font-semibold uppercase tracking-[0.25em]"
              style={{ color: "var(--accent)" }}
            >
              Beyond Academics
            </p>

            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
              Skills that stay with you.
            </h2>

            <p
              className="mt-5 text-base leading-7"
              style={{ color: "var(--muted)" }}
            >
              The journey towards competitive exams and higher education is
              also an opportunity to develop yourself as an individual.
            </p>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((outcome, index) => (
              <div
                key={outcome}
                className="flex items-center gap-4 rounded-2xl border px-6 py-5 transition duration-300 hover:-translate-y-0.5"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--surface)",
                }}
              >
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--accent) 10%, transparent)",
                    color: "var(--accent)",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <span
                  className="text-sm font-medium"
                  style={{ color: "var(--foreground)" }}
                >
                  {outcome}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          MORE THAN A DEGREE
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
          <div className="mx-auto max-w-3xl text-center">
            <p
              className="text-xs font-semibold uppercase tracking-[0.25em]"
              style={{ color: "var(--accent)" }}
            >
              More Than A Degree
            </p>

            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
              The destination is bigger than a result.
            </h2>

            <p
              className="mt-6 text-base leading-8"
              style={{ color: "var(--muted)" }}
            >
              The opportunities that come with institutions such as IITs,
              NITs, AIIMS and other leading institutions can extend beyond a
              degree — from connections and opportunities to alumni networks
              and personality development.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Connections",
              "Opportunities",
              "Strong Alumni Network",
              "Personality Development",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border p-7 text-center transition duration-300 hover:-translate-y-1"
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

                <h3 className="mt-5 text-base font-semibold">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              Your Next Step
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              Start building the mindset{" "}
              <span style={{ color: "var(--accent)" }}>
                behind your dream.
              </span>
            </h2>

            <p
              className="mx-auto mt-6 max-w-2xl text-base leading-7"
              style={{ color: "var(--muted)" }}
            >
              Understand your goal. Build your process. Strengthen your
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