import ScrollTop from "@/app/utils/scrollTop";
import type { Project } from "@/app/types/project";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  const projectRes = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projects?filters[slug][$eq]=${slug}&populate[Image][populate]=Image`
  );
  const projectJson = await projectRes.json();
  const project: Project | null = projectJson.data?.[0] ?? null;

  if (!project) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-6">
        <span className="text-xs tracking-[0.2em] uppercase text-[#b46a3c]/70 font-light mb-4">
          404
        </span>
        <h1 className="font-serif text-4xl italic text-[#2a1f15] mb-6">
          Proyecto no encontrado
        </h1>
        <Link href="/" className="text-sm tracking-widest uppercase text-[#b46a3c] border-b border-[#b46a3c]/40 pb-px hover:opacity-60 transition-opacity">
          Volver al inicio
        </Link>
      </main>
    );
  }

  const images = project.Image?.filter((img: any) => img.Image?.url) ?? [];
  const heroImage = images[0];
  const galleryImages = images.slice(1);

  return (
    <div>
      <ScrollTop />

      <video
        autoPlay
        muted
        playsInline
        src="/videos/bg1.mp4"
        className="fixed inset-0 -z-20 w-full h-full object-cover scale-105 blur-[1px] opacity-85"
      />
      <div className="fixed inset-0 -z-10 bg-[#b46a3c]/10" />

      <main className="relative min-h-screen flex flex-col pt-20 md:pt-24">

        {/* HERO — imagen full width */}
        {heroImage && (
          <div className="w-full h-[55vh] md:h-[80vh] relative overflow-hidden">
            <img
              src={heroImage.Image?.url}
              alt={project.ProjectName}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#f2ece6]/70 via-transparent to-[#f4f1ed]/30" />
          </div>
        )}

        {/* HEADER DEL PROYECTO */}
        <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 xl:px-20 mt-12 md:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-end">

            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="h-px w-8 bg-[#b46a3c]/50" />
                <span className="text-xs tracking-[0.2em] uppercase text-[#b46a3c]/70 font-light">
                  Proyecto
                </span>
              </div>
              <h1
                className="font-serif italic text-[#2a1f15] leading-[1.08] tracking-tight"
                style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
              >
                {project.ProjectName}
              </h1>
            </div>

            {project.DateOfProject && (
              <div className="flex flex-col md:items-end pb-2">
                <span className="text-[0.6rem] tracking-[0.25em] uppercase text-[#b46a3c]/60 font-light">
                  Año
                </span>
                <span className="font-serif text-lg text-[#2a1f15]">
                  {new Date(project.DateOfProject).getFullYear()}
                </span>
              </div>
            )}

          </div>

          <div className="mt-8 h-px w-full bg-[#b46a3c]/15" />

          {project.Description && (
            <div className="mt-10 md:mt-12 flex items-start gap-4 max-w-2xl">
              <div className="w-px h-12 bg-[#b46a3c]/30 mt-1 shrink-0" />
              <p className="text-sm md:text-base font-light text-neutral-600 leading-relaxed">
                {project.Description}
              </p>
            </div>
          )}
        </section>

        {/* GALERÍA */}
        {galleryImages.length > 0 && (
          <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 xl:px-20 mt-16 md:mt-24 pb-6">

            <div className="flex items-center gap-4 mb-10">
              <span className="h-px w-8 bg-[#b46a3c]/50" />
              <span className="text-xs tracking-[0.2em] uppercase text-[#b46a3c]/70 font-light">
                Galería
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {galleryImages[0] && (
                <div className="md:col-span-2 overflow-hidden group relative h-[50vh] md:h-[65vh]">
                  <img
                    src={galleryImages[0].Image?.url}
                    alt={galleryImages[0].Description ?? project.ProjectName}
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.02]"
                  />
                  {galleryImages[0].Description && (
                    <div className="absolute bottom-0 left-0 right-0 bg-[#f2ece6]/90 backdrop-blur-sm px-5 py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
                      <p className="text-xs md:text-sm font-light text-neutral-600 leading-relaxed">
                        {galleryImages[0].Description}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {galleryImages.slice(1).map((img: any, i: number) => {
                const remaining = galleryImages.slice(1);
                const isLast = i === remaining.length - 1;
                const isOdd = remaining.length % 2 !== 0;
                const goFullWidth = isLast && isOdd;

                return (
                  <div
                    key={img.id ?? i}
                    className={`overflow-hidden group relative h-[40vh] md:h-[50vh] ${
                      goFullWidth ? "md:col-span-2 md:h-[60vh]" : ""
                    }`}
                  >
                    <img
                      src={img.Image.url}
                      alt={img.Description ?? project.ProjectName}
                      className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.02]"
                    />
                    {img.Description && (
                      <div className="absolute bottom-0 left-0 right-0 bg-[#f2ece6]/90 backdrop-blur-sm px-5 py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
                        <p className="text-xs md:text-sm font-light text-neutral-600 leading-relaxed">
                          {img.Description}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}

            </div>
          </section>
        )}

      </main>
    </div>
  );
}