const PM_FRAMEWORKS = {
  sections: [
    {
      id: "interview-frameworks",
      name: "Interview-Specific Frameworks",
      tagline: "Use these to structure your answers during PM interviews",
      frameworks: [
        {
          name: "CIRCLES Method",
          usage: "Product design questions",
          description: "The go-to framework for answering any product design question. Developed by Lewis Lin.",
          components: [
            { letter: "C", label: "Comprehend", detail: "Understand the situation. Ask clarifying questions about the product, users, and constraints." },
            { letter: "I", label: "Identify", detail: "Identify the customer segment. Who are you designing for? Create a quick persona." },
            { letter: "R", label: "Report", detail: "Report customer needs. List the user's pain points, desires, and jobs to be done." },
            { letter: "C", label: "Cut", detail: "Cut through prioritization. Rank the needs by impact and feasibility. Pick the top 1-2 to solve." },
            { letter: "L", label: "List", detail: "List solutions. Brainstorm 3-5 ideas for the top need. Be creative but practical." },
            { letter: "E", label: "Evaluate", detail: "Evaluate trade-offs. Compare solutions on user impact, effort, and risk." },
            { letter: "S", label: "Summarize", detail: "Summarize your recommendation. State what you'd build, for whom, and why." }
          ]
        },
        {
          name: "STAR Method",
          usage: "Behavioral and leadership questions",
          description: "Structure for telling compelling stories about past experiences.",
          components: [
            { letter: "S", label: "Situation", detail: "Set the context in 2-3 sentences. When, where, what team, what project." },
            { letter: "T", label: "Task", detail: "What was YOUR responsibility? What was at stake? Make it clear why this mattered." },
            { letter: "A", label: "Action", detail: "What did YOU do? Be specific about your actions. Use 'I' not 'we'." },
            { letter: "R", label: "Result", detail: "Quantifiable outcome. Revenue, metric improvement, timeline, team impact." }
          ]
        },
        {
          name: "Estimation Framework",
          usage: "Market sizing and Fermi estimation questions",
          description: "A structured approach to breaking down any estimation problem.",
          components: [
            { letter: "1", label: "Clarify", detail: "Define what exactly you're estimating. State scope and assumptions upfront." },
            { letter: "2", label: "Approach", detail: "State whether you'll go top-down (from population) or bottom-up (from unit economics)." },
            { letter: "3", label: "Segment", detail: "Break the problem into smaller, estimatable pieces. Each piece should be independently reasonable." },
            { letter: "4", label: "Calculate", detail: "Work through the math step by step. Use round numbers. Show your work." },
            { letter: "5", label: "Validate", detail: "Sanity-check against a known data point. Adjust if your answer is wildly off." }
          ]
        }
      ]
    },
    {
      id: "prioritization-frameworks",
      name: "Prioritization Frameworks",
      tagline: "Decide what to build and in what order",
      frameworks: [
        {
          name: "RICE Scoring",
          usage: "Quantitative feature prioritization",
          description: "Score = (Reach × Impact × Confidence) / Effort. Developed by Intercom. The most widely used quantitative prioritization framework.",
          components: [
            { letter: "R", label: "Reach", detail: "How many users will this affect in a given time period? Use actual numbers: '500 users/quarter'." },
            { letter: "I", label: "Impact", detail: "How much will this move the target metric per user? Scale: 3 = massive, 2 = high, 1 = medium, 0.5 = low, 0.25 = minimal." },
            { letter: "C", label: "Confidence", detail: "How sure are you about reach and impact estimates? 100% = high confidence with data, 80% = reasonable, 50% = speculative." },
            { letter: "E", label: "Effort", detail: "Person-months of work. Include all roles: engineering, design, QA. Higher effort = lower score." }
          ]
        },
        {
          name: "ICE Scoring",
          usage: "Quick prioritization when you don't have detailed data",
          description: "Score = Impact × Confidence × Ease. Simpler than RICE — good for early-stage or rapid prioritization.",
          components: [
            { letter: "I", label: "Impact", detail: "How much will this move the needle? Score 1-10." },
            { letter: "C", label: "Confidence", detail: "How sure are you? Score 1-10. Penalizes guesswork." },
            { letter: "E", label: "Ease", detail: "How easy is this to implement? Score 1-10. Inverse of effort." }
          ]
        },
        {
          name: "MoSCoW Method",
          usage: "Release scoping and stakeholder communication",
          description: "Categorize features by necessity for a given release. Great for getting alignment on what's in vs out.",
          components: [
            { letter: "M", label: "Must-have", detail: "Non-negotiable for launch. Without these, the product doesn't work or meet compliance." },
            { letter: "S", label: "Should-have", detail: "Important but not critical. The product works without them but is noticeably weaker." },
            { letter: "C", label: "Could-have", detail: "Nice to have. Include if there's time, cut first when scope pressure hits." },
            { letter: "W", label: "Won't-have", detail: "Explicitly out of scope for THIS release. May come later. Saying this prevents scope creep." }
          ]
        },
        {
          name: "Kano Model",
          usage: "Understanding feature categories for customer delight",
          description: "Not all features are equal. Some prevent dissatisfaction, some create delight. Categorize to prioritize wisely.",
          components: [
            { letter: "B", label: "Basic", detail: "Must-haves that users expect. Their absence causes dissatisfaction, but their presence doesn't excite. (e.g., app doesn't crash)" },
            { letter: "P", label: "Performance", detail: "More is better — linear relationship with satisfaction. Users actively compare these across products. (e.g., speed, storage)" },
            { letter: "E", label: "Excitement", detail: "Unexpected delights. Users don't ask for these but love them. These differentiate you. (e.g., Spotify Wrapped)" },
            { letter: "I", label: "Indifferent", detail: "Users don't care either way. Don't waste resources here." }
          ]
        },
        {
          name: "Value vs Complexity Matrix",
          usage: "Quick visual prioritization in workshops",
          description: "Plot ideas on a 2×2 grid. Simple and intuitive for group decision-making.",
          components: [
            { letter: "1", label: "Quick Wins", detail: "High value, low complexity. Do these first. They build momentum and credibility." },
            { letter: "2", label: "Big Bets", detail: "High value, high complexity. Strategic investments. Plan carefully, resource appropriately." },
            { letter: "3", label: "Fill-ins", detail: "Low value, low complexity. Do when you have spare capacity. Don't prioritize over quick wins." },
            { letter: "4", label: "Avoid", detail: "Low value, high complexity. Don't do these. They consume resources with little return." }
          ]
        }
      ]
    },
    {
      id: "metrics-frameworks",
      name: "Metrics & Measurement Frameworks",
      tagline: "Define and track the right metrics",
      frameworks: [
        {
          name: "AARRR (Pirate Metrics)",
          usage: "Startup growth metrics and funnel optimization",
          description: "Created by Dave McClure at 500 Startups. Maps the entire customer lifecycle. The standard growth metrics framework.",
          components: [
            { letter: "A", label: "Acquisition", detail: "How do users find you? Channels: SEO, ads, referrals, social. Metric: new visitors, signups." },
            { letter: "A", label: "Activation", detail: "Do users have a great first experience? Metric: completed onboarding, reached 'aha moment'." },
            { letter: "R", label: "Retention", detail: "Do users come back? Metric: D1/D7/D30 retention, monthly active rate." },
            { letter: "R", label: "Referral", detail: "Do users tell others? Metric: invites sent, viral coefficient (K-factor)." },
            { letter: "R", label: "Revenue", detail: "Do users pay? Metric: conversion to paid, ARPU, LTV." }
          ]
        },
        {
          name: "HEART Framework",
          usage: "UX quality measurement",
          description: "Developed by Google. Measures user experience quality across five dimensions. Pair each with Goals → Signals → Metrics.",
          components: [
            { letter: "H", label: "Happiness", detail: "User satisfaction. Measured via surveys (NPS, CSAT), app store ratings, sentiment analysis." },
            { letter: "E", label: "Engagement", detail: "Depth of usage. Measured by session length, frequency, features used, content created." },
            { letter: "A", label: "Adoption", detail: "New user uptake. Measured by new signups, new feature usage, first-time actions." },
            { letter: "R", label: "Retention", detail: "Do users stay? Measured by churn rate, renewal rate, cohort retention curves." },
            { letter: "T", label: "Task Success", detail: "Can users accomplish their goals? Measured by completion rate, time on task, error rate." }
          ]
        },
        {
          name: "North Star Framework",
          usage: "Company-wide alignment on one key metric",
          description: "One metric that captures the core value your product delivers. Everything else ladders up to this.",
          components: [
            { letter: "1", label: "Define Value", detail: "What moment represents value delivery? For Airbnb: nights booked. For Spotify: time spent listening." },
            { letter: "2", label: "Pick the Metric", detail: "Choose a metric that captures that value moment AND correlates with long-term revenue and retention." },
            { letter: "3", label: "Identify Inputs", detail: "What levers drive the North Star? These become team-level metrics. E.g., Airbnb: listings × search quality × booking conversion." },
            { letter: "4", label: "Align Teams", detail: "Each team owns one or more input metrics. Everyone understands how their work connects to the North Star." }
          ]
        },
        {
          name: "OKRs (Objectives and Key Results)",
          usage: "Goal-setting and alignment across teams",
          description: "Popularized by Google via John Doerr. Objectives are qualitative goals. Key Results are measurable outcomes.",
          components: [
            { letter: "O", label: "Objective", detail: "Qualitative, inspiring, time-bound. 'Become the #1 app for freelance invoicing.' Should be ambitious but achievable." },
            { letter: "KR1", label: "Key Result 1", detail: "Measurable outcome. 'Increase monthly active invoicers from 10K to 25K.' Not a task — a result." },
            { letter: "KR2", label: "Key Result 2", detail: "Another measurable outcome. 'Reduce invoice creation time from 5 min to 90 seconds.' Complements KR1." },
            { letter: "KR3", label: "Key Result 3", detail: "Third outcome. 'Achieve NPS of 60+ among invoicing users.' 3-5 KRs per objective is typical." }
          ]
        }
      ]
    },
    {
      id: "strategy-frameworks",
      name: "Strategy Frameworks",
      tagline: "Analyze markets, competition, and strategic direction",
      frameworks: [
        {
          name: "Porter's Five Forces",
          usage: "Industry and competitive analysis",
          description: "Analyze the competitive dynamics of any industry. Developed by Michael Porter at Harvard Business School.",
          components: [
            { letter: "1", label: "Competitive Rivalry", detail: "How intense is competition? Many equal competitors = high rivalry = lower margins. Look at market concentration." },
            { letter: "2", label: "Supplier Power", detail: "Can suppliers raise prices? Few suppliers or unique inputs = high supplier power. (e.g., TSMC for chip manufacturing)" },
            { letter: "3", label: "Buyer Power", detail: "Can buyers negotiate? Many alternatives or low switching costs = high buyer power. (e.g., commodity markets)" },
            { letter: "4", label: "Threat of Substitutes", detail: "Can customers solve the problem differently? Video calling substitutes business travel. High threat = price pressure." },
            { letter: "5", label: "Threat of New Entrants", detail: "How easy is it to enter this market? Low barriers = constant new competition. Patents, network effects, capital create barriers." }
          ]
        },
        {
          name: "SWOT Analysis",
          usage: "Strategic assessment of a product or company",
          description: "Simple but effective framework for strategic planning. Map internal strengths/weaknesses against external opportunities/threats.",
          components: [
            { letter: "S", label: "Strengths", detail: "Internal advantages. What do we do well? Brand, technology, team, data, market position." },
            { letter: "W", label: "Weaknesses", detail: "Internal disadvantages. Where do we fall short? Gaps in talent, technology, funding, or market coverage." },
            { letter: "O", label: "Opportunities", detail: "External factors we can exploit. Market trends, competitor missteps, regulatory changes, new technologies." },
            { letter: "T", label: "Threats", detail: "External factors that could hurt us. Competitors, regulation, market shifts, technology disruption." }
          ]
        },
        {
          name: "Jobs to Be Done (JTBD)",
          usage: "Customer-centric product definition",
          description: "People don't buy products — they hire them to do a job. Understand the job to build the right product. Pioneered by Clayton Christensen.",
          components: [
            { letter: "1", label: "Functional Job", detail: "The practical task the customer needs to accomplish. 'I need to get from A to B quickly.'" },
            { letter: "2", label: "Emotional Job", detail: "How the customer wants to feel. 'I want to feel safe and in control during my commute.'" },
            { letter: "3", label: "Social Job", detail: "How the customer wants to be perceived. 'I want to look environmentally conscious.'" },
            { letter: "4", label: "Context", detail: "When and where does the job arise? The same person hires different products in different contexts." }
          ]
        },
        {
          name: "Working Backwards (Amazon)",
          usage: "Validating product vision before building",
          description: "Start with the customer experience and work backwards to the technology. Write the press release before writing the code.",
          components: [
            { letter: "1", label: "Press Release", detail: "Write a fake press release announcing the finished product. Who is it for? What does it do? Why should anyone care?" },
            { letter: "2", label: "FAQ", detail: "Write the FAQ — customer questions AND internal questions. Forces you to address concerns upfront." },
            { letter: "3", label: "Visuals", detail: "Create mockups of the user experience. Make the abstract concrete." },
            { letter: "4", label: "Build", detail: "Only start building after the press release, FAQ, and visuals survive internal review." }
          ]
        }
      ]
    },
    {
      id: "decision-frameworks",
      name: "Decision-Making Frameworks",
      tagline: "Make better decisions faster with clear accountability",
      frameworks: [
        {
          name: "DACI",
          usage: "Assigning clear roles in group decisions",
          description: "Every decision needs clarity on who drives, who approves, who contributes, and who's informed.",
          components: [
            { letter: "D", label: "Driver", detail: "One person who owns the decision process. Gathers input, drives to conclusion, ensures it happens. Usually the PM." },
            { letter: "A", label: "Approver", detail: "The person with veto power. Usually one person (manager, VP, or executive). Must actively approve." },
            { letter: "C", label: "Contributors", detail: "People with relevant expertise who provide input. Engineers, designers, data analysts. They advise, not decide." },
            { letter: "I", label: "Informed", detail: "People who need to know the outcome but don't participate in making it. Kept in the loop after the decision." }
          ]
        },
        {
          name: "One-Way vs Two-Way Doors",
          usage: "Deciding how much deliberation a decision needs",
          description: "Amazon's framework for decision speed. Not all decisions need the same rigor.",
          components: [
            { letter: "1", label: "One-Way Door", detail: "Irreversible or very costly to reverse. Shutting down a product, major architecture change, pricing model shift. Deliberate carefully." },
            { letter: "2", label: "Two-Way Door", detail: "Easily reversible. UI changes, feature experiments, copy changes. Decide quickly, iterate based on data." },
            { letter: "!", label: "The Trap", detail: "Most decisions are two-way doors treated as one-way doors. This creates analysis paralysis and slows teams down." },
            { letter: "?", label: "Ask Yourself", detail: "If this doesn't work, can we undo it in a week? If yes → two-way door → decide fast." }
          ]
        },
        {
          name: "Eisenhower Matrix",
          usage: "Personal time management and task prioritization",
          description: "Categorize tasks by urgency and importance. Named after President Eisenhower.",
          components: [
            { letter: "1", label: "Urgent + Important", detail: "DO IT NOW. Production outages, critical bugs, deadline deliverables. Handle immediately." },
            { letter: "2", label: "Not Urgent + Important", detail: "SCHEDULE IT. Strategic planning, relationship building, learning. Most valuable but easiest to neglect." },
            { letter: "3", label: "Urgent + Not Important", detail: "DELEGATE IT. Most meetings, many emails, routine requests. Someone else can handle these." },
            { letter: "4", label: "Not Urgent + Not Important", detail: "ELIMINATE IT. Busywork, excessive reporting, unnecessary processes. Stop doing these entirely." }
          ]
        }
      ]
    },
    {
      id: "process-frameworks",
      name: "Product Development Frameworks",
      tagline: "Methodologies for building and shipping products",
      frameworks: [
        {
          name: "Design Thinking",
          usage: "Human-centered innovation process",
          description: "Developed by IDEO and Stanford d.school. A non-linear process for creative problem-solving centered on human needs.",
          components: [
            { letter: "1", label: "Empathize", detail: "Understand users through observation, interviews, and immersion. Set aside your assumptions." },
            { letter: "2", label: "Define", detail: "Synthesize research into a clear problem statement. 'How might we [solve X] for [user Y] so that [outcome Z]?'" },
            { letter: "3", label: "Ideate", detail: "Generate many possible solutions. Divergent thinking — quantity over quality. No idea is too wild." },
            { letter: "4", label: "Prototype", detail: "Build quick, low-fidelity representations of top ideas. Paper sketches, clickable mockups, wizard-of-oz tests." },
            { letter: "5", label: "Test", detail: "Put prototypes in front of real users. Observe, don't explain. Iterate based on what you learn." }
          ]
        },
        {
          name: "Lean Startup",
          usage: "Validating business ideas with minimal waste",
          description: "By Eric Ries. Build the minimum product needed to test your core assumption, then iterate based on evidence.",
          components: [
            { letter: "1", label: "Build", detail: "Create an MVP (Minimum Viable Product) — the smallest thing that tests your riskiest assumption." },
            { letter: "2", label: "Measure", detail: "Collect data on how users interact with the MVP. Focus on actionable metrics, not vanity metrics." },
            { letter: "3", label: "Learn", detail: "Analyze: did the data validate or invalidate your hypothesis? Pivot or persevere based on evidence." },
            { letter: "!", label: "Key Insight", detail: "Speed of iteration matters more than perfection. The faster you loop through Build→Measure→Learn, the faster you find product-market fit." }
          ]
        },
        {
          name: "Dual-Track Agile",
          usage: "Balancing discovery and delivery",
          description: "Run discovery (figuring out what to build) and delivery (building it) in parallel, not sequentially.",
          components: [
            { letter: "D", label: "Discovery Track", detail: "PM and designer explore problems, interview users, prototype solutions, run experiments. Output: validated ideas ready for engineering." },
            { letter: "B", label: "Delivery Track", detail: "Engineering builds validated solutions. Sprint-based, agile development. Output: shipped features." },
            { letter: "||", label: "Parallel", detail: "Both tracks run simultaneously. While engineering builds sprint N's work, PM/design discovers sprint N+2's work." },
            { letter: "!", label: "Key Rule", detail: "Never hand engineering unvalidated ideas. Discovery de-risks work before it hits the delivery track." }
          ]
        },
        {
          name: "Shape Up",
          usage: "Alternative to Scrum for product development",
          description: "Developed by Basecamp. 6-week build cycles with fixed time, variable scope. Bets replace backlogs.",
          components: [
            { letter: "1", label: "Shape", detail: "Senior team defines the problem and a rough solution at the right level of abstraction. Not too concrete, not too vague." },
            { letter: "2", label: "Bet", detail: "Leadership bets on shaped pitches for the next 6-week cycle. If it doesn't get bet on, it's gone — no infinite backlog." },
            { letter: "3", label: "Build", detail: "Small teams (2-3 people) get full autonomy for 6 weeks. They decide how to implement within the shaped boundaries." },
            { letter: "4", label: "Cooldown", detail: "2-week cooldown between cycles for bug fixes, exploration, and recovery. No scheduled work." }
          ]
        }
      ]
    }
  ]
};
