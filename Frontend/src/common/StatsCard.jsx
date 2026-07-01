const StatsCard = ({ title, value, icon }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-emerald-500/10 bg-[#101010] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/20 hover:shadow-[0_0_30px_rgba(16,185,129,0.08)]">


      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex items-center justify-between">

        <div>

          <p className="text-sm font-medium uppercase tracking-wider text-zinc-500">

            {title}

          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">

            {value}

          </h2>

        </div>

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10 text-3xl text-emerald-400 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]">

          {icon}

        </div>

      </div>

    </div>
  );
};

export default StatsCard;