import { createContext, type ReactElement, type ReactNode, useContext } from "react";
import { darkNativeTheme, lightNativeTheme, type JixicNativeTheme } from "./tokens";

const ThemeContext = createContext<JixicNativeTheme>(lightNativeTheme);

export interface JixicNativeThemeProviderProps {
  children: ReactNode;
  colorScheme?: "dark" | "light";
  theme?: JixicNativeTheme;
}

export function JixicNativeThemeProvider({
  children,
  colorScheme = "light",
  theme,
}: JixicNativeThemeProviderProps): ReactElement {
  return (
    <ThemeContext.Provider
      value={theme ?? (colorScheme === "dark" ? darkNativeTheme : lightNativeTheme)}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useJixicNativeTheme() {
  return useContext(ThemeContext);
}
