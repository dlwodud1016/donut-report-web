import { useEffect, useRef } from "react";
import { Outlet, useRouterState } from "@tanstack/react-router";

import { Footer } from "@/components/layout/footer";
import { TopBar } from "@/components/layout/topbar";

export default function App(): JSX.Element {
    const { location } = useRouterState();
    const previousPathRef = useRef(location.pathname);
    const scrollPositionsRef = useRef<Record<string, number>>({});

    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }
        const previousPath = previousPathRef.current;
        if (previousPath !== location.pathname) {
            scrollPositionsRef.current[previousPath] = window.scrollY;
        }

        const isTastemakerDetail =
            location.pathname.startsWith("/tastemakers/") &&
            location.pathname !== "/tastemakers";
        if (isTastemakerDetail) {
            previousPathRef.current = location.pathname;
            return;
        }

        const savedPosition =
            scrollPositionsRef.current[location.pathname];
        if (typeof savedPosition === "number") {
            window.requestAnimationFrame(() => {
                window.scrollTo({ top: savedPosition, behavior: "auto" });
            });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }

        previousPathRef.current = location.pathname;
    }, [location.pathname]);

    return (
        <div className="min-h-screen bg-background pb-12 text-foreground">
            <div className="mx-auto flex w-full max-w-[1360px] flex-col gap-10 px-4 pt-10 md:px-6 lg:px-8">
                <TopBar />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
}
