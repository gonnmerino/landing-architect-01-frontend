export type ProjectImageComponent = {
  id: number;
  Description?: string;
  ShowInCarousel?: boolean;
  Image?: { url: string } | null;
};

export type Project = {
  id: number;
  ProjectName: string;
  Description: string;
  slug: string;
  Carousel?: boolean;
  DateOfProject?: string;
  Image: ProjectImageComponent[];
};

export type ImageSlide = {
  id: number;
  slug: string;
  ImageDescription?: string;
  DateOfProject?: string;
  imageUrl: string;
};