import SectionCard from "./SectionCard";

const ExplainResponse = ({ response }) => {
  if (!response) return null;

  const stepByStep = response.sections.find(
    (section) => section.heading === "Step-by-step Working"
  );

  const keyConcepts = response.sections.find(
    (section) => section.heading === "Key Concepts"
  );

  const observations = response.sections.find(
    (section) => section.heading === "Important Observations"
  );

  return (
    <div className="mt-10 space-y-8">

      {/* Summary */}

      <div className="relative overflow-hidden rounded-3xl border border-emerald-500/10 bg-[#101010] p-8 shadow-[0_0_35px_rgba(16,185,129,0.05)]">

        <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative">

          <div className="mb-6 flex items-center justify-between">

            <h2 className="text-2xl font-bold text-white">

               <span className="text-emerald-400">Summary</span>

            </h2>

            <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-300">

              Explain Mode

            </div>

          </div>

          <p className="leading-8 text-zinc-300">

            {response.summary}

          </p>

        </div>

      </div>

      {/* Sections */}

      <div className="grid gap-6 lg:grid-cols-3">

        <SectionCard
          title="Step-by-step Working"
          points={stepByStep?.points}
        />

        <SectionCard
          title="Key Concepts"
          points={keyConcepts?.points}
        />

        <SectionCard
          title="Important Observations"
          points={observations?.points}
        />

      </div>

    </div>
  );
};

export default ExplainResponse;