import { createSlice, current, nanoid } from "@reduxjs/toolkit";
import { COMMAND_DATA } from "../Constent";

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
    // {
    //   id: nanoid(),
    //   type: "Error",
    //   command: null,
    //   content: `Command Not found type "help" for Available commadns `,
    // },
  ],
};

// Create Slice
const terminalSlice = createSlice({
  name: "terminal",
  initialState,
  // Create Reducers
  reducers: {
    indentifyInput: (state, action) => {
      const currentCommand = String(action.payload).toLowerCase().trim()

      console.log(`THIS IS CURRENNTCOMMAND ${currentCommand}`);

      const data = COMMAND_DATA[currentCommand];
      console.log(data);
      if (!data) {
        console.log("THere is no command");
      }

      const existKey = Object.keys(COMMAND_DATA).includes(currentCommand)
      console.log(`THIS IS EXISTKEY ${existKey}`);

      if (existKey) {
        state.Historys.push({ currentCommand, data })
      } else {
        state.Error.push({
          id: nanoid(),
          type: "Error",
          command: null,
          content: `Command Not found Type "help" for avalable command `,
          bydefault: ``
        },)
      }
    },
  },
});

export const { indentifyInput } = terminalSlice.actions;
export default terminalSlice.reducer;
