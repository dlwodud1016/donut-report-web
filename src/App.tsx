import { useEffect } from "react";

import { Footer } from "@/components/layout/footer";
import { Topbar } from "@/components/layout/topbar";
import { Outlet, useRouterState } from "@tanstack/react-router";

export default function App(): JSX.Element {
    const { location } = useRouterState();

    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location.pathname]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pb-12 text-foreground">
            <div className="mx-auto flex w-full max-w-[1360px] flex-col gap-10 px-4 pt-10 md:px-6 lg:px-8">
                <Topbar />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
}
