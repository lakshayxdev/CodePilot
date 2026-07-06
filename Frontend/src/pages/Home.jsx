import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { ArrowRight, Sparkles, Terminal } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const {user}=useAuth();
  const navigate=useNavigate();
  const handleclick = () => {
    navigate(user ? "/dashboard" : "/login");
  }
  return (
    <section
      id="home"
      className="px-3 relative min-h-screen overflow-hidden bg-gradient-to-b from-[#050505] via-[#08120E] to-[#050505] text-white flex items-center justify-center pt-30"
    >

      <div className="absolute inset-0 pointer-events-none ">


        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] bg-[size:48px_48px]" />


        <div className="absolute -top-52 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[150px]" />


        <div className="absolute left-0 top-1/2 h-[300px] w-[300px] rounded-full bg-emerald-500/5 blur-[120px]" />


        <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-emerald-500/5 blur-[120px]" />

      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">


        {/* <div className="inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 backdrop-blur-md">

          <span className="relative flex h-2.5 w-2.5">

            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />

          </span>

          <span className="text-xs font-semibold uppercase tracking-[2px] text-emerald-400">

            AI Powered Developer Assistant

          </span>

        </div> */}

<div
  className="
    inline-flex
    items-center
    gap-3
    rounded-full
    border
    border-emerald-500/20
    bg-emerald-500/10
    backdrop-blur-md
    px-5
    py-2.5
    mb-6
    shadow-[0_0_20px_rgba(16,185,129,0.08)]
  "
>
  <span className="relative flex h-2 w-2">
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70"></span>
    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 ring-4 ring-emerald-500/20"></span>
  </span>

  <span className="text-sm font-medium tracking-wide text-emerald-300">
    AI-Powered Developer Assistant
  </span>
</div>


        <h1 className="mt-10 text-4xl md:text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">

          Code Better

          <span className="block bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500 bg-clip-text text-transparent">

            With Intelligent AI

          </span>

        </h1>


        <div className="mt-8 flex justify-center">

          <ContainerTextFlip
            words={[
              "Explain Code",
              "Review Code",
              "Debug Faster",
              "Analyze Complexity",
              "Generate Test Cases",
            ]}
            className="text-3xl sm:text-4xl lg:text-5xl"
            textClassName="text-2xl md:text-3xl sm:text-4xl lg:text-5xl font-bold text-black"
          />

        </div>


        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">

         Analyze, debug, optimize, and understand your code with AI in seconds.

        </p>


        <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

          <button onClick={handleclick}
          className="group flex items-center gap-3 rounded-xl bg-emerald-500 px-8 py-4 font-semibold text-black shadow-[0_0_30px_rgba(16,185,129,0.35)] transition-all duration-300 hover:scale-105 hover:bg-emerald-400">

            <Sparkles className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />

            Start Analyzing

            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />

          </button>

          <a
            href="#features"
            className="group flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-[#111111] px-8 py-4 font-semibold text-emerald-400 transition-all duration-300 hover:border-emerald-500/40 hover:bg-emerald-500/10"
          >

            <Terminal className="h-5 w-5" />

            Explore Features

          </a>

        </div>


        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-400">

          <div className="flex items-center gap-2">

            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>

            Explain Code

          </div>

          <div className="flex items-center gap-2">

            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>

            Debug Instantly

          </div>

          <div className="flex items-center gap-2">

            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>

            Code Quality Analysis

          </div>

          <div className="flex items-center gap-2">

            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>

            Generate Test Cases

          </div>

        </div>



        <div className="relative mt-24 hidden lg:block">


          <div className="absolute -left-8 top-0 w-64 rounded-2xl border border-emerald-500/10 bg-[#111111]/90 p-5 backdrop-blur-xl shadow-[0_0_35px_rgba(16,185,129,0.08)]">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">

                <Sparkles className="h-5 w-5 text-emerald-400" />

              </div>

              <div>

                <p className="text-sm font-semibold text-white">

                  AI Review

                </p>

                <p className="text-xs text-zinc-500">

                  Professional feedback

                </p>

              </div>

            </div>

            <div className="mt-4 h-2 rounded-full bg-[#1b1b1b]">

              <div className="h-2 w-[88%] rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600"></div>

            </div>

          </div>


          <div className="absolute -right-8 top-10 w-64 rounded-2xl border border-emerald-500/10 bg-[#111111]/90 p-5 backdrop-blur-xl shadow-[0_0_35px_rgba(16,185,129,0.08)]">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">

                <Terminal className="h-5 w-5 text-emerald-400" />

              </div>

              <div>

                <p className="text-sm font-semibold text-white">

                  Complexity Analysis

                </p>

                <p className="text-xs text-zinc-500">

                  O(n) • O(1)

                </p>

              </div>

            </div>

            <div className="mt-4 h-2 rounded-full bg-[#1b1b1b]">

              <div className="h-2 w-[95%] rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600"></div>

            </div>

          </div>

        </div>

      </div>


      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />


      <div className="absolute bottom-[-220px] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[160px]" />

    </section>
  );
};

export default Hero;