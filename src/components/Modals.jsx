import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useApp } from "../context/AppContext";
import { SITE_META } from "../data/siteData";
import "./BookingModal.css";

const WEEKDAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const BASE_SLOTS_24H = [
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
];

function formatSlot(slot24, use24h) {
  if (use24h) return slot24;
  const [hh, mm] = slot24.split(":").map(Number);
  const suffix = hh >= 12 ? "pm" : "am";
  const h12 = hh % 12 === 0 ? 12 : hh % 12;
  return `${h12}:${String(mm).padStart(2, "0")}${suffix}`;
}

export function CalModal() {
  const { isCalOpen, closeCal } = useApp();

  const [today] = useState(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  });

  const defaultSelected = useMemo(() => {
    const d = new Date(today);
    d.setDate(d.getDate() + 1);
    return d;
  }, [today]);

  const [viewYear, setViewYear] = useState(defaultSelected.getFullYear());
  const [viewMonth, setViewMonth] = useState(defaultSelected.getMonth());
  const [selectedDate, setSelectedDate] = useState(defaultSelected);
  const [use24h, setUse24h] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState("");

  const calendarDays = useMemo(() => {
    const firstDay = new Date(viewYear, viewMonth, 1).getDay();
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    const cells = [];
    for (let i = 0; i < firstDay; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) {
      cells.push(new Date(viewYear, viewMonth, d));
    }
    return cells;
  }, [viewYear, viewMonth]);

  const canGoPrev =
    viewYear > today.getFullYear() ||
    (viewYear === today.getFullYear() && viewMonth > today.getMonth());

  const handlePrevMonth = () => {
    if (!canGoPrev) return;
    if (viewMonth === 0) {
      setViewYear((y) => y - 1);
      setViewMonth(11);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (viewMonth === 11) {
      setViewYear((y) => y + 1);
      setViewMonth(0);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const formattedDate = selectedDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const shortDayHeader = selectedDate.toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
  });

  const handleResetAndClose = () => {
    setSelectedSlot(null);
    setStatus("idle");
    setErrorMsg("");
    closeCal();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setStatus("sending");
    setErrorMsg("");

    const timeLabel = formatSlot(selectedSlot, use24h);
    const payload = {
      _subject: `New 30 min Call Booking from ${name} (${formattedDate} at ${timeLabel})`,
      _template: "table",
      _captcha: "false",
      Client_Name: name.trim(),
      Client_Email: email.trim(),
      Meeting_Date: formattedDate,
      Meeting_Time: `${timeLabel} (Asia/Kolkata)`,
      Project_Notes: notes.trim() || "No additional notes provided.",
    };

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${SITE_META.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || data.success === "false") {
        throw new Error(data.message || "Could not send booking email.");
      }
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Network error while sending booking email.");
    }
  };

  const mailtoHref = `mailto:${SITE_META.email}?subject=${encodeURIComponent(
    `30 min Meeting Request - ${formattedDate} at ${selectedSlot ? formatSlot(selectedSlot, use24h) : ""}`
  )}&body=${encodeURIComponent(
    `Hi Sivabalan,\n\nI would like to book a 30 min call.\nName: ${name}\nEmail: ${email}\nDate: ${formattedDate}\nTime: ${
      selectedSlot ? formatSlot(selectedSlot, use24h) : ""
    } (Asia/Kolkata)\n\nNotes:\n${notes}\n`
  )}`;

  return (
    <AnimatePresence>
      {isCalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          onClick={handleResetAndClose}
          className="cal-backdrop"
        >
          <motion.button
            type="button"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            onClick={handleResetAndClose}
            aria-label="Close scheduling modal"
            className="cal-close-btn"
          >
            ✕
          </motion.button>

          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 14, opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="cal-card"
          >
            <div className="cal-grid">
              {/* Left Column: Sivabalan Meeting Info */}
              <div className="cal-info-col">
                <div className="cal-avatar-badge">S</div>
                <span className="cal-host-name">{SITE_META.brandName}</span>
                <h3 className="cal-meeting-title">30 min meeting</h3>
                <p className="cal-meeting-desc">
                  I&apos;m Sivabalan, a UX &amp; Visual Designer who helps businesses look amazing
                  online. Pick a date and time to chat about your project.
                </p>

                <div className="cal-meta-item">
                  <span>🕒</span>
                  <span>30m</span>
                </div>
                <div className="cal-meta-item">
                  <span>📹</span>
                  <span>Google Meet / Call</span>
                </div>
                <div className="cal-meta-item">
                  <span>🌐</span>
                  <span>Asia/Kolkata</span>
                </div>
                <div className="cal-meta-item">
                  <span>✉️</span>
                  <span>{SITE_META.email}</span>
                </div>

                {selectedSlot && (
                  <div
                    style={{
                      marginTop: 10,
                      padding: "10px 12px",
                      borderRadius: 10,
                      backgroundColor: "var(--surface)",
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    📅 {formattedDate} · {formatSlot(selectedSlot, use24h)}
                  </div>
                )}
              </div>

              {/* Right 2 Columns: Either Calendar+Slots OR Form OR Success */}
              {status === "sent" ? (
                <div className="cal-success-box">
                  <div className="cal-success-icon">✓</div>
                  <h3 className="h3-sub">Call Request Sent to Sivabalan!</h3>
                  <p style={{ maxWidth: 420, color: "var(--text-muted)", fontSize: 15 }}>
                    Your booking details for <strong>{formattedDate}</strong> at{" "}
                    <strong>{formatSlot(selectedSlot, use24h)}</strong> have been emailed to{" "}
                    <strong>{SITE_META.email}</strong>.
                  </p>
                  <p style={{ maxWidth: 440, color: "var(--text-muted)", fontSize: 12 }}>
                    First-time setup note: Check <strong>{SITE_META.email}</strong> once for
                    FormSubmit&apos;s one-click activation email so all future bookings land
                    automatically.
                  </p>
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
                    <a href={mailtoHref} className="cal-back-btn">
                      Also Send via Email App
                    </a>
                    <button
                      type="button"
                      className="cal-confirm-btn"
                      onClick={handleResetAndClose}
                    >
                      Done
                    </button>
                  </div>
                </div>
              ) : selectedSlot ? (
                <form className="cal-form-wrap" onSubmit={handleSubmit}>
                  <h3 style={{ fontSize: 20, fontWeight: 700 }}>Enter Your Details</h3>

                  <div className="cal-field">
                    <label htmlFor="booking-name">Your Name *</label>
                    <input
                      id="booking-name"
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="cal-input"
                    />
                  </div>

                  <div className="cal-field">
                    <label htmlFor="booking-email">Email Address *</label>
                    <input
                      id="booking-email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="cal-input"
                    />
                  </div>

                  <div className="cal-field">
                    <label htmlFor="booking-notes">Tell me about your project</label>
                    <textarea
                      id="booking-notes"
                      rows={4}
                      placeholder="Share your website, UX, or visual design goals..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="cal-textarea"
                    />
                  </div>

                  {status === "error" && (
                    <div style={{ color: "#fe2026", fontSize: 13 }}>
                      {errorMsg}{" "}
                      <a href={mailtoHref} style={{ textDecoration: "underline", fontWeight: 600 }}>
                        Send directly via Email App instead
                      </a>
                    </div>
                  )}

                  <div className="cal-form-actions">
                    <button
                      type="button"
                      className="cal-back-btn"
                      onClick={() => {
                        setSelectedSlot(null);
                        setStatus("idle");
                      }}
                    >
                      ← Back
                    </button>

                    <button
                      type="submit"
                      className="cal-confirm-btn"
                      disabled={status === "sending"}
                    >
                      <span>{status === "sending" ? "Sending..." : "Confirm Booking"}</span>
                      <span className="glow-dot" />
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  {/* Middle Column: Interactive Calendar */}
                  <div className="cal-calendar-col">
                    <div className="cal-month-head">
                      <div className="cal-month-title">
                        {MONTHS[viewMonth]} <span>{viewYear}</span>
                      </div>
                      <div className="cal-month-nav">
                        <button
                          type="button"
                          className="cal-nav-arrow"
                          onClick={handlePrevMonth}
                          disabled={!canGoPrev}
                          aria-label="Previous month"
                        >
                          ‹
                        </button>
                        <button
                          type="button"
                          className="cal-nav-arrow"
                          onClick={handleNextMonth}
                          aria-label="Next month"
                        >
                          ›
                        </button>
                      </div>
                    </div>

                    <div className="cal-weekdays">
                      {WEEKDAYS.map((w) => (
                        <span key={w}>{w}</span>
                      ))}
                    </div>

                    <div className="cal-days-grid">
                      {calendarDays.map((dateObj, idx) => {
                        if (!dateObj) return <div key={`empty-${idx}`} />;
                        const isPast = dateObj < today;
                        const isToday = dateObj.getTime() === today.getTime();
                        const isSelected = dateObj.getTime() === selectedDate.getTime();
                        return (
                          <button
                            key={dateObj.toISOString()}
                            type="button"
                            disabled={isPast}
                            onClick={() => setSelectedDate(dateObj)}
                            className={`cal-day-btn ${isPast ? "is-disabled" : ""} ${
                              isSelected ? "is-selected" : ""
                            }`}
                          >
                            <span>{dateObj.getDate()}</span>
                            {isToday && <span className="cal-today-dot" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right Column: Time Slots */}
                  <div className="cal-slots-col">
                    <div className="cal-slots-head">
                      <span className="cal-selected-date-label">{shortDayHeader}</span>
                      <div className="cal-format-toggle">
                        <button
                          type="button"
                          className={`cal-format-btn ${!use24h ? "is-active" : ""}`}
                          onClick={() => setUse24h(false)}
                        >
                          12h
                        </button>
                        <button
                          type="button"
                          className={`cal-format-btn ${use24h ? "is-active" : ""}`}
                          onClick={() => setUse24h(true)}
                        >
                          24h
                        </button>
                      </div>
                    </div>

                    <div className="cal-slots-list">
                      {BASE_SLOTS_24H.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          className="cal-slot-btn"
                          onClick={() => setSelectedSlot(slot)}
                        >
                          {formatSlot(slot, use24h)}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function LightboxModal() {
  const { lightboxSrc, closeLightbox } = useApp();

  return (
    <AnimatePresence>
      {lightboxSrc && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLightbox}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 220,
            backgroundColor: "rgba(0, 0, 0, 0.86)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close image preview"
            style={{
              position: "absolute",
              top: 24,
              right: 24,
              width: 44,
              height: 44,
              borderRadius: "50%",
              backgroundColor: "#ffffff",
              color: "#000000",
              fontSize: 18,
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ✕
          </button>
          <motion.img
            src={lightboxSrc}
            alt="Project preview"
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.94, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "92vw",
              maxHeight: "88vh",
              borderRadius: 16,
              objectFit: "contain",
              boxShadow: "0 24px 70px rgba(0,0,0,0.6)",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
