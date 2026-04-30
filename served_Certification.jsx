import { createHotContext as __vite__createHotContext } from "/tejas-portfolio-dist/@vite/client";import.meta.hot = __vite__createHotContext("/src/sections/Certification.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/tejas-portfolio-dist/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=ed49c6f3"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport1_react from "/tejas-portfolio-dist/node_modules/.vite/deps/react.js?v=ed49c6f3"; const React = __vite__cjsImport1_react.__esModule ? __vite__cjsImport1_react.default : __vite__cjsImport1_react; const useRef = __vite__cjsImport1_react["useRef"]; const useState = __vite__cjsImport1_react["useState"]; const useEffect = __vite__cjsImport1_react["useEffect"];
import HTMLFlipBook from "/tejas-portfolio-dist/node_modules/.vite/deps/react-pageflip.js?v=7d6ed781";
import { motion } from "/tejas-portfolio-dist/node_modules/.vite/deps/framer-motion.js?v=9fbf7331";
import MLCert from "/tejas-portfolio-dist/src/assets/ML_certi.jpeg?import";
import VLSICert from "/tejas-portfolio-dist/src/assets/VLSI_certi.jpeg?import";
import PYTCert from "/tejas-portfolio-dist/src/assets/PYT_certi.jpeg?import";
import PYTIBMCert from "/tejas-portfolio-dist/src/assets/PYT_IBM_certi.png?import";
import AWSINFOCert from "/tejas-portfolio-dist/src/assets/AWS_INFO_certi.png?import";
const certifications = [
  {
    title: "AWS Cloud Quest â Cloud Practitioner (Trained)",
    issuer: "AWS",
    date: "Apr 2026",
    description: "Completed the AWS Cloud Quest Cloud Practitioner training program in April 2026 â foundational cloud concepts, AWS core services, and best practices for cloud security and cost management.",
    skills: ["AWS", "Cloud Fundamentals", "Cloud Quest", "Cloud Practitioner"],
    image: PYTINFOCert,
    verifyLink: "#"
  },
  {
    title: "TechA AWS Solution Architect Certification",
    issuer: "Infosys Springboard",
    date: "Apr 10, 2026",
    description: "Successfully completed the TechA AWS Solution Architect certification program, covering cloud architecture fundamentals, AWS core services, and practical design principles for scalable and reliable solutions.",
    skills: ["AWS", "Solution Architecture", "Cloud Design", "EC2", "S3", "IAM"],
    image: AWSINFOCert,
    verifyLink: "https://verify.onwingspan.com"
  },
  {
    title: "Machine Learning for Cyber Security",
    issuer: "C-DAC Hyderabad",
    date: "Oct 2025",
    description: "An intensive program focused on the intersection of AI and security. Mastered anomaly detection, malware analysis using ML, and building robust defense systems against automated cyber threats.",
    skills: ["Machine Learning", "Cybersecurity", "Threat Detection", "Anomaly Detection", "Python"],
    image: MLCert,
    verifyLink: "#"
  },
  {
    title: "VLSI Design Engineer",
    issuer: "National Skill Development Corporation",
    date: "May 2025",
    description: "Professional certification covering the complete VLSI design flow. Expertise in RTL design using Verilog, functional verification, and logic synthesis for high-performance integrated circuits.",
    skills: ["VLSI", "Verilog", "RTL Design", "Digital Electronics", "ASIC Design", "FPGA"],
    image: VLSICert,
    verifyLink: "#"
  },
  {
    title: "Programming in Python",
    issuer: "SWAYAM MHRD",
    date: "Jan 2025",
    description: "Comprehensive certification from the Ministry of Education. Covered advanced data structures, algorithmic complexity, and software engineering principles using Python for real-world applications.",
    skills: ["Python", "Algorithms", "Data Structures", "Problem Solving", "Software Engineering"],
    image: PYTCert,
    verifyLink: "#"
  },
  {
    title: "Python 101 for Data Science",
    issuer: "Cognitive Class",
    date: "Dec 2024",
    description: "Mastered the fundamentals of data science using Python. Expertise in data manipulation with Pandas, numerical computing with NumPy, and data visualization with Matplotlib and Seaborn.",
    skills: ["Python", "Data Science", "Data Analysis", "Pandas", "NumPy", "Matplotlib"],
    image: PYTIBMCert,
    verifyLink: "https://courses.cognitiveclass.ai/certificates/64b0bc6710f643e8a47fb738a564401a"
  },
  {
    title: "Python Foundation Certification",
    issuer: "Infosys Springboard",
    date: "Aug 2024",
    description: "Validated core programming proficiency through the Infosys Springboard platform. Focused on writing clean, efficient code and understanding the underlying architecture of Python applications.",
    skills: ["Python", "Software Development", "Programming Fundamentals", "Clean Code", "OOP"],
    image: PYTINFOCert,
    verifyLink: "#"
  }
];
const PageCover = React.forwardRef(
  _c = ({ children }, ref) => /* @__PURE__ */ jsxDEV(
    "div",
    {
      ref,
      className: "relative h-full w-full overflow-hidden bg-[var(--bg-surface)]",
      style: {
        backgroundColor: "var(--bg-surface)",
        background: "var(--bg-surface)",
        boxShadow: "inset 0 0 0 1000px var(--bg-surface)"
      },
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-3 border-2 border-[var(--border-color)] rounded-lg" }, void 0, false, {
          fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
          lineNumber: 88,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-5 border border-[var(--border-color)]/50 rounded-lg" }, void 0, false, {
          fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
          lineNumber: 89,
          columnNumber: 5
        }, this),
        ["top-6 left-6", "top-6 right-6", "bottom-6 left-6", "bottom-6 right-6"].map(
          (pos, i) => /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: `absolute ${pos} w-4 h-4 border-[var(--accent)]/50 ${i < 2 ? "border-t-2" : "border-b-2"} ${i % 2 === 0 ? "border-l-2" : "border-r-2"}`
            },
            i,
            false,
            {
              fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
              lineNumber: 93,
              columnNumber: 3
            },
            this
          )
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "relative z-10 flex flex-col items-center justify-center h-full px-8 text-center", children }, void 0, false, {
          fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
          lineNumber: 101,
          columnNumber: 5
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
      lineNumber: 78,
      columnNumber: 1
    },
    this
  )
);
_c2 = PageCover;
const DetailPage = React.forwardRef(
  _c3 = ({ cert, pageNumber }, ref) => /* @__PURE__ */ jsxDEV(
    "div",
    {
      ref,
      className: "relative h-full w-full overflow-hidden bg-[var(--bg-surface)]",
      style: {
        backgroundColor: "var(--bg-surface)",
        background: "var(--bg-surface)",
        boxShadow: "inset 0 0 0 1000px var(--bg-surface)"
      },
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-black/40 to-transparent z-20 pointer-events-none" }, void 0, false, {
          fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
          lineNumber: 119,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 opacity-[0.03]", style: { backgroundImage: "radial-gradient(circle, var(--accent) 1px, transparent 1px)", backgroundSize: "16px 16px" } }, void 0, false, {
          fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
          lineNumber: 122,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-3 sm:inset-4 border border-[var(--border-color)] rounded-lg" }, void 0, false, {
          fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
          lineNumber: 125,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "relative z-10 flex flex-col h-full p-4 sm:p-8 md:p-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-2 sm:mb-6", children: /* @__PURE__ */ jsxDEV("div", { className: "inline-block px-3 sm:px-5 py-1 sm:py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30", children: /* @__PURE__ */ jsxDEV("span", { className: "text-xs sm:text-xs font-mono font-bold tracking-[0.05em] sm:tracking-[0.2em] uppercase text-[var(--accent)]", children: "Credential Record" }, void 0, false, {
            fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
            lineNumber: 131,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
            lineNumber: 130,
            columnNumber: 9
          }, this) }, void 0, false, {
            fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
            lineNumber: 129,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 sm:gap-4 mb-2 sm:mb-8", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex-1 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent" }, void 0, false, {
              fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
              lineNumber: 139,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "w-2 h-2 sm:w-2 sm:h-2 rotate-45 border border-[var(--accent)]/50" }, void 0, false, {
              fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
              lineNumber: 140,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex-1 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent" }, void 0, false, {
              fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
              lineNumber: 141,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
            lineNumber: 138,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-sm sm:text-xl md:text-2xl font-bold text-center text-white mb-1 sm:mb-2 leading-tight tracking-tight px-2 sm:px-4", children: cert.title }, void 0, false, {
              fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
              lineNumber: 146,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "absolute -top-3 -right-0.5 sm:-top-6 sm:-right-2 opacity-10 pointer-events-none", children: /* @__PURE__ */ jsxDEV("svg", { className: "w-6 h-6 sm:w-12 sm:h-12 text-[var(--accent)]", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDEV("path", { d: "M12 1L9 4H5V8L2 11V13L5 16V20H9L12 23L15 20H19V16L22 13V11L19 8V4H15L12 1M12 17A5 5 0 1 1 17 12A5 5 0 0 1 12 17M12 9A3 3 0 1 0 15 12A3 3 0 0 0 12 9Z" }, void 0, false, {
              fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
              lineNumber: 152,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
              lineNumber: 151,
              columnNumber: 11
            }, this) }, void 0, false, {
              fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
              lineNumber: 150,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
            lineNumber: 145,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-center text-xs sm:text-xs md:text-sm font-mono text-[var(--text-secondary)] mb-2 sm:mb-8", children: [
            "Issued by ",
            /* @__PURE__ */ jsxDEV("span", { className: "text-[var(--accent-light)] font-bold", children: cert.issuer }, void 0, false, {
              fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
              lineNumber: 159,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
            lineNumber: 158,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex-1 flex flex-col min-h-0 overflow-hidden px-1 sm:px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "flex-1 overflow-y-auto py-2 sm:py-2 custom-scrollbar", children: [
            /* @__PURE__ */ jsxDEV("p", { className: "text-xs sm:text-sm md:text-base text-[var(--text-secondary)] leading-relaxed text-center mb-3 italic opacity-90 border-l border-r border-[var(--accent)]/20 py-1 sm:py-2 px-2", children: [
              '"',
              cert.description,
              '"'
            ] }, void 0, true, {
              fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
              lineNumber: 165,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap justify-center gap-1.5 sm:gap-3 mb-3", children: cert.skills.map(
              (skill) => /* @__PURE__ */ jsxDEV(
                "span",
                {
                  className: "px-2 sm:px-3 py-1 sm:py-1 text-xs sm:text-[10px] md:text-xs font-mono rounded-none bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-color)] group-hover:border-[var(--accent)] transition-colors",
                  children: skill
                },
                skill,
                false,
                {
                  fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                  lineNumber: 172,
                  columnNumber: 11
                },
                this
              )
            ) }, void 0, false, {
              fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
              lineNumber: 170,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
            lineNumber: 164,
            columnNumber: 9
          }, this) }, void 0, false, {
            fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
            lineNumber: 163,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-auto pt-2 sm:pt-4 border-t border-[var(--border-color)]/30", children: /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-center text-xs sm:text-[10px] md:text-xs font-mono text-[var(--text-secondary)]", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-1 sm:gap-1", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-[var(--accent)]/60 text-[10px] sm:text-[7px] uppercase tracking-tighter", children: "Issue Date" }, void 0, false, {
                fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                lineNumber: 187,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "text-white/80 text-xs", children: cert.date }, void 0, false, {
                fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                lineNumber: 188,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
              lineNumber: 186,
              columnNumber: 11
            }, this),
            cert.verifyLink && cert.verifyLink !== "#" && /* @__PURE__ */ jsxDEV(
              "a",
              {
                href: cert.verifyLink,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "px-2 sm:px-3 py-1 sm:py-1 bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent-light)] hover:bg-[var(--accent)] hover:text-white transition-all duration-300 flex items-center gap-1 sm:gap-1.5 text-xs",
                children: [
                  "Verify ",
                  /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] sm:text-[10px]", children: "â" }, void 0, false, {
                    fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                    lineNumber: 197,
                    columnNumber: 22
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                lineNumber: 191,
                columnNumber: 9
              },
              this
            )
          ] }, void 0, true, {
            fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
            lineNumber: 185,
            columnNumber: 9
          }, this) }, void 0, false, {
            fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
            lineNumber: 184,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
          lineNumber: 127,
          columnNumber: 5
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
      lineNumber: 109,
      columnNumber: 1
    },
    this
  )
);
_c4 = DetailPage;
const ImagePage = React.forwardRef(
  _c5 = ({ cert, pageNumber }, ref) => /* @__PURE__ */ jsxDEV(
    "div",
    {
      ref,
      className: "relative h-full w-full overflow-hidden bg-[var(--bg-surface)]",
      style: {
        backgroundColor: "var(--bg-surface)",
        background: "var(--bg-surface)",
        boxShadow: "inset 0 0 0 1000px var(--bg-surface)"
      },
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-black/40 to-transparent z-20 pointer-events-none" }, void 0, false, {
          fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
          lineNumber: 218,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-4 border border-[var(--border-color)] rounded-lg" }, void 0, false, {
          fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
          lineNumber: 221,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "relative z-10 flex flex-col items-center justify-center h-full p-6 sm:p-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "mb-2 sm:mb-6 text-center", children: /* @__PURE__ */ jsxDEV("span", { className: "text-[9px] sm:text-xs font-mono font-medium tracking-[0.3em] uppercase text-[var(--text-secondary)]/60", children: "Visual Documentation" }, void 0, false, {
            fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
            lineNumber: 226,
            columnNumber: 9
          }, this) }, void 0, false, {
            fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
            lineNumber: 225,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex-1 flex items-center justify-center w-full px-1 sm:px-4 min-h-0", children: /* @__PURE__ */ jsxDEV("div", { className: "relative group/img", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "absolute -inset-1 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] rounded-lg blur opacity-20 group-hover/img:opacity-40 transition duration-500" }, void 0, false, {
              fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
              lineNumber: 234,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV(
              "img",
              {
                src: cert.image,
                alt: `${cert.title} Certificate`,
                className: "relative max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-[var(--border-color)] grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
              },
              void 0,
              false,
              {
                fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                lineNumber: 235,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, true, {
            fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
            lineNumber: 233,
            columnNumber: 9
          }, this) }, void 0, false, {
            fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
            lineNumber: 232,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
          lineNumber: 223,
          columnNumber: 5
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
      lineNumber: 208,
      columnNumber: 1
    },
    this
  )
);
_c6 = ImagePage;
const MobileFlipCard = ({ cert, isOpen, onToggle }) => /* @__PURE__ */ jsxDEV(
  motion.div,
  {
    layout: true,
    className: "rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)]/90 shadow-xl overflow-hidden",
    transition: { layout: { duration: 0.3, ease: [0.25, 0.8, 0.25, 1] } },
    children: [
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: onToggle,
          className: "w-full flex items-center justify-between px-4 py-4",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-lg border border-[var(--border-color)] bg-[var(--bg-base)] flex items-center justify-center overflow-hidden", children: /* @__PURE__ */ jsxDEV("img", { src: cert.image, alt: `${cert.title} thumb`, className: "max-w-full max-h-full object-contain" }, void 0, false, {
                fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                lineNumber: 259,
                columnNumber: 11
              }, this) }, void 0, false, {
                fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                lineNumber: 258,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "text-left", children: [
                /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--accent)]/70", children: "Credential" }, void 0, false, {
                  fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                  lineNumber: 262,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ jsxDEV("h3", { className: "text-base font-semibold text-white leading-snug", children: cert.title }, void 0, false, {
                  fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                  lineNumber: 263,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-[11px] text-[var(--text-secondary)]", children: [
                  cert.issuer,
                  " - ",
                  cert.date
                ] }, void 0, true, {
                  fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                  lineNumber: 264,
                  columnNumber: 11
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                lineNumber: 261,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
              lineNumber: 257,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-[var(--accent-light)] text-base font-mono", children: isOpen ? "-" : "+" }, void 0, false, {
              fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
              lineNumber: 269,
              columnNumber: 7
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
          lineNumber: 253,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: false,
          animate: { height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 },
          transition: { duration: 0.3 },
          className: "px-4 pb-4",
          style: { overflow: "hidden" },
          children: /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              initial: { rotateX: -90, opacity: 0 },
              animate: { rotateX: isOpen ? 0 : -90, opacity: isOpen ? 1 : 0 },
              transition: { duration: 0.35, ease: [0.25, 0.8, 0.25, 1] },
              className: "origin-top",
              children: [
                /* @__PURE__ */ jsxDEV("div", { className: "rounded-xl border border-[var(--border-color)] bg-black/40 overflow-hidden mb-3", children: /* @__PURE__ */ jsxDEV("img", { src: cert.image, alt: cert.title, className: "w-full object-cover" }, void 0, false, {
                  fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                  lineNumber: 286,
                  columnNumber: 11
                }, this) }, void 0, false, {
                  fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                  lineNumber: 285,
                  columnNumber: 9
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-white font-semibold mb-1", children: cert.title }, void 0, false, {
                  fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                  lineNumber: 288,
                  columnNumber: 9
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-[var(--text-secondary)] mb-3 italic", children: cert.description }, void 0, false, {
                  fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                  lineNumber: 289,
                  columnNumber: 9
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap gap-2 mb-3", children: cert.skills.map(
                  (skill) => /* @__PURE__ */ jsxDEV(
                    "span",
                    {
                      className: "px-2 py-1 text-[11px] font-mono rounded-md bg-[var(--bg-base)] border border-[var(--border-color)] text-[var(--text-secondary)]",
                      children: skill
                    },
                    skill,
                    false,
                    {
                      fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                      lineNumber: 292,
                      columnNumber: 9
                    },
                    this
                  )
                ) }, void 0, false, {
                  fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                  lineNumber: 290,
                  columnNumber: 9
                }, this),
                cert.verifyLink && cert.verifyLink !== "#" && /* @__PURE__ */ jsxDEV(
                  "a",
                  {
                    href: cert.verifyLink,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg border border-[var(--accent)]/40 text-[var(--accent-light)] hover:bg-[var(--accent)] hover:text-white transition-colors text-sm font-semibold",
                    children: "Verify ?"
                  },
                  void 0,
                  false,
                  {
                    fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                    lineNumber: 301,
                    columnNumber: 7
                  },
                  this
                )
              ]
            },
            void 0,
            true,
            {
              fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
              lineNumber: 279,
              columnNumber: 7
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
          lineNumber: 272,
          columnNumber: 5
        },
        this
      )
    ]
  },
  void 0,
  true,
  {
    fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
    lineNumber: 248,
    columnNumber: 1
  },
  this
);
_c7 = MobileFlipCard;
const Certification = () => {
  _s();
  const bookRef = useRef(null);
  const [screenSize, setScreenSize] = useState("desktop");
  const [openCard, setOpenCard] = useState(null);
  useEffect(() => {
    const check = () => {
      const w = window.innerWidth;
      if (w < 480) setScreenSize("xs");
      else if (w < 768) setScreenSize("sm");
      else
        setScreenSize("desktop");
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  const bookDimensions = {
    xs: { width: 200, height: 300, minWidth: 180, maxWidth: 220, minHeight: 280, maxHeight: 340 },
    sm: { width: 300, height: 420, minWidth: 260, maxWidth: 340, minHeight: 380, maxHeight: 480 },
    desktop: { width: 450, height: 550, minWidth: 300, maxWidth: 550, minHeight: 400, maxHeight: 680 }
  };
  const dims = bookDimensions[screenSize];
  const isMobile = screenSize !== "desktop";
  return /* @__PURE__ */ jsxDEV("section", { id: "certifications", className: "relative text-white py-12 md:py-20 overflow-hidden", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 pointer-events-none", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 left-0 w-96 h-96 rounded-full bg-indigo-900/20 blur-[120px]" }, void 0, false, {
        fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
        lineNumber: 345,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-0 right-0 w-96 h-96 rounded-full bg-rose-900/20 blur-[120px]" }, void 0, false, {
        fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
        lineNumber: 346,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
      lineNumber: 344,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "relative z-10 max-w-7xl mx-auto px-6 md:px-12", children: [
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          className: "mb-10 md:mb-14 flex flex-col gap-4",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-2 w-fit", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-mono uppercase tracking-widest text-[var(--accent-light)]", children: "05" }, void 0, false, {
                fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                lineNumber: 359,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "w-6 h-px bg-gradient-to-r from-[var(--accent)] to-transparent" }, void 0, false, {
                fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                lineNumber: 360,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
              lineNumber: 358,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl md:text-5xl font-bold text-white tracking-tight", children: "Certifications" }, void 0, false, {
              fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
              lineNumber: 362,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-[var(--text-secondary)] text-base md:text-lg font-light", children: isMobile ? "Swipe through my professional credentials" : "Flip through my professional certifications" }, void 0, false, {
              fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
              lineNumber: 365,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
          lineNumber: 351,
          columnNumber: 9
        },
        this
      ),
      isMobile ? /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          className: "grid grid-cols-1 gap-5",
          initial: { opacity: 0, y: 12 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: 0.2 },
          children: certifications.map(
            (cert) => /* @__PURE__ */ jsxDEV(
              MobileFlipCard,
              {
                cert,
                isOpen: openCard === cert.title,
                onToggle: () => setOpenCard(openCard === cert.title ? null : cert.title)
              },
              cert.title,
              false,
              {
                fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                lineNumber: 380,
                columnNumber: 11
              },
              this
            )
          )
        },
        void 0,
        false,
        {
          fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
          lineNumber: 372,
          columnNumber: 9
        },
        this
      ) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
        /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            className: "flex justify-center",
            initial: { opacity: 0, scale: 0.9 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true },
            transition: { duration: 0.8, delay: 0.2 },
            children: /* @__PURE__ */ jsxDEV(
              HTMLFlipBook,
              {
                ref: bookRef,
                width: dims.width,
                height: dims.height,
                size: "stretch",
                minWidth: dims.minWidth,
                maxWidth: dims.maxWidth,
                minHeight: dims.minHeight,
                maxHeight: dims.maxHeight,
                maxShadowOpacity: 0.5,
                showCover: true,
                mobileScrollSupport: true,
                className: "certification-book",
                style: {},
                flippingTime: 800,
                usePortrait: false,
                startZIndex: 0,
                autoSize: true,
                drawShadow: true,
                useMouseEvents: true,
                swipeDistance: 30,
                children: [
                  /* @__PURE__ */ jsxDEV(PageCover, { children: [
                    /* @__PURE__ */ jsxDEV("div", { className: "w-16 h-16 mb-4 rounded-full bg-[var(--accent)]/20 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("svg", { className: "w-8 h-8 text-[var(--accent)]", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsxDEV("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" }, void 0, false, {
                      fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                      lineNumber: 424,
                      columnNumber: 23
                    }, this) }, void 0, false, {
                      fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                      lineNumber: 423,
                      columnNumber: 21
                    }, this) }, void 0, false, {
                      fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                      lineNumber: 422,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV("h2", { className: "text-xl sm:text-2xl font-bold text-white mb-2", children: "My Certifications" }, void 0, false, {
                      fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                      lineNumber: 427,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV("p", { className: "text-[var(--text-secondary)] text-xs", children: "Click to open" }, void 0, false, {
                      fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                      lineNumber: 430,
                      columnNumber: 19
                    }, this)
                  ] }, void 0, true, {
                    fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                    lineNumber: 421,
                    columnNumber: 17
                  }, this),
                  certifications.flatMap(
                    (cert, idx) => [
                      /* @__PURE__ */ jsxDEV(DetailPage, { cert, pageNumber: idx * 2 + 1 }, `detail-${idx}`, false, {
                        fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                        lineNumber: 435,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ jsxDEV(ImagePage, { cert, pageNumber: idx * 2 + 2 }, `image-${idx}`, false, {
                        fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                        lineNumber: 436,
                        columnNumber: 15
                      }, this)
                    ]
                  ),
                  /* @__PURE__ */ jsxDEV(PageCover, { children: [
                    /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 mb-4 rounded-full bg-[var(--accent)]/20 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("svg", { className: "w-6 h-6 text-[var(--accent)]", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsxDEV("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" }, void 0, false, {
                      fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                      lineNumber: 443,
                      columnNumber: 23
                    }, this) }, void 0, false, {
                      fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                      lineNumber: 442,
                      columnNumber: 21
                    }, this) }, void 0, false, {
                      fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                      lineNumber: 441,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV("p", { className: "text-[var(--text-secondary)] text-xs", children: "Always Learning..." }, void 0, false, {
                      fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                      lineNumber: 446,
                      columnNumber: 19
                    }, this)
                  ] }, void 0, true, {
                    fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                    lineNumber: 440,
                    columnNumber: 17
                  }, this)
                ]
              },
              screenSize,
              true,
              {
                fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                lineNumber: 397,
                columnNumber: 15
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
            lineNumber: 390,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            className: "flex justify-center gap-4 mt-8",
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            viewport: { once: true },
            transition: { delay: 0.5 },
            children: [
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => bookRef.current?.pageFlip()?.flipPrev(),
                  className: "px-6 py-2.5 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 transition-all duration-300 text-sm",
                  children: "Previous"
                },
                void 0,
                false,
                {
                  fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                  lineNumber: 459,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => bookRef.current?.pageFlip()?.flipNext(),
                  className: "px-6 py-2.5 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 transition-all duration-300 text-sm",
                  children: "Next"
                },
                void 0,
                false,
                {
                  fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                  lineNumber: 465,
                  columnNumber: 15
                },
                this
              )
            ]
          },
          void 0,
          true,
          {
            fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
            lineNumber: 452,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
        lineNumber: 389,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
      lineNumber: 349,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
    lineNumber: 342,
    columnNumber: 5
  }, this);
};
_s(Certification, "C+pcxsIckWm2LmVi7cA47XvNCyc=");
_c8 = Certification;
export default Certification;
var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
$RefreshReg$(_c, "PageCover$React.forwardRef");
$RefreshReg$(_c2, "PageCover");
$RefreshReg$(_c3, "DetailPage$React.forwardRef");
$RefreshReg$(_c4, "DetailPage");
$RefreshReg$(_c5, "ImagePage$React.forwardRef");
$RefreshReg$(_c6, "ImagePage");
$RefreshReg$(_c7, "MobileFlipCard");
$RefreshReg$(_c8, "Certification");
import * as RefreshRuntime from "/tejas-portfolio-dist/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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QUFBQSxTQXFJQTtBQUVKO0FBQUVoQyxHQWxLSUQsZUFBYTtBQUFBLE1BQWJBO0FBb0tOLGVBQWVBO0FBQWMsSUFBQWhDLElBQUFTLEtBQUFFLEtBQUFNLEtBQUFFLEtBQUFDLEtBQUFXLEtBQUFtQztBQUFBLGFBQUFsRSxJQUFBO0FBQUEsYUFBQVMsS0FBQTtBQUFBLGFBQUFFLEtBQUE7QUFBQSxhQUFBTSxLQUFBO0FBQUEsYUFBQUUsS0FBQTtBQUFBLGFBQUFDLEtBQUE7QUFBQSxhQUFBVyxLQUFBO0FBQUEsYUFBQW1DLEtBQUEiLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSFRNTEZsaXBCb29rIiwibW90aW9uIiwiTUxDZXJ0IiwiVkxTSUNlcnQiLCJQWVRDZXJ0IiwiUFlUSUJNQ2VydCIsIkFXU0lORk9DZXJ0IiwiY2VydGlmaWNhdGlvbnMiLCJ0aXRsZSIsImlzc3VlciIsImRhdGUiLCJkZXNjcmlwdGlvbiIsInNraWxscyIsImltYWdlIiwiUFlUSU5GT0NlcnQiLCJ2ZXJpZnlMaW5rIiwiUGFnZUNvdmVyIiwiZm9yd2FyZFJlZiIsIl9jIiwiY2hpbGRyZW4iLCJyZWYiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kIiwiYm94U2hhZG93IiwibWFwIiwicG9zIiwiaSIsIl9jMiIsIkRldGFpbFBhZ2UiLCJfYzMiLCJjZXJ0IiwicGFnZU51bWJlciIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwic2tpbGwiLCJfYzQiLCJJbWFnZVBhZ2UiLCJfYzUiLCJfYzYiLCJNb2JpbGVGbGlwQ2FyZCIsImlzT3BlbiIsIm9uVG9nZ2xlIiwibGF5b3V0IiwiZHVyYXRpb24iLCJlYXNlIiwiaGVpZ2h0Iiwib3BhY2l0eSIsIm92ZXJmbG93Iiwicm90YXRlWCIsIl9jNyIsIkNlcnRpZmljYXRpb24iLCJfcyIsImJvb2tSZWYiLCJzY3JlZW5TaXplIiwic2V0U2NyZWVuU2l6ZSIsIm9wZW5DYXJkIiwic2V0T3BlbkNhcmQiLCJjaGVjayIsInciLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJib29rRGltZW5zaW9ucyIsInhzIiwid2lkdGgiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0Iiwic20iLCJkZXNrdG9wIiwiZGltcyIsImlzTW9iaWxlIiwieSIsIm9uY2UiLCJkZWxheSIsInNjYWxlIiwiZmxhdE1hcCIsImlkeCIsImN1cnJlbnQiLCJwYWdlRmxpcCIsImZsaXBQcmV2IiwiZmxpcE5leHQiLCJfYzgiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiQ2VydGlmaWNhdGlvbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSFRNTEZsaXBCb29rIGZyb20gXCJyZWFjdC1wYWdlZmxpcFwiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5cclxuLy8gSW1wb3J0IGNlcnRpZmljYXRlIGltYWdlc1xyXG5pbXBvcnQgTUxDZXJ0IGZyb20gXCIuLi9hc3NldHMvTUxfY2VydGkuanBlZ1wiO1xyXG5pbXBvcnQgVkxTSUNlcnQgZnJvbSBcIi4uL2Fzc2V0cy9WTFNJX2NlcnRpLmpwZWdcIjtcclxuaW1wb3J0IFBZVENlcnQgZnJvbSBcIi4uL2Fzc2V0cy9QWVRfY2VydGkuanBlZ1wiO1xyXG5pbXBvcnQgUFlUSUJNQ2VydCBmcm9tIFwiLi4vYXNzZXRzL1BZVF9JQk1fY2VydGkucG5nXCI7XHJcbmltcG9ydCBBV1NJTkZPQ2VydCBmcm9tIFwiLi4vYXNzZXRzL0FXU19JTkZPX2NlcnRpLnBuZ1wiO1xyXG5cclxuY29uc3QgY2VydGlmaWNhdGlvbnMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQVdTIENsb3VkIFF1ZXN0IOKAlCBDbG91ZCBQcmFjdGl0aW9uZXIgKFRyYWluZWQpXCIsXHJcbiAgICBpc3N1ZXI6IFwiQVdTXCIsXHJcbiAgICBkYXRlOiBcIkFwciAyMDI2XCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJDb21wbGV0ZWQgdGhlIEFXUyBDbG91ZCBRdWVzdCBDbG91ZCBQcmFjdGl0aW9uZXIgdHJhaW5pbmcgcHJvZ3JhbSBpbiBBcHJpbCAyMDI2IOKAlCBmb3VuZGF0aW9uYWwgY2xvdWQgY29uY2VwdHMsIEFXUyBjb3JlIHNlcnZpY2VzLCBhbmQgYmVzdCBwcmFjdGljZXMgZm9yIGNsb3VkIHNlY3VyaXR5IGFuZCBjb3N0IG1hbmFnZW1lbnQuXCIsXHJcbiAgICBza2lsbHM6IFtcIkFXU1wiLCBcIkNsb3VkIEZ1bmRhbWVudGFsc1wiLCBcIkNsb3VkIFF1ZXN0XCIsIFwiQ2xvdWQgUHJhY3RpdGlvbmVyXCJdLFxyXG4gICAgaW1hZ2U6IFBZVElORk9DZXJ0LFxyXG4gICAgdmVyaWZ5TGluazogXCIjXCJcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlRlY2hBIEFXUyBTb2x1dGlvbiBBcmNoaXRlY3QgQ2VydGlmaWNhdGlvblwiLFxyXG4gICAgaXNzdWVyOiBcIkluZm9zeXMgU3ByaW5nYm9hcmRcIixcclxuICAgIGRhdGU6IFwiQXByIDEwLCAyMDI2XCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJTdWNjZXNzZnVsbHkgY29tcGxldGVkIHRoZSBUZWNoQSBBV1MgU29sdXRpb24gQXJjaGl0ZWN0IGNlcnRpZmljYXRpb24gcHJvZ3JhbSwgY292ZXJpbmcgY2xvdWQgYXJjaGl0ZWN0dXJlIGZ1bmRhbWVudGFscywgQVdTIGNvcmUgc2VydmljZXMsIGFuZCBwcmFjdGljYWwgZGVzaWduIHByaW5jaXBsZXMgZm9yIHNjYWxhYmxlIGFuZCByZWxpYWJsZSBzb2x1dGlvbnMuXCIsXHJcbiAgICBza2lsbHM6IFtcIkFXU1wiLCBcIlNvbHV0aW9uIEFyY2hpdGVjdHVyZVwiLCBcIkNsb3VkIERlc2lnblwiLCBcIkVDMlwiLCBcIlMzXCIsIFwiSUFNXCJdLFxyXG4gICAgaW1hZ2U6IEFXU0lORk9DZXJ0LFxyXG4gICAgdmVyaWZ5TGluazogXCJodHRwczovL3ZlcmlmeS5vbndpbmdzcGFuLmNvbVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJNYWNoaW5lIExlYXJuaW5nIGZvciBDeWJlciBTZWN1cml0eVwiLFxyXG4gICAgaXNzdWVyOiBcIkMtREFDIEh5ZGVyYWJhZFwiLFxyXG4gICAgZGF0ZTogXCJPY3QgMjAyNVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiQW4gaW50ZW5zaXZlIHByb2dyYW0gZm9jdXNlZCBvbiB0aGUgaW50ZXJzZWN0aW9uIG9mIEFJIGFuZCBzZWN1cml0eS4gTWFzdGVyZWQgYW5vbWFseSBkZXRlY3Rpb24sIG1hbHdhcmUgYW5hbHlzaXMgdXNpbmcgTUwsIGFuZCBidWlsZGluZyByb2J1c3QgZGVmZW5zZSBzeXN0ZW1zIGFnYWluc3QgYXV0b21hdGVkIGN5YmVyIHRocmVhdHMuXCIsXHJcbiAgICBza2lsbHM6IFtcIk1hY2hpbmUgTGVhcm5pbmdcIiwgXCJDeWJlcnNlY3VyaXR5XCIsIFwiVGhyZWF0IERldGVjdGlvblwiLCBcIkFub21hbHkgRGV0ZWN0aW9uXCIsIFwiUHl0aG9uXCJdLFxyXG4gICAgaW1hZ2U6IE1MQ2VydCxcclxuICAgIHZlcmlmeUxpbms6IFwiI1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJWTFNJIERlc2lnbiBFbmdpbmVlclwiLFxyXG4gICAgaXNzdWVyOiBcIk5hdGlvbmFsIFNraWxsIERldmVsb3BtZW50IENvcnBvcmF0aW9uXCIsXHJcbiAgICBkYXRlOiBcIk1heSAyMDI1XCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJQcm9mZXNzaW9uYWwgY2VydGlmaWNhdGlvbiBjb3ZlcmluZyB0aGUgY29tcGxldGUgVkxTSSBkZXNpZ24gZmxvdy4gRXhwZXJ0aXNlIGluIFJUTCBkZXNpZ24gdXNpbmcgVmVyaWxvZywgZnVuY3Rpb25hbCB2ZXJpZmljYXRpb24sIGFuZCBsb2dpYyBzeW50aGVzaXMgZm9yIGhpZ2gtcGVyZm9ybWFuY2UgaW50ZWdyYXRlZCBjaXJjdWl0cy5cIixcclxuICAgIHNraWxsczogW1wiVkxTSVwiLCBcIlZlcmlsb2dcIiwgXCJSVEwgRGVzaWduXCIsIFwiRGlnaXRhbCBFbGVjdHJvbmljc1wiLCBcIkFTSUMgRGVzaWduXCIsIFwiRlBHQVwiXSxcclxuICAgIGltYWdlOiBWTFNJQ2VydCxcclxuICAgIHZlcmlmeUxpbms6IFwiI1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJQcm9ncmFtbWluZyBpbiBQeXRob25cIixcclxuICAgIGlzc3VlcjogXCJTV0FZQU0gTUhSRFwiLFxyXG4gICAgZGF0ZTogXCJKYW4gMjAyNVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiQ29tcHJlaGVuc2l2ZSBjZXJ0aWZpY2F0aW9uIGZyb20gdGhlIE1pbmlzdHJ5IG9mIEVkdWNhdGlvbi4gQ292ZXJlZCBhZHZhbmNlZCBkYXRhIHN0cnVjdHVyZXMsIGFsZ29yaXRobWljIGNvbXBsZXhpdHksIGFuZCBzb2Z0d2FyZSBlbmdpbmVlcmluZyBwcmluY2lwbGVzIHVzaW5nIFB5dGhvbiBmb3IgcmVhbC13b3JsZCBhcHBsaWNhdGlvbnMuXCIsXHJcbiAgICBza2lsbHM6IFtcIlB5dGhvblwiLCBcIkFsZ29yaXRobXNcIiwgXCJEYXRhIFN0cnVjdHVyZXNcIiwgXCJQcm9ibGVtIFNvbHZpbmdcIiwgXCJTb2Z0d2FyZSBFbmdpbmVlcmluZ1wiXSxcclxuICAgIGltYWdlOiBQWVRDZXJ0LFxyXG4gICAgdmVyaWZ5TGluazogXCIjXCJcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlB5dGhvbiAxMDEgZm9yIERhdGEgU2NpZW5jZVwiLFxyXG4gICAgaXNzdWVyOiBcIkNvZ25pdGl2ZSBDbGFzc1wiLFxyXG4gICAgZGF0ZTogXCJEZWMgMjAyNFwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiTWFzdGVyZWQgdGhlIGZ1bmRhbWVudGFscyBvZiBkYXRhIHNjaWVuY2UgdXNpbmcgUHl0aG9uLiBFeHBlcnRpc2UgaW4gZGF0YSBtYW5pcHVsYXRpb24gd2l0aCBQYW5kYXMsIG51bWVyaWNhbCBjb21wdXRpbmcgd2l0aCBOdW1QeSwgYW5kIGRhdGEgdmlzdWFsaXphdGlvbiB3aXRoIE1hdHBsb3RsaWIgYW5kIFNlYWJvcm4uXCIsXHJcbiAgICBza2lsbHM6IFtcIlB5dGhvblwiLCBcIkRhdGEgU2NpZW5jZVwiLCBcIkRhdGEgQW5hbHlzaXNcIiwgXCJQYW5kYXNcIiwgXCJOdW1QeVwiLCBcIk1hdHBsb3RsaWJcIl0sXHJcbiAgICBpbWFnZTogUFlUSUJNQ2VydCxcclxuICAgIHZlcmlmeUxpbms6IFwiaHR0cHM6Ly9jb3Vyc2VzLmNvZ25pdGl2ZWNsYXNzLmFpL2NlcnRpZmljYXRlcy82NGIwYmM2NzEwZjY0M2U4YTQ3ZmI3MzhhNTY0NDAxYVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJQeXRob24gRm91bmRhdGlvbiBDZXJ0aWZpY2F0aW9uXCIsXHJcbiAgICBpc3N1ZXI6IFwiSW5mb3N5cyBTcHJpbmdib2FyZFwiLFxyXG4gICAgZGF0ZTogXCJBdWcgMjAyNFwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVmFsaWRhdGVkIGNvcmUgcHJvZ3JhbW1pbmcgcHJvZmljaWVuY3kgdGhyb3VnaCB0aGUgSW5mb3N5cyBTcHJpbmdib2FyZCBwbGF0Zm9ybS4gRm9jdXNlZCBvbiB3cml0aW5nIGNsZWFuLCBlZmZpY2llbnQgY29kZSBhbmQgdW5kZXJzdGFuZGluZyB0aGUgdW5kZXJseWluZyBhcmNoaXRlY3R1cmUgb2YgUHl0aG9uIGFwcGxpY2F0aW9ucy5cIixcclxuICAgIHNraWxsczogW1wiUHl0aG9uXCIsIFwiU29mdHdhcmUgRGV2ZWxvcG1lbnRcIiwgXCJQcm9ncmFtbWluZyBGdW5kYW1lbnRhbHNcIiwgXCJDbGVhbiBDb2RlXCIsIFwiT09QXCJdLFxyXG4gICAgaW1hZ2U6IFBZVElORk9DZXJ0LFxyXG4gICAgdmVyaWZ5TGluazogXCIjXCJcclxuICB9LFxyXG5dO1xyXG5jb25zdCBQYWdlQ292ZXIgPSBSZWFjdC5mb3J3YXJkUmVmKCh7IGNoaWxkcmVuIH0sIHJlZikgPT4gKFxyXG4gIDxkaXZcclxuICAgIHJlZj17cmVmfVxyXG4gICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC1mdWxsIHctZnVsbCBvdmVyZmxvdy1oaWRkZW4gYmctW3ZhcigtLWJnLXN1cmZhY2UpXVwiXHJcbiAgICBzdHlsZT17e1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidmFyKC0tYmctc3VyZmFjZSlcIixcclxuICAgICAgYmFja2dyb3VuZDogXCJ2YXIoLS1iZy1zdXJmYWNlKVwiLFxyXG4gICAgICBib3hTaGFkb3c6IFwiaW5zZXQgMCAwIDAgMTAwMHB4IHZhcigtLWJnLXN1cmZhY2UpXCIsXHJcbiAgICB9fVxyXG4gID5cclxuICAgIHsvKiBEZWNvcmF0aXZlIGJvcmRlciAqL31cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMyBib3JkZXItMiBib3JkZXItW3ZhcigtLWJvcmRlci1jb2xvcildIHJvdW5kZWQtbGdcIiAvPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC01IGJvcmRlciBib3JkZXItW3ZhcigtLWJvcmRlci1jb2xvcildLzUwIHJvdW5kZWQtbGdcIiAvPlxyXG5cclxuICAgIHsvKiBDb3JuZXIgb3JuYW1lbnRzICovfVxyXG4gICAge1tcInRvcC02IGxlZnQtNlwiLCBcInRvcC02IHJpZ2h0LTZcIiwgXCJib3R0b20tNiBsZWZ0LTZcIiwgXCJib3R0b20tNiByaWdodC02XCJdLm1hcCgocG9zLCBpKSA9PiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgJHtwb3N9IHctNCBoLTQgYm9yZGVyLVt2YXIoLS1hY2NlbnQpXS81MCAke1xyXG4gICAgICAgICAgaSA8IDIgPyBcImJvcmRlci10LTJcIiA6IFwiYm9yZGVyLWItMlwiXHJcbiAgICAgICAgfSAke2kgJSAyID09PSAwID8gXCJib3JkZXItbC0yXCIgOiBcImJvcmRlci1yLTJcIn1gfVxyXG4gICAgICAvPlxyXG4gICAgKSl9XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtZnVsbCBweC04IHRleHQtY2VudGVyXCI+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4pKTtcclxuXHJcbi8vIExlZnQgcGFnZSAtIENlcnRpZmljYXRlIGRldGFpbHNcclxuY29uc3QgRGV0YWlsUGFnZSA9IFJlYWN0LmZvcndhcmRSZWYoKHsgY2VydCwgcGFnZU51bWJlciB9LCByZWYpID0+IChcclxuICA8ZGl2XHJcbiAgICByZWY9e3JlZn1cclxuICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtZnVsbCB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIGJnLVt2YXIoLS1iZy1zdXJmYWNlKV1cIlxyXG4gICAgc3R5bGU9e3tcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInZhcigtLWJnLXN1cmZhY2UpXCIsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwidmFyKC0tYmctc3VyZmFjZSlcIixcclxuICAgICAgYm94U2hhZG93OiBcImluc2V0IDAgMCAwIDEwMDBweCB2YXIoLS1iZy1zdXJmYWNlKVwiLFxyXG4gICAgfX1cclxuICA+XHJcbiAgICB7LyogU3BpbmUgc2hhZG93IChSaWdodCBzaWRlIGZvciBsZWZ0IHBhZ2UpICovfVxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wIHctOCBoLWZ1bGwgYmctZ3JhZGllbnQtdG8tbCBmcm9tLWJsYWNrLzQwIHRvLXRyYW5zcGFyZW50IHotMjAgcG9pbnRlci1ldmVudHMtbm9uZVwiIC8+XHJcblxyXG4gICAgey8qIFBhZ2UgdGV4dHVyZSAqL31cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBvcGFjaXR5LVswLjAzXVwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJyYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCB2YXIoLS1hY2NlbnQpIDFweCwgdHJhbnNwYXJlbnQgMXB4KVwiLCBiYWNrZ3JvdW5kU2l6ZTogXCIxNnB4IDE2cHhcIiB9fSAvPlxyXG5cclxuICAgIHsvKiBJbm5lciBib3JkZXIgKi99XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTMgc206aW5zZXQtNCBib3JkZXIgYm9yZGVyLVt2YXIoLS1ib3JkZXItY29sb3IpXSByb3VuZGVkLWxnXCIgLz5cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgZmxleCBmbGV4LWNvbCBoLWZ1bGwgcC00IHNtOnAtOCBtZDpwLTEwXCI+XHJcbiAgICAgIHsvKiBIZWFkZXIgcmliYm9uICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTIgc206bWItNlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHB4LTMgc206cHgtNSBweS0xIHNtOnB5LTEgcm91bmRlZC1mdWxsIGJnLVt2YXIoLS1hY2NlbnQpXS8xMCBib3JkZXIgYm9yZGVyLVt2YXIoLS1hY2NlbnQpXS8zMFwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBzbTp0ZXh0LXhzIGZvbnQtbW9ubyBmb250LWJvbGQgdHJhY2tpbmctWzAuMDVlbV0gc206dHJhY2tpbmctWzAuMmVtXSB1cHBlcmNhc2UgdGV4dC1bdmFyKC0tYWNjZW50KV1cIj5cclxuICAgICAgICAgICAgQ3JlZGVudGlhbCBSZWNvcmRcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogRGl2aWRlciAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBzbTpnYXAtNCBtYi0yIHNtOm1iLThcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBoLXB4IGJnLWdyYWRpZW50LXRvLXIgZnJvbS10cmFuc3BhcmVudCB2aWEtW3ZhcigtLWFjY2VudCldLzQwIHRvLXRyYW5zcGFyZW50XCIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMiBoLTIgc206dy0yIHNtOmgtMiByb3RhdGUtNDUgYm9yZGVyIGJvcmRlci1bdmFyKC0tYWNjZW50KV0vNTBcIiAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGgtcHggYmctZ3JhZGllbnQtdG8tciBmcm9tLXRyYW5zcGFyZW50IHZpYS1bdmFyKC0tYWNjZW50KV0vNDAgdG8tdHJhbnNwYXJlbnRcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBUaXRsZSAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXNtIHNtOnRleHQteGwgbWQ6dGV4dC0yeGwgZm9udC1ib2xkIHRleHQtY2VudGVyIHRleHQtd2hpdGUgbWItMSBzbTptYi0yIGxlYWRpbmctdGlnaHQgdHJhY2tpbmctdGlnaHQgcHgtMiBzbTpweC00XCI+XHJcbiAgICAgICAgICB7Y2VydC50aXRsZX1cclxuICAgICAgICA8L2gzPlxyXG4gICAgICAgIHsvKiBEZWNvcmF0aXZlIFNlYWwgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtdG9wLTMgLXJpZ2h0LTAuNSBzbTotdG9wLTYgc206LXJpZ2h0LTIgb3BhY2l0eS0xMCBwb2ludGVyLWV2ZW50cy1ub25lXCI+XHJcbiAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNiBoLTYgc206dy0xMiBzbTpoLTEyIHRleHQtW3ZhcigtLWFjY2VudCldXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0xMiAxTDkgNEg1VjhMMiAxMVYxM0w1IDE2VjIwSDlMMTIgMjNMMTUgMjBIMTlWMTZMMjIgMTNWMTFMMTkgOFY0SDE1TDEyIDFNMTIgMTdBNSA1IDAgMSAxIDE3IDEyQTUgNSAwIDAgMSAxMiAxN00xMiA5QTMgMyAwIDEgMCAxNSAxMkEzIDMgMCAwIDAgMTIgOVpcIiAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIElzc3VlciAqL31cclxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC14cyBzbTp0ZXh0LXhzIG1kOnRleHQtc20gZm9udC1tb25vIHRleHQtW3ZhcigtLXRleHQtc2Vjb25kYXJ5KV0gbWItMiBzbTptYi04XCI+XHJcbiAgICAgICAgSXNzdWVkIGJ5IDxzcGFuIGNsYXNzTmFtZT1cInRleHQtW3ZhcigtLWFjY2VudC1saWdodCldIGZvbnQtYm9sZFwiPntjZXJ0Lmlzc3Vlcn08L3NwYW4+XHJcbiAgICAgIDwvcD5cclxuXHJcbiAgICAgIHsvKiBEZXNjcmlwdGlvbiAmIFNraWxscyBDb250YWluZXIgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggZmxleC1jb2wgbWluLWgtMCBvdmVyZmxvdy1oaWRkZW4gcHgtMSBzbTpweC00XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgb3ZlcmZsb3cteS1hdXRvIHB5LTIgc206cHktMiBjdXN0b20tc2Nyb2xsYmFyXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHNtOnRleHQtc20gbWQ6dGV4dC1iYXNlIHRleHQtW3ZhcigtLXRleHQtc2Vjb25kYXJ5KV0gbGVhZGluZy1yZWxheGVkIHRleHQtY2VudGVyIG1iLTMgaXRhbGljIG9wYWNpdHktOTAgYm9yZGVyLWwgYm9yZGVyLXIgYm9yZGVyLVt2YXIoLS1hY2NlbnQpXS8yMCBweS0xIHNtOnB5LTIgcHgtMlwiPlxyXG4gICAgICAgICAgICBcIntjZXJ0LmRlc2NyaXB0aW9ufVwiXHJcbiAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgey8qIFNraWxscyAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgZ2FwLTEuNSBzbTpnYXAtMyBtYi0zXCI+XHJcbiAgICAgICAgICAgIHtjZXJ0LnNraWxscy5tYXAoKHNraWxsKSA9PiAoXHJcbiAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIGtleT17c2tpbGx9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0yIHNtOnB4LTMgcHktMSBzbTpweS0xIHRleHQteHMgc206dGV4dC1bMTBweF0gbWQ6dGV4dC14cyBmb250LW1vbm8gcm91bmRlZC1ub25lIGJnLVt2YXIoLS1iZy1iYXNlKV0gdGV4dC1bdmFyKC0tdGV4dC1zZWNvbmRhcnkpXSBib3JkZXIgYm9yZGVyLVt2YXIoLS1ib3JkZXItY29sb3IpXSBncm91cC1ob3Zlcjpib3JkZXItW3ZhcigtLWFjY2VudCldIHRyYW5zaXRpb24tY29sb3JzXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7c2tpbGx9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBGb290ZXIgaW5mbyAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC1hdXRvIHB0LTIgc206cHQtNCBib3JkZXItdCBib3JkZXItW3ZhcigtLWJvcmRlci1jb2xvcildLzMwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdGV4dC14cyBzbTp0ZXh0LVsxMHB4XSBtZDp0ZXh0LXhzIGZvbnQtbW9ubyB0ZXh0LVt2YXIoLS10ZXh0LXNlY29uZGFyeSldXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTEgc206Z2FwLTFcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bdmFyKC0tYWNjZW50KV0vNjAgdGV4dC1bMTBweF0gc206dGV4dC1bN3B4XSB1cHBlcmNhc2UgdHJhY2tpbmctdGlnaHRlclwiPklzc3VlIERhdGU8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGUvODAgdGV4dC14c1wiPntjZXJ0LmRhdGV9PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7Y2VydC52ZXJpZnlMaW5rICYmIGNlcnQudmVyaWZ5TGluayAhPT0gXCIjXCIgJiYgKFxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9e2NlcnQudmVyaWZ5TGlua31cclxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTIgc206cHgtMyBweS0xIHNtOnB5LTEgYmctW3ZhcigtLWFjY2VudCldLzEwIGJvcmRlciBib3JkZXItW3ZhcigtLWFjY2VudCldLzMwIHRleHQtW3ZhcigtLWFjY2VudC1saWdodCldIGhvdmVyOmJnLVt2YXIoLS1hY2NlbnQpXSBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSBzbTpnYXAtMS41IHRleHQteHNcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgVmVyaWZ5IDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHNtOnRleHQtWzEwcHhdXCI+4oaXPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4pKTtcclxuXHJcbi8vIFJpZ2h0IHBhZ2UgLSBDZXJ0aWZpY2F0ZSBpbWFnZVxyXG5jb25zdCBJbWFnZVBhZ2UgPSBSZWFjdC5mb3J3YXJkUmVmKCh7IGNlcnQsIHBhZ2VOdW1iZXIgfSwgcmVmKSA9PiAoXHJcbiAgPGRpdlxyXG4gICAgcmVmPXtyZWZ9XHJcbiAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLWZ1bGwgdy1mdWxsIG92ZXJmbG93LWhpZGRlbiBiZy1bdmFyKC0tYmctc3VyZmFjZSldXCJcclxuICAgIHN0eWxlPXt7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ2YXIoLS1iZy1zdXJmYWNlKVwiLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcInZhcigtLWJnLXN1cmZhY2UpXCIsXHJcbiAgICAgIGJveFNoYWRvdzogXCJpbnNldCAwIDAgMCAxMDAwcHggdmFyKC0tYmctc3VyZmFjZSlcIixcclxuICAgIH19XHJcbiAgPlxyXG4gICAgey8qIFNwaW5lIHNoYWRvdyAoTGVmdCBzaWRlIGZvciByaWdodCBwYWdlKSAqL31cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctOCBoLWZ1bGwgYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsYWNrLzQwIHRvLXRyYW5zcGFyZW50IHotMjAgcG9pbnRlci1ldmVudHMtbm9uZVwiIC8+XHJcblxyXG4gICAgey8qIElubmVyIGJvcmRlciAqL31cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtNCBib3JkZXIgYm9yZGVyLVt2YXIoLS1ib3JkZXItY29sb3IpXSByb3VuZGVkLWxnXCIgLz5cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1mdWxsIHAtNiBzbTpwLTEwXCI+XHJcbiAgICAgIHsvKiBTbWFsbCBsYWJlbCAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yIHNtOm1iLTYgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVs5cHhdIHNtOnRleHQteHMgZm9udC1tb25vIGZvbnQtbWVkaXVtIHRyYWNraW5nLVswLjNlbV0gdXBwZXJjYXNlIHRleHQtW3ZhcigtLXRleHQtc2Vjb25kYXJ5KV0vNjBcIj5cclxuICAgICAgICAgIFZpc3VhbCBEb2N1bWVudGF0aW9uXHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBDZXJ0aWZpY2F0ZSBpbWFnZSAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIHB4LTEgc206cHgtNCBtaW4taC0wXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBncm91cC9pbWdcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLWluc2V0LTEgYmctZ3JhZGllbnQtdG8tciBmcm9tLVt2YXIoLS1hY2NlbnQpXSB0by1bdmFyKC0tYWNjZW50LWxpZ2h0KV0gcm91bmRlZC1sZyBibHVyIG9wYWNpdHktMjAgZ3JvdXAtaG92ZXIvaW1nOm9wYWNpdHktNDAgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDBcIj48L2Rpdj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPXtjZXJ0LmltYWdlfVxyXG4gICAgICAgICAgICBhbHQ9e2Ake2NlcnQudGl0bGV9IENlcnRpZmljYXRlYH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWF4LXctZnVsbCBtYXgtaC1mdWxsIG9iamVjdC1jb250YWluIHJvdW5kZWQtbGcgc2hhZG93LTJ4bCBib3JkZXIgYm9yZGVyLVt2YXIoLS1ib3JkZXItY29sb3IpXSBncmF5c2NhbGUtWzAuMl0gaG92ZXI6Z3JheXNjYWxlLTAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbikpO1xyXG5cclxuLy8gTW9iaWxlIGZsaXAtdXAgY2FyZCAocGhvbmUgdmlldylcclxuY29uc3QgTW9iaWxlRmxpcENhcmQgPSAoeyBjZXJ0LCBpc09wZW4sIG9uVG9nZ2xlIH0pID0+IChcclxuICA8bW90aW9uLmRpdlxyXG4gICAgbGF5b3V0XHJcbiAgICBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLVt2YXIoLS1ib3JkZXItY29sb3IpXSBiZy1bdmFyKC0tYmctc3VyZmFjZSldLzkwIHNoYWRvdy14bCBvdmVyZmxvdy1oaWRkZW5cIlxyXG4gICAgdHJhbnNpdGlvbj17eyBsYXlvdXQ6IHsgZHVyYXRpb246IDAuMywgZWFzZTogWzAuMjUsIDAuOCwgMC4yNSwgMV0gfSB9fVxyXG4gID5cclxuICAgIDxidXR0b25cclxuICAgICAgb25DbGljaz17b25Ub2dnbGV9XHJcbiAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtNCBweS00XCJcclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMiBoLTEyIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1bdmFyKC0tYm9yZGVyLWNvbG9yKV0gYmctW3ZhcigtLWJnLWJhc2UpXSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgIDxpbWcgc3JjPXtjZXJ0LmltYWdlfSBhbHQ9e2Ake2NlcnQudGl0bGV9IHRodW1iYH0gY2xhc3NOYW1lPVwibWF4LXctZnVsbCBtYXgtaC1mdWxsIG9iamVjdC1jb250YWluXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gZm9udC1tb25vIHVwcGVyY2FzZSB0cmFja2luZy1bMC4yZW1dIHRleHQtW3ZhcigtLWFjY2VudCldLzcwXCI+Q3JlZGVudGlhbDwvcD5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIGxlYWRpbmctc251Z1wiPntjZXJ0LnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LVt2YXIoLS10ZXh0LXNlY29uZGFyeSldXCI+XHJcbiAgICAgICAgICAgIHtjZXJ0Lmlzc3Vlcn0gLSB7Y2VydC5kYXRlfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bdmFyKC0tYWNjZW50LWxpZ2h0KV0gdGV4dC1iYXNlIGZvbnQtbW9ub1wiPntpc09wZW4gPyBcIi1cIiA6IFwiK1wifTwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG5cclxuICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgIGluaXRpYWw9e2ZhbHNlfVxyXG4gICAgICBhbmltYXRlPXt7IGhlaWdodDogaXNPcGVuID8gXCJhdXRvXCIgOiAwLCBvcGFjaXR5OiBpc09wZW4gPyAxIDogMCB9fVxyXG4gICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjMgfX1cclxuICAgICAgY2xhc3NOYW1lPVwicHgtNCBwYi00XCJcclxuICAgICAgc3R5bGU9e3sgb3ZlcmZsb3c6IFwiaGlkZGVuXCIgfX1cclxuICAgID5cclxuICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICBpbml0aWFsPXt7IHJvdGF0ZVg6IC05MCwgb3BhY2l0eTogMCB9fVxyXG4gICAgICAgIGFuaW1hdGU9e3sgcm90YXRlWDogaXNPcGVuID8gMCA6IC05MCwgb3BhY2l0eTogaXNPcGVuID8gMSA6IDAgfX1cclxuICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjM1LCBlYXNlOiBbMC4yNSwgMC44LCAwLjI1LCAxXSB9fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm9yaWdpbi10b3BcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIGJvcmRlciBib3JkZXItW3ZhcigtLWJvcmRlci1jb2xvcildIGJnLWJsYWNrLzQwIG92ZXJmbG93LWhpZGRlbiBtYi0zXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz17Y2VydC5pbWFnZX0gYWx0PXtjZXJ0LnRpdGxlfSBjbGFzc05hbWU9XCJ3LWZ1bGwgb2JqZWN0LWNvdmVyXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBtYi0xXCI+e2NlcnQudGl0bGV9PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bdmFyKC0tdGV4dC1zZWNvbmRhcnkpXSBtYi0zIGl0YWxpY1wiPntjZXJ0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC0yIG1iLTNcIj5cclxuICAgICAgICAgIHtjZXJ0LnNraWxscy5tYXAoKHNraWxsKSA9PiAoXHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAga2V5PXtza2lsbH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0yIHB5LTEgdGV4dC1bMTFweF0gZm9udC1tb25vIHJvdW5kZWQtbWQgYmctW3ZhcigtLWJnLWJhc2UpXSBib3JkZXIgYm9yZGVyLVt2YXIoLS1ib3JkZXItY29sb3IpXSB0ZXh0LVt2YXIoLS10ZXh0LXNlY29uZGFyeSldXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtza2lsbH1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge2NlcnQudmVyaWZ5TGluayAmJiBjZXJ0LnZlcmlmeUxpbmsgIT09IFwiI1wiICYmIChcclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWY9e2NlcnQudmVyaWZ5TGlua31cclxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMSBweC0zIHB5LTIgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLVt2YXIoLS1hY2NlbnQpXS80MCB0ZXh0LVt2YXIoLS1hY2NlbnQtbGlnaHQpXSBob3ZlcjpiZy1bdmFyKC0tYWNjZW50KV0gaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9ycyB0ZXh0LXNtIGZvbnQtc2VtaWJvbGRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBWZXJpZnkgP1xyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgIDwvbW90aW9uLmRpdj5cclxuICA8L21vdGlvbi5kaXY+XHJcbik7XHJcblxyXG5jb25zdCBDZXJ0aWZpY2F0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJvb2tSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgW3NjcmVlblNpemUsIHNldFNjcmVlblNpemVdID0gdXNlU3RhdGUoXCJkZXNrdG9wXCIpO1xyXG4gIGNvbnN0IFtvcGVuQ2FyZCwgc2V0T3BlbkNhcmRdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBjaGVjayA9ICgpID0+IHtcclxuICAgICAgY29uc3QgdyA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICBpZiAodyA8IDQ4MCkgc2V0U2NyZWVuU2l6ZShcInhzXCIpO1xyXG4gICAgICBlbHNlIGlmICh3IDwgNzY4KSBzZXRTY3JlZW5TaXplKFwic21cIik7XHJcbiAgICAgIGVsc2Ugc2V0U2NyZWVuU2l6ZShcImRlc2t0b3BcIik7XHJcbiAgICB9O1xyXG4gICAgY2hlY2soKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGNoZWNrKTtcclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBjaGVjayk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBib29rRGltZW5zaW9ucyA9IHtcclxuICAgIHhzOiB7IHdpZHRoOiAyMDAsIGhlaWdodDogMzAwLCBtaW5XaWR0aDogMTgwLCBtYXhXaWR0aDogMjIwLCBtaW5IZWlnaHQ6IDI4MCwgbWF4SGVpZ2h0OiAzNDAgfSxcclxuICAgIHNtOiB7IHdpZHRoOiAzMDAsIGhlaWdodDogNDIwLCBtaW5XaWR0aDogMjYwLCBtYXhXaWR0aDogMzQwLCBtaW5IZWlnaHQ6IDM4MCwgbWF4SGVpZ2h0OiA0ODAgfSxcclxuICAgIGRlc2t0b3A6IHsgd2lkdGg6IDQ1MCwgaGVpZ2h0OiA1NTAsIG1pbldpZHRoOiAzMDAsIG1heFdpZHRoOiA1NTAsIG1pbkhlaWdodDogNDAwLCBtYXhIZWlnaHQ6IDY4MCB9LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRpbXMgPSBib29rRGltZW5zaW9uc1tzY3JlZW5TaXplXTtcclxuICBjb25zdCBpc01vYmlsZSA9IHNjcmVlblNpemUgIT09IFwiZGVza3RvcFwiO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJjZXJ0aWZpY2F0aW9uc1wiIGNsYXNzTmFtZT1cInJlbGF0aXZlIHRleHQtd2hpdGUgcHktMTIgbWQ6cHktMjAgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgIHsvKiBCYWNrZ3JvdW5kIGdsb3cgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBwb2ludGVyLWV2ZW50cy1ub25lXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgdy05NiBoLTk2IHJvdW5kZWQtZnVsbCBiZy1pbmRpZ28tOTAwLzIwIGJsdXItWzEyMHB4XVwiIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMCByaWdodC0wIHctOTYgaC05NiByb3VuZGVkLWZ1bGwgYmctcm9zZS05MDAvMjAgYmx1ci1bMTIwcHhdXCIgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgbWF4LXctN3hsIG14LWF1dG8gcHgtNiBtZDpweC0xMlwiPlxyXG4gICAgICAgIHsvKiBUaXRsZSAqL31cclxuICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWItMTAgbWQ6bWItMTQgZmxleCBmbGV4LWNvbCBnYXAtNFwiXHJcbiAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwIH19XHJcbiAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB5OiAwIH19XHJcbiAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XHJcbiAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjYgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB3LWZpdFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtbW9ubyB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IHRleHQtW3ZhcigtLWFjY2VudC1saWdodCldXCI+MDU8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInctNiBoLXB4IGJnLWdyYWRpZW50LXRvLXIgZnJvbS1bdmFyKC0tYWNjZW50KV0gdG8tdHJhbnNwYXJlbnRcIj48L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBtZDp0ZXh0LTV4bCBmb250LWJvbGQgdGV4dC13aGl0ZSB0cmFja2luZy10aWdodFwiPlxyXG4gICAgICAgICAgICBDZXJ0aWZpY2F0aW9uc1xyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtW3ZhcigtLXRleHQtc2Vjb25kYXJ5KV0gdGV4dC1iYXNlIG1kOnRleHQtbGcgZm9udC1saWdodFwiPlxyXG4gICAgICAgICAgICB7aXNNb2JpbGUgPyBcIlN3aXBlIHRocm91Z2ggbXkgcHJvZmVzc2lvbmFsIGNyZWRlbnRpYWxzXCIgOiBcIkZsaXAgdGhyb3VnaCBteSBwcm9mZXNzaW9uYWwgY2VydGlmaWNhdGlvbnNcIn1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L21vdGlvbi5kaXY+XHJcblxyXG4gICAgICAgIHsvKiBCb29rICovfVxyXG4gICAgICAgIHtpc01vYmlsZSA/IChcclxuICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTVcIlxyXG4gICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDEyIH19XHJcbiAgICAgICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cclxuICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjYsIGRlbGF5OiAwLjIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2NlcnRpZmljYXRpb25zLm1hcCgoY2VydCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxNb2JpbGVGbGlwQ2FyZFxyXG4gICAgICAgICAgICAgICAga2V5PXtjZXJ0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgY2VydD17Y2VydH1cclxuICAgICAgICAgICAgICAgIGlzT3Blbj17b3BlbkNhcmQgPT09IGNlcnQudGl0bGV9XHJcbiAgICAgICAgICAgICAgICBvblRvZ2dsZT17KCkgPT4gc2V0T3BlbkNhcmQob3BlbkNhcmQgPT09IGNlcnQudGl0bGUgPyBudWxsIDogY2VydC50aXRsZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCBzY2FsZTogMC45IH19XHJcbiAgICAgICAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgc2NhbGU6IDEgfX1cclxuICAgICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC44LCBkZWxheTogMC4yIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SFRNTEZsaXBCb29rXHJcbiAgICAgICAgICAgICAgICBrZXk9e3NjcmVlblNpemV9XHJcbiAgICAgICAgICAgICAgICByZWY9e2Jvb2tSZWZ9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17ZGltcy53aWR0aH1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17ZGltcy5oZWlnaHR9XHJcbiAgICAgICAgICAgICAgICBzaXplPVwic3RyZXRjaFwiXHJcbiAgICAgICAgICAgICAgICBtaW5XaWR0aD17ZGltcy5taW5XaWR0aH1cclxuICAgICAgICAgICAgICAgIG1heFdpZHRoPXtkaW1zLm1heFdpZHRofVxyXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0PXtkaW1zLm1pbkhlaWdodH1cclxuICAgICAgICAgICAgICAgIG1heEhlaWdodD17ZGltcy5tYXhIZWlnaHR9XHJcbiAgICAgICAgICAgICAgICBtYXhTaGFkb3dPcGFjaXR5PXswLjV9XHJcbiAgICAgICAgICAgICAgICBzaG93Q292ZXI9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBtb2JpbGVTY3JvbGxTdXBwb3J0PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2VydGlmaWNhdGlvbi1ib29rXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7fX1cclxuICAgICAgICAgICAgICAgIGZsaXBwaW5nVGltZT17ODAwfVxyXG4gICAgICAgICAgICAgICAgdXNlUG9ydHJhaXQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgc3RhcnRaSW5kZXg9ezB9XHJcbiAgICAgICAgICAgICAgICBhdXRvU2l6ZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGRyYXdTaGFkb3c9e3RydWV9XHJcbiAgICAgICAgICAgICAgICB1c2VNb3VzZUV2ZW50cz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHN3aXBlRGlzdGFuY2U9ezMwfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsvKiBGcm9udCBDb3ZlciAqL31cclxuICAgICAgICAgICAgICAgIDxQYWdlQ292ZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xNiBoLTE2IG1iLTQgcm91bmRlZC1mdWxsIGJnLVt2YXIoLS1hY2NlbnQpXS8yMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy04IGgtOCB0ZXh0LVt2YXIoLS1hY2NlbnQpXVwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBkPVwiTTkgMTJsMiAyIDQtNE03LjgzNSA0LjY5N2EzLjQyIDMuNDIgMCAwMDEuOTQ2LS44MDYgMy40MiAzLjQyIDAgMDE0LjQzOCAwIDMuNDIgMy40MiAwIDAwMS45NDYuODA2IDMuNDIgMy40MiAwIDAxMy4xMzggMy4xMzggMy40MiAzLjQyIDAgMDAuODA2IDEuOTQ2IDMuNDIgMy40MiAwIDAxMCA0LjQzOCAzLjQyIDMuNDIgMCAwMC0uODA2IDEuOTQ2IDMuNDIgMy40MiAwIDAxLTMuMTM4IDMuMTM4IDMuNDIgMy40MiAwIDAwLTEuOTQ2LjgwNiAzLjQyIDMuNDIgMCAwMS00LjQzOCAwIDMuNDIgMy40MiAwIDAwLTEuOTQ2LS44MDYgMy40MiAzLjQyIDAgMDEtMy4xMzgtMy4xMzggMy40MiAzLjQyIDAgMDAtLjgwNi0xLjk0NiAzLjQyIDMuNDIgMCAwMTAtNC40MzggMy40MiAzLjQyIDAgMDAuODA2LTEuOTQ2IDMuNDIgMy40MiAwIDAxMy4xMzgtMy4xMzh6XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIHNtOnRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICBNeSBDZXJ0aWZpY2F0aW9uc1xyXG4gICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVt2YXIoLS10ZXh0LXNlY29uZGFyeSldIHRleHQteHNcIj5DbGljayB0byBvcGVuPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9QYWdlQ292ZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIENlcnRpZmljYXRpb24gcGFpcnM6IERldGFpbCAobGVmdCkgKyBJbWFnZSAocmlnaHQpICovfVxyXG4gICAgICAgICAgICAgICAge2NlcnRpZmljYXRpb25zLmZsYXRNYXAoKGNlcnQsIGlkeCkgPT4gW1xyXG4gICAgICAgICAgICAgICAgICA8RGV0YWlsUGFnZSBrZXk9e2BkZXRhaWwtJHtpZHh9YH0gY2VydD17Y2VydH0gcGFnZU51bWJlcj17aWR4ICogMiArIDF9IC8+LCBcclxuICAgICAgICAgICAgICAgICAgPEltYWdlUGFnZSBrZXk9e2BpbWFnZS0ke2lkeH1gfSBjZXJ0PXtjZXJ0fSBwYWdlTnVtYmVyPXtpZHggKiAyICsgMn0gLz4sIFxyXG4gICAgICAgICAgICAgICAgXSl9XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIEJhY2sgQ292ZXIgKi99XHJcbiAgICAgICAgICAgICAgICA8UGFnZUNvdmVyPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTIgaC0xMiBtYi00IHJvdW5kZWQtZnVsbCBiZy1bdmFyKC0tYWNjZW50KV0vMjAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNiBoLTYgdGV4dC1bdmFyKC0tYWNjZW50KV1cIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgZD1cIk0xMiA2LjI1M3YxM20wLTEzQzEwLjgzMiA1LjQ3NyA5LjI0NiA1IDcuNSA1UzQuMTY4IDUuNDc3IDMgNi4yNTN2MTNDNC4xNjggMTguNDc3IDUuNzU0IDE4IDcuNSAxOHMzLjMzMi40NzcgNC41IDEuMjUzbTAtMTNDMTMuMTY4IDUuNDc3IDE0Ljc1NCA1IDE2LjUgNWMxLjc0NyAwIDMuMzMyLjQ3NyA0LjUgMS4yNTN2MTNDMTkuODMyIDE4LjQ3NyAxOC4yNDcgMTggMTYuNSAxOGMtMS43NDYgMC0zLjMzMi40NzctNC41IDEuMjUzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtW3ZhcigtLXRleHQtc2Vjb25kYXJ5KV0gdGV4dC14c1wiPkFsd2F5cyBMZWFybmluZy4uLjwvcD5cclxuICAgICAgICAgICAgICAgIDwvUGFnZUNvdmVyPlxyXG4gICAgICAgICAgICAgIDwvSFRNTEZsaXBCb29rPlxyXG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogTmF2aWdhdGlvbiBidXR0b25zICovfVxyXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgZ2FwLTQgbXQtOFwiXHJcbiAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XHJcbiAgICAgICAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSB9fVxyXG4gICAgICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAwLjUgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGJvb2tSZWYuY3VycmVudD8ucGFnZUZsaXAoKT8uZmxpcFByZXYoKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMi41IHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci13aGl0ZS8yMCB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgaG92ZXI6Ymctd2hpdGUvNSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgdGV4dC1zbVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgUHJldmlvdXNcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBib29rUmVmLmN1cnJlbnQ/LnBhZ2VGbGlwKCk/LmZsaXBOZXh0KCl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTIuNSByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItd2hpdGUvMjAgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIGhvdmVyOmJnLXdoaXRlLzUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIHRleHQtc21cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENlcnRpZmljYXRpb247XHJcbiJdLCJmaWxlIjoiQzovVXNlcnMvdGVqYXNzc3V0aHJhdmUvRG93bmxvYWRzL3RlamFzLXMtc3V0aHJhdmUtcG9ydGZvbGlvL3NyYy9zZWN0aW9ucy9DZXJ0aWZpY2F0aW9uLmpzeCJ9
