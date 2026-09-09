const PM_QUESTIONS = {
  categories: [
    {
      id: "product-design",
      name: "Product Design / Product Sense",
      subcategories: [
        {
          id: "design-new-product",
          name: "Design a New Product",
          questions: [
            {
              question: "Design a simple habit-tracking app for college students.",
              difficulty: 1,
              tags: ["mobile", "consumer", "students", "habits"],
              tips: [
                "Keep scope small — students want simple, not complex",
                "Consider what motivates students (social, grades, streaks)",
                "Think about when/where students would use this",
                "Mention integration with their existing routine"
              ],
              steps: [
                { title: "Clarify the User", detail: "College students aged 18-22. Busy schedules, phone-first, socially motivated, short attention spans." },
                { title: "Identify Key Habits", detail: "Study sessions, exercise, hydration, sleep, class attendance. Focus on 3-5 habits max to avoid overwhelm." },
                { title: "Core Features", detail: "Daily checklist, streak counter, simple reminders, weekly progress summary." },
                { title: "Differentiation", detail: "Social accountability — pair with a 'habit buddy' from your contacts who can see your streaks." },
                { title: "MVP Scope", detail: "3 default habits + 2 custom. Daily check-in notification. Streak counter. One buddy pairing." },
                { title: "Success Metrics", detail: "DAU, 7-day retention, average habits completed per day, buddy feature adoption rate." }
              ],
              framework: "CIRCLES (Comprehend → Identify customer → Report needs → Cut priorities → List solutions → Evaluate → Summarize)",
              resources: ["Hooked by Nir Eyal", "Atomic Habits by James Clear (for domain knowledge)", "Exponent Product Design videos"]
            },
            {
              question: "Design a product that helps remote teams build social connections outside of work meetings.",
              difficulty: 2,
              tags: ["B2B", "remote-work", "collaboration", "social"],
              tips: [
                "Acknowledge that forced fun backfires — organic connection is the goal",
                "Consider async vs sync interactions across time zones",
                "Think about integration with tools teams already use (Slack, Teams)",
                "Address the manager who buys vs the employee who uses"
              ],
              steps: [
                { title: "Clarify the Problem", detail: "Remote workers miss hallway conversations, lunch chats, and serendipitous bonding. Zoom happy hours feel forced." },
                { title: "User Segments", detail: "IC employees (want genuine connection), managers (want team cohesion), HR/People ops (buyer, wants engagement metrics)." },
                { title: "Brainstorm Solutions", detail: "Random coffee pairing bot, async 'question of the day', virtual coworking rooms, interest-based channels with prompts, shared playlists." },
                { title: "Prioritize for MVP", detail: "Weekly random 1:1 coffee pairing (high impact, low effort) + async daily conversation starter in Slack (builds habit)." },
                { title: "Design Details", detail: "Slack bot pairs 2 people weekly, suggests 3 conversation topics, sends gentle nudge if no chat by Thursday. Optional 15-min calendar hold." },
                { title: "Metrics", detail: "Pairing completion rate, employee engagement survey delta, voluntary participation rate, organic conversations spawned." }
              ],
              framework: "CIRCLES + Jobs to Be Done",
              resources: ["Inspired by Marty Cagan", "Remote by Basecamp", "Lenny's Newsletter on PLG"]
            },
            {
              question: "Design a product for elderly people to stay connected with their family.",
              difficulty: 3,
              tags: ["consumer", "accessibility", "hardware", "elderly", "family"],
              tips: [
                "Start by clarifying the target user — age range, tech literacy, living situation",
                "Show empathy by identifying real pain points (loneliness, complex UIs, physical limitations)",
                "Prioritize simplicity over feature richness",
                "Mention accessibility considerations unprompted"
              ],
              steps: [
                { title: "Clarify & Scope", detail: "Ask who the elderly users are, their tech comfort, and what 'connected' means (video, messages, photos?)." },
                { title: "Identify User Needs", detail: "Loneliness, difficulty with small text/buttons, desire to see grandchildren, fear of complex technology." },
                { title: "Brainstorm Solutions", detail: "Dedicated device with large display, one-tap video calls, automatic photo frame from family feeds, voice-first interface." },
                { title: "Prioritize", detail: "Use impact vs. effort — one-tap video calling is high impact and moderate effort. Start there." },
                { title: "Define MVP", detail: "A tablet-like device with 3 large buttons: Call, Photos, Messages. Family members manage setup via their phones." },
                { title: "Measure Success", detail: "Daily active usage, call frequency, user-reported loneliness scores, family engagement rate." }
              ],
              framework: "CIRCLES with accessibility lens",
              resources: ["Decode and Conquer by Lewis Lin", "Inspired by Marty Cagan", "Inclusive Design at Microsoft"]
            }
          ]
        },
        {
          id: "improve-existing-product",
          name: "Improve an Existing Product",
          questions: [
            {
              question: "How would you improve Google Maps for daily commuters?",
              difficulty: 1,
              tags: ["consumer", "mobile", "maps", "commute"],
              tips: [
                "Focus on one user segment — daily commuters — not all Maps users",
                "Think about the commute routine: same route, time-sensitive, predictable",
                "Consider what info commuters need before, during, and after commute",
                "Small improvements to a daily habit = massive cumulative impact"
              ],
              steps: [
                { title: "User Context", detail: "Daily commuters use Maps 5-10x/week for the same route. They care about ETAs, traffic, and disruptions." },
                { title: "Pain Points", detail: "Have to open app and search each time. No proactive alerts for unusual delays. No comparison of today vs normal commute." },
                { title: "Proposal", detail: "Smart commute dashboard: auto-shows commute ETA on lock screen at departure time, highlights only anomalies (accident, 10 min delay)." },
                { title: "Trade-offs", detail: "Privacy concern with always-on location. Battery drain. Could feel intrusive if not opt-in." },
                { title: "Metrics", detail: "Commute feature opt-in rate, daily engagement, time saved per commute, user satisfaction." }
              ],
              framework: "User Segment → Pain Points → Solution → Trade-offs → Metrics",
              resources: ["Product teardown practice on Exponent", "Jobs to Be Done framework"]
            },
            {
              question: "How would you improve Instagram?",
              difficulty: 2,
              tags: ["consumer", "social-media", "creators", "engagement"],
              tips: [
                "Don't jump to features — start with which user segment and what problem",
                "Show you understand the product's core value (visual storytelling, connection)",
                "Consider business impact alongside user value",
                "Mention trade-offs of your suggestion"
              ],
              steps: [
                { title: "Clarify Goals", detail: "Are we optimizing for engagement, revenue, creator retention, or new user growth?" },
                { title: "Pick a User Segment", detail: "Focus on one: casual viewers, content creators, small businesses, or teens." },
                { title: "Identify Pain Points", detail: "For creators: algorithm unpredictability, low reach, burnout from posting frequency pressure." },
                { title: "Propose Solutions", detail: "Creator dashboard showing best posting times, content performance predictions, and 'evergreen' content resurfacing." },
                { title: "Evaluate Trade-offs", detail: "Could increase creator satisfaction but may reduce urgency to post frequently, affecting content supply." },
                { title: "Define Metrics", detail: "Creator retention rate, average posts per creator, creator satisfaction NPS, follower growth rate." }
              ],
              framework: "CIRCLES Method",
              resources: ["Product teardown practice on Exponent", "Strategyzer Value Proposition Canvas"]
            },
            {
              question: "How would you improve Spotify for podcast listeners who are new to podcasts?",
              difficulty: 3,
              tags: ["consumer", "audio", "discovery", "onboarding", "podcasts"],
              tips: [
                "New-to-podcast users have different needs than power listeners",
                "Discovery is the key problem — they don't know what they like yet",
                "Consider how Spotify can leverage music listening data to suggest podcasts",
                "Think about the cold-start problem and how to solve it"
              ],
              steps: [
                { title: "Define the User", detail: "Music-primary Spotify users who have never or rarely listened to podcasts. They don't know where to start or what genres exist." },
                { title: "Why Spotify Cares", detail: "Podcasts have higher margins (no royalties like music). Converting music users to podcast listeners increases LTV and engagement." },
                { title: "Pain Points", detail: "Overwhelming catalog, no curation for beginners, commitment anxiety (episodes are 60+ min), no bridge from music taste to podcast taste." },
                { title: "Propose Solution", detail: "Podcast Starter Packs: based on music taste, serve 5-10 min podcast clips. 'You like indie rock → try this music history podcast.' Swipe UI to rate interest." },
                { title: "Detailed Design", detail: "Dedicated 'Discover Podcasts' card in Home. Short clips (not full episodes) reduce commitment. Save to playlist if interested. Progressive depth." },
                { title: "Metrics", detail: "Clip listen-through rate, first full episode completion, podcast DAU among previously music-only users, 30-day podcast retention." }
              ],
              framework: "CIRCLES + Cold-Start Problem Solving",
              resources: ["Inspired by Marty Cagan", "Hooked by Nir Eyal", "Spotify's Squad model case studies"]
            }
          ]
        },
        {
          id: "product-critique",
          name: "Product Critique / Tear-down",
          questions: [
            {
              question: "What is your favorite product and why? What would you change about it?",
              difficulty: 1,
              tags: ["personal", "critique", "open-ended"],
              tips: [
                "Pick a product you genuinely use — authenticity shows",
                "Structure: what it does well, who it serves, then what you'd improve",
                "Go beyond surface-level — show product thinking depth",
                "Tie your critique to user needs, not personal preferences"
              ],
              steps: [
                { title: "State Your Pick & Why", detail: "Name the product and explain what problem it solves brilliantly for its users." },
                { title: "Describe What It Does Well", detail: "Identify 2-3 specific design or strategy decisions that make it great." },
                { title: "Identify a Gap", detail: "Find a real user pain point or missed opportunity." },
                { title: "Propose an Improvement", detail: "Suggest a specific change and explain the expected impact." },
                { title: "Acknowledge Trade-offs", detail: "What might break or who might be negatively affected?" }
              ],
              framework: "Product Critique: Love → Gap → Proposal → Trade-off",
              resources: ["Product teardown videos on YouTube", "Lenny's Newsletter product deep-dives"]
            },
            {
              question: "Do a product tear-down of Notion. What are its strengths and weaknesses?",
              difficulty: 2,
              tags: ["B2B", "productivity", "critique", "SaaS"],
              tips: [
                "Consider different user segments — individual vs team vs enterprise",
                "Flexibility is both Notion's strength and weakness (blank canvas problem)",
                "Compare to competitors (Google Docs, Confluence, Coda) where relevant",
                "Think about the learning curve and its impact on adoption"
              ],
              steps: [
                { title: "Product Overview", detail: "Notion is an all-in-one workspace: docs, databases, wikis, project management. Targets individuals, startups, and increasingly enterprises." },
                { title: "Strengths", detail: "Extreme flexibility (blocks system), beautiful design, strong template ecosystem, databases-as-first-class, good API and integrations." },
                { title: "Weaknesses", detail: "Steep learning curve, performance issues with large workspaces, blank-page anxiety for new users, offline support is weak, search is slow." },
                { title: "Strategic Risks", detail: "AI features from competitors (Confluence AI, Google Duet), feature bloat as they add everything, enterprise sales motion vs PLG roots." },
                { title: "Improvement Suggestion", detail: "Guided onboarding by role: 'I'm an engineer' → pre-built workspace with sprint board, docs, meeting notes. Eliminates blank-canvas problem." }
              ],
              framework: "Overview → Strengths → Weaknesses → Risks → Recommendation",
              resources: ["Strategyzer Business Model Canvas", "Lenny's Newsletter", "Product Hunt launch analyses"]
            },
            {
              question: "Compare and critique two competing products: Figma vs Adobe XD. Which has the better product strategy and why?",
              difficulty: 3,
              tags: ["B2B", "design-tools", "competitive", "strategy"],
              tips: [
                "Don't just compare features — compare strategies, business models, and moats",
                "Consider network effects and switching costs",
                "Think about where the market is heading, not just where it is",
                "Show understanding of why one won (or is winning)"
              ],
              steps: [
                { title: "Frame the Comparison", detail: "Both are UI/UX design tools, but fundamentally different strategies. Figma: browser-native, collaborative. Adobe XD: desktop-native, Adobe ecosystem." },
                { title: "Figma's Strategy", detail: "Multiplayer-first, freemium PLG, browser = zero install friction, community-driven (plugins, templates). Network effect: share a link = new user." },
                { title: "Adobe XD's Strategy", detail: "Bundled with Creative Cloud, leverage existing Adobe users, desktop performance, tight Photoshop/Illustrator integration." },
                { title: "Why Figma Won", detail: "Collaboration was the wedge. Designers share work with PMs/engineers who don't have Adobe. Each share = viral loop. Adobe XD had no network effect." },
                { title: "Strategic Lesson", detail: "Distribution and collaboration beat features. Adobe had better tools but Figma had better go-to-market. Adobe's response: acquire Figma ($20B attempt)." },
                { title: "What Figma Should Watch", detail: "AI-native design tools (Galileo, Uizard) could disrupt from below. Must integrate AI before it becomes a new wedge." }
              ],
              framework: "Strategy Comparison: Frame → Strategy A → Strategy B → Analysis → Lessons → Forward Look",
              resources: ["7 Powers by Hamilton Helmer", "Blue Ocean Strategy", "Ben Thompson's Stratechery on Figma"]
            }
          ]
        },
        {
          id: "feature-design",
          name: "Feature Design",
          questions: [
            {
              question: "Design a 'do not disturb' feature for a messaging app like WhatsApp.",
              difficulty: 1,
              tags: ["consumer", "mobile", "messaging", "notifications"],
              tips: [
                "This seems simple but edge cases matter — that's what interviewers test",
                "Think about granularity: per-chat, per-group, global",
                "Consider what happens to messages during DND",
                "Balance user control with simplicity"
              ],
              steps: [
                { title: "User Need", detail: "Users want to silence notifications during sleep, meetings, or focus time without missing urgent messages." },
                { title: "Core Design", detail: "DND toggle with duration options: 1 hour, until morning, custom time, indefinite. Accessible from settings and swipe-down quick actions." },
                { title: "Granularity", detail: "Global DND, per-conversation mute, and 'allow exceptions' list (starred contacts can break through)." },
                { title: "Edge Cases", detail: "Repeated calls (3 calls in 5 min = urgent, break through). Scheduled DND (auto-enable at bedtime). Status shown to senders?" },
                { title: "Metrics", detail: "DND adoption rate, notification opt-out rate (if DND reduces it, good), user satisfaction with notification control." }
              ],
              framework: "User Need → Core Design → Granularity → Edge Cases → Metrics",
              resources: ["Don't Make Me Think by Steve Krug", "Apple HIG notification guidelines"]
            },
            {
              question: "Design a feature for LinkedIn that helps job seekers practice for interviews.",
              difficulty: 2,
              tags: ["B2B", "career", "AI", "education"],
              tips: [
                "LinkedIn has unique data assets (job descriptions, company info, skills) — leverage them",
                "Consider the competitive landscape (Exponent, Pramp, ChatGPT)",
                "Think about monetization — is this Premium-only?",
                "AI makes this feasible now in ways it wasn't before"
              ],
              steps: [
                { title: "User Need", detail: "Job seekers want to practice interviews but lack access to coaches. They want role-specific, company-specific practice." },
                { title: "LinkedIn's Advantage", detail: "Knows the job you applied for, the company, required skills, and your profile. Can generate hyper-relevant questions." },
                { title: "Feature Design", detail: "Interview Prep Hub: select a job posting you applied to → AI generates 10 tailored questions → record video answers → get AI feedback on content and delivery." },
                { title: "Feedback System", detail: "AI evaluates: answer relevance, STAR structure usage, filler words, speaking pace, confidence signals. Comparison to 'strong answer' examples." },
                { title: "Monetization", detail: "Basic (3 questions, text feedback): free. Full (unlimited questions, video analysis, company-specific): LinkedIn Premium." },
                { title: "Metrics", detail: "Feature adoption among job seekers, Premium conversion from feature, interview success rate correlation, practice sessions per user." }
              ],
              framework: "CIRCLES + Platform Advantage Analysis",
              resources: ["Decode and Conquer", "LinkedIn's Premium strategy analysis", "AI product design patterns"]
            },
            {
              question: "Design a new feature for YouTube to help creators monetize short-form content.",
              difficulty: 3,
              tags: ["consumer", "creator-economy", "monetization", "video"],
              tips: [
                "Understand the competitive landscape (TikTok Creator Fund, Instagram Bonuses)",
                "Balance creator needs with platform business model",
                "Think about what makes YouTube unique vs competitors",
                "Consider both supply side (creators) and demand side (advertisers/viewers)"
              ],
              steps: [
                { title: "Understand Context", detail: "YouTube Shorts competes with TikTok/Reels. Creators need revenue incentive to post Shorts vs long-form." },
                { title: "Define User Needs", detail: "Creators want predictable income from short content. Viewers want quality short content. YouTube wants creator retention." },
                { title: "Propose Feature", detail: "Shorts Subscription Tiers — viewers subscribe to creator Shorts feeds, creators get direct recurring revenue." },
                { title: "Detail the Design", detail: "Free tier (ads), $1.99/mo tier (ad-free, early access, exclusive Shorts). Revenue split: 70% creator, 30% YouTube." },
                { title: "Success Metrics", detail: "Subscriber conversion rate, creator revenue per 1K views, Shorts upload volume, creator churn." }
              ],
              framework: "CIRCLES + Jobs to Be Done",
              resources: ["YouTube Creator Academy", "Decode and Conquer", "Creator economy analysis on a16z"]
            }
          ]
        },
        {
          id: "ux-evaluation",
          name: "User Experience Evaluation",
          questions: [
            {
              question: "Evaluate the sign-up flow of any app you recently downloaded. What would you change?",
              difficulty: 1,
              tags: ["UX", "onboarding", "mobile", "conversion"],
              tips: [
                "Pick a real app and walk through it step by step",
                "Count the number of steps and screens — fewer is usually better",
                "Note where you felt friction, confusion, or hesitation",
                "Suggest changes with reasoning, not just preferences"
              ],
              steps: [
                { title: "Choose & Map", detail: "Pick the app and list every screen from download to first value moment. Count taps, fields, and decisions required." },
                { title: "Identify Friction", detail: "Where did you pause? Mandatory fields you didn't want to fill? Confusing copy? Unnecessary permissions requests?" },
                { title: "Apply UX Principles", detail: "Progressive disclosure (ask less upfront), social login (reduce friction), delayed registration (show value first)." },
                { title: "Propose Changes", detail: "Specific, actionable changes: 'Move email verification to after first session' or 'Replace 5-field form with Google SSO + 1 field.'" },
                { title: "Expected Impact", detail: "Estimate: reducing sign-up from 6 steps to 3 could improve completion by 20-30% based on industry benchmarks." }
              ],
              framework: "Map Flow → Find Friction → Apply Principles → Propose → Estimate Impact",
              resources: ["Don't Make Me Think by Steve Krug", "Growth.Design case studies", "UX benchmarks from Baymard Institute"]
            },
            {
              question: "Walk me through the onboarding experience of Duolingo. What works and what doesn't?",
              difficulty: 2,
              tags: ["UX", "onboarding", "gamification", "education"],
              tips: [
                "Actually walk through the experience step by step",
                "Use UX principles to explain why things work (progressive disclosure, gamification)",
                "Identify friction points with specific evidence",
                "Suggest improvements grounded in user psychology"
              ],
              steps: [
                { title: "Map the Flow", detail: "Open app → choose language → set goal → placement test or start from scratch → first lesson → account creation (delayed)." },
                { title: "What Works", detail: "Delayed sign-up (value first), gamification (streaks, XP), low initial commitment, immediate dopamine hits." },
                { title: "UX Principles at Play", detail: "Progressive disclosure, variable rewards, loss aversion (streaks), social proof (leaderboards)." },
                { title: "Friction Points", detail: "Goal-setting screen has too many options; the upsell to Premium interrupts flow early; placement test can feel intimidating." },
                { title: "Improvement Ideas", detail: "Simplify goal options to 2 choices, delay Premium upsell until after day 3, add 'try a sample' before placement test." }
              ],
              framework: "UX Evaluation: Flow → Strengths → Principles → Friction → Recommendations",
              resources: ["Don't Make Me Think by Steve Krug", "Hooked by Nir Eyal", "Laws of UX (lawsofux.com)"]
            },
            {
              question: "Critique the end-to-end experience of booking a ride on Uber, from opening the app to completing the trip. Identify 3 UX improvements.",
              difficulty: 3,
              tags: ["UX", "mobile", "marketplace", "transportation", "end-to-end"],
              tips: [
                "Cover the ENTIRE journey, not just the booking step",
                "Consider different contexts: rushed, late night, unfamiliar city, accessibility needs",
                "Think about emotional states at each stage (anxiety, impatience, trust)",
                "Prioritize your 3 improvements by impact"
              ],
              steps: [
                { title: "Map Full Journey", detail: "Open app → set destination → choose ride type → confirm → wait for driver → ride → arrive → rate → pay. Also: pre-ride (price check) and post-ride (receipt, lost item)." },
                { title: "Stage-by-Stage Analysis", detail: "Pre-booking: price surge anxiety, destination input errors. Waiting: ETA uncertainty, driver cancellation frustration. In-ride: route trust, safety. Post: rating fatigue." },
                { title: "Improvement 1 (High Impact)", detail: "Price commitment: lock in fare estimate for 5 min so users aren't punished for surge timing. Reduces booking anxiety and abandonment." },
                { title: "Improvement 2 (Medium Impact)", detail: "Smart destination: learn 'home' and 'work' from patterns, pre-fill the most likely destination based on time of day. Saves 10 seconds per ride." },
                { title: "Improvement 3 (Trust)", detail: "Live trip sharing with arrival ETA push notification to saved contacts. Currently buried 3 taps deep — make it a one-tap during ride." },
                { title: "Prioritization Rationale", detail: "Price commitment reduces abandonment (revenue impact). Smart destination improves daily UX (retention). Trip sharing builds trust (brand/safety)." }
              ],
              framework: "End-to-End Journey Map → Stage Analysis → Prioritized Improvements → Rationale",
              resources: ["Sprint by Jake Knapp", "The Design of Everyday Things by Don Norman", "Uber's engineering blog"]
            }
          ]
        }
      ]
    },
    {
      id: "estimation",
      name: "Estimation / Market Sizing",
      subcategories: [
        {
          id: "market-sizing",
          name: "Market Sizing",
          questions: [
            {
              question: "How big is the market for dog-walking services in your city?",
              difficulty: 1,
              tags: ["local", "services", "consumer", "pets"],
              tips: [
                "Start with a city you know and state your assumptions clearly",
                "Use a top-down approach from population to dog owners to service users",
                "Round numbers are fine — structure matters more than precision",
                "Sanity check against something you can observe"
              ],
              steps: [
                { title: "Choose Approach", detail: "Top-down: city population → households → dog-owning households → those who'd pay for walking." },
                { title: "Assumptions", detail: "City: 1M people, ~400K households. ~30% own dogs = 120K dog households. Average 1.2 dogs = 144K dogs." },
                { title: "Serviceable Market", detail: "Working professionals who need help: ~25% of dog owners = 30K households. Willing to pay for regular service: ~40% = 12K." },
                { title: "Revenue Calculation", detail: "Average 3 walks/week × $20/walk × 50 weeks = $3,000/yr per customer. 12K × $3,000 = $36M annual market." },
                { title: "Sanity Check", detail: "Rover/Wag report ~$1B US market. US has ~330 cities of ~1M. $1B / 330 ≈ $3M per city. My estimate is higher — adjust willingness to pay down or frequency down." }
              ],
              framework: "Top-down estimation with assumption laddering",
              resources: ["Cracking the PM Interview (estimation chapter)", "Fermi Estimation practice sets"]
            },
            {
              question: "How large is the market for electric scooters in the United States?",
              difficulty: 2,
              tags: ["national", "transportation", "hardware", "micromobility"],
              tips: [
                "State your approach upfront (top-down or bottom-up)",
                "Make assumptions explicit and justify each one",
                "Sanity-check your final number against something known",
                "Show comfort with ranges rather than false precision"
              ],
              steps: [
                { title: "Choose Approach", detail: "Top-down: start from US population, narrow to addressable market." },
                { title: "Define Assumptions", detail: "US pop ~330M. Urban population ~83% = 274M. Adults 18-55 who commute short distances = ~30% = 82M." },
                { title: "Narrow Further", detail: "Those open to micromobility: ~15% = 12.3M. Willing to buy (vs rent): ~20% = 2.5M potential buyers." },
                { title: "Calculate Market Value", detail: "Average scooter price ~$500. TAM = 2.5M × $500 = $1.25B. Annual (replacement cycle 3 yrs) = ~$400M/yr." },
                { title: "Sanity Check", detail: "Bird/Lime revenue was ~$400M combined at peak. Consumer purchase market being similar scale makes sense." }
              ],
              framework: "Top-down estimation with assumption laddering",
              resources: ["Cracking the PM Interview (estimation chapter)", "Fermi Estimation practice sets"]
            },
            {
              question: "Estimate the total addressable market for a B2B SaaS tool that automates employee onboarding for mid-market companies.",
              difficulty: 3,
              tags: ["B2B", "SaaS", "HR-tech", "enterprise"],
              tips: [
                "Define TAM, SAM, and SOM — show you know the difference",
                "Be specific about what 'mid-market' means (company size)",
                "Consider both the number of companies and per-company spend",
                "Think about willingness to pay based on value created, not just cost"
              ],
              steps: [
                { title: "Define Segments", detail: "Mid-market = 100-2,000 employees. US has ~200K companies in this range. Global ~600K." },
                { title: "TAM", detail: "All companies that could use onboarding automation: 600K globally. Average contract: $15K/yr (based on per-employee pricing ~$50/employee/yr × 300 avg employees). TAM = $9B." },
                { title: "SAM", detail: "English-speaking markets (US, UK, Canada, Australia), tech-forward industries: ~120K companies. SAM = 120K × $15K = $1.8B." },
                { title: "SOM", detail: "Realistic capture in 3 years with strong execution: 2-3% of SAM = $36-54M ARR." },
                { title: "Validation", detail: "Comparable companies: Rippling, BambooHR in this range. Check their reported ARR. Adjust assumptions if off by more than 2x." },
                { title: "Growth Factors", detail: "Remote work trend increases onboarding complexity. Regulatory compliance adds value. AI automation could expand the category." }
              ],
              framework: "TAM → SAM → SOM with validation against comparables",
              resources: ["Cracking the PM Interview", "SaaS benchmarks from OpenView Partners", "PitchBook for market sizing data"]
            }
          ]
        },
        {
          id: "quantity-estimation",
          name: "Quantity Estimation",
          questions: [
            {
              question: "How many traffic lights are there in Manhattan?",
              difficulty: 1,
              tags: ["urban", "infrastructure", "local", "counting"],
              tips: [
                "Use a grid-based approach — Manhattan has a predictable street grid",
                "Start from what you can observe or know (blocks, intersections)",
                "State each assumption before calculating",
                "Don't overthink — a reasonable range is the goal"
              ],
              steps: [
                { title: "Manhattan Grid", detail: "Manhattan is roughly 13 miles long and 2 miles wide. Streets run east-west, avenues run north-south." },
                { title: "Count Intersections", detail: "~200 east-west streets × ~12 avenues = ~2,400 major intersections. Plus additional cross streets and irregular intersections below 14th St: add ~400." },
                { title: "Lights per Intersection", detail: "Most intersections have 1 traffic light (with multiple signal heads). Some have none (stop signs), some complex ones have 2-3." },
                { title: "Calculate", detail: "~2,800 intersections × ~85% have lights × 1.2 lights average = ~2,850 traffic lights." },
                { title: "Sanity Check", detail: "NYC DOT manages ~13,000 traffic signals citywide. Manhattan is ~1/5 of NYC by area but denser. ~2,500-3,000 seems reasonable." }
              ],
              framework: "Geometric decomposition + per-unit estimation",
              resources: ["Back of the Envelope calculations", "Consulting math drills"]
            },
            {
              question: "How many coffee cups are sold in the US per day?",
              difficulty: 2,
              tags: ["national", "consumer", "food-beverage", "daily"],
              tips: [
                "Break the problem into smaller, estimatable pieces",
                "Consider multiple channels (cafes, offices, home-brewed takeaway)",
                "Round numbers are fine — precision isn't the goal, structure is",
                "Narrate your thinking out loud"
              ],
              steps: [
                { title: "Define Scope", detail: "Cups sold = disposable cups at cafes/restaurants + office single-serve. Not reusable mugs at home." },
                { title: "Segment the Sources", detail: "Coffee shops, fast food, offices, convenience stores, other (hospitals, airports)." },
                { title: "Estimate Each", detail: "Coffee shops: ~40K shops × 300 cups/day = 12M. Fast food: ~50K locations × 100 cups = 5M. Offices/convenience/other: ~8M." },
                { title: "Sum Up", detail: "Total ~25M disposable coffee cups sold per day in the US." },
                { title: "Sanity Check", detail: "~65% of US adults drink coffee daily. 330M × 65% = 215M drinkers. ~12% buy out = 25M. Checks out." }
              ],
              framework: "Bottom-up segmented estimation",
              resources: ["Back of the Envelope calculations blog", "Consulting math drills"]
            },
            {
              question: "How many hours of video are uploaded to YouTube every minute, and how much storage does YouTube need per year?",
              difficulty: 3,
              tags: ["tech", "infrastructure", "global", "video", "storage"],
              tips: [
                "YouTube has published some of these numbers — use known anchors if you have them",
                "Think about video file sizes at different quality levels",
                "Consider compression and multiple resolution copies",
                "Show you can reason about infrastructure-scale numbers"
              ],
              steps: [
                { title: "Uploads per Minute", detail: "Known anchor: YouTube reported ~500 hours of video uploaded per minute in 2022. Estimate from scratch: ~50M creators, ~10% upload weekly, avg 10 min video." },
                { title: "Bottom-Up Check", detail: "50M creators × 10% active/week × 10 min = 50M min/week = ~50K hours/week = ~5 hours/min. But including all users uploading: 500 hrs/min is plausible with billions of users." },
                { title: "Storage per Video", detail: "10 min video: ~1.5 GB raw, compressed to ~500MB. YouTube stores 5-7 resolution copies = ~2GB per 10 min video." },
                { title: "Annual Storage", detail: "500 hrs/min × 60 × 24 × 365 = 263M hours/year. × 6 (10-min segments per hour) × 2GB = ~3.15 exabytes/year of new storage." },
                { title: "Sanity Check", detail: "Google's total storage is estimated at 15+ exabytes. YouTube being a significant fraction (~20-30%) of annual growth makes sense." }
              ],
              framework: "Known anchor → bottom-up validation → unit calculation → scale-up → sanity check",
              resources: ["System Design Interview by Alex Xu", "Google infrastructure papers", "YouTube official statistics page"]
            }
          ]
        },
        {
          id: "revenue-estimation",
          name: "Revenue Estimation",
          questions: [
            {
              question: "How much revenue does a single Starbucks store make per year?",
              difficulty: 1,
              tags: ["retail", "food-beverage", "local", "unit-economics"],
              tips: [
                "Think about a store you've been to — how busy was it?",
                "Break down by time of day (morning rush vs afternoon lull)",
                "Average ticket size is key — estimate from what you'd pay",
                "This is unit economics thinking — valuable PM skill"
              ],
              steps: [
                { title: "Operating Hours", detail: "Open ~14 hours/day (5am-7pm typical). Peak hours: 7-9am. Moderate: 11am-2pm. Slow: rest." },
                { title: "Transactions per Day", detail: "Peak: 2 hrs × 80 orders/hr = 160. Moderate: 3 hrs × 40 = 120. Slow: 9 hrs × 15 = 135. Total: ~415 transactions/day." },
                { title: "Average Ticket", detail: "Average drink: $5.50. ~30% add food item ($3.50 avg). Average ticket: $5.50 + (0.3 × $3.50) = ~$6.55." },
                { title: "Daily Revenue", detail: "415 × $6.55 = ~$2,720/day." },
                { title: "Annual Revenue", detail: "$2,720 × 365 = ~$993K/year ≈ $1M. Starbucks reports average US store revenue of ~$1.5-2M, so we're in the right range (our store might be less urban)." }
              ],
              framework: "Unit economics: time segmentation × volume × ticket size",
              resources: ["Company 10-K filings for practice", "Unit economics frameworks"]
            },
            {
              question: "How much revenue does Spotify make per year?",
              difficulty: 2,
              tags: ["tech", "subscription", "global", "music", "advertising"],
              tips: [
                "Separate revenue streams (subscriptions vs ads)",
                "Use known anchor points if you have them",
                "Show understanding of the business model",
                "Walk through unit economics"
              ],
              steps: [
                { title: "Identify Revenue Streams", detail: "Premium subscriptions and ad-supported free tier." },
                { title: "Estimate Premium", detail: "~220M paid subscribers × ~$10/mo average (accounting for family/student discounts ~$7 effective) × 12 = ~$18.5B." },
                { title: "Estimate Ad Revenue", detail: "~350M free users. CPM ~$5-10. ~2 ads per hour, ~1 hr/day. 350M × 365 × 2 × $7.5/1000 = ~$1.9B." },
                { title: "Total", detail: "~$20B total annual revenue." },
                { title: "Sanity Check", detail: "Spotify reported ~€13.2B in 2023 revenue (~$14B). My estimate is high — adjust subscriber count or effective rate down." }
              ],
              framework: "Revenue decomposition by stream",
              resources: ["Company 10-K filings for practice", "Exponent estimation drills"]
            },
            {
              question: "Estimate the total annual revenue of the global cloud computing market, and break it down by the top 3 providers.",
              difficulty: 3,
              tags: ["tech", "B2B", "global", "cloud", "infrastructure"],
              tips: [
                "Think about who pays for cloud: enterprises, startups, government, consumers (indirectly)",
                "Consider multiple revenue types: IaaS, PaaS, SaaS",
                "Use known data points (AWS revenue is public) as anchors",
                "Show understanding of competitive dynamics"
              ],
              steps: [
                { title: "Define Scope", detail: "Cloud computing = IaaS + PaaS + SaaS. Include AWS, Azure, GCP, plus others (Alibaba, Oracle, IBM)." },
                { title: "Bottom-Up by Provider", detail: "AWS: ~$90B (known from Amazon 10-K). Azure: ~$60B (estimated ~35% market share of IaaS). GCP: ~$35B." },
                { title: "Rest of Market", detail: "Alibaba Cloud: ~$15B. Oracle Cloud: ~$10B. IBM, Salesforce (SaaS), others: ~$80B combined." },
                { title: "Total", detail: "~$290B global cloud market. If including all SaaS: ~$550B." },
                { title: "Growth Check", detail: "Cloud grows ~20-25% annually. 5 years ago was ~$150B for IaaS/PaaS. Doubling in 5 years at ~20% CAGR → $150B × 2 = $300B. Consistent." },
                { title: "Share Breakdown", detail: "AWS: ~31%. Azure: ~21%. GCP: ~12%. Others: ~36%. Trend: Azure gaining share, AWS stable, GCP growing but smaller." }
              ],
              framework: "Provider-level bottom-up → total → growth validation → share analysis",
              resources: ["Gartner Magic Quadrant for Cloud", "Company earnings calls", "Synergy Research Group reports"]
            }
          ]
        }
      ]
    },
    {
      id: "strategy",
      name: "Strategy / Business",
      subcategories: [
        {
          id: "go-to-market",
          name: "Go-to-Market Strategy",
          questions: [
            {
              question: "How would you launch a new productivity app for freelancers?",
              difficulty: 1,
              tags: ["consumer", "SaaS", "freelancers", "launch"],
              tips: [
                "Freelancers are cost-sensitive — free tier matters",
                "Think about where freelancers already hang out (communities, platforms)",
                "Word-of-mouth is huge in freelance communities",
                "Consider what existing tools they use and how you integrate or replace"
              ],
              steps: [
                { title: "Target User", detail: "Solo freelancers (designers, writers, developers) making $50-150K, juggling 3-5 clients, using 5+ tools today." },
                { title: "Positioning", detail: "'One app for your freelance business' — invoicing, time tracking, contracts, and client communication in one place." },
                { title: "GTM Channel Strategy", detail: "Launch on Product Hunt (freelancer audience). Partner with Fiverr/Upwork for co-marketing. Content marketing on freelancer pain points." },
                { title: "Pricing", detail: "Freemium: free for 2 clients, $12/mo for unlimited. Annual discount to $99/yr. No per-feature gating — all features available." },
                { title: "Launch Sequence", detail: "Week 1-4: beta with 100 freelancers from communities. Week 5: Product Hunt launch. Week 6-8: paid ads on freelancer subreddits and newsletters." },
                { title: "Metrics", detail: "Signups, activation (first invoice sent), 7-day retention, free-to-paid conversion, CAC vs LTV." }
              ],
              framework: "GTM: Target → Position → Channels → Pricing → Sequence → Metrics",
              resources: ["Obviously Awesome by April Dunford", "Crossing the Chasm by Geoffrey Moore"]
            },
            {
              question: "How would you launch a meal-kit delivery service in India?",
              difficulty: 2,
              tags: ["consumer", "international", "food", "marketplace", "emerging-market"],
              tips: [
                "Show cultural awareness — don't assume Western patterns apply",
                "Consider local infrastructure, economics, and existing alternatives",
                "Identify unique wedge/positioning vs incumbents (Swiggy, Zomato)",
                "Think about phased rollout, not full-country launch"
              ],
              steps: [
                { title: "Market Context", detail: "India: large middle class, growing dual-income households, strong food culture, price-sensitive, existing delivery infra." },
                { title: "Target Segment", detail: "Urban dual-income families in Tier 1 cities (Bangalore, Mumbai, Delhi) who value home-cooked food but lack time." },
                { title: "Positioning", detail: "Not restaurant food delivery — 'your kitchen, our prep.' Pre-portioned spice mixes + fresh-cut ingredients for Indian recipes." },
                { title: "GTM Strategy", detail: "Phase 1: Bangalore only, Instagram/YouTube cooking influencer partnerships, introductory pricing at ₹99/meal." },
                { title: "Distribution", detail: "Partner with existing delivery networks (Dunzo, Swiggy Instamart) rather than building own fleet." },
                { title: "Success Metrics", detail: "Week 1 retention, cost per acquisition, orders per customer per week, NPS." }
              ],
              framework: "GTM: Market → Segment → Position → Channel → Metrics",
              resources: ["Crossing the Chasm by Geoffrey Moore", "Obviously Awesome by April Dunford"]
            },
            {
              question: "You're the PM at a health-tech startup. Design the go-to-market strategy for an AI-powered diagnostic tool selling to hospitals.",
              difficulty: 3,
              tags: ["B2B", "health-tech", "enterprise-sales", "AI", "regulated"],
              tips: [
                "Healthcare sales cycles are 12-18 months — plan for that",
                "Regulatory approval (FDA) is a prerequisite, not an afterthought",
                "Hospitals buy through committees — identify all decision-makers",
                "Clinical validation and evidence are your marketing, not features"
              ],
              steps: [
                { title: "Regulatory Foundation", detail: "FDA 510(k) clearance is table stakes. Budget 12-18 months and $500K+ for this. Cannot sell without it." },
                { title: "Clinical Validation", detail: "Partner with 2-3 academic medical centers for clinical studies. Published results = credibility. Target top journals." },
                { title: "Buying Committee", detail: "Map stakeholders: Chief Medical Officer (clinical value), CIO (integration), CFO (ROI), department heads (workflow), procurement (compliance)." },
                { title: "Sales Motion", detail: "Enterprise sales team with clinical backgrounds. Free pilot with 2 flagship hospitals. Case studies from pilots → outbound to similar hospitals." },
                { title: "Pricing Model", detail: "Per-scan licensing ($X per diagnosis) or annual site license. Start per-scan to lower adoption barrier. Transition to site license as volume grows." },
                { title: "Metrics", detail: "Pilot-to-contract conversion, time-to-close, clinical accuracy vs baseline, hospital NPS, expansion revenue from existing accounts." }
              ],
              framework: "Regulated GTM: Regulatory → Validation → Stakeholder Map → Sales Motion → Pricing → Metrics",
              resources: ["Crossing the Chasm", "The Challenger Sale by Dixon", "Healthcare product management case studies"]
            }
          ]
        },
        {
          id: "competitive-analysis",
          name: "Competitive Analysis",
          questions: [
            {
              question: "Who are Zoom's main competitors and what should Zoom do to stay ahead?",
              difficulty: 1,
              tags: ["SaaS", "video", "competition", "collaboration"],
              tips: [
                "List direct and indirect competitors separately",
                "Consider where the market is going, not just where it is",
                "Think about Zoom's moat — is it durable?",
                "Don't just say 'add more features' — think strategically"
              ],
              steps: [
                { title: "Direct Competitors", detail: "Microsoft Teams (bundled with Office 365), Google Meet (bundled with Workspace), Cisco Webex (enterprise). All are free/bundled." },
                { title: "Indirect Competitors", detail: "Slack Huddles (async-first teams), Loom (async video), FaceTime/WhatsApp (casual calls). The real competitor is 'no meeting' culture." },
                { title: "Zoom's Moat", detail: "Brand recognition ('Let's Zoom'), reliability, ease of use, broad integrations. Weakness: no ecosystem bundle like Microsoft/Google." },
                { title: "Strategic Risks", detail: "Teams is free with Office 365 — enterprises consolidate. Zoom is standalone, making it cuttable in budget reviews." },
                { title: "Recommendations", detail: "Expand beyond meetings: Zoom Phone, Zoom Docs, Zoom AI Companion. Become a platform, not a feature. Target segments Microsoft ignores (SMBs, education)." }
              ],
              framework: "Direct/Indirect Competitors → Moat → Risks → Strategic Response",
              resources: ["Porter's Five Forces", "7 Powers by Hamilton Helmer"]
            },
            {
              question: "Notion just launched an AI feature. How should Confluence respond?",
              difficulty: 2,
              tags: ["B2B", "SaaS", "AI", "competitive-response", "enterprise"],
              tips: [
                "Don't default to 'copy the feature' — show strategic thinking",
                "Consider Confluence's unique strengths and customer base",
                "Think about enterprise vs. SMB dynamics",
                "Evaluate build vs. buy vs. partner"
              ],
              steps: [
                { title: "Assess the Threat", detail: "Who does this affect? Notion AI targets individual users and small teams — Confluence's enterprise base is partially insulated." },
                { title: "Understand Confluence's Moat", detail: "Deep Jira integration, enterprise compliance, existing content corpus, IT admin controls." },
                { title: "Strategic Options", detail: "1) Build own AI leveraging enterprise data. 2) Partner with an LLM provider. 3) Double down on enterprise differentiation. 4) Acquire an AI startup." },
                { title: "Recommend", detail: "Partner with AI provider for quick launch, build proprietary features around enterprise knowledge graph (cross-Jira-Confluence intelligence)." },
                { title: "Why This Wins", detail: "Notion can't replicate the Atlassian ecosystem advantage. AI that works across your tickets + docs + repos is a unique wedge." }
              ],
              framework: "Competitive Response: Threat Assessment → Moat → Options → Recommendation → Rationale",
              resources: ["Porter's Five Forces", "7 Powers by Hamilton Helmer", "Blue Ocean Strategy"]
            },
            {
              question: "You're the PM for Google Maps. Apple just launched a major Maps update with offline 3D navigation. What is your strategic response?",
              difficulty: 3,
              tags: ["big-tech", "maps", "competitive-response", "platform", "strategy"],
              tips: [
                "Consider the platform dynamics — Apple controls iOS, Google is cross-platform",
                "Think about why users choose Google Maps over Apple Maps (data quality, reviews, transit)",
                "Don't panic-react — evaluate if this changes competitive dynamics meaningfully",
                "Think about Google's data advantages and ecosystem plays"
              ],
              steps: [
                { title: "Assess the Threat Level", detail: "Offline 3D is impressive but niche — most navigation happens online. Bigger risk: Apple making Maps 'good enough' so iOS users stop downloading Google Maps." },
                { title: "Google Maps' Durable Advantages", detail: "15+ years of Street View data, 200M+ business listings with reviews, real-time traffic from Android fleet, transit data, indoor maps. Apple can't replicate this quickly." },
                { title: "Vulnerability Analysis", detail: "Default app advantage: Apple Maps is pre-installed. Each iOS version that improves Apple Maps reduces Google Maps downloads. Long-term threat to ad revenue." },
                { title: "Strategic Response", detail: "Don't compete on 3D — compete on intelligence. Launch: predictive navigation (AI suggests routes before you search), integrated reservations, AR walking directions." },
                { title: "Platform Hedge", detail: "Deepen Android integration to protect core user base. Build Google Maps as a platform for third-party services (food delivery, EV charging, parking)." },
                { title: "Metrics to Watch", detail: "iOS Google Maps download rate, daily active navigation sessions on iOS vs Android, queries where Apple Maps is 'good enough' (simple driving directions)." }
              ],
              framework: "Threat Level → Durable Advantages → Vulnerability → Response → Platform Strategy → Metrics",
              resources: ["7 Powers by Hamilton Helmer", "Platform Revolution by Parker", "Ben Thompson's Stratechery"]
            }
          ]
        },
        {
          id: "pricing-strategy",
          name: "Pricing Strategy",
          questions: [
            {
              question: "A fitness app currently charges $9.99/month. They want to introduce an annual plan. What should they price it at?",
              difficulty: 1,
              tags: ["consumer", "subscription", "pricing", "mobile"],
              tips: [
                "Annual plans trade lower per-month revenue for higher retention and upfront cash",
                "The discount needs to be compelling enough to convert but not leave money on the table",
                "Consider what competitors charge for annual plans",
                "Think about churn reduction value"
              ],
              steps: [
                { title: "Current Economics", detail: "Monthly: $9.99/mo. If average user churns at month 5, LTV = ~$50. Annual plan locks in 12 months = higher guaranteed LTV." },
                { title: "Competitive Benchmarks", detail: "Most fitness apps offer 30-50% annual discount. Peloton: ~33% off. Strava: ~40% off. Calm: ~50% off." },
                { title: "Pricing Options", detail: "Option A: $79.99/yr (33% off, $6.67/mo). Option B: $59.99/yr (50% off, $5/mo). Option C: $69.99/yr (42% off, $5.83/mo)." },
                { title: "Recommendation", detail: "$69.99/yr (42% discount). Compelling savings for users, significantly higher LTV than monthly ($70 vs ~$50 at current churn)." },
                { title: "Validation", detail: "A/B test: show 50% of new subscribers the annual option. Measure: annual adoption rate, total revenue per cohort at 12 months, long-term retention." }
              ],
              framework: "Current Economics → Benchmarks → Options → Recommendation → Test",
              resources: ["Monetizing Innovation by Ramanujam", "Price Intelligently blog", "Subscription pricing benchmarks"]
            },
            {
              question: "How would you price a new AI writing assistant for businesses?",
              difficulty: 2,
              tags: ["B2B", "SaaS", "AI", "pricing", "value-based"],
              tips: [
                "Anchor to value created, not cost to serve",
                "Consider competitive pricing landscape (ChatGPT, Jasper, etc.)",
                "Think about packaging/tiers not just a single price",
                "Address the 'willingness to pay' question"
              ],
              steps: [
                { title: "Understand Value", detail: "If a content marketer saves 10 hrs/week and earns $50/hr, the tool creates $500/week in value. Price should be a fraction." },
                { title: "Competitive Landscape", detail: "ChatGPT Plus: $20/mo. Jasper: $49-125/mo. Copy.ai: $49/mo. Grammarly Business: $15/user/mo." },
                { title: "Design Tiers", detail: "Starter ($19/user/mo): basic writing. Pro ($49/user/mo): advanced features + brand voice. Enterprise (custom): SSO, compliance, API." },
                { title: "Pricing Model", detail: "Per-seat monthly subscription with usage limits. Overage charges for heavy use. Annual discount (20% off)." },
                { title: "Validate", detail: "Run Van Westendorp price sensitivity survey with target customers. A/B test landing page pricing." }
              ],
              framework: "Value-based pricing: Value Created → Competitive Anchors → Tier Design → Model → Validation",
              resources: ["Monetizing Innovation by Madhavan Ramanujam", "Price Intelligently blog"]
            },
            {
              question: "You're the PM for a cloud database product. Your biggest enterprise customer threatens to leave unless you give them a 60% discount. How do you handle this?",
              difficulty: 3,
              tags: ["B2B", "enterprise", "pricing", "negotiation", "retention"],
              tips: [
                "This is about more than pricing — it's strategy, negotiation, and precedent",
                "Understand their BATNA (best alternative) before responding",
                "Giving 60% off sets a dangerous precedent for all enterprise deals",
                "Think about value exchange — what can you get in return?"
              ],
              steps: [
                { title: "Assess the Situation", detail: "How much revenue do they represent? What % of ARR? Do they have real alternatives? Are they bluffing or genuinely evaluating competitors?" },
                { title: "Understand Their Motivation", detail: "Is it budget pressure (CFO mandate), competitive offer (AWS/Azure undercutting), or dissatisfaction with the product? Each requires a different response." },
                { title: "Calculate Walk-Away Impact", detail: "Revenue loss, reference loss, competitive win for rival, team morale. Also: cost of 60% discount × ripple effect if other enterprises demand the same." },
                { title: "Counter-Proposal Strategy", detail: "Never give pure discount. Trade value: 60% off → 35% off + 3-year commitment + case study rights + referral intros. Or offer a smaller tier that fits their budget." },
                { title: "Decision Framework", detail: "If they're <5% ARR and bluffing: hold firm at 20% max. If they're >15% ARR with real alternatives: negotiate harder but offer multi-year + value adds." },
                { title: "Long-Term Fix", detail: "This signals a pricing or value perception problem. Post-resolution: audit value delivery, consider usage-based pricing that scales with their growth." }
              ],
              framework: "Assess → Understand Motivation → Calculate Impact → Counter-Propose → Decision Framework → Systemic Fix",
              resources: ["Never Split the Difference by Chris Voss", "The Challenger Sale", "Enterprise pricing strategy from OpenView"]
            }
          ]
        },
        {
          id: "growth-strategy",
          name: "Growth Strategy",
          questions: [
            {
              question: "How would you increase the number of reviews on a local restaurant review app?",
              difficulty: 1,
              tags: ["consumer", "marketplace", "UGC", "engagement", "local"],
              tips: [
                "Think about both motivation (why review?) and friction (how easy is it?)",
                "Consider the chicken-and-egg problem of review platforms",
                "Look at what Yelp, Google, TripAdvisor do to incentivize reviews",
                "Don't over-rely on gamification — intrinsic motivation matters"
              ],
              steps: [
                { title: "Current State", detail: "Identify why users aren't reviewing: too much friction, no incentive, forget after dining, don't see value." },
                { title: "Reduce Friction", detail: "Push notification 1 hour after restaurant visit (use location). One-tap star rating with optional text. Photo-first review option." },
                { title: "Increase Motivation", detail: "Social recognition (top reviewer badges). Show impact ('Your review helped 50 people'). Monthly leaderboard with prizes." },
                { title: "Quality over Quantity", detail: "Prompt specific aspects: 'How was the service?' 'Rate the ambiance.' Structured reviews are easier to write and more useful to read." },
                { title: "Metrics", detail: "Reviews per user per month, review completion rate (started vs finished), review quality score, reviewer retention." }
              ],
              framework: "Friction Reduction + Motivation Enhancement + Quality Controls",
              resources: ["Hacking Growth by Sean Ellis", "Contagious by Jonah Berger"]
            },
            {
              question: "How would you grow Slack's user base by 10x?",
              difficulty: 2,
              tags: ["B2B", "SaaS", "PLG", "viral", "network-effects"],
              tips: [
                "Clarify what 10x means — total users, paid users, or DAU?",
                "Think about new markets/segments, not just doing more of the same",
                "Consider viral loops and network effects",
                "Be realistic about timeline"
              ],
              steps: [
                { title: "Current State", detail: "Slack dominates tech/startup teams but has lower penetration in non-tech enterprises, SMBs, and emerging markets." },
                { title: "Growth Levers", detail: "1) New segments (non-tech enterprise, education, government). 2) International expansion. 3) Viral product-led growth. 4) Platform/ecosystem." },
                { title: "Top Bets", detail: "Free tier for education (pipeline to enterprise). Slack Connect expansion (every vendor interaction = new org exposed). Vertical templates." },
                { title: "Viral Mechanics", detail: "Every Slack Connect invitation exposes a new org. Make external collaboration the wedge — partner onboards to Slack to work with existing customer." },
                { title: "Timeline & Metrics", detail: "2 year horizon. Track: new org signups, Slack Connect channels created, free-to-paid conversion, international % of MAU." }
              ],
              framework: "Growth: Current State → Levers → Top Bets → Viral Mechanics → Metrics",
              resources: ["Hacking Growth by Sean Ellis", "Reforge Growth Series", "Blitzscaling by Reid Hoffman"]
            },
            {
              question: "Spotify's growth in North America is plateauing. Design a comprehensive growth strategy to add 50M new users globally in 2 years.",
              difficulty: 3,
              tags: ["consumer", "global", "growth", "international", "music"],
              tips: [
                "50M is ambitious — think about where those users could come from geographically",
                "Consider device and connectivity constraints in emerging markets",
                "Think about content localization, not just language translation",
                "Partnerships may be more efficient than organic growth at this scale"
              ],
              steps: [
                { title: "Where Are the Users?", detail: "North America: saturated. Europe: mature. Growth markets: India (1.4B pop), Southeast Asia (700M), Africa (1.4B), Latin America (expanding). Target: India + SEA + Africa = bulk of 50M." },
                { title: "India Strategy (20M target)", detail: "Free tier with ads optimized for low data usage. Local language playlists (Hindi, Tamil, Telugu). Jio partnership for bundling. Bollywood and cricket podcast content." },
                { title: "Southeast Asia Strategy (15M)", detail: "K-pop and J-pop content deals. Telco partnerships in Indonesia, Philippines, Vietnam. Ultra-lite app for low-end Android devices." },
                { title: "Africa Strategy (10M)", detail: "Afrobeats exclusives. Mobile money payment integration (M-Pesa). Offline-first design for low connectivity. Free tier with sponsored playlists." },
                { title: "North America/Europe (5M)", detail: "Podcast exclusives, social features (collaborative playlists), Gen Z targeting via TikTok integration, family plan expansion." },
                { title: "Metrics & Milestones", detail: "Monthly new user signups by region, 30-day retention by market, streaming hours per user, cost per acquired user by channel, local content engagement rate." }
              ],
              framework: "Geographic Opportunity → Market-Specific Strategy × 4 → Cross-Market Metrics",
              resources: ["Blitzscaling by Reid Hoffman", "Spotify investor presentations", "Emerging market growth playbooks"]
            }
          ]
        }
      ]
    },
    {
      id: "behavioral",
      name: "Behavioral / Leadership",
      subcategories: [
        {
          id: "leadership-influence",
          name: "Leadership & Influence",
          questions: [
            {
              question: "Tell me about a time you convinced someone to change their mind.",
              difficulty: 1,
              tags: ["influence", "persuasion", "communication", "interpersonal"],
              tips: [
                "Pick a work example, not a personal argument",
                "Show that you listened first and persuaded with evidence, not authority",
                "The best answers show empathy for the other person's position",
                "Include the outcome — did the change lead to a better result?"
              ],
              steps: [
                { title: "Situation", detail: "Describe the context: who disagreed with you, what was the decision, and what was at stake." },
                { title: "Task", detail: "Why did it matter that this person changed their mind? What was the impact of the status quo?" },
                { title: "Action", detail: "How did you persuade? Data, prototyping, bringing in a customer's voice, framing around their goals, or finding a compromise." },
                { title: "Result", detail: "They agreed, the decision was made, and here's the measurable outcome (shipped faster, saved $X, improved metric)." },
                { title: "Reflection", detail: "What made the persuasion work? What would you do differently if they hadn't been convinced?" }
              ],
              framework: "STAR (Situation → Task → Action → Result)",
              resources: ["Cracking the PM Interview behavioral chapter", "Influence by Robert Cialdini"]
            },
            {
              question: "Tell me about a time you led a cross-functional team without direct authority.",
              difficulty: 2,
              tags: ["leadership", "cross-functional", "influence", "collaboration"],
              tips: [
                "Use the STAR format — be specific, not generic",
                "Show how you influenced through data, vision, or relationships",
                "Include the outcome with measurable results",
                "Demonstrate self-awareness about what you learned"
              ],
              steps: [
                { title: "Situation", detail: "Set the context: team composition, project goal, why you didn't have authority." },
                { title: "Task", detail: "What was your specific responsibility? What was at stake?" },
                { title: "Action", detail: "What did you DO? Align on shared goals, create visibility, build individual relationships, use data to persuade, remove blockers." },
                { title: "Result", detail: "Quantifiable outcome: shipped on time, improved metric by X%, got buy-in from skeptical stakeholder." },
                { title: "Reflection", detail: "What did you learn about influence? What would you do differently?" }
              ],
              framework: "STAR (Situation → Task → Action → Result)",
              resources: ["Cracking the PM Interview behavioral chapter", "Influence Without Authority by Allan Cohen"]
            },
            {
              question: "Describe a situation where you had to lead a team through a major pivot or strategic change that most people initially opposed.",
              difficulty: 3,
              tags: ["leadership", "change-management", "strategy", "resilience", "vision"],
              tips: [
                "This tests leadership under adversity — show conviction balanced with humility",
                "Explain WHY the pivot was necessary, not just what happened",
                "Show how you brought skeptics along over time, not just overruled them",
                "Include both the emotional and rational dimensions of leading change"
              ],
              steps: [
                { title: "Situation", detail: "What was the original direction? What signals told you a pivot was needed (data, customer feedback, market shift)?" },
                { title: "The Opposition", detail: "Who disagreed? Why? Were their concerns valid? Show you understood their perspective genuinely, not dismissively." },
                { title: "Building the Case", detail: "How did you convince leadership? Data presentation, pilot/prototype results, competitive analysis, customer stories." },
                { title: "Managing the Transition", detail: "How did you bring the team along? Town halls, 1:1s with key skeptics, quick wins to build momentum, transparency about risks." },
                { title: "Result", detail: "Measurable outcome of the pivot. Also: team morale and trust after the change. Did skeptics become advocates?" },
                { title: "What You'd Do Differently", detail: "Were there signals you missed earlier? Could you have built consensus faster? What did this teach you about leading change?" }
              ],
              framework: "STAR + Change Management (Why → Opposition → Case → Transition → Result → Learning)",
              resources: ["Leading Change by John Kotter", "Radical Candor by Kim Scott", "Switch by Chip & Dan Heath"]
            }
          ]
        },
        {
          id: "conflict-resolution",
          name: "Conflict Resolution",
          questions: [
            {
              question: "Tell me about a disagreement you had with a coworker. How did you resolve it?",
              difficulty: 1,
              tags: ["conflict", "teamwork", "communication", "interpersonal"],
              tips: [
                "Pick a real disagreement, not a trivial one",
                "Never badmouth the other person — show mutual respect",
                "Focus on the resolution process, not who was 'right'",
                "Show that the relationship survived or improved"
              ],
              steps: [
                { title: "Situation", detail: "Brief context: who, what the disagreement was about, and why it mattered for the project." },
                { title: "Your Initial Reaction", detail: "Be honest — did you feel frustrated? Showing self-awareness about emotions is a strength, not a weakness." },
                { title: "Resolution Steps", detail: "Did you have a direct conversation? Seek to understand their perspective? Find common ground? Bring in data or a third opinion?" },
                { title: "Outcome", detail: "What was decided? How did the relationship fare after? Did the project benefit from the resolution?" },
                { title: "Takeaway", detail: "What did you learn about handling disagreements? What would you do earlier next time?" }
              ],
              framework: "STAR with emotional intelligence emphasis",
              resources: ["Crucial Conversations by Patterson et al.", "Nonviolent Communication by Rosenberg"]
            },
            {
              question: "Describe a time when engineering and design disagreed on an approach. How did you resolve it?",
              difficulty: 2,
              tags: ["conflict", "cross-functional", "design", "engineering", "facilitation"],
              tips: [
                "Don't position yourself as the hero who 'won' — show facilitation",
                "Demonstrate empathy for both sides",
                "Show that you focused on shared goals/user outcomes, not opinions",
                "Include what you'd do differently next time"
              ],
              steps: [
                { title: "Situation", detail: "Describe the specific disagreement and what was at stake for shipping." },
                { title: "Task", detail: "Your role was to unblock the decision without damaging relationships." },
                { title: "Action", detail: "Reframe around user goals, bring data/user research, propose a compromise or phased approach, escalate only if needed." },
                { title: "Result", detail: "How the team aligned, what shipped, how relationships were preserved or strengthened." },
                { title: "Learning", detail: "Early alignment on criteria prevents late-stage conflict. Create decision frameworks upfront." }
              ],
              framework: "STAR + Empathy Demonstration",
              resources: ["Crucial Conversations by Patterson et al.", "The Five Dysfunctions of a Team by Lencioni"]
            },
            {
              question: "Tell me about a time a key stakeholder fundamentally disagreed with your product direction and actively worked against it. How did you navigate this?",
              difficulty: 3,
              tags: ["conflict", "stakeholder", "politics", "influence", "executive"],
              tips: [
                "This tests political savvy — can you navigate organizational complexity?",
                "Show you tried to understand their position before fighting it",
                "Demonstrate strategic thinking about when to push, compromise, or retreat",
                "Never make it personal — frame it as a business disagreement"
              ],
              steps: [
                { title: "Situation", detail: "Who was the stakeholder, what was their role, and why did they oppose your direction? What organizational power did they have?" },
                { title: "Understanding Their Position", detail: "What were their genuine concerns? Different data, different priorities, different incentives? Show you investigated, not assumed." },
                { title: "Your Strategy", detail: "Did you go direct, build allies, escalate to leadership, or find a compromise that addressed their core concern?" },
                { title: "Tactical Steps", detail: "1:1 meeting to listen. Shared data packet. Offered a test/pilot to reduce their perceived risk. Enlisted a mutual trusted colleague." },
                { title: "Resolution", detail: "What happened? Did they come around, was a compromise reached, or did leadership decide? How did the relationship end up?" },
                { title: "Key Insight", detail: "People rarely fight product direction — they fight for their own priorities. Understanding their 'why' is the unlock." }
              ],
              framework: "STAR + Organizational Navigation (Situation → Understand → Strategize → Tactics → Resolve → Insight)",
              resources: ["Radical Candor by Kim Scott", "Managing Up (HBR)", "Influence Without Authority by Cohen & Bradford"]
            }
          ]
        },
        {
          id: "failure-learning",
          name: "Failure & Learning",
          questions: [
            {
              question: "Tell me about a time you made a mistake at work. What happened?",
              difficulty: 1,
              tags: ["failure", "growth", "self-awareness", "accountability"],
              tips: [
                "Pick a real mistake, not something trivial like 'I worked too hard'",
                "Take full ownership — no deflecting to others or circumstances",
                "Spend more time on the learning than the mistake itself",
                "Show the specific behavior change that resulted"
              ],
              steps: [
                { title: "The Mistake", detail: "What did you do wrong? Be specific and concise. Don't over-explain or make excuses." },
                { title: "Impact", detail: "What was the consequence? Delayed project, lost customer trust, wasted eng time, wrong decision?" },
                { title: "Ownership", detail: "How did you own it? Did you flag it immediately, or try to fix it silently first? Best answers show proactive transparency." },
                { title: "Recovery", detail: "What did you do to fix the immediate damage?" },
                { title: "Learning & Change", detail: "What specific behavior or process did you change? Give a concrete example of applying the lesson later." }
              ],
              framework: "Mistake → Impact → Ownership → Recovery → Learning",
              resources: ["Thinking in Bets by Annie Duke", "Mindset by Carol Dweck"]
            },
            {
              question: "What is the biggest product failure you've been responsible for? What did you learn?",
              difficulty: 2,
              tags: ["failure", "product", "learning", "accountability", "growth"],
              tips: [
                "Pick a real failure — not a humble-brag disguised as failure",
                "Take genuine ownership, don't blame others",
                "Focus 60% on the learning, not the failure itself",
                "Show how you changed your behavior going forward"
              ],
              steps: [
                { title: "Situation", detail: "Describe what you were building and the context." },
                { title: "What Went Wrong", detail: "Be specific: missed user need, poor prioritization, bad assumption, scope creep, etc." },
                { title: "Your Responsibility", detail: "Own your specific role in the failure — what did YOU miss or do wrong?" },
                { title: "Learning", detail: "The specific insight you took away. Not generic ('communicate better') but specific ('validate with 5 users before committing eng resources')." },
                { title: "Behavior Change", detail: "How you applied this learning in a subsequent situation with a better outcome." }
              ],
              framework: "STAR with ownership emphasis",
              resources: ["The Right It by Alberto Savoia", "Thinking in Bets by Annie Duke"]
            },
            {
              question: "Tell me about a product you shipped that looked successful by metrics but you consider a failure. Why?",
              difficulty: 3,
              tags: ["failure", "metrics", "judgment", "product-sense", "nuance"],
              tips: [
                "This tests whether you think beyond vanity metrics — rare and impressive",
                "Show nuanced thinking: something can hit KPIs and still be wrong",
                "Examples: moved a metric but hurt long-term retention, hit targets but damaged trust, shipped on time but compromised quality",
                "Demonstrates product maturity and integrity"
              ],
              steps: [
                { title: "The Product/Feature", detail: "What did you ship? What were the target metrics?" },
                { title: "The 'Success'", detail: "How did it perform against the stated KPIs? Show it genuinely looked good on paper." },
                { title: "Why It Was Actually a Failure", detail: "What did the metrics miss? User frustration, cannibalized another feature, short-term bump but long-term damage, misaligned with strategy, or technical debt." },
                { title: "How You Realized", detail: "What signal told you it wasn't actually working? Qualitative feedback, cohort analysis, downstream effects, gut feeling confirmed by data." },
                { title: "What You Did About It", detail: "Did you flag it? Course-correct? Kill the feature? Or was it too late?" },
                { title: "Lesson", detail: "How this changed how you define success metrics. Importance of leading vs lagging indicators, qualitative + quantitative, counter-metrics." }
              ],
              framework: "Surface Success → Hidden Failure → Detection → Action → Systemic Learning",
              resources: ["Lean Analytics by Alistair Croll", "Escaping the Build Trap by Melissa Perri", "Goodhart's Law in product management"]
            }
          ]
        },
        {
          id: "stakeholder-management",
          name: "Stakeholder Management",
          questions: [
            {
              question: "How do you keep your manager informed about your project's progress?",
              difficulty: 1,
              tags: ["communication", "managing-up", "reporting", "transparency"],
              tips: [
                "Show you're proactive, not reactive — don't wait to be asked",
                "Tailor communication to your audience (manager wants different info than engineers)",
                "Mention how you handle bad news — early and directly is the right answer",
                "Show a system/cadence, not ad hoc updates"
              ],
              steps: [
                { title: "Establish Cadence", detail: "Weekly 1:1 with status update, daily async update in Slack/email for active projects, ad hoc for blockers or surprises." },
                { title: "Format", detail: "Brief, structured: What's on track, what's at risk, what I need from you. No surprises. Red/yellow/green status for each workstream." },
                { title: "Bad News Delivery", detail: "Surface risks early: 'We might miss the deadline because X. Here's my plan to mitigate, and here's where I need your help.'" },
                { title: "Adjust to Preference", detail: "Some managers want details, others want headlines. Ask: 'What format works best for you?' and adapt." },
                { title: "Example", detail: "Every Friday: 3-bullet Slack message — shipped this week, working on next week, blockers/risks. Monthly: roadmap review with metrics." }
              ],
              framework: "Cadence → Format → Bad News Protocol → Adapt to Style",
              resources: ["Managing Up (HBR)", "The First 90 Days by Michael Watkins"]
            },
            {
              question: "How do you handle pushback from an executive who wants a feature you believe is wrong for users?",
              difficulty: 2,
              tags: ["stakeholder", "executive", "pushback", "data-driven", "influence"],
              tips: [
                "Show you respect the executive's perspective and context",
                "Never frame it as 'I was right, they were wrong'",
                "Demonstrate data-driven persuasion",
                "Show willingness to be wrong — maybe the exec knows something you don't"
              ],
              steps: [
                { title: "Listen First", detail: "Understand WHY the executive wants this. What data, customer feedback, or strategic context are they seeing?" },
                { title: "Seek Shared Ground", detail: "Align on the goal (e.g., increase revenue) even if you disagree on the solution (the specific feature)." },
                { title: "Present Evidence", detail: "Share user research, data, or competitive analysis that supports your perspective. Frame as 'here's what we're seeing' not 'you're wrong.'" },
                { title: "Propose Alternatives", detail: "Offer a lower-cost way to test the exec's hypothesis OR an alternative that achieves their goal without the user harm." },
                { title: "Disagree and Commit", detail: "If overruled after making your case, commit fully. Set up metrics to evaluate — data settles the debate post-launch." }
              ],
              framework: "Listen → Align on Goal → Evidence → Alternatives → Commit",
              resources: ["Radical Candor by Kim Scott", "Managing Up (HBR)", "Amazon's Disagree and Commit principle"]
            },
            {
              question: "You've just joined a new company as a PM. The engineering lead doesn't trust PMs and has historically ignored product requirements. How do you build this relationship?",
              difficulty: 3,
              tags: ["stakeholder", "trust-building", "engineering", "new-role", "relationship"],
              tips: [
                "This is about earning trust, not demanding respect",
                "Show patience — trust takes weeks/months, not days",
                "Demonstrate that you add value to engineering, not just assign work",
                "The best PMs make engineers' lives easier, not harder"
              ],
              steps: [
                { title: "Diagnose the Root Cause", detail: "Why don't they trust PMs? Bad past experiences, PMs who didn't understand tech, constantly changing requirements, or PMs who took credit?" },
                { title: "Listen Before Acting", detail: "First 2 weeks: attend their standups, ask about technical challenges, learn about their past pain points. Don't push any agenda yet." },
                { title: "Add Value Early", detail: "Unblock something they care about: remove a pointless process, shield them from stakeholder noise, get them resources they've been requesting." },
                { title: "Earn Technical Respect", detail: "Do your homework before discussing tech. Don't pretend to be an engineer, but show you understand constraints and trade-offs." },
                { title: "Build the Working Rhythm", detail: "Co-create the process: 'What format for requirements works best for you? How do you want to be involved in design reviews?'" },
                { title: "Long-Term", detail: "Consistently deliver on promises. Give them credit publicly. Protect them from unreasonable asks. Trust compounds — each positive interaction builds on the last." }
              ],
              framework: "Diagnose → Listen → Add Value → Earn Respect → Co-Create Process → Sustain Trust",
              resources: ["The First 90 Days by Michael Watkins", "Influence Without Authority by Cohen & Bradford", "Radical Candor by Kim Scott"]
            }
          ]
        }
      ]
    },
    {
      id: "analytical",
      name: "Analytical / Metrics",
      subcategories: [
        {
          id: "metrics-definition",
          name: "Metrics Definition",
          questions: [
            {
              question: "What is the most important metric for a food delivery app like DoorDash?",
              difficulty: 1,
              tags: ["metrics", "marketplace", "food-delivery", "north-star"],
              tips: [
                "Don't just name a metric — explain WHY it's the most important",
                "Consider all sides of the marketplace (customers, drivers, restaurants)",
                "Distinguish between a North Star metric and supporting metrics",
                "Show you understand what drives long-term business health"
              ],
              steps: [
                { title: "Identify the Core Value", detail: "DoorDash creates value when a customer orders food, a restaurant fulfills it, and a driver delivers it. The moment of value = completed delivery." },
                { title: "North Star Metric", detail: "Completed orders per month. This captures all three sides of the marketplace working and directly correlates with revenue." },
                { title: "Why Not Other Metrics?", detail: "GMV is good but doesn't capture frequency. DAU misses monetization. Revenue is lagging. Completed orders = leading indicator of business health." },
                { title: "Supporting Metrics", detail: "Customer: order frequency, reorder rate. Restaurants: fulfillment time, menu availability. Drivers: deliveries per hour, earnings satisfaction." },
                { title: "Counter-Metrics", detail: "If optimizing for order volume: watch average order value (don't shrink baskets), delivery time (don't sacrifice speed), refund rate (don't sacrifice quality)." }
              ],
              framework: "Core Value → North Star → Why This One → Supporting Metrics → Counter-Metrics",
              resources: ["Lean Analytics by Alistair Croll", "Amplitude's North Star playbook"]
            },
            {
              question: "What metrics would you track for Facebook Marketplace?",
              difficulty: 2,
              tags: ["metrics", "marketplace", "two-sided", "e-commerce", "funnel"],
              tips: [
                "Structure metrics by funnel stage or user type (buyer vs seller)",
                "Distinguish leading vs lagging indicators",
                "Identify a North Star metric that captures core value",
                "Mention counter-metrics to avoid gaming"
              ],
              steps: [
                { title: "Identify Core Value", detail: "Marketplace creates value when a buyer finds what they need and a seller makes a sale. North Star: completed transactions." },
                { title: "Buyer Metrics", detail: "Search-to-view rate, view-to-message rate, message-to-purchase rate, time-to-first-purchase, repeat buyer rate." },
                { title: "Seller Metrics", detail: "Listings created, listing-to-sale rate, time-to-sell, seller retention, average listing quality score." },
                { title: "Platform Health", detail: "Trust & safety: fraud rate, dispute rate, response time. Supply/demand balance by category." },
                { title: "Counter-Metrics", detail: "If optimizing for transactions, watch: average selling price (ensure not racing to bottom), seller satisfaction, listing quality." }
              ],
              framework: "North Star → Funnel Metrics → Health Metrics → Counter-Metrics",
              resources: ["Lean Analytics by Alistair Croll", "Measure What Matters by John Doerr", "Amplitude's North Star playbook"]
            },
            {
              question: "Define the success metrics framework for a new AI-powered search feature launching inside a B2B SaaS product.",
              difficulty: 3,
              tags: ["metrics", "B2B", "SaaS", "AI", "search", "framework"],
              tips: [
                "AI features need different metrics than traditional features — accuracy, trust, adoption curve",
                "Think about the user journey: awareness → trial → habitual use → dependency",
                "B2B metrics should connect to customer outcomes the buyer cares about (productivity, retention)",
                "Consider how to measure if AI is actually better than the old search"
              ],
              steps: [
                { title: "Define Success Tiers", detail: "Tier 1: Users try it. Tier 2: Users prefer it over old search. Tier 3: It measurably improves productivity. Tier 4: It drives retention/expansion." },
                { title: "Adoption Metrics", detail: "AI search usage rate (% of searches using AI vs traditional), first-use-to-repeat rate, time to first AI search after feature launch." },
                { title: "Quality Metrics", detail: "Search result click-through rate, result relevance score (thumbs up/down), query-to-answer time, zero-result rate, reformulation rate (user rephrases = bad result)." },
                { title: "Comparison Metrics", detail: "A/B test: AI search vs traditional search. Compare: task completion time, support ticket volume, user satisfaction scores." },
                { title: "Business Impact Metrics", detail: "Time saved per user per week (productivity). Feature-attributed NPS lift. Churn rate of accounts using AI search vs not. Expansion revenue correlation." },
                { title: "Trust & Guardrail Metrics", detail: "Hallucination/wrong answer rate, user-reported errors, 'I don't trust this' feedback rate. If trust erodes, adoption will follow." }
              ],
              framework: "Success Tiers → Adoption → Quality → A/B Comparison → Business Impact → Trust Guardrails",
              resources: ["Measure What Matters by John Doerr", "AI product metrics frameworks (Reforge)", "Google HEART framework"]
            }
          ]
        },
        {
          id: "root-cause-analysis",
          name: "Root Cause Analysis",
          questions: [
            {
              question: "Your app's average session duration dropped 10% this month. What could be happening?",
              difficulty: 1,
              tags: ["debugging", "analytics", "engagement", "diagnosis"],
              tips: [
                "Don't jump to conclusions — list multiple hypotheses first",
                "A drop in session duration isn't always bad (users could be finding things faster)",
                "Think about both product and external causes",
                "Show a structured investigation process"
              ],
              steps: [
                { title: "Clarify the Signal", detail: "Is shorter session bad? If users complete tasks faster → efficiency improvement. If users leave earlier without completing → engagement problem. Check task completion rate." },
                { title: "Segment the Drop", detail: "Is it all users or a segment? New vs returning? Platform (iOS vs Android)? Geography? Find where the drop concentrates." },
                { title: "List Hypotheses", detail: "1) Recent app update introduced a bug or UX change. 2) Seasonal pattern. 3) Competitor launched. 4) Content/feed quality declined. 5) Performance/speed issue." },
                { title: "Investigation Steps", detail: "Check release timeline, compare crash/error rates, review app store reviews for complaints, check if completion rates changed alongside session time." },
                { title: "Communicate", detail: "To leadership: 'We saw a 10% drop in session duration. Early data suggests [X]. We're investigating and will have root cause by [date].'" }
              ],
              framework: "Clarify Signal → Segment → Hypothesize → Investigate → Communicate",
              resources: ["Data-Informed Product Building (Amplitude blog)", "Lean Analytics"]
            },
            {
              question: "Daily active users dropped 15% this week. How would you investigate?",
              difficulty: 2,
              tags: ["debugging", "analytics", "DAU", "crisis", "diagnosis"],
              tips: [
                "Don't jump to solutions — be systematic about diagnosis",
                "Segment the problem before hypothesizing causes",
                "Consider external factors (outage, seasonality, competitor launch)",
                "Show how you'd communicate findings to stakeholders"
              ],
              steps: [
                { title: "Validate & Scope", detail: "Confirm the data is correct (no logging bug). Is it all users or a segment? All platforms or one? All regions?" },
                { title: "Timeline", detail: "When exactly did it start? Was it gradual or sudden? Correlate with releases, incidents, or external events." },
                { title: "Segment Analysis", detail: "New vs returning users. Mobile vs desktop. By geography. By acquisition source. Find where the drop concentrates." },
                { title: "Hypothesis Generation", detail: "Based on segmentation: app update bug, server outage, seasonal pattern, competitor action, or feature change." },
                { title: "Validate Hypothesis", detail: "Check error logs, app store reviews, social media, support tickets. Run cohort analysis on affected segment." },
                { title: "Action Plan", detail: "Short-term: fix/revert if it's a bug. Medium-term: deeper investigation. Communicate status to leadership with ETA." }
              ],
              framework: "Validate → Segment → Timeline → Hypothesize → Test → Act",
              resources: ["Trustworthy Online Controlled Experiments (Kohavi)", "Data-Informed Product Building (Amplitude blog)"]
            },
            {
              question: "Your e-commerce platform's conversion rate dropped 8%, but traffic and average order value are both UP. Diagnose the problem.",
              difficulty: 3,
              tags: ["debugging", "analytics", "e-commerce", "conversion", "funnel", "paradox"],
              tips: [
                "This is a puzzle — traffic up + AOV up + conversion down is counterintuitive",
                "Think about mix shifts: WHERE is the new traffic coming from?",
                "Simpson's paradox may be at play — segment-level conversion could be fine",
                "Show systematic thinking, not just guessing"
              ],
              steps: [
                { title: "Recognize the Paradox", detail: "More traffic + higher AOV usually = good. Conversion dropping despite this suggests a mix shift, not a product problem." },
                { title: "Hypothesis: Traffic Quality", detail: "New traffic sources (paid ads, social, press) may bring lower-intent visitors. They browse but don't buy → overall conversion drops even if existing-user conversion is stable." },
                { title: "Segment by Source", detail: "Break conversion by traffic source: organic, direct, paid, social, referral. If paid traffic doubled and converts at 1% vs organic at 4%, overall rate drops mechanically." },
                { title: "Check Simpson's Paradox", detail: "If EVERY segment's conversion is flat or up, but low-converting segments grew as a share of total → overall conversion drops. This is a math artifact, not a product problem." },
                { title: "Further Investigation", detail: "Check: funnel stage where new visitors drop (browsing vs cart vs checkout). Mobile vs desktop conversion for new traffic. Landing page bounce rates." },
                { title: "Action", detail: "If mix shift: not a bug — optimize new traffic landing pages and retargeting. If genuine drop in segment: investigate checkout flow, pricing, or stock issues." }
              ],
              framework: "Recognize Paradox → Traffic Quality Hypothesis → Segment Analysis → Simpson's Paradox Check → Funnel Deep-Dive → Action",
              resources: ["Trustworthy Online Controlled Experiments", "Simpson's Paradox in A/B Testing (blog posts)", "Lean Analytics"]
            }
          ]
        },
        {
          id: "ab-testing",
          name: "A/B Testing & Experimentation",
          questions: [
            {
              question: "Your team wants to change the color of the 'Buy Now' button from blue to green. How would you test this?",
              difficulty: 1,
              tags: ["experimentation", "UX", "conversion", "e-commerce", "basics"],
              tips: [
                "Even simple tests need proper methodology",
                "Define success criteria BEFORE running the test",
                "This seems trivial but tests your experimentation fundamentals",
                "Consider if this is even worth testing (impact vs effort to run experiment)"
              ],
              steps: [
                { title: "Worth Testing?", detail: "Quick gut check: button color changes rarely move metrics significantly. But if the page has high traffic and button is the primary CTA, even 0.5% lift matters." },
                { title: "Hypothesis", detail: "Changing the Buy Now button from blue to green will increase click-through rate because green implies 'go' and stands out against our blue-themed UI." },
                { title: "Test Design", detail: "50/50 random split. Control: blue button. Treatment: green button. Run for 1-2 weeks to capture weekday and weekend behavior." },
                { title: "Primary Metric", detail: "Button click-through rate. Secondary: purchase completion rate (did clicks convert?). Guardrail: ensure no segment performs significantly worse." },
                { title: "Decision", detail: "If green wins with 95% confidence and ≥0.3% CTR lift: ship. If neutral: keep blue (no change cost). If negative: keep blue." }
              ],
              framework: "Worth It? → Hypothesis → Design → Metrics → Decision Criteria",
              resources: ["Evan Miller's A/B testing tools", "Optimizely knowledge base"]
            },
            {
              question: "How would you design an experiment to test whether a new checkout flow increases conversion?",
              difficulty: 2,
              tags: ["experimentation", "checkout", "conversion", "e-commerce", "methodology"],
              tips: [
                "Define hypothesis clearly before discussing mechanics",
                "Address statistical significance and sample size",
                "Think about what could go wrong (novelty effect, selection bias)",
                "Consider business risk during the test"
              ],
              steps: [
                { title: "Hypothesis", detail: "The simplified 2-step checkout (vs current 4-step) will increase purchase completion rate by at least 5%." },
                { title: "Test Design", detail: "50/50 random split of new users. Control: current 4-step. Treatment: new 2-step. Duration: 2 weeks minimum." },
                { title: "Primary Metric", detail: "Cart-to-purchase conversion rate. Secondary: revenue per session, average order value, return rate (quality check)." },
                { title: "Guardrails", detail: "Watch: payment error rate, support tickets about checkout, average order value (ensure not dropping)." },
                { title: "Statistical Rigor", detail: "Need 95% confidence, 80% power. Calculate minimum sample size. Don't peek at results before reaching significance." },
                { title: "Decision Framework", detail: "Ship if: primary metric improves ≥5% AND no guardrail regression. Iterate if: directionally positive but <5%. Kill if: guardrails degrade." }
              ],
              framework: "Hypothesis → Design → Metrics → Guardrails → Stats → Decision",
              resources: ["Trustworthy Online Controlled Experiments", "Evan Miller's A/B testing tools", "Optimizely knowledge base"]
            },
            {
              question: "You're running an A/B test on a new onboarding flow. After 1 week the treatment group shows +12% activation but -3% day-30 retention. How do you interpret this and what do you do?",
              difficulty: 3,
              tags: ["experimentation", "onboarding", "retention", "trade-offs", "advanced"],
              tips: [
                "This tests nuanced thinking — short-term gain vs long-term loss",
                "Don't rush to a decision — question the data first",
                "Consider if the retention signal is even statistically significant at 1 week",
                "Think about WHY these could move in opposite directions"
              ],
              steps: [
                { title: "Question the Data", detail: "Is 1 week enough to measure day-30 retention? No — you only have day-30 data for users who joined 30+ days ago. If test is 1 week old, day-30 retention data is from a different cohort or projected." },
                { title: "Statistical Validity", detail: "+12% activation with 1 week of data: likely significant if sample is large. -3% day-30 retention: almost certainly not significant yet. Need full 30-day cohort." },
                { title: "Hypothesis for Divergence", detail: "New onboarding might activate low-intent users who wouldn't have activated otherwise → they churn later. 'Easy activation ≠ real engagement.'" },
                { title: "Investigation Plan", detail: "Wait for full 30-day cohort. Segment: are the churning users net-new activations or users who would have activated anyway? Compare quality of activated users." },
                { title: "Possible Outcomes", detail: "1) Retention normalizes → ship (activation gain is real). 2) Retention drop persists but net users UP → ship (more users even with lower %). 3) Retention drop is real and net negative → iterate." },
                { title: "Decision", detail: "Do NOT ship or kill yet. Extend the test to 6 weeks. Add day-7 and day-14 retention as intermediate checkpoints. Segment by user quality." }
              ],
              framework: "Question Data Validity → Stats Check → Hypothesis → Investigation Plan → Scenario Planning → Decision",
              resources: ["Trustworthy Online Controlled Experiments (Kohavi)", "Reforge experimentation course", "Statistical Methods in Online A/B Testing by Georgi Georgiev"]
            }
          ]
        }
      ]
    },
    {
      id: "technical",
      name: "Technical",
      subcategories: [
        {
          id: "system-design",
          name: "System Design (PM-Level)",
          questions: [
            {
              question: "How would you explain how a search engine works to a non-technical stakeholder?",
              difficulty: 1,
              tags: ["communication", "search", "non-technical", "explanation"],
              tips: [
                "Use analogies — relate to something the stakeholder already understands",
                "Avoid jargon: no 'indexing', 'crawling', 'ranking algorithms' without explanation",
                "Focus on the user-facing implications, not the technical plumbing",
                "Show you can bridge the gap between technical and business teams"
              ],
              steps: [
                { title: "The Analogy", detail: "A search engine is like a librarian with a card catalog. The librarian (Google) reads every book (webpage), makes notes about each one, and files the notes." },
                { title: "Step 1: Discovery", detail: "Google sends out robots that follow every link on the internet, reading and cataloging every page. Like a librarian visiting every library in the world." },
                { title: "Step 2: Organization", detail: "All those pages get organized by topic, keywords, quality, and freshness. The 'card catalog' is massive — billions of entries." },
                { title: "Step 3: Retrieval", detail: "When you search, Google checks its catalog (not the actual websites) and ranks results by relevance, quality, and trust. This is why results appear in milliseconds." },
                { title: "PM Relevance", detail: "Understanding this helps with SEO strategy, content decisions, and why changes to our site take time to appear in search results." }
              ],
              framework: "Analogy → Simplified Steps → PM Relevance",
              resources: ["Swipe to Unlock by Mehta, Detroja, Agashe", "Google's How Search Works page"]
            },
            {
              question: "Describe at a high level how you would design a notification system for a social media app.",
              difficulty: 2,
              tags: ["system-design", "notifications", "social-media", "architecture"],
              tips: [
                "As a PM you need to understand the system enough to make product trade-offs",
                "Think about push vs in-app vs email and when to use each",
                "Consider scale: millions of events generating billions of notifications",
                "Address user preferences and notification fatigue"
              ],
              steps: [
                { title: "Notification Types", detail: "Define categories: social (likes, comments, follows), transactional (password reset, payment), marketing (promotions). Each has different urgency and channel." },
                { title: "System Components", detail: "Event producer (user actions) → Event queue (buffer) → Notification service (decides what/when/how) → Delivery channels (push, in-app, email, SMS)." },
                { title: "Key PM Decisions", detail: "Batching vs real-time (send immediately or group?). Priority levels (urgent vs can-wait). Channel selection (push for urgent, email for digest)." },
                { title: "User Preferences", detail: "Per-category opt-in/out. Quiet hours. Frequency caps (max 10 pushes/day). Platform-level (iOS/Android notification settings)." },
                { title: "Scale Considerations", detail: "Celebrity posts might trigger millions of notifications simultaneously. Need: queue-based processing, rate limiting, priority lanes for time-sensitive notifications." },
                { title: "Metrics", detail: "Notification open rate, opt-out rate, time-to-open, notification-driven DAU, user-reported 'too many notifications' feedback." }
              ],
              framework: "Types → Components → PM Decisions → User Control → Scale → Metrics",
              resources: ["System Design Interview by Alex Xu", "Designing Data-Intensive Applications by Kleppmann"]
            },
            {
              question: "How would you design the architecture for a real-time collaborative document editor like Google Docs?",
              difficulty: 3,
              tags: ["system-design", "real-time", "collaboration", "architecture", "complex"],
              tips: [
                "You're not expected to go as deep as an engineer, but show technical literacy",
                "Focus on the product-relevant trade-offs, not implementation details",
                "Mention scale considerations and failure modes",
                "Show you can ask the right questions to engineers"
              ],
              steps: [
                { title: "Core Challenge", detail: "Multiple users editing simultaneously. Need conflict resolution, real-time sync, and offline support." },
                { title: "High-Level Components", detail: "Client editor, WebSocket connection for real-time, conflict resolution engine (OT or CRDT), document storage, presence service." },
                { title: "Key Trade-offs", detail: "OT (Operational Transform) vs CRDT: OT is proven (Google uses it) but complex. CRDTs are newer, better for offline, but memory-heavy." },
                { title: "Scale Considerations", detail: "Documents with 100+ simultaneous editors. Need: server-side relay, cursor/selection broadcasting, efficient diff sync." },
                { title: "PM-Relevant Decisions", detail: "Max concurrent editors? Offline editing support level? Version history granularity? Permissions model (view/comment/edit)?" }
              ],
              framework: "Core Challenge → Components → Trade-offs → Scale → PM Decisions",
              resources: ["System Design Interview by Alex Xu (PM-relevant chapters)", "Designing Data-Intensive Applications by Martin Kleppmann"]
            }
          ]
        },
        {
          id: "technical-tradeoffs",
          name: "Technical Trade-offs",
          questions: [
            {
              question: "Your team can build a feature using a simple but manual process or invest 3 extra weeks to fully automate it. What do you do?",
              difficulty: 1,
              tags: ["trade-offs", "automation", "speed", "pragmatism"],
              tips: [
                "There's no universal right answer — it depends on context",
                "Think about how often the process runs and who does it",
                "Consider opportunity cost of those 3 weeks",
                "Show you can make pragmatic decisions, not just 'engineering-optimal' ones"
              ],
              steps: [
                { title: "Gather Context", detail: "How often does this process run? Daily → automate. Once a quarter → manual is fine. Who does it? Engineer → expensive. Ops person → cheaper." },
                { title: "Calculate the Trade-off", detail: "Manual: 2 hrs/week × $75/hr engineer = $7,800/yr. Automation: 3 weeks × $15K/week = $45K upfront. Breakeven: ~6 years. Not worth it on pure economics." },
                { title: "But Consider Other Factors", detail: "Manual = error-prone, bottleneck if person is sick, doesn't scale. Automation = reliable, scales, frees engineer for higher-value work." },
                { title: "Decision Framework", detail: "If frequency is high AND process is error-sensitive AND you expect it to scale → automate. If it's low-frequency and stable → manual + good documentation." },
                { title: "Recommendation", detail: "Start manual with clear documentation. If frequency increases or errors occur, automate in a future sprint. Don't over-invest upfront in unproven processes." }
              ],
              framework: "Context → Economics → Qualitative Factors → Decision Framework → Recommendation",
              resources: ["The Pragmatic Programmer by Hunt & Thomas", "XKCD 'Is It Worth the Time?' chart"]
            },
            {
              question: "Should we build our own recommendation engine or use a third-party solution?",
              difficulty: 2,
              tags: ["trade-offs", "build-vs-buy", "ML", "strategy", "architecture"],
              tips: [
                "Frame as a product decision, not just a technical one",
                "Consider long-term strategic implications, not just speed",
                "Think about data privacy, competitive advantage, and cost",
                "Show you can weigh engineering input without deferring entirely"
              ],
              steps: [
                { title: "Define Requirements", detail: "What does the recommendation engine need to do? Scale? Customization level? Latency requirements?" },
                { title: "Build Case", detail: "Pros: full control, competitive moat, custom to our data. Cons: 6-12 months to build, ongoing ML team cost, risk of underperforming." },
                { title: "Buy Case", detail: "Pros: fast to market (weeks), proven algorithms, lower upfront cost. Cons: vendor lock-in, data sharing concerns, less customization." },
                { title: "Decision Criteria", detail: "Is recommendations a core differentiator? Do we have ML talent? What's our timeline pressure? Data sensitivity?" },
                { title: "Recommendation", detail: "Start with third-party to validate that recommendations drive value. If proven, build in-house for differentiation. Hedge: abstract the interface." }
              ],
              framework: "Requirements → Build Pros/Cons → Buy Pros/Cons → Criteria → Staged Recommendation",
              resources: ["Build vs Buy analysis frameworks", "a16z on when to build infrastructure"]
            },
            {
              question: "Your engineering team wants to spend an entire quarter rewriting the backend from a monolith to microservices. As PM, how do you evaluate and respond to this request?",
              difficulty: 3,
              tags: ["trade-offs", "tech-debt", "architecture", "engineering", "prioritization"],
              tips: [
                "Don't dismiss engineering concerns — tech debt is real and compounds",
                "But also don't blindly approve — understand the business impact",
                "Ask for the cost of NOT doing it, not just the cost of doing it",
                "Think about incremental approaches vs big-bang rewrites"
              ],
              steps: [
                { title: "Understand the Ask", detail: "Why do they want this? Common reasons: deployment speed is slow, one bug takes down everything, can't scale specific services, developer velocity is suffering." },
                { title: "Quantify the Pain", detail: "Ask: How much time do engineers spend on workarounds today? How many incidents are caused by the monolith? What features are blocked by architecture?" },
                { title: "Quantify the Cost", detail: "Full quarter = ~12 engineer-weeks × team size. Zero new features shipped. Customer commitments delayed. Competitive risk." },
                { title: "Evaluate Alternatives", detail: "Can we strangle the monolith incrementally (extract one service at a time while shipping features)? Can we address the top 3 pain points without a full rewrite?" },
                { title: "Propose a Compromise", detail: "Dedicate 30% of engineering capacity to incremental architecture improvements while maintaining 70% feature velocity. Re-evaluate after 1 quarter." },
                { title: "Decision Framework", detail: "Full rewrite IF: velocity has dropped >50% due to architecture, outages are weekly, hiring is suffering because of tech stack. Incremental IF: it's painful but manageable." }
              ],
              framework: "Understand Ask → Quantify Pain → Quantify Cost → Alternatives → Compromise → Decision Criteria",
              resources: ["An Elegant Puzzle by Will Larson", "The Phoenix Project", "Refactoring by Martin Fowler"]
            }
          ]
        },
        {
          id: "technical-feasibility",
          name: "Technical Feasibility",
          questions: [
            {
              question: "A designer proposes infinite scroll for our e-commerce category pages. What technical considerations should you think about?",
              difficulty: 1,
              tags: ["feasibility", "UX", "web", "performance", "e-commerce"],
              tips: [
                "Infinite scroll has well-known trade-offs — show you know them",
                "Consider performance, SEO, accessibility, and user behavior",
                "Think about what happens to the footer, back button, and URL state",
                "This tests whether you can think about implementation impact on UX"
              ],
              steps: [
                { title: "Performance", detail: "As users scroll, more DOM elements accumulate. After 500+ products, the page gets slow. Need: virtualized rendering (only render visible items) or lazy loading." },
                { title: "SEO Impact", detail: "Search engines may not crawl infinite scroll content. Need: paginated URL fallback (page=1, page=2) or proper structured data so Google indexes all products." },
                { title: "User Experience Issues", detail: "Can't bookmark a position. Back button doesn't return to scroll position. Footer is unreachable. Users lose sense of 'how many products are there.'" },
                { title: "Accessibility", detail: "Screen readers struggle with dynamically loaded content. Need: ARIA live regions, keyboard navigation support, 'Load More' button alternative." },
                { title: "Recommendation", detail: "Hybrid approach: show 48 products initially, 'Load More' button (not auto-infinite), update URL with page parameter. Preserves UX and technical sanity." }
              ],
              framework: "Performance → SEO → UX → Accessibility → Recommendation",
              resources: ["Web.dev performance guides", "Nielsen Norman Group on infinite scroll", "WCAG accessibility guidelines"]
            },
            {
              question: "The marketing team wants to add real-time personalization to our website — different content for every visitor. How do you assess what's feasible?",
              difficulty: 2,
              tags: ["feasibility", "personalization", "web", "data", "marketing"],
              tips: [
                "Real-time personalization has levels — don't assume they need the most complex version",
                "Think about what data you currently have vs what you'd need to collect",
                "Consider privacy regulations (GDPR, CCPA) as a constraint",
                "Evaluate build vs buy — many third-party tools do this"
              ],
              steps: [
                { title: "Clarify Requirements", detail: "What do they mean by personalization? A) Different hero banner by segment. B) Product recommendations. C) Fully dynamic page layout per user. Complexity varies 10x." },
                { title: "Data Assessment", detail: "What do we know about visitors? Logged-in: purchase history, preferences. Anonymous: location, device, referral source, browsing behavior. This determines what's possible." },
                { title: "Technical Options", detail: "Level 1: Segment-based (5-10 segments, rules engine). Level 2: ML-based recommendations (needs data pipeline). Level 3: Real-time per-user (needs edge computing, session data)." },
                { title: "Privacy & Compliance", detail: "GDPR consent for tracking. Cookie deprecation impacts anonymous personalization. First-party data strategy becomes critical." },
                { title: "Build vs Buy", detail: "Third-party (Optimizely, Dynamic Yield): fast, expensive ($50K+/yr). Build: full control but 3-6 month investment. Hybrid: buy for experiments, build for core recommendations." },
                { title: "Recommendation", detail: "Start with Level 1 (segment-based) using existing analytics data. Prove ROI. Then invest in ML-based recommendations. Skip Level 3 unless you're Amazon-scale." }
              ],
              framework: "Clarify → Data Audit → Technical Options → Privacy → Build vs Buy → Phased Recommendation",
              resources: ["Personalization at Scale (Reforge)", "GDPR compliance guides", "Dynamic Yield case studies"]
            },
            {
              question: "A stakeholder wants real-time language translation in our video calling app. How do you assess feasibility?",
              difficulty: 3,
              tags: ["feasibility", "AI", "real-time", "video", "complex", "infrastructure"],
              tips: [
                "Don't say 'yes' or 'no' immediately — show how you'd investigate",
                "Consider both technical and product constraints",
                "Think about degraded experiences and MVPs",
                "Show you know how to have productive conversations with engineers"
              ],
              steps: [
                { title: "Clarify Requirements", detail: "Which languages? What latency is acceptable? Text overlay or voice dubbing? How many participants?" },
                { title: "Technical Landscape", detail: "Speech-to-text (mature) → translate (mature) → text-to-speech (mature). The challenge is latency and quality in chain." },
                { title: "Feasibility Assessment", detail: "Discuss with ML and infra engineers: current latency of our speech pipeline, available APIs (Google, Azure, Whisper), cost per minute." },
                { title: "MVP Definition", detail: "Start with real-time captions in translated language (no voice dubbing). Support top 5 languages. Accept 2-3 second delay." },
                { title: "Risks & Constraints", detail: "Latency may break conversational flow. Accuracy in domain-specific jargon. Cost at scale. Privacy of processing speech through third-party." }
              ],
              framework: "Clarify → Landscape → Assess with Eng → MVP → Risks",
              resources: ["Working Backwards (Amazon's approach)", "The Product Manager's Guide to Technical Debt"]
            }
          ]
        }
      ]
    },
    {
      id: "execution",
      name: "Execution / Delivery",
      subcategories: [
        {
          id: "roadmap-planning",
          name: "Roadmap Planning",
          questions: [
            {
              question: "How do you decide what goes on your product roadmap?",
              difficulty: 1,
              tags: ["roadmap", "planning", "prioritization", "process"],
              tips: [
                "Show you have a repeatable process, not ad hoc decision-making",
                "Mention multiple input sources (data, customers, stakeholders, strategy)",
                "Demonstrate you balance short-term wins with long-term bets",
                "Show you communicate the roadmap differently to different audiences"
              ],
              steps: [
                { title: "Gather Inputs", detail: "Company strategy and OKRs, customer feedback and requests, usage data and metrics, competitive intelligence, engineering needs (tech debt), sales/CS input." },
                { title: "Organize by Theme", detail: "Group ideas into themes: Growth, Retention, Revenue, Quality/Reliability, Platform/Infra. Ensures balance across business needs." },
                { title: "Prioritize", detail: "Score using RICE or similar. Validate with stakeholders. Ensure top items align with company's #1 priority this quarter." },
                { title: "Define Time Horizons", detail: "Now (this sprint): committed, high-confidence. Next (this quarter): planned, medium-confidence. Later (6+ months): directional, exploratory." },
                { title: "Communicate", detail: "Eng team: detailed with specs. Leadership: outcome-focused with metrics. Sales: customer-facing features with timelines. External: thematic, no dates." }
              ],
              framework: "Inputs → Themes → Prioritize → Time Horizons → Communicate",
              resources: ["Product Roadmaps Relaunched by Lombardo", "Intercom on Product Management"]
            },
            {
              question: "How would you plan the product roadmap for a fintech startup's mobile app for the next quarter?",
              difficulty: 2,
              tags: ["roadmap", "fintech", "startup", "quarterly-planning", "mobile"],
              tips: [
                "Ask clarifying questions about company stage, goals, and constraints",
                "Show how you balance quick wins with strategic bets",
                "Demonstrate stakeholder communication in roadmap planning",
                "Think about dependencies and sequencing"
              ],
              steps: [
                { title: "Gather Inputs", detail: "Company goals for the quarter, customer feedback themes, tech debt priorities, competitive pressures, regulatory requirements." },
                { title: "Theme the Work", detail: "Group into themes: Growth (acquisition features), Retention (engagement), Revenue (monetization), Foundation (reliability/infra)." },
                { title: "Prioritize", detail: "Use RICE or ICE scoring. Ensure balance: 60% core product improvements, 20% growth bets, 20% tech debt/foundation." },
                { title: "Sequence & Dependencies", detail: "What must ship first to unblock later work? What has external dependencies (partnerships, compliance approvals)?" },
                { title: "Communicate", detail: "Create roadmap views for different audiences: detailed for eng, thematic for execs, outcome-focused for sales." }
              ],
              framework: "Inputs → Themes → Prioritize (RICE) → Sequence → Communicate",
              resources: ["Product Roadmaps Relaunched by Lombardo", "Intercom on Product Management", "ProductPlan roadmap guides"]
            },
            {
              question: "You're a new PM at a company with no existing product roadmap. Engineering is working on whatever stakeholders shout loudest about. How do you establish a roadmap process from scratch?",
              difficulty: 3,
              tags: ["roadmap", "process", "change-management", "new-role", "organizational"],
              tips: [
                "This is a change management problem, not just a planning problem",
                "You need to earn the right to set the roadmap — you can't just mandate it",
                "Start by listening and understanding the current pain before proposing solutions",
                "Quick wins build credibility for larger process changes"
              ],
              steps: [
                { title: "Listen First (Week 1-2)", detail: "Talk to every stakeholder: what are they working on, why, who asked for it? Talk to engineers: what are they building, what frustrates them? Map the current state." },
                { title: "Identify Quick Wins (Week 2-3)", detail: "Find the most painful symptom: conflicting priorities, context switching, unfinished work. Fix one visible problem to build credibility." },
                { title: "Draft a Lightweight Roadmap (Week 3-4)", detail: "Based on what you've learned, draft a Now/Next/Later roadmap. Share with eng lead and key stakeholders individually BEFORE a group meeting." },
                { title: "Establish Intake Process", detail: "Create a simple request form. All new requests go through it. Weekly 30-min triage with eng lead. This stops the 'shout loudest' pattern." },
                { title: "Monthly Roadmap Review", detail: "Monthly stakeholder meeting: show what shipped, what's next, what's being deprioritized and why. Transparency reduces hallway lobbying." },
                { title: "Iterate the Process", detail: "Start simple. Add scoring frameworks (RICE) in month 2. Add quarterly planning in month 3. Don't over-process on day one — earn trust first." }
              ],
              framework: "Listen → Quick Win → Draft Roadmap → Intake Process → Review Cadence → Iterate",
              resources: ["The First 90 Days by Michael Watkins", "Escaping the Build Trap by Melissa Perri", "Product Roadmaps Relaunched"]
            }
          ]
        },
        {
          id: "prioritization",
          name: "Prioritization",
          questions: [
            {
              question: "How do you say 'no' to a feature request from an important customer?",
              difficulty: 1,
              tags: ["prioritization", "customer", "communication", "saying-no"],
              tips: [
                "Saying no is one of the most important PM skills",
                "Never say 'no' without explaining the why and offering an alternative",
                "Show empathy for the customer's need even when declining",
                "Distinguish between 'no, never' and 'not now'"
              ],
              steps: [
                { title: "Listen & Understand", detail: "First, truly understand the request. What problem are they trying to solve? The stated feature might not be the real need." },
                { title: "Validate the Need", detail: "Acknowledge: 'I understand why this is important to you. Let me share how we're thinking about it.'" },
                { title: "Explain the Why", detail: "Be transparent: 'We're prioritizing X because it addresses the same pain point for 80% of users' or 'It conflicts with our architectural direction.'" },
                { title: "Offer Alternatives", detail: "Workaround, existing feature they might not know about, timeline for when it might be reconsidered, or a different solution to their underlying problem." },
                { title: "Follow Up", detail: "Log the request. If multiple customers ask for the same thing, it changes the priority. Circle back if plans change." }
              ],
              framework: "Listen → Validate → Explain → Alternative → Follow Up",
              resources: ["Inspired by Marty Cagan", "The Art of Saying No (PM articles)"]
            },
            {
              question: "You have four feature requests: improve search, add dark mode, build integrations, and fix onboarding. You can only do two this quarter. How do you choose?",
              difficulty: 2,
              tags: ["prioritization", "RICE", "trade-offs", "quarterly-planning"],
              tips: [
                "Don't just pick based on gut — show a structured framework",
                "Ask what the company's current top goal is (growth? retention? revenue?)",
                "Consider effort vs impact explicitly",
                "Explain why you're NOT doing the others — deprioritization is a skill"
              ],
              steps: [
                { title: "Clarify Goals", detail: "What's the company's #1 priority? If growth → onboarding and search matter most. If retention → integrations and dark mode." },
                { title: "Score Each", detail: "Apply RICE: Reach (how many users affected), Impact (how much it moves the metric), Confidence (how sure are we), Effort (eng weeks)." },
                { title: "Example Scoring", detail: "Assuming growth goal: Fix onboarding (high reach, high impact, high confidence) > Improve search (high reach, medium impact) > Integrations > Dark mode." },
                { title: "Decision", detail: "Pick: Fix onboarding + Improve search. Together they address the full new-user funnel (arrive → search → find value)." },
                { title: "Communicate Deprioritization", detail: "Tell dark mode requesters: 'Not now, but Q2.' Tell integration partners: 'We're building the foundation now that makes integrations better later.'" }
              ],
              framework: "RICE Scoring aligned to company goals",
              resources: ["Intercom's RICE framework guide", "The Art of Saying No (PM blog posts)", "Escaping the Build Trap by Melissa Perri"]
            },
            {
              question: "Your CEO wants Feature A (revenue-driving), your biggest customer is threatening to churn without Feature B, and engineering says they need to address critical tech debt (C) or the system will start failing. You have capacity for 1.5 of the three. How do you prioritize?",
              difficulty: 3,
              tags: ["prioritization", "conflicting-demands", "executive", "trade-offs", "crisis"],
              tips: [
                "This tests how you handle impossible trade-offs with multiple powerful stakeholders",
                "Don't try to do all three poorly — commit to a clear decision",
                "Show you can quantify the cost of each option and the cost of NOT doing each",
                "Demonstrate how you'd communicate the decision to each stakeholder"
              ],
              steps: [
                { title: "Quantify Each Option", detail: "Feature A: how much revenue? When? Feature B: how much ARR at risk of churn? Is the threat real? Tech debt C: what's the failure probability and blast radius?" },
                { title: "Assess Urgency vs Importance", detail: "Tech debt C: if 'system will fail' is imminent (weeks), this is non-negotiable — everything else becomes irrelevant if the product is down. Validate timeline with eng." },
                { title: "Evaluate Feature B Threat", detail: "Is the customer bluffing? What's their switching cost? Can we offer a timeline commitment or partial solution to retain them for one quarter?" },
                { title: "Proposed Allocation", detail: "If tech debt is critical: 50% eng on tech debt (C), 50% on the higher-ROI feature. Buy time on the other with communication and partial solutions." },
                { title: "Stakeholder Communication", detail: "CEO: 'Feature A is high priority. Here's why we need to address C first — if the system fails, Feature A's revenue goes to zero. We'll start A in 4 weeks.' Customer: 'Feature B is on our roadmap for Q2. Here's a workaround for now.'" },
                { title: "Framework", detail: "Prioritize: existential risk first (don't let the house burn down), then highest ROI, then relationship management for the rest." }
              ],
              framework: "Quantify → Urgency Assessment → Threat Validation → Allocation → Communication → Decision Principle",
              resources: ["Radical Candor by Kim Scott", "Escaping the Build Trap by Melissa Perri", "The Hard Thing About Hard Things by Ben Horowitz"]
            }
          ]
        },
        {
          id: "launch-planning",
          name: "Launch Planning",
          questions: [
            {
              question: "What are the key steps to launch a new feature in a mobile app?",
              difficulty: 1,
              tags: ["launch", "mobile", "process", "checklist"],
              tips: [
                "Show you think about launches holistically — not just 'push the code'",
                "Consider all teams involved: eng, design, QA, marketing, support, legal",
                "Think about what could go wrong and how to handle it",
                "Mention monitoring and iteration after launch"
              ],
              steps: [
                { title: "Pre-Launch Preparation", detail: "Feature complete + QA tested. App store screenshots updated if needed. Support docs written. CS team briefed on new feature and FAQs." },
                { title: "Soft Launch", detail: "Feature flag to 5-10% of users. Monitor crash rates, error logs, support tickets. Collect early user feedback." },
                { title: "Go/No-Go Checklist", detail: "No critical bugs. Error rate below threshold. Performance acceptable. Support team ready. Marketing materials approved." },
                { title: "Full Launch", detail: "Roll out to 100%. Trigger in-app announcement or tooltip. App store release notes updated. Marketing email or social post." },
                { title: "Post-Launch", detail: "Monitor metrics daily for 2 weeks. Triage user feedback and bugs. Share launch results with team. Plan iteration based on learnings." }
              ],
              framework: "Pre-Launch → Soft Launch → Go/No-Go → Full Launch → Post-Launch",
              resources: ["Feature flag best practices (LaunchDarkly)", "Mobile app launch checklists"]
            },
            {
              question: "Walk me through how you would plan and execute the launch of a new payments feature.",
              difficulty: 2,
              tags: ["launch", "payments", "fintech", "compliance", "cross-functional"],
              tips: [
                "Show you think about launches as cross-functional orchestration",
                "Consider risk mitigation (phased rollout, rollback plans)",
                "Don't forget post-launch monitoring and iteration",
                "Mention regulatory/compliance considerations for payments"
              ],
              steps: [
                { title: "Pre-Launch (4-6 weeks out)", detail: "Define launch criteria, get legal/compliance sign-off, write support docs, brief CS team, prepare rollback plan." },
                { title: "Beta/Soft Launch", detail: "5% rollout to internal users → 10% to low-risk segment. Monitor error rates, support tickets, completion rates." },
                { title: "Go/No-Go Decision", detail: "Review beta metrics against launch criteria. All critical bugs resolved? Error rate < threshold? CS team ready?" },
                { title: "Full Launch", detail: "Gradual rollout: 25% → 50% → 100% over 1 week. Marketing announcement. Sales enablement materials distributed." },
                { title: "Post-Launch (2 weeks)", detail: "Daily metric review. Bug triage. Customer feedback synthesis. Retro with the team. Plan v1.1 iteration." }
              ],
              framework: "Pre-launch → Beta → Go/No-Go → Gradual Rollout → Post-launch",
              resources: ["The Launch Darkly blog on feature flags", "First Round Review launch playbooks"]
            },
            {
              question: "You're launching a product that replaces an existing one with 50,000 active users. How do you manage the migration without losing users?",
              difficulty: 3,
              tags: ["launch", "migration", "risk", "legacy", "change-management"],
              tips: [
                "Migration launches are among the hardest PM challenges",
                "Users hate change — even if the new product is objectively better",
                "Think about data migration, feature parity, and communication",
                "The biggest risk is users leaving during the transition window"
              ],
              steps: [
                { title: "Feature Parity Audit", detail: "Map every feature in the old product. Categorize: must-have in v1, can-add-later, intentionally-removed. Zero surprises — users will notice missing features." },
                { title: "Data Migration Plan", detail: "All user data, settings, history must transfer seamlessly. Build migration tools. Test with internal users first. Provide rollback capability." },
                { title: "Communication Strategy", detail: "6 weeks out: announce the change and why. 4 weeks: early access opt-in for power users. 2 weeks: tutorials and walkthroughs. Launch day: in-app guided tour." },
                { title: "Phased Migration", detail: "Week 1: opt-in (enthusiasts). Week 2-3: new users go to new product. Week 4-6: existing users migrated in cohorts with ability to switch back. Week 8: old product sunset." },
                { title: "Safety Nets", detail: "'Switch back to classic' button for 30 days. Dedicated migration support channel. Daily monitoring of churn, support tickets, and usage patterns." },
                { title: "Success Criteria", detail: "< 2% user churn during migration. Support ticket volume returns to baseline within 3 weeks. New product usage metrics meet or exceed old product within 6 weeks." }
              ],
              framework: "Parity Audit → Data Migration → Communication → Phased Rollout → Safety Nets → Success Criteria",
              resources: ["Continuous Discovery Habits by Teresa Torres", "Change management frameworks (ADKAR)", "Gmail/Google Workspace migration case studies"]
            }
          ]
        },
        {
          id: "scoping-requirements",
          name: "Scoping & Requirements",
          questions: [
            {
              question: "Write the requirements for a 'save for later' feature on an e-commerce app.",
              difficulty: 1,
              tags: ["scoping", "requirements", "e-commerce", "user-stories", "feature"],
              tips: [
                "Think about user stories, not just feature specs",
                "Consider edge cases (what happens when saved item goes out of stock?)",
                "Define what's in v1 vs what's deferred",
                "Include acceptance criteria that are testable"
              ],
              steps: [
                { title: "User Stories", detail: "As a shopper, I want to save items I'm not ready to buy so I can find them easily later." },
                { title: "Core Requirements", detail: "Save button on product pages. Saved items page accessible from nav. Remove from saved. Move to cart from saved list." },
                { title: "Edge Cases", detail: "Item goes out of stock → show 'unavailable' badge. Price changes → show updated price with 'price dropped/increased' indicator." },
                { title: "V1 Scope", detail: "IN: save/unsave, saved list, stock status. OUT: price alerts, sharing saved lists, folder organization." },
                { title: "Acceptance Criteria", detail: "Saved items persist across sessions. Max 200 saved items. Syncs across devices. Loading time < 2s for up to 50 items." }
              ],
              framework: "User Stories → Requirements → Edge Cases → Scope (In/Out) → Acceptance Criteria",
              resources: ["User Story Mapping by Jeff Patton", "Writing effective PRDs (Lenny's Newsletter)"]
            },
            {
              question: "A sales team asks for a 'bulk import' feature so enterprise customers can upload their data via CSV. Scope the requirements.",
              difficulty: 2,
              tags: ["scoping", "requirements", "B2B", "enterprise", "data-import"],
              tips: [
                "CSV import sounds simple but hides enormous complexity",
                "Think about: validation, error handling, duplicate detection, large files, permissions",
                "Enterprise customers have messy data — your system must handle it gracefully",
                "Define the happy path AND the failure paths"
              ],
              steps: [
                { title: "User Stories", detail: "As an enterprise admin, I want to upload a CSV of 10,000 contacts so I don't have to enter them one by one. As a user, I want clear feedback on what imported and what failed." },
                { title: "Happy Path Requirements", detail: "Upload CSV (up to 100K rows). Map CSV columns to system fields. Preview first 10 rows before importing. Progress indicator during import." },
                { title: "Error Handling", detail: "Validation: required fields, data formats (email, phone), character limits. Per-row errors: show which rows failed and why. Allow downloading error report CSV." },
                { title: "Edge Cases", detail: "Duplicate detection: match by email? Name? Let user choose. Partial failure: import valid rows, skip invalid. Large files: async processing with email notification when done." },
                { title: "V1 Scope", detail: "IN: CSV upload, column mapping, validation, error report, duplicate skip. OUT: scheduled imports, API-based import, undo/rollback, multi-file upload." },
                { title: "Acceptance Criteria", detail: "10K rows import in < 60 seconds. 100K rows import async with notification. Error report downloadable. Zero data corruption on failure." }
              ],
              framework: "User Stories → Happy Path → Error Handling → Edge Cases → Scope → Acceptance Criteria",
              resources: ["User Story Mapping by Jeff Patton", "B2B SaaS product management guides"]
            },
            {
              question: "You're tasked with building a permissions and roles system for a B2B SaaS product that currently has no access controls. Scope the v1.",
              difficulty: 3,
              tags: ["scoping", "requirements", "B2B", "enterprise", "security", "permissions", "complex"],
              tips: [
                "Permissions systems are notoriously complex — show you can scope ruthlessly",
                "Enterprise customers will block deals without this — understand urgency",
                "Think about the admin experience, not just the technical model",
                "The biggest risk is over-scoping v1 and shipping nothing"
              ],
              steps: [
                { title: "Business Context", detail: "Why now? Likely: enterprise deals blocked, compliance requirements, or current 'everyone can do everything' is causing data incidents. This determines urgency and scope." },
                { title: "Research Competitors", detail: "How do Notion, Figma, Slack handle roles? Common pattern: Admin, Member, Viewer. Some add custom roles. Start simple." },
                { title: "V1 Roles", detail: "Three roles only: Owner (full control, billing), Admin (manage users, all features), Member (use features, no admin). Custom roles = v2." },
                { title: "V1 Permissions Matrix", detail: "Define per feature: who can view, create, edit, delete. Keep it coarse-grained (feature-level, not record-level). Example: Members can create projects but not delete them." },
                { title: "Admin Experience", detail: "Admin panel: invite users, assign roles, view audit log of role changes. Bulk operations (change 20 users from Admin to Member). Clear UI showing who has what access." },
                { title: "V1 Out of Scope", detail: "OUT: custom roles, field-level permissions, API key scoping, SSO-based role mapping, time-limited access, approval workflows. Each of these could be a quarter of work." },
                { title: "Migration Plan", detail: "All existing users become Admins. Prompt account owner to review and downgrade as needed. No one loses access during migration." }
              ],
              framework: "Business Context → Research → V1 Roles → Permissions Matrix → Admin UX → Out of Scope → Migration",
              resources: ["Enterprise-ready SaaS guide (enterpriseready.io)", "Role-based access control (RBAC) design patterns", "User Story Mapping by Jeff Patton"]
            }
          ]
        }
      ]
    }
  ]
};
