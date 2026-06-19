import React, { useState, useEffect, useRef } from "react";
import project1 from "../../assets/project1.png";
import p4 from "../../assets/p4.png";
import zerodha from "../../assets/zerodha.png";
import p3 from "../../assets/p-3.png";
import p5 from "../../assets/p5.png";
import p6 from "../../assets/p6.png";
import fixit from "../../assets/fixit.png";
import projectgra from "../../assets/projectgra.png";
import mindverse from "../../assets/mindverse.png";
// ── helpers ────────────────────────────────────────────────────────────────
function hexToRgb(hex) {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return r ? `${parseInt(r[1],16)},${parseInt(r[2],16)},${parseInt(r[3],16)}` : "255,255,255";
}

// ── data ───────────────────────────────────────────────────────────────────
const CATEGORIES = [
  {
    id: "web",
    label: "Web Apps",
    icon: "⬡",
    accent: "#b49b1e",
    desc: "Full-stack platforms & interactive websites",
    projects: [
      {
        title: "TechMedix",
        subtitle: "Medicine Management & Wellness Platform",
        desc: "OCR-based prescription extraction, drug interaction detection, real-time price comparison, automated adherence scheduling & RBAC auth. 40% API performance boost via optimised PostgreSQL queries.",
        image: project1,
        accent: "#00ffe5",
        tech: ["React", "PostgreSQL", "LLM integration", "OCR", "RBAC"],
        github: "https://github.com/Aditya07024/TechMedix",
        site: "https://techmedix.onrender.com/",
        youtube: "#",
      },
      // {
      //   title: "GigShield",
      //   subtitle: "AI-Powered Parametric Insurance Platform",
      //   desc: "India’s first AI-powered parametric insurance platform for gig workers. Automatically triggers payouts based on real-world conditions like rainfall, AQI, and heatwaves. Features include SOS emergency system, AI legal chatbot, fraud detection engine, and real-time zone monitoring.",
      //   image: "#",
      //   accent: "#1AAF80",
      //   tech: ["React", "TypeScript", "Vite", "Tailwind", "AI"],
      //   github: "https://github.com/Aditya07024/gigRakshak",
      //   site: "#",
      //   youtube: "#",
      // },
      {
        title: "Fixit24hr",
        subtitle: "On-Demand Service Booking Platform",
        desc: "Full-stack service booking platform with real-time request handling, employee assignment, Razorpay payment integration, booking lifecycle management, and automated expiry of unaccepted requests.",
        image: fixit,
        accent: "#ff9900",
        tech: ["React", "Node.js", "PostgreSQL", "Razorpay", "Socket.IO"],
        github: "https://github.com/Aditya07024/fixit.git",
        site: "https://www.fixit24hr.in/",
        youtube: "#",
      },
      {
        title: "VedicAi",
        subtitle: "Intelligent Vedic Astrology Platform",
        desc: "AI-powered Kundli generation, dosha detection (Mangal, Kaal Sarp, Pitra), Vimshottari Dasha & Panchang powered by Google Gemini API and Swiss Ephemeris.",
        image: p4,
        accent: "#ffe600",
        tech: ["Streamlit", "Gemini API", "pyswisseph", "PostgreSQL"],
        github: "https://github.com/Aditya07024/VedicAi",
        site: "https://vedicai.onrender.com/",
        youtube: "#",
      },
      {
        title: "MindVerse",
        subtitle: "Firebase + MongoDB Full Stack Module",
        desc: "Production-ready file upload system with Firebase Storage integration and MongoDB backend. Includes complete documentation (Quick Start, API Guide, Testing, Firebase setup), file search, deletion, statistics, and robust error handling. Designed for plug-and-play integration in MERN apps.",
        image: mindverse,
        accent: "#00c2ff",
        tech: ["Node.js", "Express", "MongoDB", "Firebase", "MERN"],
        github: "https://github.com/Aditya07024/MindVerse",
        site: "https://mindverse-cwmx.onrender.com",
        youtube: "#",
      },
      {
        title: "Graduate Verification System",
        subtitle: "MERN + National ID Credential Verification",
        desc: "Full-stack graduate credential verification system with National ID (FAN) integration. Features multi-step secure signup, JWT authentication, role-based dashboards (admin/registrar/user), QR-based certificate validation, real-time chat with Socket.IO, and microservice architecture for identity verification.",
        image: projectgra,
        accent: "#4ade80",
        tech: ["React", "Node.js", "MongoDB", "Socket.IO", "JWT"],
        github: "https://github.com/Aditya07024/Graduate-Verification",
        site: "https://graduate-verification-frontend.onrender.com",
        youtube: "#",
      },
      {
        title: "Zerodha Clone",
        subtitle: "Interactive Stock Trading Platform",
        desc: "Real-time market data visualisation, responsive trading panels, portfolio tracking UI, watchlist management and dynamic chart rendering with pixel-perfect fidelity.",
        image: zerodha,
        accent: "#ff2d78",
        tech: ["React", "Chart.js", "State Mgmt", "Responsive UI"],
        github: "https://github.com/Aditya07024/Zerodha",
        site: "https://zerodha-frontend-uizo.onrender.com",
        youtube: "#",
      },
      {
        title: "Kyara Beverages",
        subtitle: "Café Website for Millet-Based Drinks",
        desc: "Fully responsive modern site with animated product showcase, contact form, interactive navigation and optimised cross-browser performance using pure HTML/CSS/JS.",
        image: p3,
        accent: "#8b5cf6",
        tech: ["HTML", "CSS", "Vanilla JS", "Netlify"],
        github: "https://github.com/Aditya07024/Cafe-Website",
        site: "https://cafe-website0728.netlify.app",
        youtube: "#",
      },
    ],
  },
  {
    id: "mobile",
    label: "Mobile Apps",
    icon: "◈",
    accent: "#ff2d78",
    desc: "Cross-platform mobile experiences",
    projects: [
      {
        title: "TechMedix",
        subtitle: "Medicine Management & Wellness Platform",
        desc: "OCR-based prescription extraction, drug interaction detection, real-time price comparison, automated adherence scheduling & RBAC auth. 40% API performance boost via optimised PostgreSQL queries.",
        image: project1,
        accent: "#00ffe5",
        tech: ["ReactNative", "PostgreSQL", "OCR", "LLM integration", "RBAC"],
        github: "https://github.com/Aditya07024/TechMedix",
        site: "https://drive.google.com/file/d/1lrCdWHnf_6N5ZcSrMPA7uUrT4lnrCfEQ/view?usp=share_link",
        youtube: "#",
      },
      {
        title: "Expense Tracker",
        subtitle: "Cross-Platform Mobile App",
        desc: "Category-wise expense logging, real-time balance calculation, interactive charts for financial insights, and persistent local storage with an intuitive fast-entry UX.",
        image: p5,
        accent: "#ff2d78",
        tech: ["React Native", "Local Storage", "Charts", "Cross-Platform"],
        github: "https://github.com/Aditya07024/Expense-Tracker-app",
        site: "#",
        youtube: "#",
      },
    ],
  },
  {
    id: "ext",
    label: "Extensions & Experiments",
    icon: "✦",
    accent: "#8b5cf6",
    desc: "Dev tools, widgets & creative experiments",
    projects: [
      {
        title: "CodeBuddy",
        subtitle: "Your Annoying Coding Avatar",
        desc: "VS Code extension that monitors errors, reacts to developer actions in real-time, gamifies debugging with expressive feedback and boosts productivity through intelligent state tracking.",
        image: p6,
        emoji: "🤖",
        accent: "#8b5cf6",
        tech: ["VS Code API", "TypeScript", "Event Listeners", "Marketplace"],
        github: "https://github.com/Aditya07024/CodeBuddy---Your-Annoying-Coding-Avatar",
        site: "https://marketplace.visualstudio.com/items?itemName=Aditya07024.codebuddy-partner",
        youtube: "#",
      },
    ],
  },
];

// ── fade-in hook ───────────────────────────────────────────────────────────
function useFadeIn(threshold = 0.2) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ── Modal ──────────────────────────────────────────────────────────────────
function Modal({ project, accent, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", handler); };
  }, [onClose]);

  const rgb = hexToRgb(accent);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "rgba(2,8,14,0.88)",
        backdropFilter: "blur(14px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px",
        animation: "fadeIn 0.2s ease",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: "100%", maxWidth: 680,
          maxHeight: "90vh", overflowY: "auto",
          background: "#060d14",
          border: `1px solid rgba(${rgb},0.3)`,
          borderRadius: 24,
          boxShadow: `0 0 100px rgba(${rgb},0.18), 0 40px 80px rgba(0,0,0,0.7)`,
          animation: "popUp 0.35s cubic-bezier(0.23,1,0.32,1)",
          position: "relative",
          scrollbarWidth: "thin",
          scrollbarColor: `rgba(${rgb},0.3) transparent`,
        }}
      >
        {/* image hero */}
        <div style={{ position: "relative", width: "100%", height: 260, overflow: "hidden", borderRadius: "24px 24px 0 0" }}>
          <img src={project.image} alt={project.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          <div style={{
            position: "absolute", inset: 0,
            background: `linear-gradient(to bottom, rgba(0,0,0,0.15) 30%, #060d14 100%)`,
          }} />
          <span style={{
            position: "absolute", top: 20, left: 20, fontSize: 42, lineHeight: 1,
            background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)",
            padding: "8px 14px", borderRadius: 14,
          }}>{project.emoji}</span>
          <button onClick={onClose} style={{
            position: "absolute", top: 16, right: 16,
            background: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "#fff", borderRadius: "50%",
            width: 38, height: 38, fontSize: 20,
            cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
          }}>×</button>
        </div>

        {/* body */}
        <div style={{ padding: "28px 32px 40px" }}>
          <p style={{
            fontFamily: "'Space Mono', monospace", fontSize: 10,
            letterSpacing: 2, color: accent, textTransform: "uppercase",
            margin: "0 0 8px",
          }}>{project.subtitle}</p>

          <h3 style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 900,
            fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
            color: "#fff", margin: "0 0 16px", letterSpacing: -0.8,
          }}>{project.title}</h3>

          <p style={{ color: "#7a9aaa", fontSize: 15, lineHeight: 1.8, margin: "0 0 24px" }}>
            {project.desc}
          </p>

          {/* tech pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
            {project.tech.map(t => (
              <span key={t} style={{
                fontSize: 11, fontFamily: "'Space Mono', monospace",
                color: accent,
                background: `rgba(${rgb},0.1)`,
                border: `1px solid rgba(${rgb},0.25)`,
                padding: "5px 13px", borderRadius: 20,
              }}>{t}</span>
            ))}
          </div>

          {/* links */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {project.github !== "#" && (
              <a href={project.github} target="_blank" rel="noreferrer"
                style={modalLink("rgba(255,255,255,0.12)", "#cde")}>↗ GitHub</a>
            )}
            {project.site !== "#" && (
              <a href={project.site} target="_blank" rel="noreferrer"
                style={modalLink(`rgba(${rgb},0.15)`, accent, `1px solid rgba(${rgb},0.4)`)}>
                ⬡ Live Site
              </a>
            )}
            {project.youtube !== "#" && (
              <a href={project.youtube} target="_blank" rel="noreferrer"
                style={modalLink("rgba(255,50,50,0.12)", "#ff6060")}>▶ YouTube</a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function modalLink(bg, color, border = "1px solid rgba(255,255,255,0.1)") {
  return {
    display: "inline-flex", alignItems: "center", gap: 6,
    fontFamily: "'Space Mono', monospace", fontSize: 12, fontWeight: 700,
    letterSpacing: 0.5, padding: "10px 22px", borderRadius: 10,
    border, background: bg, color,
    textDecoration: "none", transition: "opacity 0.2s",
  };
}

// ── Project Card ───────────────────────────────────────────────────────────
function ProjectCard({ project, categoryAccent, index, onOpen }) {
  const [ref, visible] = useFadeIn(0.08);
  const [hovered, setHovered] = useState(false);
  const acc = project.accent || categoryAccent;
  const rgb = hexToRgb(acc);

  return (
    <div
      role="button"
      tabIndex={0}
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpen(project)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen(project);
        }
      }}
      aria-label={`Open details for ${project.title}`}
      style={{
        position: "relative",
        background: "black",
        border: `1px solid ${hovered ? acc : "rgba(255,255,255,0.07)"}`,
        borderRadius: 18,
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 0.4s cubic-bezier(0.23,1,0.32,1)",
        transform: visible
          ? hovered ? "translateY(-7px) scale(1.015)" : "translateY(0) scale(1)"
          : "translateY(44px) scale(0.97)",
        opacity: visible ? 1 : 0,
        transitionDelay: `${index * 90}ms`,
        boxShadow: hovered
          ? `0 20px 50px rgba(${rgb},0.2), inset 0 0 0 1px rgba(${rgb},0.15)`
          : "0 4px 20px rgba(0,0,0,0.45)",
      }}
    >
      {/* glow blob top-right */}
      <div style={{
        position: "absolute", top: -50, right: -50,
        width: 160, height: 160, borderRadius: "50%",
        background: `radial-gradient(circle, rgba(${rgb},${hovered ? 0.15 : 0.04}), transparent 70%)`,
        pointerEvents: "none", transition: "background 0.4s ease",
      }} />

      {/* thumbnail */}
      <div style={{ position: "relative", width: "100%", height: 200, overflow: "hidden" }}>
        <img src={project.image} alt={project.title}
          style={{
            width: "100%", height: "100%", objectFit: "cover", display: "block",
            transition: "transform 0.55s cubic-bezier(0.23,1,0.32,1)",
            transform: hovered ? "scale(1.09)" : "scale(1)",
          }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, transparent 45%, rgba(8,18,26,0.92) 100%)",
        }} />
        <span style={{
          position: "absolute", bottom: 12, left: 14,
          fontSize: 28, lineHeight: 1,
        }}>{project.emoji}</span>

        {/* hover cta */}
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          background: `rgba(${rgb},0.12)`,
          backdropFilter: "blur(3px)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.35s ease",
        }}>
          <span style={{
            fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: 2.5,
            color: "#fff",
            background: `rgba(${rgb},0.5)`,
            padding: "9px 20px", borderRadius: 30,
            border: "1px solid rgba(255,255,255,0.25)",
          }}>VIEW PROJECT</span>
        </div>
      </div>

      {/* card body */}
      <div style={{ padding: "18px 22px 22px" }}>
        <h4 style={{
          fontFamily: "'Syne', sans-serif", fontWeight: 800,
          fontSize: "1.1rem", color: "#fff",
          margin: "0 0 5px", letterSpacing: -0.3,
        }}>{project.title}</h4>
        <p style={{
          fontFamily: "'Space Mono', monospace", fontSize: 10,
          color: acc, letterSpacing: 0.5, margin: "0 0 12px",
          transition: "color 0.3s",
        }}>{project.subtitle}</p>
        <p style={{
          fontSize: 13, color: "#5a7a88", lineHeight: 1.65,
          margin: "0 0 16px",
          display: "-webkit-box", WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical", overflow: "hidden",
        }}>{project.desc}</p>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {project.tech.slice(0, 3).map(t => (
            <span key={t} style={{
              fontSize: 9, fontFamily: "'Space Mono', monospace",
              color: "#4a6a76", border: "1px solid rgba(255,255,255,0.07)",
              padding: "3px 9px", borderRadius: 20,
            }}>{t}</span>
          ))}
          {project.tech.length > 3 && (
            <span style={{
              fontSize: 9, fontFamily: "'Space Mono', monospace",
              color: acc, padding: "3px 4px",
            }}>+{project.tech.length - 3}</span>
          )}
        </div>
      </div>

      {/* bottom accent bar */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(90deg, ${acc}, transparent)`,
        opacity: hovered ? 1 : 0, transition: "opacity 0.4s ease",
      }} />
    </div>
  );
}

// ── Category Tab Button ────────────────────────────────────────────────────
function Tab({ cat, active, onClick, index, visible }) {
  const [hovered, setHovered] = useState(false);
  const rgb = hexToRgb(cat.accent);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        display: "flex", alignItems: "center", gap: 10,
        padding: "13px 26px", borderRadius: 14,
        border: `1.5px solid ${active ? cat.accent : "rgba(255,255,255,0.08)"}`,
        background: active
          ? `rgba(${rgb},0.12)`
          : hovered ? "rgba(255,255,255,0.025)" : "transparent",
        color: active ? cat.accent : hovered ? "#aac4cc" : "#4a6a78",
        cursor: "pointer",
        transition: "all 0.35s cubic-bezier(0.23,1,0.32,1)",
        transform: visible
          ? active ? "translateY(-3px)" : "translateY(0)"
          : "translateY(22px)",
        opacity: visible ? 1 : 0,
        transitionDelay: `${index * 80}ms`,
        boxShadow: active ? `0 8px 28px rgba(${rgb},0.22)` : "none",
        whiteSpace: "nowrap",
      }}
    >
      <span style={{ fontSize: 16 }}>{cat.icon}</span>
      <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.92rem" }}>
        {cat.label}
      </span>
      <span style={{
        fontFamily: "'Space Mono', monospace", fontSize: 10,
        background: active ? `rgba(${rgb},0.2)` : "rgba(255,255,255,0.05)",
        color: active ? cat.accent : "#3a5a68",
        padding: "2px 8px", borderRadius: 20,
        minWidth: 20, textAlign: "center",
      }}>{cat.projects.length}</span>
    </button>
  );
}

// ── Main ───────────────────────────────────────────────────────────────────
const ProjectPage = () => {
  const [activeCat, setActiveCat] = useState(0);
  const [activeProject, setActiveProject] = useState(null);
  const [titleRef, titleVisible] = useFadeIn(0.25);
  const [tabsRef, tabsVisible] = useFadeIn(0.15);

  const cat = CATEGORIES[activeCat];
  const rgb = hexToRgb(cat.accent);

  return (
    <section id="project" style={{
      background: "#0800000",
      minHeight: "100vh",
      padding: "20px 5% 30px",
      position: "relative",
      overflow: "hidden",
      fontFamily: "'Syne', sans-serif",
    }}>

      {/* ambient blobs */}
      {CATEGORIES.map((c, i) => (
        <div key={i} style={{
          position: "absolute",
          width: 600, height: 600, borderRadius: "50%",
          background: "black",
          top: i === 0 ? "-15%" : i === 1 ? "55%" : "25%",
          left: i === 0 ? "-8%" : i === 1 ? "65%" : "35%",
          pointerEvents: "none",
          transition: "background 0.7s ease",
          zIndex: 0,
        }} />
      ))}

      {/* ── HEADER ── */}
       <div ref={titleRef} style={{ textAlign: "center", marginBottom: 60, position: "relative", zIndex: 1 }}>
        {/* <span style={{
          fontFamily: "'Space Mono', monospace", fontSize: 10,
          letterSpacing: 4, color: cat.accent, textTransform: "uppercase",
          display: "block", marginBottom: 14,
          opacity: titleVisible ? 1 : 0,
          transform: titleVisible ? "none" : "translateY(10px)",
          transition: "all 0.5s ease, color 0.4s ease",
        }}>◈ Portfolio · Selected Work</span> */}

        <h2 id="projects-heading" style={{
          fontFamily: "'Rubik', sans-serif", fontWeight: 900,
          padding:"50px",
          fontSize: "clamp(2.8rem, 7vw, 6rem)",
          letterSpacing: -3, lineHeight: 0.95,
          background: `linear-gradient(135deg, #ffffff 25%, ${cat.accent} 75%)`,
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          opacity: titleVisible ? 1 : 0,
          transform: titleVisible ? "none" : "translateY(30px)",
          transition: "all 0.7s cubic-bezier(0.23,1,0.32,1) 0.1s, background 0.5s ease",
        }}>
          Featured Projects
        </h2>

        <p style={{
          fontFamily: "'Space Mono', monospace",
          color: "#3a5a68", fontSize: 12, maxWidth: 420, margin: "0 auto",
          lineHeight: 1.8, letterSpacing: 0.3,
          opacity: titleVisible ? 1 : 0,
          transform: titleVisible ? "none" : "translateY(16px)",
          transition: "all 0.7s ease 0.22s",
        }}>
          From AI-powered platforms to VS Code extensions,<br />
          each project solves a real problem.
        </p>
      </div>

      {/* ── TABS ── */}
      <div ref={tabsRef} style={{
        display: "flex", justifyContent: "center",
        gap: 12, flexWrap: "wrap", marginBottom: 40,
        position: "relative", zIndex: 1,
      }}>
        {CATEGORIES.map((c, i) => (
          <Tab
            key={c.id} cat={c} active={activeCat === i}
            onClick={() => setActiveCat(i)}
            index={i} visible={tabsVisible}
          />
        ))}
      </div>

      {/* category descriptor pill */}
      <div style={{
        textAlign: "center", marginBottom: 40,
        position: "relative", zIndex: 1,
      }}>
        <span style={{
          display: "inline-block",
          fontFamily: "'Space Mono', monospace", fontSize: 10,
          letterSpacing: 2, color: cat.accent, textTransform: "uppercase",
          border: `1px solid rgba(${rgb},0.2)`,
          padding: "6px 20px", borderRadius: 30,
          background: `rgba(${rgb},0.05)`,
          transition: "all 0.4s ease",
        }}>
          {cat.icon} {cat.desc}
        </span>
      </div>

      {/* divider */}
      {/* <div style={{
        display: "flex", alignItems: "center", gap: 16,
        maxWidth: 1100, margin: "0 auto 40px",
        position: "relative", zIndex: 1,
      }}>
        <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.05)" }} />
        <span style={{
          fontSize: 9, fontFamily: "'Space Mono', monospace",
          color: "#2a4a58", letterSpacing: 3,
        }}>
          {cat.projects.length} PROJECT{cat.projects.length !== 1 ? "S" : ""}
        </span>
        <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.05)" }} />
      </div> */}

      {/* ── GRID ── */}
      <div aria-labelledby="projects-heading" style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: 24, maxWidth: 1100, margin: "0 auto",
        position: "relative", zIndex: 1,
      }}>
        {cat.projects.map((p, i) => (
          <ProjectCard
            key={p.title + activeCat}
            project={p} categoryAccent={cat.accent}
            index={i} onOpen={setActiveProject}
          />
        ))}
      </div>

      {/* footer */}
      {/* <div style={{
        textAlign: "center", marginTop: 80,
        fontFamily: "'Space Mono', monospace", fontSize: 11,
        color: "#2a4a58", letterSpacing: 1,
        position: "relative", zIndex: 1,
      }}>
        <span style={{
          display: "inline-block",
          border: "1px solid rgba(255,255,255,0.05)",
          padding: "10px 24px", borderRadius: 40,
        }}>✦ More projects in development — stay tuned</span>
      </div> */}

      {/* ── MODAL ── */}
      {activeProject && (
        <Modal
          project={activeProject}
          accent={activeProject.accent || cat.accent}
          onClose={() => setActiveProject(null)}
        />
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800;900&family=Space+Mono:wght@400;700&display=swap');
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes popUp {
          from { transform: scale(0.88) translateY(24px); opacity: 0; }
          to   { transform: scale(1) translateY(0); opacity: 1; }
        }
        #project a:hover { opacity: 0.8; }
        @media (max-width: 600px) {
          #project { padding: 60px 4% 80px; }
        }
      `}</style>
    </section>
  );
};

export default ProjectPage;
