import ResourceList from './ResourceList'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const usersEndpoint = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/'

export default function Users() {
  return <ResourceList component="users" endpoint={usersEndpoint} title="Athlete roster" description="Keep an eye on the people making progress together." renderItem={(user) => <article className="resource-card" key={user._id || user.username}><span className="card-kicker">Athlete</span><h2>{user.displayName}</h2><p>@{user.username}</p><small>{user.email}</small></article>} />
}