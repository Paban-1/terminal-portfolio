import React, { useState, useEffect, useMemo } from "react";
import { Loader } from "../Constent";

const DataRender = ({ hist }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [loaderStatus, setLoaderStatus] = useState("hidden");
  const[startLag, setStartLag]= useState(0);

  // A helper function to create a "pause",
  // The delay function recive a paramiter as ms and now start a coundown as per the paramiter (ex. 500ms or 2000ms) after that the delay function become udefined
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

//   let startLag;
  let processTime;

  useEffect(() => {
    // We create an internal async function
    const runSequence = async () => {
      // 1. Randomize speeds
      setStartLag(Math.round(Math.random() * 300))
      processTime = Math.random() * 2000 + 500;

      // 2. Wait for the initial "network lag"
      await delay(startLag); // when the coundown (ex. 500ms) end next..
      console.log(startLag);
      setLoaderStatus("flex"); // The Loader Icon shows and rotating next...

      // 3. Wait for the "processing" to finish
      // Send the new timer coundown again (ex. 2000ms) next..
      await delay(processTime);

      // 4. Update UI
      // The 2000ms coundown is end the loader hide and the data will show up to the UI.
      setLoaderStatus("hidden");
      setIsVisible(true);
    };

    runSequence();
  }, []); // Use [] for Only runs once when the command is created not many time

  return (
    <div className="mb-2">
      <p className="text-green-500">$ lima-OS-{hist.currentCommand}</p>
      <p className="text-red-400">{startLag}ms</p>

      <div className={`${loaderStatus} items-center gap-2 my-2`}>
        <Loader className="animate-spin text-blue-500" size={20} />
        <span className="text-blue-500 text-xs italic">communicating...</span>
      </div>

      {isVisible && (
        <pre className="text-gray-300">
          {">"} {hist.data}
        </pre>
      )}
    </div>
  );
};

export default React.memo(DataRender);
