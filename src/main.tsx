import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import LaMasia from "./components/LaMasia/LaMasia";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <Main />
    <LaMasia />
  </StrictMode>
);
