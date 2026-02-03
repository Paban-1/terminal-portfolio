import Intro from "../Components/Intro";
import Terminal from "../Components/Terminal";
import EndScreen from "../Components/EndScreen";
import Navbar from "../Components/Navbar";
import Termax from "../Components/Termax";
import TermaxTwo from "../Components/TermaxTwo";

// Component from Reuse
import DataRender from "../Reuse/DataRender";

export { Intro, Terminal, Navbar, EndScreen, Termax, TermaxTwo, DataRender };

// Imports from lucide react
import { Loader } from "lucide-react";
export { Loader }

// The Data set for Slice
const COMMAND_DATA = {
  help: "Available commands: [about, projects, skills, contact, clear, social]",
  about:
    "I am a Full Stack Developer passionate about building CLI-themed web apps.",
  skills:
    "Frontend: React, Redux, Tailwind \nBackend: Node.js, Express, MongoDB",
  contact: "Email: developer@example.com \nGitHub: github.com/username",
  social: "LinkedIn: linkedin.com/in/username \nTwitter: @dev_handle",
  projects: [
    { name: "E-comm", desc: "A full-stack store", tech: "React, RTK" },
    { name: "ChatApp", desc: "Real-time chat", tech: "Socket.io" },
  ],
};
export { COMMAND_DATA };
