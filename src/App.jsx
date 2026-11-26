import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CalModal, LightboxModal } from "./components/Modals";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ServicesPage from "./pages/ServicesPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import NotFoundPage from "./pages/NotFoundPage";

function getPageMeta(pathname) {
  if (pathname === "/") {
    return {
      pageType: "home",
      accent: "cyan",
      title: "Sivabalan - UX & Visual Designer Portfolio",
    };
  }
  if (pathname === "/projects") {
    return {
      pageType: "projects",
      accent: "red",
      title: "Portfolio & Projects - Sivabalan",
    };
  }
  if (pathname.startsWith("/projects/")) {
    return {
      pageType: "projects",
      accent: "red",
      title: "Project Case Study - Sivabalan",
    };
  }
  if (pathname === "/services") {
    return {
      pageType: "services",
      accent: "green",
      title: "Services - Sivabalan",
    };
  }
  return {
    pageType: "404",
    accent: "red",
    title: "404 - Sivabalan",
  };
}

function AppShell() {
  const { pathname } = useLocation();
  const { pageType, accent, title } = getPageMeta(pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = title;
  }, [pathname, title]);

  return (
    <div className="page-shell" data-accent={accent}>
      <Header pageType={pageType} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer pageType={pageType} />
      <CalModal />
      <LightboxModal />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <AppShell />
      </AppProvider>
    </BrowserRouter>
  );
}
