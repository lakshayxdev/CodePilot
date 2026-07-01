const ResponseSkeleton = () => {
  return (
    <div className="mt-10 animate-pulse space-y-8">

      {/* Header */}

      <div className="rounded-3xl border border-emerald-500/10 bg-[#101010] p-8">

        <div className="h-8 w-72 rounded-lg bg-emerald-500/15"></div>

        <div className="mt-6 space-y-3">

          <div className="h-4 w-full rounded bg-zinc-800"></div>

          <div className="h-4 w-11/12 rounded bg-zinc-800"></div>

          <div className="h-4 w-9/12 rounded bg-zinc-800"></div>

        </div>

      </div>

      {/* Cards */}

      <div className="grid gap-6 md:grid-cols-2">

        {[1,2,3,4].map((item)=>(
          <div
            key={item}
            className="rounded-2xl border border-emerald-500/10 bg-[#101010] p-6"
          >

            <div className="h-6 w-40 rounded bg-emerald-500/15"></div>

            <div className="mt-6 space-y-3">

              <div className="h-4 rounded bg-zinc-800"></div>

              <div className="h-4 w-11/12 rounded bg-zinc-800"></div>

              <div className="h-4 w-10/12 rounded bg-zinc-800"></div>

              <div className="h-4 w-7/12 rounded bg-zinc-800"></div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default ResponseSkeleton;