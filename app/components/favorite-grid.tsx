import type { FavoriteProject } from "../types/favorite";
import FeaturedImageGrid from "../layouts/FeaturedImageGrid";

type Props = {
  projects: FavoriteProject[];
};

export default function FavoriteGrid({ projects }: Props) {
  if (!projects || projects.length === 0) return null;

  const items = projects.slice(0, 3).map((p) => ({
    imageUrl: p.imageUrl!,
    alt: p.title,
    href: `/projects/${p.slug}`,
    content: <ProjectText project={p} />,
  }));

  return <FeaturedImageGrid items={items} />;
}

function ProjectText({ project }: { project: FavoriteProject }) {
  return (
    <div className="max-w-lg min-w-full">
      <h3 className="text-base md:text-lg font-medium tracking-wide text-[#3e2b1c]">
        {project.title}
      </h3>

      {project.description && (
        <p className="mt-1.5 text-sm md:text-lg text-neutral-600 leading-relaxed">
          {project.description}
        </p>
      )}

      {project.year && (
        <p className="mt-2 text-xs md:text-sm italic text-neutral-500 tracking-wide">
          {new Date(project.year).getFullYear()}
        </p>
      )}
    </div>
  );
}
