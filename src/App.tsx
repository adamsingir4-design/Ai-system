import { Route, Routes } from 'react-router-dom'
import { Home, ShieldCheck, NotebookText, ListChecks, History, UserCog, LayoutDashboard, MessagesSquare } from 'lucide-react'

const navItems = [
  { label: 'Landing', path: '/', icon: Home },
  { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { label: 'Workspace', path: '/workspace', icon: MessagesSquare },
  { label: 'Knowledge Base', path: '/knowledge', icon: NotebookText },
  { label: 'History', path: '/history', icon: History },
  { label: 'Profile', path: '/profile', icon: UserCog },
  { label: 'Admin', path: '/admin', icon: ShieldCheck },
]

function AppHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300 ring-1 ring-blue-400/30">
            <MessagesSquare size={22} />
          </div>
          <div>
            <p className="text-lg font-bold text-white">SupportPilot AI</p>
            <p className="text-xs text-slate-400">Computer troubleshooting platform</p>
          </div>
        </div>
        <nav className="hidden gap-2 md:flex">
          {navItems.map(({ label, path, icon: Icon }) => (
            <a
              key={path}
              href={path}
              className="flex items-center gap-2 rounded-full border border-slate-700 px-3 py-2 text-sm text-slate-200 transition hover:border-blue-400 hover:text-white"
            >
              <Icon size={15} />
              {label}
            </a>
          ))}
        </nav>
        <a href="/workspace" className="rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:bg-blue-400">
          Start troubleshooting
        </a>
      </div>
    </header>
  )
}

function LandingPage() {
  const categories = [
    'Windows OS',
    'Laptop & Desktop',
    'Wi‑Fi & Connectivity',
    'Storage & Disk',
    'Battery & Charging',
    'Printers & Peripherals',
  ]

  const features = [
    'Natural-language diagnosis for everyday computer issues',
    'Verified troubleshooting guides using a database-backed knowledge base',
    'Step-by-step guidance with progress checks and recovery options',
    'Administrator tools to publish and manage support articles',
  ]

  return (
    <div className="bg-slate-950 text-slate-200">
      <AppHeader />
      <main className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <section className="grid items-center gap-10 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 p-8 shadow-glow md:grid-cols-2 md:p-12">
          <div>
            <span className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
              AI-powered support
            </span>
            <h1 className="mt-6 text-4xl font-black tracking-tight text-white md:text-6xl">
              Get clear, safe tech help without the guesswork.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300">
              SupportPilot AI helps users explain a problem in plain English and turns it into guided, structured troubleshooting steps for real-world computer issues.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/workspace" className="rounded-full bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-400">
                Start Troubleshooting
              </a>
              <a href="/knowledge" className="rounded-full border border-slate-600 px-6 py-3 font-semibold text-slate-200 hover:border-blue-400 hover:text-white">
                Browse guides
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-700 bg-slate-950/50 p-6 shadow-2xl">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm text-slate-400">Problem reported</p>
              <p className="mt-3 text-xl font-semibold text-white">My laptop is very slow and battery drains fast.</p>
              <div className="mt-6 space-y-3">
                {['Battery health inspection', 'Disk cleanup', 'Startup apps review', 'Power settings check'].map((item, idx) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950 px-3 py-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/15 text-xs font-bold text-blue-300">{idx + 1}</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Troubleshooting categories</p>
            <h2 className="mt-2 text-3xl font-bold text-white">Support for the common problems users actually face.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-800 bg-slate-900 p-5 transition hover:border-blue-500 hover:bg-slate-800/80">
                <div className="mb-4 inline-flex rounded-xl border border-blue-500/20 bg-blue-500/10 p-2 text-blue-300">
                  <ListChecks size={18} />
                </div>
                <h3 className="text-lg font-semibold text-white">{item}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-6 md:grid-cols-3">
          {features.map((feature, idx) => (
            <div key={feature} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/15 text-sm font-bold text-blue-300">
                {idx + 1}
              </div>
              <p className="text-slate-200">{feature}</p>
            </div>
          ))}
        </section>

        <section className="mt-20 rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">How it works</p>
            <h2 className="mt-2 text-3xl font-bold text-white">A guided path from diagnosis to resolution.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              'Describe the issue in plain English.',
              'AI and rule-based logic identify likely causes and ask key questions.',
              'Follow a step-by-step guide with validation and safe alternatives.',
            ].map((step, idx) => (
              <div key={step} className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                <div className="mb-3 text-3xl font-black text-blue-300">0{idx + 1}</div>
                <p className="text-slate-200">{step}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-glow">
        <p className="text-sm uppercase tracking-[0.2em] text-blue-300">Welcome back</p>
        <h1 className="mt-3 text-3xl font-bold text-white">Your support dashboard</h1>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-4">
        {[
          ['Total sessions', '128'],
          ['Resolved', '94'],
          ['Open cases', '12'],
          ['AI guidance records', '412'],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">{label}</p>
            <p className="mt-3 text-3xl font-black text-white">{value}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold text-white">Recent activities</h2>
          <ul className="mt-5 space-y-3 text-slate-300">
            <li>• Wi‑Fi keeps disconnecting — diagnosis started.</li>
            <li>• Slow laptop issue — recommended storage cleanup steps.</li>
            <li>• Printer not printing — troubleshooting guide opened.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold text-white">Common problems</h2>
          <ul className="mt-5 space-y-3 text-slate-300">
            <li>• Laptop battery not charging</li>
            <li>• Computer running slowly</li>
            <li>• Wi‑Fi connectivity issues</li>
            <li>• Windows update problems</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function WorkspacePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-glow">
        <p className="text-sm uppercase tracking-[0.2em] text-blue-300">AI troubleshooting workspace</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Tell us what is going wrong</h1>
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <h2 className="text-lg font-semibold text-white">Session conversation</h2>
            <button className="rounded-full border border-slate-700 px-3 py-1.5 text-sm text-slate-200">New session</button>
          </div>
          <div className="mt-5 space-y-4">
            <div className="max-w-lg rounded-2xl bg-slate-800 p-3 text-slate-200">My laptop is very slow and the fan is loud.</div>
            <div className="ml-auto max-w-lg rounded-2xl bg-blue-500/15 p-3 text-blue-100">
              I can help with that. Let’s narrow it down by checking whether the issue started after a recent update, if the laptop is overheating, and whether several apps are open at once.
            </div>
          </div>
          <div className="mt-6 flex gap-3">
            <input
              className="flex-1 rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-blue-500"
              placeholder="Describe the computer problem in plain English..."
            />
            <button className="rounded-2xl bg-blue-500 px-5 py-3 font-semibold text-white hover:bg-blue-400">Send</button>
          </div>
        </div>
        <aside className="space-y-5">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <h3 className="text-lg font-semibold text-white">Suggested problems</h3>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>• Slow performance</li>
              <li>• Wi‑Fi disconnects</li>
              <li>• Blue screen</li>
              <li>• Battery not charging</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <h3 className="text-lg font-semibold text-white">Progress</h3>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
              <div className="h-full w-2/3 rounded-full bg-blue-500"></div>
            </div>
            <p className="mt-3 text-sm text-slate-400">Step 2 of 3</p>
          </div>
        </aside>
      </div>
    </div>
  )
}

function KnowledgePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-glow">
        <p className="text-sm uppercase tracking-[0.2em] text-blue-300">Knowledge base</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Search verified troubleshooting articles</h1>
      </div>
      <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-4">
        <input className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-blue-500" placeholder="Search article titles or keywords..." />
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {[
          ['Wi‑Fi not connecting', 'Connectivity', 'Medium', '12 mins'],
          ['Laptop battery not charging', 'Battery', 'Easy', '8 mins'],
          ['Disk drive full', 'Storage', 'Easy', '10 mins'],
          ['Computer overheating', 'Hardware', 'Medium', '15 mins'],
        ].map(([title, category, level, time]) => (
          <div key={title} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-blue-500/10 px-2.5 py-1 text-xs font-semibold text-blue-300">{category}</span>
              <span className="text-xs text-slate-400">{level}</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm text-slate-400">Estimated time: {time}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function HistoryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-glow">
        <p className="text-sm uppercase tracking-[0.2em] text-blue-300">Troubleshooting history</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Previous issues and outcomes</h1>
      </div>
      <div className="mt-8 space-y-4">
        {[
          ['Laptop running slow', 'Resolved', '2026-11-14 09:15'],
          ['Wi‑Fi disconnects', 'In progress', '2026-11-13 18:20'],
          ['Printer not printing', 'Needs attention', '2026-11-12 07:45'],
        ].map(([problem, status, when]) => (
          <div key={problem} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">{problem}</h3>
              <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-300">{status}</span>
            </div>
            <p className="mt-2 text-sm text-slate-400">{when}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function ProfilePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 md:px-8">
      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-glow">
        <p className="text-sm uppercase tracking-[0.2em] text-blue-300">Profile & settings</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Account preferences</h1>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <h2 className="text-lg font-semibold text-white">User information</h2>
          <div className="mt-4 space-y-3 text-slate-300">
            <p>Name: Alex Morgan</p>
            <p>Email: alex@example.com</p>
            <p>Role: Support user</p>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <h2 className="text-lg font-semibold text-white">Preferences</h2>
          <div className="mt-4 space-y-3 text-slate-300">
            <p>• Email notifications enabled</p>
            <p>• Simplified troubleshooting mode</p>
            <p>• Dark system theme</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function AdminPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-glow">
        <p className="text-sm uppercase tracking-[0.2em] text-blue-300">Administrator dashboard</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Operations overview</h1>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-4">
        {[
          ['Users', '145'],
          ['Sessions', '320'],
          ['Resolved', '248'],
          ['AI requests', '1821'],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">{label}</p>
            <p className="mt-3 text-3xl font-black text-white">{value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/workspace" element={<WorkspacePage />} />
        <Route path="/knowledge" element={<KnowledgePage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </div>
  )
}
