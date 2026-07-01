const ProgressBar = ({ title, metric }) => {
  return (
    <div className="rounded-2xl border border-emerald-500/10 bg-[#101010] p-6 transition-all duration-300 hover:border-emerald-500/20 hover:shadow-[0_0_25px_rgba(16,185,129,0.08)]">

      <div className="mb-4 flex items-center justify-between">

        <h3 className="font-semibold text-white">
          {title}
        </h3>

        <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-bold text-emerald-400">
          {metric.score}/10
        </span>

      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-[#1b1b1b]">

        <div
          className="h-full rounded-full bg-linear-to-r from-emerald-400 to-emerald-600 transition-all duration-700"
          style={{
            width: `${metric.score * 10}%`,
          }}
        />

      </div>

      <p className="mt-4 text-sm leading-7 text-zinc-400">
        {metric.reason}
      </p>

    </div>
  );
};

const CodeQualityResponse = ({ response }) => {
  if (!response) return null;

  const { metrics, score } = response;

  return (
    <div className="mt-10 space-y-8">

      {/* Overall Score */}

      <div className="flex flex-col gap-8 rounded-3xl border border-emerald-500/10 bg-[#101010] p-8 md:flex-row md:items-center">


        <div
  className="relative flex h-32 w-32 items-center justify-center rounded-full"
  style={{
    background: `conic-gradient(
      #10b981 ${score * 36}deg,
      #27272a ${score * 36}deg
    )`,
  }}
>
  <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#101010]">
    <span className="text-4xl font-bold text-white">
      {score}
    </span>
  </div>

  <span className="absolute -bottom-3 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-black">
    /10
  </span>
</div>

        <div className="flex-1">

          <h2 className="text-3xl font-bold text-white">
            Overall{" "}
            <span className="text-emerald-400">
              Code Quality
            </span>
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-zinc-400">
            AI evaluated your code based on readability,
            maintainability, performance, scalability,
            security, and modern development best practices.
          </p>

        </div>

      </div>

      {/* Metrics */}

      <div className="grid gap-6 md:grid-cols-2">

        <ProgressBar
          title="Readability"
          metric={metrics.readability}
        />

        <ProgressBar
          title="Maintainability"
          metric={metrics.maintainability}
        />

        <ProgressBar
          title="Performance"
          metric={metrics.performance}
        />

        <ProgressBar
          title="Security"
          metric={metrics.security}
        />

        <ProgressBar
          title="Scalability"
          metric={metrics.scalability}
        />

        <ProgressBar
          title="Best Practices"
          metric={metrics.bestPractices}
        />

      </div>

    </div>
  );
};

export default CodeQualityResponse;