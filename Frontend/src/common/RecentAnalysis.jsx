const RecentAnalysis = ({ analysis }) => {
  
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-emerald-500/10 bg-[#101010] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/20 hover:shadow-[0_0_30px_rgba(16,185,129,0.08)]">


      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between">

        <div className="flex-1">

          <h3 className="text-lg font-semibold text-white">

            {analysis.title}

          </h3>

          <div className="mt-4 flex flex-wrap gap-3">

            <span className="rounded-full border border-zinc-700 bg-[#161616] px-3 py-1 text-xs font-medium text-zinc-300">

              {analysis.language}

            </span>

            <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium capitalize text-emerald-300">

              {analysis.action}

            </span>

          </div>

          <p className="mt-5 text-sm text-zinc-500">

          {new Date(analysis.createdAt).toLocaleString("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
})}

          </p>

        </div>

      </div>

    </div>
  );
};

export default RecentAnalysis;