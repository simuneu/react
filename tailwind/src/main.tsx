import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./App.css";
import Home from "./pages/Home.tsx";
import Input from "./components/Input.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Home />
    <Input />
  </StrictMode>
);
