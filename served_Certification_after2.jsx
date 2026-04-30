import { createHotContext as __vite__createHotContext } from "/tejas-portfolio-dist/@vite/client";import.meta.hot = __vite__createHotContext("/src/sections/Certification.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/tejas-portfolio-dist/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=ed49c6f3"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport1_react from "/tejas-portfolio-dist/node_modules/.vite/deps/react.js?v=ed49c6f3"; const React = __vite__cjsImport1_react.__esModule ? __vite__cjsImport1_react.default : __vite__cjsImport1_react; const useRef = __vite__cjsImport1_react["useRef"]; const useState = __vite__cjsImport1_react["useState"]; const useEffect = __vite__cjsImport1_react["useEffect"];
import HTMLFlipBook from "/tejas-portfolio-dist/node_modules/.vite/deps/react-pageflip.js?v=7d6ed781";
import { motion } from "/tejas-portfolio-dist/node_modules/.vite/deps/framer-motion.js?v=9fbf7331";
import MLCert from "/tejas-portfolio-dist/src/assets/ML_certi.jpeg?import";
import VLSICert from "/tejas-portfolio-dist/src/assets/VLSI_certi.jpeg?import";
import PYTCert from "/tejas-portfolio-dist/src/assets/PYT_certi.jpeg?import";
import PYTIBMCert from "/tejas-portfolio-dist/src/assets/PYT_IBM_certi.png?import";
import PYTINFOCert from "/tejas-portfolio-dist/src/assets/PYT_INFO_certi.jpeg?import";
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
          lineNumber: 89,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-5 border border-[var(--border-color)]/50 rounded-lg" }, void 0, false, {
          fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
          lineNumber: 90,
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
              lineNumber: 94,
              columnNumber: 3
            },
            this
          )
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "relative z-10 flex flex-col items-center justify-center h-full px-8 text-center", children }, void 0, false, {
          fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
          lineNumber: 102,
          columnNumber: 5
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
      lineNumber: 79,
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
          lineNumber: 120,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 opacity-[0.03]", style: { backgroundImage: "radial-gradient(circle, var(--accent) 1px, transparent 1px)", backgroundSize: "16px 16px" } }, void 0, false, {
          fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
          lineNumber: 123,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-3 sm:inset-4 border border-[var(--border-color)] rounded-lg" }, void 0, false, {
          fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
          lineNumber: 126,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "relative z-10 flex flex-col h-full p-4 sm:p-8 md:p-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-2 sm:mb-6", children: /* @__PURE__ */ jsxDEV("div", { className: "inline-block px-3 sm:px-5 py-1 sm:py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30", children: /* @__PURE__ */ jsxDEV("span", { className: "text-xs sm:text-xs font-mono font-bold tracking-[0.05em] sm:tracking-[0.2em] uppercase text-[var(--accent)]", children: "Credential Record" }, void 0, false, {
            fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
            lineNumber: 132,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
            lineNumber: 131,
            columnNumber: 9
          }, this) }, void 0, false, {
            fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
            lineNumber: 130,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 sm:gap-4 mb-2 sm:mb-8", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex-1 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent" }, void 0, false, {
              fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
              lineNumber: 140,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "w-2 h-2 sm:w-2 sm:h-2 rotate-45 border border-[var(--accent)]/50" }, void 0, false, {
              fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
              lineNumber: 141,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex-1 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent" }, void 0, false, {
              fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
              lineNumber: 142,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
            lineNumber: 139,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-sm sm:text-xl md:text-2xl font-bold text-center text-white mb-1 sm:mb-2 leading-tight tracking-tight px-2 sm:px-4", children: cert.title }, void 0, false, {
              fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
              lineNumber: 147,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "absolute -top-3 -right-0.5 sm:-top-6 sm:-right-2 opacity-10 pointer-events-none", children: /* @__PURE__ */ jsxDEV("svg", { className: "w-6 h-6 sm:w-12 sm:h-12 text-[var(--accent)]", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDEV("path", { d: "M12 1L9 4H5V8L2 11V13L5 16V20H9L12 23L15 20H19V16L22 13V11L19 8V4H15L12 1M12 17A5 5 0 1 1 17 12A5 5 0 0 1 12 17M12 9A3 3 0 1 0 15 12A3 3 0 0 0 12 9Z" }, void 0, false, {
              fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
              lineNumber: 153,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
              lineNumber: 152,
              columnNumber: 11
            }, this) }, void 0, false, {
              fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
              lineNumber: 151,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
            lineNumber: 146,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-center text-xs sm:text-xs md:text-sm font-mono text-[var(--text-secondary)] mb-2 sm:mb-8", children: [
            "Issued by ",
            /* @__PURE__ */ jsxDEV("span", { className: "text-[var(--accent-light)] font-bold", children: cert.issuer }, void 0, false, {
              fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
              lineNumber: 160,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
            lineNumber: 159,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex-1 flex flex-col min-h-0 overflow-hidden px-1 sm:px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "flex-1 overflow-y-auto py-2 sm:py-2 custom-scrollbar", children: [
            /* @__PURE__ */ jsxDEV("p", { className: "text-xs sm:text-sm md:text-base text-[var(--text-secondary)] leading-relaxed text-center mb-3 italic opacity-90 border-l border-r border-[var(--accent)]/20 py-1 sm:py-2 px-2", children: [
              '"',
              cert.description,
              '"'
            ] }, void 0, true, {
              fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
              lineNumber: 166,
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
                  lineNumber: 173,
                  columnNumber: 11
                },
                this
              )
            ) }, void 0, false, {
              fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
              lineNumber: 171,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
            lineNumber: 165,
            columnNumber: 9
          }, this) }, void 0, false, {
            fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
            lineNumber: 164,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-auto pt-2 sm:pt-4 border-t border-[var(--border-color)]/30", children: /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-center text-xs sm:text-[10px] md:text-xs font-mono text-[var(--text-secondary)]", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-1 sm:gap-1", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-[var(--accent)]/60 text-[10px] sm:text-[7px] uppercase tracking-tighter", children: "Issue Date" }, void 0, false, {
                fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                lineNumber: 188,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "text-white/80 text-xs", children: cert.date }, void 0, false, {
                fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                lineNumber: 189,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
              lineNumber: 187,
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
                    lineNumber: 198,
                    columnNumber: 22
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                lineNumber: 192,
                columnNumber: 9
              },
              this
            )
          ] }, void 0, true, {
            fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
            lineNumber: 186,
            columnNumber: 9
          }, this) }, void 0, false, {
            fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
            lineNumber: 185,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
          lineNumber: 128,
          columnNumber: 5
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
      lineNumber: 110,
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
          lineNumber: 219,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-4 border border-[var(--border-color)] rounded-lg" }, void 0, false, {
          fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
          lineNumber: 222,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "relative z-10 flex flex-col items-center justify-center h-full p-6 sm:p-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "mb-2 sm:mb-6 text-center", children: /* @__PURE__ */ jsxDEV("span", { className: "text-[9px] sm:text-xs font-mono font-medium tracking-[0.3em] uppercase text-[var(--text-secondary)]/60", children: "Visual Documentation" }, void 0, false, {
            fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
            lineNumber: 227,
            columnNumber: 9
          }, this) }, void 0, false, {
            fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
            lineNumber: 226,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex-1 flex items-center justify-center w-full px-1 sm:px-4 min-h-0", children: /* @__PURE__ */ jsxDEV("div", { className: "relative group/img", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "absolute -inset-1 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] rounded-lg blur opacity-20 group-hover/img:opacity-40 transition duration-500" }, void 0, false, {
              fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
              lineNumber: 235,
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
                lineNumber: 236,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, true, {
            fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
            lineNumber: 234,
            columnNumber: 9
          }, this) }, void 0, false, {
            fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
            lineNumber: 233,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
          lineNumber: 224,
          columnNumber: 5
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
      lineNumber: 209,
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
                lineNumber: 260,
                columnNumber: 11
              }, this) }, void 0, false, {
                fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                lineNumber: 259,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "text-left", children: [
                /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--accent)]/70", children: "Credential" }, void 0, false, {
                  fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                  lineNumber: 263,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ jsxDEV("h3", { className: "text-base font-semibold text-white leading-snug", children: cert.title }, void 0, false, {
                  fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                  lineNumber: 264,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-[11px] text-[var(--text-secondary)]", children: [
                  cert.issuer,
                  " - ",
                  cert.date
                ] }, void 0, true, {
                  fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                  lineNumber: 265,
                  columnNumber: 11
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                lineNumber: 262,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
              lineNumber: 258,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-[var(--accent-light)] text-base font-mono", children: isOpen ? "-" : "+" }, void 0, false, {
              fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
              lineNumber: 270,
              columnNumber: 7
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
          lineNumber: 254,
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
                  lineNumber: 287,
                  columnNumber: 11
                }, this) }, void 0, false, {
                  fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                  lineNumber: 286,
                  columnNumber: 9
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-white font-semibold mb-1", children: cert.title }, void 0, false, {
                  fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                  lineNumber: 289,
                  columnNumber: 9
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-[var(--text-secondary)] mb-3 italic", children: cert.description }, void 0, false, {
                  fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                  lineNumber: 290,
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
                      lineNumber: 293,
                      columnNumber: 9
                    },
                    this
                  )
                ) }, void 0, false, {
                  fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                  lineNumber: 291,
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
                    lineNumber: 302,
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
              lineNumber: 280,
              columnNumber: 7
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
          lineNumber: 273,
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
    lineNumber: 249,
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
        lineNumber: 346,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-0 right-0 w-96 h-96 rounded-full bg-rose-900/20 blur-[120px]" }, void 0, false, {
        fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
        lineNumber: 347,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
      lineNumber: 345,
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
                lineNumber: 360,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "w-6 h-px bg-gradient-to-r from-[var(--accent)] to-transparent" }, void 0, false, {
                fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                lineNumber: 361,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
              lineNumber: 359,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl md:text-5xl font-bold text-white tracking-tight", children: "Certifications" }, void 0, false, {
              fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
              lineNumber: 363,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-[var(--text-secondary)] text-base md:text-lg font-light", children: isMobile ? "Swipe through my professional credentials" : "Flip through my professional certifications" }, void 0, false, {
              fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
              lineNumber: 366,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
          lineNumber: 352,
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
                lineNumber: 381,
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
          lineNumber: 373,
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
                      lineNumber: 425,
                      columnNumber: 23
                    }, this) }, void 0, false, {
                      fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                      lineNumber: 424,
                      columnNumber: 21
                    }, this) }, void 0, false, {
                      fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                      lineNumber: 423,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV("h2", { className: "text-xl sm:text-2xl font-bold text-white mb-2", children: "My Certifications" }, void 0, false, {
                      fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                      lineNumber: 428,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV("p", { className: "text-[var(--text-secondary)] text-xs", children: "Click to open" }, void 0, false, {
                      fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                      lineNumber: 431,
                      columnNumber: 19
                    }, this)
                  ] }, void 0, true, {
                    fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                    lineNumber: 422,
                    columnNumber: 17
                  }, this),
                  certifications.flatMap(
                    (cert, idx) => [
                      /* @__PURE__ */ jsxDEV(DetailPage, { cert, pageNumber: idx * 2 + 1 }, `detail-${idx}`, false, {
                        fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                        lineNumber: 436,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ jsxDEV(ImagePage, { cert, pageNumber: idx * 2 + 2 }, `image-${idx}`, false, {
                        fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                        lineNumber: 437,
                        columnNumber: 15
                      }, this)
                    ]
                  ),
                  /* @__PURE__ */ jsxDEV(PageCover, { children: [
                    /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 mb-4 rounded-full bg-[var(--accent)]/20 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("svg", { className: "w-6 h-6 text-[var(--accent)]", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsxDEV("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" }, void 0, false, {
                      fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                      lineNumber: 444,
                      columnNumber: 23
                    }, this) }, void 0, false, {
                      fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                      lineNumber: 443,
                      columnNumber: 21
                    }, this) }, void 0, false, {
                      fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                      lineNumber: 442,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV("p", { className: "text-[var(--text-secondary)] text-xs", children: "Always Learning..." }, void 0, false, {
                      fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                      lineNumber: 447,
                      columnNumber: 19
                    }, this)
                  ] }, void 0, true, {
                    fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                    lineNumber: 441,
                    columnNumber: 17
                  }, this)
                ]
              },
              screenSize,
              true,
              {
                fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
                lineNumber: 398,
                columnNumber: 15
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
            lineNumber: 391,
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
                  lineNumber: 460,
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
                  lineNumber: 466,
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
            lineNumber: 453,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
        lineNumber: 390,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
      lineNumber: 350,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/sections/Certification.jsx",
    lineNumber: 343,
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

//# sourceMappingURL=data:application/json;base64,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cElGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FxSUE7QUFFSjtBQUFFaEMsR0FsS0lELGVBQWE7QUFBQSxNQUFiQTtBQW9LTixlQUFlQTtBQUFjLElBQUFoQyxJQUFBUyxLQUFBRSxLQUFBTSxLQUFBRSxLQUFBQyxLQUFBVyxLQUFBbUM7QUFBQSxhQUFBbEUsSUFBQTtBQUFBLGFBQUFTLEtBQUE7QUFBQSxhQUFBRSxLQUFBO0FBQUEsYUFBQU0sS0FBQTtBQUFBLGFBQUFFLEtBQUE7QUFBQSxhQUFBQyxLQUFBO0FBQUEsYUFBQVcsS0FBQTtBQUFBLGFBQUFtQyxLQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhUTUxGbGlwQm9vayIsIm1vdGlvbiIsIk1MQ2VydCIsIlZMU0lDZXJ0IiwiUFlUQ2VydCIsIlBZVElCTUNlcnQiLCJQWVRJTkZPQ2VydCIsIkFXU0lORk9DZXJ0IiwiY2VydGlmaWNhdGlvbnMiLCJ0aXRsZSIsImlzc3VlciIsImRhdGUiLCJkZXNjcmlwdGlvbiIsInNraWxscyIsImltYWdlIiwidmVyaWZ5TGluayIsIlBhZ2VDb3ZlciIsImZvcndhcmRSZWYiLCJfYyIsImNoaWxkcmVuIiwicmVmIiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZCIsImJveFNoYWRvdyIsIm1hcCIsInBvcyIsImkiLCJfYzIiLCJEZXRhaWxQYWdlIiwiX2MzIiwiY2VydCIsInBhZ2VOdW1iZXIiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsInNraWxsIiwiX2M0IiwiSW1hZ2VQYWdlIiwiX2M1IiwiX2M2IiwiTW9iaWxlRmxpcENhcmQiLCJpc09wZW4iLCJvblRvZ2dsZSIsImxheW91dCIsImR1cmF0aW9uIiwiZWFzZSIsImhlaWdodCIsIm9wYWNpdHkiLCJvdmVyZmxvdyIsInJvdGF0ZVgiLCJfYzciLCJDZXJ0aWZpY2F0aW9uIiwiX3MiLCJib29rUmVmIiwic2NyZWVuU2l6ZSIsInNldFNjcmVlblNpemUiLCJvcGVuQ2FyZCIsInNldE9wZW5DYXJkIiwiY2hlY2siLCJ3Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYm9va0RpbWVuc2lvbnMiLCJ4cyIsIndpZHRoIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsInNtIiwiZGVza3RvcCIsImRpbXMiLCJpc01vYmlsZSIsInkiLCJvbmNlIiwiZGVsYXkiLCJzY2FsZSIsImZsYXRNYXAiLCJpZHgiLCJjdXJyZW50IiwicGFnZUZsaXAiLCJmbGlwUHJldiIsImZsaXBOZXh0IiwiX2M4Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkNlcnRpZmljYXRpb24uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhUTUxGbGlwQm9vayBmcm9tIFwicmVhY3QtcGFnZWZsaXBcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuXHJcbi8vIEltcG9ydCBjZXJ0aWZpY2F0ZSBpbWFnZXNcclxuaW1wb3J0IE1MQ2VydCBmcm9tIFwiLi4vYXNzZXRzL01MX2NlcnRpLmpwZWdcIjtcclxuaW1wb3J0IFZMU0lDZXJ0IGZyb20gXCIuLi9hc3NldHMvVkxTSV9jZXJ0aS5qcGVnXCI7XHJcbmltcG9ydCBQWVRDZXJ0IGZyb20gXCIuLi9hc3NldHMvUFlUX2NlcnRpLmpwZWdcIjtcclxuaW1wb3J0IFBZVElCTUNlcnQgZnJvbSBcIi4uL2Fzc2V0cy9QWVRfSUJNX2NlcnRpLnBuZ1wiO1xyXG5pbXBvcnQgUFlUSU5GT0NlcnQgZnJvbSBcIi4uL2Fzc2V0cy9QWVRfSU5GT19jZXJ0aS5qcGVnXCI7XHJcbmltcG9ydCBBV1NJTkZPQ2VydCBmcm9tIFwiLi4vYXNzZXRzL0FXU19JTkZPX2NlcnRpLnBuZ1wiO1xyXG5cclxuY29uc3QgY2VydGlmaWNhdGlvbnMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQVdTIENsb3VkIFF1ZXN0IOKAlCBDbG91ZCBQcmFjdGl0aW9uZXIgKFRyYWluZWQpXCIsXHJcbiAgICBpc3N1ZXI6IFwiQVdTXCIsXHJcbiAgICBkYXRlOiBcIkFwciAyMDI2XCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJDb21wbGV0ZWQgdGhlIEFXUyBDbG91ZCBRdWVzdCBDbG91ZCBQcmFjdGl0aW9uZXIgdHJhaW5pbmcgcHJvZ3JhbSBpbiBBcHJpbCAyMDI2IOKAlCBmb3VuZGF0aW9uYWwgY2xvdWQgY29uY2VwdHMsIEFXUyBjb3JlIHNlcnZpY2VzLCBhbmQgYmVzdCBwcmFjdGljZXMgZm9yIGNsb3VkIHNlY3VyaXR5IGFuZCBjb3N0IG1hbmFnZW1lbnQuXCIsXHJcbiAgICBza2lsbHM6IFtcIkFXU1wiLCBcIkNsb3VkIEZ1bmRhbWVudGFsc1wiLCBcIkNsb3VkIFF1ZXN0XCIsIFwiQ2xvdWQgUHJhY3RpdGlvbmVyXCJdLFxyXG4gICAgaW1hZ2U6IEFXU0lORk9DZXJ0LFxyXG4gICAgdmVyaWZ5TGluazogXCIjXCJcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlRlY2hBIEFXUyBTb2x1dGlvbiBBcmNoaXRlY3QgQ2VydGlmaWNhdGlvblwiLFxyXG4gICAgaXNzdWVyOiBcIkluZm9zeXMgU3ByaW5nYm9hcmRcIixcclxuICAgIGRhdGU6IFwiQXByIDEwLCAyMDI2XCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJTdWNjZXNzZnVsbHkgY29tcGxldGVkIHRoZSBUZWNoQSBBV1MgU29sdXRpb24gQXJjaGl0ZWN0IGNlcnRpZmljYXRpb24gcHJvZ3JhbSwgY292ZXJpbmcgY2xvdWQgYXJjaGl0ZWN0dXJlIGZ1bmRhbWVudGFscywgQVdTIGNvcmUgc2VydmljZXMsIGFuZCBwcmFjdGljYWwgZGVzaWduIHByaW5jaXBsZXMgZm9yIHNjYWxhYmxlIGFuZCByZWxpYWJsZSBzb2x1dGlvbnMuXCIsXHJcbiAgICBza2lsbHM6IFtcIkFXU1wiLCBcIlNvbHV0aW9uIEFyY2hpdGVjdHVyZVwiLCBcIkNsb3VkIERlc2lnblwiLCBcIkVDMlwiLCBcIlMzXCIsIFwiSUFNXCJdLFxyXG4gICAgaW1hZ2U6IEFXU0lORk9DZXJ0LFxyXG4gICAgdmVyaWZ5TGluazogXCJodHRwczovL3ZlcmlmeS5vbndpbmdzcGFuLmNvbVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJNYWNoaW5lIExlYXJuaW5nIGZvciBDeWJlciBTZWN1cml0eVwiLFxyXG4gICAgaXNzdWVyOiBcIkMtREFDIEh5ZGVyYWJhZFwiLFxyXG4gICAgZGF0ZTogXCJPY3QgMjAyNVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiQW4gaW50ZW5zaXZlIHByb2dyYW0gZm9jdXNlZCBvbiB0aGUgaW50ZXJzZWN0aW9uIG9mIEFJIGFuZCBzZWN1cml0eS4gTWFzdGVyZWQgYW5vbWFseSBkZXRlY3Rpb24sIG1hbHdhcmUgYW5hbHlzaXMgdXNpbmcgTUwsIGFuZCBidWlsZGluZyByb2J1c3QgZGVmZW5zZSBzeXN0ZW1zIGFnYWluc3QgYXV0b21hdGVkIGN5YmVyIHRocmVhdHMuXCIsXHJcbiAgICBza2lsbHM6IFtcIk1hY2hpbmUgTGVhcm5pbmdcIiwgXCJDeWJlcnNlY3VyaXR5XCIsIFwiVGhyZWF0IERldGVjdGlvblwiLCBcIkFub21hbHkgRGV0ZWN0aW9uXCIsIFwiUHl0aG9uXCJdLFxyXG4gICAgaW1hZ2U6IE1MQ2VydCxcclxuICAgIHZlcmlmeUxpbms6IFwiI1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJWTFNJIERlc2lnbiBFbmdpbmVlclwiLFxyXG4gICAgaXNzdWVyOiBcIk5hdGlvbmFsIFNraWxsIERldmVsb3BtZW50IENvcnBvcmF0aW9uXCIsXHJcbiAgICBkYXRlOiBcIk1heSAyMDI1XCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJQcm9mZXNzaW9uYWwgY2VydGlmaWNhdGlvbiBjb3ZlcmluZyB0aGUgY29tcGxldGUgVkxTSSBkZXNpZ24gZmxvdy4gRXhwZXJ0aXNlIGluIFJUTCBkZXNpZ24gdXNpbmcgVmVyaWxvZywgZnVuY3Rpb25hbCB2ZXJpZmljYXRpb24sIGFuZCBsb2dpYyBzeW50aGVzaXMgZm9yIGhpZ2gtcGVyZm9ybWFuY2UgaW50ZWdyYXRlZCBjaXJjdWl0cy5cIixcclxuICAgIHNraWxsczogW1wiVkxTSVwiLCBcIlZlcmlsb2dcIiwgXCJSVEwgRGVzaWduXCIsIFwiRGlnaXRhbCBFbGVjdHJvbmljc1wiLCBcIkFTSUMgRGVzaWduXCIsIFwiRlBHQVwiXSxcclxuICAgIGltYWdlOiBWTFNJQ2VydCxcclxuICAgIHZlcmlmeUxpbms6IFwiI1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJQcm9ncmFtbWluZyBpbiBQeXRob25cIixcclxuICAgIGlzc3VlcjogXCJTV0FZQU0gTUhSRFwiLFxyXG4gICAgZGF0ZTogXCJKYW4gMjAyNVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiQ29tcHJlaGVuc2l2ZSBjZXJ0aWZpY2F0aW9uIGZyb20gdGhlIE1pbmlzdHJ5IG9mIEVkdWNhdGlvbi4gQ292ZXJlZCBhZHZhbmNlZCBkYXRhIHN0cnVjdHVyZXMsIGFsZ29yaXRobWljIGNvbXBsZXhpdHksIGFuZCBzb2Z0d2FyZSBlbmdpbmVlcmluZyBwcmluY2lwbGVzIHVzaW5nIFB5dGhvbiBmb3IgcmVhbC13b3JsZCBhcHBsaWNhdGlvbnMuXCIsXHJcbiAgICBza2lsbHM6IFtcIlB5dGhvblwiLCBcIkFsZ29yaXRobXNcIiwgXCJEYXRhIFN0cnVjdHVyZXNcIiwgXCJQcm9ibGVtIFNvbHZpbmdcIiwgXCJTb2Z0d2FyZSBFbmdpbmVlcmluZ1wiXSxcclxuICAgIGltYWdlOiBQWVRDZXJ0LFxyXG4gICAgdmVyaWZ5TGluazogXCIjXCJcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlB5dGhvbiAxMDEgZm9yIERhdGEgU2NpZW5jZVwiLFxyXG4gICAgaXNzdWVyOiBcIkNvZ25pdGl2ZSBDbGFzc1wiLFxyXG4gICAgZGF0ZTogXCJEZWMgMjAyNFwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiTWFzdGVyZWQgdGhlIGZ1bmRhbWVudGFscyBvZiBkYXRhIHNjaWVuY2UgdXNpbmcgUHl0aG9uLiBFeHBlcnRpc2UgaW4gZGF0YSBtYW5pcHVsYXRpb24gd2l0aCBQYW5kYXMsIG51bWVyaWNhbCBjb21wdXRpbmcgd2l0aCBOdW1QeSwgYW5kIGRhdGEgdmlzdWFsaXphdGlvbiB3aXRoIE1hdHBsb3RsaWIgYW5kIFNlYWJvcm4uXCIsXHJcbiAgICBza2lsbHM6IFtcIlB5dGhvblwiLCBcIkRhdGEgU2NpZW5jZVwiLCBcIkRhdGEgQW5hbHlzaXNcIiwgXCJQYW5kYXNcIiwgXCJOdW1QeVwiLCBcIk1hdHBsb3RsaWJcIl0sXHJcbiAgICBpbWFnZTogUFlUSUJNQ2VydCxcclxuICAgIHZlcmlmeUxpbms6IFwiaHR0cHM6Ly9jb3Vyc2VzLmNvZ25pdGl2ZWNsYXNzLmFpL2NlcnRpZmljYXRlcy82NGIwYmM2NzEwZjY0M2U4YTQ3ZmI3MzhhNTY0NDAxYVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJQeXRob24gRm91bmRhdGlvbiBDZXJ0aWZpY2F0aW9uXCIsXHJcbiAgICBpc3N1ZXI6IFwiSW5mb3N5cyBTcHJpbmdib2FyZFwiLFxyXG4gICAgZGF0ZTogXCJBdWcgMjAyNFwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVmFsaWRhdGVkIGNvcmUgcHJvZ3JhbW1pbmcgcHJvZmljaWVuY3kgdGhyb3VnaCB0aGUgSW5mb3N5cyBTcHJpbmdib2FyZCBwbGF0Zm9ybS4gRm9jdXNlZCBvbiB3cml0aW5nIGNsZWFuLCBlZmZpY2llbnQgY29kZSBhbmQgdW5kZXJzdGFuZGluZyB0aGUgdW5kZXJseWluZyBhcmNoaXRlY3R1cmUgb2YgUHl0aG9uIGFwcGxpY2F0aW9ucy5cIixcclxuICAgIHNraWxsczogW1wiUHl0aG9uXCIsIFwiU29mdHdhcmUgRGV2ZWxvcG1lbnRcIiwgXCJQcm9ncmFtbWluZyBGdW5kYW1lbnRhbHNcIiwgXCJDbGVhbiBDb2RlXCIsIFwiT09QXCJdLFxyXG4gICAgaW1hZ2U6IFBZVElORk9DZXJ0LFxyXG4gICAgdmVyaWZ5TGluazogXCIjXCJcclxuICB9LFxyXG5dO1xyXG5jb25zdCBQYWdlQ292ZXIgPSBSZWFjdC5mb3J3YXJkUmVmKCh7IGNoaWxkcmVuIH0sIHJlZikgPT4gKFxyXG4gIDxkaXZcclxuICAgIHJlZj17cmVmfVxyXG4gICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC1mdWxsIHctZnVsbCBvdmVyZmxvdy1oaWRkZW4gYmctW3ZhcigtLWJnLXN1cmZhY2UpXVwiXHJcbiAgICBzdHlsZT17e1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidmFyKC0tYmctc3VyZmFjZSlcIixcclxuICAgICAgYmFja2dyb3VuZDogXCJ2YXIoLS1iZy1zdXJmYWNlKVwiLFxyXG4gICAgICBib3hTaGFkb3c6IFwiaW5zZXQgMCAwIDAgMTAwMHB4IHZhcigtLWJnLXN1cmZhY2UpXCIsXHJcbiAgICB9fVxyXG4gID5cclxuICAgIHsvKiBEZWNvcmF0aXZlIGJvcmRlciAqL31cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMyBib3JkZXItMiBib3JkZXItW3ZhcigtLWJvcmRlci1jb2xvcildIHJvdW5kZWQtbGdcIiAvPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC01IGJvcmRlciBib3JkZXItW3ZhcigtLWJvcmRlci1jb2xvcildLzUwIHJvdW5kZWQtbGdcIiAvPlxyXG5cclxuICAgIHsvKiBDb3JuZXIgb3JuYW1lbnRzICovfVxyXG4gICAge1tcInRvcC02IGxlZnQtNlwiLCBcInRvcC02IHJpZ2h0LTZcIiwgXCJib3R0b20tNiBsZWZ0LTZcIiwgXCJib3R0b20tNiByaWdodC02XCJdLm1hcCgocG9zLCBpKSA9PiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgJHtwb3N9IHctNCBoLTQgYm9yZGVyLVt2YXIoLS1hY2NlbnQpXS81MCAke1xyXG4gICAgICAgICAgaSA8IDIgPyBcImJvcmRlci10LTJcIiA6IFwiYm9yZGVyLWItMlwiXHJcbiAgICAgICAgfSAke2kgJSAyID09PSAwID8gXCJib3JkZXItbC0yXCIgOiBcImJvcmRlci1yLTJcIn1gfVxyXG4gICAgICAvPlxyXG4gICAgKSl9XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtZnVsbCBweC04IHRleHQtY2VudGVyXCI+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4pKTtcclxuXHJcbi8vIExlZnQgcGFnZSAtIENlcnRpZmljYXRlIGRldGFpbHNcclxuY29uc3QgRGV0YWlsUGFnZSA9IFJlYWN0LmZvcndhcmRSZWYoKHsgY2VydCwgcGFnZU51bWJlciB9LCByZWYpID0+IChcclxuICA8ZGl2XHJcbiAgICByZWY9e3JlZn1cclxuICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtZnVsbCB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIGJnLVt2YXIoLS1iZy1zdXJmYWNlKV1cIlxyXG4gICAgc3R5bGU9e3tcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInZhcigtLWJnLXN1cmZhY2UpXCIsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwidmFyKC0tYmctc3VyZmFjZSlcIixcclxuICAgICAgYm94U2hhZG93OiBcImluc2V0IDAgMCAwIDEwMDBweCB2YXIoLS1iZy1zdXJmYWNlKVwiLFxyXG4gICAgfX1cclxuICA+XHJcbiAgICB7LyogU3BpbmUgc2hhZG93IChSaWdodCBzaWRlIGZvciBsZWZ0IHBhZ2UpICovfVxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wIHctOCBoLWZ1bGwgYmctZ3JhZGllbnQtdG8tbCBmcm9tLWJsYWNrLzQwIHRvLXRyYW5zcGFyZW50IHotMjAgcG9pbnRlci1ldmVudHMtbm9uZVwiIC8+XHJcblxyXG4gICAgey8qIFBhZ2UgdGV4dHVyZSAqL31cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBvcGFjaXR5LVswLjAzXVwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJyYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCB2YXIoLS1hY2NlbnQpIDFweCwgdHJhbnNwYXJlbnQgMXB4KVwiLCBiYWNrZ3JvdW5kU2l6ZTogXCIxNnB4IDE2cHhcIiB9fSAvPlxyXG5cclxuICAgIHsvKiBJbm5lciBib3JkZXIgKi99XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTMgc206aW5zZXQtNCBib3JkZXIgYm9yZGVyLVt2YXIoLS1ib3JkZXItY29sb3IpXSByb3VuZGVkLWxnXCIgLz5cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgZmxleCBmbGV4LWNvbCBoLWZ1bGwgcC00IHNtOnAtOCBtZDpwLTEwXCI+XHJcbiAgICAgIHsvKiBIZWFkZXIgcmliYm9uICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTIgc206bWItNlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHB4LTMgc206cHgtNSBweS0xIHNtOnB5LTEgcm91bmRlZC1mdWxsIGJnLVt2YXIoLS1hY2NlbnQpXS8xMCBib3JkZXIgYm9yZGVyLVt2YXIoLS1hY2NlbnQpXS8zMFwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBzbTp0ZXh0LXhzIGZvbnQtbW9ubyBmb250LWJvbGQgdHJhY2tpbmctWzAuMDVlbV0gc206dHJhY2tpbmctWzAuMmVtXSB1cHBlcmNhc2UgdGV4dC1bdmFyKC0tYWNjZW50KV1cIj5cclxuICAgICAgICAgICAgQ3JlZGVudGlhbCBSZWNvcmRcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogRGl2aWRlciAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBzbTpnYXAtNCBtYi0yIHNtOm1iLThcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBoLXB4IGJnLWdyYWRpZW50LXRvLXIgZnJvbS10cmFuc3BhcmVudCB2aWEtW3ZhcigtLWFjY2VudCldLzQwIHRvLXRyYW5zcGFyZW50XCIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMiBoLTIgc206dy0yIHNtOmgtMiByb3RhdGUtNDUgYm9yZGVyIGJvcmRlci1bdmFyKC0tYWNjZW50KV0vNTBcIiAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGgtcHggYmctZ3JhZGllbnQtdG8tciBmcm9tLXRyYW5zcGFyZW50IHZpYS1bdmFyKC0tYWNjZW50KV0vNDAgdG8tdHJhbnNwYXJlbnRcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBUaXRsZSAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXNtIHNtOnRleHQteGwgbWQ6dGV4dC0yeGwgZm9udC1ib2xkIHRleHQtY2VudGVyIHRleHQtd2hpdGUgbWItMSBzbTptYi0yIGxlYWRpbmctdGlnaHQgdHJhY2tpbmctdGlnaHQgcHgtMiBzbTpweC00XCI+XHJcbiAgICAgICAgICB7Y2VydC50aXRsZX1cclxuICAgICAgICA8L2gzPlxyXG4gICAgICAgIHsvKiBEZWNvcmF0aXZlIFNlYWwgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtdG9wLTMgLXJpZ2h0LTAuNSBzbTotdG9wLTYgc206LXJpZ2h0LTIgb3BhY2l0eS0xMCBwb2ludGVyLWV2ZW50cy1ub25lXCI+XHJcbiAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNiBoLTYgc206dy0xMiBzbTpoLTEyIHRleHQtW3ZhcigtLWFjY2VudCldXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0xMiAxTDkgNEg1VjhMMiAxMVYxM0w1IDE2VjIwSDlMMTIgMjNMMTUgMjBIMTlWMTZMMjIgMTNWMTFMMTkgOFY0SDE1TDEyIDFNMTIgMTdBNSA1IDAgMSAxIDE3IDEyQTUgNSAwIDAgMSAxMiAxN00xMiA5QTMgMyAwIDEgMCAxNSAxMkEzIDMgMCAwIDAgMTIgOVpcIiAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIElzc3VlciAqL31cclxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC14cyBzbTp0ZXh0LXhzIG1kOnRleHQtc20gZm9udC1tb25vIHRleHQtW3ZhcigtLXRleHQtc2Vjb25kYXJ5KV0gbWItMiBzbTptYi04XCI+XHJcbiAgICAgICAgSXNzdWVkIGJ5IDxzcGFuIGNsYXNzTmFtZT1cInRleHQtW3ZhcigtLWFjY2VudC1saWdodCldIGZvbnQtYm9sZFwiPntjZXJ0Lmlzc3Vlcn08L3NwYW4+XHJcbiAgICAgIDwvcD5cclxuXHJcbiAgICAgIHsvKiBEZXNjcmlwdGlvbiAmIFNraWxscyBDb250YWluZXIgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggZmxleC1jb2wgbWluLWgtMCBvdmVyZmxvdy1oaWRkZW4gcHgtMSBzbTpweC00XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgb3ZlcmZsb3cteS1hdXRvIHB5LTIgc206cHktMiBjdXN0b20tc2Nyb2xsYmFyXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHNtOnRleHQtc20gbWQ6dGV4dC1iYXNlIHRleHQtW3ZhcigtLXRleHQtc2Vjb25kYXJ5KV0gbGVhZGluZy1yZWxheGVkIHRleHQtY2VudGVyIG1iLTMgaXRhbGljIG9wYWNpdHktOTAgYm9yZGVyLWwgYm9yZGVyLXIgYm9yZGVyLVt2YXIoLS1hY2NlbnQpXS8yMCBweS0xIHNtOnB5LTIgcHgtMlwiPlxyXG4gICAgICAgICAgICBcIntjZXJ0LmRlc2NyaXB0aW9ufVwiXHJcbiAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgey8qIFNraWxscyAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgZ2FwLTEuNSBzbTpnYXAtMyBtYi0zXCI+XHJcbiAgICAgICAgICAgIHtjZXJ0LnNraWxscy5tYXAoKHNraWxsKSA9PiAoXHJcbiAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIGtleT17c2tpbGx9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0yIHNtOnB4LTMgcHktMSBzbTpweS0xIHRleHQteHMgc206dGV4dC1bMTBweF0gbWQ6dGV4dC14cyBmb250LW1vbm8gcm91bmRlZC1ub25lIGJnLVt2YXIoLS1iZy1iYXNlKV0gdGV4dC1bdmFyKC0tdGV4dC1zZWNvbmRhcnkpXSBib3JkZXIgYm9yZGVyLVt2YXIoLS1ib3JkZXItY29sb3IpXSBncm91cC1ob3Zlcjpib3JkZXItW3ZhcigtLWFjY2VudCldIHRyYW5zaXRpb24tY29sb3JzXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7c2tpbGx9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBGb290ZXIgaW5mbyAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC1hdXRvIHB0LTIgc206cHQtNCBib3JkZXItdCBib3JkZXItW3ZhcigtLWJvcmRlci1jb2xvcildLzMwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdGV4dC14cyBzbTp0ZXh0LVsxMHB4XSBtZDp0ZXh0LXhzIGZvbnQtbW9ubyB0ZXh0LVt2YXIoLS10ZXh0LXNlY29uZGFyeSldXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTEgc206Z2FwLTFcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bdmFyKC0tYWNjZW50KV0vNjAgdGV4dC1bMTBweF0gc206dGV4dC1bN3B4XSB1cHBlcmNhc2UgdHJhY2tpbmctdGlnaHRlclwiPklzc3VlIERhdGU8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGUvODAgdGV4dC14c1wiPntjZXJ0LmRhdGV9PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7Y2VydC52ZXJpZnlMaW5rICYmIGNlcnQudmVyaWZ5TGluayAhPT0gXCIjXCIgJiYgKFxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9e2NlcnQudmVyaWZ5TGlua31cclxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTIgc206cHgtMyBweS0xIHNtOnB5LTEgYmctW3ZhcigtLWFjY2VudCldLzEwIGJvcmRlciBib3JkZXItW3ZhcigtLWFjY2VudCldLzMwIHRleHQtW3ZhcigtLWFjY2VudC1saWdodCldIGhvdmVyOmJnLVt2YXIoLS1hY2NlbnQpXSBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSBzbTpnYXAtMS41IHRleHQteHNcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgVmVyaWZ5IDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHNtOnRleHQtWzEwcHhdXCI+4oaXPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4pKTtcclxuXHJcbi8vIFJpZ2h0IHBhZ2UgLSBDZXJ0aWZpY2F0ZSBpbWFnZVxyXG5jb25zdCBJbWFnZVBhZ2UgPSBSZWFjdC5mb3J3YXJkUmVmKCh7IGNlcnQsIHBhZ2VOdW1iZXIgfSwgcmVmKSA9PiAoXHJcbiAgPGRpdlxyXG4gICAgcmVmPXtyZWZ9XHJcbiAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLWZ1bGwgdy1mdWxsIG92ZXJmbG93LWhpZGRlbiBiZy1bdmFyKC0tYmctc3VyZmFjZSldXCJcclxuICAgIHN0eWxlPXt7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ2YXIoLS1iZy1zdXJmYWNlKVwiLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcInZhcigtLWJnLXN1cmZhY2UpXCIsXHJcbiAgICAgIGJveFNoYWRvdzogXCJpbnNldCAwIDAgMCAxMDAwcHggdmFyKC0tYmctc3VyZmFjZSlcIixcclxuICAgIH19XHJcbiAgPlxyXG4gICAgey8qIFNwaW5lIHNoYWRvdyAoTGVmdCBzaWRlIGZvciByaWdodCBwYWdlKSAqL31cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctOCBoLWZ1bGwgYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsYWNrLzQwIHRvLXRyYW5zcGFyZW50IHotMjAgcG9pbnRlci1ldmVudHMtbm9uZVwiIC8+XHJcblxyXG4gICAgey8qIElubmVyIGJvcmRlciAqL31cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtNCBib3JkZXIgYm9yZGVyLVt2YXIoLS1ib3JkZXItY29sb3IpXSByb3VuZGVkLWxnXCIgLz5cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1mdWxsIHAtNiBzbTpwLTEwXCI+XHJcbiAgICAgIHsvKiBTbWFsbCBsYWJlbCAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yIHNtOm1iLTYgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVs5cHhdIHNtOnRleHQteHMgZm9udC1tb25vIGZvbnQtbWVkaXVtIHRyYWNraW5nLVswLjNlbV0gdXBwZXJjYXNlIHRleHQtW3ZhcigtLXRleHQtc2Vjb25kYXJ5KV0vNjBcIj5cclxuICAgICAgICAgIFZpc3VhbCBEb2N1bWVudGF0aW9uXHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBDZXJ0aWZpY2F0ZSBpbWFnZSAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIHB4LTEgc206cHgtNCBtaW4taC0wXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBncm91cC9pbWdcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLWluc2V0LTEgYmctZ3JhZGllbnQtdG8tciBmcm9tLVt2YXIoLS1hY2NlbnQpXSB0by1bdmFyKC0tYWNjZW50LWxpZ2h0KV0gcm91bmRlZC1sZyBibHVyIG9wYWNpdHktMjAgZ3JvdXAtaG92ZXIvaW1nOm9wYWNpdHktNDAgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDBcIj48L2Rpdj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPXtjZXJ0LmltYWdlfVxyXG4gICAgICAgICAgICBhbHQ9e2Ake2NlcnQudGl0bGV9IENlcnRpZmljYXRlYH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWF4LXctZnVsbCBtYXgtaC1mdWxsIG9iamVjdC1jb250YWluIHJvdW5kZWQtbGcgc2hhZG93LTJ4bCBib3JkZXIgYm9yZGVyLVt2YXIoLS1ib3JkZXItY29sb3IpXSBncmF5c2NhbGUtWzAuMl0gaG92ZXI6Z3JheXNjYWxlLTAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbikpO1xyXG5cclxuLy8gTW9iaWxlIGZsaXAtdXAgY2FyZCAocGhvbmUgdmlldylcclxuY29uc3QgTW9iaWxlRmxpcENhcmQgPSAoeyBjZXJ0LCBpc09wZW4sIG9uVG9nZ2xlIH0pID0+IChcclxuICA8bW90aW9uLmRpdlxyXG4gICAgbGF5b3V0XHJcbiAgICBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLVt2YXIoLS1ib3JkZXItY29sb3IpXSBiZy1bdmFyKC0tYmctc3VyZmFjZSldLzkwIHNoYWRvdy14bCBvdmVyZmxvdy1oaWRkZW5cIlxyXG4gICAgdHJhbnNpdGlvbj17eyBsYXlvdXQ6IHsgZHVyYXRpb246IDAuMywgZWFzZTogWzAuMjUsIDAuOCwgMC4yNSwgMV0gfSB9fVxyXG4gID5cclxuICAgIDxidXR0b25cclxuICAgICAgb25DbGljaz17b25Ub2dnbGV9XHJcbiAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtNCBweS00XCJcclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMiBoLTEyIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1bdmFyKC0tYm9yZGVyLWNvbG9yKV0gYmctW3ZhcigtLWJnLWJhc2UpXSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgIDxpbWcgc3JjPXtjZXJ0LmltYWdlfSBhbHQ9e2Ake2NlcnQudGl0bGV9IHRodW1iYH0gY2xhc3NOYW1lPVwibWF4LXctZnVsbCBtYXgtaC1mdWxsIG9iamVjdC1jb250YWluXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gZm9udC1tb25vIHVwcGVyY2FzZSB0cmFja2luZy1bMC4yZW1dIHRleHQtW3ZhcigtLWFjY2VudCldLzcwXCI+Q3JlZGVudGlhbDwvcD5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIGxlYWRpbmctc251Z1wiPntjZXJ0LnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LVt2YXIoLS10ZXh0LXNlY29uZGFyeSldXCI+XHJcbiAgICAgICAgICAgIHtjZXJ0Lmlzc3Vlcn0gLSB7Y2VydC5kYXRlfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bdmFyKC0tYWNjZW50LWxpZ2h0KV0gdGV4dC1iYXNlIGZvbnQtbW9ub1wiPntpc09wZW4gPyBcIi1cIiA6IFwiK1wifTwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG5cclxuICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgIGluaXRpYWw9e2ZhbHNlfVxyXG4gICAgICBhbmltYXRlPXt7IGhlaWdodDogaXNPcGVuID8gXCJhdXRvXCIgOiAwLCBvcGFjaXR5OiBpc09wZW4gPyAxIDogMCB9fVxyXG4gICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjMgfX1cclxuICAgICAgY2xhc3NOYW1lPVwicHgtNCBwYi00XCJcclxuICAgICAgc3R5bGU9e3sgb3ZlcmZsb3c6IFwiaGlkZGVuXCIgfX1cclxuICAgID5cclxuICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICBpbml0aWFsPXt7IHJvdGF0ZVg6IC05MCwgb3BhY2l0eTogMCB9fVxyXG4gICAgICAgIGFuaW1hdGU9e3sgcm90YXRlWDogaXNPcGVuID8gMCA6IC05MCwgb3BhY2l0eTogaXNPcGVuID8gMSA6IDAgfX1cclxuICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjM1LCBlYXNlOiBbMC4yNSwgMC44LCAwLjI1LCAxXSB9fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm9yaWdpbi10b3BcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIGJvcmRlciBib3JkZXItW3ZhcigtLWJvcmRlci1jb2xvcildIGJnLWJsYWNrLzQwIG92ZXJmbG93LWhpZGRlbiBtYi0zXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz17Y2VydC5pbWFnZX0gYWx0PXtjZXJ0LnRpdGxlfSBjbGFzc05hbWU9XCJ3LWZ1bGwgb2JqZWN0LWNvdmVyXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBtYi0xXCI+e2NlcnQudGl0bGV9PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bdmFyKC0tdGV4dC1zZWNvbmRhcnkpXSBtYi0zIGl0YWxpY1wiPntjZXJ0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC0yIG1iLTNcIj5cclxuICAgICAgICAgIHtjZXJ0LnNraWxscy5tYXAoKHNraWxsKSA9PiAoXHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAga2V5PXtza2lsbH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0yIHB5LTEgdGV4dC1bMTFweF0gZm9udC1tb25vIHJvdW5kZWQtbWQgYmctW3ZhcigtLWJnLWJhc2UpXSBib3JkZXIgYm9yZGVyLVt2YXIoLS1ib3JkZXItY29sb3IpXSB0ZXh0LVt2YXIoLS10ZXh0LXNlY29uZGFyeSldXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtza2lsbH1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge2NlcnQudmVyaWZ5TGluayAmJiBjZXJ0LnZlcmlmeUxpbmsgIT09IFwiI1wiICYmIChcclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWY9e2NlcnQudmVyaWZ5TGlua31cclxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMSBweC0zIHB5LTIgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLVt2YXIoLS1hY2NlbnQpXS80MCB0ZXh0LVt2YXIoLS1hY2NlbnQtbGlnaHQpXSBob3ZlcjpiZy1bdmFyKC0tYWNjZW50KV0gaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9ycyB0ZXh0LXNtIGZvbnQtc2VtaWJvbGRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBWZXJpZnkgP1xyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgIDwvbW90aW9uLmRpdj5cclxuICA8L21vdGlvbi5kaXY+XHJcbik7XHJcblxyXG5jb25zdCBDZXJ0aWZpY2F0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJvb2tSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgW3NjcmVlblNpemUsIHNldFNjcmVlblNpemVdID0gdXNlU3RhdGUoXCJkZXNrdG9wXCIpO1xyXG4gIGNvbnN0IFtvcGVuQ2FyZCwgc2V0T3BlbkNhcmRdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBjaGVjayA9ICgpID0+IHtcclxuICAgICAgY29uc3QgdyA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICBpZiAodyA8IDQ4MCkgc2V0U2NyZWVuU2l6ZShcInhzXCIpO1xyXG4gICAgICBlbHNlIGlmICh3IDwgNzY4KSBzZXRTY3JlZW5TaXplKFwic21cIik7XHJcbiAgICAgIGVsc2Ugc2V0U2NyZWVuU2l6ZShcImRlc2t0b3BcIik7XHJcbiAgICB9O1xyXG4gICAgY2hlY2soKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGNoZWNrKTtcclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBjaGVjayk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBib29rRGltZW5zaW9ucyA9IHtcclxuICAgIHhzOiB7IHdpZHRoOiAyMDAsIGhlaWdodDogMzAwLCBtaW5XaWR0aDogMTgwLCBtYXhXaWR0aDogMjIwLCBtaW5IZWlnaHQ6IDI4MCwgbWF4SGVpZ2h0OiAzNDAgfSxcclxuICAgIHNtOiB7IHdpZHRoOiAzMDAsIGhlaWdodDogNDIwLCBtaW5XaWR0aDogMjYwLCBtYXhXaWR0aDogMzQwLCBtaW5IZWlnaHQ6IDM4MCwgbWF4SGVpZ2h0OiA0ODAgfSxcclxuICAgIGRlc2t0b3A6IHsgd2lkdGg6IDQ1MCwgaGVpZ2h0OiA1NTAsIG1pbldpZHRoOiAzMDAsIG1heFdpZHRoOiA1NTAsIG1pbkhlaWdodDogNDAwLCBtYXhIZWlnaHQ6IDY4MCB9LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRpbXMgPSBib29rRGltZW5zaW9uc1tzY3JlZW5TaXplXTtcclxuICBjb25zdCBpc01vYmlsZSA9IHNjcmVlblNpemUgIT09IFwiZGVza3RvcFwiO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJjZXJ0aWZpY2F0aW9uc1wiIGNsYXNzTmFtZT1cInJlbGF0aXZlIHRleHQtd2hpdGUgcHktMTIgbWQ6cHktMjAgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgIHsvKiBCYWNrZ3JvdW5kIGdsb3cgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBwb2ludGVyLWV2ZW50cy1ub25lXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgdy05NiBoLTk2IHJvdW5kZWQtZnVsbCBiZy1pbmRpZ28tOTAwLzIwIGJsdXItWzEyMHB4XVwiIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMCByaWdodC0wIHctOTYgaC05NiByb3VuZGVkLWZ1bGwgYmctcm9zZS05MDAvMjAgYmx1ci1bMTIwcHhdXCIgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgbWF4LXctN3hsIG14LWF1dG8gcHgtNiBtZDpweC0xMlwiPlxyXG4gICAgICAgIHsvKiBUaXRsZSAqL31cclxuICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWItMTAgbWQ6bWItMTQgZmxleCBmbGV4LWNvbCBnYXAtNFwiXHJcbiAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwIH19XHJcbiAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB5OiAwIH19XHJcbiAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XHJcbiAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjYgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB3LWZpdFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtbW9ubyB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IHRleHQtW3ZhcigtLWFjY2VudC1saWdodCldXCI+MDU8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInctNiBoLXB4IGJnLWdyYWRpZW50LXRvLXIgZnJvbS1bdmFyKC0tYWNjZW50KV0gdG8tdHJhbnNwYXJlbnRcIj48L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBtZDp0ZXh0LTV4bCBmb250LWJvbGQgdGV4dC13aGl0ZSB0cmFja2luZy10aWdodFwiPlxyXG4gICAgICAgICAgICBDZXJ0aWZpY2F0aW9uc1xyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtW3ZhcigtLXRleHQtc2Vjb25kYXJ5KV0gdGV4dC1iYXNlIG1kOnRleHQtbGcgZm9udC1saWdodFwiPlxyXG4gICAgICAgICAgICB7aXNNb2JpbGUgPyBcIlN3aXBlIHRocm91Z2ggbXkgcHJvZmVzc2lvbmFsIGNyZWRlbnRpYWxzXCIgOiBcIkZsaXAgdGhyb3VnaCBteSBwcm9mZXNzaW9uYWwgY2VydGlmaWNhdGlvbnNcIn1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L21vdGlvbi5kaXY+XHJcblxyXG4gICAgICAgIHsvKiBCb29rICovfVxyXG4gICAgICAgIHtpc01vYmlsZSA/IChcclxuICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTVcIlxyXG4gICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDEyIH19XHJcbiAgICAgICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cclxuICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjYsIGRlbGF5OiAwLjIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2NlcnRpZmljYXRpb25zLm1hcCgoY2VydCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxNb2JpbGVGbGlwQ2FyZFxyXG4gICAgICAgICAgICAgICAga2V5PXtjZXJ0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgY2VydD17Y2VydH1cclxuICAgICAgICAgICAgICAgIGlzT3Blbj17b3BlbkNhcmQgPT09IGNlcnQudGl0bGV9XHJcbiAgICAgICAgICAgICAgICBvblRvZ2dsZT17KCkgPT4gc2V0T3BlbkNhcmQob3BlbkNhcmQgPT09IGNlcnQudGl0bGUgPyBudWxsIDogY2VydC50aXRsZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCBzY2FsZTogMC45IH19XHJcbiAgICAgICAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgc2NhbGU6IDEgfX1cclxuICAgICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC44LCBkZWxheTogMC4yIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SFRNTEZsaXBCb29rXHJcbiAgICAgICAgICAgICAgICBrZXk9e3NjcmVlblNpemV9XHJcbiAgICAgICAgICAgICAgICByZWY9e2Jvb2tSZWZ9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17ZGltcy53aWR0aH1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17ZGltcy5oZWlnaHR9XHJcbiAgICAgICAgICAgICAgICBzaXplPVwic3RyZXRjaFwiXHJcbiAgICAgICAgICAgICAgICBtaW5XaWR0aD17ZGltcy5taW5XaWR0aH1cclxuICAgICAgICAgICAgICAgIG1heFdpZHRoPXtkaW1zLm1heFdpZHRofVxyXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0PXtkaW1zLm1pbkhlaWdodH1cclxuICAgICAgICAgICAgICAgIG1heEhlaWdodD17ZGltcy5tYXhIZWlnaHR9XHJcbiAgICAgICAgICAgICAgICBtYXhTaGFkb3dPcGFjaXR5PXswLjV9XHJcbiAgICAgICAgICAgICAgICBzaG93Q292ZXI9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBtb2JpbGVTY3JvbGxTdXBwb3J0PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2VydGlmaWNhdGlvbi1ib29rXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7fX1cclxuICAgICAgICAgICAgICAgIGZsaXBwaW5nVGltZT17ODAwfVxyXG4gICAgICAgICAgICAgICAgdXNlUG9ydHJhaXQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgc3RhcnRaSW5kZXg9ezB9XHJcbiAgICAgICAgICAgICAgICBhdXRvU2l6ZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGRyYXdTaGFkb3c9e3RydWV9XHJcbiAgICAgICAgICAgICAgICB1c2VNb3VzZUV2ZW50cz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHN3aXBlRGlzdGFuY2U9ezMwfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsvKiBGcm9udCBDb3ZlciAqL31cclxuICAgICAgICAgICAgICAgIDxQYWdlQ292ZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xNiBoLTE2IG1iLTQgcm91bmRlZC1mdWxsIGJnLVt2YXIoLS1hY2NlbnQpXS8yMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy04IGgtOCB0ZXh0LVt2YXIoLS1hY2NlbnQpXVwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBkPVwiTTkgMTJsMiAyIDQtNE03LjgzNSA0LjY5N2EzLjQyIDMuNDIgMCAwMDEuOTQ2LS44MDYgMy40MiAzLjQyIDAgMDE0LjQzOCAwIDMuNDIgMy40MiAwIDAwMS45NDYuODA2IDMuNDIgMy40MiAwIDAxMy4xMzggMy4xMzggMy40MiAzLjQyIDAgMDAuODA2IDEuOTQ2IDMuNDIgMy40MiAwIDAxMCA0LjQzOCAzLjQyIDMuNDIgMCAwMC0uODA2IDEuOTQ2IDMuNDIgMy40MiAwIDAxLTMuMTM4IDMuMTM4IDMuNDIgMy40MiAwIDAwLTEuOTQ2LjgwNiAzLjQyIDMuNDIgMCAwMS00LjQzOCAwIDMuNDIgMy40MiAwIDAwLTEuOTQ2LS44MDYgMy40MiAzLjQyIDAgMDEtMy4xMzgtMy4xMzggMy40MiAzLjQyIDAgMDAtLjgwNi0xLjk0NiAzLjQyIDMuNDIgMCAwMTAtNC40MzggMy40MiAzLjQyIDAgMDAuODA2LTEuOTQ2IDMuNDIgMy40MiAwIDAxMy4xMzgtMy4xMzh6XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIHNtOnRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICBNeSBDZXJ0aWZpY2F0aW9uc1xyXG4gICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVt2YXIoLS10ZXh0LXNlY29uZGFyeSldIHRleHQteHNcIj5DbGljayB0byBvcGVuPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9QYWdlQ292ZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIENlcnRpZmljYXRpb24gcGFpcnM6IERldGFpbCAobGVmdCkgKyBJbWFnZSAocmlnaHQpICovfVxyXG4gICAgICAgICAgICAgICAge2NlcnRpZmljYXRpb25zLmZsYXRNYXAoKGNlcnQsIGlkeCkgPT4gW1xyXG4gICAgICAgICAgICAgICAgICA8RGV0YWlsUGFnZSBrZXk9e2BkZXRhaWwtJHtpZHh9YH0gY2VydD17Y2VydH0gcGFnZU51bWJlcj17aWR4ICogMiArIDF9IC8+LCBcclxuICAgICAgICAgICAgICAgICAgPEltYWdlUGFnZSBrZXk9e2BpbWFnZS0ke2lkeH1gfSBjZXJ0PXtjZXJ0fSBwYWdlTnVtYmVyPXtpZHggKiAyICsgMn0gLz4sIFxyXG4gICAgICAgICAgICAgICAgXSl9XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIEJhY2sgQ292ZXIgKi99XHJcbiAgICAgICAgICAgICAgICA8UGFnZUNvdmVyPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTIgaC0xMiBtYi00IHJvdW5kZWQtZnVsbCBiZy1bdmFyKC0tYWNjZW50KV0vMjAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNiBoLTYgdGV4dC1bdmFyKC0tYWNjZW50KV1cIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgZD1cIk0xMiA2LjI1M3YxM20wLTEzQzEwLjgzMiA1LjQ3NyA5LjI0NiA1IDcuNSA1UzQuMTY4IDUuNDc3IDMgNi4yNTN2MTNDNC4xNjggMTguNDc3IDUuNzU0IDE4IDcuNSAxOHMzLjMzMi40NzcgNC41IDEuMjUzbTAtMTNDMTMuMTY4IDUuNDc3IDE0Ljc1NCA1IDE2LjUgNWMxLjc0NyAwIDMuMzMyLjQ3NyA0LjUgMS4yNTN2MTNDMTkuODMyIDE4LjQ3NyAxOC4yNDcgMTggMTYuNSAxOGMtMS43NDYgMC0zLjMzMi40NzctNC41IDEuMjUzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtW3ZhcigtLXRleHQtc2Vjb25kYXJ5KV0gdGV4dC14c1wiPkFsd2F5cyBMZWFybmluZy4uLjwvcD5cclxuICAgICAgICAgICAgICAgIDwvUGFnZUNvdmVyPlxyXG4gICAgICAgICAgICAgIDwvSFRNTEZsaXBCb29rPlxyXG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogTmF2aWdhdGlvbiBidXR0b25zICovfVxyXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgZ2FwLTQgbXQtOFwiXHJcbiAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XHJcbiAgICAgICAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSB9fVxyXG4gICAgICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAwLjUgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGJvb2tSZWYuY3VycmVudD8ucGFnZUZsaXAoKT8uZmxpcFByZXYoKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMi41IHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci13aGl0ZS8yMCB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgaG92ZXI6Ymctd2hpdGUvNSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgdGV4dC1zbVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgUHJldmlvdXNcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBib29rUmVmLmN1cnJlbnQ/LnBhZ2VGbGlwKCk/LmZsaXBOZXh0KCl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTIuNSByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItd2hpdGUvMjAgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIGhvdmVyOmJnLXdoaXRlLzUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIHRleHQtc21cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENlcnRpZmljYXRpb247XHJcbiJdLCJmaWxlIjoiQzovVXNlcnMvdGVqYXNzc3V0aHJhdmUvRG93bmxvYWRzL3RlamFzLXMtc3V0aHJhdmUtcG9ydGZvbGlvL3NyYy9zZWN0aW9ucy9DZXJ0aWZpY2F0aW9uLmpzeCJ9
