import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Dashboard from "pages/Dashboard";
import Home from "pages/Home";

import AppContextProviders from "context/App"

import GlobalStyle from "style/globalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppContextProviders>
      <BrowserRouter>
        <GlobalStyle />

        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Home />}>

            <Route index element={<Home />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContextProviders>
  </React.StrictMode>
);
