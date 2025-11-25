import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[1000] backdrop-blur-xl bg-[rgba(11,15,20,.75)] border-b border-[rgba(255,255,255,.06)]">
      <div className="flex items-center justify-between px-4 py-3 max-w-[1200px] mx-auto">
        
        {/* HAMBURGER */}
        <div
          className={`flex flex-col gap-[5px] w-[30px] cursor-pointer transition-all ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <div className="h-[3px] bg-text rounded-md" />
          <div className="h-[3px] bg-text rounded-md" />
          <div className="h-[3px] bg-text rounded-md" />
        </div>

        {/* LOGO */}
        <div className="flex items-center gap-3 font-extrabold tracking-wide">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand1 via-brand2 to-brand3 shadow-[0_0_16px_rgba(116,241,255,0.35)]" />
          <span className="text-xl">Dourados<span className="opacity-70">+</span></span>
        </div>

        <button className="px-4 py-2 rounded-xl border border-white/10 bg-white/5">🔍</button>
      </div>
    </header>
  );
}
