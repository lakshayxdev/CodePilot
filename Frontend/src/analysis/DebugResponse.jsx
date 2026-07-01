import SectionCard from "./SectionCard";
import CodeEditorCard from "./CodeEditorCard";

const DebugResponse = ({ response, language }) => {
  if (!response) return null;

  const getSection = (heading) =>
    response.sections.find(
      (section) => section.heading === heading
    );

  const bugs = getSection("Bugs Found");
  const causes = getSection("Causes");
  const fixes = getSection("Fixes Applied");
  const prevention = getSection("Prevention Tips");

  return (
    <div className="mt-10 space-y-8">

      {/* Header */}

      <div className="relative overflow-hidden rounded-3xl border border-emerald-500/10 bg-[#101010] p-8 shadow-[0_0_35px_rgba(16,185,129,0.05)]">

        <div className="absolute -top-20 right-0 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative flex flex-col gap-3">

          <div className="flex items-center justify-between">

            <h2 className="text-2xl font-bold text-white">

               <span className="text-emerald-400">Debug Report</span>

            </h2>

            <div className="hidden md:block rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-300">

              Debug Mode

            </div>

          </div>

          <p className="max-w-3xl leading-7 text-zinc-400">

            CodePilot analyzed your source code, detected potential
            issues, identified their causes, generated fixes, and
            suggested practices to avoid similar bugs in the future.

          </p>

        </div>

      </div>

      {/* Fixed Code */}

      {response.code && (
        <CodeEditorCard
          title="Fixed Code"
          language={language}
          code={response.code}
        />
      )}

      {/* Analysis Cards */}

      <div className="grid gap-6 lg:grid-cols-2">

        <SectionCard
          title="Bugs Found"
          points={bugs?.points}
        />

        <SectionCard
          title="Causes"
          points={causes?.points}
        />

        <SectionCard
          title="Fixes Applied"
          points={fixes?.points}
        />

        <SectionCard
          title="Prevention Tips"
          points={prevention?.points}
        />

      </div>

    </div>
  );
};

export default DebugResponse;