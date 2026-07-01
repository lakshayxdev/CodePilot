const SectionCard = ({ title, points }) => {

  if (!points || points.length === 0) return null;

  return (

    <div className="bg-[#18181B] border border-zinc-800 rounded-2xl p-6 hover:border-emerald-500/20 hover:shadow-[0_0_25px_rgba(16,185,129,0.08)]">

      <h2 className="text-xl font-semibold text-white mb-5">

        {title}

      </h2>

      <ul className="space-y-5">

  {points.map((point, index) => (

    <li
      key={index}
      className="flex items-start gap-4"
    >

      <div className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,.5)] flex-shrink-0" />

      <p className="text-zinc-300 leading-8">
        {point}
      </p>

    </li>

  ))}

</ul>

    </div>

  );

};

export default SectionCard;