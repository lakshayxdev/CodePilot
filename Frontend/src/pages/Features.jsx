import {
  Bug,
  Brain,
  ShieldCheck,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Explain Code",
    desc: "Understand complex code with AI-powered explanations, execution flow, key concepts, and algorithm insights.",
  },
  {
    icon: Bug,
    title: "Debug Errors",
    desc: "Detect logical mistakes, runtime issues, and receive practical fixes with clear explanations.",
  },
  {
    icon: ShieldCheck,
    title: "Code Quality Analysis",
    desc: "Evaluate readability, maintainability, performance, scalability, and coding standards with AI-powered insights.",
  },
  {
    icon: Zap,
    title: "Generate Test Cases",
    desc: "Automatically generate normal, edge, boundary, and invalid test cases to validate your code thoroughly.",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="px-3 relative overflow-hidden py-28 bg-gradient-to-b from-[#050505] via-[#08120E] to-[#050505] border-t border-emerald-500/10"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full bg-emerald-500/10 blur-[140px]" />

        <div className="absolute -bottom-40 right-0 w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-[140px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
            AI Powered Features
          </span>

          <h2 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight text-white">
            Everything You Need To{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500 bg-clip-text text-transparent">
              Analyze Code Smarter
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Powerful AI tools designed to help developers understand, debug,
            evaluate, and improve code with confidence.
          </p>
        </div>


        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-emerald-500/10 bg-[#0F1115] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/40 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]"
              >

                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />


                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />


                <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10">
                  <Icon
                    size={26}
                    className="text-emerald-400 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>


                <h3 className="relative text-xl font-semibold text-white">
                  {item.title}
                </h3>


                <p className="relative mt-4 text-sm leading-7 text-zinc-400">
                  {item.desc}
                </p>


                <div className="absolute -bottom-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;