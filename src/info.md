// Example Initial State
const initialState = {
history: [
{ id: '1', type: 'system', content: 'Welcome to Gemini-OS v1.0.0' },
{ id: '2', type: 'system', content: 'Type "help" to see available commands.' }
],
cwd: '~', // Current Working Directory
};

const COMMAND_DATA = {
help: "Available commands: [about, projects, skills, contact, clear, social]",
about: "I am a Full Stack Developer passionate about building CLI-themed web apps.",
skills: "Frontend: React, Redux, Tailwind \nBackend: Node.js, Express, MongoDB",
contact: "Email: developer@example.com \nGitHub: github.com/username",
social: "LinkedIn: linkedin.com/in/username \nTwitter: @dev_handle",
projects: [
{ name: "E-comm", desc: "A full-stack store", tech: "React, RTK" },
{ name: "ChatApp", desc: "Real-time chat", tech: "Socket.io" }
]
};

import { createSlice, nanoid } from '@reduxjs/toolkit';

const terminalSlice = createSlice({
name: 'terminal',
initialState,
reducers: {
executeCommand: (state, action) => {
const input = action.payload.trim().toLowerCase();

      // 1. Add the user's input to history
      state.history.push({
        id: nanoid(),
        type: 'user',
        content: `${state.cwd} $ ${input}`
      });

      // 2. Process the command
      if (input === 'clear') {
        state.history = [];
        return;
      }

      const output = COMMAND_DATA[input];

      if (output) {
        // If the command exists, add the response
        state.history.push({
          id: nanoid(),
          type: 'output',
          content: typeof output === 'string' ? output : JSON.stringify(output, null, 2)
        });
      } else if (input !== "") {
        // Handle unknown commands
        state.history.push({
          id: nanoid(),
          type: 'error',
          content: `Command not found: ${input}. Type "help" for assistance.`
        });
      }
    }

}
});

export const { executeCommand } = terminalSlice.actions;
export default terminalSlice.reducer;

const history = useSelector(state => state.terminal.history);
const dispatch = useDispatch();

const handleKeyDown = (e) => {
if (e.key === 'Enter') {
dispatch(executeCommand(e.target.value));
e.target.value = ''; // Clear input field
}
};
