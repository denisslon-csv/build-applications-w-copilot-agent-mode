import ResourceList from './ResourceList'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const workoutsEndpoint = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/workouts/`
  : 'http://localhost:8000/api/workouts/'

export default function Workouts() {
  return <ResourceList component="workouts" endpoint={workoutsEndpoint} title="Workout ideas" description="A little structure for your next good decision." renderItem={(workout) => <article className="resource-card" key={workout._id || workout.title}><span className="card-kicker">{workout.difficulty}</span><h2>{workout.title}</h2><p>{workout.description}</p><strong>Target: {workout.target}</strong></article>} />
}