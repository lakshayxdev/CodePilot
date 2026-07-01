const HistorySkeleton = () => {
  return (
    <div className="w-full bg-[#111111]/90 border border-emerald-500/20 rounded-2xl px-6 py-5 animate-pulse">
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-5">

          <div className="w-10 h-10 rounded-xl bg-zinc-800" />

          <div className="space-y-3">
            <div className="h-5 w-72 bg-zinc-800 rounded-md" />
            <div className="h-4 w-24 bg-zinc-800 rounded-md" />
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <div className="h-4 w-36 bg-zinc-800 rounded-md" />
          <div className="w-5 h-5 rounded bg-zinc-800" />
        </div>

      </div>
    </div>
  );
};

export default HistorySkeleton;