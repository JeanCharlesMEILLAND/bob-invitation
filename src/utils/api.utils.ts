import qs from "qs";
import axios from "axios";
import {getStrapiURL} from "@/utils/url.utils";


export async function fetchAPI(
    path: string,
    urlParamsObject = {},
    options = {}
) {
  try {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

    if (!token) {
      throw new Error("The Strapi API Token is missing in the environment variables.");
    }

    const mergedOptions = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      ...options,
    };

    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${getStrapiURL(
        `/api${path}${queryString ? `?${queryString}` : ""}`
    )}`;

    console.log(requestUrl)

    const response = await axios.get(requestUrl, mergedOptions);
    return response.data;
  } catch (error: any) {
    console.error(error);
    // if (axios.isAxiosError(error) && error.response) {
    //   throw new Error(`API error: ${error.response.status} - ${error.response.statusText}`);
    // }
    throw new Error(
        "Please check if your server is running and you set all the required tokens."
    );
  }
}