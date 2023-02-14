import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import TodoContextProvider from "./context/todoContext";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "@emotion/react";

const theme = {
  mainColor: "rgba(237, 196, 107, 1)",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TodoContextProvider>
    <Router>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyles />
      </ThemeProvider>
    </Router>
  </TodoContextProvider>,
);
