import { motion } from "motion/react";
import { artifacts } from "../data/content";
import { Section } from "./Section";
import { Fill } from "./Fill";

export const Artifacts = () => (
  <Section
    id="artifacts"
    tone="surface"
    kicker="The actual documents"
    title="Artifacts"
    intro="Case studies show how I think. These are what I produce day to day — real working documents, lightly redacted where a client requires it."
  >
    <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
      {artifacts.map((a, i) => (
        <motion.div
          key={a.title}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: (i % 2) * 0.06 }}
          className="bg-paper p-6"
        >
          <div className="mb-2 text-[11.5px] font-extrabold tracking-wide text-accent">{a.kind}</div>
          <h3 className="text-[1.05rem] font-bold leading-snug">{a.title}</h3>
          <p className="mt-2.5 font-serif text-[15px] leading-[1.6] text-muted">{a.desc}</p>
          {a.todo && (
            <p className="mt-3 text-[13px] leading-relaxed">
              <Fill text={`{{${a.todo}}}`} />
            </p>
          )}
        </motion.div>
      ))}
    </div>
  </Section>
);
