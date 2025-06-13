import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import Layout from "./components/Layout";
import ProjetosPage from "./pages/ProjetosPage";

function App() {
  return (
    <Routes>
      {/* Rotas com Navbar (Layout) */}
      <Route
        path=""
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />

      {/* Rotas sem Navbar */}
      <Route path="ChatPage" element={<ChatPage />} />
      <Route path="ProjetosPage" element={<ProjetosPage />} />
    </Routes>
  );
}

export default App;
