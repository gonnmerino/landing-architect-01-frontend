  const getImageUrl = (url?: string) => {
    if (!url) return '/fallback.jpg';
    if (url.startsWith('http')) return url; // Cloudinary
    return `${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`; // Local
  };