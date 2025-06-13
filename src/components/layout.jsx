import React from "react";
import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <div className="font-sans bg-gray-50 text-gray-900 overflow-x-hidden">
      <nav className="flex items-center justify-between px-6 py-4 shadow-sm bg-white fixed top-0 w-full z-50">
        <div className="text-xl font-bold">Conecta SmartCity</div>
        <div className="space-x-4">
          <button className="px-4 py-2 rounded-full bg-gray-200 hover:bg-sky-200 transition duration-500 hover:scale-105">
            Colaboradoes
          </button>

          <Link to="projetos">
            <button className="px-4 py-2 rounded-full bg-gray-200 hover:bg-sky-200 transition duration-500 hover:scale-105">
              Projetos
            </button>
          </Link>

          <button className="px-4 py-2 rounded-full bg-gray-200 hover:bg-sky-200 transition duration-500 hover:scale-105">
            Contato
          </button>

          <button className="px-4 py-2 rounded-full bg-black text-white hover:bg-white shadow-lg shadow-neutral-300 hover:text-black transition duration-500 hover:scale-105">
            Entrar/Login
          </button>
        </div>
      </nav>

      <div className="pt-24">{children}</div>
    </div>
  );
}

export default Layout;
