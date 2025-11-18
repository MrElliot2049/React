import { createContext, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeContext);
}
