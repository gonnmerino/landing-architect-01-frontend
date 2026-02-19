"use client";

import { useState } from "react";
import { Menu, X } from 'lucide-react';
import { ContactData } from "../types/contact";
import Link from "next/link";

interface NavBarProps {
  contact: ContactData;
}

export function WorkInProgress() {
  window.alert("Funcion aun no disponible")
}

const Navbar = ({ contact }: NavBarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="w-full absolute top-0 left-0 z-50">
        <div className="max-w-400 mx-auto px-6 md:px-12 xl:px-20 pt-8 pb-4 flex items-start border-b border-black/10">

          {/* Logo */}
          <div className="font-serif leading-tight">
            <Link href={`../`}>
              <h1 className="text-2xl md:text-3xl">
                Architect
                <span className="block text-base md:text-xl font-light">
                  Estudio de muestra
                </span>
              </h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="ml-auto hidden md:flex items-center gap-14 text-lg font-light tracking-wide">

            <li onClick={() => WorkInProgress()} className="relative cursor-pointer transition-all ease-in-out
              before:transition-[width] before:ease-in-out before:duration-700 
              before:absolute before:bg-[#b46a3c] before:origin-center 
              before:h-px before:w-0 hover:before:w-[50%] 
              before:bottom-0 before:left-[50%] 
              after:transition-[width] after:ease-in-out after:duration-700 
              after:absolute after:bg-[#b46a3c] after:origin-center 
              after:h-px after:w-0 hover:after:w-[50%] 
              after:bottom-0 after:right-[50%]">
              Proyectos
            </li>

            <li onClick={() => WorkInProgress()} className="relative cursor-pointer transition-all ease-in-out
              before:transition-[width] before:ease-in-out before:duration-700 
              before:absolute before:bg-[#b46a3c] before:origin-center 
              before:h-px before:w-0 hover:before:w-[50%] 
              before:bottom-0 before:left-[50%] 
              after:transition-[width] after:ease-in-out after:duration-700 
              after:absolute after:bg-[#b46a3c] after:origin-center 
              after:h-px after:w-0 hover:after:w-[50%] 
              after:bottom-0 after:right-[50%]">
              Otros Clientes
            </li>

            <li onClick={() => WorkInProgress()} className="relative cursor-pointer transition-all ease-in-out
              before:transition-[width] before:ease-in-out before:duration-700 
              before:absolute before:bg-[#b46a3c] before:origin-center 
              before:h-px before:w-0 hover:before:w-[50%] 
              before:bottom-0 before:left-[50%] 
              after:transition-[width] after:ease-in-out after:duration-700 
              after:absolute after:bg-[#b46a3c] after:origin-center 
              after:h-px after:w-0 hover:after:w-[50%] 
              after:bottom-0 after:right-[50%]">
              Contacto
            </li>

            <li onClick={() => WorkInProgress()} className="ml-6 select-none text-sm tracking-widest border border-[#b46a3c]/60 text-[#b46a3c] px-6 py-2 hover:bg-[#b46a3c] hover:text-white transition duration-300 cursor-pointer">
              {contact.PhoneNumber}
            </li>

          </ul>

          {/* Mobile Icon */}
          <button
            onClick={() => WorkInProgress()}
            //onClick={() => setIsOpen(true)}
            className="ml-auto md:hidden text-[#b46a3c]"
          >
            <Menu size={28} strokeWidth={1.5} />
          </button>

        </div>
      </nav>

      {/* Mobile Panel */}
      <div
        className={`fixed inset-0 z-100 transition-all duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-[#f4f1ed]" />

        {/* Content */}
        <div className="relative h-full flex flex-col px-8 pt-10">

          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="self-end text-[#b46a3c]"
          >
            <X size={28} strokeWidth={1.5} />
          </button>

          <div className="mt-20 flex flex-col gap-10 text-3xl font-serif">

            <a
              onClick={() => setIsOpen(false)}
              className="border-b border-[#b46a3c]/30 pb-4"
            >
              Proyectos
            </a>

            <a
              onClick={() => setIsOpen(false)}
              className="border-b border-[#b46a3c]/30 pb-4"
            >
              Otros Clientes
            </a>

            <a
              onClick={() => setIsOpen(false)}
              className="border-b border-[#b46a3c]/30 pb-4"
            >
              Contacto
            </a>

          </div>

          {/* Phone bottom */}
          <div className="mt-auto mb-12 text-sm tracking-widest text-[#b46a3c] border border-[#b46a3c]/50 px-6 py-3 w-fit">
            {contact.PhoneNumber}
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;
