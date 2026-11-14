import './Navbar.css'

interface NavbarProps {
  currentTab: 'region' | 'investigation';
  setCurrentTab: (tab: 'region' | 'investigation') => void;
}

export function Navbar({ currentTab, setCurrentTab }: NavbarProps) {
  return (
    <nav className="mars-navbar">
      <div className="nav-brand">
        <span className="nav-icon">🪐</span>
        <h2>Mars Map: Mawrth Vallis</h2>
      </div>
      <div className="nav-links">
        <button 
          className={`nav-btn ${currentTab === 'region' ? 'active' : ''}`}
          onClick={() => setCurrentTab('region')}
        >
          Modo Región
        </button>
        <button 
          className={`nav-btn ${currentTab === 'investigation' ? 'active' : ''}`}
          onClick={() => setCurrentTab('investigation')}
        >
          Modo Investigación
        </button>
      </div>
    </nav>
  )
}