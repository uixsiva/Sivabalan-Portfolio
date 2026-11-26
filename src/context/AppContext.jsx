import React, { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("dean-theme") || "light";
    } catch {
      return "light";
    }
  });
  const [isCalOpen, setIsCalOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("dean-theme", theme);
    } catch {
      // ignore
    }
  }, [theme]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsCalOpen(false);
        setLightboxSrc(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        isCalOpen,
        openCal: () => setIsCalOpen(true),
        closeCal: () => setIsCalOpen(false),
        lightboxSrc,
        openLightbox: (src) => setLightboxSrc(src),
        closeLightbox: () => setLightboxSrc(null),
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
