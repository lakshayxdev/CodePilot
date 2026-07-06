import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import api from "../services/api";
import { FaCode } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import {Eye, EyeOff} from "lucide-react"
import toast from "react-hot-toast";

const Login = () => {
   const {login}=useAuth();
    const navigate=useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const emailchange = (e) => {
        setForm({...form, email: e.target.value});
    }

      const passwordchange = (e) => {
        setForm({...form, password: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

         if (!form.email.trim() && !form.password.trim()) {
    toast.error("All fields are required");
    return;
}

    if (!form.email.trim()) {
    toast.error("Email is required");
    return;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(form.email)) {
    toast.error("Please enter a valid email address");
    return;
}

 if (!form.password.trim()) {
    toast.error("Password is required");
    return;
}
        setLoading(true);
       try {
      const response = await api.post("/auth/login", form);

      login(response.data.user, response.data.token);
      toast.success("Login Successfully");
  navigate("/dashboard");

     setForm({email: "", password: ""});
    } catch (error) {
      console.log(error);
      toast.error("Invalid Credentials");
    }
     finally {
          setLoading(false);
        }
    }


    return (
      <div className=" relative min-h-screen bg-[#0B0B0D] overflow-hidden">
    
    
        <div className=" absolute inset-0">
    
          <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[140px]" />
    
          <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[140px]" />
    
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
    
        </div>
    
    
<div className="absolute top-8 left-6 md:left-10 flex items-center gap-3 z-20">

          <div className="w-11 h-11 rounded-xl bg-[#042B1A] border border-emerald-500/30 flex items-center justify-center">
    
            <FaCode className="text-emerald-400 text-lg" />
    
          </div>
    
          <h1 className="text-2xl font-bold text-white">
    
            Code<span className="text-emerald-400">Pilot</span>
    
          </h1>
    
        </div>
    
    
<div className="relative min-h-screen flex flex-col items-center justify-start md:justify-center pt-28 md:pt-0 pb-8 px-6">  

          <div className="w-full max-w-md mt-6 md:mt-0 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-3xl shadow-[0_20px_70px_rgba(0,0,0,.6)] p-10">
    
    
            <div className="text-center">
    
              <h2 className="text-4xl font-bold text-white">
    
                Welcome Back
    
              </h2>
    
              <p className="text-zinc-400 mt-3 leading-7">
    
                Login to continue your AI powered development workflow.
    
              </p>
    
            </div>
    
    
            <form
             onSubmit={handleSubmit}
              className="mt-10 space-y-6"
            >
    
    
              <div>
    
                <label className="text-xs uppercase tracking-[1px] text-zinc-500 ml-1">
    
                  Email Address
    
                </label>
    
                <div className="relative mt-2">
    
                  <IoMdMail
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                    size={18}
                  />
    
                  <input
                    type="email"
                    value={form.email}
                   onChange={emailchange}
                    placeholder="name@company.com"
                    className="w-full rounded-xl border border-white/10 bg-[#121214] py-3.5 pl-12 pr-4 text-white outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20"
                  />
    
                </div>
    
              </div>
        
              <div>
    
                <div className="flex justify-between items-center">
    
                  <label className="text-xs uppercase tracking-[1px] text-zinc-500 ml-1">
    
                    Password
    
                  </label>
    
                </div>
    
                <div className="relative mt-2">
    
                  <FaLock
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                    size={17}
                  />
    
                  <input
                  type={showPassword ? "text": "password"}
                    value={form.password}
                   onChange={passwordchange}
                     placeholder="••••••••"
                    className="w-full rounded-xl border border-white/10 bg-[#121214] py-3.5 pl-12 pr-12 text-white outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20"
                  />
    
                   <button type="button" onClick={()=> setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white">
                {showPassword ? (
                  <Eye size={18}/>
                ) :
              (
                <EyeOff size={18}/>
              )
                }
              </button>
    
                </div>
    
              </div>
    
                  
    
    
             <button
  type="submit"
  disabled={loading}
  className="group w-full rounded-xl bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 py-4 font-semibold text-[#04120B] shadow-[0_10px_30px_rgba(16,185,129,.25)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(16,185,129,.45)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 disabled:hover:shadow-[0_10px_30px_rgba(16,185,129,.25)]"
>
    
                <span className="flex items-center justify-center gap-2">
    
                 {loading? "Authenticating..." :
                 (
                  <>
                 Authenticate
                  <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1" />

                  </>
                 )                  

                  }
    
                </span>
    
              </button>
        
              <div className="flex items-center gap-4">
    
                <div className="flex-1 h-px bg-white/10"></div>
    
                <span className="text-[11px] uppercase tracking-[4px] text-zinc-500">
    
                  Secure Login
    
                </span>
    
                <div className="flex-1 h-px bg-white/10"></div>
    
              </div>
        
              <div className="text-center">
    
                <p className="text-sm text-zinc-400">
    
                  Don't have an account?
    
                  <Link
                    to="/signup"
                    className="ml-2 font-semibold text-emerald-400 hover:text-emerald-300 transition"
                  >
    
                    Create Account
    
                  </Link>
    
                </p>
    
              </div>
    
            </form>
    
          </div>
    
        </div>
    
      </div>
    
    );
};

export default Login;