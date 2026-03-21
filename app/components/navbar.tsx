"use client";

import { useState, useEffect } from "react";
import { Menu, X } from 'lucide-react';
import { ContactData } from "../types/contact";
import Link from "next/link";

interface NavBarProps {
  contact: ContactData;
}

const Navbar = ({ contact }: NavBarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <nav className="w-full fixed top-0 left-0 z-50 bg-[#f4f1ed] border-b border-black/10">
        <div className="max-w-7xl mx-auto pt-8 pb-4 px-12 2xl:px-0 flex items-start">

          {/* Logo */}
          <div className="font-serif leading-none">
            <Link href="/">
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

          {/* Desktop Menu */}
          <ul className="ml-auto hidden lg:flex items-center gap-14 text-lg font-light tracking-wide">

            <li className="relative cursor-pointer transition-all ease-in-out
              before:transition-[width] before:ease-in-out before:duration-700
              before:absolute before:bg-[#b46a3c] before:origin-center
              before:h-px before:w-0 hover:before:w-[50%]
              before:bottom-0 before:left-[50%]
              after:transition-[width] after:ease-in-out after:duration-700
              after:absolute after:bg-[#b46a3c] after:origin-center
              after:h-px after:w-0 hover:after:w-[50%]
              after:bottom-0 after:right-[50%]">
              <Link href="/projects">Proyectos</Link>
            </li>

            <li className="relative cursor-pointer transition-all ease-in-out
              before:transition-[width] before:ease-in-out before:duration-700
              before:absolute before:bg-[#b46a3c] before:origin-center
              before:h-px before:w-0 hover:before:w-[50%]
              before:bottom-0 before:left-[50%]
              after:transition-[width] after:ease-in-out after:duration-700
              after:absolute after:bg-[#b46a3c] after:origin-center
              after:h-px after:w-0 hover:after:w-[50%]
              after:bottom-0 after:right-[50%]">
              <Link href="/clients">Otros Clientes</Link>
            </li>

            <li className="relative cursor-pointer transition-all ease-in-out
              before:transition-[width] before:ease-in-out before:duration-700
              before:absolute before:bg-[#b46a3c] before:origin-center
              before:h-px before:w-0 hover:before:w-[50%]
              before:bottom-0 before:left-[50%]
              after:transition-[width] after:ease-in-out after:duration-700
              after:absolute after:bg-[#b46a3c] after:origin-center
              after:h-px after:w-0 hover:after:w-[50%]
              after:bottom-0 after:right-[50%]">
              <Link href="/contact">Contacto</Link>
            </li>
            <li className="select-none text-sm tracking-widest border border-[#b46a3c]/60 text-[#b46a3c] px-6 py-2 cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.34,1.2,0.64,1)] hover:bg-[#b46a3c]/90 hover:text-white hover:border-[#b46a3c]/90 hover:shadow-[0_0_20px_rgba(180,106,60,0.3)] active:scale-95 hover:scale-105">
              {contact.PhoneNumber}
            </li>
          </ul>

          {/* Hamburguesa */}
          <button
            onClick={() => setIsOpen(true)}
            className="ml-auto lg:hidden cursor-pointer text-[#b46a3c] p-1"
            aria-label="Abrir menú"
          >
            <Menu size={28} strokeWidth={1.5} />
          </button>

        </div>
      </nav>

      {/* Overlay */}
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
        <div className="absolute inset-0 bg-[#f4f1ed]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTAgMEw0IDRNNCAwTDAgNCIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9zdmc+')]" />
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#b46a3c]/30 to-transparent" />

        <div className="relative h-full flex flex-col px-10 pt-10 pb-12">

          <div className="flex items-center justify-between mb-16">
            <span className="font-serif text-sm text-[#b46a3c]/60 tracking-widest uppercase">Menú</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#3e2b1c] cursor-pointer hover:text-[#b46a3c] transition-colors duration-200"
              aria-label="Cerrar menú"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>

          <nav className="flex flex-col">

            <Link href="/projects" onClick={() => setIsOpen(false)}
              className="group flex items-center justify-between py-6 border-b border-[#3e2b1c]/10">
              <span className="font-serif text-3xl text-[#3e2b1c] group-hover:text-[#b46a3c] transition-colors duration-300">Proyectos</span>
              <span className="text-[#b46a3c]/0 group-hover:text-[#b46a3c]/60 transition-all duration-300 group-hover:translate-x-1 text-xl">→</span>
            </Link>

            <Link href="/clients" onClick={() => setIsOpen(false)}
              className="group flex items-center justify-between py-6 border-b border-[#3e2b1c]/10">
              <span className="font-serif text-3xl text-[#3e2b1c] group-hover:text-[#b46a3c] transition-colors duration-300">Otros Clientes</span>
              <span className="text-[#b46a3c]/0 group-hover:text-[#b46a3c]/60 transition-all duration-300 group-hover:translate-x-1 text-xl">→</span>
            </Link>

            <Link href="/contact" onClick={() => setIsOpen(false)}
              className="group flex items-center justify-between py-6 border-b border-[#3e2b1c]/10">
              <span className="font-serif text-3xl text-[#3e2b1c] group-hover:text-[#b46a3c] transition-colors duration-300">Contacto</span>
              <span className="text-[#b46a3c]/0 group-hover:text-[#b46a3c]/60 transition-all duration-300 group-hover:translate-x-1 text-xl">→</span>
            </Link>

          </nav>

          <div className="mt-auto flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span className="h-px flex-1 bg-[#b46a3c]/20" />
              <span className="text-[#b46a3c]/40 text-xs tracking-widest uppercase font-light">Contacto</span>
              <span className="h-px flex-1 bg-[#b46a3c]/20" />
            </div>
            <button className="select-none text-sm tracking-widest border border-[#b46a3c]/60 text-[#b46a3c] px-6 py-2 cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.34,1.2,0.64,1)] hover:bg-[#b46a3c]/90 hover:text-white hover:border-[#b46a3c]/90 hover:shadow-[0_0_20px_rgba(180,106,60,0.3)] active:scale-95 hover:scale-105">
              {contact.PhoneNumber}
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;