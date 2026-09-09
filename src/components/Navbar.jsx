import { useEffect, useState } from "react";
import { profile } from "../data/content";

const links = [
  { href: "#work", label: "Case studies" },
  { href: "#experience", label: "Experience" },
  { href: "#artifacts", label: "Artifacts" },
  { href: "#about", label: "About" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        solid ? "bg-paper/90 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-shell items-center justify-between px-5 py-4">
        <a href="#top" className="text-[15px] font-extrabold tracking-tight">
          {profile.name}
          <span className="ml-1.5 font-medium text-muted">/ product</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[13.5px] font-medium text-muted hover:text-ink">
              {l.label}
            </a>
          ))}
          <a
            href={profile.resume}
            className="rounded-full bg-ink px-4 py-2 text-[13px] font-semibold text-paper hover:bg-accent"
          >
            Résumé
          </a>
        </nav>

        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-line md:hidden"
        >
          <span className="block h-[1.5px] w-4 bg-ink shadow-[0_5px_0_0_#14171A,0_-5px_0_0_#14171A]" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-paper px-6 pt-6 md:hidden">
          <div className="flex justify-end">
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-3xl leading-none text-muted">
              ×
            </button>
          </div>
          <nav className="mt-12 flex flex-col gap-7">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-3xl font-bold tracking-tight">
                {l.label}
              </a>
            ))}
            <a
              href={profile.resume}
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-ink px-5 py-3.5 text-center text-sm font-semibold text-paper"
            >
              Download résumé
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
