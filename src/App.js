import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { WebRouter } from "./router";
import Router from "./router/Router"
import AdminRouter  from "./router/AdminRouter";
import { AuthProvider } from "./contexts";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AdminRouter />
        <WebRouter />
      </BrowserRouter>
    </AuthProvider>
  );
}
