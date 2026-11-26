import React from "react";
import { motion } from "framer-motion";
import { SERVICES_DATA, SERVICES_MARQUEE_FEATURES } from "../data/siteData";
import { LoopVideo, SparkleCorners } from "../components/UI";
import { FeatureIcon } from "../components/Icons";
import "./Subpages.css";

export default function ServicesPage() {
  return (
    <div className="grid-frame">
      {/* Header Row: Green Desk Video on Left + SERVICES Title on Right */}
      <section className="subhero-row">
        <div className="subhero-visual">
          <div
            className="speech-bubble speech-bubble--tail-left"
            style={{ alignSelf: "flex-end", marginBottom: -14, marginRight: -72, zIndex: 2 }}
          >
            What I Bring to the Table
          </div>
          <div className="subhero-video-box subhero-video-box--desk dean-video-card">
            <LoopVideo
              src="/media/videos/services-desk-green.mp4"
              alt="Sivabalan at desk presenting services"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="h2-section"
        >
          SERVICES
        </motion.h1>
      </section>

      {/* Feature Marquee */}
      <div className="feature-marquee-band marquee-wrap">
        <SparkleCorners positions={["tl", "tr", "bl", "br"]} />
        <div className="marquee-track" style={{ "--marquee-duration": "24s" }}>
          {[...SERVICES_MARQUEE_FEATURES, ...SERVICES_MARQUEE_FEATURES].map((feat, idx) => (
            <div className="feature-marquee-item" key={idx}>
              <FeatureIcon type={feat.icon} />
              <span>{feat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 4 Services 3-Column Rows with Green 3D Looping Videos */}
      <section>
        {SERVICES_DATA.map((service, idx) => (
          <motion.div
            key={service.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: idx * 0.05 }}
            className="services-page-row"
          >
            <SparkleCorners positions={["bl", "br"]} />

            <div className="services-page-left">
              <span className="h4-label" style={{ color: "var(--text-muted)" }}>
                {service.num}
              </span>
              <h2 className="h3-sub">{service.title}</h2>
            </div>

            <div className="services-page-mid">
              <p className="services-page-desc">{service.description}</p>
              <div className="services-page-tags">
                {service.tags.map((tag) => (
                  <span className="pill-badge" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="services-page-right">
              <div className="services-page-3d-video dean-video-card">
                <LoopVideo src={service.videoGreen} alt={service.title} />
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
