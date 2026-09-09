import { useState } from "react";
import { motion } from "motion/react";
import { caseStudies } from "../data/content";
import { Section } from "./Section";
import { CasePanel } from "./CasePanel";
import { CaseCover } from "./CaseCover";
import { Fill } from "./Fill";

const kindStyle = {
  shipped: "bg-accentSoft text-accent",
  teardown: "bg-ink/[.06] text-ink",
  strategy: "bg-flagSoft text-flag",
};

export const CaseStudies = () => {
  const [openId, setOpenId] = useState(null);
  const open = caseStudies.find((c) => c.id === openId) || null;

  return (
    <>
      <Section
        id="work"
        kicker="Selected work"
        title="Case studies"
        intro="Work I shipped, and analyses of products I use. Each is written around the decision — what the options were, what I gave up, and what I'd change now."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {caseStudies.map((c, i) => (
            <motion.article
              key={c.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-card transition-shadow hover:shadow-lift"
            >
              <CaseCover theme={c.theme} height={150} className="rounded-none" />

              <div className="flex flex-1 flex-col p-6">
              <div className="mb-4 flex items-center gap-2.5">
                <span className={`rounded-full px-2.5 py-1 text-[11.5px] font-bold ${kindStyle[c.kind]}`}>
                  {c.kindLabel}
                </span>
                <span className="text-[12.5px] font-semibold text-muted">{c.org}</span>
              </div>

              <h3 className="text-[1.3rem] font-bold leading-[1.25] tracking-[-0.015em]">{c.title}</h3>

              <p className="mt-3 flex-1 font-serif text-[15.5px] leading-[1.62] text-muted">{c.summary}</p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {c.chips.map((ch) => (
                  <span key={ch} className="rounded-md border border-line bg-paper px-2 py-1 text-[11.5px] font-medium text-muted">
                    {ch}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setOpenId(c.id)}
                className="mt-6 self-start rounded-full border border-ink/15 px-5 py-2.5 text-[13px] font-semibold transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-white"
              >
                Read case study
              </button>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {open && <CasePanel study={open} onClose={() => setOpenId(null)} />}
    </>
  );
};

