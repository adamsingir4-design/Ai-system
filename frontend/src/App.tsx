import { NavLink, Route, Routes } from 'react-router-dom'
import { Home, LayoutDashboard, MessagesSquare, NotebookText, History, ShieldCheck } from 'lucide-react'
import LandingPage from './pages/LandingPage'
import DashboardPage from './pages/DashboardPage'
import WorkspacePage from './pages/WorkspacePage'
import KnowledgePage from './pages/KnowledgePage'
import HistoryPage from './pages/HistoryPage'
import AdminPage from './pages/AdminPage'

const links = [["Home", "/", Home], ["Dashboard", "/dashboard", LayoutDashboard], ["Troubleshoot", "/workspace", MessagesSquare], ["Knowledge", "/knowledge", NotebookText], ["History", "/history", History], ["Admin", "/admin", ShieldCheck]] as const
export default function App() {
  return <div className="min-h-screen"><header className="topbar"><a className="brand" href="/">✦ <span>SupportPilot<small>AI TECH SUPPORT</small></span></a><nav>{links.map(([label, path, Icon]) => <NavLink key={path} to={path} end={path === '/'}><Icon size={16}/>{label}</NavLink>)}</nav><NavLink className="start-link" to="/workspace">Start a session</NavLink></header><main><Routes><Route path="/" element={<LandingPage/>}/><Route path="/dashboard" element={<DashboardPage/>}/><Route path="/workspace" element={<WorkspacePage/>}/><Route path="/knowledge" element={<KnowledgePage/>}/><Route path="/history" element={<HistoryPage/>}/><Route path="/admin" element={<AdminPage/>}/></Routes></main><footer>SupportPilot AI <span>Friendly, careful computer support</span></footer></div>
}
