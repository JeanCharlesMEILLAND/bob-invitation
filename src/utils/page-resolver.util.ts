import {cache} from "react";
import {fetchAPI} from "@/utils/api.utils";

export const getPageBySlug = cache(async (slug: string) => {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  if (!token) {
    throw new Error("Missing Strapi API Token");
  }

  const path = "/pages";
  const urlParamsObject = {
    populate: {
      contentSections: {
        populate: '*',
        on: {
          'sections.hero': {
            populate: '*'
          },
          'sections.advantages': {
            populate: '*'
          },
          'sections.avis-section': {
            populate: {
              avis: {
                populate: '*' 
              },
              boutton: true
            }
          },
          'sections.comment-ca-marche': {
            populate: '*'
          },
          'sections.pourquoi-choisir-bob': {
            populate: '*'
          },
          'sections.rejoinez': {
            populate: '*'
          },
          'shared.rich-text' : '*'
        }
      },
      seo: true
    },
    filters: {slug}
  };

  const options = {headers: {Authorization: `Bearer ${token}`}};

  try {
    return await fetchAPI(path, urlParamsObject, options);
  } catch (error) {
    console.error("Error fetching page data:", error);
    throw error;
  }
});