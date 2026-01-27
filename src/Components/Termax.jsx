import React, { useState, useEffect, useRef } from "react";
import { Terminal as TerminalIcon, ChevronRight , Loader} from "lucide-react";

const Termax = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "output", content: "Welcome to System OS v2.0.0" },
    { type: "output", content: 'Type "open" to find lists.' },
  ]);

  const scrollRef = useRef(null);

  // Auto-scroll to bottom whenever history updates
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const cmd = input.toLowerCase().trim();
      const newHistory = [...history, { type: "command", content: input }];

      // Command Logic
      let response = "";
      if (cmd === "help") {
        response =
          "Available commands: about, projects, contact, clear";
      } else if (cmd === "about") {
        response =
          "I am a Full Stack Developer specializing in React and Tailwind. and i am a good developer and i am a good person.";
      } else if (cmd === "clear") {
        setHistory([]);
        setInput("");
        return;
      } else if (cmd === "projects") {
        response = "Lima";
      } else if (cmd === "contact") {
        response = "contact";
      } else {
        response = `Command not found: ${cmd}. Type "help" for assistance.`;
      }

      setHistory([...newHistory, { type: "output", content: response }]);
      setInput("");
    }
  };

  const handleClick = () => {
    setInput("clear");
  };

  return (
    <div
      className="w-full md:h-[600px] h-[900px] bg-zinc-900/50 border border-zinc-800 overflow-hidden shadow-2xl backdrop-blur-sm flex flex-col font-mono"
    >
      {/* Terminal Header */}
      {/* <div className="bg-zinc-800 p-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex items-center gap-2 ml-4 text-zinc-400 text-sm">
          <TerminalIcon size={14} />
          <span>guest@portfolio: ~</span>
        </div>
      </div> */}

      <div className="mt-2">
        <p className="flex-1 px-6 overflow-y-auto custom-scrollbar text-sm md:text-base text-gray-500">
          ~ Welcome to System OS v2.0.0
        </p>
        <p className="flex-1 px-6 overflow-y-auto custom-scrollbar text-sm md:text-base text-gray-500">
          {" "}
          ~ Type <span className="text-green-600"> "help" </span> to see
          available commands.
        </p>
      </div>

      {/* Terminal Body */}
      <div
        ref={scrollRef}
        className="flex-1 p-4 overflow-y-auto custom-scrollbar text-sm md:text-base"
      >
        {history.map((line, i) => (
          <div key={i} className="mb-1">
            {line.type === "command" ? (
              <div className="flex items-center gap-2">
                <ChevronRight size={16} className="text-green-500" />
                <span className="text-zinc-100">{line.content}</span>
              </div>
            ) : (
              <div className="text-zinc-400 ml-6">{line.content}</div>
            )}

            {/* <div><Loader size={20}/></div> */}
          </div>
        ))}

        {/* Active Input Line */}
        <div className="flex items-center gap-2 mt-2">
          <ChevronRight size={16} className="text-green-500" />
          <input
            autoFocus
            className="bg-zinc-900 rounded border-none outline-none flex-1 text-zinc-100 border border-white"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            spellCheck="false"
          />
        </div>
      </div>
    </div>
  );
};

export default Termax;
