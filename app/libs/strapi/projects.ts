import { StrapiFetch } from "./fether";

export async function getCarousel() {
  const result = await StrapiFetch<{ data: any[] }>(
    "/api/projects?filters[Carousel][$eq]=true&populate[Image][populate]=*"
  );

  return result.data;
}

export async function getFavorite() {
  const result = await StrapiFetch<{ data: any[] }>(
    "/api/projects?filters[ProjectFavorite][$eq]=true&fields[0]=ProjectName&fields[1]=DateOfProject&fields[2]=Description&fields[3]=slug&populate[Image][populate][Image][fields][0]=url"
  )
  return result.data;

}
export async function getServices() {
  const result = await StrapiFetch<{ data: any[] }>(
    "/api/services?fields[0]=serviceName&fields[1]=Description&pagination[limit]=3&filters[isActive][$eq]=true"
  )

  return result.data;
}