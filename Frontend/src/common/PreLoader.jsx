



// import { FaCode } from "react-icons/fa6";

// const PreLoader = () => {
//   return (
//     <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#09090B]">
//       <div className="flex flex-col items-center">

//         {/* Logo */}
//         <div className="relative">
//           <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-3xl animate-pulse" />

//           <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10 shadow-[0_0_40px_rgba(16,185,129,0.12)]">
//             <FaCode className="text-3xl text-emerald-400" />
//           </div>
//         </div>

//         {/* Title */}

//         <h1 className="mt-6 text-4xl font-bold tracking-wide text-white">
//           Code<span className="text-emerald-400">Pilot</span>
//         </h1>

//         <p className="mt-2 text-sm tracking-wide text-zinc-500">
//           Initializing AI Workspace...
//         </p>

//         {/* Progress */}

//         <div className="mt-8 h-1.5 w-64 overflow-hidden rounded-full bg-zinc-800">
//           <div className="h-full animate-[loading_2s_linear_forwards] rounded-full bg-gradient-to-r from-emerald-400 to-teal-400" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PreLoader;


import { FaCode } from "react-icons/fa6";

const PreLoader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#09090B]">
      <div className="flex flex-col items-center">

        {/* Logo */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-3xl animate-pulse" />

          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10 shadow-[0_0_40px_rgba(16,185,129,0.12)]">
            <FaCode className="text-3xl text-emerald-400" />
          </div>
        </div>

        {/* Title */}

        <h1 className="mt-6 text-4xl font-bold tracking-wide text-white">
          Code<span className="text-emerald-400">Pilot</span>
        </h1>

        <p className="mt-2 text-sm tracking-wide text-zinc-500">
          Initializing AI Workspace...
        </p>

        {/* Progress */}

        <div className="mt-8 h-1.5 w-64 overflow-hidden rounded-full bg-zinc-800">
          <div className="h-full animate-[loading_2s_linear_forwards] rounded-full bg-gradient-to-r from-emerald-400 to-teal-400" />
        </div>
      </div>
    </div>
  );
};

export default PreLoader;