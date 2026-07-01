import SectionCard from "./SectionCard";

const ReviewResponse = ({ response }) => {
  if (!response) return null;

  const strengths = response.sections.find(
    (section) => section.heading === "Strengths"
  );

  const weaknesses = response.sections.find(
    (section) => section.heading === "Weaknesses"
  );

  const suggestions = response.sections.find(
    (section) => section.heading === "Suggestions"
  );

  const percentage = response.score * 10;
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="mt-10 space-y-8">

      {/* Review Score */}

      <div className="relative overflow-hidden rounded-3xl border border-emerald-500/10 bg-[#101010] p-8 shadow-[0_0_35px_rgba(16,185,129,0.05)]">

        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative flex flex-col gap-8 md:flex-row md:items-center">

          <div className="relative h-36 w-36">

            <svg
              className="h-36 w-36 -rotate-90"
              viewBox="0 0 120 120"
            >

              {/* Background */}

              <circle
                cx="60"
                cy="60"
                r={radius}
                stroke="#27272a"
                strokeWidth="8"
                fill="none"
              />

              {/* Progress */}

              <circle
                cx="60"
                cy="60"
                r={radius}
                stroke="#34d399"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                className="transition-all duration-1000"
              />

            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">

              <span className="text-4xl font-bold text-white">
                {response.score}
              </span>

              <span className="text-sm text-emerald-400">
                /10
              </span>

            </div>



          </div>

          <div className="flex-1">

            <div className="flex items-center justify-between">

              <h2 className="text-3xl font-bold text-white">

                 <span className="text-emerald-400">Review Report</span>

              </h2>

              <div className="hidden md:block rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-300">

                Review Mode

              </div>

            </div>

            <p className="mt-4 max-w-3xl leading-7 text-zinc-400">

              CodePilot reviewed your implementation by identifying
              strengths, weaknesses, and practical improvements to
              enhance code quality, maintainability, and overall design.

            </p>

          </div>

        </div>

      </div>

      {/* Review Sections */}

      <div className="grid gap-6 md:grid-cols-3">

        <SectionCard
          title="Strengths"
          points={strengths?.points}
        />

        <SectionCard
          title="Weaknesses"
          points={weaknesses?.points}
        />

        <SectionCard
          title="Suggestions"
          points={suggestions?.points}
        />

      </div>

    </div>
  );
};

export default ReviewResponse;