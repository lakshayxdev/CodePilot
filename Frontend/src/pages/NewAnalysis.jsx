import { useState } from "react";
import Editor from "@monaco-editor/react";
import api from "../services/api";
import ResponseSection from "../analysis/ResponseSection";
import { useOutletContext } from "react-router-dom";

import { IoSparklesSharp } from "react-icons/io5";
import ResponseSkeleton from "@/analysis/ResponseSkeleton";
import { VscSearchSparkle } from "react-icons/vsc";
import toast from "react-hot-toast";


const NewAnalysis = () => {
  const [loading, setLoading] = useState(false);

const {
    action,
    setAction,
    code,
    setCode,
    response,
    setResponse,
} = useOutletContext();
const [language, setLanguage] = useState("javascript");

const handleAnalyze = async() => {
  if(!code.trim()) {
    toast.error("Please Enter some code before analyzing");
  }
  try {
    setLoading(true);
    const response=await api.post("/ai", {
      action,
      code,
      language
    })
    setResponse(response.data.data);
    console.log(response.data);
    toast.success("Analysis Complete");
  }
  catch(error) {
    console.log("Error : ", error.message);
  }
  finally {
    setLoading(false);
  }
 
}

  return (
  <div className="min-h-screen bg-[#090909] px-8 py-8">


    <div className="mb-8">

      <h1 className="text-4xl font-bold text-white mt-15">
        New <span className="text-emerald-400">Analysis</span>
      </h1>

      <p className="mt-2 text-zinc-400">
        Paste your code and let CodePilot analyze, debug and optimize it.
      </p>

    </div>


    <div className="overflow-hidden rounded-2xl border border-emerald-500/10 bg-[#101010] shadow-[0_0_30px_rgba(16,185,129,0.05)]">


      <div className="flex items-center justify-between border-b border-emerald-500/10 bg-[#0d0d0d] px-6 py-4">

        <div className="flex items-center gap-2">

          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-emerald-500"></div>

        </div>

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="rounded-xl border border-emerald-500/20 bg-[#141414] px-4 py-2 text-sm text-white outline-none transition focus:border-emerald-400"
        >

          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="cpp">C++</option>
          <option value="java">Java</option>
          <option value="c">C</option>

        </select>

      </div>


      <Editor
        height="500px"
        language={language}
        theme="vs-dark"
        value={code}
        onChange={(value) => setCode(value || "")}
        options={{
          minimap: { enabled: false },
          fontSize: 15,
          fontFamily: "Fira Code",
          automaticLayout: true,
          wordWrap: "on",
          scrollBeyondLastLine: false,
          roundedSelection: true,
          smoothScrolling: true,
        }}
      />

    </div>


    <div className="mt-8">

     <button
  onClick={handleAnalyze}
  disabled={loading}
  className="flex items-center gap-3 rounded-xl bg-emerald-400 px-8 py-3 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.35)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:bg-emerald-400 disabled:hover:shadow-none"
>

        {loading? (
          <>
           <VscSearchSparkle />
           Analyzing...
           </>
        ) : (
           <>
           <VscSearchSparkle />
           Execute Analysis
           </>
        )
      }
        

      </button>

    </div>


  {loading ? (
    <ResponseSkeleton />
  ) : (
    <>
      {response && (
        <>
          <div className="mb-6 mt-6 flex items-center justify-between">

            <div className="flex items-center gap-2 text-2xl font-semibold text-emerald-400">

              <IoSparklesSharp />

              <span>Intelligent Insights</span>

            </div>

          </div>

          <ResponseSection
            action={action}
            response={response}
          />
        </>
      )}
    </>
  )}

</div>
  
);
};

export default NewAnalysis;