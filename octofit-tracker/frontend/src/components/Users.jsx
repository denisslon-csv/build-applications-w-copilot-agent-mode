import ResourceList from './ResourceList'

export default function Users() {
  return <ResourceList component="users" title="Athlete roster" description="Keep an eye on the people making progress together." renderItem={(user) => <article className="resource-card" key={user._id || user.username}><span className="card-kicker">Athlete</span><h2>{user.displayName}</h2><p>@{user.username}</p><small>{user.email}</small></article>} />
}