import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Fill } from "./Fill";
import { Diagram } from "./Diagram";
import { CaseCover } from "./CaseCover";

const Block = ({ b }) => {
  switch (b.t) {
    case "h2":
      return <h2 className="mb-3 mt-11 border-t border-line pt-6 text-[15px] font-extrabold tracking-wide">{b.v}</h2>;
    case "h3":
      return <h3 className="mb-2 mt-8 text-[1.05rem] font-bold">{b.v}</h3>;
    case "p":
      return <p className="mb-4 max-w-read font-serif text-[1.0625rem] leading-[1.68] text-ink/90"><Fill text={b.v} /></p>;
    case "note":
      return (
        <p className="mb-4 max-w-read font-serif text-[1.0625rem] leading-[1.68]">
          <Fill text={b.v} />
        </p>
      );
    case "quote":
      return (
        <blockquote className="my-7 max-w-read border-l-2 border-accent py-1 pl-5 font-serif text-[1.0625rem] italic leading-[1.62] text-muted">
          {b.v}
        </blockquote>
      );
    case "decision":
      return (
        <div className="my-7 max-w-read rounded-xl border border-accent/25 bg-accentSoft/60 p-5">
          <div className="mb-1.5 text-[12px] font-extrabold tracking-wide text-accent">{b.label}</div>
          <p className="font-serif text-[1.0625rem] leading-[1.66] text-ink/90">{b.v}</p>
        </div>
      );
    case "ul":
      return (
        <ul className="mb-5 max-w-read list-disc space-y-2 pl-5">
          {b.v.map((li, i) => (
            <li key={i} className="font-serif text-[1.0625rem] leading-[1.66] text-ink/90"><Fill text={li} /></li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="mb-5 max-w-read list-decimal space-y-2 pl-5">
          {b.v.map((li, i) => (
            <li key={i} className="font-serif text-[1.0625rem] leading-[1.66] text-ink/90"><Fill text={li} /></li>
          ))}
        </ol>
      );
    case "diagram":
      return <Diagram name={b.v} />;
    case "table":
      return (
        <div className="my-7 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left text-[14px]">
            <thead>
              <tr>
                {b.head.map((h) => (
                  <th key={h} className="border-b border-ink pb-2.5 pr-5 text-[12px] font-bold text-muted">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((r, i) => {
                const picked = String(r[0]).startsWith("__PICKED__");
                const cells = picked ? [String(r[0]).replace("__PICKED__", ""), ...r.slice(1)] : r;
                return (
                  <tr key={i} className={picked ? "bg-accentSoft/50" : ""}>
                    {cells.map((c, j) => (
                      <td
                        key={j}
                        className={`border-b border-line py-3.5 pr-5 align-top leading-[1.5] ${
                          j === 0 ? "font-semibold" : "text-muted"
                        } ${picked && j === 0 ? "border-l-2 border-l-accent pl-3" : ""}`}
                      >
                        {c}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
};

export const CasePanel = ({ study, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] bg-ink/25 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="absolute inset-x-0 bottom-0 top-6 mx-auto max-w-4xl overflow-y-auto rounded-t-3xl bg-paper md:top-10"
        >
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-paper/95 px-6 py-4 backdrop-blur md:px-12">
            <span className="text-[12.5px] font-bold text-muted">
              {study.org} · {study.kindLabel}
            </span>
            <button
              onClick={onClose}
              className="rounded-full border border-line px-4 py-1.5 text-[12.5px] font-semibold hover:bg-ink hover:text-paper"
            >
              Close
            </button>
          </div>

          <div className="px-6 pb-24 pt-7 md:px-12">
            <CaseCover theme={study.theme} height={190} className="mb-8" />

            <h1 className="max-w-[20ch] text-[1.7rem] font-extrabold leading-[1.13] tracking-[-0.028em] md:text-[2.4rem]">
              {study.title}
            </h1>
            <p className="mt-5 max-w-read font-serif text-[1.15rem] leading-[1.6] text-muted">{study.summary}</p>

            <dl className="mt-9 grid gap-6 border-t border-line pt-6 sm:grid-cols-2 md:grid-cols-4">
              {study.facts.map((f) => (
                <div key={f.k}>
                  <dt className="mb-1 text-[12px] font-semibold text-muted">{f.k}</dt>
                  <dd className="text-[13.5px] font-medium leading-snug">
                    <Fill text={f.v} />
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-4">
              {study.body.map((b, i) => (
                <Block key={i} b={b} />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
