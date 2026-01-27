import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { indentifyInput } from "../RTk/TerminalSlice";
import { DataRender } from "../Constent";

const TermaxTwo = () => {
  const [input, setInput] = useState("");
  const [showData, setShowData] = useState(false);

  const dispatch = useDispatch();

  const Commands = useSelector((state) => state.terminalData.commands);
  const history = useSelector((state) => state.terminalData.Historys);

  const handlesendData = () => {
    dispatch(indentifyInput(input));
    setInput("");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowData(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [history]);

  return (
    <div>
      <h2 className="text-red-500">Terminal Lima</h2>
      <div>
        {/* {Commands.map((items) => (
          <div key={items.id}>
            {items.content}
            {items.type === "input" ? <span>$ {items.command}</span> : null}

            {items.type === "output" ? (
              <pre>
                {items.content}
                <span className="text-red-600 text-xl">{items.type}</span>
              </pre>
            ) : null}
          </div>
        ))} */}
      </div>
      <div>
        {history.map((hist) => (
          <div key={hist.id}>
            <DataRender key={hist.id} hist={hist} />
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-red-400 text-white p-2"
        />
        <button onClick={handlesendData}>command</button>
      </div>
    </div>
  );
};

export default TermaxTwo;
