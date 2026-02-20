import ScrollTop from "@/app/utils/scrollTop";
import type { Project } from "@/app/types/project";
import FeaturedImageGrid from "@/app/layouts/FeaturedImageGrid";
import { Featuredtype } from "@/app/types/featured";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: PageProps) {

  const featuredRes = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/featured`);
  const featuredJson = await featuredRes.json();
  const featured: Featuredtype[] = featuredJson.data ?? [];


  const { slug } = await params;

  const projectRes = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projects?filters[slug][$eq]=${slug}&populate[Image][populate]=Image`
  );
  const projectJson = await projectRes.json();
  const project: Project | null = projectJson.data?.[0] ?? null;


  if (!project) {
    return (
      <main className="p-20">
        <h1>Proyecto no encontrado</h1>
        <p>{slug}</p>
      </main>
    );
  }

  const items = project.Image.slice(0, 3).map((img: any) => ({
    imageUrl: img.Image?.url,
    alt: project.ProjectName,
  }));

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

      <main className="relative min-h-screen flex flex-col pt-24 md:pt-28 bg-[#f4f1ed/40]">
        <div className="w-full h-105 relative overflow-hidden">
          <img
            src={project.Image[0]?.Image?.url || '/fallback.jpg'}
            alt=""
            className="w-full h-full object-cover object-bottom"
          />
        </div>

        <section className="mx-auto max-w-7xl mt-12 px-6">
          <article>
            <h2 className="text-4xl font-light">{project.ProjectName}</h2>
            <p className="font-light mt-6 mb-8">{project.Description}</p>
          </article>
        </section>

        <div className="flex flex-col items-center px-6 sm:px-8 md:px-12 xl:px-20 pt-10 pb-8">
          <FeaturedImageGrid items={items} />
        </div>

        {/* <article>
          <h3>Características</h3>
          <p>{featured[0]?.Title}</p>
        </article> */}
      </main>
    </div>
  );
}
