// Icons
    import js from "../assets/icons/skills-icon/javascript.svg";
    import html from "../assets/icons/skills-icon/html.svg";
    import css from "../assets/icons/skills-icon/css.svg";
    import figma from "../assets/icons/skills-icon/figma.svg";
    import md from "../assets/icons/skills-icon/mongodb.svg";
    import next from "../assets/icons/skills-icon/nextjs.svg";
    import node from "../assets/icons/skills-icon/nodejs.svg";
    import py from "../assets/icons/skills-icon/python.svg";
    import react from "../assets/icons/skills-icon/react-js.svg";
    import ml from "../assets/icons/skills-icon/ml.png";

    // Product cover images — replace these files with the logo/cover images you attached.
    // Save each image at the exact path below, using these exact file names.
    import Docusign from "../assets/images/projectImages/docusign.png";
    import Vercel from "../assets/images/projectImages/vercel.png";
    import Devtron from "../assets/images/projectImages/devtron.png";
    import Uber from "../assets/images/projectImages/uber.png";

    export const Projects = {

      Docusign: {
        image: Docusign,
        title: "Docusign",
        subTitle: "Case Study: Boosting Contract Completion Rates",
        insights: {
          desc: `Independent case study on Docusign's enterprise e-signature workflow, where large
        multi-party B2B contracts often stall between the first and final signature due to approval
        chains and missed reminders. My approach: define a "signer drop-off" funnel (by role and
        time-to-open), then design a smart follow-up engine that auto-escalates reminders and flags
        stuck deals to admins using signer behavior instead of a fixed reminder schedule. Target
        outcome: a measurable lift in completion rate for multi-signer contracts and less manual
        chasing for sales and legal teams.`,
          category: "B2B SaaS / Product Strategy Case Study",
          techStack: [py, md, figma, ml],
          reportLink: "",
        },
        githubLink: "https://www.docusign.com",
      },


      Vercel: {
        image: Vercel,
        title: "Vercel",
        subTitle: "Case Study: Reducing Time-to-First-Deploy",
        insights: {
          desc: `Independent case study on Vercel's developer onboarding, where new users often churn
        between signup and their first successful deployment. My approach: instrument the onboarding
        funnel to isolate the top drop-off points (framework detection, failed builds, missing env
        variables), then ship inline fix-it prompts and framework-aware starter templates at each
        point. Success would be measured by time-to-first-deploy and Day-7 project retention, treating
        a developer's first ten minutes as the moment that decides long-term adoption.`,
          category: "Developer Tools / Product Strategy Case Study",
          techStack: [next, react, node, py],
          reportLink: "",
        },
        githubLink: "https://vercel.com",
      },


      Devtron: {
        image: Devtron,
        title: "Devtron",
        subTitle: "Technical Product Intern — AI-Native MCP Server",
        insights: {
          desc: `Real product work: as Technical Product Intern at Devtron, I drove product strategy
        for an AI-native Model Context Protocol (MCP) server integrating GitLab Duo with core DevOps
        orchestration for enterprise clients. I authored PRDs covering data-quality controls and
        deep-tech feature evaluation, partnered with engineering to ship agentic AI workflows across
        Kubernetes-native pipelines, and translated cloud and data-infrastructure constraints into
        sprint-ready roadmaps — directly improving developer productivity for enterprise DevOps teams.`,
          category: "DevOps / B2B SaaS — Real Product Experience",
          techStack: [node, py, ml, md],
          reportLink: "",
        },
        githubLink: "https://devtron.ai",
      },


      Uber: {
        image: Uber,
        title: "Uber",
        subTitle: "Case Study: Cutting Rider Wait Times in Low-Supply Zones",
        insights: {
          desc: `Independent case study on Uber's rider experience, targeting long ETAs in
        low-driver-density zones during peak hours. My approach: define a "supply gap" metric per
        zone and time slot, then test proactive incentive nudges to nearby idle drivers ahead of
        predicted demand spikes, rather than relying on reactive surge pricing alone. Success would be
        measured by reduced average ETA and rider cancellation rate in flagged zones, while tracking
        driver earnings to keep the marketplace balanced on both sides.`,
          category: "Marketplace / Mobility — Product Strategy Case Study",
          techStack: [py, react, node, ml],
          reportLink: "",
        },
        githubLink: "https://www.uber.com",
      },
    };
