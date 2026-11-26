import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { PROJECTS } from "../data/siteData";
import { useApp } from "../context/AppContext";
import { GlowButton, SparkleCorners } from "../components/UI";
import NotFoundPage from "./NotFoundPage";
import "./Subpages.css";

function ExpandOverlay({ onClick }) {
  return (
    <button
      type="button"
      className="detail-expand-btn"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      aria-label="Expand image"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 3 21 3 21 9" />
        <polyline points="9 21 3 21 3 15" />
        <line x1="21" y1="3" x2="14" y2="10" />
        <line x1="3" y1="21" x2="10" y2="14" />
      </svg>
    </button>
  );
}

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const { openLightbox } = useApp();
  const project = PROJECTS.find((p) => p.slug === slug || p.oldSlug === slug);

  if (!project) {
    return <NotFoundPage />;
  }

  const otherProjects = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 2);
  const [imgFull1, imgHalf1, imgHalf2, imgFull2] = project.gallery;

  return (
    <div className="grid-frame">
      {/* Hero Split */}
      <section className="detail-hero">
        <SparkleCorners positions={["bl", "br"]} />
        <div>
          <Link to="/projects" className="detail-back-pill">
            <span>←</span>
            <span>Back</span>
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="h2-section"
          >
            {project.title}
          </motion.h1>

          <p className="detail-desc">{project.description}</p>

          <GlowButton variant="dark" href={project.liveDemo}>
            {project.buttonText || "View Figma Design"}
          </GlowButton>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="detail-image-card"
          onClick={() => openLightbox(project.cover)}
        >
          <img src={project.cover} alt={project.title} />
          <ExpandOverlay onClick={() => openLightbox(project.cover)} />
        </motion.div>
      </section>

      {/* 4-Column Metadata Bar */}
      <section className="detail-meta-bar">
        <SparkleCorners positions={["bl", "br"]} />
        <div className="detail-meta-cell">
          <span className="detail-meta-label">Services</span>
          <span className="detail-meta-val">{project.services}</span>
        </div>
        <div className="detail-meta-cell">
          <span className="detail-meta-label">Client</span>
          <span className="detail-meta-val">{project.client}</span>
        </div>
        <div className="detail-meta-cell">
          <span className="detail-meta-label">Duration</span>
          <span className="detail-meta-val">{project.duration}</span>
        </div>
        <div className="detail-meta-cell">
          <span className="detail-meta-label">Date</span>
          <span className="detail-meta-val">{project.date}</span>
        </div>
      </section>

      {/* Showcase Gallery */}
      <section>
        {imgFull1 && (
          <div className="detail-gallery-full">
            <SparkleCorners positions={["bl", "br", "bc"]} />
            <div className="detail-image-card" onClick={() => openLightbox(imgFull1.src)}>
              <img src={imgFull1.src} alt={`${project.title} showcase 1`} loading="lazy" />
              <ExpandOverlay onClick={() => openLightbox(imgFull1.src)} />
            </div>
          </div>
        )}

        {(imgHalf1 || imgHalf2) && (
          <div className="detail-gallery-split">
            <SparkleCorners positions={["bl", "br", "bc"]} />
            {imgHalf1 && (
              <div className="detail-gallery-half">
                <div className="detail-image-card" onClick={() => openLightbox(imgHalf1.src)}>
                  <img src={imgHalf1.src} alt={`${project.title} showcase 2`} loading="lazy" />
                  <ExpandOverlay onClick={() => openLightbox(imgHalf1.src)} />
                </div>
              </div>
            )}
            {imgHalf2 && (
              <div className="detail-gallery-half">
                <div className="detail-image-card" onClick={() => openLightbox(imgHalf2.src)}>
                  <img src={imgHalf2.src} alt={`${project.title} showcase 3`} loading="lazy" />
                  <ExpandOverlay onClick={() => openLightbox(imgHalf2.src)} />
                </div>
              </div>
            )}
          </div>
        )}

        {imgFull2 && (
          <div className="detail-gallery-full">
            <SparkleCorners positions={["bl", "br"]} />
            <div className="detail-image-card" onClick={() => openLightbox(imgFull2.src)}>
              <img src={imgFull2.src} alt={`${project.title} showcase 4`} loading="lazy" />
              <ExpandOverlay onClick={() => openLightbox(imgFull2.src)} />
            </div>
          </div>
        )}
      </section>

      {/* MORE PROJECT */}
      <section>
        <div className="more-projects-head">
          <SparkleCorners positions={["bl", "br", "bc"]} />
          <h2 className="h2-section">MORE PROJECT</h2>
          <GlowButton variant="dark" to="/projects">
            View all Projects
          </GlowButton>
        </div>

        <div className="projects-grid-2col">
          {otherProjects.map((item) => (
            <div className="project-grid-cell" key={item.slug}>
              <Link
                to={`/projects/${item.slug}`}
                style={{ display: "flex", flexDirection: "column", gap: 18 }}
              >
                <div className="project-grid-thumb">
                  <img src={item.cover} alt={item.title} loading="lazy" />
                </div>
                <div className="project-grid-meta">
                  <div className="project-grid-title-row">
                    <h3 className="h3-sub">{item.title}</h3>
                    <span className="project-grid-cat">{item.cardCategory}</span>
                  </div>
                  <span className="project-arrow-circle" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
