
import React, { useState, useEffect, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import avatar from "../assets/hero-astronaut.png";
import { FaXTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { FaYoutube, FaInstagram } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";
import ParticleBackground from "../components/ParticlesBackground";

const socials = [
  { Icon: FaLinkedinIn, label: "LinkedIn", href: "https://www.linkedin.com/in/tejas-s-suthrave/" },
  { Icon: FaGithub, label: "GitHub", href: "https://github.com/tejasssuthrave" },
  { Icon: SiSubstack, label: "Substack", href: "https://substack.com/@tejasssuthrave" },
];


const glowVariants = {
  initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" },
  hover: {
    scale: 1.2,
    y: -3,
    filter:
      "drop-shadow(0 0 8px rgba(99,102,241,0.9)) drop-shadow(0 0 18px rgba(244,63,94,0.8))",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: {
    scale: 0.95,
    y: 0,
    transition: { duration: 0.08 },
  },
};

const Home = React.forwardRef((props, ref) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const roles = useMemo(
    () => ["Cloud Infrastructure", "Linux Systems", "AI Development", "Prompt Engineering"],
    []
  );
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // typing effect logic
  useEffect(() => {
    const current = roles[index];
    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.length) setSubIndex((v) => v + 1);
      else if (!deleting && subIndex === current.length)
        setTimeout(() => setDeleting(true), 1200);
      else if (deleting && subIndex > 0) setSubIndex((v) => v - 1);
      else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((p) => (p + 1) % roles.length);
      }
    }, deleting ? 40 : 60); // original typing speed
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, roles]);

  return (
    <section
      ref={ref}
      id="home"
      className="min-h-screen w-full relative overflow-hidden flex flex-col"
    >
      <ParticleBackground />

      {/* gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-32 -left-32 
          w-[70vw] sm:w-[50vw] md:w-[40vw] 
          h-[70vw] sm:h-[50vw] md:h-[40vw]
          max-w-[500px] max-h-[500px]
          rounded-full
          bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900
          opacity-20 sm:opacity-15 md:opacity-10 
          blur-[100px] sm:blur-[130px] md:blur-[150px]
          animate-pulse"
        />
        <div
          className="absolute bottom-0 right-0 
          w-[70vw] sm:w-[50vw] md:w-[40vw] 
          h-[70vw] sm:h-[50vw] md:h-[40vw] 
          max-w-[500px] max-h-[500px] 
          rounded-full 
          bg-gradient-to-r from-rose-900 via-indigo-900 to-slate-900 
          opacity-20 sm:opacity-15 
          blur-[100px] sm:blur-[130px] md:blur-[150px] 
          animate-pulse delay-500"
        />
      </div>

      <div className="relative z-10 flex-1 w-full flex flex-col lg:grid lg:grid-cols-12 pt-20 sm:pt-8 pb-8 lg:pt-12 lg:pb-16">
        {/* left */}
        <motion.div
          className="lg:col-span-6 min-w-0 flex flex-col justify-center text-center relative px-4 sm:px-6 md:px-12 lg:px-16 py-4 sm:py-8 lg:py-20"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="w-full mx-auto max-w-[48rem] min-w-0">
            {/* Section Intro */}
            <motion.div
              className="inline-flex items-center gap-2 mb-4 mx-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-light)]">01</span>
              <span className="w-6 h-px bg-gradient-to-r from-[var(--accent)] to-transparent"></span>
            </motion.div>

            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 mb-4 sm:mb-6 mx-auto px-3 sm:px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse shadow-[0_0_8px_var(--accent)]"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-white/60">Available for Opportunities</span>
            </motion.div>

            {/* name */}
            <motion.h1
              className="mb-4 mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-none break-words whitespace-normal"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="text-white">Tejas S</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 font-black">
                Suthrave
              </span>
            </motion.h1>

            {/* role */}
            <motion.div
              className="mt-4 sm:mt-6 mb-6 sm:mb-8 min-h-[1.5em]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] font-light tracking-wide">
                {roles[index].substring(0, subIndex)}
                <span className="inline-block w-[2px] h-5 sm:h-6 ml-1 bg-[var(--accent)] animate-pulse align-middle"></span>
              </p>
            </motion.div>

            {/* description */}
            <motion.p
              className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Cloud Infrastructure & AI enthusiast. I build scalable solutions with modern tech, focusing on Linux systems and prompt engineering.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <a
                href="#projects"
                className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg bg-[var(--accent)] text-white font-semibold hover:bg-[var(--accent-light)] transition-all duration-300 flex items-center gap-2 group text-sm sm:text-base"
              >
                Explore My Work
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a
                href={`${import.meta.env.BASE_URL}carosol/resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg border border-white/10 text-white font-semibold hover:border-[var(--accent)]/40 hover:bg-white/5 transition-all duration-300 text-sm sm:text-base"
              >
                Download Resume
              </a>
            </motion.div>

            {/* socials */}
            <motion.div
              className="mt-10 sm:mt-12 flex gap-3 sm:gap-4 text-sm sm:text-base justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              {socials.map(({ Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={glowVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-white hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/10 transition-all duration-300"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </motion.div>

            {/* scroll indicator */}
            <motion.div
              className="mt-10 sm:mt-12 flex flex-col items-center gap-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-white/40 font-mono">Scroll to explore</p>
              <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        {/* right */}
        <motion.div
          className="relative flex lg:col-span-6 items-center justify-center overflow-hidden min-h-[45vh] sm:min-h-[55vh] lg:min-h-0 pt-4 sm:pt-8 lg:pt-0 px-4 sm:px-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: "min(50vw, 700px)",
              height: "min(50vw, 700px)",
              borderRadius: "50%",
              filter: "blur(80px)",
              opacity: 0.25,
              background: "radial-gradient(circle, rgba(79,70,229,0.4) 0%, rgba(244,63,94,0.2) 100%)",
            }}
          />
          
          <motion.div 
            className="relative z-10 flex items-center justify-center w-full"
          >
            <motion.img
              src={avatar}
              alt="Tejas S Suthrave avatar"
              style={{ y: yParallax }}
              className="object-contain select-none pointer-events-none w-full max-w-[240px] sm:max-w-[320px] md:max-w-[420px] lg:max-w-[480px] xl:max-w-[550px] max-h-[70vh] sm:max-h-[80vh] mix-blend-screen [mask-image:radial-gradient(circle_at_center,black_50%,transparent_95%)] drop-shadow-[0_0_60px_rgba(79,70,229,0.3)] sm:drop-shadow-[0_0_80px_rgba(79,70,229,0.4)]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -15, 0]
              }}
              transition={{ 
                opacity: { delay: 1, duration: 1 },
                scale: { delay: 1, duration: 1 },
                y: { delay: 1.5, duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* subtle divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
});

export default Home;
