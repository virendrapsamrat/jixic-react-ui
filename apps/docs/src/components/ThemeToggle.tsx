"use client";

import { useEffect, useState } from "react";
import { Button } from "@jixic/react-ui";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-ui-theme", theme);
  }, [theme]);

  return (
    <Button
      aria-pressed={theme === "dark"}
      onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
      size="sm"
      variant="secondary"
    >
      {theme === "dark" ? "Light" : "Dark"}
    </Button>
  );
}
