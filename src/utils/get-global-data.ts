import {FooterData, NavbarData} from "@/types/common";
import {fetchAPI} from "@/utils/api.utils";

export const getGlobal = async (): Promise<any> => {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  if (!token)
    throw new Error("The Strapi API Token environment variable is not set.");

  const path = "/global";
  const options = {headers: {Authorization: `Bearer ${token}`}};

  const urlParamsObject = {
    populate: ["defaultSeo", "favicon", "defaultSeo.shareImage"],
  };
  return await fetchAPI(path, urlParamsObject, options) as any;
}

export const getNavbar = async (): Promise<NavbarData> => {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  if (!token)
    throw new Error("The Strapi API Token environment variable is not set.");

  const path = "/navbar";
  const options = {headers: {Authorization: `Bearer ${token}`}};

  const urlParamsObject = {
    populate: ["menus", "logo.logo", "button"],
  };
  return await fetchAPI(path, urlParamsObject, options) as NavbarData;
}
export const getFooter = async (): Promise<FooterData> => {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  if (!token)
    throw new Error("The Strapi API Token environment variable is not set.");

  const path = "/footer";
  const options = {headers: {Authorization: `Bearer ${token}`}};

  const urlParamsObject = {
    populate: [
      "logo.logo",
      "menus",
      "socialLinks",
      "legalLinks",
      "contacts",
    ],
  };
  return await fetchAPI(path, urlParamsObject, options) as FooterData;
}