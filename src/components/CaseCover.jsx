/**
 * Original abstract cover art for each case study.
 * These are NOT screenshots or logos — each evokes the product's
 * category and colour world without reproducing any real interface.
 */

const covers = {
  devtron: {
    bg: "linear-gradient(135deg,#0B2E33 0%,#123F45 55%,#0E5B54 100%)",
    art: (
      <g>
        {/* cluster nodes + orchestration links */}
        <g stroke="rgba(255,255,255,.28)" strokeWidth="1">
          <line x1="120" y1="90" x2="220" y2="60" />
          <line x1="120" y1="90" x2="215" y2="140" />
          <line x1="220" y1="60" x2="320" y2="105" />
          <line x1="215" y1="140" x2="320" y2="105" />
          <line x1="320" y1="105" x2="420" y2="72" />
          <line x1="320" y1="105" x2="415" y2="155" />
        </g>
        {[[120, 90], [220, 60], [215, 140], [320, 105], [420, 72], [415, 155]].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="15" fill="rgba(255,255,255,.08)" />
            <circle cx={x} cy={y} r="6" fill={i === 3 ? "#6FE3C8" : "rgba(255,255,255,.62)"} />
          </g>
        ))}
        <rect x="452" y="52" width="118" height="126" rx="8" fill="rgba(255,255,255,.07)" stroke="rgba(255,255,255,.18)" />
        <rect x="466" y="70" width="72" height="7" rx="3.5" fill="rgba(255,255,255,.4)" />
        <rect x="466" y="88" width="90" height="7" rx="3.5" fill="rgba(255,255,255,.22)" />
        <rect x="466" y="106" width="60" height="7" rx="3.5" fill="rgba(255,255,255,.22)" />
        <rect x="466" y="132" width="46" height="18" rx="9" fill="#6FE3C8" opacity=".85" />
        <rect x="520" y="132" width="36" height="18" rx="9" fill="rgba(255,255,255,.16)" />
      </g>
    ),
  },

  vercel: {
    bg: "linear-gradient(135deg,#101014 0%,#1C1C22 60%,#2B2B33 100%)",
    art: (
      <g>
        {/* deploy pipeline: stages that stop partway */}
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x={92 + i * 132} y="70" width="104" height="42" rx="8" fill="rgba(255,255,255,.10)" stroke="rgba(255,255,255,.30)" />
            <rect x={106 + i * 132} y="86" width="52" height="6" rx="3" fill="rgba(255,255,255,.55)" />
            <line x1={196 + i * 132} y1="91" x2={222 + i * 132} y2="91" stroke="rgba(255,255,255,.35)" strokeWidth="1.5" />
          </g>
        ))}
        <rect x="488" y="70" width="104" height="42" rx="8" fill="none" stroke="rgba(255,255,255,.30)" strokeDasharray="5 4" />
        <rect x="502" y="86" width="52" height="6" rx="3" fill="rgba(255,255,255,.22)" />
        {/* stateful row, detached */}
        {[0, 1, 2].map((i) => (
          <rect key={i} x={92 + i * 132} y="146" width="104" height="34" rx="8" fill="none" stroke="rgba(255,255,255,.22)" strokeDasharray="5 4" />
        ))}
        <rect x="488" y="146" width="104" height="34" rx="8" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.22)" strokeDasharray="5 4" />
        <line x1="92" y1="129" x2="592" y2="129" stroke="rgba(255,255,255,.14)" />
      </g>
    ),
  },

  docusign: {
    bg: "linear-gradient(135deg,#121A3A 0%,#1B2751 58%,#2A3670 100%)",
    art: (
      <g>
        {/* stacked agreements with a clause highlighted */}
        <rect x="126" y="44" width="188" height="150" rx="10" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.16)" />
        <rect x="112" y="54" width="188" height="150" rx="10" fill="rgba(255,255,255,.09)" stroke="rgba(255,255,255,.22)" />
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x="132" y={80 + i * 20} width={i === 2 ? 118 : 148} height="7" rx="3.5" fill={i === 2 ? "#F2C14E" : "rgba(255,255,255,.30)"} />
        ))}
        <path d="M132 178 q16 -16 30 0 t30 -4 t28 6" fill="none" stroke="#F2C14E" strokeWidth="2.4" strokeLinecap="round" />
        {/* obligation chips */}
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x="356" y={58 + i * 48} width="212" height="36" rx="8" fill="rgba(255,255,255,.07)" stroke="rgba(255,255,255,.18)" />
            <circle cx="376" cy={76 + i * 48} r="6" fill={i === 0 ? "#F2C14E" : "rgba(255,255,255,.35)"} />
            <rect x="392" y={72 + i * 48} width={i === 1 ? 96 : 132} height="7" rx="3.5" fill="rgba(255,255,255,.32)" />
          </g>
        ))}
      </g>
    ),
  },

  clickup: {
    bg: "linear-gradient(135deg,#4A2B8C 0%,#7B3FA8 52%,#C0459A 100%)",
    art: (
      <g>
        {/* task board columns, third column throttled */}
        {[0, 1, 2].map((c) => (
          <g key={c}>
            <rect x={112 + c * 168} y="44" width="140" height="156" rx="10" fill="rgba(255,255,255,.08)" stroke="rgba(255,255,255,.20)" />
            <rect x={128 + c * 168} y="60" width="58" height="7" rx="3.5" fill="rgba(255,255,255,.45)" />
            {[0, 1, 2].map((r) => {
              const throttled = c === 2 && r > 0;
              return (
                <rect
                  key={r}
                  x={128 + c * 168}
                  y={82 + r * 38}
                  width="108"
                  height="28"
                  rx="6"
                  fill={throttled ? "none" : "rgba(255,255,255,.16)"}
                  stroke="rgba(255,255,255,.28)"
                  strokeDasharray={throttled ? "5 4" : "0"}
                />
              );
            })}
          </g>
        ))}
        <rect x="112" y="216" width="140" height="8" rx="4" fill="rgba(255,255,255,.65)" />
        <rect x="280" y="216" width="140" height="8" rx="4" fill="rgba(255,255,255,.35)" />
        <rect x="448" y="216" width="140" height="8" rx="4" fill="rgba(255,255,255,.15)" />
      </g>
    ),
  },
};

export const CaseCover = ({ theme, className = "", height = 168 }) => {
  const c = covers[theme];
  if (!c) return null;
  return (
    <div
      className={`relative overflow-hidden rounded-xl ${className}`}
      style={{ background: c.bg, height }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 700 240" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
        {c.art}
      </svg>
    </div>
  );
};
