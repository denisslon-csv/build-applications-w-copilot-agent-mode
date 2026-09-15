import ResourceList from './ResourceList'

export default function Leaderboard() {
  return <ResourceList component="leaderboard" title="Leaderboard" description="See how the community is climbing this week." renderItem={(entry, index) => <article className="resource-card rank-card" key={entry._id || index}><span className="rank-number">{entry.rank || index + 1}</span><div><h2>{entry.user?.displayName || 'Athlete'}</h2><p>{entry.points} points</p></div></article>} />
}