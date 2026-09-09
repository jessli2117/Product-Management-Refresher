const PM_LEARNINGS = {
  categories: [
    {
      id: "daily-life",
      name: "The PM Daily Life",
      icon: "&#128197;",
      description: "What a product manager actually does day-to-day",
      subcategories: [
        {
          name: "Morning Routine & Standup",
          items: [
            "Review overnight metrics dashboards — check for anomalies in key KPIs before anyone asks",
            "Scan support tickets and customer feedback from the last 24 hours for emerging issues",
            "Attend or run daily standup: what shipped yesterday, what's blocked, what's planned today",
            "Triage incoming Slack/email requests — categorize as urgent, this-week, or backlog",
            "Review any A/B test results that reached significance overnight"
          ]
        },
        {
          name: "Core Working Hours",
          items: [
            "Write or review PRDs, user stories, and acceptance criteria for upcoming features",
            "Hold design reviews — give feedback on mockups and prototypes",
            "Unblock engineers — answer questions, make scope decisions, clarify requirements",
            "Stakeholder meetings — sync with sales, marketing, CS on product updates and needs",
            "User research — run or observe user interviews, analyze survey results",
            "Prioritize the backlog — groom tickets, re-rank based on new information",
            "Strategic thinking — competitor analysis, market research, roadmap planning"
          ]
        },
        {
          name: "End of Day",
          items: [
            "Update project tracking tools (Jira, Linear, Asana) with current status",
            "Send async updates to stakeholders on key decisions or blockers",
            "Prepare for tomorrow — review calendar, prep for meetings",
            "Document decisions made today so the team has a record",
            "Reflect: Did I move the most important thing forward today?"
          ]
        },
        {
          name: "Weekly Cadence",
          items: [
            "Sprint planning (if Scrum) — commit to what the team will build this sprint",
            "1:1s with engineering lead, design lead, and your manager",
            "Weekly metrics review — deeper analysis than daily dashboard checks",
            "Roadmap check-in — are we on track for quarterly goals?",
            "Cross-functional sync — alignment with marketing, sales, and CS on upcoming launches"
          ]
        },
        {
          name: "Monthly / Quarterly Cadence",
          items: [
            "Quarterly planning — set OKRs, plan the roadmap, align with company goals",
            "Sprint retrospectives — what went well, what to improve in team process",
            "Product reviews with leadership — present progress, metrics, and plan",
            "Competitive landscape update — what did competitors ship? What's changing?",
            "Customer advisory board or power-user roundtable",
            "Roadmap communication — update the org on what's planned and why"
          ]
        }
      ]
    },
    {
      id: "product-design-learnings",
      name: "Product Design & Sense",
      icon: "&#127912;",
      description: "How to think about designing products and features",
      subcategories: [
        {
          name: "User-Centered Thinking",
          items: [
            "Always start with the user problem, never with the solution",
            "Build user personas based on real research, not assumptions",
            "Distinguish between what users say they want and what they actually need",
            "Use Jobs to Be Done (JTBD) to understand the underlying motivation behind requests",
            "Talk to at least 5 users before committing engineering resources to a new feature",
            "Observe users using the product — usability tests reveal what surveys can't"
          ]
        },
        {
          name: "Design Process",
          items: [
            "Follow Design Thinking: Empathize → Define → Ideate → Prototype → Test",
            "Low-fidelity before high-fidelity — sketch before Figma, Figma before code",
            "Get feedback early and often — share rough ideas, not polished presentations",
            "Design for the 80% use case, then handle edge cases without cluttering the core experience",
            "Accessibility is not optional — design for screen readers, color blindness, motor impairments",
            "Mobile-first: most users are on phones, design for the smallest screen first"
          ]
        },
        {
          name: "Product Critique Skills",
          items: [
            "Practice tearing down 2-3 products per week — analyze what works and what doesn't",
            "Structure critiques: who is it for, what problem does it solve, how well does it solve it",
            "Look at competitor products through the lens of strengths, weaknesses, and missed opportunities",
            "Understand the business model behind every product you analyze — design follows incentives",
            "Pay attention to onboarding flows, empty states, error messages, and edge cases — these reveal product maturity"
          ]
        },
        {
          name: "Key Concepts to Know",
          items: [
            "Progressive disclosure — reveal complexity gradually, don't overwhelm upfront",
            "Cognitive load — every choice, word, and element adds mental burden",
            "Affordances and signifiers — elements should look like what they do",
            "Hick's Law — more choices = slower decisions. Reduce options to speed users up",
            "Fitts's Law — important targets should be large and close to the user's cursor/thumb",
            "Loss aversion — people feel losses 2x more than equivalent gains. Use streaks, progress bars",
            "Network effects — products that get better with more users (social, marketplace, platform)"
          ]
        }
      ]
    },
    {
      id: "estimation-learnings",
      name: "Estimation & Market Sizing",
      icon: "&#128202;",
      description: "How to estimate anything and size markets",
      subcategories: [
        {
          name: "Estimation Approaches",
          items: [
            "Top-down: start from a large known number (population, GDP) and narrow with percentages",
            "Bottom-up: start from unit economics and scale up (stores × customers × ticket size)",
            "Analogous estimation: use a known similar quantity as an anchor and adjust",
            "Always state your approach before calculating — the interviewer wants to see structure",
            "Use round numbers — 330M not 331.9M. Precision is false confidence"
          ]
        },
        {
          name: "Market Sizing Concepts",
          items: [
            "TAM (Total Addressable Market) — everyone who could theoretically use your product",
            "SAM (Serviceable Addressable Market) — the segment you can actually reach",
            "SOM (Serviceable Obtainable Market) — realistic capture in 2-3 years",
            "Top-down TAM: industry size × your category's share",
            "Bottom-up TAM: number of potential customers × annual contract value",
            "Always sanity-check against a known data point or comparable company"
          ]
        },
        {
          name: "Common Anchors to Memorize",
          items: [
            "US population: ~330M. World: ~8B. EU: ~450M. India: ~1.4B. China: ~1.4B",
            "US households: ~130M. Average household: 2.5 people",
            "US smartphone penetration: ~85%. Global: ~50%",
            "US GDP: ~$25T. Average US household income: ~$75K",
            "Number of businesses in US: ~33M (6M with employees, 27M solo)",
            "Average American works ~250 days/year, ~8 hours/day",
            "US college students: ~20M. US K-12 students: ~50M"
          ]
        },
        {
          name: "Practice Tips",
          items: [
            "Do 2-3 estimation problems per week to build speed and confidence",
            "Practice out loud — interviewers evaluate your narration, not just the answer",
            "Being within 2-5x of the real number is usually considered good",
            "Show your work — a wrong answer with great structure beats a right answer with no explanation",
            "Always end with a sanity check against something you know or can reason about"
          ]
        }
      ]
    },
    {
      id: "strategy-learnings",
      name: "Strategy & Business",
      icon: "&#9813;",
      description: "How to think strategically about products and markets",
      subcategories: [
        {
          name: "Strategic Thinking Fundamentals",
          items: [
            "Strategy is about choosing what NOT to do, not just what to do",
            "Understand your competitive advantage — what can you do that others can't easily replicate?",
            "Think in terms of moats: network effects, switching costs, scale, brand, data, patents",
            "Know Porter's Five Forces: rivalry, supplier power, buyer power, substitutes, new entrants",
            "Distinguish strategy (where to play and how to win) from tactics (what to do today)"
          ]
        },
        {
          name: "Go-to-Market Strategy",
          items: [
            "Define your ideal customer profile (ICP) before building a GTM plan",
            "Positioning: how is your product different AND better for your specific target?",
            "Channel strategy: where does your target customer already spend time?",
            "Product-Led Growth (PLG): free tier → self-serve → upgrade (Slack, Figma, Notion)",
            "Sales-Led Growth: enterprise outbound → demo → pilot → contract (Salesforce, Workday)",
            "Community-Led Growth: build a community around the problem, then offer the solution"
          ]
        },
        {
          name: "Business Models to Know",
          items: [
            "SaaS subscription: recurring revenue, per-seat or per-usage pricing",
            "Marketplace: take-rate on transactions between buyers and sellers (Airbnb, Uber)",
            "Advertising: free product, monetize attention (Google, Meta, TikTok)",
            "Freemium: free basic tier, paid premium (Spotify, Dropbox, LinkedIn)",
            "Hardware + services: sell device at cost, monetize recurring services (Peloton, Kindle)",
            "Transaction fees: charge per transaction (Stripe, PayPal, Square)",
            "Enterprise licensing: annual contract, often with implementation services"
          ]
        },
        {
          name: "Competitive Analysis Skills",
          items: [
            "Map competitors on a 2x2 matrix (e.g., price vs feature depth, enterprise vs SMB)",
            "Understand direct competitors (same solution) vs indirect (different solution, same problem)",
            "Monitor competitor moves: product launches, pricing changes, funding, hires, partnerships",
            "Don't just copy competitors — understand WHY they made decisions, then decide if it applies to you",
            "Blue Ocean thinking: sometimes the best strategy is to compete where no one else is"
          ]
        }
      ]
    },
    {
      id: "behavioral-learnings",
      name: "Behavioral & Leadership",
      icon: "&#128101;",
      description: "How to lead, communicate, and collaborate as a PM",
      subcategories: [
        {
          name: "The STAR Method",
          items: [
            "Situation: set the context in 2-3 sentences. When, where, what team, what project",
            "Task: what was YOUR specific role and responsibility? What was at stake?",
            "Action: what did YOU do? Be specific about YOUR actions, not the team's",
            "Result: quantifiable outcome. Revenue, time saved, metric improved, shipped on time",
            "Keep answers to 2-3 minutes. Practice with a timer",
            "Prepare 8-10 stories that cover: leadership, conflict, failure, data-driven decision, ambiguity, cross-functional, customer focus, innovation"
          ]
        },
        {
          name: "Leadership Without Authority",
          items: [
            "PMs have responsibility without authority — you can't tell anyone what to do",
            "Influence through vision: paint a compelling picture of the future",
            "Influence through data: let evidence speak louder than opinions",
            "Influence through relationships: invest in 1:1 trust before you need it",
            "Influence through removing blockers: be the person who makes everyone's job easier",
            "Give credit publicly, take blame privately — this compounds trust over time"
          ]
        },
        {
          name: "Communication Skills",
          items: [
            "Tailor your message to the audience: exec wants the 'so what', engineer wants the 'how'",
            "Lead with the conclusion, then provide supporting evidence (pyramid principle)",
            "Written communication: short paragraphs, bullet points, bold the key takeaway",
            "In meetings: state the goal upfront, end with clear decisions and action items",
            "Bad news: deliver early, take ownership, present a plan to fix it",
            "Learn to disagree constructively: 'I see it differently because...' not 'You're wrong'"
          ]
        },
        {
          name: "Stakeholder Management",
          items: [
            "Map your stakeholders: who has influence, who has interest, who has both?",
            "Over-communicate with high-influence stakeholders — no surprises",
            "Understand each stakeholder's personal goals and concerns, not just their title",
            "Build trust through consistency: do what you say, say what you do",
            "When stakeholders disagree with each other, facilitate the resolution — don't pick sides",
            "Disagree and commit: once a decision is made, execute fully even if you disagreed"
          ]
        }
      ]
    },
    {
      id: "analytical-learnings",
      name: "Analytics & Metrics",
      icon: "&#128200;",
      description: "How to define, track, and interpret product metrics",
      subcategories: [
        {
          name: "Metrics Frameworks",
          items: [
            "North Star Metric: the single metric that best captures the core value your product delivers",
            "AARRR (Pirate Metrics): Acquisition → Activation → Retention → Referral → Revenue",
            "HEART (Google): Happiness, Engagement, Adoption, Retention, Task Success",
            "Input metrics (things you control) vs output metrics (business results)",
            "Leading indicators (predict the future) vs lagging indicators (measure the past)",
            "Counter-metrics: what to watch so you don't game your primary metric"
          ]
        },
        {
          name: "Key Metrics to Know",
          items: [
            "DAU/MAU ratio: measures engagement stickiness. Social apps: ~50%. SaaS tools: ~30%",
            "Retention curves: day 1, day 7, day 30 retention. Healthy apps flatten, not approach zero",
            "Churn rate: percentage of users or revenue lost per period. SaaS: <5% monthly is good",
            "LTV (Lifetime Value): total revenue from a customer over their lifetime. LTV > 3x CAC is healthy",
            "CAC (Customer Acquisition Cost): total sales and marketing spend ÷ new customers acquired",
            "NPS (Net Promoter Score): promoters (9-10) minus detractors (0-6). > 50 is excellent",
            "Conversion rate: percentage of users completing a desired action. Benchmark varies by funnel stage"
          ]
        },
        {
          name: "Data Analysis Skills",
          items: [
            "Segmentation: break metrics by user type, platform, geography, cohort to find the real story",
            "Cohort analysis: compare users who joined in the same period to understand retention over time",
            "Funnel analysis: map where users drop off in a multi-step process and prioritize fixes",
            "Root cause analysis: when a metric moves, ask WHY five times to get to the real cause",
            "Correlation vs causation: two things moving together doesn't mean one causes the other",
            "Simpson's paradox: a trend in segments can disappear or reverse when segments are combined"
          ]
        },
        {
          name: "A/B Testing Essentials",
          items: [
            "Always define hypothesis and success criteria BEFORE running the test",
            "Statistical significance: 95% confidence is standard. Don't peek at results early",
            "Sample size: calculate minimum sample before starting. Under-powered tests waste time",
            "Run tests for full business cycles (weekday + weekend minimum)",
            "Watch for novelty effects: initial lift that fades as users get used to the change",
            "Guardrail metrics: things that should NOT get worse even if the primary metric improves",
            "One change per test: if you test multiple changes, you can't attribute the result"
          ]
        }
      ]
    },
    {
      id: "technical-learnings",
      name: "Technical Knowledge",
      icon: "&#128187;",
      description: "Technical concepts every PM should understand",
      subcategories: [
        {
          name: "Architecture Basics",
          items: [
            "Frontend (what users see) vs Backend (servers, databases, logic) vs Infrastructure (hosting, networking)",
            "Client-server model: your app (client) talks to servers via APIs over the internet",
            "APIs (Application Programming Interfaces): how different software systems talk to each other",
            "REST APIs: the most common pattern — GET (read), POST (create), PUT (update), DELETE (remove)",
            "Databases: SQL (structured, relational — PostgreSQL, MySQL) vs NoSQL (flexible — MongoDB, DynamoDB)",
            "Caching: storing frequently accessed data in fast memory to reduce database load (Redis, Memcached)"
          ]
        },
        {
          name: "Key Technical Concepts",
          items: [
            "Latency: time to respond to a request. Users notice > 100ms. > 1 second feels slow",
            "Scalability: can the system handle 10x or 100x more users without breaking?",
            "Horizontal scaling (add more servers) vs vertical scaling (make server bigger)",
            "Load balancing: distributing traffic across multiple servers so none gets overwhelmed",
            "Microservices: breaking a big application into small, independent services that can be deployed separately",
            "Feature flags: deploy code but control who sees new features. Enable gradual rollouts and A/B tests",
            "CI/CD: Continuous Integration / Continuous Deployment — automated testing and releasing of code"
          ]
        },
        {
          name: "Data & ML Concepts",
          items: [
            "Data pipeline: raw data → cleaning → transformation → storage → analysis → dashboards",
            "ETL (Extract, Transform, Load): process of moving data from source systems to a data warehouse",
            "Machine Learning basics: training data → model → predictions. Models learn patterns, not rules",
            "Supervised learning (labeled data, predict outcomes) vs unsupervised (find patterns in unlabeled data)",
            "Recommendation systems: collaborative filtering (users like you liked X) vs content-based (similar to what you liked)",
            "LLMs and AI: large language models understand and generate text. API-based (GPT, Claude) vs self-hosted"
          ]
        },
        {
          name: "Working with Engineers",
          items: [
            "Learn to read code at a high level — you don't need to write it, but understanding helps",
            "Ask 'what are the trade-offs?' not 'can you do this?' — engineers can build anything given time",
            "Respect engineering estimates — if they say 4 weeks, don't ask for 2 without cutting scope",
            "Understand technical debt: shortcuts taken today that slow you down tomorrow. It's real and compounds",
            "Participate in code reviews and architecture discussions — you'll learn and earn respect",
            "Never say 'just' — as in 'can you just add this?' It trivializes complex work"
          ]
        }
      ]
    },
    {
      id: "execution-learnings",
      name: "Execution & Delivery",
      icon: "&#128640;",
      description: "How to ship products on time and manage the process",
      subcategories: [
        {
          name: "Agile & Scrum Essentials",
          items: [
            "Sprint: a fixed time period (usually 2 weeks) to complete a set of work",
            "Sprint Planning: team commits to what they'll deliver this sprint based on capacity",
            "Daily Standup: 15-min sync — what I did yesterday, what I'm doing today, any blockers",
            "Sprint Review/Demo: show what was built to stakeholders and get feedback",
            "Sprint Retrospective: what went well, what didn't, what to improve — the team's improvement engine",
            "Backlog grooming: regularly review and refine upcoming work so it's ready for sprint planning",
            "Velocity: how much work the team completes per sprint — use to forecast, not to pressure"
          ]
        },
        {
          name: "Writing PRDs & Specs",
          items: [
            "A PRD (Product Requirements Document) answers: what are we building, for whom, and why?",
            "Structure: Problem statement → Goals → User stories → Requirements → Success metrics → Out of scope",
            "User stories format: 'As a [user], I want to [action] so that [benefit]'",
            "Acceptance criteria: specific, testable conditions that must be true for the feature to be complete",
            "Include wireframes or mockups — a picture is worth 1000 words of requirements",
            "Define what is OUT of scope — this prevents scope creep and sets clear expectations",
            "Keep it concise — a 20-page PRD won't be read. 2-4 pages is ideal for most features"
          ]
        },
        {
          name: "Prioritization in Practice",
          items: [
            "RICE scoring: (Reach × Impact × Confidence) / Effort = priority score",
            "ICE scoring: Impact × Confidence × Ease = score (simpler than RICE)",
            "MoSCoW: Must-have, Should-have, Could-have, Won't-have — for release scoping",
            "2x2 matrix: plot ideas on Impact vs Effort. Do high-impact/low-effort first",
            "Opportunity scoring: rate importance vs satisfaction — biggest gaps = biggest opportunities",
            "Stack rank, don't tier: 'these 3 are all P1' is not prioritization. Force a 1-2-3 order",
            "Re-prioritize regularly — priorities change as you learn. Quarterly at minimum, monthly is better"
          ]
        },
        {
          name: "Launch & Operations",
          items: [
            "Launch checklist: QA complete, docs written, support briefed, rollback plan ready, metrics instrumented",
            "Feature flags: deploy code dark, then enable for a percentage of users. Decouple deploy from launch",
            "Phased rollouts: 1% → 5% → 25% → 50% → 100%. Monitor at each stage before expanding",
            "Rollback plan: know exactly how to undo the change if something goes wrong. Test the rollback",
            "Post-launch monitoring: watch error rates, support tickets, key metrics for 2 weeks after launch",
            "Launch retrospective: what went well, what didn't, what do we do differently next time?",
            "Post-mortem for incidents: blameless analysis of what went wrong and systemic fixes to prevent recurrence"
          ]
        }
      ]
    }
  ]
};
