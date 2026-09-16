import ResourceList from './ResourceList'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const leaderboardEndpoint = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/'

export default function Leaderboard() {
  return <ResourceList component="leaderboard" endpoint={leaderboardEndpoint} title="Leaderboard" description="See how the community is climbing this week." renderItem={(entry, index) => <article className="resource-card rank-card" key={entry._id || index}><span className="rank-number">{entry.rank || index + 1}</span><div><h2>{entry.user?.displayName || 'Athlete'}</h2><p>{entry.points} points</p></div></article>} />
}