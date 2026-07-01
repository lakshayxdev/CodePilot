import { FaTrash } from "react-icons/fa";
import { RiAiGenerate2 } from "react-icons/ri";

const HistoryCard = ({ history, onDelete }) => {
  return (
    <div className="w-full bg-[#111111]/90 backdrop-blur-md border border-emerald-500/20 rounded-2xl px-6 py-5 hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] transition-all duration-300">
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-5">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
  <RiAiGenerate2 size={20} className="text-emerald-400" />
</div>
          <div>
            <h2 className="text-sm md:text-xl font-semibold text-white capitalize">
             {history.action} : {history.title}
            </h2>

            <p className="text-sm text-zinc-400 capitalize mt-1">
              {history.language}
            </p>
          </div>
        </div>


        <div className="flex items-center gap-4 md:gap-6">
          <p className="hidden lg:block text-sm text-zinc-500">
          {new Date(history.createdAt).toLocaleDateString("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
})}
{" • "}
{new Date(history.createdAt).toLocaleTimeString("en-US", {
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
})}
          </p>

          <button
            onClick={() => onDelete(history._id)}
            className=" text-red-400 hover:bg-red-500/10 transition-all duration-300 flex items-center justify-center"
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;