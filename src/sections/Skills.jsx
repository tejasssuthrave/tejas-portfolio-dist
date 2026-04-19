import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaGithub, FaNpm, FaNode, FaLinux, FaAws, FaPython, FaJava, FaTerminal, FaServer, FaDatabase, FaNetworkWired } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiExpress, SiFirebase, SiJavascript, SiMongodb, SiMysql, SiPostgresql, SiNodedotjs, SiMui, SiAxios, SiFramer, SiJsonwebtokens, SiTypescript, SiRedux, SiPostman, SiShadcnui, SiSocketdotio, SiVercel, SiRedhat, SiCentos, SiC, SiCplusplus, SiPycharm, SiIntellijidea, SiStreamlit, SiGnubash, SiJira, SiGitlab, SiGithubactions } from 'react-icons/si';
import { MdEmail, MdSchedule, MdStorage, MdSecurity } from 'react-icons/md';
import { FcDataEncryption } from "react-icons/fc";
import { VscJson, VscCode } from 'react-icons/vsc';
import { AiOutlineCloudServer } from 'react-icons/ai';
import { BsFileEarmarkArrowUp } from 'react-icons/bs';
import { motion } from 'framer-motion';

export default function Skills() {

const categories = [
  {
    title: "Linux Administration",
    skills: [
      { icon: <FaLinux />, name: "Linux", level: 90 },
      { icon: <SiRedhat />, name: "RHEL", level: 85 },
      { icon: <SiCentos />, name: "CentOS", level: 80 },
      { icon: <FaAws />, name: "Amazon Linux", level: 85 },
      { icon: <FaTerminal />, name: "Shell Scripting", level: 75 },
      { icon: <MdSecurity />, name: "Permissions", level: 90 },
      { icon: <MdStorage />, name: "Disk & File Systems", level: 85 },
    ],
  },
  {
    title: "AWS Cloud",
    skills: [
      { icon: <FaAws />, name: "AWS", level: 80 },
      { icon: <FaServer />, name: "EC2", level: 85 },
      { icon: <MdStorage />, name: "S3", level: 90 },
      { icon: <MdSecurity />, name: "IAM", level: 80 },
      { icon: <FaDatabase />, name: "RDS", level: 75 },
      { icon: <FaNetworkWired />, name: "VPC", level: 70 },
      { icon: <AiOutlineCloudServer />, name: "Load Balancer", level: 75 },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { icon: <FaPython />, name: "Python", level: 85 },
      { icon: <SiC />, name: "C", level: 70 },
      { icon: <SiCplusplus />, name: "C++", level: 65 },
      { icon: <FaJava />, name: "Java", level: 60 },
      { icon: <VscCode />, name: "Verilog", level: 75 },
      { icon: <VscCode />, name: "SystemVerilog", level: 70 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { icon: <FaGitAlt />, name: "Git", level: 85 },
      { icon: <FaGithub />, name: "GitHub", level: 90 },
      { icon: <SiGithubactions />, name: "GitHub Actions", level: 75 },
      { icon: <SiGitlab />, name: "GitLab", level: 80 },
      { icon: <VscCode />, name: "VS Code", level: 95 },
      { icon: <SiPycharm />, name: "PyCharm", level: 80 },
      { icon: <SiIntellijidea />, name: "IntelliJ", level: 75 },
      { icon: <SiStreamlit />, name: "Streamlit", level: 70 },
      { icon: <SiJira />, name: "Jira", level: 80 },
    ],
  },
];

  return(
    <section id="skills"
    className="w-full py-16 md:py-20 flex flex-col items-center justify-center relative overflow-hidden font-sans">
      <div className='absolute inset-0 pointer-events-none'>
        
        <div className='absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 opacity-20 blur-[120px] animate-pulse'/>
        <div className='absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-rose-900 via-indigo-900 to-slate-900 opacity-20 blur-[120px] animate-pulse delay-500' />
      </div>

      <motion.div 
        className="z-10 flex flex-col gap-4 mb-16"
        initial={{opacity:0 , y: 20}}
        whileInView={{opacity:1 , y:0}}
        transition={{duration:0.6}}
      >
        <div className="inline-flex items-center gap-2 w-fit">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-light)]">03</span>
          <span className="w-6 h-px bg-gradient-to-r from-[var(--accent)] to-transparent"></span>
        </div>
        <h2 className='text-4xl md:text-5xl font-bold text-white tracking-tight'>
          Technical Arsenal
        </h2>
        <p className='text-[var(--text-secondary)] text-base md:text-lg font-light'>
          Systems, Cloud, and Code expertise.
        </p>
      </motion.div>

<div className='w-full max-w-7xl px-4 sm:px-6 md:px-12 z-10 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8'>
  {categories.map((cat, ci) => (
    <motion.div
      key={cat.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: ci * 0.1 }}
      className='relative rounded-lg border border-white/10 bg-white/5 p-6 md:p-8 overflow-hidden group flex flex-col hover:border-[var(--accent)]/30 hover:bg-white/8 transition-all duration-300'
    >
      <h3 className='text-lg md:text-xl font-bold text-white mb-8 tracking-tight group-hover:text-[var(--accent-light)] transition-colors'>
        {cat.title}
      </h3>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4 text-[var(--text-secondary)] w-full flex-1'>
        {cat.skills.map((s, i) => (
          <motion.div
            key={i}
            className='group/skill'
            aria-label={s.name}
            title={s.name}
            initial={{opacity:0, scale: 0.8}}
            whileInView={{opacity:1, scale: 1}}
            viewport={{ once: true }}
            transition={{duration:0.3, delay: i * 0.05}}
          >
            <div className="flex flex-col items-center gap-3 p-3 rounded-lg border border-white/5 bg-white/3 group-hover/skill:border-[var(--accent)]/30 group-hover/skill:bg-white/8 transition-all duration-300">
              <div className='p-2 rounded-lg bg-white/5 group-hover/skill:bg-[var(--accent)]/10 text-[var(--accent-light)] group-hover/skill:text-[var(--accent)] transition-all duration-300 text-lg'>
                {s.icon}
              </div>
              <p className='text-xs sm:text-sm text-center text-white font-light group-hover/skill:text-[var(--accent-light)] transition-colors duration-300 leading-snug'>
                {s.name}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  ))}
</div>


    </section>
  )
}
