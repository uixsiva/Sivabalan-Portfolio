import React, { useId } from "react";

export function SparkleIcon({ className = "", style = {} }) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="currentColor"
      className={`sparkle-corner ${className}`}
      style={style}
      aria-hidden="true"
    >
      <path d="M6 0C6.35 3.65 8.35 5.65 12 6C8.35 6.35 6.35 8.35 6 12C5.65 8.35 3.65 6.35 0 6C3.65 5.65 5.65 3.65 6 0Z" />
    </svg>
  );
}

export function RotatingDottedRing({ size = 94 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      overflow="visible"
      className="spin-dotted"
      aria-hidden="true"
    >
      <defs>
        <path
          id="dean-circle-curve"
          d="M 50,50 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
        />
      </defs>
      <circle
        cx="50"
        cy="50"
        r="43"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="3.2"
        strokeDasharray="1 7.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DeanSilhouetteIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="#000000" aria-hidden="true">
      <path d="M16.5 4.2c-3.9 0-6.8 2.4-7.4 5.9-.5.3-.9.9-.9 1.6 0 .8.4 1.4 1 1.7.3 1.7 1.1 3.3 2.3 4.4v2.5c0 .7-.4 1.3-1 1.6l-1.8.9c-.4.2-.7.6-.7 1.1V26h15v-2.1c0-.5-.3-.9-.7-1.1l-1.9-.9c-.6-.3-1-.9-1-1.6v-2c1.2-.8 2.1-2 2.6-3.4.9-.2 1.6-1 1.6-2 0-.6-.3-1.2-.7-1.6.1-.4.1-.8.1-1.2 0-3.5-2.8-5.9-6.5-5.9z" />
    </svg>
  );
}

export function BriefcaseBadgeIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#000000" aria-hidden="true">
      <path d="M9 4a2 2 0 0 0-2 2v1H4a2 2 0 0 0-2 2v3.5h20V9a2 2 0 0 0-2-2h-3V6a2 2 0 0 0-2-2H9zm0 2h6v1H9V6zm-7 8v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5H14v1.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V14H2z" />
    </svg>
  );
}

export function ServicesBadgeIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1.5" fill="#000000" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" fill="#000000" />
    </svg>
  );
}

export function NotFoundBadgeIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.8" strokeLinecap="round" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function SocialIcon({ name, size = 18 }) {
  const uid = useId();
  switch (name) {
    case "whatsapp":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.08-1.33A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"
            fill="#25D366"
          />
          <path
            d="M16.95 14.3c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29s.98 2.65 1.12 2.83c.14.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z"
            fill="#ffffff"
          />
        </svg>
      );
    case "dribbble":
      return (
        <svg width={size} height={size} viewBox="0 0 17 19" aria-hidden="true">
          <path d="M 8.5 0 C 13.194 0 17 3.806 17 8.5 C 17 13.194 13.194 17 8.5 17 C 3.806 17 0 13.194 0 8.5 C 0 3.806 3.806 0 8.5 0 Z" fill="rgb(231, 78, 138)" transform="translate(0 1)" />
          <g transform="translate(1 2)">
            <circle cx="7.5" cy="7.5" r="7.5" fill="rgb(231, 78, 138)" stroke="rgb(178, 32, 91)" strokeWidth="1" />
            <path d="M 15 6.198 C 14.294 6.066 13.578 6 12.86 6 C 8.846 6 5.275 8.057 3 11.25 M 12.75 0 C 10.402 2.75 6.876 4.5 2.933 4.5 C 1.923 4.5 0.941 4.385 0 4.169" fill="none" stroke="rgb(178, 32, 91)" strokeWidth="1" transform="translate(0 2.25)" />
            <path d="M 5.713 14.25 C 5.905 13.322 6.001 12.377 6 11.43 C 6 6.694 3.625 2.51 0 0" fill="none" stroke="rgb(178, 32, 91)" strokeWidth="1" transform="translate(3.75 0.75)" />
          </g>
        </svg>
      );
    case "x":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "instagram":
      return (
        <svg width={size} height={size} viewBox="0 0 17 17" aria-hidden="true">
          <defs>
            <linearGradient id={`ig-${uid}`} x1="0.96" x2="0.04" y1="0" y2="1">
              <stop offset="0" stopColor="rgb(170, 46, 195)" />
              <stop offset="0.47" stopColor="rgb(249, 78, 78)" />
              <stop offset="1" stopColor="rgb(253, 205, 87)" />
            </linearGradient>
          </defs>
          <rect x="1" y="1" width="15" height="15" rx="4" fill={`url(#ig-${uid})`} />
          <rect x="3" y="3" width="11" height="11" rx="3" fill="none" stroke="#ffffff" strokeWidth="1.1" />
          <circle cx="8.5" cy="8.5" r="2.6" fill="none" stroke="#ffffff" strokeWidth="1.1" />
          <circle cx="11.7" cy="5.3" r="0.65" fill="#ffffff" />
        </svg>
      );
    case "linkedin":
      return (
        <svg width={size} height={size} viewBox="0 0 17 17" aria-hidden="true">
          <rect x="1" y="1" width="15" height="15" rx="3" fill="rgb(2, 117, 180)" />
          <rect x="4" y="7" width="2" height="6" rx="0.5" fill="#ffffff" />
          <circle cx="5" cy="5" r="1" fill="#ffffff" />
          <path d="M7.5 7h1.8v.9c.3-.5.9-1 1.8-1 1.4 0 2.4 1 2.4 2.6V13h-2V9.8c0-.7-.3-1.2-.9-1.2-.7 0-1.1.5-1.1 1.2V13h-2V7z" fill="#ffffff" />
        </svg>
      );
    case "facebook":
      return (
        <svg width={size} height={size} viewBox="0 0 17 17" aria-hidden="true">
          <path
            d="M 15 7.454 C 14.951 3.452 11.805 0.184 7.831 0.007 C 3.857 -0.169 0.438 2.807 0.038 6.789 C -0.361 10.771 2.399 14.374 6.328 15 L 6.328 9.652 L 4.453 9.652 L 4.453 7.454 L 6.328 7.454 L 6.328 5.784 C 6.24 4.998 6.503 4.213 7.046 3.642 C 7.589 3.07 8.356 2.77 9.141 2.822 C 9.703 2.83 10.264 2.881 10.819 2.973 L 10.819 4.86 L 9.881 4.86 C 9.554 4.818 9.225 4.928 8.988 5.16 C 8.751 5.391 8.631 5.718 8.662 6.048 L 8.662 7.473 L 10.744 7.473 L 10.406 9.67 L 8.672 9.67 L 8.672 14.953 C 12.333 14.37 15.022 11.183 15 7.454 Z"
            fill="rgb(25, 119, 242)"
            transform="translate(1 1)"
          />
        </svg>
      );
    default:
      return null;
  }
}

export function SunIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="5" fill="currentColor" />
      <path
        d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MoonIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export function StarIcon({ size = 11 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" fill="var(--accent)" aria-hidden="true">
      <path d="M 4.547 0.387 C 4.69 -0.068 5.31 -0.068 5.453 0.387 L 6.306 3.104 C 6.37 3.307 6.552 3.445 6.759 3.445 L 9.519 3.445 C 9.98 3.445 10.172 4.056 9.799 4.337 L 7.566 6.016 C 7.399 6.142 7.329 6.364 7.393 6.567 L 8.246 9.285 C 8.388 9.739 7.886 10.117 7.513 9.836 L 5.28 8.156 C 5.113 8.031 4.887 8.031 4.72 8.156 L 2.487 9.836 C 2.114 10.117 1.612 9.739 1.754 9.285 L 2.607 6.567 C 2.671 6.364 2.601 6.142 2.434 6.016 L 0.201 4.337 C -0.172 4.056 0.02 3.445 0.481 3.445 L 3.241 3.445 C 3.448 3.445 3.63 3.307 3.694 3.104 Z" />
    </svg>
  );
}

export function FeatureIcon({ type }) {
  const props = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", stroke: "var(--text-muted)", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (type) {
    case "trophy":
      return <svg {...props}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>;
    case "bolt":
      return <svg {...props}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="var(--text-muted)" /></svg>;
    case "layers":
      return <svg {...props}><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M2 20h20" /></svg>;
    case "check":
      return <svg {...props}><rect x="3" y="3" width="18" height="18" rx="4" fill="var(--text-muted)" stroke="none" /><path d="M8 12l3 3 5-5" stroke="var(--bg)" strokeWidth="2.2" /></svg>;
    case "bulb":
      return <svg {...props}><path d="M9 18h6M10 22h4M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" /></svg>;
    case "sparkles":
      return <svg {...props}><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" /></svg>;
    case "headphones":
      return <svg {...props}><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" /></svg>;
    case "heart":
      return <svg {...props}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="var(--text-muted)" stroke="none" /></svg>;
    case "box":
      return <svg {...props}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>;
    case "phone":
      return <svg {...props}><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>;
    case "search":
      return <svg {...props}><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>;
    default:
      return <svg {...props}><circle cx="12" cy="12" r="8" /><path d="M9 12l2 2 4-4" /></svg>;
  }
}
