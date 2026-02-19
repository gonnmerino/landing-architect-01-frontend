import VerticalCarousel from "./components/carousel";
import type { ImageSlide } from "@/app/types/project"
import FavoriteGrid from "./components/favorite-grid";
import type { FavoriteProject } from "./types/favorite";
import { ServicesType } from "./types/services";
import Services from "./components/services";
import Process from "./components/process";
import { getCarousel, getFavorite, getServices } from "./libs/strapi/projects";

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
        imageUrl: `${process.env.NEXT_PUBLIC_BACKEND_URL}${img.Image.url}`,
      }))
  );

  const favorites: FavoriteProject[] = favoritesRaw
    .slice(0, 3)
    .map((project: any) => {
      const imgObj =
        project.Image?.find((img: any) => img?.Description && img?.Image?.url) ||
        project.Image?.find((img: any) => img?.Image?.url) ||
        null;

      return {
        id: project.id,
        title: project.ProjectName,
        slug: project.slug,
        description: project.Description,
        year: project.DateOfProject ?? null,
        imageUrl: imgObj?.Image?.url
          ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${imgObj.Image.url}`
          : null,
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

      <div className="-z-10 fixed inset-0 bg-[#b46a3c]/10" />

      <main className="min-h-screen pb-8 md:pb-0 flex flex-col items-center px-6 sm:px-8 md:px-12 xl:px-20 pt-24 md:pt-28 bg-[#f4f1ed/40] overflow-x-hidden">

        {/* HERO */}
        <div className="relative w-full max-w-400 mx-auto">

          {/* LAYER DECORATIVO (NO GENERA OVERFLOW) */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">

            {/* PATAGONIA HORIZONTAL */}
            <span className="hidden lg:block absolute top-0 left-0 text-[180px] font-serif text-[#b46a3c]/5 select-none whitespace-nowrap">
              PATAGONIA
            </span>

            {/* PATAGONIA VERTICAL */}
            <span className="hidden lg:block absolute -bottom-40 -right-32 -rotate-90 text-[180px] font-serif text-[#b46a3c]/5 select-none whitespace-nowrap">
              PATAGONIA
            </span>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 w-full relative">

            {/* IZQUIERDA */}
            <div className="flex flex-col justify-center max-w-xl relative z-10">
              <h2 className="font-serif mt-8 select-none sm:mt-5 md:mt-0 text-2xl sm:text-4xl md:text-5xl xl:text-7xl leading-[1.15] md:leading-[1.05] tracking-tight">
                <span className="block">Arquitectura</span>
                <span className="block">contemporánea</span>
                <span className="block">en diálogo</span>
                <span className="block">con el paisaje.</span>
              </h2>

              <p className="mt-6 md:mt-10 text-sm md:text-lg font-light text-neutral-700 leading-relaxed max-w-md">
                Diseñamos espacios que integran materia, luz y entorno,
                creando experiencias habitables con identidad y carácter.
              </p>
              <button
                className="mt-8 md:mt-12 border border-[#b46a3c] bg-[#b46a3c] text-white px-7 md:px-9 py-2.5 md:py-3 text-sm md:text-lg tracking-wide font-light w-fit hover:bg-[#f4f1ed] hover:text-[#b46a3c] transition-colors duration-300 cursor-pointer">
                Ver proyectos
              </button>

            </div>

            {/* DERECHA */}
            <div
              className="h-[45vh] md:mt-8 sm:h-[55vh] md:h-[70vh] xl:h-[75vh] relative z-10">

              <div className="relative h-full w-full">

                <div className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] "opacity-100 scale-100"}`}>
                  <VerticalCarousel slides={slides} />
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* FAVORITOS */}
        <section className="mt-8 list-none pb-10 px-5 md:px-12 lg:px-24">
          <div className="mb-12 md:mb-8">
            <div className="flex items-center gap-6">
              <span className="h-px w-12 bg-[#b46a3c]/40" />
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-tight text-[#3e2b1c]">
                Proyectos destacados
              </h3>
            </div>
            <p className="mt-4 text-sm md:text-lg text-neutral-600 max-w-md font-light">
              Una selección de obras recientes que exploran la relación entre materia, luz y territorio.
            </p>
          </div>

          <FavoriteGrid projects={favorites} />
        </section>
        <Services services={services} />
        <Process />
      </main>
      <div className="w-full h-70 relative overflow-hidden">
        <img
          className="w-full h-full object-cover object-[50%_85%]"
          src="/images/bg-prefooter.jpg"
          alt="" />
        <button
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
               border border-[#b46a3c] bg-[#b46a3c] text-white px-7 md:px-9 py-2.5 md:py-3
               text-sm md:text-lg tracking-wide font-light w-fit
               hover:bg-[#f4f1ed] hover:text-[#b46a3c] transition-colors duration-300 cursor-pointer">
          Consultar!
        </button>
      </div>
    </>
  );
}
