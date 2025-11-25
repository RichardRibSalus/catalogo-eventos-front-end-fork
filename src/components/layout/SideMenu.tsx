import React from "react";
import { Link } from "react-router-dom";

export interface SideMenuProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function SideMenu({ open, setOpen }: SideMenuProps) {
  return (
    <nav className={`fixed top-0 left-0 w-[300px] h-full bg-[#232f3e] text-white z-[1100] transition-all duration-300
      ${open ? "translate-x-0" : "-translate-x-full"}`}>
      
      <span
        className="absolute top-4 right-5 text-3xl cursor-pointer"
        onClick={() => setOpen(false)}
      >
        &times;
      </span>

      <ul className="pt-24 flex flex-col">
        <Link className="p-4 border-b border-white/10" to="/">Início</Link>
        <Link className="p-4 border-b border-white/10" to="/eventos">Eventos e Categorias</Link>
        <Link className="p-4 border-b border-white/10" to="/turismo">Turismo</Link>
        <Link className="p-4 border-b border-white/10" to="/conta">Sua Conta</Link>
        <Link className="p-4 border-b border-white/10" to="/contato">Contato</Link>
      </ul>
    </nav>
  );
}
