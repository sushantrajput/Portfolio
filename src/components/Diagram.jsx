/* Original SVG diagrams — no fabricated screenshots. */
const wrap = "w-full h-auto block rounded-xl border border-line bg-paper";

const MCP = () => (
  <svg viewBox="0 0 760 300" className={wrap} role="img" aria-label="MCP server permission architecture">
    <defs>
      <marker id="ar" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto">
        <path d="M0,1 L8,4.5 L0,8" fill="none" stroke="#14171A" strokeWidth="1.2" />
      </marker>
    </defs>
    <g fontFamily="Manrope, sans-serif" fontSize="12" fill="#14171A">
      <rect x="24" y="112" width="132" height="62" fill="#fff" stroke="#14171A" />
      <text x="90" y="138" textAnchor="middle" fontWeight="700">AI assistant</text>
      <text x="90" y="156" textAnchor="middle" fill="#676E75" fontSize="11">GitLab Duo, IDE agents</text>

      <rect x="248" y="70" width="180" height="148" fill="#E4EFEA" stroke="#14584C" strokeWidth="1.5" />
      <text x="338" y="94" textAnchor="middle" fontWeight="700" fill="#14584C">MCP server</text>
      <line x1="248" y1="106" x2="428" y2="106" stroke="#14584C" opacity=".3" />
      <text x="264" y="126" fontSize="11">Auth · scoped service account</text>
      <text x="264" y="146" fontSize="11">Tool allow-list</text>
      <text x="264" y="166" fontSize="11">Namespace + env filter</text>
      <text x="264" y="186" fontSize="11">Audit log — every call</text>
      <text x="264" y="206" fontSize="11">Write confirmation gate</text>

      <rect x="520" y="46" width="216" height="52" fill="#fff" stroke="#14171A" />
      <text x="628" y="68" textAnchor="middle" fontWeight="700">Read surface</text>
      <text x="628" y="85" textAnchor="middle" fontSize="11" fill="#676E75">pods, events, logs, manifests</text>

      <rect x="520" y="118" width="216" height="52" fill="#fff" stroke="#14171A" />
      <text x="628" y="140" textAnchor="middle" fontWeight="700">Guarded writes</text>
      <text x="628" y="157" textAnchor="middle" fontSize="11" fill="#676E75">rollback, restart, non-prod deploy</text>

      <rect x="520" y="190" width="216" height="52" fill="none" stroke="#8A5A12" strokeDasharray="4 3" />
      <text x="628" y="212" textAnchor="middle" fontWeight="700" fill="#8A5A12">Not exposed</text>
      <text x="628" y="229" textAnchor="middle" fontSize="11" fill="#8A5A12">secrets, RBAC, node ops, delete</text>

      <line x1="156" y1="143" x2="242" y2="143" stroke="#14171A" markerEnd="url(#ar)" />
      <line x1="428" y1="120" x2="514" y2="80" stroke="#14171A" markerEnd="url(#ar)" />
      <line x1="428" y1="150" x2="514" y2="146" stroke="#14171A" markerEnd="url(#ar)" />
      <line x1="428" y1="180" x2="514" y2="212" stroke="#8A5A12" strokeDasharray="4 3" />
    </g>
  </svg>
);

const VERCEL = () => (
  <svg viewBox="0 0 760 240" className={wrap} role="img" aria-label="Which parts of a full-stack app stay on Vercel">
    <g fontFamily="Manrope, sans-serif" fontSize="12" fill="#14171A">
      <text x="24" y="32" fontWeight="700" fontSize="13">A full-stack app, by where it can run</text>
      <line x1="24" y1="48" x2="736" y2="48" stroke="#E6E6E0" />

      <rect x="24" y="70" width="148" height="40" fill="#E4EFEA" stroke="#14584C" />
      <text x="98" y="95" textAnchor="middle" fontSize="11.5">Static + SSR pages</text>
      <rect x="182" y="70" width="148" height="40" fill="#E4EFEA" stroke="#14584C" />
      <text x="256" y="95" textAnchor="middle" fontSize="11.5">Edge middleware</text>
      <rect x="340" y="70" width="148" height="40" fill="#E4EFEA" stroke="#14584C" />
      <text x="414" y="95" textAnchor="middle" fontSize="11.5">Short-lived API routes</text>
      <text x="504" y="95" fill="#14584C" fontWeight="700" fontSize="12">stays on Vercel</text>

      <rect x="24" y="132" width="148" height="40" fill="#fff" stroke="#8A5A12" strokeDasharray="4 3" />
      <text x="98" y="157" textAnchor="middle" fontSize="11.5" fill="#8A5A12">Persistent WebSockets</text>
      <rect x="182" y="132" width="148" height="40" fill="#fff" stroke="#8A5A12" strokeDasharray="4 3" />
      <text x="256" y="157" textAnchor="middle" fontSize="11.5" fill="#8A5A12">Background workers</text>
      <rect x="340" y="132" width="148" height="40" fill="#fff" stroke="#8A5A12" strokeDasharray="4 3" />
      <text x="414" y="157" textAnchor="middle" fontSize="11.5" fill="#8A5A12">Queues, cron, daemons</text>
      <rect x="498" y="132" width="148" height="40" fill="#fff" stroke="#8A5A12" strokeDasharray="4 3" />
      <text x="572" y="157" textAnchor="middle" fontSize="11.5" fill="#8A5A12">Primary database</text>
      <text x="662" y="157" fill="#8A5A12" fontWeight="700" fontSize="12">leaves</text>

      <text x="24" y="206" fill="#676E75" fontSize="11.5">
        The row that leaves is the row that owns the data. Once a second platform holds state, it holds the architecture.
      </text>
    </g>
  </svg>
);

const CLICKUP = () => (
  <svg viewBox="0 0 760 205" className={wrap} role="img" aria-label="ClickUp API rate limits by plan">
    <g fontFamily="Manrope, sans-serif" fontSize="12" fill="#14171A">
      <text x="24" y="30" fontWeight="700" fontSize="13">API requests per minute, per token</text>
      <line x1="196" y1="48" x2="196" y2="172" stroke="#E6E6E0" />

      <text x="186" y="70" textAnchor="end" fontSize="11.5">Free / Unlimited / Business</text>
      <rect x="196" y="58" width="54" height="18" fill="#8A5A12" />
      <text x="260" y="72" fontFamily="IBM Plex Mono, monospace" fontSize="11">100</text>

      <text x="186" y="112" textAnchor="end" fontSize="11.5">Business Plus</text>
      <rect x="196" y="100" width="182" height="18" fill="#676E75" />
      <text x="388" y="114" fontFamily="IBM Plex Mono, monospace" fontSize="11">1,000</text>

      <text x="186" y="154" textAnchor="end" fontSize="11.5">Enterprise</text>
      <rect x="196" y="142" width="500" height="18" fill="#14584C" />
      <text x="706" y="156" fontFamily="IBM Plex Mono, monospace" fontSize="11">10,000</text>

      <text x="196" y="192" fill="#676E75" fontSize="11">
        Log scale. Most of the marketplace&apos;s installed base sits on the first row.
      </text>
    </g>
  </svg>
);

const map = { mcp: MCP, vercel: VERCEL, clickup: CLICKUP };

export const Diagram = ({ name }) => {
  const C = map[name];
  return C ? (
    <figure className="my-8 max-w-read">
      <C />
    </figure>
  ) : null;
};
