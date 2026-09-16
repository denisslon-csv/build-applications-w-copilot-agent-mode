import { NavLink, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities'
import Leaderboard from './components/Leaderboard'
import Teams from './components/Teams'
import Users from './components/Users'
import Workouts from './components/Workouts'
import { apiBaseUrl } from './api'
import './App.css'

const navigation = [
  ['/', 'Overview'], ['/users', 'Athletes'], ['/teams', 'Teams'],
  ['/activities', 'Activities'], ['/leaderboard', 'Leaderboard'], ['/workouts', 'Workouts'],
]

function Overview() {
  return (
    <section className="page-section overview-section">
      <p className="eyebrow">Move with intention</p>
      <h1>Your next win starts small.</h1>
      <p className="lead-copy">OctoFit keeps the whole school moving with simple tracking, team energy, and workouts that meet you where you are.</p>
      <div className="overview-grid">
        <NavLink className="feature-panel feature-panel-dark" to="/activities"><span>01</span><h2>Log movement</h2><p>Turn today's effort into tomorrow's momentum.</p></NavLink>
        <NavLink className="feature-panel" to="/leaderboard"><span>02</span><h2>Find your pace</h2><p>Celebrate progress without losing the fun.</p></NavLink>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <NavLink className="brand" to="/"><span className="brand-mark">O</span><span>OctoFit<br /><em>Tracker</em></span></NavLink>
        <nav aria-label="Main navigation">{navigation.map(([path, label]) => <NavLink key={path} to={path} className={({ isActive }) => isActive ? 'active' : ''}>{label}</NavLink>)}</nav>
        <span className="api-status" title={apiBaseUrl}>API online</span>
      </header>
      <main><Routes><Route path="/" element={<Overview />} /><Route path="/users" element={<Users />} /><Route path="/teams" element={<Teams />} /><Route path="/activities" element={<Activities />} /><Route path="/leaderboard" element={<Leaderboard />} /><Route path="/workouts" element={<Workouts />} /></Routes></main>
    </div>
  )
}

export default App
