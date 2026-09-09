import { motion } from "motion/react";
import { profile, glance } from "../data/content";

const initials = profile.name.split(" ").map((w) => w[0]).join("");

export const Hero = () => (
  <section id="top" className="mx-auto max-w-shell px-5 pb-16 pt-12 md:pt-20">
    <div className="grid gap-12 md:grid-cols-[1.35fr_1fr] md:items-start">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface py-1.5 pl-2 pr-3.5 text-[12.5px] font-semibold text-muted shadow-card"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Technical Product Intern at Devtron · open to APM roles
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="max-w-[17ch] text-[2.1rem] font-extrabold leading-[1.08] tracking-[-0.03em] md:text-[3.2rem]"
        >
          {profile.tagline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mt-6 max-w-read font-serif text-[1.0625rem] leading-[1.68] text-muted"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#work"
            className="rounded-full bg-accent px-6 py-3 text-[13.5px] font-semibold text-white transition-colors hover:bg-accentHover"
          >
            Read the case studies
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-ink/15 px-6 py-3 text-[13.5px] font-semibold transition-colors hover:border-ink hover:bg-ink hover:text-paper"
          >
            Get in touch
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-[13.5px] font-medium text-muted underline decoration-line underline-offset-4 hover:text-ink">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="text-[13.5px] font-medium text-muted underline decoration-line underline-offset-4 hover:text-ink">
            GitHub
          </a>
        </motion.div>
      </div>

      {/* identity card */}
      <motion.aside
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.12 }}
        className="rounded-2xl border border-line bg-surface p-6 shadow-card"
      >
        <div className="flex items-center gap-4">
          {/* Drop a headshot at /public/headshot.jpg and it replaces the monogram */}
          <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-accentSoft text-[17px] font-extrabold text-accent">
            <img
              src="/headshot.jpg"
              alt=""
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.parentElement.textContent = initials;
              }}
            />
          </div>
          <div>
            <div className="text-[15px] font-bold leading-tight">{profile.name}</div>
            <div className="text-[13px] text-muted">{profile.role}</div>
          </div>
        </div>

        <p className="mt-5 border-t border-line2 pt-5 text-[13.5px] leading-relaxed text-muted">
          {profile.seeking}
        </p>

        <dl className="mt-5 space-y-2.5 border-t border-line2 pt-5 text-[13px]">
          <div className="flex justify-between gap-4">
            <dt className="text-muted">Based in</dt>
            <dd className="font-medium">{profile.location}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted">Focus</dt>
            <dd className="font-medium">Devtools · infra · B2B</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted">Email</dt>
            <dd>
              <a href={`mailto:${profile.email}`} className="font-medium text-accent hover:underline">
                {profile.email}
              </a>
            </dd>
          </div>
        </dl>
      </motion.aside>
    </div>

    {/* at a glance */}
    <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
      {glance.map((g, i) => (
        <motion.div
          key={g.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
          className="bg-surface px-5 py-6"
        >
          <div className="text-[1.6rem] font-extrabold tracking-tight text-accent">{g.value}</div>
          <div className="mt-1 text-[13px] font-semibold leading-snug">{g.label}</div>
          <div className="mt-0.5 text-[12px] text-muted">{g.note}</div>
        </motion.div>
      ))}
    </div>
  </section>
);
