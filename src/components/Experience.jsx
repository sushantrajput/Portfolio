import { motion } from "motion/react";
import { experience, education } from "../data/content";
import { Section } from "./Section";

export const Experience = () => (
  <Section id="experience" tone="surface" kicker="Track record" title="Experience">
    <div className="relative">
      <span className="absolute left-[7px] top-2 hidden h-[calc(100%-2rem)] w-px bg-line md:block" />
      <div className="space-y-10">
        {experience.map((e, i) => (
          <motion.div
            key={e.company}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            className="md:grid md:grid-cols-[auto_1fr] md:gap-7"
          >
            <span
              className={`mt-2 hidden h-[15px] w-[15px] rounded-full border-[3px] md:block ${
                e.current ? "border-accent bg-accent" : "border-line bg-paper"
              }`}
            />
            <div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-[1.15rem] font-bold tracking-[-0.01em]">{e.role}</h3>
                <span className="text-[14px] font-semibold text-accent">{e.company}</span>
              </div>
              <div className="mt-1 text-[12.5px] font-medium text-muted">
                {e.period} · {e.place}
              </div>
              <ul className="mt-3.5 max-w-read list-disc space-y-2 pl-5">
                {e.points.map((p, j) => (
                  <li key={j} className="font-serif text-[1rem] leading-[1.62] text-ink/85">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    <div className="mt-12 rounded-2xl border border-line bg-paper p-6 md:flex md:items-center md:justify-between">
      <div>
        <div className="text-[1.05rem] font-bold">{education.school}</div>
        <div className="mt-0.5 text-[14px] text-muted">
          {education.degree} · {education.detail}
        </div>
      </div>
      <div className="mt-2 text-[13px] font-semibold text-muted md:mt-0">{education.year}</div>
    </div>
  </Section>
);
