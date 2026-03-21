import { getProjects } from "../libs/strapi/projects";
import Link from "next/link";

export default async function Projects() {
  const projectsRaw = await getProjects();

  const projects = projectsRaw.map((project: any) => {
    const firstImage = project.Image?.find((img: any) => img.Image?.url);
    return {
      id: project.id,
      name: project.ProjectName,
      description: project.Description,
      slug: project.slug,
      year: project.DateOfProject
        ? new Date(project.DateOfProject).getFullYear()
        : null,
      imageUrl: firstImage?.Image?.url ?? "/fallback.jpg",
    };
  });

  return (
    <div>
     <main className="min-h-screen pb-16 md:pb-0 flex flex-col items-center px-6 sm:px-8 md:px-12 xl:px-20 pt-28 md:pt-40 overflow-x-hidden bg-[#ede8e3]/40">
        {/* HEADER */}
        <div className="w-full max-w-7xl mx-auto mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-4">
            <span className="h-px w-8 bg-[#b46a3c]/50" />
            <span className="text-xs tracking-[0.2em] uppercase text-[#b46a3c]/70 font-light">
              Catálogo
            </span>
          </div>
          <div className="flex items-end justify-between">
            <h1
              className="font-serif italic text-[#2a1f15] leading-[1.08] tracking-tight"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4.5rem)" }}
            >
              Proyectos
            </h1>
            <span className="font-serif text-[#b46a3c]/50 text-sm tracking-widest pb-2">
              {projects.length} obras
            </span>
          </div>
          <div className="mt-6 h-px w-full bg-[#b46a3c]/15" />
        </div>

        {/* GRID */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24">
          {projects.map((project, i) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className={`group flex flex-col ${i % 3 === 0 ? "md:col-span-2" : ""}`}
            >
              {/* Imagen */}
              <div className={`w-full overflow-hidden relative ${
                i % 3 === 0 ? "h-[55vh] md:h-[70vh]" : "h-[45vh] md:h-[55vh]"
              }`}>
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[#2a1f15]/0 group-hover:bg-[#2a1f15]/10 transition-colors duration-500" />
              </div>

              {/* Info */}
              <div className="mt-5 flex items-start justify-between gap-4">
                <div className="flex flex-col">
                  <span className="text-[0.6rem] tracking-[0.25em] uppercase text-[#b46a3c]/50 font-light mb-2">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                  <h2
                    className="font-serif italic text-[#2a1f15] leading-tight tracking-tight group-hover:text-[#b46a3c] transition-colors duration-300"
                    style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
                  >
                    {project.name}
                  </h2>
                  {project.description && (
                    <p className="mt-2 text-sm font-light text-neutral-500 leading-relaxed line-clamp-2 max-w-md">
                      {project.description}
                    </p>
                  )}
                </div>

                <div className="flex flex-col items-end shrink-0 pt-5">
                  {project.year && (
                    <span className="font-serif text-sm text-[#2a1f15]/50">
                      {project.year}
                    </span>
                  )}
                  <span className="mt-2 text-[#b46a3c]/0 group-hover:text-[#b46a3c] transition-all duration-300 group-hover:translate-x-1 text-lg">
                    →
                  </span>
                </div>
              </div>

              <div className="mt-5 h-px w-full bg-[#b46a3c]/10 group-hover:bg-[#b46a3c]/30 transition-colors duration-500" />
            </Link>
          ))}
        </div>

      </main>
    </div>
  );
}