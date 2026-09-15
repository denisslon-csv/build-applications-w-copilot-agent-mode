import ResourceList from './ResourceList'

export default function Activities() {
  return <ResourceList component="activities" title="Activity log" description="Every run, walk, and strength session counts." renderItem={(activity, index) => <article className="resource-card" key={activity._id || index}><span className="card-kicker">{activity.type}</span><h2>{activity.durationMinutes} minutes</h2><p>{activity.distanceKm ? `${activity.distanceKm} km` : 'Strength session'}</p><strong>{activity.points} points</strong></article>} />
}