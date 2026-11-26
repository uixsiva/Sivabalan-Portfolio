import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useInView } from "framer-motion";
import { SparkleIcon } from "./Icons";

/**
 * Staggered character-rolling text animation on hover (matches Framer rolling links).
 */
export function RollingText({ text, className = "", style = {} }) {
  const chars = Array.from(text);
  return (
    <span className={`rolling-link ${className}`} style={style} aria-label={text}>
      {chars.map((ch, i) => (
        <span
          key={i}
          className="rolling-char-col"
          style={{ transitionDelay: `${i * 18}ms` }}
          aria-hidden="true"
        >
          <span className="rolling-char">{ch === " " ? "\u00A0" : ch}</span>
          <span className="rolling-char">{ch === " " ? "\u00A0" : ch}</span>
        </span>
      ))}
    </span>
  );
}

/**
 * Pill CTA button with pulsing accent dot and soft outer glow.
 */
export function GlowButton({
  children,
  variant = "dark",
  fullWidth = false,
  onClick,
  to,
  href,
  className = "",
}) {
  const classes = `glow-btn glow-btn--${variant} ${fullWidth ? "glow-btn--full" : ""} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      <span className="glow-dot" aria-hidden="true" />
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={classes}>
      {content}
    </button>
  );
}

/**
 * Reliable looping silent video with instant playback.
 */
export function LoopVideo({ src, poster, className = "", style = {}, alt = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, [src]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      aria-label={alt || undefined}
      className={`dean-video ${className}`}
      style={style}
    />
  );
}

/**
 * Animated number counter triggered once when scrolled into view.
 */
export function CountUpNumber({ target, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(1);

  useEffect(() => {
    if (!inView) return;
    let start = null;
    const duration = 1100;
    let raf;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.max(1, Math.round(1 + (target - 1) * eased)));
      if (p < 1) {
        raf = requestAnimationFrame(step);
      }
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

/**
 * Renders 4-point sparkle stars at requested corner coordinates of a relative box.
 * positions: array of "tl" | "tr" | "bl" | "br" | "tc" | "bc"
 */
export function SparkleCorners({ positions = [] }) {
  const coords = {
    tl: { top: 0, left: 0 },
    tr: { top: 0, left: "100%" },
    bl: { top: "100%", left: 0 },
    br: { top: "100%", left: "100%" },
    tc: { top: 0, left: "50%" },
    bc: { top: "100%", left: "50%" },
  };
  return (
    <>
      {positions.map((pos) => (
        <SparkleIcon key={pos} style={coords[pos]} />
      ))}
    </>
  );
}
