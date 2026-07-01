import StatsCard from "../common/StatsCard";
import RecentAnalysis from "../common/RecentAnalysis";
import { useState, useEffect } from "react";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  FaCode,
  FaBug,
  FaChartLine,
} from "react-icons/fa";
import { IoSparklesSharp } from "react-icons/io5";

const Dashboard = () => {
  const { user } = useAuth();

  const [loading, setLoading] = useState(false);
  const [recentAnalysis, setRecentAnalysis] = useState([]);
  const [stats, setStats] = useState({
    totalAnalysis: 0,
    debugRequests: 0,
    optimizeRequests: 0,
  });

  const navigate=useNavigate();
  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        setLoading(true);

        const response = await api.get("/dashboard");

        setStats(response.data.stats);
        setRecentAnalysis(response.data.recentAnalysis);

      } catch (error) {
        console.log("Error : ", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  const handleViewall = () => {
    navigate("/dashboard/history");
  }

  return (
    <div className="min-h-screen bg-[#090909] px-8 py-8">


      <div className="relative mt-15 overflow-hidden rounded-3xl border border-emerald-500/10 bg-[#101010] p-8 shadow-[0_0_35px_rgba(16,185,129,0.05)]">

        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative flex flex-col gap-4 ">

          <div className="flex items-center gap-3 text-emerald-400 ">

            <IoSparklesSharp className="text-xl" />

            <span className="font-medium">
              AI Development Dashboard
            </span>

          </div>

          <h1 className="text-4xl font-bold text-white">

            Welcome Back{" "}

            <span className="text-emerald-400">
              {user?.name}
            </span>

            👋

          </h1>

          <p className="max-w-2xl leading-7 text-zinc-400">

            Track your AI-powered coding activity, monitor recent
            analyses, and gain insights into your development
            workflow.

          </p>

        </div>

      </div>


      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        <StatsCard
          title="Total Analysis"
          value={stats.totalAnalysis}
          icon={<FaCode />}
        />

        <StatsCard
          title="Debug Requests"
          value={stats.debugRequests}
          icon={<FaBug />}
        />

        <StatsCard
          title="Optimize Requests"
          value={stats.optimizeRequests}
          icon={<FaChartLine />}
        />

      </div>


      <div className="mt-12 rounded-3xl border overflow-y-auto border-emerald-500/10 bg-[#101010] p-8 shadow-[0_0_30px_rgba(16,185,129,0.05)]">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h2 className="text-2xl font-bold text-white">

              Recent{" "}

              <span className="text-emerald-400">

                Analysis

              </span>

            </h2>

            <p className="mt-2 text-zinc-500">

              Your latest AI coding activities.

            </p>

          </div>

          <button 
          onClick={handleViewall}
         className="hidden md:block rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 text-sm font-medium text-emerald-300 transition-all duration-300 hover:bg-emerald-500/20">

            View All

          </button>

        </div>

        <div className="space-y-4">

          {recentAnalysis.length > 0 ? (

            recentAnalysis.map((analysis) => (

              <RecentAnalysis
                key={analysis._id}
                analysis={analysis}
              />

            ))

          ) : (

            <div className="rounded-2xl border border-dashed border-emerald-500/10 py-16 text-center">

              <FaCode className="mx-auto mb-4 text-5xl text-emerald-400/40" />

              <h3 className="text-xl font-semibold text-white">

                No Analysis Yet

              </h3>

              <p className="mt-2 text-zinc-500">

                Start your first AI analysis to see your history here.

              </p>

            </div>

          )}

        </div>

      </div>

    </div>
  );
};

export default Dashboard;