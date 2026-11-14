import './RegionalView.css'

interface RegionalViewProps {
  molaCount: number | null;
}

export function RegionalView({ molaCount }: RegionalViewProps) {
  return (
    <div className="view-container">
      <div className="view-header">
        <h3>Análisis Regional: Mawrth Vallis</h3>
        <p>Contexto geomorfológico y delimitación espacial (Referencia: Loizeau et al., 2015)</p>
      </div>

      <div className="metrics-grid">
        <div className="metric-card">
          <h4>Registros MOLA Sincronizados</h4>
          <p className="metric-value">{molaCount !== null ? molaCount : 'Cargando...'}</p>
        </div>
        <div className="metric-card">
          <h4>Estado Espacial</h4>
          <p className="metric-status">PostGIS Habilitado 🟢</p>
        </div>
      </div>

      <div className="map-placeholder-card">
        <div className="placeholder-content">
          <span>🗺️ Visor Georreferenciado en Construcción</span>
          <p>Aquí se integrará la visualización cartográfica principal de la región marciana.</p>
        </div>
      </div>
    </div>
  )
}