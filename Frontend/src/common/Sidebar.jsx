import {
  FaChevronDown,
  FaChevronRight,
  FaBook,
  FaClipboardCheck,
  FaBug,
  FaFlask,
} from "react-icons/fa6";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { IoSparklesSharp } from "react-icons/io5";
import { BsGraphUp } from "react-icons/bs";
import { IoCodeSlash } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { MdHomeFilled } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";

const Sidebar = ({ action, setAction, setCode, setResponse ,  sidebarOpen,
  setSidebarOpen,}) => {

  const { logout } = useAuth();

  const [openAI, setOpenAI] = useState(true);

  const navStyle = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
      isActive
        ? "bg-emerald-500/15 text-emerald-300"
        : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
    }`;

  const actions = [
    {
      id: "explain",
      label: "Explain",
      icon: <FaBook />,
    },
    {
      id: "review",
      label: "Review",
      icon: <FaClipboardCheck />,
    },
    {
      id: "debug",
      label: "Debug",
      icon: <FaBug />,
    },
    {
      id: "complexity",
      label: "Complexity Analysis",
      icon: <BsGraphUp />,
    },
    {
      id: "quality",
      label: "Code Quality",
      icon: <IoCodeSlash />,
    },
    {
      id: "testcases",
      label: "Test Cases",
      icon: <FaFlask />,
    },
  ];

  const handleActionChange = (newAction) => {

    setAction(newAction);

    setCode("");

    setResponse(null);

};

 return (
  
<aside
  className={`
    fixed lg:static
    top-0 left-0
    z-50
    w-72 h-screen
    bg-[#090909]
    border-r border-emerald-500/10
    flex flex-col justify-between
    transition-transform duration-300
    ${
      sidebarOpen
        ? "translate-x-0"
        : "-translate-x-full lg:translate-x-0"
    }
  `}
>

    <div>

      <div className="h-20 flex items-center justify-center border-b border-emerald-500/10">

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-xl bg-[#042B1A] border border-emerald-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.15)]">

            <IoCodeSlash className="text-emerald-400 text-lg" />

          </div>

          <h1 className="text-2xl font-bold text-white tracking-tight">

            Code<span className="text-emerald-400">Pilot</span>

          </h1>

        </div>

      </div>

      <nav className="p-4 space-y-2">

  
        <NavLink
  to="/dashboard"
  end
  onClick={() => setSidebarOpen(false)}
  className={navStyle}
>
  <MdHomeFilled />
  Dashboard

</NavLink>


        <button
          onClick={() => setOpenAI(!openAI)}
          className="w-full flex justify-between items-center px-4 py-3 rounded-xl text-zinc-300 hover:bg-white/5 hover:text-emerald-300 transition-all duration-300"
        >

          <div className="flex items-center gap-3">

            <IoSparklesSharp />

            AI Workspace

          </div>

          {openAI ? (
            <FaChevronDown className="text-xs" />
          ) : (
            <FaChevronRight className="text-xs" />
          )}

        </button>

        {openAI && (

          <div className="ml-4 mt-2 space-y-1">

            {actions.map((item) => (

              <button
                key={item.id}
                onClick={() => {
  handleActionChange(item.id);
  setSidebarOpen(false);
}}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 ${
                  action === item.id
                    ? "bg-emerald-500/15 border border-emerald-500/20 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,.15)]"
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`}
              >

                {item.icon}

                <span className="text-sm">

                  {item.label}

                </span>

              </button>

            ))}

          </div>

        )}

        <NavLink
  to="/dashboard/history"
  onClick={() => setSidebarOpen(false)}
  className={navStyle}
>
  <FaHistory />
  History
</NavLink>

        <NavLink
  to="/dashboard/new-analysis"
  onClick={() => setSidebarOpen(false)}
  className={navStyle}
>
  <FaPlus />
  New Analysis
</NavLink>

      </nav>

    </div>

    <div className="p-4 border-t border-emerald-500/10">

      <button
        onClick={logout}
        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 hover:border hover:border-red-500/20 transition-all duration-300"
      >

        <MdOutlineLogout />

        Logout

      </button>

    </div>

  </aside>
);
};

export default Sidebar;

