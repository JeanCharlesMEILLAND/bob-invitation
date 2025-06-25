import { FALLBACK_SEO } from "@/data/constants";
import componentResolver from "@/utils/component-resolver.util";
import { getGlobal } from "@/utils/get-global-data";
import { getPageBySlug } from "@/utils/page-resolver.util";
import { redirect } from "next/navigation";


interface Params {
    slug: string[];
}

interface PageAttributes {
    seo: {
        metaTitle: string;
        metaDescription: string;
        keywords: string;
    };
    contentSections: Array<{ type: string; content: Record<string, unknown> }>;
};


interface PageData {
    data: PageAttributes[];
}


export default async function PageRoot({ params }: { params: Promise<Params> }) {
    const { slug } = await params;

    if (slug[0] === "accueil") {
        redirect("/");
    }

    const pageData: PageData = await getPageBySlug(slug.join("/")) as PageData;

    if (pageData.data.length === 0) {
        redirect("/not-found");
    }

    const attributes = pageData.data[0];

    return (
        <>
            {attributes.contentSections.map((section, index) =>
                componentResolver(section, index)
            )}
        </>
    );

}


export async function generateMetadata(props: { params: Promise<Params> }) {
    const params = await props.params;
    const { slug } = params;

    const pageData: PageData = await getPageBySlug(slug[0]) as PageData;
    const globalData = await getGlobal();
    const { siteName, defaultSeo } = globalData.data;

    if (pageData.data.length === 0) {
        return FALLBACK_SEO;
    }

    const { seo } = pageData.data[0];

    const data: {
        title: string;
        description: string;
        alternates: { canonical: string };
        keywords?: string;
    } = {
        title: seo.metaTitle || siteName,
        description: seo.metaDescription || defaultSeo.metaDescription,
        alternates: {
            canonical: `${defaultSeo.canonicalUrl}${slug.join("/")}`,
        },
    };

    if (seo.keywords) {
        data.keywords = seo.keywords;
    }

    return data;
}

