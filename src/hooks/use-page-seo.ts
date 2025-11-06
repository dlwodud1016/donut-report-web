import { useEffect } from "react";

type SeoOptions = {
    title: string;
    description: string;
    keywords?: string[];
    /**
     * Canonical path such as "/" or "/report".
     * Will be combined with the site origin.
     */
    canonicalPath: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
};

const SITE_ORIGIN = "https://donut-report.example.com";

const buildAbsoluteUrl = (path: string): string => {
    if (path.startsWith("http://") || path.startsWith("https://")) {
        return path;
    }
    const base = SITE_ORIGIN.endsWith("/")
        ? SITE_ORIGIN.slice(0, -1)
        : SITE_ORIGIN;
    const formattedPath = path.startsWith("/") ? path : `/${path}`;
    return `${base}${formattedPath}`;
};

const upsertMeta = (
    attribute: "name" | "property",
    key: string,
    content: string
): void => {
    const selector = `meta[${attribute}="${key}"]`;
    let element = document.head.querySelector(selector) as HTMLMetaElement | null;
    if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
    }
    element.setAttribute("content", content);
};

const upsertLink = (rel: string, href: string): void => {
    const selector = `link[rel="${rel}"]`;
    let element = document.head.querySelector(selector) as HTMLLinkElement | null;
    if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
    }
    element.setAttribute("href", href);
};

export function usePageSeo({
    title,
    description,
    keywords,
    canonicalPath,
    ogTitle,
    ogDescription,
    ogImage,
}: SeoOptions): void {
    useEffect(() => {
        if (typeof document === "undefined") {
            return;
        }

        document.title = title;

        upsertMeta("name", "description", description);

        if (keywords?.length) {
            upsertMeta("name", "keywords", keywords.join(", "));
        }

        const canonicalUrl = buildAbsoluteUrl(canonicalPath);
        upsertLink("canonical", canonicalUrl);
        upsertMeta("property", "og:url", canonicalUrl);

        const finalOgTitle = ogTitle ?? title;
        const finalOgDescription = ogDescription ?? description;

        upsertMeta("property", "og:title", finalOgTitle);
        upsertMeta("property", "og:description", finalOgDescription);

        if (ogImage) {
            const absoluteOgImage = buildAbsoluteUrl(ogImage);
            upsertMeta("property", "og:image", absoluteOgImage);
        }
    }, [
        title,
        description,
        keywords,
        canonicalPath,
        ogTitle,
        ogDescription,
        ogImage,
    ]);
}
