import React, { useState } from "react";
import { EndScreen } from "../Constent";
import { Terminal as TerminalIcon, ChevronRight, } from "lucide-react";

const Navbar = () => {
  const [close, setClose] = useState(false);

  const handleClose = () => {
    setClose(!close);
  };

  return (
    <nav>
      {!close ? (
        <div className="bg-zinc-800 p-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div
              className="w-3 h-3 rounded-full bg-red-500/80"
              onClick={handleClose}
            />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex items-center gap-2 ml-4 text-zinc-400 text-sm">
            <TerminalIcon size={14} />
            <span>guest@portfolio: ~</span>
          </div>
        </div>
      ) : (
        <EndScreen />
      )}
    </nav>
  );
};

export default Navbar;
