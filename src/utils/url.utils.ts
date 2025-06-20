export const getStrapiBaseURL = () => {
  const baseURL = process.env.NEXT_PUBLIC_STRAPI_URL;
  if (!baseURL) {
    console.error("NEXT_PUBLIC_STRAPI_URL is not defined");
  }
  return baseURL || ""; // Retourne une chaîne vide si non défini
};

export const getStrapiURL = (paths: string) => {
  const apiURL = process.env.NEXT_PUBLIC_STRAPI_API_URL;
  if (!apiURL) {
    console.error("NEXT_PUBLIC_STRAPI_API_URL is not defined");
  }
  return `${apiURL || ""}${paths}`;
};

export function getStrapiMedia(url: string | null | undefined) {
  if (url == null) {
    return null;
  }

  if (url.startsWith("http") || url.startsWith("//")) {
    return url;
  }

  const baseURL = getStrapiBaseURL();
  return `${baseURL}${url}`;
}
