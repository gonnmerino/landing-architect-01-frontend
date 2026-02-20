'use client'
import { WorkInProgress } from "./navbar";

const ViewProjectsButton = () => {
  return (
    <button
    onClick={() => WorkInProgress()}
      className="mt-8 md:mt-12 border border-[#b46a3c] bg-[#b46a3c] text-white px-7 md:px-9 py-2.5 md:py-3 text-sm md:text-lg tracking-wide font-light w-fit hover:bg-[#f4f1ed] hover:text-[#b46a3c] transition-colors duration-300 cursor-pointer">
      Ver proyectos

    </button>
  );
}

export default ViewProjectsButton;