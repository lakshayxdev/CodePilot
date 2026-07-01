import Editor from "@monaco-editor/react";

const CodeEditorCard = ({  language = "javascript", code }) => {

  if (!code) return null;

  return (

    <div className="bg-[#18181B] border border-zinc-800 rounded-2xl overflow-hidden">

      <div className="flex items-center justify-between px-5 mb-5 py-4 border-b border-zinc-800 bg-[#202024]">

        <div className="flex items-center gap-2">

          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>

        </div>

      </div>

      <Editor
        height="350px"
        language={language}
        theme="vs-dark"
        value={code}
        options={{
          readOnly: true,
          minimap: { enabled: false },
          fontSize: 15,
          automaticLayout: true,
          scrollBeyondLastLine: false,
          wordWrap: "on",
          lineNumbers: "on",
          renderLineHighlight: "all",
        }}
      />

    </div>

  );

};

export default CodeEditorCard;