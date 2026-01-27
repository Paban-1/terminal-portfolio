import React, { useState } from "react";
import { Intro, Terminal, TermaxTwo } from "./Constent";
import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import { store } from "./RTk/store";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950">
      <Provider store={store}>
        <AnimatePresence>
          {!isLoaded ? (
            <Intro key="loader" onComplete={setIsLoaded} />
          ) : (
            <main key="content" className=" md:p-10">
              {/* Your Terminal Portfolio Logic Goes Here */}
              <TermaxTwo />
            </main>
          )}
        </AnimatePresence>
      </Provider>
    </div>
  );
};

export default App;
