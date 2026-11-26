import React from "react";
import { motion } from "framer-motion";
import { GlowButton, LoopVideo } from "../components/UI";
import "./Subpages.css";

export default function NotFoundPage() {
  return (
    <div className="grid-frame">
      <section className="notfound-section">
        <div className="notfound-row">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="notfound-digit"
          >
            4
          </motion.span>

          <div className="notfound-video-wrap">
            <div className="speech-bubble speech-bubble--tail-left notfound-bubble">
              where am I
            </div>
            <div className="dean-video-card" style={{ width: "100%", height: "100%", borderRadius: 22, overflow: "hidden" }}>
              <LoopVideo
                src="/media/videos/notfound-confused-red.mp4"
                poster="/media/images/notfound-poster.png"
                alt="Confused Sivabalan 404 animation"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>

          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="notfound-digit"
          >
            4
          </motion.span>
        </div>

        <p className="notfound-sub">Oops, this page could not be found</p>

        <GlowButton variant="accent" to="/">
          Go Home
        </GlowButton>
      </section>
    </div>
  );
}
