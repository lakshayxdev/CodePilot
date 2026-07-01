

import { Link, useLocation } from "react-router-dom";
import { FaCode } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useAuth } from "@/context/AuthContext";


const Navbar = () => {
  const location = useLocation();

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (location.pathname !== "/") return;

    const sections = document.querySelectorAll(
      "section[id], div[id], footer[id]"
    );

  const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  },
  {
    rootMargin: "-40% 0px -40% 0px",
    threshold: 0,
  }
);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [location.pathname]);

  const navItems = [
    {
      title: "Home",
      href: "#home",
      id: "home",
    },
    {
      title: "Features",
      href: "#features",
      id: "features",
    },
    {
      title: "Docs",
      href: "#docs",
      id: "docs",
    },
   
  ];

  const {user}=useAuth();
  const initial=user?.name?.charAt(0).toUpperCase();

  return (
    <header className="fixed inset-x-0 top-0 z-50">

      <div className="absolute inset-0 border-b border-emerald-500/10 bg-[#050505]/80 backdrop-blur-xl" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-36 w-[520px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />

      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        <Link
          to="/"
          className="group flex items-center gap-4"
        >

          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 transition-all duration-300 group-hover:border-emerald-400 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]">

            <FaCode className="text-xl text-emerald-400 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110" />

          </div>

          <h1 className="text-2xl md:text-3xl font-black tracking-tight text-white">

            Code

            <span className="text-emerald-400">

              Pilot

            </span>

          </h1>

        </Link>

        <nav className="hidden items-center gap-10 lg:flex">

          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`
                relative
                text-sm
                font-semibold
                transition-all
                duration-300
                after:absolute
                after:left-0
                after:-bottom-2
                after:h-[2px]
                after:bg-emerald-400
                after:transition-all
                after:duration-300

                ${
                  location.pathname === "/"
                    ? activeSection === item.id
                      ? "text-emerald-400 after:w-full"
                      : "text-zinc-400 hover:text-white after:w-0 hover:after:w-full"
                    : "text-zinc-400 hover:text-white after:w-0 hover:after:w-full"
                }
              `}
            >
              {item.title}
            </a>
          ))}
                  </nav>
        <div className="flex items-center gap-4">

          {user ? (
  <Link
    to="/dashboard"
    className="
      flex
      h-11
      w-11
      items-center
      justify-center
      rounded-full
      border
      border-emerald-500/20
      bg-gradient-to-r
      from-emerald-500
      to-emerald-400
      text-lg
      font-bold
      text-black
      transition-all
      duration-300
      hover:scale-105
      hover:shadow-[0_0_25px_rgba(16,185,129,0.35)]
      active:scale-95
    "
  >
    {initial}
  </Link>
) : (
  <>
    <Link
      to="/login"
      className="
        hidden
        sm:inline-flex
        items-center
        gap-2
        justify-center
        rounded-xl
        border
        border-emerald-500/20
        bg-gradient-to-r
        from-emerald-500
        to-emerald-400
        px-7
        py-3
        font-semibold
        text-black
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-[0_0_30px_rgba(16,185,129,0.35)]
        active:scale-95
      "
    >
      Login
      <FaArrowRight />
    </Link>

    <Link
      to="/login"
      className="
        sm:hidden
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-emerald-500/20
        bg-gradient-to-r
        from-emerald-500
        to-emerald-400
        px-4
        py-2
        text-sm
        font-semibold
        text-black
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-[0_0_20px_rgba(16,185,129,0.35)]
      "
    >
      Login
      <FaArrowRight className="text-xs" />
    </Link>
  </>
)}
        </div>
      </div>
    </header>
  );
};

export default Navbar;