import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PROJECTS, PROJECTS_MARQUEE_FEATURES } from "../data/siteData";
import { LoopVideo, SparkleCorners } from "../components/UI";
import { FeatureIcon } from "../components/Icons";
import "./Subpages.css";

export default function ProjectsPage() {
  return (
    <div className="grid-frame">
      {/* Header Row */}
      <section className="subhero-row">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="h2-section"
        >
          PROJECTS
        </motion.h1>

        <div className="subhero-visual">
          <div className="speech-bubble speech-bubble--tail-right subhero-bubble">
            Take a Look at My Portfolio
          </div>
          <div className="subhero-video-box dean-video-card">
            <LoopVideo
              src="/media/videos/projects-beanbag-red.mp4"
              alt="Sivabalan showing portfolio"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* Feature Marquee */}
      <div className="feature-marquee-band marquee-wrap">
        <SparkleCorners positions={["tl", "tr", "bl", "br"]} />
        <div className="marquee-track" style={{ "--marquee-duration": "26s" }}>
          {[...PROJECTS_MARQUEE_FEATURES, ...PROJECTS_MARQUEE_FEATURES].map((feat, idx) => (
            <div className="feature-marquee-item" key={idx}>
              <FeatureIcon type={feat.icon} />
              <span>{feat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2x2 Projects Grid */}
      <section className="projects-grid-2col">
        <SparkleCorners positions={["tc", "bc"]} />
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: (idx % 2) * 0.08 }}
            className="project-grid-cell"
          >
            <Link to={`/projects/${project.slug}`} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div className="project-grid-thumb">
                <img src={project.cover} alt={project.title} />
              </div>

              <div className="project-grid-meta">
                <div className="project-grid-title-row">
                  <h2 className="h3-sub">{project.title}</h2>
                  <span className="project-grid-cat">{project.shortCategory}</span>
                </div>

                <span className="project-arrow-circle" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
