import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { IoCodeSlash } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="px-3 relative overflow-hidden border-t border-emerald-500/10 bg-gradient-to-b from-[#050505] via-[#08120E] to-[#050505]">

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] bg-[size:48px_48px]" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">

        <div className="grid gap-12 md:grid-cols-3">

          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10">

                <IoCodeSlash className="text-emerald-400 text-xl" />

              </div>

              <h2 className="text-3xl font-bold text-white">

                Code<span className="text-emerald-400">Pilot</span>

              </h2>

            </div>

            <p className="mt-5 max-w-sm leading-7 text-zinc-400">

              AI-powered coding companion that helps developers explain,
              debug, review, analyze and improve code with structured,
              reliable insights.

            </p>

          </div>

          <div>

            <h3 className="text-lg font-semibold text-white">

              Quick Links

            </h3>

            <div className="mt-5 flex flex-col gap-3">

              <a
                href="#home"
                className="text-zinc-400 transition hover:text-emerald-400"
              >
                Home
              </a>

              <a
                href="#features"
                className="text-zinc-400 transition hover:text-emerald-400"
              >
                Features
              </a>

              <a
                href="#docs"
                className="text-zinc-400 transition hover:text-emerald-400"
              >
                Documentation
              </a>

            </div>

          </div>

          <div>

            <h3 className="text-lg font-semibold text-white">

              AI Features

            </h3>

            <div className="mt-5 flex flex-col gap-3 text-zinc-400">

              <span>Explain Code</span>

              <span>Review Code</span>

              <span>Debug Code</span>

              <span>Complexity Analysis</span>

              <span>Code Quality</span>

              <span>Generate Test Cases</span>

            </div>

          </div>

        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-emerald-500/10 pt-8 md:flex-row">

          <p className="text-sm text-zinc-500">

            © {new Date().getFullYear()} CodePilot. Built with React, Node.js and AI.

          </p>

          <div className="flex items-center gap-5">

            <a
              href="#"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-500/10 bg-[#111111] text-zinc-400 transition-all duration-300 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-400"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="#"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-500/10 bg-[#111111] text-zinc-400 transition-all duration-300 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-400"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="#"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-500/10 bg-[#111111] text-zinc-400 transition-all duration-300 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-400"
            >
              <FaXTwitter size={20} />
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;