"use client";

import { useState, useEffect } from "react";
import { Menu, X } from 'lucide-react';
import { ContactData } from "../types/contact";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavBarProps {
  contact: ContactData;
}

export function WorkInProgress() {
  window.alert("Funcion aun no disponible")
}

const Navbar = ({ contact }: NavBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isSolid = pathname.startsWith("/projects");
  // Bloquea el scroll cuando el panel está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const navItems = ["Proyectos", "Otros Clientes", "Contacto"];

  return (
    <>
      <nav className={`w-full top-0 left-0 z-50 ${isSolid ? "fixed bg-[#f4f1ed]" : "absolute"}`}>
        <div className="max-w-7xl mx-auto pt-8 pb-4 px-12 2xl:px-0 flex items-start border-b border-black/10">

          {/* Logo */}
          <div className="font-serif leading-none">
            <Link href={`../`}>
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl md:text-[2.5rem] tracking-tight font-normal text-[#2a1f15]">
                  Architect
                </h1>
                <span className="text-[0.6rem] tracking-[0.28em] uppercase font-light text-[#b46a3c]/70 not-italic">
                  Estudio de muestra
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu — solo desde lg */}
          <ul className="ml-auto hidden lg:flex items-center gap-14 text-lg font-light tracking-wide">
            {navItems.map((item) => (
              <li
                key={item}
                onClick={() => WorkInProgress()}
                className="relative cursor-pointer transition-all ease-in-out
                  before:transition-[width] before:ease-in-out before:duration-700
                  before:absolute before:bg-[#b46a3c] before:origin-center
                  before:h-px before:w-0 hover:before:w-[50%]
                  before:bottom-0 before:left-[50%]
                  after:transition-[width] after:ease-in-out after:duration-700
                  after:absolute after:bg-[#b46a3c] after:origin-center
                  after:h-px after:w-0 hover:after:w-[50%]
                  after:bottom-0 after:right-[50%]"
              >
                {item}
              </li>
            ))}
            <li
              onClick={() => WorkInProgress()}
              className="select-none text-sm tracking-widest border border-[#b46a3c]/60 text-[#b46a3c] px-6 py-2 hover:bg-[#b46a3c] hover:text-white transition duration-300 cursor-pointer"
            >
              {contact.PhoneNumber}
            </li>
          </ul>

          {/* Hamburguesa — hasta lg */}
          <button
            onClick={() => setIsOpen(true)}
            className="ml-auto lg:hidden cursor-pointer text-[#b46a3c] p-1"
            aria-label="Abrir menú"
          >
            <Menu size={28} strokeWidth={1.5} />
          </button>

        </div>
      </nav>

      {/* Overlay oscuro */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-500 lg:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      />

      {/* Panel mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-[min(420px,100vw)] z-50 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Fondo con textura sutil */}
        <div className="absolute inset-0 bg-[#f4f1ed]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTAgMEw0IDRNNCAwTDAgNCIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9zdmc+')]" />

        {/* Línea decorativa izquierda */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#b46a3c]/30 to-transparent" />

        {/* Contenido */}
        <div className="relative h-full flex flex-col px-10 pt-10 pb-12">

          {/* Header del panel */}
          <div className="flex items-center justify-between mb-16">
            <span className="font-serif text-sm text-[#b46a3c]/60 tracking-widest uppercase">
              Menú
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#3e2b1c] cursor-pointer hover:text-[#b46a3c] transition-colors duration-200"
              aria-label="Cerrar menú"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col">
            {navItems.map((item, i) => (
              <button
                key={item}
                onClick={() => { WorkInProgress(); setIsOpen(false); }}
                className="group flex items-center justify-between py-6 border-b  cursor-pointer border-[#3e2b1c]/10 text-left"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className="font-serif text-3xl text-[#3e2b1c] group-hover:text-[#b46a3c] transition-colors duration-300">
                  {item}
                </span>
                <span className="text-[#b46a3c]/0 group-hover:text-[#b46a3c]/60 transition-all duration-300 translate-x-0 group-hover:translate-x-1 text-xl">
                  →
                </span>
              </button>
            ))}
          </nav>

          {/* Footer del panel */}
          <div className="mt-auto flex flex-col gap-6">
            {/* Separador decorativo */}
            <div className="flex items-center gap-4">
              <span className="h-px flex-1 bg-[#b46a3c]/20" />
              <span className="text-[#b46a3c]/40 text-xs tracking-widest uppercase font-light">Contacto</span>
              <span className="h-px flex-1 bg-[#b46a3c]/20" />
            </div>

            <button
              onClick={() => WorkInProgress()}
              className="self-start text-sm tracking-widest cursor-pointer text-[#b46a3c] border border-[#b46a3c]/50 px-6 py-3 hover:bg-[#b46a3c] hover:text-white transition-all duration-300"
            >
              {contact.PhoneNumber}
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;