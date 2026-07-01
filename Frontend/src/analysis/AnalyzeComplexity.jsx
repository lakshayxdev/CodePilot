
import SectionCard from "./SectionCard";

const AnalyzeComplexity = ({ response }) => {
  if (!response) return null;

  const getSection = (heading) =>
    response.sections.find(
      (section) => section.heading === heading
    );

  const analysis = getSection("Complexity Analysis");
  const bottlenecks = getSection("Bottlenecks");
  const optimizations = getSection("Possible Optimizations");

  return (
    <div className="mt-10 space-y-8">

      {/* Header */}

      <div className="relative overflow-hidden rounded-3xl border border-emerald-500/10 bg-[#101010] p-8 shadow-[0_0_35px_rgba(16,185,129,0.05)]">

        <div className="absolute -top-20 right-0 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative">

          <div className="flex items-center justify-between">

            <h2 className="text-2xl font-bold text-white">

              <span className="text-emerald-400">Complexity Analysis</span>

            </h2>

            <div className="hidden md:block rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-300">

              Analysis Complexity Mode

            </div>

          </div>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-400">

            CodePilot analyzed your algorithm to determine its time and
            space complexity, identify bottlenecks, and recommend
            optimizations for better scalability.

          </p>

        </div>

      </div>
      <div className="grid gap-6 md:grid-cols-2">

        <div className="rounded-2xl border border-emerald-500/10 bg-[#101010] p-8 transition-all duration-300 hover:border-emerald-500/20 hover:shadow-[0_0_25px_rgba(16,185,129,0.08)]">

          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-zinc-500">

            Time Complexity

          </p>

          <h2 className="text-4xl font-bold text-emerald-400">

            {response.timeComplexity}

          </h2>

        </div>

        <div className="rounded-2xl border border-emerald-500/10 bg-[#101010] p-8 transition-all duration-300 hover:border-emerald-500/20 hover:shadow-[0_0_25px_rgba(16,185,129,0.08)]">

          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-zinc-500">

            Space Complexity

          </p>

          <h2 className="text-4xl font-bold text-emerald-400">

            {response.spaceComplexity}

          </h2>

        </div>

      </div>

      {/* Analysis Cards */}

      <div className="grid gap-6 lg:grid-cols-3">

        <SectionCard
          title="Complexity Analysis"
          points={analysis?.points}
        />

        <SectionCard
          title="Bottlenecks"
          points={bottlenecks?.points}
        />

        <SectionCard
          title="Possible Optimizations"
          points={optimizations?.points}
        />

      </div>

    </div>
  );
};

export default AnalyzeComplexity;