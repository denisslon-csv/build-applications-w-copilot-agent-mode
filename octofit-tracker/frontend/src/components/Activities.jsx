import ResourceList from './ResourceList'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const activitiesEndpoint = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/'

export default function Activities() {
  return <ResourceList component="activities" endpoint={activitiesEndpoint} title="Activity log" description="Every run, walk, and strength session counts." renderItem={(activity, index) => <article className="resource-card" key={activity._id || index}><span className="card-kicker">{activity.type}</span><h2>{activity.durationMinutes} minutes</h2><p>{activity.distanceKm ? `${activity.distanceKm} km` : 'Strength session'}</p><strong>{activity.points} points</strong></article>} />
}