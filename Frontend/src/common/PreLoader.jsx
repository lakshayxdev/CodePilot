import { FaCode } from "react-icons/fa6";

const PreLoader = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#09090B] flex items-center justify-center">
      <div className="flex flex-col items-center">

        {/* Logo */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-emerald-500/30 blur-2xl animate-pulse" />

           <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 transition-all duration-300 group-hover:border-emerald-400 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]">
          
                      <FaCode className="text-xl text-emerald-400 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110" />
          
                    </div>
        </div>

        {/* Title */}

        <h1 className="mt-6 text-3xl font-bold tracking-wide text-white">
          Code<span className="text-emerald-400">Pilot</span>
        </h1>

        <p className="mt-2 text-sm text-zinc-500">
          Initializing AI Workspace...
        </p>

        {/* Progress */}

        <div className="mt-8 h-[4px] w-56 overflow-hidden rounded-full bg-zinc-800">
          <div className="h-full w-1/2 animate-[loading_1.4s_ease-in-out_infinite] rounded-full bg-emerald-400" />
        </div>
      </div>
    </div>
  );
};

export default PreLoader;