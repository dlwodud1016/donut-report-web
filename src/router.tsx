import { Router, Route, RootRoute } from "@tanstack/react-router";

import App from "./App";
import { HomePage } from "./components/home/home-page";
import { ReportPage } from "./pages/report-page";
import { CompanyDetailPage } from "./pages/company-detail-page";
import { TastemakersPage } from "./pages/tastemakers-page";
import { TastemakerDetailPage } from "./pages/tastemaker-detail-page";

const rootRoute = new RootRoute({
    component: App,
});

const homeRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "/",
    component: HomePage,
});

const reportRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "/report",
    component: ReportPage,
});

const companyDetailRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "/report/$companyId",
    component: CompanyDetailPage,
});

const tastemakersRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "/tastemakers",
    component: TastemakersPage,
});

const tastemakerDetailRoute = new Route({
    getParentRoute: () => tastemakersRoute,
    path: "$profileId",
    component: TastemakerDetailPage,
});

const routeTree = rootRoute.addChildren([
    homeRoute,
    reportRoute,
    companyDetailRoute,
    tastemakersRoute.addChildren([tastemakerDetailRoute]),
]);

export const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}
