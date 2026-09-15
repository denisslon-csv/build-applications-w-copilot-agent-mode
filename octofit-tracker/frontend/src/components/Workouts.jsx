import ResourceList from './ResourceList'

export default function Workouts() {
  return <ResourceList component="workouts" title="Workout ideas" description="A little structure for your next good decision." renderItem={(workout) => <article className="resource-card" key={workout._id || workout.title}><span className="card-kicker">{workout.difficulty}</span><h2>{workout.title}</h2><p>{workout.description}</p><strong>Target: {workout.target}</strong></article>} />
}