import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import "normalize.css";
import theme from "./theme";
import { Provider } from "react-redux";
import store from "@/store";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    {/* 报错 异步路由 用callback */}
    <Suspense fallback="loading">
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </Suspense>
  </ThemeProvider>
  // </React.StrictMode>
);
