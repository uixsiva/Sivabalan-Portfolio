import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useApp } from "../context/AppContext";
import {
  ABOUT_STATS_LEFT,
  ABOUT_STATS_RIGHT,
  FAQS,
  MY_EXPERIENCE,
  MY_STACK,
  PROCESS_STEPS,
  PROJECTS,
  SERVICES_DATA,
  SITE_META,
  SOCIAL_LINKS,
  TESTIMONIALS,
} from "../data/siteData";
import { CountUpNumber, GlowButton, LoopVideo, SparkleCorners } from "../components/UI";
import { SocialIcon, StarIcon } from "../components/Icons";
import { StackLogo } from "../components/StackIcons";
import "./HomePage.css";

const HERO_SUBTITLE =
  "From Madurai, I design fast, user-friendly websites for founders and freelancers looking to attract dream clients.";

export default function HomePage() {
  const { openCal } = useApp();
  const [openServiceIdx, setOpenServiceIdx] = useState(null);
  const [openFaqIdxs, setOpenFaqIdxs] = useState({});
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const step0Ref = useRef(null);
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);

  const testSecRef = useRef(null);
  const faqSecRef = useRef(null);
  const contactSecRef = useRef(null);

  const step0In = useInView(step0Ref, { amount: 0.45 });
  const step1In = useInView(step1Ref, { amount: 0.45 });
  const step2In = useInView(step2Ref, { amount: 0.45 });

  const testIn = useInView(testSecRef, { amount: 0.35 });
  const faqIn = useInView(faqSecRef, { amount: 0.35 });
  const contactIn = useInView(contactSecRef, { amount: 0.35 });

  const activeProcessIdx = step2In ? 2 : step1In ? 1 : step0In ? 0 : 0;
  const activeLeftStage = contactIn
    ? "contact"
    : faqIn
    ? "faq"
    : testIn
    ? "testimonial"
    : "testimonial";

  const toggleFaq = (idx) => {
    setOpenFaqIdxs((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const currentTestimonial = TESTIMONIALS[testimonialIdx];

  const leftStageMap = {
    testimonial: {
      video: "/media/videos/testimonial-point.mp4",
      bubble: "What my Clients said",
    },
    faq: {
      video: "/media/videos/faq-question.mp4",
      bubble: "Frequently Answered Questions",
    },
    contact: {
      video: "/media/videos/contact-phone.mp4",
      bubble: "Reach out to me",
    },
  };

  const words = HERO_SUBTITLE.split(" ");

  return (
    <div className="grid-frame">
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-frame-box">
          <SparkleCorners positions={["tl", "tr", "bl", "br"]} />
          <div className="hero-name-pill">
            <motion.span
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="pill-badge pill-badge-display"
            >
              Hi, I&apos;m Sivabalan
            </motion.span>
          </div>

          <div className="hero-headline-row">
            <motion.h1
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="h1-hero"
            >
              UX&amp;Visual
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.72 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="hero-head-video-wrap dean-video-card"
            >
              <LoopVideo src="/media/videos/hero-head.mp4" alt="Sivabalan 3D animated avatar" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="h1-hero"
            >
              DESIGNER
            </motion.h1>
          </div>

          <p className="hero-subtitle">
            {words.map((word, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, filter: "blur(6px)", y: 6 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 + idx * 0.03 }}
                style={{ display: "inline-block", marginRight: "0.32em" }}
              >
                {word}
              </motion.span>
            ))}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.45 }}
          className="hero-cta-wrap"
        >
          <GlowButton variant="accent" href="/media/resume/Sivabalan_Resume.pdf">
            Download Resume
          </GlowButton>
        </motion.div>
      </section>

      {/* 2. PROJECTS HORIZONTAL MARQUEE */}
      <section className="home-projects-section">
        <div className="home-projects-header">
          <h2 className="h2-section">PROJECTS</h2>
          <GlowButton variant="dark" to="/projects">
            View all projects
          </GlowButton>
        </div>

        <div className="marquee-wrap">
          <div className="marquee-track marquee-track--pausable" style={{ "--marquee-duration": "32s" }}>
            {[...PROJECTS, ...PROJECTS].map((project, idx) => (
              <div className="home-projects-marquee-item" key={`${project.slug}-${idx}`}>
                <Link to={`/projects/${project.slug}`} className="home-project-card">
                  <img src={project.cover} alt={`${project.title} preview`} />
                  <div className="home-project-overlay">
                    <h3 className="home-project-title">{project.title}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT ME BENTO GRID */}
      <section className="about-bento">
        <SparkleCorners positions={["tl", "tr"]} />

        {/* Left Side Column: Stats + My Stack */}
        <div className="about-side-col about-side-col--left">
          {ABOUT_STATS_LEFT.map((stat) => (
            <div className="about-stat-cell" key={stat.label}>
              <span className="about-stat-num">
                <CountUpNumber target={stat.target} suffix={stat.suffix} />
              </span>
              <p className="about-stat-label">{stat.label}</p>
            </div>
          ))}

          <div className="about-section-header-cell">
            <SparkleCorners positions={["tl", "tr", "bl", "br"]} />
            <h4 className="h4-label">My Stack</h4>
          </div>

          {MY_STACK.map((item) => (
            <div className="stack-cell" key={item.name}>
              <StackLogo iconKey={item.iconKey} size={42} />
              <div>
                <p className="stack-name">{item.name}</p>
                <p className="stack-role">{item.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center Column: ABOUT ME + Sticky Beanbag Video */}
        <div className="about-center-col">
          <h2 className="h2-section">ABOUT ME</h2>

          <div className="about-sticky-visual">
            <div className="about-speech-wrap">
              <div className="speech-bubble speech-bubble--tail-left">
                Let Me Introduce Myself
              </div>
            </div>
            <div className="about-beanbag-video dean-video-card">
              <LoopVideo
                src="/media/videos/about-beanbag-blue.mp4"
                alt="Sivabalan working on a laptop in a beanbag"
              />
            </div>
          </div>
        </div>

        {/* Right Side Column: Stats + My Experience */}
        <div className="about-side-col about-side-col--right">
          {ABOUT_STATS_RIGHT.map((stat) => (
            <div className="about-stat-cell" key={stat.label}>
              <span className="about-stat-num">
                <CountUpNumber target={stat.target} suffix={stat.suffix} />
              </span>
              <p className="about-stat-label">{stat.label}</p>
            </div>
          ))}

          <div className="about-section-header-cell">
            <SparkleCorners positions={["tl", "tr", "bl", "br"]} />
            <h4 className="h4-label">My Experience</h4>
          </div>

          {MY_EXPERIENCE.map((exp) => (
            <div className="exp-cell" key={exp.role + exp.company}>
              <p className="exp-role">{exp.role}</p>
              <div className="exp-meta-row">
                <span className="exp-meta-key">Company →</span>
                <span className="exp-meta-val">{exp.company}</span>
              </div>
              <div className="exp-meta-row">
                <span className="exp-meta-key">Year →</span>
                <span className="exp-meta-val">{exp.year}</span>
              </div>
              {exp.location && (
                <div className="exp-meta-row">
                  <span className="exp-meta-key">Location →</span>
                  <span className="exp-meta-val">{exp.location}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 4. SERVICES MARQUEE */}
      <div className="services-marquee-band marquee-wrap" style={{ position: "relative" }}>
        <SparkleCorners positions={["tl", "tr", "bl", "br"]} />
        <div className="marquee-track" style={{ "--marquee-duration": "22s" }}>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div className="services-marquee-chunk" key={i}>
              <h2 className="h2-section">SERVICES</h2>
              <span className="services-marquee-sub">what i offer</span>
            </div>
          ))}
        </div>
      </div>

      {/* 5. SERVICES INTERACTIVE ACCORDION */}
      <section className="home-services-list">
        {SERVICES_DATA.map((service, idx) => {
          const isOpen = openServiceIdx === idx;
          return (
            <div
              key={service.num}
              className={`home-service-row ${isOpen ? "is-open" : ""}`}
              onClick={() => setOpenServiceIdx(isOpen ? null : idx)}
            >
              <div className="home-service-row-head">
                <div className="home-service-title-group">
                  <span className="home-service-num">{service.num}</span>
                  <h3 className="h3-sub">{service.title}</h3>
                </div>

                <span className="pill-badge">{service.badge}</span>

                <button
                  type="button"
                  className="home-service-toggle-btn"
                  aria-expanded={isOpen}
                  aria-label={`Toggle ${service.title}`}
                >
                  +
                </button>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="home-service-body">
                      <div>
                        <p className="home-service-desc">{service.description}</p>
                        <div className="home-service-tags">
                          {service.tags.map((tag) => (
                            <span className="home-service-tag" key={tag}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <motion.div
                        initial={{ scale: 0.75, y: 18, rotate: -10, opacity: 0 }}
                        animate={{ scale: 1, y: [0, -8, 0], rotate: [0, 4, 0], opacity: 1 }}
                        transition={{
                          opacity: { duration: 0.3 },
                          scale: { duration: 0.35 },
                          y: { duration: 3.4, repeat: Infinity, ease: "easeInOut" },
                          rotate: { duration: 4.2, repeat: Infinity, ease: "easeInOut" },
                        }}
                        className="home-service-3d-wrap"
                      >
                        <img src={service.image3d} alt={service.title} />
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </section>

      {/* 6. PROCESS STICKY 2-COLUMN SECTION */}
      <section className="process-split">
        <SparkleCorners positions={["tl", "tr", "tc"]} />

        <div className="process-left">
          <div className="process-header-cell">
            <SparkleCorners positions={["bl", "br"]} />
            <h2 className="h2-section">PROCESS</h2>
          </div>

          <div ref={step0Ref} className="process-step-cell">
            <SparkleCorners positions={["br"]} />
            <span className="h4-label">{PROCESS_STEPS[0].num}</span>
            <h3 className="h3-sub" style={{ marginTop: 6 }}>
              {PROCESS_STEPS[0].title}
            </h3>
            <p className="process-step-desc">{PROCESS_STEPS[0].description}</p>
          </div>

          <div ref={step1Ref} className="process-step-cell process-step-cell--step2">
            <SparkleCorners positions={["br"]} />
            <span className="h4-label">{PROCESS_STEPS[1].num}</span>
            <h3 className="h3-sub" style={{ marginTop: 6 }}>
              {PROCESS_STEPS[1].title}
            </h3>
            <p className="process-step-desc">{PROCESS_STEPS[1].description}</p>
          </div>

          <div ref={step2Ref} className="process-step-cell process-step-cell--step3">
            <span className="h4-label">{PROCESS_STEPS[2].num}</span>
            <h3 className="h3-sub" style={{ marginTop: 6 }}>
              {PROCESS_STEPS[2].title}
            </h3>
            <p className="process-step-desc">{PROCESS_STEPS[2].description}</p>
          </div>

          <div className="process-cta-cell">
            <div className="process-cta-card">
              <h3 className="h3-sub">Ready to Get Started?</h3>
              <p className="process-cta-sub">
                Tell me about your project and let&apos;s create something amazing together.
                I&apos;ll respond within 24 hours.
              </p>
              <GlowButton variant="dark" fullWidth onClick={openCal}>
                I&apos;m Ready to Start
              </GlowButton>
            </div>
          </div>
        </div>

        {/* Sticky Right Column with scroll-synced Desk Videos */}
        <div className="process-right-sticky-col">
          <div className="process-sticky-box">
            <div className="process-video-stage dean-video-card">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProcessIdx}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  style={{ width: "100%", height: "100%" }}
                >
                  <LoopVideo
                    src={PROCESS_STEPS[activeProcessIdx].video}
                    alt={PROCESS_STEPS[activeProcessIdx].title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIAL + FAQ + CONTACT ME STICKY SPLIT */}
      <section className="bottom-split">
        <SparkleCorners positions={["tc", "bc"]} />

        {/* Sticky Left Column swapping character video + speech bubble */}
        <div className="bottom-left-sticky-col">
          <div className="bottom-sticky-box">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLeftStage}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28 }}
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div className="bottom-speech-bubble">
                  <div className="speech-bubble speech-bubble--tail-left" style={{ maxWidth: 210, textAlign: "center" }}>
                    {leftStageMap[activeLeftStage].bubble}
                  </div>
                </div>
                <div className="bottom-video-stage dean-video-card">
                  <LoopVideo
                    src={leftStageMap[activeLeftStage].video}
                    alt={leftStageMap[activeLeftStage].bubble}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column: TESTIMONIAL -> FAQ -> CONTACT ME */}
        <div className="bottom-right-col">
          {/* TESTIMONIAL */}
          <div ref={testSecRef}>
            <div className="right-title-cell">
              <SparkleCorners positions={["bl", "br"]} />
              <h2 className="h2-section">TESTIMONIAL</h2>
            </div>

            <div className="testimonial-body-cell">
              <div className="testimonial-stars">
                {[0, 1, 2, 3, 4].map((s) => (
                  <StarIcon key={s} size={11} />
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonialIdx}
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -18 }}
                  transition={{ duration: 0.26 }}
                  className="testimonial-quote"
                >
                  <h3 className="h3-sub">{currentTestimonial.quote}</h3>
                </motion.div>
              </AnimatePresence>

              <div className="testimonial-footer-bar">
                <button
                  type="button"
                  className="testimonial-arrow-btn"
                  aria-label="Previous testimonial"
                  onClick={() =>
                    setTestimonialIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
                  }
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                  </svg>
                </button>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={testimonialIdx}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.22 }}
                    className="testimonial-client-box"
                  >
                    <img
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.name}
                      className="testimonial-avatar"
                    />
                    <h4 className="h4-label">{currentTestimonial.name}</h4>
                    <p className="testimonial-role">{currentTestimonial.role}</p>
                  </motion.div>
                </AnimatePresence>

                <button
                  type="button"
                  className="testimonial-arrow-btn"
                  aria-label="Next testimonial"
                  onClick={() => setTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length)}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div ref={faqSecRef}>
            <div className="faq-header-cell">
              <h2 className="h2-section">FAQ</h2>
            </div>

            <div className="faq-list-cell">
              {FAQS.map((faq, idx) => {
                const isOpen = !!openFaqIdxs[idx];
                return (
                  <div className="faq-item" key={faq.question}>
                    <div
                      className="faq-question-row"
                      onClick={() => toggleFaq(idx)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === "Enter" && toggleFaq(idx)}
                    >
                      <span className="faq-question-pill">{faq.question}</span>
                      <span className={`faq-plus-btn ${isOpen ? "is-open" : ""}`} aria-hidden="true">
                        +
                      </span>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, y: -6 }}
                          animate={{ height: "auto", opacity: 1, y: 0 }}
                          exit={{ height: 0, opacity: 0, y: -6 }}
                          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                          style={{ overflow: "hidden", width: "100%" }}
                        >
                          <div className="faq-answer-bubble">{faq.answer}</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CONTACT ME */}
          <div ref={contactSecRef}>
            <div className="right-title-cell">
              <SparkleCorners positions={["bl", "br"]} />
              <h2 className="h2-section">CONTACT ME</h2>
            </div>

            <div className="contact-intro-cell">
              <h3 className="h3-sub">Let&apos;s Work Together</h3>
              <p className="contact-intro-desc">
                Have a project in mind? I&apos;d love to hear about it. Drop me a message and I&apos;ll
                get back to you within 24 hours.
              </p>
            </div>

            <div className="contact-grid-2">
              <div className="contact-cell">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: "var(--text-muted)" }}>
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span className="contact-cell-title">Email</span>
                <a href={`mailto:${SITE_META.email}`} className="contact-cell-link">
                  {SITE_META.email}
                </a>
              </div>

              <div className="contact-cell">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: "var(--text-muted)" }}>
                  <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
                </svg>
                <span className="contact-cell-title">Phone</span>
                <a href={`tel:${SITE_META.phone}`} className="contact-cell-link">
                  {SITE_META.phone}
                </a>
              </div>
            </div>

            <div className="contact-socials-cell">
              <span className="contact-cell-title">Socials</span>
              <div className="contact-social-pills">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.key}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-pill"
                  >
                    <SocialIcon name={s.key} size={16} />
                    <span>{s.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="contact-schedule-cell">
              <h4 className="h4-label" style={{ maxWidth: 420 }}>
                Prefer to schedule a call instead? Book a free 30-minute consultation and let&apos;s
                discuss your project.
              </h4>
              <GlowButton variant="dark" onClick={openCal}>
                Let&apos;s Set Up a Time
              </GlowButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
