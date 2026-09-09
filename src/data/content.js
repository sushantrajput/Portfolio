// ─────────────────────────────────────────────────────────────
//  ALL SITE CONTENT LIVES HERE. Edit copy in this file only.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Sushant Kumar",
  role: "Product Manager",
  tagline: "I turn ambiguous problems into decisions a team can act on.",
  intro:
    "Product manager working across developer infrastructure and enterprise B2B platforms. I spend my time on the part of the job that decides whether a product lands: understanding who is actually asking, choosing what not to build, and writing it down clearly enough that everyone is solving the same problem.",
  seeking:
    "Open to Associate Product Manager and Product Manager roles across B2B SaaS, platforms and consumer products — anywhere the work involves real users, real constraints and a decision that has to be defended.",
  location: "Gurugram, India",
  email: "skrajsushant698@gmail.com",
  phone: "+91 96930 60488",
  linkedin: "https://linkedin.com/in/sushant9692",
  github: "https://github.com/sushantrajput",
  site: "https://sushantsinghrajput.in",
  resume: "/resume.pdf",
};

export const glance = [
  { value: "72%", label: "faster data retrieval", note: "2.1s → 750ms for enterprise clients" },
  { value: "99.5%", label: "production uptime held", note: "across enterprise deployments" },
  { value: "3", label: "enterprise products delivered", note: "discovery through launch" },
  { value: "30%", label: "lift in user engagement", note: "after a registration redesign" },
];

export const experience = [
  {
    company: "Devtron Inc.",
    role: "Product Intern",
    period: "Mar 2026 — Present",
    place: "Gurugram",
    current: true,
    points: [
      "Own product strategy for an AI-native integration that connects assistants to cloud orchestration infrastructure for enterprise DevOps customers.",
      "Author product requirement documents covering user segments, permission scope, data-quality controls and explicit non-goals.",
      "Run discovery with platform teams and security reviewers, turning their constraints into scoped, sequenced releases.",
      "Partner with engineering and solutions teams to take features from problem definition through to enterprise rollout.",
    ],
  },
  {
    company: "Synapse Technologies",
    role: "Software Development Engineer Intern",
    period: "Jul 2024 — Dec 2024",
    place: "Indore",
    points: [
      "Delivered 3 production enterprise applications, improving client service levels through faster data retrieval and load times.",
      "Led a data architecture redesign that cut query response from 2.1s to 750ms on large broker datasets.",
      "Introduced automated release pipelines on AWS, sustaining 99.5% production uptime for business-critical systems.",
      "Specified a real-time data layer that reliably handles 1,000+ concurrent transactions.",
    ],
  },
  {
    company: "Mozilla Firefox Club, VIT",
    role: "Web Team Lead",
    period: "2022 — 2026",
    place: "Vellore",
    points: [
      "Led the design and launch of the club's official platform end to end.",
      "Simplified the event registration journey, driving a 30% increase in active user engagement.",
    ],
  },
];

export const education = {
  school: "Vellore Institute of Technology",
  degree: "B.Tech, Computer Science and Engineering",
  detail: "CGPA 8.13",
  year: "Expected 2026",
};

export const competencies = {
  labels: [
    "Problem framing",
    "Written communication",
    "Prioritisation",
    "Data analysis",
    "Stakeholder management",
    "Discovery & research",
    "Execution",
    "Go-to-market",
  ],
  values: [88, 90, 80, 82, 74, 70, 84, 58],
};

export const competenciesIntro =
  "An honest self-assessment rather than a wish list. Framing a messy problem and writing it down clearly are what I do best. Go-to-market is where I have the most ground to cover, and I'd rather say so than pretend otherwise.";

export const toolkit = [
  { group: "Product craft", items: ["PRDs & specs", "Discovery interviews", "RICE prioritisation", "Roadmapping", "Competitive analysis", "Product teardowns"] },
  { group: "Ways of working", items: ["Jira", "Confluence", "Agile & Scrum", "Figma", "Notion", "Stakeholder alignment"] },
  { group: "Data & measurement", items: ["SQL", "Metrics trees", "Funnel analysis", "A/B test design", "Data-quality monitoring", "Dashboards"] },
  { group: "Platform fluency", items: ["APIs & integrations", "Cloud platforms", "Kubernetes concepts", "AI agent workflows", "Release pipelines", "System design reviews"] },
];

// ── CASE STUDIES ──────────────────────────────────────────────
export const caseStudies = [
  {
    id: "devtron",
    theme: "devtron",
    kind: "shipped",
    kindLabel: "Shipped work",
    org: "Devtron Inc.",
    title: "Deciding what an AI agent is allowed to do in production",
    summary:
      "Enterprise DevOps teams wanted their AI assistant to act on live infrastructure. The hard part was never the AI. It was deciding which actions an assistant may take against production systems, and proving to a security reviewer that the boundary holds.",
    chips: ["Discovery", "Permission design", "Enterprise B2B", "PRD"],
    facts: [
      { k: "My role", v: "Product Intern — owned discovery, the PRD and the permission scope" },
      { k: "Working with", v: "Engineering, security review and enterprise design partners" },
      { k: "Timeline", v: "March 2026 — present" },
      { k: "Stage", v: "Ongoing" },
    ],
    body: [
      { t: "h2", v: "The situation" },
      { t: "p", v: "Devtron sits between developers and the infrastructure their applications run on — deployments, rollbacks, environment configuration, health checks. By early 2026 the same pattern kept surfacing in customer conversations: platform engineers were copying system output into an AI assistant by hand and asking it to explain a failed release. The assistant had the reasoning but none of the context, and the engineer became a slow, error-prone go-between." },
      { t: "p", v: "The obvious product was an integration that lets the assistant read the environment directly. The obvious product was also the one our security-conscious enterprise buyers were most likely to reject." },

      { t: "h2", v: "Who was actually asking" },
      { t: "p", v: "I split demand into three users with genuinely different risk tolerance. Getting that separation right is what made every later scoping decision defensible, because each option could be judged against who gains and who carries the risk." },
      {
        t: "table",
        head: ["User", "What they want", "What they fear"],
        rows: [
          ["Application developer", "Ask why a release failed and get an answer without opening four tools", "Very little — they carry the least risk and push hardest for access"],
          ["Platform engineer", "Fewer interruptions from developers asking why a release failed", "An assistant that changes a live service at 2am and can't explain why"],
          ["Security & compliance", "A complete audit trail and a clearly bounded blast radius", "A non-deterministic actor holding production credentials"],
        ],
      },
      { t: "p", v: "The developers were the loudest voice and the least exposed to the downside. The security reviewers were the quietest and held an effective veto. Any proposal that only satisfied the loud group was going to die late in the sales cycle, which is the most expensive place for it to die." },

      { t: "h2", v: "The core constraint" },
      { t: "p", v: "The integration standard offers two ways to expose capability: things the assistant can read, and things the assistant can do. The protocol treats them as near-symmetrical. In an infrastructure context they are anything but — a bad read leaks information, a bad action takes down a service customers are paying for." },
      { t: "quote", v: "Every capability we expose is a permission we can never quietly withdraw. Enterprise integrations become load-bearing within a week of launch." },
      { t: "diagram", v: "mcp" },

      { t: "h2", v: "Options I weighed" },
      {
        t: "table",
        head: ["Option", "Case for", "Case against"],
        rows: [
          ["Read-only access", "Trivially safe. Ships in weeks. Clears security review immediately.", "Solves the smaller half of the problem. The engineer still performs every action by hand."],
          ["__PICKED__Read broadly, plus a fixed list of reversible actions", "Covers the real pain — restart, roll back, deploy to non-production — while keeping the blast radius bounded and explainable.", "Slower to build. Needs a confirmation experience and an audit trail before it can launch at all."],
          ["Full parity with the existing product API", "Most capable. Nothing to explain to users about what is missing.", "Unsellable to compliance. A single bad action becomes a production incident with no human in the loop."],
          ["Let each customer configure permissions on day one", "Pushes the decision to the buyer, who knows their own risk appetite.", "Abdication dressed up as flexibility. Most teams would misconfigure it, and we would own the outcome regardless."],
        ],
      },
      {
        t: "decision",
        label: "Decision",
        v: "Read broadly, act narrowly and reversibly. Everything the assistant can do must be undoable by a single human action, and every change surfaces a preview the engineer approves before it executes. Credentials, access-control changes, infrastructure-level operations and anything destructive stayed off the surface entirely — not behind a setting, not configurable. The working rule: if a capability can't be explained in one line to a compliance reviewer, it doesn't ship.",
      },
      { t: "h3", v: "What I gave up" },
      { t: "p", v: "Real capability, knowingly. An assistant that cannot see credentials cannot diagnose a whole class of configuration failures, and those are among the most common causes of a failed release. We accepted that it would sometimes have to say \"check your configuration values\" instead of resolving the issue outright. Adoption over capability was the right trade for a first enterprise release and I would make it again — but it is a genuine cost, and the next version should revisit it with a scoped, human-approved path rather than treating the boundary as permanent." },

      { t: "h2", v: "What the scope looks like" },
      { t: "p", v: "The read surface covers the things an engineer checks first when something breaks: service health, recent events, configuration state and release history. The action surface is deliberately short, and every entry on it shares two properties — it is reversible by one human step, and it produces a preview the engineer confirms before anything executes. Every call, read or action, writes a structured audit entry. Nothing on either surface can alter permissions or destroy state." },

      { t: "h2", v: "How we're measuring it" },
      { t: "p", v: "I defined success before launch rather than reaching for whatever number looked good afterwards. The primary measure is time from a failed release to a diagnosed cause, compared against the same teams' baseline. Adoption is the leading indicator: whether design partners move the integration into their default configuration and leave it there past the first fortnight, which is where novelty usually wears off." },
      { t: "p", v: "The counter-metric matters more than either. If the confirmation step is being approved without being read, we have built a rubber stamp rather than a safeguard — and that would be a worse outcome than shipping nothing, because it converts a safety feature into false assurance." },

      { t: "h2", v: "What I'd do differently" },
      {
        t: "ul",
        v: [
          "I scoped the capability surface before watching anyone use an assistant against a real environment. The list was reasoned from interviews and first principles, both of which are weaker than observation. Two weeks of watching real usage would have shown which checks engineers chain together, and we would have designed combined capabilities instead of thin wrappers around individual operations.",
          "I treated the audit log as a compliance checkbox. It turned out to be the artifact security reviewers spent the most time on, and the thing that decided how quickly a deal moved. Designing its structure up front would have cost a fraction of what shaping it afterwards did.",
          "I under-weighted the confirmation experience. It was specified as a safety mechanism and evaluated as one, but it is also the moment users meet the product most often. A safeguard people resent is a safeguard people learn to bypass, and I should have tested that flow far earlier than I did.",
        ],
      },
    ],
  },

  {
    id: "vercel",
    theme: "vercel",
    kind: "teardown",
    kindLabel: "Teardown + roadmap",
    org: "Vercel",
    title: "Where Vercel's abstraction leaks, and what it costs them",
    summary:
      "Vercel built the best deployment experience in its category on a model that suits one half of the applications its own customers build. The gap sends teams to a second platform — and the second platform is the one that ends up owning the relationship.",
    chips: ["Platform strategy", "Pricing", "Roadmap", "RICE"],
    facts: [
      { k: "Type", v: "Independent teardown with a proposed roadmap" },
      { k: "Affiliation", v: "None — public documentation and my own use" },
      { k: "Scope", v: "Product teams of 2–15 people" },
      { k: "Date", v: "September 2026" },
    ],
    body: [
      { t: "h2", v: "The observation" },
      { t: "p", v: "Almost every product I have shipped on Vercel eventually needed something the platform does not offer: a connection that stays open, a background job that runs on a schedule, a database that isn't a third-party add-on with its own bill and its own latency. Each time, the answer was the same — keep the front end on Vercel and put everything else somewhere else." },
      { t: "p", v: "None of this is hidden. Vercel's own documentation is clear that its functions do not support long-lived processes or direct connections, and that it does not offer first-party database hosting. Those are honest constraints of a deliberate architectural choice. The product question isn't whether the constraints are real. It's what happens to the customer relationship once a team runs into them." },

      { t: "h2", v: "Why it matters commercially" },
      { t: "p", v: "The split outcome — front end on Vercel, everything stateful on Railway, Render or Cloudflare — looks like a stable equilibrium and isn't. Three things happen once a team is running two platforms:" },
      {
        t: "ol",
        v: [
          "The bill becomes comparable. Vercel charges per seat plus usage; the alternatives charge for resources consumed. A team already fluent in both starts asking why it pays a premium for one layer.",
          "The experience advantage narrows. Preview environments and push-to-deploy were the moat. Every serious competitor now ships a version of both. The gap is real but no longer categorical.",
          "The second platform accumulates gravity. Whichever platform holds the data, the queues and the scheduled work becomes the one the team reasons about daily. The front end is the easiest piece to move, not the hardest.",
        ],
      },
      { t: "p", v: "Vercel's strongest asset — being where the application's front end lives — is also the most portable part of the stack. That is an uncomfortable position to defend from, and it gets less comfortable as the alternatives close the experience gap." },
      { t: "diagram", v: "vercel" },

      { t: "h2", v: "What I'd prioritise" },
      { t: "p", v: "Scored against a single objective: reduce the share of Vercel teams running a second platform for stateful workloads." },
      {
        t: "table",
        head: ["Initiative", "Why", "Reach · Impact · Confidence / Effort"],
        rows: [
          ["__PICKED__First-party managed database, priced as a platform primitive", "Targets the exact workload that creates gravity elsewhere. Highest single lever available.", "high · high · med / high"],
          ["__PICKED__A long-running compute primitive alongside functions", "Removes the \"I need one always-on process\" exit. Architecturally the hardest and the most important.", "med · high · med / very high"],
          ["Cost predictability: spend caps, per-project budgets, forecasts", "Bill anxiety starts platform evaluations before anything has actually broken.", "high · med · high / low"],
          ["Longer log retention on lower tiers", "A short debugging window pushes teams to external tooling early, which is another wedge in.", "med · low · high / low"],
          ["An official two-platform reference architecture", "Cheap, honest, and it institutionalises the loss rather than reversing it.", "low · low · high / very low"],
        ],
      },
      {
        t: "decision",
        label: "Recommendation",
        v: "Ship cost predictability first. It is weeks of work, it addresses the anxiety that starts migrations, and it buys time for the harder thing. Spend those same two quarters building the long-running compute primitive, because it is the only initiative on the list that changes the architecture rather than the messaging. Do not ship the two-platform reference architecture: it is the cheapest item here and the one that quietly concedes the position.",
      },
      { t: "h3", v: "Success metric" },
      { t: "p", v: "The share of paid teams whose Vercel project connects to an external compute or database host, measured monthly. Leading indicator: adoption of the new compute primitive among teams that previously ran an external backend. If it ships and that share does not move within two quarters, the diagnosis was wrong — the constraint was pricing, not capability, and the roadmap should change accordingly." },
      { t: "h3", v: "Risks" },
      {
        t: "ul",
        v: [
          "Focus dilution. Vercel's advantage comes from doing one layer better than anyone else. A general compute product invites direct comparison with platforms that have spent years on exactly that, and losing that comparison is worse than never entering it.",
          "Margin structure. Usage-based and always-on economics are different businesses with different unit costs. This is a financial decision as much as a product one, and it should be modelled before it is committed to.",
          "Cannibalisation. More predictable, cheaper pricing reduces revenue from precisely the customers who are most profitable today.",
        ],
      },
      { t: "h2", v: "Sources" },
      {
        t: "ul",
        v: [
          "Vercel documentation and pricing — vercel.com/docs and vercel.com/pricing (function constraints, plan limits, per-seat plus usage billing).",
          "Northflank, \"Railway vs Cloudflare vs Vercel: which platform fits your stack in 2026\" — northflank.com/blog/railway-vs-cloudflare-vs-vercel.",
          "Render, \"Railway vs Vercel: which platform fits your stack in 2026\" — render.com/articles/railway-vs-vercel.",
          "Encore, \"Best Vercel alternatives in 2026\" — encore.dev/articles/vercel-alternatives.",
        ],
      },
    ],
  },

  {
    id: "docusign",
    theme: "docusign",
    kind: "strategy",
    kindLabel: "Strategy analysis",
    org: "Docusign",
    title: "Docusign is defending the wrong end of the contract",
    summary:
      "The signature is the most defensible step in an agreement and the least valuable one. The expensive work happens before it — drafting, negotiation, review — and that is exactly where AI-native contract tools are arriving.",
    chips: ["Enterprise B2B", "AI strategy", "Competitive", "Go-to-market"],
    facts: [
      { k: "Type", v: "Independent strategy analysis" },
      { k: "Affiliation", v: "None — public filings, product announcements and press" },
      { k: "Scope", v: "Enterprise agreement workflow, 2024 – 2027" },
      { k: "Date", v: "September 2026" },
    ],
    body: [
      { t: "h2", v: "The position" },
      { t: "p", v: "Docusign built a category on a narrow, high-trust primitive: a signature that holds up legally. That primitive is genuinely hard to displace — it rests on audit trails, identity verification, retention policy and a decade of enterprise legal teams accepting it as admissible. It is also, increasingly, a commodity capability that a larger competitor can bundle into something else." },
      { t: "p", v: "Meanwhile the expensive part of an agreement was always the human hours around it: drafting from a template, redlining, chasing approvals, and then losing track of what was actually committed to. Docusign has been explicit about this. It launched Intelligent Agreement Management in April 2024 to move upstream from signature into the whole lifecycle, powered by its Iris AI engine, with Navigator as an AI repository over executed agreements and Maestro as a no-code workflow builder." },

      { t: "h2", v: "The threat is not another e-signature company" },
      { t: "p", v: "It is a general-purpose AI tool with a contract-shaped wrapper. A legal team that can ask an assistant to draft a master services agreement, compare it against an internal playbook and produce redlines has already captured most of the value in the lifecycle. Signature becomes the last and cheapest step — and whoever owns drafting and review is very well positioned to bundle it." },
      { t: "quote", v: "Docusign's real moat is not the signature. It is the corpus of executed agreements and the workflows the enterprise has already wired into its other systems. The strategy has to be built on those, not on the pen." },

      { t: "h2", v: "What Docusign has actually shipped" },
      {
        t: "table",
        head: ["When", "What", "How I read it"],
        rows: [
          ["2020", "Acquired Seal Software, a contract analytics company", "The right intent four years before the platform existed to hold it. Integration was slow."],
          ["Apr 2024", "IAM platform launched — Iris, Navigator, Maestro", "The right architecture. Signature becomes one capability inside a lifecycle platform."],
          ["Nov 2024", "Developer conference; Docusign for Developers; App Center", "A platform play. Over 1,100 partner integrations is a genuine distribution asset."],
          ["Mar 2026", "AI contract review assistant — playbooks, risk flags, redlines", "Reported savings of up to 15 minutes per NDA and 30–60 minutes on MSA negotiation."],
          ["May 2026", "AI assistant and agents announced at Momentum", "Directionally right. The rollout stretching into 2027 is the problem, not the direction."],
        ],
      },
      { t: "p", v: "The strategy is not wrong. The market's complaint — reflected in a roughly 30% share-price decline through 2026 attributed to slow platform adoption — is about pace and proof. Enterprise customers are still on e-signature contracts and have not moved across at the rate the story requires. A correct strategy delivered too slowly is indistinguishable, from the outside, from a wrong one." },

      {
        t: "decision",
        label: "Recommendation",
        v: "Stop selling the platform as a migration and start selling one workflow that pays for itself. Migrations go to procurement committees and take quarters. A single high-frequency workflow — NDA turnaround, or renewal obligation alerts — can be adopted by one team, measured within weeks, and expanded outward from there. Docusign already has the number that sells it: minutes saved per NDA. That is a land-and-expand motion rather than a platform pitch, and it matches how the buying actually happens inside a large company.",
      },
      { t: "h3", v: "Three specific moves" },
      {
        t: "ul",
        v: [
          "Make the repository the wedge, not the workflow. Navigator's value compounds with volume, and Docusign uniquely already holds the executed agreements. Free or near-free ingestion of a customer's existing corpus creates switching cost before anyone has to change how they work.",
          "Be the substrate, not the interface. The announced integration server matters more than another screen. If legal teams are going to work through general-purpose assistants regardless, the winning position is being the system those assistants call for agreement context and execution.",
          "Publish the accuracy bar. Legal buyers do not adopt AI review on a time-saved claim alone. Whoever first publishes an auditable benchmark for clause extraction and risk flagging, with error rates included, reframes the entire procurement conversation. Docusign has both the corpus to do it and the incumbency to make it the standard others are measured against.",
        ],
      },
      { t: "h3", v: "What would prove me wrong" },
      { t: "p", v: "If enterprise legal teams turn out to prefer one general AI workspace over a specialised agreement system, none of the above saves the position — the corpus becomes an export job and the workflow gets rebuilt elsewhere. The signal to watch is whether large customers are ingesting their agreements into Navigator or into general-purpose tools. That, rather than seat growth, is the number I would track." },

      { t: "h2", v: "Sources" },
      {
        t: "ul",
        v: [
          "Docusign FY2026 Form 10-K, growth and investment strategy — sec.gov (filing for period ending 31 January 2026).",
          "Docusign, \"Introducing the new Docusign, the Intelligent Agreement Management company\" — docusign.com/blog/new-docusign-intelligent-agreement-management.",
          "Docusign press release, 21 May 2026, \"Docusign unveils AI assistant and agents\" — prnewswire.com.",
          "Docusign press release, 25 March 2026, AI-powered contract review assistant (NDA and MSA time savings).",
        ],
      },
    ],
  },

  {
    id: "clickup",
    theme: "clickup",
    kind: "teardown",
    kindLabel: "Teardown",
    org: "ClickUp",
    title: "A rate limit is a pricing decision wearing an infrastructure costume",
    summary:
      "ClickUp allows 100 requests per minute on most plans and 10,000 on Enterprise. That hundredfold gap is defensible as infrastructure policy and expensive as product strategy, because every integration in the marketplace has to be built for the floor.",
    chips: ["Ecosystem", "Pricing", "Partner experience", "Metrics"],
    facts: [
      { k: "Type", v: "Narrow product teardown" },
      { k: "Affiliation", v: "None — public developer documentation" },
      { k: "Scope", v: "Integration and ecosystem strategy" },
      { k: "Date", v: "September 2026" },
    ],
    body: [
      { t: "h2", v: "The number" },
      { t: "p", v: "ClickUp applies its API rate limit per access token, and the limit is set by the plan of the workspace that token belongs to. Free, Unlimited and Business workspaces get 100 requests per minute. Business Plus gets 1,000. Enterprise gets 10,000. Exceed it and the request is rejected outright." },
      { t: "diagram", v: "clickup" },

      { t: "h2", v: "Why this is a product problem, not an infrastructure one" },
      { t: "p", v: "A limit that varies by the customer's plan pushes a pricing decision onto a third party who has no visibility into it and no way to influence it. An app in the ClickUp marketplace gets installed by workspaces across every tier, and the partner building it has three choices:" },
      {
        t: "ol",
        v: [
          "Build for the floor. Every customer gets the sync frequency and bulk behaviour that 100 requests per minute allows — including the Enterprise customer paying for a hundred times that headroom. Most partners do this, because it is the only option that never breaks.",
          "Build for the ceiling and degrade gracefully. Detect throttling, back off, retry. Correct, considerably more work, and the failure a Business-tier customer experiences is a slow or half-synced app they will blame on the integration.",
          "Restrict the app to higher plans. Entirely rational for the partner, and it shrinks the reach of ClickUp's own ecosystem.",
        ],
      },
      { t: "p", v: "All three outcomes are worse for ClickUp than for the partner. The perceived quality of the ecosystem converges on whatever the lowest supported tier permits, and that perception attaches to the platform rather than to the app that was constrained by it." },
      { t: "quote", v: "Integration quality is a platform attribute. If the API makes good integrations hard to build, the platform absorbs the blame and the partner absorbs the churn." },

      { t: "h2", v: "What I'd change" },
      {
        t: "table",
        head: ["Change", "Effect", "Cost to ClickUp"],
        rows: [
          ["__PICKED__Separate the read budget from the write budget", "Most of the pressure on the limit is polling for changes. A larger read budget costs far less to serve than a larger write budget and resolves most of the pain.", "Moderate engineering. The clearest win on this list."],
          ["__PICKED__Raise the floor to roughly 300 per minute and compress the top of the range", "Removes the cliff that forces partners to build for the floor. Most integrations become viable on any plan.", "Real infrastructure cost, and it gives up a small upsell lever."],
          ["Reliable change notifications with delivery guarantees", "Attacks the cause rather than the symptom. Partners poll because being notified of changes cannot be relied on.", "Significant. The highest-value item and the slowest to deliver."],
          ["Per-app allowance negotiated at marketplace review", "Lets well-built integrations earn headroom independent of which plan the installing customer is on.", "Operational overhead, and it needs abuse controls to work."],
          ["Publish the limit clearly in marketplace listings", "Sets customer expectations honestly before install rather than after.", "Near zero — but it makes the constraint visible, which is not obviously in ClickUp's commercial interest."],
        ],
      },
      {
        t: "decision",
        label: "Recommendation",
        v: "Split the read and write budgets first. It is the cheapest change with the largest share of the benefit, because polling for changes is what actually exhausts the limit. Then raise the floor. Treat reliable change notifications as the two-quarter structural fix, because as long as being notified of a change cannot be trusted, every integration will keep polling and every rate limit will keep feeling too low.",
      },
      { t: "h3", v: "How I'd know it worked" },
      { t: "p", v: "Rejected requests as a share of all API traffic, segmented by workspace plan — the gap between the Business and Enterprise rejection rates is a direct measure of the problem's size. Secondary measure: the share of marketplace apps that impose their own minimum plan requirement. If that share falls after the change, the constraint genuinely was the limit rather than something else in the partner experience." },

      { t: "h2", v: "Sources" },
      {
        t: "ul",
        v: [
          "ClickUp developer documentation, rate limits by workspace plan — developer.clickup.com/docs/rate-limits.",
          "ClickUp developer documentation, getting started and authentication — developer.clickup.com/docs.",
        ],
      },
    ],
  },
];

export const aboutParagraphs = [
  "I came to product management from the side of the work where things get built, and I don't think of that as a change of field so much as a change in where I spend my leverage. Understanding how something is put together turns out to be most useful not for its own sake, but because it makes me quicker to spot which constraints are real and which are just habit.",
  "What I'm good at: taking a problem nobody has framed properly, getting to a decision faster than the room expects, and writing it down clearly enough that everyone leaves solving the same thing. I care a lot about the second half of that — most product failures I've watched up close were failures of shared understanding long before they were failures of execution.",
  "What I'm still learning: pricing, and how enterprise deals actually close. I've seen both from close enough to know they're harder than they look from the outside, and not yet close enough to claim I've mastered either.",
  "I'm looking for a product role where the problems are real and the constraints are honest — B2B, platforms or consumer. The fastest way to evaluate me is the Devtron case study, because it has the most genuine tension in it.",
];

export const artifacts = [
  {
    kind: "Product requirements",
    title: "Permission scope for an AI assistant — PRD",
    desc: "The requirements document behind the Devtron case study: user segments and their differing risk tolerance, the capability list with a written rationale for every entry, the approval model, audit requirements, and the non-goals stated explicitly so they didn't get relitigated every sprint.",
    todo: "",
  },
  {
    kind: "Prioritisation",
    title: "RICE-scored backlog — scheduling platform",
    desc: "Candidate features scored on reach, impact, confidence and effort, with the reasoning for the final sequence written alongside the numbers — including the two items that scored highest and were cut anyway, which is usually the more interesting decision.",
    todo: "",
  },
  {
    kind: "Measurement",
    title: "Metrics tree and instrumentation plan",
    desc: "A north-star metric decomposed into the inputs that actually move it, paired with the counter-metrics that would tell us we were optimising the wrong thing before the quarter ended rather than after.",
    todo: "",
  },
  {
    kind: "Alignment",
    title: "Decision memo — a disagreement and how it resolved",
    desc: "One page covering a real disagreement between engineering and a stakeholder: what each side was optimising for, the options on the table, the call that was made, and what happened next. This is the artifact interviewers ask about most.",
    todo: "",
  },
];
