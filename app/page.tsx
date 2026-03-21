import VerticalCarousel from "./components/carousel";
import type { ImageSlide } from "@/app/types/project"
import FavoriteGrid from "./components/favorite-grid";
import type { FavoriteProject } from "./types/favorite";
import { ServicesType } from "./types/services";
import Services from "./components/services";
import Process from "./components/process";
import { getCarousel, getFavorite, getServices } from "./libs/strapi/projects";
import ViewProjectsButton from "./components/viewproject-btn";
import ConsultButton from "./components/consult-button";

export default async function Home() {

  const [carouselRaw, favoritesRaw, servicesRaw] = await Promise.all([
    getCarousel(),
    getFavorite(),
    getServices(),
  ])
  const slides: ImageSlide[] = carouselRaw.flatMap((project: any) =>
    (project.Image ?? [])
      .filter((img: any) => img.ShowInCarousel === true)
      .map((img: any) => ({
        id: img.id,
        slug: project.slug,
        ImageDescription: img.Description,
        DateOfProject: project.DateOfProject,
        imageUrl: img.Image!.url,
      }))
  );

  const favorites: FavoriteProject[] = favoritesRaw
    .slice(0, 3)
    .map((project: any) => {
      const imgObj =
        project.Image?.find((img: any) => img.Image?.url) || null;
      console.log("imgObj:" + imgObj, "project.Image?.find((img: any) => img.Image?.url: " + project.Image?.find((img: any) => img.Image?.url) || null);
      return {
        id: project.id,
        title: project.ProjectName,
        slug: project.slug,
        description: project.Description,
        year: project.DateOfProject ?? null,
        imageUrl: imgObj?.Image?.url ?? '/fallback.jpg',
      };
    });

  const services: ServicesType[] = servicesRaw
    .slice(0, 3)
    .map((service: any) => ({
      id: service.id,
      serviceName: service.serviceName,
      Description: service.Description
    }))
  return (
    <>
      <video
        autoPlay
        muted
        playsInline
        src="/videos/bg1.mp4"
        className="-z-20 fixed inset-0 w-full h-full object-cover scale-105 blur-[1px] opacity-85"
      />

      <main className="min-h-screen pb-16 md:pb-0 flex flex-col items-center px-6 sm:px-8 md:px-12 xl:px-20 pt-28 md:pt-34 overflow-x-hidden bg-[#ede8e3]/40">

        {/* HERO */}
        <div className="relative w-full max-w-7xl mx-auto">

          {/* LAYER DECORATIVO */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <span className="hidden lg:block absolute top-0 left-0 text-[160px] font-serif text-[#b46a3c]/[0.04] select-none whitespace-nowrap tracking-widest">
              PATAGONIA
            </span>
            <span className="hidden lg:block absolute -bottom-40 -right-32 -rotate-90 text-[160px] font-serif text-[#b46a3c]/[0.04] select-none whitespace-nowrap tracking-widest">
              PATAGONIA
            </span>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 xl:gap-20 w-full relative items-center">

            {/* IZQUIERDA */}
            <div className="flex flex-col max-w-lg relative z-10">

              {/* Etiqueta superior */}
              <span className="text-xs tracking-[0.2em] uppercase text-[#b46a3c]/70 mt-3 md:mt-0 font-light mb-6 md:mb-8">
                Estudio de arquitectura
              </span>

              {/* Título con rotate sutil + italic */}
              <h2
                className="font-serif select-none italic leading-[1.08] tracking-tight text-[#2a1f15]"
                style={{
                  fontSize: "clamp(1.8rem, 5.5vw, 5rem)",
                  transformOrigin: "left center"
                }}>
                  
                <span className="block">Arquitectura</span>
                <span className="block">contemporánea</span>
                <span className="block text-[#b46a3c]">en diálogo</span>
                <span className="block">con el paisaje.</span>
              </h2>

              <div className="mt-10 md:mt-12 flex items-start gap-4">
                <div className="w-px h-12 bg-[#b46a3c]/30 mt-1 shrink-0" />
                <p className="text-sm md:text-base font-light text-neutral-600 leading-relaxed">
                  Diseñamos espacios que integran materia, luz y entorno,
                  creando experiencias habitables con identidad y carácter.
                </p>
              </div>

              <div className="mt-10 md:mt-12">
                <ViewProjectsButton />
              </div>
            </div>

            {/* DERECHA */}
            <div className="h-[45vh] sm:h-[55vh] md:h-[70vh] xl:h-[78vh] relative z-10">
              <div className="relative h-full w-full">
                <div className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]">
                  <VerticalCarousel slides={slides} />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* FAVORITOS */}
        <section className="w-full max-w-7xl mx-auto mt-15 md:mt-12 pb-10">
          <div className="mb-14 md:mb-16">
            <div className="flex items-center gap-4 mb-4">
              <span className="h-px w-8 bg-[#b46a3c]/50" />
              <span className="text-xs tracking-[0.2em] uppercase text-[#b46a3c]/70 font-light">
                Selección
              </span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#2a1f15]">
              Proyectos destacados
            </h3>
            <p className="mt-3 text-sm md:text-base text-neutral-500 max-w-sm font-light leading-relaxed">
              Obras recientes que exploran la relación entre materia, luz y territorio.
            </p>
          </div>

          <FavoriteGrid projects={favorites} />
        </section>

        <div className="w-full max-w-7xl mx-auto md:mt-12">
          <Services services={services} />
        </div>

        <div className="w-full max-w-7xl mx-auto mt-15 md:mt-28 md:pb-32">
          <Process />
        </div>

      </main>
      <ConsultButton />
    </>
  );
}