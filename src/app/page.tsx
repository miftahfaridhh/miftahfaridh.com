// ── Data ─────────────────────────────────────────────────────────

const STATS = [
  { n: '07', label: 'Publications' },
  { n: '05', label: "Int'l Awards" },
  { n: '08', label: 'Gov. Projects' },
  { n: '20+', label: 'Open Source' },
]

const EXPERIENCE = [
  { period: 'Oct 2025 – Present',  role: 'Physical AI Engineer',        org: 'orinu.ai',                    location: 'Seoul, South Korea' },
  { period: 'Sep 2022 – Aug 2024', role: 'AI & IoT Researcher',         org: 'Kookmin University',           location: 'Seoul, South Korea' },
  { period: 'Feb – Jun 2022',      role: 'IoT Intern',                  org: 'PT. XL Axiata',               location: 'Jakarta, Indonesia' },
  { period: 'Sep 2021 – Feb 2022', role: 'IT Business Analyst',         org: 'PT. Infomedia Nusantara',     location: 'Jakarta, Indonesia' },
  { period: 'Nov 2018 – Jul 2021', role: 'Vice Head · AI Engineer',     org: 'AMV UI & Tim Robotika UI',    location: 'Depok, Indonesia' },
]

const EDUCATION = [
  { degree: 'M.S. Electronics Engineering', institution: 'Kookmin University',      period: '2022 – 2024', location: 'Seoul' },
  { degree: 'B.S. Computer Engineering',    institution: 'University of Indonesia', period: '2018 – 2022', location: 'Depok', gpa: '3.43' },
]

const SKILLS = [
  { area: 'LLM & Generative AI', items: 'LoRA · QLoRA · RAG · T5 · Gemma · LLaMA · Fine-tuning' },
  { area: 'Robotics',            items: 'ROS 2 · Arduino · Autonomous Systems · Drone Systems · V2X' },
  { area: 'Edge AI',             items: 'NVIDIA Jetson · TensorRT · ONNX · OpenCV · cuDNN' },
  { area: 'Deep Learning',       items: 'CNN · LSTM · GCN · TensorFlow · PyTorch · Scikit-learn' },
  { area: 'Optical Comm.',       items: 'OCC · CSMA/CA · MAC Protocol · Localization · Ultra-High Rate' },
  { area: 'Languages',           items: 'Python · C/C++ · TypeScript · Java · C# · MATLAB · PHP' },
  { area: 'Infrastructure',      items: 'Docker · Linux · Git · GCP · AWS · FastAPI · PostgreSQL' },
]

const PROJECTS = [
  {
    category: 'Edge AI — Jetson',
    items: [
      'Object Detection — YOLO, 80 classes, real-time inference',
      'Face Recognition & Attendance — InsightFace, ArcFace pipeline',
      'PPE Detection — safety compliance monitoring',
      'License Plate Recognition — full ALPR pipeline',
      'Security Analytics — motion detection & intrusion alerts',
      'People Analytics — counting, occupancy, traffic flow',
      'Hand Gesture Recognition — MediaPipe integration',
      'Exercise Tracker — push-ups, squats, planks with rep counting',
    ],
  },
  {
    category: 'AI / ML',
    items: [
      'PV Solar Power Forecasting API — BiLSTM model, Flask deployment',
      'Smart Home Energy Forecasting — LSTM vs ARIMA benchmark',
      'LangGraph Chatbot Playground — multi-agent conversation flows',
    ],
  },
  {
    category: 'IoT',
    items: [
      'Server Room Monitoring — LoRa mesh network, Arduino sensors',
      'Intruder Detection System — OpenCV + Telegram alert integration',
    ],
  },
  {
    category: 'Web',
    items: [
      'VTT Voice-to-Text — Google Cloud Speech API, Laravel backend',
      'TweetBullyingDetector — Twitter API + NLP classification',
      'VeTracker Vehicle Manager — Laravel, Livewire real-time updates',
      'Brocket Tournament Manager — bracket management, Laravel',
    ],
  },
]

const PUBLICATIONS = [
  { venue: 'IEEE Access',   year: '2025', title: 'CSMA/CA MAC Protocol for Optical Camera Communication' },
  { venue: 'MDPI Sensors',  year: '2023', title: 'Intelligent IoT Platform for Real-Time Environmental Monitoring' },
  { venue: 'MDPI Sensors',  year: '2023', title: 'Intelligent IoE Data Research Platform Architecture' },
  { venue: 'ICUFN',         year: '2023', title: 'PV Monitoring and Control System for Grid Stability' },
  { venue: 'ICAIIC',        year: '2023', title: 'Solar Energy Forecasting with Deep Learning' },
  { venue: 'RoboNation',    year: '2021', title: 'Autonomous Surface Vehicle Navigation System' },
  { venue: 'RoboNation',    year: '2019', title: 'Autonomous Boat Control and Navigation' },
]

const AWARDS = [
  { rank: '1st',  name: 'ASEAN MATE ROV — Explorer Category',          scope: 'International' },
  { rank: '3rd',  name: 'AUVSI Roboboat 2021',                         scope: 'International' },
  { rank: '3rd',  name: 'AUVSI Roboboat 2019',                         scope: 'International' },
  { rank: '3rd',  name: 'KKCTBN 2019 — National Robotics Competition', scope: 'National' },
  { rank: 'Best', name: 'Best Poster — KKCTBN 2019',                   scope: 'National' },
]

const GOV_PROJECTS = [
  { title: 'Renewable Energy Grid Stabilization',   agency: 'MOTIE' },
  { title: '5G Multi-Band Industrial Small Cell',    agency: 'MSIT' },
  { title: 'Intelligent IoE Data Research Platform', agency: 'MSIT' },
  { title: 'V2X Quantum AI Triple Sensor OCC',       agency: 'MSIT' },
  { title: 'VPP ESS Service Platform',               agency: 'MSS' },
  { title: 'Ultra High Rate OCC & Localization',     agency: 'MSIT' },
  { title: 'Smart Energy Management System',         agency: 'MOTIE' },
  { title: 'Autonomous Vehicle Sensor Fusion',       agency: 'MSIT' },
]

const SOCIAL = [
  { label: 'GitHub',     url: 'https://github.com/miftahfaridhh',                          handle: 'miftahfaridhh' },
  { label: 'LinkedIn',   url: 'https://linkedin.com/in/muhammadmiftahfaridh',              handle: 'muhammadmiftahfaridh' },
  { label: 'G. Scholar', url: 'https://scholar.google.com/citations?user=okg9J80AAAAJ',   handle: 'Muhammad Miftah Faridh' },
  { label: 'ORCID',      url: 'https://orcid.org/0009-0009-5760-6859',                    handle: '0009-0009-5760-6859' },
]

// ── Helpers ───────────────────────────────────────────────────────

const C = {
  bg:      '#080C14',
  surface: '#0E1520',
  border:  '#1B2840',
  ink:     '#DCE8F8',
  ink2:    '#667A99',
  ink3:    '#2C3D58',
  cyan:    '#22D3EE',
  amber:   '#F59E0B',
} as const

const mono = "var(--font-ibm-mono), 'Courier New', monospace"
const sans = "var(--font-ibm-sans), system-ui, sans-serif"

function Ruler({ num, label }: { num: string; label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '36px' }}>
      <span style={{ fontFamily: mono, fontSize: '11px', color: C.ink3, letterSpacing: '0.1em' }}>
        [{num}]
      </span>
      <div style={{ flex: 1, height: '1px', background: C.border }} />
      <span style={{ fontFamily: mono, fontSize: '10px', color: C.ink2, letterSpacing: '0.14em', textTransform: 'uppercase' as const }}>
        {label}
      </span>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────

export default function Page() {
  const NAV_LINKS = ['experience', 'skills', 'projects', 'publications', 'contact']

  return (
    <div style={{ minHeight: '100vh', background: C.bg, color: C.ink, fontFamily: sans }}>

      {/* Nav */}
      <header style={{ position: 'sticky', top: 0, zIndex: 50, background: C.bg, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', height: 48, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: mono, fontSize: 13, color: C.ink, letterSpacing: '-0.02em' }}>mmf</span>
          <nav style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            {NAV_LINKS.map((s) => (
              <a key={s} href={`#${s}`} style={{ fontFamily: mono, fontSize: 11, color: C.ink2, textDecoration: 'none', letterSpacing: '0.06em' }}>
                {s}
              </a>
            ))}
            <a
              href="https://github.com/miftahfaridhh"
              target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: mono, fontSize: 11, color: C.cyan, border: `1px solid rgba(34,211,238,0.3)`, padding: '4px 10px', textDecoration: 'none' }}
            >
              GitHub ↗
            </a>
          </nav>
        </div>
      </header>

      <main style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>

        {/* Hero */}
        <section style={{ paddingTop: 80, paddingBottom: 64 }}>
          <p style={{ fontFamily: mono, fontSize: 11, color: C.ink3, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 20 }}>
            Physical AI Engineer
          </p>
          <h1 style={{ fontFamily: mono, fontSize: 'clamp(38px,7vw,70px)', color: C.ink, lineHeight: 1.05, letterSpacing: '-0.025em', marginBottom: 16 }}>
            Muhammad<br />Miftah Faridh
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
            <div style={{ height: 1, background: C.border, width: 100 }} />
            <span style={{ fontFamily: mono, fontSize: 11, color: C.ink2 }}>orinu.ai · Seoul, South Korea</span>
          </div>
          <p style={{ fontSize: 15, color: C.ink2, lineHeight: 1.75, maxWidth: 560, marginBottom: 40 }}>
            Building intelligent systems at the intersection of AI, robotics, and edge computing.
            Experienced in LLM fine-tuning, real-time robotic systems (ROS&nbsp;2), and NVIDIA Jetson
            platforms — bridging applied research with production engineering.
          </p>
          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', border: `1px solid ${C.border}`, gap: 1, background: C.border }}>
            {STATS.map(({ n, label }) => (
              <div key={label} style={{ background: C.surface, padding: '20px 18px' }}>
                <p style={{ fontFamily: mono, fontSize: 34, color: C.cyan, letterSpacing: '-0.03em', lineHeight: 1 }}>{n}</p>
                <p style={{ fontFamily: mono, fontSize: 10, color: C.ink3, marginTop: 6, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" style={{ padding: '64px 0', borderTop: `1px solid ${C.border}` }}>
          <Ruler num="01" label="Experience" />
          {EXPERIENCE.map((e) => (
            <div key={e.org} style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 24, padding: '16px 0', borderBottom: `1px solid ${C.border}` }}>
              <p style={{ fontFamily: mono, fontSize: 11, color: C.ink3, lineHeight: 1.6, paddingTop: 2 }}>{e.period}</p>
              <div>
                <p style={{ fontFamily: mono, fontSize: 13, color: C.ink, fontWeight: 500 }}>{e.role}</p>
                <p style={{ fontSize: 13, color: C.ink2, marginTop: 3 }}>
                  {e.org} <span style={{ color: C.ink3 }}>·</span> {e.location}
                </p>
              </div>
            </div>
          ))}
          <div style={{ marginTop: 32, paddingTop: 32, borderTop: `1px solid ${C.border}` }}>
            <p style={{ fontFamily: mono, fontSize: 10, color: C.ink3, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>Education</p>
            {EDUCATION.map((e) => (
              <div key={e.institution} style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 24, padding: '14px 0', borderBottom: `1px solid ${C.border}` }}>
                <p style={{ fontFamily: mono, fontSize: 11, color: C.ink3 }}>{e.period}</p>
                <div>
                  <p style={{ fontFamily: mono, fontSize: 13, color: C.ink, fontWeight: 500 }}>{e.degree}</p>
                  <p style={{ fontSize: 13, color: C.ink2, marginTop: 3 }}>
                    {e.institution} · {e.location}
                    {e.gpa && <span style={{ color: C.ink3 }}> · GPA {e.gpa}</span>}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" style={{ padding: '64px 0', borderTop: `1px solid ${C.border}` }}>
          <Ruler num="02" label="Technical Skills" />
          {SKILLS.map((s) => (
            <div key={s.area} style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 24, padding: '12px 0', borderBottom: `1px solid ${C.border}`, alignItems: 'baseline' }}>
              <p style={{ fontFamily: mono, fontSize: 11, color: C.ink2, fontWeight: 500 }}>{s.area}</p>
              <p style={{ fontSize: 13, color: C.ink2, lineHeight: 1.6 }}>{s.items}</p>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section id="projects" style={{ padding: '64px 0', borderTop: `1px solid ${C.border}` }}>
          <Ruler num="03" label="Projects" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {PROJECTS.map((p) => (
              <div key={p.category}>
                <p style={{ fontFamily: mono, fontSize: 10, color: C.cyan, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>{p.category}</p>
                <div style={{ paddingLeft: 16, borderLeft: `2px solid ${C.border}`, display: 'flex', flexDirection: 'column', gap: 5 }}>
                  {p.items.map((item) => (
                    <p key={item} style={{ fontSize: 13, color: C.ink2, lineHeight: 1.55 }}>{item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 28 }}>
            <a href="https://github.com/miftahfaridhh" target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: mono, fontSize: 11, color: C.cyan, textDecoration: 'none' }}>
              View all repositories on GitHub ↗
            </a>
          </div>
        </section>

        {/* Publications */}
        <section id="publications" style={{ padding: '64px 0', borderTop: `1px solid ${C.border}` }}>
          <Ruler num="04" label="Publications" />
          {PUBLICATIONS.map((p, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '36px 150px 1fr', gap: 20, padding: '12px 0', borderBottom: `1px solid ${C.border}`, alignItems: 'baseline' }}>
              <p style={{ fontFamily: mono, fontSize: 11, color: C.ink3 }}>[{String(i + 1).padStart(2, '0')}]</p>
              <p style={{ fontFamily: mono, fontSize: 11, color: C.amber }}>{p.venue} {p.year}</p>
              <p style={{ fontSize: 13, color: C.ink2, lineHeight: 1.55 }}>{p.title}</p>
            </div>
          ))}
          <div style={{ marginTop: 20 }}>
            <a href="https://scholar.google.com/citations?user=okg9J80AAAAJ" target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: mono, fontSize: 11, color: C.cyan, textDecoration: 'none' }}>
              Full bibliography on Google Scholar ↗
            </a>
          </div>
        </section>

        {/* Awards */}
        <section style={{ padding: '64px 0', borderTop: `1px solid ${C.border}` }}>
          <Ruler num="05" label="Awards" />
          {AWARDS.map((a) => (
            <div key={a.name} style={{ display: 'grid', gridTemplateColumns: '52px 1fr 110px', gap: 20, padding: '11px 0', borderBottom: `1px solid ${C.border}`, alignItems: 'baseline' }}>
              <p style={{ fontFamily: mono, fontSize: 14, color: C.amber, fontWeight: 600 }}>{a.rank}</p>
              <p style={{ fontSize: 13, color: C.ink2, lineHeight: 1.5 }}>{a.name}</p>
              <p style={{ fontFamily: mono, fontSize: 10, color: C.ink3, textAlign: 'right', letterSpacing: '0.06em' }}>{a.scope}</p>
            </div>
          ))}
        </section>

        {/* Government Projects */}
        <section style={{ padding: '64px 0', borderTop: `1px solid ${C.border}` }}>
          <Ruler num="06" label="Government Research" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: C.border, border: `1px solid ${C.border}` }}>
            {GOV_PROJECTS.map((p) => (
              <div key={p.title} style={{ background: C.surface, padding: '14px 16px' }}>
                <p style={{ fontSize: 13, color: C.ink2, lineHeight: 1.5 }}>{p.title}</p>
                <p style={{ fontFamily: mono, fontSize: 10, color: C.ink3, marginTop: 5, letterSpacing: '0.06em' }}>{p.agency}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" style={{ padding: '64px 0', borderTop: `1px solid ${C.border}` }}>
          <Ruler num="07" label="Contact" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: C.border, border: `1px solid ${C.border}`, marginBottom: 24 }}>
            {SOCIAL.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                style={{ background: C.surface, padding: '16px 20px', textDecoration: 'none', display: 'block' }}>
                <p style={{ fontFamily: mono, fontSize: 10, color: C.ink3, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>{s.label}</p>
                <p style={{ fontSize: 13, color: C.ink2 }}>{s.handle}</p>
              </a>
            ))}
          </div>
          <p style={{ fontSize: 14, color: C.ink2 }}>
            Email:{' '}
            <a href="mailto:muhammadmiftahfaridh@gmail.com"
              style={{ fontFamily: mono, fontSize: 13, color: C.cyan, textDecoration: 'none' }}>
              muhammadmiftahfaridh@gmail.com
            </a>
          </p>
        </section>

      </main>

      <footer style={{ borderTop: `1px solid ${C.border}`, marginTop: 32 }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', height: 48, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: mono, fontSize: 11, color: C.ink3 }}>miftahfaridh.com</span>
          <span style={{ fontFamily: mono, fontSize: 11, color: C.ink3 }}>Seoul · 2026</span>
        </div>
      </footer>

    </div>
  )
}
