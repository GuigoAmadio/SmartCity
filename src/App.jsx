import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";

function App() {
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/ChatPage" element={<ChatPage />} />
    {/* Rota de projetos (futura) */}
    {/* <Route path="/projetos" element={<ProjetosPage />} /> */}
  </Routes>;
}

export default App;
