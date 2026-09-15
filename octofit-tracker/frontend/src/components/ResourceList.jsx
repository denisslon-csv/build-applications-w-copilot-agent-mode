import { useEffect, useState } from 'react'
import { fetchCollection } from '../api'

export default function ResourceList({ component, title, description, renderItem }) {
  const [items, setItems] = useState([])
  const [state, setState] = useState({ loading: true, error: '' })

  useEffect(() => {
    let active = true
    fetchCollection(component)
      .then((nextItems) => {
        if (active) {
          setItems(nextItems)
          setState({ loading: false, error: '' })
        }
      })
      .catch((error) => {
        if (active) setState({ loading: false, error: error.message })
      })
    return () => { active = false }
  }, [component])

  return (
    <section className="page-section">
      <div className="section-heading">
        <div><p className="eyebrow">OctoFit Tracker</p><h1>{title}</h1><p className="section-description">{description}</p></div>
        <span className="count-badge">{items.length} records</span>
      </div>
      {state.loading && <div className="status-panel">Loading {component}...</div>}
      {state.error && <div className="status-panel error-panel">{state.error}. Check that the API is running.</div>}
      {!state.loading && !state.error && <div className="resource-grid">{items.length ? items.map((item, index) => renderItem(item, index)) : <div className="status-panel">No {component} found yet.</div>}</div>}
    </section>
  )
}