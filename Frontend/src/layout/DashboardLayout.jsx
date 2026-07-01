import { Outlet } from "react-router-dom";
import Sidebar from "../common/Sidebar";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

const DashboardLayout = () => {
  const [action, setAction] = useState("review");
  const [code, setCode] = useState("");
  const [response, setResponse] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-[#0D0D0D]">

      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
        />
      )}

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        action={action}
        setAction={setAction}
        setCode={setCode}
        setResponse={setResponse}
      />

      <main className="flex-1 relative overflow-y-auto">

        {!sidebarOpen && (
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden fixed top-5 left-5 z-[60]  text-emerald-400"
          >
            <IoMenu size={22} />
          </button>
        )}

        <Outlet
          context={{
            action,
            setAction,
            code,
            setCode,
            response,
            setResponse,
          }}
        />

      </main>

    </div>
  );
};

export default DashboardLayout;