import { profile, aboutParagraphs } from "../data/content";
import { Section } from "./Section";

export const About = () => (
  <Section id="about" kicker="Background" title="About">
    <div className="max-w-read space-y-4 font-serif text-[1.0625rem] leading-[1.7] text-ink/90">
      {aboutParagraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  </Section>
);

export const Contact = () => (
  <footer id="contact" className="border-t border-line bg-surface">
    <div className="mx-auto max-w-shell px-5 py-20">
      <h2 className="max-w-[16ch] text-[1.9rem] font-extrabold leading-[1.12] tracking-[-0.03em] md:text-[2.6rem]">
        Hiring for a product role?
      </h2>
      <p className="mt-4 max-w-read font-serif text-[1.0625rem] leading-[1.68] text-muted">
        I reply to everything. If you want to skip the small talk, send me the hardest product problem on your roadmap
        and I&apos;ll tell you how I&apos;d approach it.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full bg-accent px-6 py-3 text-[13.5px] font-semibold text-white hover:bg-accentHover"
        >
          {profile.email}
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-ink/15 px-6 py-3 text-[13.5px] font-semibold hover:border-ink hover:bg-ink hover:text-paper"
        >
          LinkedIn
        </a>
      </div>

      <div className="mt-16 flex flex-wrap justify-between gap-4 border-t border-line pt-6 text-[12.5px] text-muted">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>Cover illustrations are original artwork, not product screenshots.</span>
      </div>
    </div>
  </footer>
);
