import { getClientOpinions } from "../libs/strapi/projects";
import Link from "next/link";

export default async function Clients() {
  const opinionsRaw = await getClientOpinions();

  const opinions = opinionsRaw.map((opinion: any) => ({
    id: opinion.id,
    name: opinion.ClientName,
    opinion: opinion.Opinion,
    imageUrl: opinion.ClientImage?.url ?? null,
    projectName: opinion.project?.ProjectName ?? null,
    projectSlug: opinion.project?.slug ?? null,
    projectYear: opinion.project?.DateOfProject
      ? new Date(opinion.project.DateOfProject).getFullYear()
      : null,
  }));

  return (
    <div>
      <main className="min-h-screen pb-16 md:pb-0 flex flex-col items-center px-6 sm:px-8 md:px-12 xl:px-20 pt-28 md:pt-40 overflow-x-hidden bg-[#ede8e3]/40">

        {/* HEADER */}
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <span className="h-px w-8 bg-[#b46a3c]/50" />
            <span className="text-xs tracking-[0.2em] uppercase text-[#b46a3c]/70 font-light">
              Testimonios
            </span>
          </div>
          <div className="flex items-end justify-between">
            <h1
              className="font-serif italic text-[#2a1f15] leading-[1.08] tracking-tight"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4.5rem)" }}
            >
              Otros clientes
            </h1>
            <span className="font-serif text-[#b46a3c]/50 text-sm tracking-widest pb-2">
              {opinions.length} historias
            </span>
          </div>
          <div className="mt-6 h-px w-full bg-[#b46a3c]/15" />
        </div>

        {/* OPINIONES */}
        <div className="w-full max-w-7xl mx-auto flex flex-col">
          {opinions.map((item, i) => (
            <div
              key={item.id}
              className="group grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-16 py-14 md:py-16 border-b border-[#b46a3c]/10 hover:border-[#b46a3c]/25 transition-colors duration-500"
            >
              {/* Columna izquierda — imagen + nombre + proyecto */}
              <div className="flex md:flex-col gap-5 md:gap-4 md:w-52">

                {/* Foto del cliente */}
                {item.imageUrl && (
                  <div className="w-16 h-16 md:w-full md:h-52 overflow-hidden shrink-0">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                )}

                <div className="flex flex-col justify-center md:justify-start gap-3">
                  {/* Nombre */}
                  <div>
                    <span className="text-[0.6rem] tracking-[0.25em] uppercase text-[#b46a3c]/60 font-light block mb-1">
                      Cliente
                    </span>
                    <span className="font-serif text-lg italic text-[#2a1f15] leading-tight">
                      {item.name}
                    </span>
                  </div>

                  {/* Proyecto */}
                  {item.projectName && (
                    <div>
                      <span className="text-[0.6rem] tracking-[0.25em] uppercase text-[#b46a3c]/60 font-light block mb-1">
                        Proyecto
                      </span>
                      <div className="flex items-center gap-2">
                        {item.projectSlug ? (
                          <Link
                            href={`/projects/${item.projectSlug}`}
                            className="font-serif text-base italic text-[#2a1f15] hover:text-[#b46a3c] transition-colors duration-300 leading-tight"
                          >
                            {item.projectName}
                          </Link>
                        ) : (
                          <span className="font-serif text-base italic text-[#2a1f15] leading-tight">
                            {item.projectName}
                          </span>
                        )}
                        {item.projectYear && (
                          <span className="text-[0.6rem] tracking-[0.2em] text-[#b46a3c]/50 font-light">
                            {item.projectYear}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Columna derecha — opinión */}
              <div className="flex flex-col justify-center">
                <span className="font-serif text-[#b46a3c]/20 text-6xl leading-none select-none mb-2">
                  "
                </span>
                <div className="flex items-start gap-4">
                  <div className="w-px bg-[#b46a3c]/20 group-hover:bg-[#b46a3c]/40 transition-colors duration-500 shrink-0 self-stretch" />
                  <p className="text-sm md:text-base font-light text-neutral-600 leading-relaxed whitespace-pre-line">
                    {item.opinion}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </main>
    </div>
  );
}