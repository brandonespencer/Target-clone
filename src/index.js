import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./pages/Home";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
git
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
