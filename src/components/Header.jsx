import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useApp } from "../context/AppContext";
import { SOCIAL_LINKS } from "../data/siteData";
import { GlowButton, RollingText } from "./UI";
import {
  BriefcaseBadgeIcon,
  DeanSilhouetteIcon,
  MoonIcon,
  NotFoundBadgeIcon,
  RotatingDottedRing,
  ServicesBadgeIcon,
  SocialIcon,
  SunIcon,
} from "./Icons";
import "./Header.css";

export default function Header({ pageType = "home" }) {
  const { theme, toggleTheme, openCal } = useApp();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isHome = pageType === "home";
  const isProjects = pageType === "projects";
  const isServices = pageType === "services";
  const isNotFound = pageType === "404";

  const renderBadgeIcon = () => {
    if (isProjects) return <BriefcaseBadgeIcon />;
    if (isServices) return <ServicesBadgeIcon />;
    if (isNotFound) return <NotFoundBadgeIcon />;
    return <DeanSilhouetteIcon />;
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Left: Chat CTA + Social Circles (Desktop) / Hamburger (Mobile) */}
        <div className="header-left">
          <button
            type="button"
            className={`mobile-menu-btn ${mobileOpen ? "is-open" : ""}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <span className="mobile-bar" />
            <span className="mobile-bar" />
          </button>

          <div className="desktop-chat-btn">
            <GlowButton variant="dark" onClick={openCal}>
              Schedule a Free Consultation
            </GlowButton>
          </div>

          <div className="header-socials">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.key}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-circle-btn"
                aria-label={s.name}
                title={s.name}
              >
                <SocialIcon name={s.key} size={17} />
              </a>
            ))}
          </div>
        </div>

        {/* Center: Projects | Circular Badge (Home) | Services */}
        <nav className="header-center" aria-label="Main navigation">
          <Link
            to="/projects"
            className={`nav-side-link ${isProjects ? "is-active" : ""}`}
            onClick={() => setMobileOpen(false)}
          >
            <RollingText text="Projects" />
            {isProjects && <span className="nav-active-dot" />}
          </Link>

          <div className="nav-badge-wrap">
            <Link
              to="/"
              className="nav-badge-link"
              aria-label="Home"
              onClick={() => setMobileOpen(false)}
            >
              <div className="nav-badge-ring">
                <RotatingDottedRing size={86} />
              </div>
              <div className="nav-badge-circle">{renderBadgeIcon()}</div>
            </Link>

            <Link
              to="/"
              className={`nav-home-label ${isHome ? "is-home-active" : ""}`}
              onClick={() => setMobileOpen(false)}
            >
              {isHome && <span className="nav-active-dot" />}
              <RollingText text="Home" />
            </Link>
          </div>

          <Link
            to="/services"
            className={`nav-side-link ${isServices ? "is-active" : ""}`}
            onClick={() => setMobileOpen(false)}
          >
            {isServices && <span className="nav-active-dot" />}
            <RollingText text="Services" />
          </Link>
        </nav>

        {/* Right: Light / Dark Switch */}
        <div className="header-right">
          <button
            type="button"
            className="theme-switch"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            <span className={`theme-switch-thumb ${theme === "light" ? "is-light" : "is-dark"}`}>
              {theme === "light" ? <SunIcon size={13} /> : <MoonIcon size={12} />}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key={location.pathname + "-drawer"}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="mobile-drawer">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.key}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-social-pill"
                >
                  <SocialIcon name={s.key} size={18} />
                  <span>{s.name}</span>
                </a>
              ))}
              <div style={{ marginTop: 6 }}>
                <GlowButton
                  variant="accent"
                  fullWidth
                  onClick={() => {
                    setMobileOpen(false);
                    openCal();
                  }}
                >
                  Schedule a Free Consultation
                </GlowButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
