import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProviderWrapper } from "./ThemeContext";
import GlobalStyle from "./globalStyles";
import ErrorBoundary from "./ErrorBoundary";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <ThemeProviderWrapper>
    <ErrorBoundary>
      <GlobalStyle />
      <App />
    </ErrorBoundary>
  </ThemeProviderWrapper>
);