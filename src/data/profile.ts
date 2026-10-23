// Single source of truth for all portfolio content.
// Update this file when the resume / activity list changes.

export const profile = {
  name: "Devyansh Garg",
  tagline: "Math Mentalist. App Developer. Published Researcher.",
  intro:
    "I test conjectures about prime numbers on billions of data points, build health software that rural clinics actually use, and perform math magic where every trick comes with a proof.",
  school: "The Shri Ram School, Moulsari Avenue",
  location: "Gurugram, India",
  email: "gargdevyansh10@gmail.com",
  phone: "+91 81787 02563",
  github: "https://github.com/Devonkedev",
  youtube: "https://www.youtube.com/channel/UC7Dh2LP24J_oDnBc6l5OM2g",
  about: [
    "I like questions where a clean idea runs into messy data. In number theory, that means taking a conjecture about primes, generating billions of them, and finding exactly where theory and reality part ways, and why. In Lean, it means writing proofs precise enough that a computer can check every step.",
    "I also care whether the math leaves the page. MediPing, the app I built for ASHA community health workers, now has 500+ users across 12 villages, and missed doses have dropped by 30%. I wrote Money Mechanics at 13 to make personal finance less intimidating for people my age, and every week I teach olympiad math to students in five countries.",
  ],
};

export const threads = [
  {
    label: "Research",
    title: "Prime numbers, at scale",
    detail: "3 published papers · 4.1B primes sieved · proofs formalized in Lean",
    path: "/research",
  },
  {
    label: "Build",
    title: "Software with real users",
    detail: "MediPing on the App Store & Google Play · 500+ users in 12 villages",
    path: "/projects",
  },
  {
    label: "Teach",
    title: "Math for everyone",
    detail: "20+ olympiad students in 5+ countries · ₹1.75L raised for STEM",
    path: "/leadership",
  },
];

export const venues = ["IJMTT", "NHSJS", "IRJET", "Academic Foundation"];

export const stats = [
  { value: "4", label: "Publications", note: "3 papers · 1 book" },
  { value: "1550", label: "SAT", note: "790 Math" },
  { value: "500+", label: "Users on MediPing", note: "7 clinics · 12 villages" },
  { value: "4.1B", label: "Primes sieved", note: "for the LOS-bias study" },
];

export type Publication = {
  title: string;
  venue: string;
  venueShort: string;
  date: string;
  kind: "Paper" | "Book";
  role: string;
  summary: string;
  findings: string[];
  tags: string[];
  link?: string;
  linkLabel?: string;
};

export const publications: Publication[] = [
  {
    title: "Measuring the Second-Order Constants of the Lemke Oliver–Soundararajan Bias Across Prime Moduli",
    venue: "International Journal of Mathematics Trends and Technology",
    venueShort: "IJMTT",
    date: "May 2025 – Oct 2026",
    kind: "Paper",
    role: "Author · mentored by Dr. Mittal (Princeton PhD)",
    summary:
      "Consecutive primes \"avoid\" repeating their last digit more often than chance predicts. I tested the 2016 Lemke Oliver–Soundararajan prediction for that bias against real data.",
    findings: [
      "Sieved 4.1 billion primes across several prime moduli",
      "Theory matched the data closely at small scales (r = 0.975)",
      "Traced the larger mismatches to the limited range of the data, not to the theory",
    ],
    tags: ["Analytic number theory", "Computation"],
  },
  {
    title: "Computational Analysis of Prime Gaps: Testing Cramér's and Hardy–Littlewood's Conjectures on Finite Ranges",
    venue: "National High School Journal of Science",
    venueShort: "NHSJS",
    date: "Sept 2025 – Oct 2026",
    kind: "Paper",
    role: "Author",
    summary:
      "An empirical test of two classical conjectures about the gaps between consecutive primes.",
    findings: [
      "Analyzed the first 25 million primes",
      "Gaps such as 6 and 30 occur more often, as Hardy–Littlewood predicts",
      "Unusually large gaps become rarer as numbers grow, consistent with Cramér's model",
    ],
    tags: ["Number theory", "Data analysis"],
    link: "https://nhsjs.com/2026/computational-analysis-of-prime-gaps-testing-cramers-and-hardy-littlewoods-conjectures-on-finite-ranges/",
    linkLabel: "Read the paper",
  },
  {
    title: "Predicting COVID-19 Hotspots Using Google Trends: A Correlation Analysis of Search Terms and Case Data in India",
    venue: "International Research Journal of Engineering & Technology",
    venueShort: "IRJET",
    date: "Apr 2025 – Jun 2025",
    kind: "Paper",
    role: "Sole author · independent study",
    summary:
      "Can people's search behaviour warn of an outbreak before case counts do? I modeled Google search volume as a leading indicator of COVID-19 cases.",
    findings: [
      "Lagged cross-correlation on 2020–21 data from 5 Indian states",
      "Improved forecast accuracy by 12%",
      "Recognised with a CREST Gold Award (British Science Association)",
    ],
    tags: ["Epidemiology", "Time series"],
    link: "https://www.irjet.net/archives/V12/i6/IRJET-V12I6182.pdf",
    linkLabel: "Read the paper",
  },
  {
    title: "Money Mechanics: Youthful Financial Freedom",
    venue: "Academic Foundation, 2024",
    venueShort: "Book",
    date: "Jan 2023 – Feb 2024",
    kind: "Book",
    role: "Author · published at 13",
    summary:
      "A financial-literacy book for young readers. It starts with needs versus wants and works up to building a portfolio.",
    findings: [
      "Covers compounding, the time value of money, and risk versus return",
      "Endorsed by Indian Revenue officers",
      "Adopted by 8 education NGOs reaching about 23,000 students",
    ],
    tags: ["Finance", "Writing"],
    link: "https://www.amazon.in/Money-Mechanics-Youthful-Financial-Freedom/dp/9332706298",
    linkLabel: "View on Amazon",
  },
];

export type Project = {
  name: string;
  role: string;
  summary: string;
  impact: { value: string; label: string }[];
  stack?: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    name: "MediPing",
    role: "Founder & Lead Developer · design to deployment",
    summary:
      "A medication-adherence app for rural ASHA (community health) workers, patients and clinics. Caregivers use it to track doses and check-ups for the patients they look after.",
    impact: [
      { value: "−30%", label: "missed doses" },
      { value: "500+", label: "users" },
      { value: "7", label: "clinics" },
      { value: "12", label: "villages" },
    ],
    stack: ["Flutter", "Dart", "iOS", "Android"],
    links: [
      { label: "Google Play", href: "https://play.google.com/store/search?q=MediPing&c=apps&hl=en_IN" },
      { label: "App Store", href: "https://apps.apple.com/in/app/mediping-2-0/id6763136099" },
    ],
  },
  {
    name: "Math Magic Mindsets",
    role: "Performer, Host & Producer",
    summary:
      "A 12-routine math-mentalism act in which every trick comes with a modular-arithmetic proof, drawing on Zeller's congruence and faro-shuffle permutations in S₅₂. It also runs as a podcast and YouTube channel that aims to get people interested in math.",
    impact: [
      { value: "12", label: "routines" },
      { value: "8", label: "shows" },
    ],
    links: [{ label: "YouTube", href: "https://www.youtube.com/channel/UC7Dh2LP24J_oDnBc6l5OM2g" }],
  },
];

export const programs = [
  {
    title: "Mathematics in Lean",
    org: "Euler's Circle",
    date: "Jun – Aug 2026",
    desc: "Under Dr. Felix Sefzig, proved multiple theorems and formalized them in Lean so a computer checks every step.",
  },
  {
    title: "University-Level Linear Algebra",
    org: "Stanford University (Online)",
    date: "Jun – Aug 2026",
    desc: "Under Dr. Margarita Kanarsky, a university-level, college-credit linear algebra course. Final grade: A.",
  },
  {
    title: "Number Theory: An Introduction to Higher Mathematics",
    org: "Summer @ Brown",
    date: "Jun – Jul 2025",
    desc: "Under Brown Professor Dr. Mehdi Khor, a pre-college course on number theory and how proofs work in higher mathematics.",
  },
  {
    title: "Transition to Proofs",
    org: "Euler's Circle",
    date: "Sept – Dec 2024",
    desc: "One of 30 students worldwide, taught by Stanford PhD Simon Rubinstein-Salzedo, on a 25% scholarship. Proved modular arithmetic and gcd theorems.",
  },
  {
    title: "AI Scholars Program",
    org: "Inspirit AI",
    date: "Jul 2024",
    desc: "A hands-on machine-learning program with guided projects.",
  },
  {
    title: "Tech4Change Challenge: Advanced Bootcamp",
    org: "Lodha Tech4Change · Intel AI for Youth",
    date: "Feb – May 2024",
    desc: "Selected for the advanced round. Our team built a statistical AI model that predicts forest fires from environmental parameters.",
  },
  {
    title: "Tech4Change Challenge: Beginner Bootcamp",
    org: "Lodha Tech4Change",
    date: "Nov 2023 – Jan 2024",
    desc: "Learned AI fundamentals and wrote a team synopsis proposing AI-based forest-fire prediction.",
  },
  {
    title: "Young Technology Scholars",
    org: "Plaksha University",
    date: "Jun 2023",
    desc: "Covered Python, Arduino, microcontrollers and circuits. I built four games: Tic Tac Toe, Ping Pong, Maze and the Game of Nim.",
  },
];

export const leadership = [
  {
    org: "We Love STEM",
    orgNote: "US-registered 501(c)(3) student-run STEM nonprofit, founded 2019",
    role: "Co-Founder & Director, Leonhard Euler Math Chapter",
    period: "Ongoing",
    points: [
      "Design and teach a weekly olympiad curriculum covering number theory, geometry, combinatorics and algebra",
      "Teach 20+ middle-school students across 5+ countries; also handle logistics as admin",
      "2 students placed in the top 5% on the AMC 8",
    ],
    metric: { value: "20+", label: "students, 5+ countries" },
  },
  {
    org: "Megabyte Society, The Shri Ram School",
    orgNote: "The school's technology society",
    role: "Head (Member in Grade 9 & 10, Secretary in Grade 11)",
    period: "Grade 9 – present",
    points: [
      "Headed ShriTeq, the inter-school tech fest: 10 events and about 2,000 attendees",
      "Designed AI Week (cybersafety and AI fluency) and a 50-hour Crypt Hunt where AI use was allowed",
      "Run weekly sessions on programming and AI literacy; commended by the Dean of School",
    ],
    metric: { value: "2,000", label: "ShriTeq attendees" },
  },
  {
    org: "Sapno Ke Pankh (‘Wings of Dreams’)",
    orgNote: "NGO schooling primary-grade children",
    role: "STEM Tutor & Library Fundraiser",
    period: "Since 2020",
    points: [
      "Turned my stage routines into mental-arithmetic drills for Grades 1–5",
      "Raised INR 1,75,000 to pay for olympiad prep and resources at the State Library",
    ],
    metric: { value: "₹1.75L", label: "raised" },
  },
  {
    org: "STEAM IT Foundation",
    orgNote: "Nonprofit delivering STEM education programs to school students in 12 states",
    role: "Founder's Office · Software Engineering Intern (Web)",
    period: "Internship",
    points: [
      "Sole developer of the foundation's first website, with a responsive, semantic layout",
      "Raised the site's accessibility score from 61 to 96",
      "Built the program-application flow and deployed it on the foundation's live domain",
    ],
    metric: { value: "61→96", label: "accessibility score" },
    link: { label: "steamit.org", href: "https://www.steamit.org/" },
  },
];

export const featuredAwards = [
  {
    title: "AMC 10 Distinction & AIME Qualifier",
    detail: "Also IOQM Distinction (top 10%) and Rank 1 in the Cathedral Math Competition",
  },
  {
    title: "John Locke Institute Essay Competition: High Commendation",
    detail: "Science & Technology category, top 0.875% of entrants",
  },
  {
    title: "CREST Gold Award",
    detail: "British Science Association, for MediPing and the COVID hotspot research",
  },
  {
    title: "School Top Honors",
    detail: "Innovator Award for MediPing. Prayukti Award for Lateral Thinking (4 yrs), Triveni Award for Co-Curricular Activities, Srijan Award for CAS",
  },
  {
    title: "10 podium finishes in inter-school tech competitions",
    detail: "Led teams of 1–5 against 30+ schools, including 1st at Celestra Binary Breakdown",
  },
];

export const mathHonors = [
  { event: "AMC 10", result: "Distinction · AIME Qualifier" },
  { event: "IOQM", result: "Top 10%" },
  { event: "Cathedral Math Competition (CMC)", result: "Rank 1 · Distinction" },
  { event: "CEMC: CIMC, Cayley", result: "Distinction" },
  { event: "Infinity Math: Clash of Mathematicians (Individual)", result: "Gold" },
  { event: "Infinity Math: Pass the Baton (Team)", result: "Runner-up" },
  { event: "Infinity Math: Math Challengers (Zonal, Team)", result: "Runner-up" },
  { event: "Infinity Math (International)", result: "Top 15 team" },
  { event: "International Youth Math Challenge (IYMC)", result: "Featured submission" },
];

export const techPodiums = [
  { place: 1, event: "Celestra Binary Breakdown" },
  { place: 2, event: "ShriTeq CodeCombat", times: 3 },
  { place: 2, event: "ShriTeq Hackathon" },
  { place: 2, event: "TechVViz InoVVate" },
  { place: 2, event: "Tech Syndicate Programming" },
  { place: 2, event: "ShisTech CodeEclipse" },
  { place: 3, event: "ShisTech CodeEclipse" },
  { place: 3, event: "ShisTech Quizzard" },
];

export const tests = [
  { name: "SAT", score: "1550", detail: "790 Math · 760 Reading & Writing", date: "Jun 2025" },
  { name: "AP Calculus BC", score: "5", detail: "out of 5", date: "May 2026" },
  { name: "AP Computer Science A", score: "5", detail: "out of 5", date: "May 2025" },
  { name: "AP Statistics", score: "5", detail: "out of 5", date: "May 2024" },
  { name: "IELTS", score: "8.0", detail: "overall band", date: "Jun 2026" },
];

export const schoolHonors = [
  {
    year: "Grade 11 · 2025–26",
    topper: ["Mathematics AA HL", "Economics HL", "Chemistry SL"],
    excellence: ["Mathematics AA HL", "Economics HL", "Physics HL", "Chemistry SL"],
    awards: ["Prayukti Award for Lateral Thinking", "Srijan Award for CAS"],
  },
  {
    year: "Grade 10 · 2024–25",
    topper: ["International Mathematics"],
    excellence: ["International Mathematics", "Computer Science", "Physics", "Chemistry", "French"],
    awards: ["Prayukti Award for Lateral Thinking", "Triveni Award for Co-curricular Activities"],
  },
  {
    year: "Grade 9 · 2023–24",
    topper: ["International Mathematics", "Computer Science"],
    excellence: ["International Mathematics", "Computer Science", "Business Studies", "Physics", "Chemistry"],
    awards: ["Prayukti Award for Lateral Thinking"],
  },
];

export const education = [
  {
    stage: "IB Diploma Programme",
    years: "2025 – 2027",
    subjects: "Mathematics AA HL, Physics HL, Economics HL, English A: Language & Literature, French B, Chemistry SL",
  },
  {
    stage: "IGCSE",
    years: "2023 – 2025",
    subjects:
      "International & Additional Mathematics, Computer Science, Physics, Chemistry, Economics, Business Studies, English (First Language & Literature), French",
  },
];

export const skills = {
  Programming: ["Python", "Java", "C++", "Flutter", "React JS", "React Native", "Flask", "Pandas", "Web development", "Lean"],
  "Math & Data": ["Number theory", "Proof & formalization", "Statistics", "Time-series analysis"],
  Languages: ["English (fluent)", "Hindi (fluent)", "French (academic)"],
};
