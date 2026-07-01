import { useEffect, useState } from "react";
import api from "../services/api";
import HistoryCard from "./HistoryCard";
import toast from "react-hot-toast";
import HistorySkeleton from "./HistorySkeleton";

const History = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await api.get("/history");
        setHistory(response.data.history);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/history/${id}`);
      setHistory((prev) => prev.filter((item) => item._id !== id));
      toast.success("Deleted Successfully");
    } catch (error) {
      console.log("Error : ", error.message);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#050505] via-[#08120E] to-[#050505] px-6 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}

        <div className="mb-10 mt-12">
          <span className="inline-block px-4 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium">
            AI Analysis
          </span>

          <h1 className="mt-5 text-5xl font-bold text-white">
            Analysis{" "}
            <span className="text-emerald-400">History</span>
          </h1>

          <p className="mt-3 text-zinc-400 max-w-2xl">
            Access every code analysis you've performed. Review previous
            debugging sessions, optimizations, explanations and continue where
            you left off.
          </p>
        </div>

        {/* Content */}

        {loading ? (

          <div className="space-y-5">
      {[...Array(5)].map((_, index) => (
        <HistorySkeleton key={index} />
      ))}
    </div>
  
        ) : history.length === 0 ? (
          <div className="border border-emerald-500/20 bg-[#111111]/80 rounded-3xl p-16 text-center backdrop-blur-sm">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-emerald-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17h6M9 13h6M9 9h6M7 5h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2z"
                />
              </svg>
            </div>

            <h2 className="mt-6 text-3xl font-semibold text-white">
              No Analysis Yet
            </h2>

            <p className="mt-3 text-zinc-500 max-w-md mx-auto">
              Your previous AI code analyses will appear here once you start
              analyzing code.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {history.map((item) => (
              <HistoryCard
                key={item._id}
                history={item}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default History;