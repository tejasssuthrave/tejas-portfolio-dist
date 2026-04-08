import { motion } from "framer-motion";
import { FaFolderOpen, FaEnvelope, FaDownload } from "react-icons/fa6";

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-12 md:py-16 flex items-center justify-center relative overflow-hidden font-sans"
      aria-label="About me"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-indigo-900/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-rose-900/20 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl w-full mx-auto px-4 sm:px-6 md:px-10 py-8 sm:py-12 flex flex-col gap-6 sm:gap-8">
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 w-fit">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-light)]">02</span>
            <span className="w-6 h-px bg-gradient-to-r from-[var(--accent)] to-transparent"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Who I Am
          </h2>
        </motion.div>

        <motion.div
          className="space-y-4 text-base md:text-lg text-[var(--text-secondary)] leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <p>
            I'm an EC Engineering graduate passionate about cloud infrastructure, Linux systems, and AI development. I bridge the gap between robust backend systems and cutting-edge AI capabilities.
          </p>
          <p>
            My expertise spans AWS cloud services, Python development, system administration, and prompt engineering. I focus on building scalable, reliable solutions that solve real-world problems.
          </p>
          <p className="text-[var(--accent-light)] italic">
            "A rare mix of infrastructure thinking and application-layer skills."
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a
            href="#projects"
            className="px-6 py-2.5 rounded-lg bg-[var(--accent)] text-white font-semibold hover:bg-[var(--accent-light)] transition-all duration-300 text-sm"
          >
            View My Work
          </a>
          <a
            href="mailto:tejas.s.suthrave@gmail.com"
            className="px-6 py-2.5 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 transition-all duration-300 text-sm"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}

