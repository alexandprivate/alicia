import React from "react";

type Theme = "alicia" | "leonor" | "mary";

const ThemeContext = React.createContext({});

export const useTheme = () => React.useContext(ThemeContext);

export function Theme() {
  const [theme, setTheme] = React.useState<Theme>("alicia");

  return <ThemeContext.Provider value={theme}></ThemeContext.Provider>;
}
