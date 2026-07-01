import {
  FaBookOpen,
  FaCode,
  FaBug,
  FaChartLine,
  FaFlask,
  FaStar,
} from "react-icons/fa";

const features = [
  {
    title: "Explain Code",
    desc: "Understand complex code through AI-powered explanations with execution flow, concepts, and algorithm insights.",
    icon: <FaBookOpen />,
  },
  {
    title: "Review Code",
    desc: "Receive professional code reviews highlighting strengths, weaknesses, and improvement suggestions.",
    icon: <FaCode />,
  },
  {
    title: "Debug Code",
    desc: "Detect logical mistakes, runtime issues, and receive practical fixes instantly.",
    icon: <FaBug />,
  },
  {
    title: "Complexity Analysis",
    desc: "Analyze time complexity, space complexity, bottlenecks, and optimization opportunities.",
    icon: <FaChartLine />,
  },
  {
    title: "Code Quality",
    desc: "Measure readability, maintainability, scalability, performance, and coding standards.",
    icon: <FaStar />,
  },
  {
    title: "Generate Test Cases",
    desc: "Generate meaningful normal, edge, boundary, and invalid test cases automatically.",
    icon: <FaFlask />,
  },
];

const Docs = () => {
  const token=localStorage.getItem("token");
  return (
   <section
  id="docs"
  className="px-3 relative overflow-hidden bg-gradient-to-b from-[#050505] via-[#08120E] to-[#050505] py-28 scroll-mt-24"
>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[650px] h-[650px] rounded-full bg-emerald-500/10 blur-[150px]" />

        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-emerald-500/5 blur-[140px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="max-w-3xl mx-auto text-center">

          <span className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
            Documentation
          </span>

          <h1 className="mt-7 text-4xl md:text-5xl md:text-6xl text-white font-bold tracking-tight leading-tight">

            Learn{" "}

            <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500 bg-clip-text text-transparent">

              CodePilot

            </span>

          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-400">

            Everything you need to understand how CodePilot analyzes,
            explains, reviews, debugs, evaluates and tests your code
            using AI.

          </p>

        </div>
        <section className="mt-24">

          <div className="flex items-center gap-3 mb-10">

            <div className="w-1 h-10 rounded-full bg-emerald-500"></div>

            <h2 className="text-3xl font-bold text-white">

              Quick Start

            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              "Paste your code into the editor.",
              "Select your programming language and AI action.",
              "Receive detailed AI insights in seconds.",
            ].map((item, index) => (

              <div
                key={index}
                className="group rounded-3xl border border-emerald-500/10 bg-[#0F1115] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/40 hover:shadow-[0_0_35px_rgba(16,185,129,0.15)]"
              >

                <div className="mb-6 text-4xl font-black text-emerald-400">

                  0{index + 1}

                </div>

                <p className="leading-8 text-zinc-300">

                  {item}

                </p>

              </div>

            ))}

          </div>

        </section>
        <section className="mt-24">

          <div className="flex items-center gap-3 mb-10">

            <div className="w-1 h-10 rounded-full bg-emerald-500"></div>

            <h2 className="text-3xl font-bold text-white">

              AI Capabilities

            </h2>

          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {features.map((item) => (

              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-emerald-500/10 bg-[#0F1115] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/40 hover:shadow-[0_0_35px_rgba(16,185,129,0.15)]"
              >

                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10">

                  <div className="text-emerald-400 text-xl group-hover:scale-110 transition-transform duration-300">

                    {item.icon}

                  </div>

                </div>

                <h3 className="relative text-xl font-semibold text-white">

                  {item.title}

                </h3>

                <p className="relative mt-4 text-sm leading-7 text-zinc-400">

                  {item.desc}

                </p>

              </div>

            ))}

          </div>

        </section>

        <section className="mt-24">

          <div className="flex items-center gap-3 mb-10">

            <div className="w-1 md:h-10 h-20 rounded-full bg-emerald-500"></div>

            <h2 className="text-3xl font-bold text-white">

              Supported Languages

            </h2>

          </div>

          <div className="flex flex-wrap gap-4">

            {[
              "JavaScript",
              "Python",
              "Java",
              "C++",
              "C",
            ].map((lang) => (

              <div
                key={lang}
                className="rounded-full border border-emerald-500/15 bg-[#0F1115] px-6 py-3 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-300"
              >

                {lang}

              </div>

            ))}

          </div>

        </section>


        <section className="mt-28">

          <div className="rounded-3xl border border-emerald-500/10 bg-[#0F1115] p-10 md:p-14">

            <div className="max-w-3xl">

              <h2 className="mt-4 text-4xl font-bold text-white">

                Built for Everyday Development

              </h2>

              <p className="mt-5 leading-8 text-zinc-400">

                CodePilot combines multiple AI-powered development tools into
                one clean workspace. Whether you're learning a new language,
                preparing for coding interviews, debugging projects, or
                reviewing production code, CodePilot provides structured,
                reliable, and developer-friendly insights in seconds.

              </p>

            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">

              <div className="rounded-2xl border border-emerald-500/10 bg-[#111111] p-6">

                <h3 className="text-xl font-semibold text-white">

                  Faster Learning

                </h3>

                <p className="mt-3 leading-7 text-zinc-400">

                  Understand unfamiliar code quickly with AI explanations and
                  algorithm insights.

                </p>

              </div>

              <div className="rounded-2xl border border-emerald-500/10 bg-[#111111] p-6">

                <h3 className="text-xl font-semibold text-white">

                  Better Code

                </h3>

                <p className="mt-3 leading-7 text-zinc-400">

                  Improve readability, maintainability, and overall quality
                  using AI-generated recommendations.

                </p>

              </div>

              <div className="rounded-2xl border border-emerald-500/10 bg-[#111111] p-6">

                <h3 className="text-xl font-semibold text-white">

                  Smarter Testing

                </h3>

                <p className="mt-3 leading-7 text-zinc-400">

                  Generate practical test cases covering normal, edge, and
                  boundary scenarios for better reliability.

                </p>

              </div>

            </div>

          </div>

        </section>


        <section className="mt-28">

          <div className="relative overflow-hidden rounded-3xl border border-emerald-500/10 bg-gradient-to-br from-[#0F1115] to-[#08120E] p-12 text-center">

            <div className="absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />

            <div className="relative">

              <h2 className="text-4xl font-bold text-white">

                Ready to Analyze Your Code?

              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-8 text-zinc-400">

                Explain code, debug issues, analyze complexity, evaluate code
                quality, and generate meaningful test cases—all from one
                AI-powered workspace.

              </p>

              <a
               href={token? "/dashboard" : "/login"}
                className="mt-10 inline-flex items-center rounded-xl bg-emerald-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-emerald-400"
              >

                Get Started

              </a>

            </div>

          </div>

        </section>

      </div>

    </section>

  );

};

export default Docs;