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
    image: AWSINFOCert,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBdUZJLFNBNlNNLFVBN1NOOztBQXZGSixPQUFPQSxTQUFTQyxRQUFRQyxVQUFVQyxpQkFBaUI7QUFDbkQsT0FBT0Msa0JBQWtCO0FBQ3pCLFNBQVNDLGNBQWM7QUFHdkIsT0FBT0MsWUFBWTtBQUNuQixPQUFPQyxjQUFjO0FBQ3JCLE9BQU9DLGFBQWE7QUFDcEIsT0FBT0MsZ0JBQWdCO0FBQ3ZCLE9BQU9DLGlCQUFpQjtBQUV4QixNQUFNQyxpQkFBaUI7QUFBQSxFQUNyQjtBQUFBLElBQ0VDLE9BQU87QUFBQSxJQUNQQyxRQUFRO0FBQUEsSUFDUkMsTUFBTTtBQUFBLElBQ05DLGFBQWE7QUFBQSxJQUNiQyxRQUFRLENBQUMsT0FBTyxzQkFBc0IsZUFBZSxvQkFBb0I7QUFBQSxJQUN6RUMsT0FBT1A7QUFBQUEsSUFDUFEsWUFBWTtBQUFBLEVBQ2Q7QUFBQSxFQUNBO0FBQUEsSUFDRU4sT0FBTztBQUFBLElBQ1BDLFFBQVE7QUFBQSxJQUNSQyxNQUFNO0FBQUEsSUFDTkMsYUFBYTtBQUFBLElBQ2JDLFFBQVEsQ0FBQyxPQUFPLHlCQUF5QixnQkFBZ0IsT0FBTyxNQUFNLEtBQUs7QUFBQSxJQUMzRUMsT0FBT1A7QUFBQUEsSUFDUFEsWUFBWTtBQUFBLEVBQ2Q7QUFBQSxFQUNBO0FBQUEsSUFDRU4sT0FBTztBQUFBLElBQ1BDLFFBQVE7QUFBQSxJQUNSQyxNQUFNO0FBQUEsSUFDTkMsYUFBYTtBQUFBLElBQ2JDLFFBQVEsQ0FBQyxvQkFBb0IsaUJBQWlCLG9CQUFvQixxQkFBcUIsUUFBUTtBQUFBLElBQy9GQyxPQUFPWDtBQUFBQSxJQUNQWSxZQUFZO0FBQUEsRUFDZDtBQUFBLEVBQ0E7QUFBQSxJQUNFTixPQUFPO0FBQUEsSUFDUEMsUUFBUTtBQUFBLElBQ1JDLE1BQU07QUFBQSxJQUNOQyxhQUFhO0FBQUEsSUFDYkMsUUFBUSxDQUFDLFFBQVEsV0FBVyxjQUFjLHVCQUF1QixlQUFlLE1BQU07QUFBQSxJQUN0RkMsT0FBT1Y7QUFBQUEsSUFDUFcsWUFBWTtBQUFBLEVBQ2Q7QUFBQSxFQUNBO0FBQUEsSUFDRU4sT0FBTztBQUFBLElBQ1BDLFFBQVE7QUFBQSxJQUNSQyxNQUFNO0FBQUEsSUFDTkMsYUFBYTtBQUFBLElBQ2JDLFFBQVEsQ0FBQyxVQUFVLGNBQWMsbUJBQW1CLG1CQUFtQixzQkFBc0I7QUFBQSxJQUM3RkMsT0FBT1Q7QUFBQUEsSUFDUFUsWUFBWTtBQUFBLEVBQ2Q7QUFBQSxFQUNBO0FBQUEsSUFDRU4sT0FBTztBQUFBLElBQ1BDLFFBQVE7QUFBQSxJQUNSQyxNQUFNO0FBQUEsSUFDTkMsYUFBYTtBQUFBLElBQ2JDLFFBQVEsQ0FBQyxVQUFVLGdCQUFnQixpQkFBaUIsVUFBVSxTQUFTLFlBQVk7QUFBQSxJQUNuRkMsT0FBT1I7QUFBQUEsSUFDUFMsWUFBWTtBQUFBLEVBQ2Q7QUFBQSxFQUNBO0FBQUEsSUFDRU4sT0FBTztBQUFBLElBQ1BDLFFBQVE7QUFBQSxJQUNSQyxNQUFNO0FBQUEsSUFDTkMsYUFBYTtBQUFBLElBQ2JDLFFBQVEsQ0FBQyxVQUFVLHdCQUF3Qiw0QkFBNEIsY0FBYyxLQUFLO0FBQUEsSUFDMUZDLE9BQU9FO0FBQUFBLElBQ1BELFlBQVk7QUFBQSxFQUNkO0FBQUM7QUFFSCxNQUFNRSxZQUFZcEIsTUFBTXFCO0FBQUFBLEVBQVVDLEtBQUNBLENBQUMsRUFBRUMsU0FBUyxHQUFHQyxRQUNoRDtBQUFBLElBQUM7QUFBQTtBQUFBLE1BQ0M7QUFBQSxNQUNBLFdBQVU7QUFBQSxNQUNWLE9BQU87QUFBQSxRQUNMQyxpQkFBaUI7QUFBQSxRQUNqQkMsWUFBWTtBQUFBLFFBQ1pDLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFHQTtBQUFBLCtCQUFDLFNBQUksV0FBVSx1RUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQWtGO0FBQUEsUUFDbEYsdUJBQUMsU0FBSSxXQUFVLHdFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBbUY7QUFBQSxRQUdsRixDQUFDLGdCQUFnQixpQkFBaUIsbUJBQW1CLGtCQUFrQixFQUFFQztBQUFBQSxVQUFJLENBQUNDLEtBQUtDLE1BQ2xGO0FBQUEsWUFBQztBQUFBO0FBQUEsY0FFQyxXQUFXLFlBQVlELEdBQUcsc0NBQ3hCQyxJQUFJLElBQUksZUFBZSxZQUFZLElBQ2pDQSxJQUFJLE1BQU0sSUFBSSxlQUFlLFlBQVk7QUFBQTtBQUFBLFlBSHhDQTtBQUFBQSxZQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFJa0Q7QUFBQSxRQUVuRDtBQUFBLFFBRUQsdUJBQUMsU0FBSSxXQUFVLG1GQUNaUCxZQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFFQTtBQUFBO0FBQUE7QUFBQSxJQXpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUEwQkE7QUFDRDtBQUVEUSxNQTlCTVg7QUErQk4sTUFBTVksYUFBYWhDLE1BQU1xQjtBQUFBQSxFQUFVWSxNQUFDQSxDQUFDLEVBQUVDLE1BQU1DLFdBQVcsR0FBR1gsUUFDekQ7QUFBQSxJQUFDO0FBQUE7QUFBQSxNQUNDO0FBQUEsTUFDQSxXQUFVO0FBQUEsTUFDVixPQUFPO0FBQUEsUUFDTEMsaUJBQWlCO0FBQUEsUUFDakJDLFlBQVk7QUFBQSxRQUNaQyxXQUFXO0FBQUEsTUFDYjtBQUFBLE1BR0E7QUFBQSwrQkFBQyxTQUFJLFdBQVUsOEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF5SDtBQUFBLFFBR3pILHVCQUFDLFNBQUksV0FBVSxtQ0FBa0MsT0FBTyxFQUFFUyxpQkFBaUIsK0RBQStEQyxnQkFBZ0IsWUFBWSxLQUF0SztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXdLO0FBQUEsUUFHeEssdUJBQUMsU0FBSSxXQUFVLGdGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBMkY7QUFBQSxRQUUzRix1QkFBQyxTQUFJLFdBQVUseURBRWI7QUFBQSxpQ0FBQyxTQUFJLFdBQVUsNEJBQ2IsaUNBQUMsU0FBSSxXQUFVLDhHQUNiLGlDQUFDLFVBQUssV0FBVSwrR0FBOEcsaUNBQTlIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRUEsS0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUlBLEtBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFNQTtBQUFBLFVBR0EsdUJBQUMsU0FBSSxXQUFVLGlEQUNiO0FBQUEsbUNBQUMsU0FBSSxXQUFVLHlGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQW9HO0FBQUEsWUFDcEcsdUJBQUMsU0FBSSxXQUFVLHNFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQWlGO0FBQUEsWUFDakYsdUJBQUMsU0FBSSxXQUFVLHlGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQW9HO0FBQUEsZUFIdEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFJQTtBQUFBLFVBR0EsdUJBQUMsU0FBSSxXQUFVLFlBQ2I7QUFBQSxtQ0FBQyxRQUFHLFdBQVUsMEhBQ1hILGVBQUt0QixTQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRUE7QUFBQSxZQUVBLHVCQUFDLFNBQUksV0FBVSxtRkFDYixpQ0FBQyxTQUFJLFdBQVUsZ0RBQStDLE1BQUssZ0JBQWUsU0FBUSxhQUN4RixpQ0FBQyxVQUFLLEdBQUUsMEpBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBOEosS0FEaEs7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFQSxLQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSUE7QUFBQSxlQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVUE7QUFBQSxVQUdBLHVCQUFDLE9BQUUsV0FBVSxpR0FBZ0c7QUFBQTtBQUFBLFlBQ2pHLHVCQUFDLFVBQUssV0FBVSx3Q0FBd0NzQixlQUFLckIsVUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBb0U7QUFBQSxlQURoRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUVBO0FBQUEsVUFHQSx1QkFBQyxTQUFJLFdBQVUsNkRBQ2IsaUNBQUMsU0FBSSxXQUFVLHdEQUNiO0FBQUEsbUNBQUMsT0FBRSxXQUFVLGlMQUFnTDtBQUFBO0FBQUEsY0FDekxxQixLQUFLbkI7QUFBQUEsY0FBWTtBQUFBLGlCQURyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVBO0FBQUEsWUFHQSx1QkFBQyxTQUFJLFdBQVUsdURBQ1ptQixlQUFLbEIsT0FBT1k7QUFBQUEsY0FBSSxDQUFDVSxVQUNoQjtBQUFBLGdCQUFDO0FBQUE7QUFBQSxrQkFFQyxXQUFVO0FBQUEsa0JBRVRBO0FBQUFBO0FBQUFBLGdCQUhJQTtBQUFBQSxnQkFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBS0E7QUFBQSxZQUNELEtBUkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFTQTtBQUFBLGVBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFnQkEsS0FqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFrQkE7QUFBQSxVQUdBLHVCQUFDLFNBQUksV0FBVSxpRUFDYixpQ0FBQyxTQUFJLFdBQVUsOEdBQ2I7QUFBQSxtQ0FBQyxTQUFJLFdBQVUsZ0NBQ2I7QUFBQSxxQ0FBQyxVQUFLLFdBQVUsZ0ZBQStFLDBCQUEvRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUF5RztBQUFBLGNBQ3pHLHVCQUFDLFVBQUssV0FBVSx5QkFBeUJKLGVBQUtwQixRQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFtRDtBQUFBLGlCQUZyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUdBO0FBQUEsWUFDQ29CLEtBQUtoQixjQUFjZ0IsS0FBS2hCLGVBQWUsT0FDdEM7QUFBQSxjQUFDO0FBQUE7QUFBQSxnQkFDQyxNQUFNZ0IsS0FBS2hCO0FBQUFBLGdCQUNYLFFBQU87QUFBQSxnQkFDUCxLQUFJO0FBQUEsZ0JBQ0osV0FBVTtBQUFBLGdCQUE4TjtBQUFBO0FBQUEsa0JBRWpPLHVCQUFDLFVBQUssV0FBVSw4QkFBNkIsaUJBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQThDO0FBQUE7QUFBQTtBQUFBLGNBTnZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU9BO0FBQUEsZUFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWVBLEtBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaUJBO0FBQUEsYUExRUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTJFQTtBQUFBO0FBQUE7QUFBQSxJQTdGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUE4RkE7QUFDRDtBQUVEcUIsTUFsR01QO0FBbUdOLE1BQU1RLFlBQVl4QyxNQUFNcUI7QUFBQUEsRUFBVW9CLE1BQUNBLENBQUMsRUFBRVAsTUFBTUMsV0FBVyxHQUFHWCxRQUN4RDtBQUFBLElBQUM7QUFBQTtBQUFBLE1BQ0M7QUFBQSxNQUNBLFdBQVU7QUFBQSxNQUNWLE9BQU87QUFBQSxRQUNMQyxpQkFBaUI7QUFBQSxRQUNqQkMsWUFBWTtBQUFBLFFBQ1pDLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFHQTtBQUFBLCtCQUFDLFNBQUksV0FBVSw2R0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXdIO0FBQUEsUUFHeEgsdUJBQUMsU0FBSSxXQUFVLHFFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBZ0Y7QUFBQSxRQUVoRix1QkFBQyxTQUFJLFdBQVUsOEVBRWI7QUFBQSxpQ0FBQyxTQUFJLFdBQVUsNEJBQ2IsaUNBQUMsVUFBSyxXQUFVLDBHQUF5RyxvQ0FBekg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFFQSxLQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSUE7QUFBQSxVQUdBLHVCQUFDLFNBQUksV0FBVSx1RUFDYixpQ0FBQyxTQUFJLFdBQVUsc0JBQ2I7QUFBQSxtQ0FBQyxTQUFJLFdBQVUsb0tBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBZ0w7QUFBQSxZQUNoTDtBQUFBLGNBQUM7QUFBQTtBQUFBLGdCQUNDLEtBQUtPLEtBQUtqQjtBQUFBQSxnQkFDVixLQUFLLEdBQUdpQixLQUFLdEIsS0FBSztBQUFBLGdCQUNsQixXQUFVO0FBQUE7QUFBQSxjQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUdtTDtBQUFBLGVBTHJMO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBT0EsS0FSRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVNBO0FBQUEsYUFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW1CQTtBQUFBO0FBQUE7QUFBQSxJQWxDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFtQ0E7QUFDRDtBQUVEOEIsTUF2Q01GO0FBd0NOLE1BQU1HLGlCQUFpQkEsQ0FBQyxFQUFFVCxNQUFNVSxRQUFRQyxTQUFTLE1BQy9DO0FBQUEsRUFBQyxPQUFPO0FBQUEsRUFBUDtBQUFBLElBQ0M7QUFBQSxJQUNBLFdBQVU7QUFBQSxJQUNWLFlBQVksRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEtBQUtDLE1BQU0sQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLEVBQUUsRUFBRTtBQUFBLElBRXBFO0FBQUE7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNDLFNBQVNIO0FBQUFBLFVBQ1QsV0FBVTtBQUFBLFVBRVY7QUFBQSxtQ0FBQyxTQUFJLFdBQVUsMkJBQ2I7QUFBQSxxQ0FBQyxTQUFJLFdBQVUsaUlBQ2IsaUNBQUMsU0FBSSxLQUFLWCxLQUFLakIsT0FBTyxLQUFLLEdBQUdpQixLQUFLdEIsS0FBSyxVQUFVLFdBQVUsMENBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWtHLEtBRHBHO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRUE7QUFBQSxjQUNBLHVCQUFDLFNBQUksV0FBVSxhQUNiO0FBQUEsdUNBQUMsT0FBRSxXQUFVLDRFQUEyRSwwQkFBeEY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBa0c7QUFBQSxnQkFDbEcsdUJBQUMsUUFBRyxXQUFVLG1EQUFtRHNCLGVBQUt0QixTQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUE0RTtBQUFBLGdCQUM1RSx1QkFBQyxPQUFFLFdBQVUsNENBQ1ZzQjtBQUFBQSx1QkFBS3JCO0FBQUFBLGtCQUFPO0FBQUEsa0JBQUlxQixLQUFLcEI7QUFBQUEscUJBRHhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRUE7QUFBQSxtQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU1BO0FBQUEsaUJBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFXQTtBQUFBLFlBQ0EsdUJBQUMsVUFBSyxXQUFVLGtEQUFrRDhCLG1CQUFTLE1BQU0sT0FBakY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBcUY7QUFBQTtBQUFBO0FBQUEsUUFoQnZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWlCQTtBQUFBLE1BRUE7QUFBQSxRQUFDLE9BQU87QUFBQSxRQUFQO0FBQUEsVUFDQyxTQUFTO0FBQUEsVUFDVCxTQUFTLEVBQUVLLFFBQVFMLFNBQVMsU0FBUyxHQUFHTSxTQUFTTixTQUFTLElBQUksRUFBRTtBQUFBLFVBQ2hFLFlBQVksRUFBRUcsVUFBVSxJQUFJO0FBQUEsVUFDNUIsV0FBVTtBQUFBLFVBQ1YsT0FBTyxFQUFFSSxVQUFVLFNBQVM7QUFBQSxVQUU1QjtBQUFBLFlBQUMsT0FBTztBQUFBLFlBQVA7QUFBQSxjQUNDLFNBQVMsRUFBRUMsU0FBUyxLQUFLRixTQUFTLEVBQUU7QUFBQSxjQUNwQyxTQUFTLEVBQUVFLFNBQVNSLFNBQVMsSUFBSSxLQUFLTSxTQUFTTixTQUFTLElBQUksRUFBRTtBQUFBLGNBQzlELFlBQVksRUFBRUcsVUFBVSxNQUFNQyxNQUFNLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxFQUFFO0FBQUEsY0FDekQsV0FBVTtBQUFBLGNBRVY7QUFBQSx1Q0FBQyxTQUFJLFdBQVUsbUZBQ2IsaUNBQUMsU0FBSSxLQUFLZCxLQUFLakIsT0FBTyxLQUFLaUIsS0FBS3RCLE9BQU8sV0FBVSx5QkFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBc0UsS0FEeEU7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFQTtBQUFBLGdCQUNBLHVCQUFDLE9BQUUsV0FBVSx5Q0FBeUNzQixlQUFLdEIsU0FBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBaUU7QUFBQSxnQkFDakUsdUJBQUMsT0FBRSxXQUFVLG9EQUFvRHNCLGVBQUtuQixlQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFrRjtBQUFBLGdCQUNsRix1QkFBQyxTQUFJLFdBQVUsNkJBQ1ptQixlQUFLbEIsT0FBT1k7QUFBQUEsa0JBQUksQ0FBQ1UsVUFDaEI7QUFBQSxvQkFBQztBQUFBO0FBQUEsc0JBRUMsV0FBVTtBQUFBLHNCQUVUQTtBQUFBQTtBQUFBQSxvQkFISUE7QUFBQUEsb0JBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFLQTtBQUFBLGdCQUNELEtBUkg7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFTQTtBQUFBLGdCQUNDSixLQUFLaEIsY0FBY2dCLEtBQUtoQixlQUFlLE9BQ3RDO0FBQUEsa0JBQUM7QUFBQTtBQUFBLG9CQUNDLE1BQU1nQixLQUFLaEI7QUFBQUEsb0JBQ1gsUUFBTztBQUFBLG9CQUNQLEtBQUk7QUFBQSxvQkFDSixXQUFVO0FBQUEsb0JBQWtOO0FBQUE7QUFBQSxrQkFKOU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU9BO0FBQUE7QUFBQTtBQUFBLFlBN0JKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQStCQTtBQUFBO0FBQUEsUUF0Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BdUNBO0FBQUE7QUFBQTtBQUFBLEVBL0RGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFnRUE7QUFDQW1DLE1BbEVJVjtBQW9FTixNQUFNVyxnQkFBZ0JBLE1BQU07QUFBQUMsS0FBQTtBQUMxQixRQUFNQyxVQUFVdkQsT0FBTyxJQUFJO0FBQzNCLFFBQU0sQ0FBQ3dELFlBQVlDLGFBQWEsSUFBSXhELFNBQVMsU0FBUztBQUN0RCxRQUFNLENBQUN5RCxVQUFVQyxXQUFXLElBQUkxRCxTQUFTLElBQUk7QUFFN0NDLFlBQVUsTUFBTTtBQUNkLFVBQU0wRCxRQUFRQSxNQUFNO0FBQ2xCLFlBQU1DLElBQUlDLE9BQU9DO0FBQ2pCLFVBQUlGLElBQUksSUFBS0osZUFBYyxJQUFJO0FBQUEsZUFDdEJJLElBQUksSUFBS0osZUFBYyxJQUFJO0FBQUE7QUFDL0JBLHNCQUFjLFNBQVM7QUFBQSxJQUM5QjtBQUNBRyxVQUFNO0FBQ05FLFdBQU9FLGlCQUFpQixVQUFVSixLQUFLO0FBQ3ZDLFdBQU8sTUFBTUUsT0FBT0csb0JBQW9CLFVBQVVMLEtBQUs7QUFBQSxFQUN6RCxHQUFHLEVBQUU7QUFFTCxRQUFNTSxpQkFBaUI7QUFBQSxJQUNyQkMsSUFBSSxFQUFFQyxPQUFPLEtBQUtwQixRQUFRLEtBQUtxQixVQUFVLEtBQUtDLFVBQVUsS0FBS0MsV0FBVyxLQUFLQyxXQUFXLElBQUk7QUFBQSxJQUM1RkMsSUFBSSxFQUFFTCxPQUFPLEtBQUtwQixRQUFRLEtBQUtxQixVQUFVLEtBQUtDLFVBQVUsS0FBS0MsV0FBVyxLQUFLQyxXQUFXLElBQUk7QUFBQSxJQUM1RkUsU0FBUyxFQUFFTixPQUFPLEtBQUtwQixRQUFRLEtBQUtxQixVQUFVLEtBQUtDLFVBQVUsS0FBS0MsV0FBVyxLQUFLQyxXQUFXLElBQUk7QUFBQSxFQUNuRztBQUVBLFFBQU1HLE9BQU9ULGVBQWVWLFVBQVU7QUFDdEMsUUFBTW9CLFdBQVdwQixlQUFlO0FBRWhDLFNBQ0UsdUJBQUMsYUFBUSxJQUFHLGtCQUFpQixXQUFVLHNEQUVyQztBQUFBLDJCQUFDLFNBQUksV0FBVSx3Q0FDYjtBQUFBLDZCQUFDLFNBQUksV0FBVSxnRkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQTJGO0FBQUEsTUFDM0YsdUJBQUMsU0FBSSxXQUFVLGtGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBNkY7QUFBQSxTQUYvRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBR0E7QUFBQSxJQUVBLHVCQUFDLFNBQUksV0FBVSxpREFFYjtBQUFBO0FBQUEsUUFBQyxPQUFPO0FBQUEsUUFBUDtBQUFBLFVBQ0MsV0FBVTtBQUFBLFVBQ1YsU0FBUyxFQUFFUCxTQUFTLEdBQUc0QixHQUFHLEdBQUc7QUFBQSxVQUM3QixhQUFhLEVBQUU1QixTQUFTLEdBQUc0QixHQUFHLEVBQUU7QUFBQSxVQUNoQyxVQUFVLEVBQUVDLE1BQU0sS0FBSztBQUFBLFVBQ3ZCLFlBQVksRUFBRWhDLFVBQVUsSUFBSTtBQUFBLFVBRTVCO0FBQUEsbUNBQUMsU0FBSSxXQUFVLHdDQUNiO0FBQUEscUNBQUMsVUFBSyxXQUFVLDBFQUF5RSxrQkFBekY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBMkY7QUFBQSxjQUMzRix1QkFBQyxVQUFLLFdBQVUsbUVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWdGO0FBQUEsaUJBRmxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBR0E7QUFBQSxZQUNBLHVCQUFDLFFBQUcsV0FBVSw0REFBMkQsOEJBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRUE7QUFBQSxZQUNBLHVCQUFDLE9BQUUsV0FBVSxnRUFDVjhCLHFCQUFXLDhDQUE4QyxpREFENUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFQTtBQUFBO0FBQUE7QUFBQSxRQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFpQkE7QUFBQSxNQUdDQSxXQUNDO0FBQUEsUUFBQyxPQUFPO0FBQUEsUUFBUDtBQUFBLFVBQ0MsV0FBVTtBQUFBLFVBQ1YsU0FBUyxFQUFFM0IsU0FBUyxHQUFHNEIsR0FBRyxHQUFHO0FBQUEsVUFDN0IsYUFBYSxFQUFFNUIsU0FBUyxHQUFHNEIsR0FBRyxFQUFFO0FBQUEsVUFDaEMsVUFBVSxFQUFFQyxNQUFNLEtBQUs7QUFBQSxVQUN2QixZQUFZLEVBQUVoQyxVQUFVLEtBQUtpQyxPQUFPLElBQUk7QUFBQSxVQUV2Q3JFLHlCQUFlaUI7QUFBQUEsWUFBSSxDQUFDTSxTQUNuQjtBQUFBLGNBQUM7QUFBQTtBQUFBLGdCQUVDO0FBQUEsZ0JBQ0EsUUFBUXlCLGFBQWF6QixLQUFLdEI7QUFBQUEsZ0JBQzFCLFVBQVUsTUFBTWdELFlBQVlELGFBQWF6QixLQUFLdEIsUUFBUSxPQUFPc0IsS0FBS3RCLEtBQUs7QUFBQTtBQUFBLGNBSGxFc0IsS0FBS3RCO0FBQUFBLGNBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUkyRTtBQUFBLFVBRTVFO0FBQUE7QUFBQSxRQWRIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWVBLElBRUEsbUNBQ0U7QUFBQTtBQUFBLFVBQUMsT0FBTztBQUFBLFVBQVA7QUFBQSxZQUNDLFdBQVU7QUFBQSxZQUNWLFNBQVMsRUFBRXNDLFNBQVMsR0FBRytCLE9BQU8sSUFBSTtBQUFBLFlBQ2xDLGFBQWEsRUFBRS9CLFNBQVMsR0FBRytCLE9BQU8sRUFBRTtBQUFBLFlBQ3BDLFVBQVUsRUFBRUYsTUFBTSxLQUFLO0FBQUEsWUFDdkIsWUFBWSxFQUFFaEMsVUFBVSxLQUFLaUMsT0FBTyxJQUFJO0FBQUEsWUFFeEM7QUFBQSxjQUFDO0FBQUE7QUFBQSxnQkFFQyxLQUFLeEI7QUFBQUEsZ0JBQ0wsT0FBT29CLEtBQUtQO0FBQUFBLGdCQUNaLFFBQVFPLEtBQUszQjtBQUFBQSxnQkFDYixNQUFLO0FBQUEsZ0JBQ0wsVUFBVTJCLEtBQUtOO0FBQUFBLGdCQUNmLFVBQVVNLEtBQUtMO0FBQUFBLGdCQUNmLFdBQVdLLEtBQUtKO0FBQUFBLGdCQUNoQixXQUFXSSxLQUFLSDtBQUFBQSxnQkFDaEIsa0JBQWtCO0FBQUEsZ0JBQ2xCLFdBQVc7QUFBQSxnQkFDWCxxQkFBcUI7QUFBQSxnQkFDckIsV0FBVTtBQUFBLGdCQUNWLE9BQU8sQ0FBQztBQUFBLGdCQUNSLGNBQWM7QUFBQSxnQkFDZCxhQUFhO0FBQUEsZ0JBQ2IsYUFBYTtBQUFBLGdCQUNiLFVBQVU7QUFBQSxnQkFDVixZQUFZO0FBQUEsZ0JBQ1osZ0JBQWdCO0FBQUEsZ0JBQ2hCLGVBQWU7QUFBQSxnQkFHZjtBQUFBLHlDQUFDLGFBQ0M7QUFBQSwyQ0FBQyxTQUFJLFdBQVUsc0ZBQ2IsaUNBQUMsU0FBSSxXQUFVLGdDQUErQixNQUFLLFFBQU8sU0FBUSxhQUFZLFFBQU8sZ0JBQWUsYUFBYSxHQUMvRyxpQ0FBQyxVQUFLLGVBQWMsU0FBUSxnQkFBZSxTQUFRLEdBQUUsNmFBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQThkLEtBRGhlO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRUEsS0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUlBO0FBQUEsb0JBQ0EsdUJBQUMsUUFBRyxXQUFVLGlEQUFnRCxpQ0FBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFFQTtBQUFBLG9CQUNBLHVCQUFDLE9BQUUsV0FBVSx3Q0FBdUMsNkJBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQWlFO0FBQUEsdUJBVG5FO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBVUE7QUFBQSxrQkFHQzlELGVBQWV1RTtBQUFBQSxvQkFBUSxDQUFDaEQsTUFBTWlELFFBQVE7QUFBQSxzQkFDckMsdUJBQUMsY0FBaUMsTUFBWSxZQUFZQSxNQUFNLElBQUksS0FBbkQsVUFBVUEsR0FBRyxJQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUFzRTtBQUFBLHNCQUN0RSx1QkFBQyxhQUErQixNQUFZLFlBQVlBLE1BQU0sSUFBSSxLQUFsRCxTQUFTQSxHQUFHLElBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQW9FO0FBQUEsb0JBQUc7QUFBQSxrQkFDeEU7QUFBQSxrQkFHRCx1QkFBQyxhQUNDO0FBQUEsMkNBQUMsU0FBSSxXQUFVLHNGQUNiLGlDQUFDLFNBQUksV0FBVSxnQ0FBK0IsTUFBSyxRQUFPLFNBQVEsYUFBWSxRQUFPLGdCQUFlLGFBQWEsR0FDL0csaUNBQUMsVUFBSyxlQUFjLFNBQVEsZ0JBQWUsU0FBUSxHQUFFLHdQQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUF5UyxLQUQzUztBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUVBLEtBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFJQTtBQUFBLG9CQUNBLHVCQUFDLE9BQUUsV0FBVSx3Q0FBdUMsa0NBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQXNFO0FBQUEsdUJBTnhFO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBT0E7QUFBQTtBQUFBO0FBQUEsY0FqREsxQjtBQUFBQSxjQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFtREE7QUFBQTtBQUFBLFVBMURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQTJEQTtBQUFBLFFBR0E7QUFBQSxVQUFDLE9BQU87QUFBQSxVQUFQO0FBQUEsWUFDQyxXQUFVO0FBQUEsWUFDVixTQUFTLEVBQUVQLFNBQVMsRUFBRTtBQUFBLFlBQ3RCLGFBQWEsRUFBRUEsU0FBUyxFQUFFO0FBQUEsWUFDMUIsVUFBVSxFQUFFNkIsTUFBTSxLQUFLO0FBQUEsWUFDdkIsWUFBWSxFQUFFQyxPQUFPLElBQUk7QUFBQSxZQUV6QjtBQUFBO0FBQUEsZ0JBQUM7QUFBQTtBQUFBLGtCQUNDLFNBQVMsTUFBTXhCLFFBQVE0QixTQUFTQyxTQUFTLEdBQUdDLFNBQVM7QUFBQSxrQkFDckQsV0FBVTtBQUFBLGtCQUE2SDtBQUFBO0FBQUEsZ0JBRnpJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUtBO0FBQUEsY0FDQTtBQUFBLGdCQUFDO0FBQUE7QUFBQSxrQkFDQyxTQUFTLE1BQU05QixRQUFRNEIsU0FBU0MsU0FBUyxHQUFHRSxTQUFTO0FBQUEsa0JBQ3JELFdBQVU7QUFBQSxrQkFBNkg7QUFBQTtBQUFBLGdCQUZ6STtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FLQTtBQUFBO0FBQUE7QUFBQSxVQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFtQkE7QUFBQSxXQWxGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbUZBO0FBQUEsU0EzSEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQTZIQTtBQUFBLE9BcElGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FxSUE7QUFFSjtBQUFFaEMsR0FsS0lELGVBQWE7QUFBQSxNQUFiQTtBQW9LTixlQUFlQTtBQUFjLElBQUFoQyxJQUFBUyxLQUFBRSxLQUFBTSxLQUFBRSxLQUFBQyxLQUFBVyxLQUFBbUM7QUFBQSxhQUFBbEUsSUFBQTtBQUFBLGFBQUFTLEtBQUE7QUFBQSxhQUFBRSxLQUFBO0FBQUEsYUFBQU0sS0FBQTtBQUFBLGFBQUFFLEtBQUE7QUFBQSxhQUFBQyxLQUFBO0FBQUEsYUFBQVcsS0FBQTtBQUFBLGFBQUFtQyxLQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhUTUxGbGlwQm9vayIsIm1vdGlvbiIsIk1MQ2VydCIsIlZMU0lDZXJ0IiwiUFlUQ2VydCIsIlBZVElCTUNlcnQiLCJBV1NJTkZPQ2VydCIsImNlcnRpZmljYXRpb25zIiwidGl0bGUiLCJpc3N1ZXIiLCJkYXRlIiwiZGVzY3JpcHRpb24iLCJza2lsbHMiLCJpbWFnZSIsInZlcmlmeUxpbmsiLCJQWVRJTkZPQ2VydCIsIlBhZ2VDb3ZlciIsImZvcndhcmRSZWYiLCJfYyIsImNoaWxkcmVuIiwicmVmIiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZCIsImJveFNoYWRvdyIsIm1hcCIsInBvcyIsImkiLCJfYzIiLCJEZXRhaWxQYWdlIiwiX2MzIiwiY2VydCIsInBhZ2VOdW1iZXIiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsInNraWxsIiwiX2M0IiwiSW1hZ2VQYWdlIiwiX2M1IiwiX2M2IiwiTW9iaWxlRmxpcENhcmQiLCJpc09wZW4iLCJvblRvZ2dsZSIsImxheW91dCIsImR1cmF0aW9uIiwiZWFzZSIsImhlaWdodCIsIm9wYWNpdHkiLCJvdmVyZmxvdyIsInJvdGF0ZVgiLCJfYzciLCJDZXJ0aWZpY2F0aW9uIiwiX3MiLCJib29rUmVmIiwic2NyZWVuU2l6ZSIsInNldFNjcmVlblNpemUiLCJvcGVuQ2FyZCIsInNldE9wZW5DYXJkIiwiY2hlY2siLCJ3Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYm9va0RpbWVuc2lvbnMiLCJ4cyIsIndpZHRoIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsInNtIiwiZGVza3RvcCIsImRpbXMiLCJpc01vYmlsZSIsInkiLCJvbmNlIiwiZGVsYXkiLCJzY2FsZSIsImZsYXRNYXAiLCJpZHgiLCJjdXJyZW50IiwicGFnZUZsaXAiLCJmbGlwUHJldiIsImZsaXBOZXh0IiwiX2M4Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkNlcnRpZmljYXRpb24uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhUTUxGbGlwQm9vayBmcm9tIFwicmVhY3QtcGFnZWZsaXBcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuXHJcbi8vIEltcG9ydCBjZXJ0aWZpY2F0ZSBpbWFnZXNcclxuaW1wb3J0IE1MQ2VydCBmcm9tIFwiLi4vYXNzZXRzL01MX2NlcnRpLmpwZWdcIjtcclxuaW1wb3J0IFZMU0lDZXJ0IGZyb20gXCIuLi9hc3NldHMvVkxTSV9jZXJ0aS5qcGVnXCI7XHJcbmltcG9ydCBQWVRDZXJ0IGZyb20gXCIuLi9hc3NldHMvUFlUX2NlcnRpLmpwZWdcIjtcclxuaW1wb3J0IFBZVElCTUNlcnQgZnJvbSBcIi4uL2Fzc2V0cy9QWVRfSUJNX2NlcnRpLnBuZ1wiO1xyXG5pbXBvcnQgQVdTSU5GT0NlcnQgZnJvbSBcIi4uL2Fzc2V0cy9BV1NfSU5GT19jZXJ0aS5wbmdcIjtcclxuXHJcbmNvbnN0IGNlcnRpZmljYXRpb25zID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIkFXUyBDbG91ZCBRdWVzdCDigJQgQ2xvdWQgUHJhY3RpdGlvbmVyIChUcmFpbmVkKVwiLFxyXG4gICAgaXNzdWVyOiBcIkFXU1wiLFxyXG4gICAgZGF0ZTogXCJBcHIgMjAyNlwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiQ29tcGxldGVkIHRoZSBBV1MgQ2xvdWQgUXVlc3QgQ2xvdWQgUHJhY3RpdGlvbmVyIHRyYWluaW5nIHByb2dyYW0gaW4gQXByaWwgMjAyNiDigJQgZm91bmRhdGlvbmFsIGNsb3VkIGNvbmNlcHRzLCBBV1MgY29yZSBzZXJ2aWNlcywgYW5kIGJlc3QgcHJhY3RpY2VzIGZvciBjbG91ZCBzZWN1cml0eSBhbmQgY29zdCBtYW5hZ2VtZW50LlwiLFxyXG4gICAgc2tpbGxzOiBbXCJBV1NcIiwgXCJDbG91ZCBGdW5kYW1lbnRhbHNcIiwgXCJDbG91ZCBRdWVzdFwiLCBcIkNsb3VkIFByYWN0aXRpb25lclwiXSxcclxuICAgIGltYWdlOiBBV1NJTkZPQ2VydCxcclxuICAgIHZlcmlmeUxpbms6IFwiI1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJUZWNoQSBBV1MgU29sdXRpb24gQXJjaGl0ZWN0IENlcnRpZmljYXRpb25cIixcclxuICAgIGlzc3VlcjogXCJJbmZvc3lzIFNwcmluZ2JvYXJkXCIsXHJcbiAgICBkYXRlOiBcIkFwciAxMCwgMjAyNlwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiU3VjY2Vzc2Z1bGx5IGNvbXBsZXRlZCB0aGUgVGVjaEEgQVdTIFNvbHV0aW9uIEFyY2hpdGVjdCBjZXJ0aWZpY2F0aW9uIHByb2dyYW0sIGNvdmVyaW5nIGNsb3VkIGFyY2hpdGVjdHVyZSBmdW5kYW1lbnRhbHMsIEFXUyBjb3JlIHNlcnZpY2VzLCBhbmQgcHJhY3RpY2FsIGRlc2lnbiBwcmluY2lwbGVzIGZvciBzY2FsYWJsZSBhbmQgcmVsaWFibGUgc29sdXRpb25zLlwiLFxyXG4gICAgc2tpbGxzOiBbXCJBV1NcIiwgXCJTb2x1dGlvbiBBcmNoaXRlY3R1cmVcIiwgXCJDbG91ZCBEZXNpZ25cIiwgXCJFQzJcIiwgXCJTM1wiLCBcIklBTVwiXSxcclxuICAgIGltYWdlOiBBV1NJTkZPQ2VydCxcclxuICAgIHZlcmlmeUxpbms6IFwiaHR0cHM6Ly92ZXJpZnkub253aW5nc3Bhbi5jb21cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiTWFjaGluZSBMZWFybmluZyBmb3IgQ3liZXIgU2VjdXJpdHlcIixcclxuICAgIGlzc3VlcjogXCJDLURBQyBIeWRlcmFiYWRcIixcclxuICAgIGRhdGU6IFwiT2N0IDIwMjVcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkFuIGludGVuc2l2ZSBwcm9ncmFtIGZvY3VzZWQgb24gdGhlIGludGVyc2VjdGlvbiBvZiBBSSBhbmQgc2VjdXJpdHkuIE1hc3RlcmVkIGFub21hbHkgZGV0ZWN0aW9uLCBtYWx3YXJlIGFuYWx5c2lzIHVzaW5nIE1MLCBhbmQgYnVpbGRpbmcgcm9idXN0IGRlZmVuc2Ugc3lzdGVtcyBhZ2FpbnN0IGF1dG9tYXRlZCBjeWJlciB0aHJlYXRzLlwiLFxyXG4gICAgc2tpbGxzOiBbXCJNYWNoaW5lIExlYXJuaW5nXCIsIFwiQ3liZXJzZWN1cml0eVwiLCBcIlRocmVhdCBEZXRlY3Rpb25cIiwgXCJBbm9tYWx5IERldGVjdGlvblwiLCBcIlB5dGhvblwiXSxcclxuICAgIGltYWdlOiBNTENlcnQsXHJcbiAgICB2ZXJpZnlMaW5rOiBcIiNcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiVkxTSSBEZXNpZ24gRW5naW5lZXJcIixcclxuICAgIGlzc3VlcjogXCJOYXRpb25hbCBTa2lsbCBEZXZlbG9wbWVudCBDb3Jwb3JhdGlvblwiLFxyXG4gICAgZGF0ZTogXCJNYXkgMjAyNVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiUHJvZmVzc2lvbmFsIGNlcnRpZmljYXRpb24gY292ZXJpbmcgdGhlIGNvbXBsZXRlIFZMU0kgZGVzaWduIGZsb3cuIEV4cGVydGlzZSBpbiBSVEwgZGVzaWduIHVzaW5nIFZlcmlsb2csIGZ1bmN0aW9uYWwgdmVyaWZpY2F0aW9uLCBhbmQgbG9naWMgc3ludGhlc2lzIGZvciBoaWdoLXBlcmZvcm1hbmNlIGludGVncmF0ZWQgY2lyY3VpdHMuXCIsXHJcbiAgICBza2lsbHM6IFtcIlZMU0lcIiwgXCJWZXJpbG9nXCIsIFwiUlRMIERlc2lnblwiLCBcIkRpZ2l0YWwgRWxlY3Ryb25pY3NcIiwgXCJBU0lDIERlc2lnblwiLCBcIkZQR0FcIl0sXHJcbiAgICBpbWFnZTogVkxTSUNlcnQsXHJcbiAgICB2ZXJpZnlMaW5rOiBcIiNcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiUHJvZ3JhbW1pbmcgaW4gUHl0aG9uXCIsXHJcbiAgICBpc3N1ZXI6IFwiU1dBWUFNIE1IUkRcIixcclxuICAgIGRhdGU6IFwiSmFuIDIwMjVcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkNvbXByZWhlbnNpdmUgY2VydGlmaWNhdGlvbiBmcm9tIHRoZSBNaW5pc3RyeSBvZiBFZHVjYXRpb24uIENvdmVyZWQgYWR2YW5jZWQgZGF0YSBzdHJ1Y3R1cmVzLCBhbGdvcml0aG1pYyBjb21wbGV4aXR5LCBhbmQgc29mdHdhcmUgZW5naW5lZXJpbmcgcHJpbmNpcGxlcyB1c2luZyBQeXRob24gZm9yIHJlYWwtd29ybGQgYXBwbGljYXRpb25zLlwiLFxyXG4gICAgc2tpbGxzOiBbXCJQeXRob25cIiwgXCJBbGdvcml0aG1zXCIsIFwiRGF0YSBTdHJ1Y3R1cmVzXCIsIFwiUHJvYmxlbSBTb2x2aW5nXCIsIFwiU29mdHdhcmUgRW5naW5lZXJpbmdcIl0sXHJcbiAgICBpbWFnZTogUFlUQ2VydCxcclxuICAgIHZlcmlmeUxpbms6IFwiI1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJQeXRob24gMTAxIGZvciBEYXRhIFNjaWVuY2VcIixcclxuICAgIGlzc3VlcjogXCJDb2duaXRpdmUgQ2xhc3NcIixcclxuICAgIGRhdGU6IFwiRGVjIDIwMjRcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIk1hc3RlcmVkIHRoZSBmdW5kYW1lbnRhbHMgb2YgZGF0YSBzY2llbmNlIHVzaW5nIFB5dGhvbi4gRXhwZXJ0aXNlIGluIGRhdGEgbWFuaXB1bGF0aW9uIHdpdGggUGFuZGFzLCBudW1lcmljYWwgY29tcHV0aW5nIHdpdGggTnVtUHksIGFuZCBkYXRhIHZpc3VhbGl6YXRpb24gd2l0aCBNYXRwbG90bGliIGFuZCBTZWFib3JuLlwiLFxyXG4gICAgc2tpbGxzOiBbXCJQeXRob25cIiwgXCJEYXRhIFNjaWVuY2VcIiwgXCJEYXRhIEFuYWx5c2lzXCIsIFwiUGFuZGFzXCIsIFwiTnVtUHlcIiwgXCJNYXRwbG90bGliXCJdLFxyXG4gICAgaW1hZ2U6IFBZVElCTUNlcnQsXHJcbiAgICB2ZXJpZnlMaW5rOiBcImh0dHBzOi8vY291cnNlcy5jb2duaXRpdmVjbGFzcy5haS9jZXJ0aWZpY2F0ZXMvNjRiMGJjNjcxMGY2NDNlOGE0N2ZiNzM4YTU2NDQwMWFcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiUHl0aG9uIEZvdW5kYXRpb24gQ2VydGlmaWNhdGlvblwiLFxyXG4gICAgaXNzdWVyOiBcIkluZm9zeXMgU3ByaW5nYm9hcmRcIixcclxuICAgIGRhdGU6IFwiQXVnIDIwMjRcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlZhbGlkYXRlZCBjb3JlIHByb2dyYW1taW5nIHByb2ZpY2llbmN5IHRocm91Z2ggdGhlIEluZm9zeXMgU3ByaW5nYm9hcmQgcGxhdGZvcm0uIEZvY3VzZWQgb24gd3JpdGluZyBjbGVhbiwgZWZmaWNpZW50IGNvZGUgYW5kIHVuZGVyc3RhbmRpbmcgdGhlIHVuZGVybHlpbmcgYXJjaGl0ZWN0dXJlIG9mIFB5dGhvbiBhcHBsaWNhdGlvbnMuXCIsXHJcbiAgICBza2lsbHM6IFtcIlB5dGhvblwiLCBcIlNvZnR3YXJlIERldmVsb3BtZW50XCIsIFwiUHJvZ3JhbW1pbmcgRnVuZGFtZW50YWxzXCIsIFwiQ2xlYW4gQ29kZVwiLCBcIk9PUFwiXSxcclxuICAgIGltYWdlOiBQWVRJTkZPQ2VydCxcclxuICAgIHZlcmlmeUxpbms6IFwiI1wiXHJcbiAgfSxcclxuXTtcclxuY29uc3QgUGFnZUNvdmVyID0gUmVhY3QuZm9yd2FyZFJlZigoeyBjaGlsZHJlbiB9LCByZWYpID0+IChcclxuICA8ZGl2XHJcbiAgICByZWY9e3JlZn1cclxuICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtZnVsbCB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIGJnLVt2YXIoLS1iZy1zdXJmYWNlKV1cIlxyXG4gICAgc3R5bGU9e3tcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInZhcigtLWJnLXN1cmZhY2UpXCIsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwidmFyKC0tYmctc3VyZmFjZSlcIixcclxuICAgICAgYm94U2hhZG93OiBcImluc2V0IDAgMCAwIDEwMDBweCB2YXIoLS1iZy1zdXJmYWNlKVwiLFxyXG4gICAgfX1cclxuICA+XHJcbiAgICB7LyogRGVjb3JhdGl2ZSBib3JkZXIgKi99XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTMgYm9yZGVyLTIgYm9yZGVyLVt2YXIoLS1ib3JkZXItY29sb3IpXSByb3VuZGVkLWxnXCIgLz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtNSBib3JkZXIgYm9yZGVyLVt2YXIoLS1ib3JkZXItY29sb3IpXS81MCByb3VuZGVkLWxnXCIgLz5cclxuXHJcbiAgICB7LyogQ29ybmVyIG9ybmFtZW50cyAqL31cclxuICAgIHtbXCJ0b3AtNiBsZWZ0LTZcIiwgXCJ0b3AtNiByaWdodC02XCIsIFwiYm90dG9tLTYgbGVmdC02XCIsIFwiYm90dG9tLTYgcmlnaHQtNlwiXS5tYXAoKHBvcywgaSkgPT4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAga2V5PXtpfVxyXG4gICAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlICR7cG9zfSB3LTQgaC00IGJvcmRlci1bdmFyKC0tYWNjZW50KV0vNTAgJHtcclxuICAgICAgICAgIGkgPCAyID8gXCJib3JkZXItdC0yXCIgOiBcImJvcmRlci1iLTJcIlxyXG4gICAgICAgIH0gJHtpICUgMiA9PT0gMCA/IFwiYm9yZGVyLWwtMlwiIDogXCJib3JkZXItci0yXCJ9YH1cclxuICAgICAgLz5cclxuICAgICkpfVxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0xMCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLWZ1bGwgcHgtOCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuKSk7XHJcblxyXG4vLyBMZWZ0IHBhZ2UgLSBDZXJ0aWZpY2F0ZSBkZXRhaWxzXHJcbmNvbnN0IERldGFpbFBhZ2UgPSBSZWFjdC5mb3J3YXJkUmVmKCh7IGNlcnQsIHBhZ2VOdW1iZXIgfSwgcmVmKSA9PiAoXHJcbiAgPGRpdlxyXG4gICAgcmVmPXtyZWZ9XHJcbiAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLWZ1bGwgdy1mdWxsIG92ZXJmbG93LWhpZGRlbiBiZy1bdmFyKC0tYmctc3VyZmFjZSldXCJcclxuICAgIHN0eWxlPXt7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ2YXIoLS1iZy1zdXJmYWNlKVwiLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcInZhcigtLWJnLXN1cmZhY2UpXCIsXHJcbiAgICAgIGJveFNoYWRvdzogXCJpbnNldCAwIDAgMCAxMDAwcHggdmFyKC0tYmctc3VyZmFjZSlcIixcclxuICAgIH19XHJcbiAgPlxyXG4gICAgey8qIFNwaW5lIHNoYWRvdyAoUmlnaHQgc2lkZSBmb3IgbGVmdCBwYWdlKSAqL31cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCB3LTggaC1mdWxsIGJnLWdyYWRpZW50LXRvLWwgZnJvbS1ibGFjay80MCB0by10cmFuc3BhcmVudCB6LTIwIHBvaW50ZXItZXZlbnRzLW5vbmVcIiAvPlxyXG5cclxuICAgIHsvKiBQYWdlIHRleHR1cmUgKi99XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgb3BhY2l0eS1bMC4wM11cIiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IFwicmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgdmFyKC0tYWNjZW50KSAxcHgsIHRyYW5zcGFyZW50IDFweClcIiwgYmFja2dyb3VuZFNpemU6IFwiMTZweCAxNnB4XCIgfX0gLz5cclxuXHJcbiAgICB7LyogSW5uZXIgYm9yZGVyICovfVxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0zIHNtOmluc2V0LTQgYm9yZGVyIGJvcmRlci1bdmFyKC0tYm9yZGVyLWNvbG9yKV0gcm91bmRlZC1sZ1wiIC8+XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwIGZsZXggZmxleC1jb2wgaC1mdWxsIHAtNCBzbTpwLTggbWQ6cC0xMFwiPlxyXG4gICAgICB7LyogSGVhZGVyIHJpYmJvbiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi0yIHNtOm1iLTZcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBweC0zIHNtOnB4LTUgcHktMSBzbTpweS0xIHJvdW5kZWQtZnVsbCBiZy1bdmFyKC0tYWNjZW50KV0vMTAgYm9yZGVyIGJvcmRlci1bdmFyKC0tYWNjZW50KV0vMzBcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgc206dGV4dC14cyBmb250LW1vbm8gZm9udC1ib2xkIHRyYWNraW5nLVswLjA1ZW1dIHNtOnRyYWNraW5nLVswLjJlbV0gdXBwZXJjYXNlIHRleHQtW3ZhcigtLWFjY2VudCldXCI+XHJcbiAgICAgICAgICAgIENyZWRlbnRpYWwgUmVjb3JkXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIERpdmlkZXIgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgc206Z2FwLTQgbWItMiBzbTptYi04XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgaC1weCBiZy1ncmFkaWVudC10by1yIGZyb20tdHJhbnNwYXJlbnQgdmlhLVt2YXIoLS1hY2NlbnQpXS80MCB0by10cmFuc3BhcmVudFwiIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIgaC0yIHNtOnctMiBzbTpoLTIgcm90YXRlLTQ1IGJvcmRlciBib3JkZXItW3ZhcigtLWFjY2VudCldLzUwXCIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBoLXB4IGJnLWdyYWRpZW50LXRvLXIgZnJvbS10cmFuc3BhcmVudCB2aWEtW3ZhcigtLWFjY2VudCldLzQwIHRvLXRyYW5zcGFyZW50XCIgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogVGl0bGUgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1zbSBzbTp0ZXh0LXhsIG1kOnRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIG1iLTEgc206bWItMiBsZWFkaW5nLXRpZ2h0IHRyYWNraW5nLXRpZ2h0IHB4LTIgc206cHgtNFwiPlxyXG4gICAgICAgICAge2NlcnQudGl0bGV9XHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgICB7LyogRGVjb3JhdGl2ZSBTZWFsICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLXRvcC0zIC1yaWdodC0wLjUgc206LXRvcC02IHNtOi1yaWdodC0yIG9wYWNpdHktMTAgcG9pbnRlci1ldmVudHMtbm9uZVwiPlxyXG4gICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTYgaC02IHNtOnctMTIgc206aC0xMiB0ZXh0LVt2YXIoLS1hY2NlbnQpXVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIgMUw5IDRINVY4TDIgMTFWMTNMNSAxNlYyMEg5TDEyIDIzTDE1IDIwSDE5VjE2TDIyIDEzVjExTDE5IDhWNEgxNUwxMiAxTTEyIDE3QTUgNSAwIDEgMSAxNyAxMkE1IDUgMCAwIDEgMTIgMTdNMTIgOUEzIDMgMCAxIDAgMTUgMTJBMyAzIDAgMCAwIDEyIDlaXCIgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBJc3N1ZXIgKi99XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQteHMgc206dGV4dC14cyBtZDp0ZXh0LXNtIGZvbnQtbW9ubyB0ZXh0LVt2YXIoLS10ZXh0LXNlY29uZGFyeSldIG1iLTIgc206bWItOFwiPlxyXG4gICAgICAgIElzc3VlZCBieSA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVt2YXIoLS1hY2NlbnQtbGlnaHQpXSBmb250LWJvbGRcIj57Y2VydC5pc3N1ZXJ9PC9zcGFuPlxyXG4gICAgICA8L3A+XHJcblxyXG4gICAgICB7LyogRGVzY3JpcHRpb24gJiBTa2lsbHMgQ29udGFpbmVyICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGZsZXgtY29sIG1pbi1oLTAgb3ZlcmZsb3ctaGlkZGVuIHB4LTEgc206cHgtNFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG92ZXJmbG93LXktYXV0byBweS0yIHNtOnB5LTIgY3VzdG9tLXNjcm9sbGJhclwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBzbTp0ZXh0LXNtIG1kOnRleHQtYmFzZSB0ZXh0LVt2YXIoLS10ZXh0LXNlY29uZGFyeSldIGxlYWRpbmctcmVsYXhlZCB0ZXh0LWNlbnRlciBtYi0zIGl0YWxpYyBvcGFjaXR5LTkwIGJvcmRlci1sIGJvcmRlci1yIGJvcmRlci1bdmFyKC0tYWNjZW50KV0vMjAgcHktMSBzbTpweS0yIHB4LTJcIj5cclxuICAgICAgICAgICAgXCJ7Y2VydC5kZXNjcmlwdGlvbn1cIlxyXG4gICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgIHsvKiBTa2lsbHMgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIGdhcC0xLjUgc206Z2FwLTMgbWItM1wiPlxyXG4gICAgICAgICAgICB7Y2VydC5za2lsbHMubWFwKChza2lsbCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICBrZXk9e3NraWxsfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMiBzbTpweC0zIHB5LTEgc206cHktMSB0ZXh0LXhzIHNtOnRleHQtWzEwcHhdIG1kOnRleHQteHMgZm9udC1tb25vIHJvdW5kZWQtbm9uZSBiZy1bdmFyKC0tYmctYmFzZSldIHRleHQtW3ZhcigtLXRleHQtc2Vjb25kYXJ5KV0gYm9yZGVyIGJvcmRlci1bdmFyKC0tYm9yZGVyLWNvbG9yKV0gZ3JvdXAtaG92ZXI6Ym9yZGVyLVt2YXIoLS1hY2NlbnQpXSB0cmFuc2l0aW9uLWNvbG9yc1wiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3NraWxsfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogRm9vdGVyIGluZm8gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtYXV0byBwdC0yIHNtOnB0LTQgYm9yZGVyLXQgYm9yZGVyLVt2YXIoLS1ib3JkZXItY29sb3IpXS8zMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHRleHQteHMgc206dGV4dC1bMTBweF0gbWQ6dGV4dC14cyBmb250LW1vbm8gdGV4dC1bdmFyKC0tdGV4dC1zZWNvbmRhcnkpXVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0xIHNtOmdhcC0xXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtW3ZhcigtLWFjY2VudCldLzYwIHRleHQtWzEwcHhdIHNtOnRleHQtWzdweF0gdXBwZXJjYXNlIHRyYWNraW5nLXRpZ2h0ZXJcIj5Jc3N1ZSBEYXRlPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlLzgwIHRleHQteHNcIj57Y2VydC5kYXRlfTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge2NlcnQudmVyaWZ5TGluayAmJiBjZXJ0LnZlcmlmeUxpbmsgIT09IFwiI1wiICYmIChcclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPXtjZXJ0LnZlcmlmeUxpbmt9XHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0yIHNtOnB4LTMgcHktMSBzbTpweS0xIGJnLVt2YXIoLS1hY2NlbnQpXS8xMCBib3JkZXIgYm9yZGVyLVt2YXIoLS1hY2NlbnQpXS8zMCB0ZXh0LVt2YXIoLS1hY2NlbnQtbGlnaHQpXSBob3ZlcjpiZy1bdmFyKC0tYWNjZW50KV0gaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgc206Z2FwLTEuNSB0ZXh0LXhzXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFZlcmlmeSA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBzbTp0ZXh0LVsxMHB4XVwiPuKGlzwvc3Bhbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuKSk7XHJcblxyXG4vLyBSaWdodCBwYWdlIC0gQ2VydGlmaWNhdGUgaW1hZ2VcclxuY29uc3QgSW1hZ2VQYWdlID0gUmVhY3QuZm9yd2FyZFJlZigoeyBjZXJ0LCBwYWdlTnVtYmVyIH0sIHJlZikgPT4gKFxyXG4gIDxkaXZcclxuICAgIHJlZj17cmVmfVxyXG4gICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC1mdWxsIHctZnVsbCBvdmVyZmxvdy1oaWRkZW4gYmctW3ZhcigtLWJnLXN1cmZhY2UpXVwiXHJcbiAgICBzdHlsZT17e1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidmFyKC0tYmctc3VyZmFjZSlcIixcclxuICAgICAgYmFja2dyb3VuZDogXCJ2YXIoLS1iZy1zdXJmYWNlKVwiLFxyXG4gICAgICBib3hTaGFkb3c6IFwiaW5zZXQgMCAwIDAgMTAwMHB4IHZhcigtLWJnLXN1cmZhY2UpXCIsXHJcbiAgICB9fVxyXG4gID5cclxuICAgIHsvKiBTcGluZSBzaGFkb3cgKExlZnQgc2lkZSBmb3IgcmlnaHQgcGFnZSkgKi99XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB3LTggaC1mdWxsIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibGFjay80MCB0by10cmFuc3BhcmVudCB6LTIwIHBvaW50ZXItZXZlbnRzLW5vbmVcIiAvPlxyXG5cclxuICAgIHsvKiBJbm5lciBib3JkZXIgKi99XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTQgYm9yZGVyIGJvcmRlci1bdmFyKC0tYm9yZGVyLWNvbG9yKV0gcm91bmRlZC1sZ1wiIC8+XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtZnVsbCBwLTYgc206cC0xMFwiPlxyXG4gICAgICB7LyogU21hbGwgbGFiZWwgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMiBzbTptYi02IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bOXB4XSBzbTp0ZXh0LXhzIGZvbnQtbW9ubyBmb250LW1lZGl1bSB0cmFja2luZy1bMC4zZW1dIHVwcGVyY2FzZSB0ZXh0LVt2YXIoLS10ZXh0LXNlY29uZGFyeSldLzYwXCI+XHJcbiAgICAgICAgICBWaXN1YWwgRG9jdW1lbnRhdGlvblxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogQ2VydGlmaWNhdGUgaW1hZ2UgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBweC0xIHNtOnB4LTQgbWluLWgtMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZ3JvdXAvaW1nXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIC1pbnNldC0xIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1bdmFyKC0tYWNjZW50KV0gdG8tW3ZhcigtLWFjY2VudC1saWdodCldIHJvdW5kZWQtbGcgYmx1ciBvcGFjaXR5LTIwIGdyb3VwLWhvdmVyL2ltZzpvcGFjaXR5LTQwIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwXCI+PC9kaXY+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz17Y2VydC5pbWFnZX1cclxuICAgICAgICAgICAgYWx0PXtgJHtjZXJ0LnRpdGxlfSBDZXJ0aWZpY2F0ZWB9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIG1heC13LWZ1bGwgbWF4LWgtZnVsbCBvYmplY3QtY29udGFpbiByb3VuZGVkLWxnIHNoYWRvdy0yeGwgYm9yZGVyIGJvcmRlci1bdmFyKC0tYm9yZGVyLWNvbG9yKV0gZ3JheXNjYWxlLVswLjJdIGhvdmVyOmdyYXlzY2FsZS0wIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4pKTtcclxuXHJcbi8vIE1vYmlsZSBmbGlwLXVwIGNhcmQgKHBob25lIHZpZXcpXHJcbmNvbnN0IE1vYmlsZUZsaXBDYXJkID0gKHsgY2VydCwgaXNPcGVuLCBvblRvZ2dsZSB9KSA9PiAoXHJcbiAgPG1vdGlvbi5kaXZcclxuICAgIGxheW91dFxyXG4gICAgY2xhc3NOYW1lPVwicm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1bdmFyKC0tYm9yZGVyLWNvbG9yKV0gYmctW3ZhcigtLWJnLXN1cmZhY2UpXS85MCBzaGFkb3cteGwgb3ZlcmZsb3ctaGlkZGVuXCJcclxuICAgIHRyYW5zaXRpb249e3sgbGF5b3V0OiB7IGR1cmF0aW9uOiAwLjMsIGVhc2U6IFswLjI1LCAwLjgsIDAuMjUsIDFdIH0gfX1cclxuICA+XHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIG9uQ2xpY2s9e29uVG9nZ2xlfVxyXG4gICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTQgcHktNFwiXHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTIgaC0xMiByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItW3ZhcigtLWJvcmRlci1jb2xvcildIGJnLVt2YXIoLS1iZy1iYXNlKV0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz17Y2VydC5pbWFnZX0gYWx0PXtgJHtjZXJ0LnRpdGxlfSB0aHVtYmB9IGNsYXNzTmFtZT1cIm1heC13LWZ1bGwgbWF4LWgtZnVsbCBvYmplY3QtY29udGFpblwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIGZvbnQtbW9ubyB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMmVtXSB0ZXh0LVt2YXIoLS1hY2NlbnQpXS83MFwiPkNyZWRlbnRpYWw8L3A+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBsZWFkaW5nLXNudWdcIj57Y2VydC50aXRsZX08L2gzPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC1bdmFyKC0tdGV4dC1zZWNvbmRhcnkpXVwiPlxyXG4gICAgICAgICAgICB7Y2VydC5pc3N1ZXJ9IC0ge2NlcnQuZGF0ZX1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtW3ZhcigtLWFjY2VudC1saWdodCldIHRleHQtYmFzZSBmb250LW1vbm9cIj57aXNPcGVuID8gXCItXCIgOiBcIitcIn08L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuXHJcbiAgICA8bW90aW9uLmRpdlxyXG4gICAgICBpbml0aWFsPXtmYWxzZX1cclxuICAgICAgYW5pbWF0ZT17eyBoZWlnaHQ6IGlzT3BlbiA/IFwiYXV0b1wiIDogMCwgb3BhY2l0eTogaXNPcGVuID8gMSA6IDAgfX1cclxuICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4zIH19XHJcbiAgICAgIGNsYXNzTmFtZT1cInB4LTQgcGItNFwiXHJcbiAgICAgIHN0eWxlPXt7IG92ZXJmbG93OiBcImhpZGRlblwiIH19XHJcbiAgICA+XHJcbiAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgaW5pdGlhbD17eyByb3RhdGVYOiAtOTAsIG9wYWNpdHk6IDAgfX1cclxuICAgICAgICBhbmltYXRlPXt7IHJvdGF0ZVg6IGlzT3BlbiA/IDAgOiAtOTAsIG9wYWNpdHk6IGlzT3BlbiA/IDEgOiAwIH19XHJcbiAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4zNSwgZWFzZTogWzAuMjUsIDAuOCwgMC4yNSwgMV0gfX1cclxuICAgICAgICBjbGFzc05hbWU9XCJvcmlnaW4tdG9wXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVt2YXIoLS1ib3JkZXItY29sb3IpXSBiZy1ibGFjay80MCBvdmVyZmxvdy1oaWRkZW4gbWItM1wiPlxyXG4gICAgICAgICAgPGltZyBzcmM9e2NlcnQuaW1hZ2V9IGFsdD17Y2VydC50aXRsZX0gY2xhc3NOYW1lPVwidy1mdWxsIG9iamVjdC1jb3ZlclwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgbWItMVwiPntjZXJ0LnRpdGxlfTwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtW3ZhcigtLXRleHQtc2Vjb25kYXJ5KV0gbWItMyBpdGFsaWNcIj57Y2VydC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMiBtYi0zXCI+XHJcbiAgICAgICAgICB7Y2VydC5za2lsbHMubWFwKChza2lsbCkgPT4gKFxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgIGtleT17c2tpbGx9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMiBweS0xIHRleHQtWzExcHhdIGZvbnQtbW9ubyByb3VuZGVkLW1kIGJnLVt2YXIoLS1iZy1iYXNlKV0gYm9yZGVyIGJvcmRlci1bdmFyKC0tYm9yZGVyLWNvbG9yKV0gdGV4dC1bdmFyKC0tdGV4dC1zZWNvbmRhcnkpXVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7c2tpbGx9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtjZXJ0LnZlcmlmeUxpbmsgJiYgY2VydC52ZXJpZnlMaW5rICE9PSBcIiNcIiAmJiAoXHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPXtjZXJ0LnZlcmlmeUxpbmt9XHJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTEgcHgtMyBweS0yIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1bdmFyKC0tYWNjZW50KV0vNDAgdGV4dC1bdmFyKC0tYWNjZW50LWxpZ2h0KV0gaG92ZXI6YmctW3ZhcigtLWFjY2VudCldIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1jb2xvcnMgdGV4dC1zbSBmb250LXNlbWlib2xkXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgVmVyaWZ5ID9cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICApfVxyXG4gICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICA8L21vdGlvbi5kaXY+XHJcbiAgPC9tb3Rpb24uZGl2PlxyXG4pO1xyXG5cclxuY29uc3QgQ2VydGlmaWNhdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCBib29rUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IFtzY3JlZW5TaXplLCBzZXRTY3JlZW5TaXplXSA9IHVzZVN0YXRlKFwiZGVza3RvcFwiKTtcclxuICBjb25zdCBbb3BlbkNhcmQsIHNldE9wZW5DYXJkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgY2hlY2sgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHcgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgaWYgKHcgPCA0ODApIHNldFNjcmVlblNpemUoXCJ4c1wiKTtcclxuICAgICAgZWxzZSBpZiAodyA8IDc2OCkgc2V0U2NyZWVuU2l6ZShcInNtXCIpO1xyXG4gICAgICBlbHNlIHNldFNjcmVlblNpemUoXCJkZXNrdG9wXCIpO1xyXG4gICAgfTtcclxuICAgIGNoZWNrKCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBjaGVjayk7XHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgY2hlY2spO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgYm9va0RpbWVuc2lvbnMgPSB7XHJcbiAgICB4czogeyB3aWR0aDogMjAwLCBoZWlnaHQ6IDMwMCwgbWluV2lkdGg6IDE4MCwgbWF4V2lkdGg6IDIyMCwgbWluSGVpZ2h0OiAyODAsIG1heEhlaWdodDogMzQwIH0sXHJcbiAgICBzbTogeyB3aWR0aDogMzAwLCBoZWlnaHQ6IDQyMCwgbWluV2lkdGg6IDI2MCwgbWF4V2lkdGg6IDM0MCwgbWluSGVpZ2h0OiAzODAsIG1heEhlaWdodDogNDgwIH0sXHJcbiAgICBkZXNrdG9wOiB7IHdpZHRoOiA0NTAsIGhlaWdodDogNTUwLCBtaW5XaWR0aDogMzAwLCBtYXhXaWR0aDogNTUwLCBtaW5IZWlnaHQ6IDQwMCwgbWF4SGVpZ2h0OiA2ODAgfSxcclxuICB9O1xyXG5cclxuICBjb25zdCBkaW1zID0gYm9va0RpbWVuc2lvbnNbc2NyZWVuU2l6ZV07XHJcbiAgY29uc3QgaXNNb2JpbGUgPSBzY3JlZW5TaXplICE9PSBcImRlc2t0b3BcIjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPVwiY2VydGlmaWNhdGlvbnNcIiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB0ZXh0LXdoaXRlIHB5LTEyIG1kOnB5LTIwIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICB7LyogQmFja2dyb3VuZCBnbG93ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgcG9pbnRlci1ldmVudHMtbm9uZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctOTYgaC05NiByb3VuZGVkLWZ1bGwgYmctaW5kaWdvLTkwMC8yMCBibHVyLVsxMjBweF1cIiAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgcmlnaHQtMCB3LTk2IGgtOTYgcm91bmRlZC1mdWxsIGJnLXJvc2UtOTAwLzIwIGJsdXItWzEyMHB4XVwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwIG1heC13LTd4bCBteC1hdXRvIHB4LTYgbWQ6cHgtMTJcIj5cclxuICAgICAgICB7LyogVGl0bGUgKi99XHJcbiAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTEwIG1kOm1iLTE0IGZsZXggZmxleC1jb2wgZ2FwLTRcIlxyXG4gICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAyMCB9fVxyXG4gICAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxyXG4gICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxyXG4gICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC42IH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdy1maXRcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LW1vbm8gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCB0ZXh0LVt2YXIoLS1hY2NlbnQtbGlnaHQpXVwiPjA1PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3LTYgaC1weCBiZy1ncmFkaWVudC10by1yIGZyb20tW3ZhcigtLWFjY2VudCldIHRvLXRyYW5zcGFyZW50XCI+PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgbWQ6dGV4dC01eGwgZm9udC1ib2xkIHRleHQtd2hpdGUgdHJhY2tpbmctdGlnaHRcIj5cclxuICAgICAgICAgICAgQ2VydGlmaWNhdGlvbnNcclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVt2YXIoLS10ZXh0LXNlY29uZGFyeSldIHRleHQtYmFzZSBtZDp0ZXh0LWxnIGZvbnQtbGlnaHRcIj5cclxuICAgICAgICAgICAge2lzTW9iaWxlID8gXCJTd2lwZSB0aHJvdWdoIG15IHByb2Zlc3Npb25hbCBjcmVkZW50aWFsc1wiIDogXCJGbGlwIHRocm91Z2ggbXkgcHJvZmVzc2lvbmFsIGNlcnRpZmljYXRpb25zXCJ9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG5cclxuICAgICAgICB7LyogQm9vayAqL31cclxuICAgICAgICB7aXNNb2JpbGUgPyAoXHJcbiAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC01XCJcclxuICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAxMiB9fVxyXG4gICAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB5OiAwIH19XHJcbiAgICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cclxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC42LCBkZWxheTogMC4yIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjZXJ0aWZpY2F0aW9ucy5tYXAoKGNlcnQpID0+IChcclxuICAgICAgICAgICAgICA8TW9iaWxlRmxpcENhcmRcclxuICAgICAgICAgICAgICAgIGtleT17Y2VydC50aXRsZX1cclxuICAgICAgICAgICAgICAgIGNlcnQ9e2NlcnR9XHJcbiAgICAgICAgICAgICAgICBpc09wZW49e29wZW5DYXJkID09PSBjZXJ0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgb25Ub2dnbGU9eygpID0+IHNldE9wZW5DYXJkKG9wZW5DYXJkID09PSBjZXJ0LnRpdGxlID8gbnVsbCA6IGNlcnQudGl0bGUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgc2NhbGU6IDAuOSB9fVxyXG4gICAgICAgICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHNjYWxlOiAxIH19XHJcbiAgICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuOCwgZGVsYXk6IDAuMiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEhUTUxGbGlwQm9va1xyXG4gICAgICAgICAgICAgICAga2V5PXtzY3JlZW5TaXplfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtib29rUmVmfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9e2RpbXMud2lkdGh9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9e2RpbXMuaGVpZ2h0fVxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInN0cmV0Y2hcIlxyXG4gICAgICAgICAgICAgICAgbWluV2lkdGg9e2RpbXMubWluV2lkdGh9XHJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aD17ZGltcy5tYXhXaWR0aH1cclxuICAgICAgICAgICAgICAgIG1pbkhlaWdodD17ZGltcy5taW5IZWlnaHR9XHJcbiAgICAgICAgICAgICAgICBtYXhIZWlnaHQ9e2RpbXMubWF4SGVpZ2h0fVxyXG4gICAgICAgICAgICAgICAgbWF4U2hhZG93T3BhY2l0eT17MC41fVxyXG4gICAgICAgICAgICAgICAgc2hvd0NvdmVyPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgbW9iaWxlU2Nyb2xsU3VwcG9ydD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNlcnRpZmljYXRpb24tYm9va1wiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e319XHJcbiAgICAgICAgICAgICAgICBmbGlwcGluZ1RpbWU9ezgwMH1cclxuICAgICAgICAgICAgICAgIHVzZVBvcnRyYWl0PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIHN0YXJ0WkluZGV4PXswfVxyXG4gICAgICAgICAgICAgICAgYXV0b1NpemU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBkcmF3U2hhZG93PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgdXNlTW91c2VFdmVudHM9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBzd2lwZURpc3RhbmNlPXszMH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7LyogRnJvbnQgQ292ZXIgKi99XHJcbiAgICAgICAgICAgICAgICA8UGFnZUNvdmVyPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTYgaC0xNiBtYi00IHJvdW5kZWQtZnVsbCBiZy1bdmFyKC0tYWNjZW50KV0vMjAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctOCBoLTggdGV4dC1bdmFyKC0tYWNjZW50KV1cIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgZD1cIk05IDEybDIgMiA0LTRNNy44MzUgNC42OTdhMy40MiAzLjQyIDAgMDAxLjk0Ni0uODA2IDMuNDIgMy40MiAwIDAxNC40MzggMCAzLjQyIDMuNDIgMCAwMDEuOTQ2LjgwNiAzLjQyIDMuNDIgMCAwMTMuMTM4IDMuMTM4IDMuNDIgMy40MiAwIDAwLjgwNiAxLjk0NiAzLjQyIDMuNDIgMCAwMTAgNC40MzggMy40MiAzLjQyIDAgMDAtLjgwNiAxLjk0NiAzLjQyIDMuNDIgMCAwMS0zLjEzOCAzLjEzOCAzLjQyIDMuNDIgMCAwMC0xLjk0Ni44MDYgMy40MiAzLjQyIDAgMDEtNC40MzggMCAzLjQyIDMuNDIgMCAwMC0xLjk0Ni0uODA2IDMuNDIgMy40MiAwIDAxLTMuMTM4LTMuMTM4IDMuNDIgMy40MiAwIDAwLS44MDYtMS45NDYgMy40MiAzLjQyIDAgMDEwLTQuNDM4IDMuNDIgMy40MiAwIDAwLjgwNi0xLjk0NiAzLjQyIDMuNDIgMCAwMTMuMTM4LTMuMTM4elwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBzbTp0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC13aGl0ZSBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTXkgQ2VydGlmaWNhdGlvbnNcclxuICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bdmFyKC0tdGV4dC1zZWNvbmRhcnkpXSB0ZXh0LXhzXCI+Q2xpY2sgdG8gb3BlbjwvcD5cclxuICAgICAgICAgICAgICAgIDwvUGFnZUNvdmVyPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBDZXJ0aWZpY2F0aW9uIHBhaXJzOiBEZXRhaWwgKGxlZnQpICsgSW1hZ2UgKHJpZ2h0KSAqL31cclxuICAgICAgICAgICAgICAgIHtjZXJ0aWZpY2F0aW9ucy5mbGF0TWFwKChjZXJ0LCBpZHgpID0+IFtcclxuICAgICAgICAgICAgICAgICAgPERldGFpbFBhZ2Uga2V5PXtgZGV0YWlsLSR7aWR4fWB9IGNlcnQ9e2NlcnR9IHBhZ2VOdW1iZXI9e2lkeCAqIDIgKyAxfSAvPiwgXHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZVBhZ2Uga2V5PXtgaW1hZ2UtJHtpZHh9YH0gY2VydD17Y2VydH0gcGFnZU51bWJlcj17aWR4ICogMiArIDJ9IC8+LCBcclxuICAgICAgICAgICAgICAgIF0pfVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBCYWNrIENvdmVyICovfVxyXG4gICAgICAgICAgICAgICAgPFBhZ2VDb3Zlcj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgbWItNCByb3VuZGVkLWZ1bGwgYmctW3ZhcigtLWFjY2VudCldLzIwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTYgaC02IHRleHQtW3ZhcigtLWFjY2VudCldXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNMTIgNi4yNTN2MTNtMC0xM0MxMC44MzIgNS40NzcgOS4yNDYgNSA3LjUgNVM0LjE2OCA1LjQ3NyAzIDYuMjUzdjEzQzQuMTY4IDE4LjQ3NyA1Ljc1NCAxOCA3LjUgMThzMy4zMzIuNDc3IDQuNSAxLjI1M20wLTEzQzEzLjE2OCA1LjQ3NyAxNC43NTQgNSAxNi41IDVjMS43NDcgMCAzLjMzMi40NzcgNC41IDEuMjUzdjEzQzE5LjgzMiAxOC40NzcgMTguMjQ3IDE4IDE2LjUgMThjLTEuNzQ2IDAtMy4zMzIuNDc3LTQuNSAxLjI1M1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVt2YXIoLS10ZXh0LXNlY29uZGFyeSldIHRleHQteHNcIj5BbHdheXMgTGVhcm5pbmcuLi48L3A+XHJcbiAgICAgICAgICAgICAgICA8L1BhZ2VDb3Zlcj5cclxuICAgICAgICAgICAgICA8L0hUTUxGbGlwQm9vaz5cclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIE5hdmlnYXRpb24gYnV0dG9ucyAqL31cclxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGdhcC00IG10LThcIlxyXG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxyXG4gICAgICAgICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEgfX1cclxuICAgICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogMC41IH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBib29rUmVmLmN1cnJlbnQ/LnBhZ2VGbGlwKCk/LmZsaXBQcmV2KCl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTIuNSByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItd2hpdGUvMjAgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIGhvdmVyOmJnLXdoaXRlLzUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIHRleHQtc21cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFByZXZpb3VzXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYm9va1JlZi5jdXJyZW50Py5wYWdlRmxpcCgpPy5mbGlwTmV4dCgpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS0yLjUgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXdoaXRlLzIwIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBob3ZlcjpiZy13aGl0ZS81IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCB0ZXh0LXNtXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBOZXh0XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDZXJ0aWZpY2F0aW9uO1xyXG4iXSwiZmlsZSI6IkM6L1VzZXJzL3RlamFzc3N1dGhyYXZlL0Rvd25sb2Fkcy90ZWphcy1zLXN1dGhyYXZlLXBvcnRmb2xpby9zcmMvc2VjdGlvbnMvQ2VydGlmaWNhdGlvbi5qc3gifQ==
