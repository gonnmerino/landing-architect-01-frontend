
const ViewProjectsButton = () => {
  return (
    <a
      href="/projects"
      className="border border-[#b46a3c] bg-[#b46a3c] text-white px-7 md:px-9 py-2.5 md:py-3 text-sm md:text-lg tracking-wide font-light w-fit cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.34,1.2,0.64,1)] hover:bg-[#f4f1ed] hover:text-[#b46a3c] hover:shadow-[0_0_20px_rgba(180,106,60,0.3)] active:scale-95 hover:scale-105">
      Ver proyectos
    </a>
  );
}

export default ViewProjectsButton;