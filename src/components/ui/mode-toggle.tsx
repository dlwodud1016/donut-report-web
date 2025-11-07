import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

const STORAGE_KEY = "donut-theme";

const getInitialTheme = (): "light" | "dark" => {
    if (typeof window === "undefined" || typeof document === "undefined") {
        return "light";
    }
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "dark" || stored === "light") {
        return stored;
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
};

export function ModeToggle(): JSX.Element {
    const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

    useEffect(() => {
        if (typeof document === "undefined") return;
        const root = document.documentElement;
        root.classList.remove(theme === "dark" ? "light" : "dark");
        root.classList.add(theme);
        window.localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]);

    const toggleTheme = (): void => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <Button
            variant="outline"
            size="icon"
            aria-label="Toggle color theme"
            onClick={toggleTheme}
            className="border-border/50 bg-background/80 backdrop-blur hover:bg-muted"
        >
            {theme === "light" ? (
                <Sun className="h-4 w-4" />
            ) : (
                <Moon className="h-4 w-4" />
            )}
        </Button>
    );
}
