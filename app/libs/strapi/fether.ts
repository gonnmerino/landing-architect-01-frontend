const STRAPI_URL = process.env.NEXT_PUBLIC_BACKEND_URL!;

export async function StrapiFetch<T>(path: string): Promise<T> {
  const res = await fetch(`${STRAPI_URL}${path}`, {
    next: { revalidate: 3600 }, //3600 segundos = 1 hora re-cache.
  })

  if(!res.ok) {
    throw new Error (`Strapi fetch error: ${res.status}`)
  }

  return res.json();
}