"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = "donut-report-theme";

const prefersDark = (): boolean => {
    if (typeof window === "undefined") {
        return false;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

export function ThemeProvider({
    children,
    defaultTheme = "light",
}: {
    children: React.ReactNode;
    defaultTheme?: Theme;
}): JSX.Element {
    const [theme, setThemeState] = useState<Theme>(defaultTheme);

    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }
        const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
        if (stored === "light" || stored === "dark") {
            setThemeState(stored);
        } else {
            setThemeState(prefersDark() ? "dark" : defaultTheme);
        }
    }, [defaultTheme]);

    useEffect(() => {
        if (typeof document === "undefined") {
            return;
        }
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]);

    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }
        const media = window.matchMedia("(prefers-color-scheme: dark)");
        const handler = (event: MediaQueryListEvent): void => {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (!stored) {
                setThemeState(event.matches ? "dark" : "light");
            }
        };
        media.addEventListener("change", handler);
        return () => media.removeEventListener("change", handler);
    }, []);

    const value = useMemo<ThemeContextValue>(
        () => ({
            theme,
            setTheme: setThemeState,
            toggleTheme: () =>
                setThemeState((prev) => (prev === "dark" ? "light" : "dark")),
        }),
        [theme]
    );

    return (
        <ThemeContext.Provider value={value}>
            <div className={theme === "dark" ? "dark" : ""}>{children}</div>
        </ThemeContext.Provider>
    );
}

export function useTheme(): ThemeContextValue {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within ThemeProvider");
    }
    return context;
}
