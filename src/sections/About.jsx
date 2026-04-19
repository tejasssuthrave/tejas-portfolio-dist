import { motion } from "framer-motion";
import { FaFolderOpen } from "react-icons/fa6";

const capabilities = ["AWS", "Linux", "Python", "AI", "Prompting", "DevOps"];

const highlights = [
  "Cloud infrastructure with AWS",
  "Linux systems and shell automation",
  "Python development and prompt engineering",
  "Currently expanding into DevOps",
];

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-20 md:py-28 flex items-center justify-center relative overflow-hidden font-sans"
      aria-label="About me"
    >
      <div className="absolute inset-0 pointer-events-none tech-grid-bg opacity-20" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-16 left-0 w-[28rem] h-[28rem] rounded-full bg-indigo-900/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[24rem] h-[24rem] rounded-full bg-rose-900/15 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          className="flex flex-col gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 w-fit">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-light)]">02</span>
            <span className="w-10 h-px bg-gradient-to-r from-[var(--accent)] to-transparent" />
          </div>
          <div className="max-w-3xl space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              Building with cloud, systems, and clear execution.
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl">
              I&apos;m an EC Engineering graduate focused on practical infrastructure, reliable automation, and AI-assisted workflows. I care about work that is structured, maintainable, and useful in the real world.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6 lg:gap-8 items-stretch"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="tech-panel rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl shadow-black/20 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6 text-[var(--accent-light)]">
              <FaFolderOpen className="text-lg" />
              <span className="tech-label">Profile</span>
            </div>

            <div className="space-y-5 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                I work across AWS cloud services, Linux administration, Python, and prompt engineering. My approach is to keep the structure simple, the code maintainable, and the delivery dependable.
              </p>
              <p>
                I&apos;m currently expanding into DevOps so I can connect development, automation, and deployment more effectively without overcomplicating the workflow.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {capabilities.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <aside className="tech-panel rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-3 text-[var(--accent-light)]">
                <span className="tech-dot" />
                <span className="tech-label">What I value</span>
              </div>
              <h3 className="text-2xl font-semibold text-white">
                Clean systems, practical results.
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                I prefer work that is readable, scalable, and easy to evolve as projects grow.
              </p>
            </div>

            <div className="space-y-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-4"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent-light)] shadow-[0_0_10px_rgba(129,140,248,0.7)]" />
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </aside>
        </motion.div>
      </div>
    </section>
  );
}

