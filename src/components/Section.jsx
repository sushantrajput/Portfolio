export const Section = ({ id, kicker, title, intro, children, tone = "paper" }) => (
  <section id={id} className={tone === "surface" ? "border-y border-line bg-surface" : ""}>
    <div className="mx-auto max-w-shell px-5 py-20">
      <div className="mb-10">
        {kicker && <div className="mb-2 text-[12.5px] font-bold tracking-wide text-accent">{kicker}</div>}
        <h2 className="text-[1.75rem] font-extrabold tracking-[-0.025em] md:text-[2.1rem]">{title}</h2>
        {intro && <p className="mt-3 max-w-read font-serif text-[1.0625rem] leading-[1.68] text-muted">{intro}</p>}
      </div>
      {children}
    </div>
  </section>
);
