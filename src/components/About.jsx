import { profile } from "../data/content";
import { Section } from "./Section";
import { Fill } from "./Fill";

export const About = () => (
  <Section id="about" kicker="Background" title="About">
    <div className="max-w-read space-y-4 font-serif text-[1.0625rem] leading-[1.7] text-ink/90">
      <p>
        I spent four years writing backend code before I started writing specs, and I don&apos;t think of that as a
        career change so much as a change in where I spend my leverage. At Synapse I built PostgreSQL-backed services
        for B2B real-estate clients and learned that most product problems present as performance problems. At Devtron
        I work on developer infrastructure for enterprise DevOps teams, where the users are engineers and the product
        surface is an API.
      </p>
      <p>
        What I&apos;m good at: taking a technically ambiguous problem, getting to a decision fast, and writing it down
        clearly enough that engineering doesn&apos;t need a follow-up meeting. What I&apos;m still learning: pricing,
        and how enterprise deals actually close.
      </p>
      <p>
        I&apos;m looking for an associate PM role at a company building for developers or technical buyers. The fastest
        way to evaluate me is the Devtron case study — it has the most real constraints in it.
      </p>
      <p className="text-[15px]">
        <Fill text="{{Rewrite this section in your own voice. It reads as yours or it reads as nobody's.}}" />
      </p>
    </div>
  </Section>
);

export const Contact = () => (
  <footer id="contact" className="border-t border-line bg-surface">
    <div className="mx-auto max-w-shell px-5 py-20">
      <h2 className="max-w-[16ch] text-[1.9rem] font-extrabold leading-[1.12] tracking-[-0.03em] md:text-[2.6rem]">
        Hiring for a technical PM role?
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
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-ink/15 px-6 py-3 text-[13.5px] font-semibold hover:border-ink hover:bg-ink hover:text-paper"
        >
          GitHub
        </a>
      </div>

      <div className="mt-16 flex flex-wrap justify-between gap-4 border-t border-line pt-6 text-[12.5px] text-muted">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>Built with React, Vite and Tailwind.</span>
      </div>
    </div>
  </footer>
);
