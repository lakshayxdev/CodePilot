import TestCaseCard from "./TestCaseCard";

const TestCaseGeneration = ({ response }) => {
  if (!response) return null;

  return (
    <div className="mt-10 space-y-10">

      {/* Header */}

      <div className="relative overflow-hidden rounded-3xl border border-emerald-500/10 bg-[#101010] p-8 shadow-[0_0_35px_rgba(16,185,129,0.05)]">

        <div className="absolute -top-20 right-0 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative">

          <div className="flex items-center justify-between">

            <h2 className="text-2xl font-bold text-white">

              <span className="text-emerald-400">Test Case Generation</span>

            </h2>

            <div className="hidden md:block rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-300">

              Testing Mode

            </div>

          </div>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-400">

            CodePilot generated comprehensive test cases along with
            important edge cases to help verify correctness, improve
            reliability, and identify unexpected behavior.

          </p>

        </div>

      </div>

      {/* Test Cases */}

      <div>

        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-2xl font-bold text-white">

            Standard <span className="text-emerald-400">Test Cases</span>

          </h2>

          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">

            {response.testCases.length} Cases

          </span>

        </div>

        <div className="grid gap-6 lg:grid-cols-2">

          {response.testCases.map((testCase, index) => (

            <TestCaseCard
              key={index}
              testCase={testCase}
            />

          ))}

        </div>

      </div>
      <div>

        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-2xl font-bold text-white">

            <span className="text-emerald-400">Edge</span> Cases

          </h2>

          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">

            {response.edgeCases.length} Cases

          </span>

        </div>

        <div className="grid gap-6 lg:grid-cols-2">

          {response.edgeCases.map((testCase, index) => (

            <TestCaseCard
              key={index}
              testCase={testCase}
            />

          ))}

        </div>

      </div>

    </div>
  );
};

export default TestCaseGeneration;