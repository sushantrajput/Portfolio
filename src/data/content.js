// ─────────────────────────────────────────────────────────────
//  ALL SITE CONTENT LIVES HERE.
//  Edit this file to change copy. Components read from it.
//  Anything wrapped in {{ }} is a placeholder you must replace
//  before publishing — it renders with a yellow highlight.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Sushant Kumar",
  role: "Technical Product Manager",
  tagline: "I write product specs that engineers don't have to translate.",
  intro:
    "Technical PM working on developer infrastructure — Kubernetes orchestration, agentic AI workflows and the data layer under enterprise B2B platforms. I came to product from four years of shipping backend systems, so I argue about schema design and pricing tiers in the same meeting.",
  seeking:
    "Looking for an APM or Associate PM role at a devtools, infrastructure or enterprise B2B company where the product surface is technical enough that reading the codebase is part of the job.",
  location: "Gurugram, India",
  email: "skrajsushant698@gmail.com",
  phone: "+91 96930 60488",
  linkedin: "https://linkedin.com/in/sushant9692",
  github: "https://github.com/sushantrajput",
  site: "https://sushantsinghrajput.in",
  resume: "/resume.pdf",
};

export const glance = [
  { value: "2", label: "products shipped as PM", note: "MCP server, cluster tooling" },
  { value: "4 yrs", label: "writing backend code", note: "before writing specs" },
  { value: "72%", label: "faster query response", note: "2.1s → 750ms, Synapse" },
  { value: "1,000+", label: "concurrent connections", note: "real-time data layer" },
];

export const experience = [
  {
    company: "Devtron Inc.",
    role: "Technical Product Intern",
    period: "Mar 2026 — Present",
    place: "Gurugram",
    current: true,
    points: [
      "Own product strategy for an AI-native MCP server connecting coding assistants to Kubernetes orchestration infrastructure for enterprise DevOps customers.",
      "Author PRDs covering permission models, data-quality controls and deep-tech feature evaluation.",
      "Work with engineering to ship agentic workflows inside cloud-native Kubernetes environments.",
      "Translate enterprise cloud and data-infrastructure constraints into scoped development sprints.",
    ],
  },
  {
    company: "Synapse Technologies",
    role: "Software Development Engineer Intern",
    period: "Jul 2024 — Dec 2024",
    place: "Indore",
    points: [
      "Shipped 3 production enterprise applications on PostgreSQL-backed REST APIs.",
      "Redesigned B2B real-estate data architecture with targeted indexing — query response fell from 2.1s to 750ms on large broker datasets.",
      "Built CI/CD pipelines on AWS, holding 99.5% production uptime.",
      "Designed a WebSocket data layer handling 1,000+ concurrent real-time transactions.",
    ],
  },
  {
    company: "Mozilla Firefox Club, VIT",
    role: "Web Development Team Lead",
    period: "2022 — 2026",
    place: "Vellore",
    points: [
      "Led design and launch of the club's official platform.",
      "Simplified event-registration flows, driving a 30% increase in active user engagement.",
    ],
  },
];

export const education = {
  school: "Vellore Institute of Technology",
  degree: "B.Tech, Computer Science and Engineering",
  detail: "CGPA 8.13",
  year: "Expected 2026",
};

// ── PM competency radar ───────────────────────────────────────
export const competencies = {
  labels: [
    "Technical depth",
    "Problem framing",
    "Prioritisation",
    "Data analysis",
    "Written comms",
    "Stakeholder mgmt",
    "User research",
    "Go-to-market",
  ],
  values: [92, 84, 78, 82, 88, 72, 66, 55],
};

export const toolkit = [
  { group: "Product", items: ["PRDs", "Jira", "Confluence", "RICE / prioritisation", "Agile & Scrum", "B2B roadmapping", "Figma"] },
  { group: "Data", items: ["SQL", "PostgreSQL", "MongoDB", "Redis", "Database indexing", "Data-quality monitoring"] },
  { group: "AI & Cloud", items: ["MCP", "Agentic workflows", "AWS (EC2, Lambda, S3)", "Docker", "Kubernetes", "CI/CD"] },
  { group: "Engineering", items: ["Python", "TypeScript", "JavaScript", "React", "Node.js", "REST APIs"] },
];

// ── CASE STUDIES ──────────────────────────────────────────────
// kind: "shipped" | "teardown" | "strategy"
// Each block: {t: "h2"|"h3"|"p"|"ul"|"quote"|"decision"|"table"|"note"}
export const caseStudies = [
  {
    id: "devtron",
    kind: "shipped",
    kindLabel: "Shipped work",
    org: "Devtron Inc.",
    title: "Giving an AI agent write access to a Kubernetes cluster",
    summary:
      "Enterprise DevOps teams wanted their coding assistant to act on live cluster state. Exposing an orchestration control plane to a language model is a permissions problem before it is an AI problem.",
    chips: ["MCP", "Kubernetes", "Enterprise", "Permissions"],
    facts: [
      { k: "My role", v: "Technical Product Intern — authored the PRD, owned tool-surface scoping" },
      { k: "Team", v: "{{4 engineers, 1 designer, 1 solutions architect}}" },
      { k: "Timeline", v: "{{March – July 2026}}" },
      { k: "Status", v: "{{shipped to N design partners / in beta}}" },
    ],
    body: [
      { t: "h2", v: "The situation" },
      { t: "p", v: "Devtron sits between developers and their Kubernetes clusters — deployments, rollbacks, environment configuration, resource inspection. By early 2026 a pattern kept appearing in customer conversations: platform engineers were pasting kubectl output into GitLab Duo and other assistants, asking them to explain a failing rollout or draft a fix. The assistant had the reasoning but none of the context. The developer became a slow, error-prone data bus between the two." },
      { t: "p", v: "The obvious product was an MCP server that lets the assistant query the cluster directly. The obvious product was also the one our security-conscious enterprise buyers were most likely to reject." },

      { t: "h2", v: "Who was actually asking" },
      { t: "p", v: "I split demand into three users with genuinely different risk tolerance. Getting that separation right is what made the later scoping decisions defensible." },
      {
        t: "table",
        head: ["User", "What they want", "What they fear"],
        rows: [
          ["Application developer", "Ask why a deploy failed and get an answer without opening four tabs", "Nothing — they have the least to lose and push hardest"],
          ["Platform engineer", "Fewer interruptions from developers asking why a deploy failed", "An agent that scales a deployment at 2am and can't explain why"],
          ["Security / compliance", "An audit trail and a clear blast radius", "A non-deterministic actor holding cluster credentials"],
        ],
      },
      { t: "note", v: "{{Add real evidence — how many customer calls, which design partners, one direct quote from a platform engineer. This is the highest-value edit on the page.}}" },

      { t: "h2", v: "The core constraint" },
      { t: "p", v: "MCP gives you two ways to expose capability. Resources are things the model can read. Tools are things it can invoke. The protocol makes them look symmetrical. In an orchestration context they are not: a bad read leaks information, a bad write takes down a production service." },
      { t: "quote", v: "Every tool we expose is a permission we can never quietly take back. Enterprise integrations are load-bearing within a week of launch." },
      { t: "diagram", v: "mcp" },

      { t: "h2", v: "Options I weighed" },
      {
        t: "table",
        head: ["Option", "Case for", "Case against"],
        rows: [
          ["Read-only surface", "Trivially safe. Ships in weeks. No security blocker.", "Solves the smaller half. Developer still does every action by hand."],
          ["__PICKED__Read + fixed allow-list of reversible writes", "Covers the real pain — restart, rollback, non-prod deploy — with a bounded, explainable blast radius.", "Slower. Needs a confirmation UX and audit trail before launch."],
          ["Full parity with the Devtron API", "Most capable. Nothing to explain about what's missing.", "Unsellable to compliance. One bad call is a production incident with no human in the loop."],
          ["Customer-configured permissions on day one", "Pushes the decision to the buyer.", "Abdication disguised as flexibility. Teams misconfigure it and we own the outcome."],
        ],
      },
      {
        t: "decision",
        label: "Decision",
        v: "Read broadly, write narrowly and reversibly. Everything the agent can do must be undoable by a single human action, and every write returns a diff the developer confirms before it executes. Secrets, RBAC changes, node operations and deletes stayed off the surface entirely — not behind a flag, not configurable. If a capability can't be explained in one line to a compliance reviewer, it doesn't ship.",
      },
      { t: "h3", v: "What I gave up" },
      { t: "p", v: "Real capability. An agent that can't read secrets can't diagnose a whole class of config failures — one of the most common causes of a failed rollout. We accepted that it would sometimes say \"check your secret mounts\" instead of just fixing it. Adoption over capability was right for a first enterprise release, and I'd defend it again. But it is a real cost, and v2 should revisit it with a scoped, human-approved secret-read path." },

      { t: "h2", v: "What shipped" },
      { t: "note", v: "{{Describe the shipped surface — how many tools, which ones, what the confirmation flow looks like. Keep anything Devtron treats as confidential out; describe the shape rather than specifics if needed.}}" },

      { t: "h2", v: "Results" },
      { t: "note", v: "{{One honest number beats none. Design partners onboarded, tool calls per week, reduction in time-to-diagnose, or a qualitative result from a named role.}}" },

      { t: "h2", v: "What I'd do differently" },
      {
        t: "ul",
        v: [
          "I scoped the tool surface before watching anyone use an agent against a real cluster. The allow-list was reasoned from interviews and first principles. Two weeks of observed usage would have shown which reads get chained together, and we'd have built composite tools instead of thin wrappers around single API calls.",
          "{{The confirmation gate was designed as a safety feature and became a friction feature — if that's true, say what you observed. If not, replace with your own honest miss.}}",
          "I under-invested in the audit-log format early. It was treated as a compliance checkbox and turned out to be the artifact security reviewers spent the most time on. Retrofitting structure cost more than designing it up front would have.",
        ],
      },
    ],
  },

  {
    id: "vercel",
    kind: "teardown",
    kindLabel: "Teardown + roadmap",
    org: "Vercel",
    title: "Where Vercel's abstraction leaks, and what it costs them",
    summary:
      "Vercel built the best frontend deployment experience in the industry on a serverless execution model. That model is a poor fit for the backend half of the apps its own users build — and the resulting migration path runs in the wrong direction.",
    chips: ["Developer infra", "Pricing", "Roadmap", "RICE"],
    facts: [
      { k: "Type", v: "Independent teardown with a proposed roadmap" },
      { k: "Affiliation", v: "None — public documentation and my own use" },
      { k: "Scope", v: "Full-stack teams of 2–15 people" },
      { k: "Date", v: "September 2026" },
    ],
    body: [
      { t: "h2", v: "The observation" },
      { t: "p", v: "Almost every app I have deployed on Vercel eventually needed something the platform does not do. A WebSocket connection outliving a function invocation. A background worker draining a queue. A Postgres instance that isn't a third-party add-on with its own bill and its own latency. Each time the answer was the same: keep the frontend on Vercel, put the rest somewhere else." },
      { t: "p", v: "This is not a hidden flaw. Vercel's own documentation is clear that functions do not support persistent processes, arbitrary TCP connections or open ports, and Vercel does not offer first-party database hosting. Those are honest constraints of the execution model. The product question is what happens to the customer relationship after a team hits them." },

      { t: "h2", v: "Why it matters commercially" },
      { t: "p", v: "The split-stack outcome — frontend on Vercel, backend on Railway or Render or Cloudflare — looks like a stable equilibrium and isn't. Three things happen once a team runs two platforms:" },
      {
        t: "ol",
        v: [
          "The bill becomes comparable. Vercel Pro is per-seat plus metered usage; container platforms bill by resource consumption. A team already reasoning about both starts asking why it pays a frontend premium at all.",
          "The DX advantage narrows. Preview environments and Git-push deploys were the moat. Every serious competitor now ships a version of both. The gap is real but no longer categorical.",
          "The second platform accumulates gravity. Whichever platform holds the database, the queue and the workers becomes the one the team reasons about. The frontend is the easiest piece to move, not the hardest.",
        ],
      },
      { t: "p", v: "Vercel's strongest asset — being where the Next.js app lives — is also the most portable part of the stack. That is an uncomfortable position to defend from." },
      { t: "diagram", v: "vercel" },

      { t: "h2", v: "What I'd prioritise" },
      { t: "p", v: "Scored against one objective: reduce the share of Vercel teams running a second platform for stateful workloads." },
      {
        t: "table",
        head: ["Initiative", "Why", "R·I·C / E"],
        rows: [
          ["__PICKED__First-party managed Postgres, priced as a platform primitive", "Targets the workload that creates gravity elsewhere. Highest single lever.", "high / high / med — high"],
          ["__PICKED__Long-running compute: a container or persistent-worker primitive", "Removes the \"I need one always-on process\" exit. Hardest and most important.", "med / high / med — v.high"],
          ["Cost predictability: spend caps, per-project budgets, forecasts", "Bill anxiety starts evaluations before anything has broken.", "high / med / high — low"],
          ["Extended log retention on lower tiers", "A one-day debug window pushes teams to external observability early — another wedge.", "med / low / high — low"],
          ["Official split-stack reference architecture", "Cheap and honest, but institutionalises the loss.", "low / low / high — v.low"],
        ],
      },
      {
        t: "decision",
        label: "Recommendation",
        v: "Ship cost predictability first — weeks of work, it addresses the anxiety that starts migrations, and it buys time. Spend the same two quarters building the persistent-compute primitive, because it's the only initiative that changes the architecture rather than the messaging. Do not ship the split-stack reference architecture: it is the cheapest item here and the one that concedes the position.",
      },
      { t: "h3", v: "Success metric" },
      { t: "p", v: "Share of Pro and Enterprise teams whose Vercel project connects to an external compute or database host, measured monthly. Leading indicator: adoption of the persistent-compute primitive among teams that previously had an external backend. If it ships and the share doesn't move within two quarters, the diagnosis was wrong and the constraint was pricing, not capability." },
      { t: "h3", v: "Risks" },
      {
        t: "ul",
        v: [
          "Focus dilution. Vercel's advantage comes from doing one layer better than anyone. A container product invites comparison with platforms that have spent years on exactly that, and losing that comparison is worse than not competing.",
          "Margin structure. Serverless and always-on container economics are different businesses. This is a financial decision as much as a product one.",
          "Cannibalisation. Cheaper predictable pricing reduces revenue from the customers who are most profitable today.",
        ],
      },
      { t: "h2", v: "Sources" },
      {
        t: "ul",
        v: [
          "Vercel documentation — function limitations (persistent processes, TCP, ports), build duration ceiling, log retention by plan.",
          "Vercel pricing page — Pro per-seat plus metered usage.",
          "Third-party platform comparisons published 2026 (Northflank, Render, Encore) on where full-stack workloads land.",
          "{{Replace with the specific URLs you verify before publishing, and re-check plan limits — they change.}}",
        ],
      },
    ],
  },

  {
    id: "docusign",
    kind: "strategy",
    kindLabel: "Strategy analysis",
    org: "Docusign",
    title: "Docusign is defending the wrong end of the contract",
    summary:
      "Signature is the most defensible step in an agreement and the least valuable one. The work worth automating happens before it — and that is exactly where AI-native contract tools are arriving.",
    chips: ["Enterprise B2B", "AI strategy", "Platform", "Competitive"],
    facts: [
      { k: "Type", v: "Independent strategy analysis" },
      { k: "Affiliation", v: "None — public filings, product announcements, press" },
      { k: "Scope", v: "Enterprise agreement workflow, 2024 – 2027" },
      { k: "Date", v: "September 2026" },
    ],
    body: [
      { t: "h2", v: "The position" },
      { t: "p", v: "Docusign built a category on a narrow, high-trust primitive: a signature that holds up legally. That primitive is genuinely hard to displace — it rests on audit trails, identity verification, retention and a decade of enterprise legal teams accepting it as admissible. It is also, increasingly, a commodity feature a competitor can bundle." },
      { t: "p", v: "Meanwhile the expensive part of an agreement was always the human hours around it: drafting from a template, redlining, chasing approvals, then losing track of what was committed to. Docusign has been explicit about this — it launched Intelligent Agreement Management in April 2024 to move upstream from signature into the whole lifecycle, powered by its Iris AI engine, with Navigator as an AI repository over executed agreements and Maestro as a no-code workflow builder." },

      { t: "h2", v: "The threat is not another e-signature company" },
      { t: "p", v: "It is a general-purpose model with a contract-shaped wrapper. A legal team that can ask an AI tool to draft an MSA, compare it against a playbook and produce redlines has already captured most of the value in the lifecycle. Signature becomes the last, cheapest step — and whoever owns drafting and review is well positioned to bundle it." },
      { t: "quote", v: "Docusign's real moat is not the signature. It is the corpus of executed agreements and the workflow the enterprise has already wired into its CRM and HR systems. The strategy has to be built on that, not on the pen." },

      { t: "h2", v: "What Docusign has actually shipped" },
      {
        t: "table",
        head: ["When", "What", "Read"],
        rows: [
          ["2020", "Acquired Seal Software, a contract analytics company", "Right intent four years before the platform existed. Integration was slow."],
          ["Apr 2024", "IAM platform — Iris, Navigator, Maestro", "Right architecture. Signature becomes one capability inside a lifecycle platform."],
          ["Nov 2024", "Developer conference; Docusign for Developers; App Center", "Platform play. 1,100+ partner integrations is a genuine distribution asset."],
          ["Mar 2026", "AI contract review assistant — playbooks, risk flags, redlines", "Reported savings of up to 15 min per NDA and 30–60 min on MSA negotiation."],
          ["May 2026", "AI assistant and agents announced at Momentum", "Directionally right. The staggered rollout into 2027 is the problem."],
        ],
      },
      { t: "p", v: "The strategy is not wrong. The market's complaint — reflected in a roughly 30% share-price decline through 2026 attributed to slow IAM adoption — is about pace and proof. Enterprise customers are still on eSignature contracts and have not moved to the platform at the rate the story requires." },

      {
        t: "decision",
        label: "Recommendation",
        v: "Stop selling IAM as a platform migration and start selling it as one workflow that pays for itself. Migrations go to procurement committees and take quarters. A single high-frequency workflow — NDA turnaround, or renewal-obligation alerts — can be adopted by one team, measured in weeks, and expanded from there. Docusign already has the number that sells it: minutes saved per NDA. That's a land-and-expand motion, not a platform pitch, and it matches how the buying actually happens.",
      },
      { t: "h3", v: "Three specific moves" },
      {
        t: "ul",
        v: [
          "Make the repository the wedge, not the workflow. Navigator's value compounds with volume, and Docusign uniquely already holds the executed agreements. Free or near-free ingestion of a customer's existing corpus creates switching cost before anyone changes a process.",
          "Be the substrate, not the interface. The announced MCP server matters more than another UI surface. If legal teams will work through general-purpose assistants regardless, the winning position is being the system those assistants call for agreement context and execution.",
          "Publish the accuracy bar. Legal buyers don't adopt AI review on a time-saved claim alone. Whoever first publishes an auditable benchmark for clause extraction and risk flagging, with error rates, changes the procurement conversation. Docusign has the corpus to do it and the incumbency to make it the standard.",
        ],
      },
      { t: "h3", v: "What would prove me wrong" },
      { t: "p", v: "If enterprise legal teams turn out to prefer a single AI workspace over a specialised agreement system, none of this saves the position — the corpus becomes an export job and the workflow gets rebuilt elsewhere. The signal to watch is whether large customers are ingesting agreements into Navigator or into general-purpose tools. That, not seat growth, is the number I'd track." },

      { t: "h2", v: "Sources" },
      {
        t: "ul",
        v: [
          "Docusign FY2026 Form 10-K — growth strategy, IAM platform composition, developer ecosystem.",
          "Docusign press releases, March and May 2026 — AI contract review assistant; AI assistant and agents.",
          "Trade and market coverage, 2026, on IAM adoption pace and competitive position.",
          "{{Add direct URLs and re-verify the figures before publishing.}}",
        ],
      },
    ],
  },

  {
    id: "clickup",
    kind: "teardown",
    kindLabel: "Teardown",
    org: "ClickUp",
    title: "A rate limit is a pricing decision wearing an infrastructure costume",
    summary:
      "ClickUp allows 100 API requests per minute on most plans and 10,000 on Enterprise. That hundredfold gap is defensible as infrastructure policy and expensive as product strategy, because every integration has to be written for the floor.",
    chips: ["API design", "Ecosystem", "Pricing", "Developer experience"],
    facts: [
      { k: "Type", v: "Narrow technical teardown" },
      { k: "Affiliation", v: "None — public developer documentation" },
      { k: "Scope", v: "Integration and ecosystem strategy" },
      { k: "Date", v: "September 2026" },
    ],
    body: [
      { t: "h2", v: "The number" },
      { t: "p", v: "ClickUp applies rate limits per token, determined by the plan of the workspace hosting that token. Free, Unlimited and Business workspaces get 100 requests per minute. Business Plus gets 1,000. Enterprise gets 10,000. Exceeding it returns a 429." },
      { t: "diagram", v: "clickup" },

      { t: "h2", v: "Why this is a product problem, not an infra one" },
      { t: "p", v: "A rate limit that varies by the customer's plan pushes a pricing decision onto a third party with no visibility into it and no way to influence it. An app in the ClickUp marketplace is installed by workspaces across every tier. The developer has three choices:" },
      {
        t: "ol",
        v: [
          "Build for the floor. Every user gets the sync frequency and bulk behaviour that 100 req/min allows — including the Enterprise customer paying for a hundred times that. Most developers do this, because it's the only option that doesn't break.",
          "Build for the ceiling and degrade. Detect throttling and back off. Correct, considerably more work, and the failure mode a Business-tier user sees is a slow or partially-synced app they blame on the integration.",
          "Restrict the app to higher tiers. Rational for the developer, and it shrinks ClickUp's own ecosystem reach.",
        ],
      },
      { t: "p", v: "All three outcomes are worse for ClickUp than for the developer. The ecosystem's perceived quality converges on what the lowest supported tier permits, and that perception attaches to the platform, not the app." },
      { t: "quote", v: "Integration quality is a platform attribute. If the API makes good integrations hard to build, the platform gets the blame and the developer gets the churn." },

      { t: "h2", v: "What I'd change" },
      {
        t: "table",
        head: ["Change", "Effect", "Cost to ClickUp"],
        rows: [
          ["__PICKED__Separate read and write budgets", "Most limit pressure is polling. A larger read budget costs far less than a larger write budget and solves most of the pain.", "Moderate engineering. Clear win."],
          ["__PICKED__Raise the floor to ~300/min, compress the top of the range", "Removes the cliff that forces build-for-the-floor. Most integrations become viable on any plan.", "Real infra cost; gives up a small upsell lever."],
          ["Reliable webhooks with delivery guarantees", "Attacks the cause rather than the symptom. Polling exists because change notification is unreliable.", "Significant. Highest value, slowest."],
          ["Per-app quota negotiated at marketplace review", "Lets high-quality integrations earn headroom independent of the installing workspace's plan.", "Operational overhead; needs abuse controls."],
          ["Publish the limit in marketplace listings", "Sets user expectations honestly.", "Near zero — and makes the constraint visible, which isn't obviously in ClickUp's interest."],
        ],
      },
      {
        t: "decision",
        label: "Recommendation",
        v: "Split read and write budgets first — cheapest change, largest share of the benefit, because polling is what exhausts the limit. Then raise the floor. Treat reliable webhooks as the two-quarter structural fix, because as long as change notification is unreliable, every integration will poll and every rate limit will feel too low.",
      },
      { t: "h3", v: "How I'd know it worked" },
      { t: "p", v: "429s as a share of all API responses, segmented by workspace plan — the gap between Business and Enterprise 429 rates is the size of the problem. Secondary: the share of marketplace apps imposing their own minimum plan requirement. If that falls, the constraint really was the limit." },

      { t: "h2", v: "Sources" },
      {
        t: "ul",
        v: [
          "ClickUp developer documentation — rate limits by workspace plan, 429 behaviour, X-RateLimit headers.",
          "{{Add the direct docs URL and re-verify the tier numbers — API limits change without notice.}}",
        ],
      },
    ],
  },
];

export const artifacts = [
  {
    kind: "Product requirements",
    title: "MCP server for cluster orchestration — PRD",
    desc: "The full requirements document behind the Devtron case study: user segments, the tool-surface allow-list with rationale per capability, permission model, audit requirements and explicit non-goals.",
    todo: "Redact anything confidential, then link a view-only doc.",
  },
  {
    kind: "Prioritisation",
    title: "RICE-scored backlog — LabMate v1",
    desc: "Twelve candidate features scored on reach, impact, confidence and effort, with the reasoning for why slot-booking shipped before billing — including the two items I scored highest and cut anyway.",
    todo: "Build this from the real feature list.",
  },
  {
    kind: "Measurement",
    title: "Metrics tree — clinic scheduling platform",
    desc: "North-star metric decomposed into input metrics, with the instrumentation plan and the counter-metrics that would tell us we were optimising the wrong thing.",
    todo: "",
  },
  {
    kind: "Alignment",
    title: "Decision memo — a disagreement and how it resolved",
    desc: "One page: the disagreement between engineering and a client stakeholder, the options, the call, and what happened next.",
    todo: "Pick a real one. This is the artifact interviewers ask about most.",
  },
];
