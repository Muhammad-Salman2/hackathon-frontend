// import { createRoot } from "react-dom/client";
// import "./index.css";
// import { BrowserRouter } from "react-router";
// import AppRouter from "./Route.jsx";

// createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <AppRouter />
//   </BrowserRouter>
// );
// -------------------------------------
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// // Wrap your App with BrowserRouter
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
// --------------------------


import { createRoot } from "react-dom/client";
import "./index.css";
import Approuter from "./Route";

import AuthContextProvider from "./context/context";
import { BrowserRouter } from "react-router-dom";
// import { BrowserRouter } from "react-router";
// import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <BrowserRouter>
      <Approuter />
    </BrowserRouter>
  </AuthContextProvider>
);
