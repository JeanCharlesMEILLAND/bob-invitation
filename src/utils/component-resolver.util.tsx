import {createElement, lazy, ReactElement, Suspense} from "react";
import Loader from "@/components/common/Loader";

export default function componentResolver(
    section: any,
    index: number,
    searchParams?: { [key: string]: string | string[] | undefined },
): ReactElement {
  const names: string[] = section.__component.split(".");

  const component = names[1];

  const parts: string[] = component.split("-");

  let componentName = "";

  parts.forEach((s) => {
    componentName += capitalizeFirstLetter(s);
  });

  const myModule = lazy(() =>
      import(`../components/strapi-components/${componentName}`).catch(
          (error) => {
            console.warn(`Component not found: ${componentName}`, error);
            return {
              default: () => (
                  <div className="p-4 my-4 bg-yellow-100 text-yellow-800 rounded border border-yellow-300">
                    <p className="font-bold">Component Not Found</p>
                    <p>
                      The component &#34;{componentName}&#34; ({section.__component}) could
                      not be loaded.
                    </p>
                    {process.env.NODE_ENV === "development" && (
                        <pre className="mt-2 text-xs overflow-auto">
                    {JSON.stringify(section, null, 2)}
                    </pre>
                    )}
                  </div>
              ),
            };
          },
      ),
  );

  const reactElement = createElement(myModule, {
    data: section,
    key: index,
    searchParams: searchParams,
  });

  return (
      <Suspense fallback={<Loader/>} key={index}>
        {reactElement}
      </Suspense>
  );
}

function capitalizeFirstLetter(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
