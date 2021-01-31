export function getStrapiURL(path = "") {
  const url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:1337"
      : process.env.NEXT_PUBLIC_STRAPI_API_URL;

  return `${url}${path}`;
}

export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();

  return data;
}
