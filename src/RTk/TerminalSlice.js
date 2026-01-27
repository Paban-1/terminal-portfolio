import { createSlice, current, nanoid } from "@reduxjs/toolkit";
import { COMMAND_DATA } from "../Constent";
import { input } from "framer-motion/client";

// Example Initial State
const initialState = {
  commands: [
    {
      id: nanoid(),
      type: "command",
      command: "help",
      content: `type "help" for see commands test lima`,
    },
    {
      id: nanoid(),
      type: "command",
      command: "about",
      content: `i am a dev test lima`,
    },
    {
      id: nanoid(),
      type: "command",
      command: "projects",
      content: `my projects lima test`,
    },
  ],
  Historys: [
    // { id: nanoid(), type: "output", command: "about", content: "i am a dev" },
  ],
  Error: [
    {
      id: nanoid(),
      type: "Error",
      command: null,
      content: `Command Not found type "help" for Available commadns `,
    },
  ],
};

// Create Slice
const terminalSlice = createSlice({
  name: "terminal",
  initialState,
  // Create Reducers
  reducers: {
    indentifyInput: (state, action) => {
      const currentCommand = action.payload;
      console.log(currentCommand);

      const data = COMMAND_DATA[currentCommand];
      console.log(data);

      const history = state.Historys.push({ currentCommand, data });
      console.log(`This is history ${history}`);

      // let saveData = state.commands.push({
      //   id: nanoid(),
      //   type: "input",
      //   command: currentCommand,
      // });
      // state.Historys.push(saveData);
      console.log(`The length of commands array ${state.commands.length}`);
      console.log(`The lenght of history: ${state.Historys.length}`);

      // if (currentCommand === "help") {
      //   state.commands.push({
      //     id: nanoid(),
      //     type: "output",
      //     command: "help",
      //     content: initialState.commands[0].content,
      //   });
      // }
    },
  },
});

export const { indentifyInput } = terminalSlice.actions;
export default terminalSlice.reducer;
