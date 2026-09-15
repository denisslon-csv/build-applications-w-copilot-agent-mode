import ResourceList from './ResourceList'

export default function Teams() {
  return <ResourceList component="teams" title="Team pulse" description="Friendly competition, shared momentum, and visible progress." renderItem={(team) => <article className="resource-card accent-card" key={team._id || team.name}><span className="card-kicker">Team</span><h2>{team.name}</h2><p>{team.description || 'Ready to move together.'}</p><strong>{team.totalPoints || 0} points</strong></article>} />
}