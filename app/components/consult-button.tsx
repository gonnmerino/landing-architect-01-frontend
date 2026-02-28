'use client'
import { WorkInProgress } from "./navbar";

const ConsultButton = () => {
  return (
  <div className="w-full h-70 relative overflow-hidden">
    <img
      className="w-full h-full object-cover object-[50%_85%]"
      src="/images/bg-prefooter.webp"
      alt="" />
    <button
      onClick={() => WorkInProgress()}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
               border border-[#b46a3c] bg-[#b46a3c] text-white px-7 md:px-9 py-2.5 md:py-3
               text-sm md:text-lg tracking-wide font-light w-fit
               hover:bg-[#f4f1ed] hover:text-[#b46a3c] transition-colors duration-300 cursor-pointer">
      Consultar!
    </button>
  </div>
  );
}

export default ConsultButton;