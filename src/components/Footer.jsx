import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useApp } from "../context/AppContext";
import { SITE_META, SOCIAL_LINKS } from "../data/siteData";
import { LoopVideo, RollingText, SparkleCorners } from "./UI";
import "./Footer.css";

export default function Footer({ pageType = "home" }) {
  const { openCal } = useApp();
  const [copied, setCopied] = useState(false);

  const footerVideo =
    pageType === "services"
      ? "/media/videos/footer-bulb-green.mp4"
      : pageType === "projects" || pageType === "404"
      ? "/media/videos/footer-bulb-red.mp4"
      : "/media/videos/footer-bulb-blue.mp4";

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(SITE_META.email).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Services", to: "/services" },
    { label: "Projects", to: "/projects" },
    { label: "404", to: "/404" },
  ];

  return (
    <footer>
      {/* Full-width START A PROJECT Marquee */}
      <div
        className="footer-marquee-band marquee-wrap"
        onClick={openCal}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && openCal()}
        aria-label="Start a project"
      >
        <div className="marquee-track marquee-track--pausable" style={{ "--marquee-duration": "18s" }}>
          {[0, 1, 2, 3, 4, 5].map((idx) => (
            <div className="footer-marquee-item" key={idx}>
              <span className="footer-marquee-text">START A PROJECT</span>
              <span className="footer-marquee-arrow" aria-hidden="true">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main 4-Column Footer Grid */}
      <div className="grid-frame">
        <SparkleCorners positions={["tl", "tr"]} />
        <div className="footer-grid">
          {/* Col 1: Dean with glowing bulb video */}
          <div className="footer-col">
            <div className="footer-video-box dean-video-card">
              <LoopVideo src={footerVideo} alt="Sivabalan holding a glowing lightbulb" />
            </div>
          </div>

          {/* Col 2: Page Nav Links */}
          <div className="footer-col">
            <div className="footer-nav-list">
              {navItems.map((item) => (
                <Link key={item.to} to={item.to} className="footer-nav-row">
                  <RollingText
                    text={item.label}
                    style={{ fontWeight: 600, fontSize: 16, color: "var(--text)" }}
                  />
                  <span className="footer-nav-dot" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3: Socials */}
          <div className="footer-col footer-socials-col">
            <span className="footer-col-label">Socials</span>
            <div className="footer-social-list">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.key}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RollingText
                    text={s.label}
                    style={{ fontWeight: 500, fontSize: 16, color: "var(--text)" }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Col 4: Click to copy email */}
          <div className="footer-col">
            <span className="footer-col-label">Click to copy</span>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="footer-copy-btn"
              title="Click to copy email"
            >
              <span>{SITE_META.email}</span>
              <AnimatePresence>
                {copied && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8, y: 4 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="copied-pill"
                  >
                    Copied!
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
