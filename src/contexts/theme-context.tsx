import React, { useState, useEffect } from "react";
import cookies from "../utilities/cookies";

const ThemeContext = React.createContext({ isLight: false, toggleDarkMode: (isSelected) => {}});

const ThemeProvider = ({ children }) => {
  const setSessionState = (setLight) => {
    if (typeof document !== "undefined") {
      cookies.set(`theme_isLight`, setLight.toString(), 525600);
    }
  };
  const getSessionState = () => {
    if (typeof document !== "undefined") {
      let item = cookies.get(`theme_isLight`);
      return item === "true" ? true : false;
    }
    return false;
  };
  const toggleDarkMode = (isSelected) => {
    setIsLight(isSelected);
    setSessionState(isSelected);
  };
  const [isLight, setIsLight] = useState(false);
  useEffect(()=> {
    setIsLight(getSessionState());
  }, []);
  return (
    <ThemeContext.Provider
      value={{
        isLight,
        toggleDarkMode
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
