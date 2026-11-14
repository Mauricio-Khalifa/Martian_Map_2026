import { useEffect, useState } from 'react'
import { supabase } from './services/supabaseClient'
import { Navbar } from './components/Navbar'
import { RegionalView } from './components/RegionalView'
import './App.css'

function App() {
  const [currentTab, setCurrentTab] = useState<'region' | 'investigation'>('region')
  const [molaCount, setMolaCount] = useState<number | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const { count, error } = await supabase
          .from('mola_footprints')
          .select('id', { count: 'exact', head: true })

        if (!error && count !== null) {
          setMolaCount(count)
        }
      } catch (err) {
        console.error('Error de conexión:', err)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="mars-app">
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      
      <main className="mars-content">
        {currentTab === 'region' ? (
          <RegionalView molaCount={molaCount} />
        ) : (
          <div className="view-container">
            <div className="view-header">
              <h3>Modo Investigación: Puntos MOLA & Atributos</h3>
              <p>Análisis detallado de huellas orbitales y capas científicas.</p>
            </div>
            <div className="map-placeholder-card">
              <span>🔬 Vista de Investigación en Desarrollo</span>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App