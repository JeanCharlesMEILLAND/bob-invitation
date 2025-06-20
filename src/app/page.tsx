import {getPageBySlug} from "@/utils/page-resolver.util";
import componentResolver from "@/utils/component-resolver.util";
import ErrorAlert from "@/components/common/alerts/ErrorAlert";

export const revalidate = 5;

export default async function RootRoute() {
  let error = null;
  try {
    const page = await getPageBySlug("accueil");

    if (page.error && page.error.status == 401)
      throw new Error(
          "Missing or invalid credentials. Have you created an access token using the Strapi admin panel? http://localhost:1337/admin/"
      );

    if (page.data.length === 0) return null;
    const contentSections = page.data[0].contentSections;

    return (
        <>
          {contentSections.map((section: any, index: number) =>
              componentResolver(section, index)
          )}
        </>
    );
  } catch (e: any) {
    error = "Missing or invalid credentials";
  }

  if (error) {
    return <ErrorAlert message={error}/>;
  }

  return null;
}
