import "./WorkoutTemplate.css";

const WorkoutTemplate = (props) => {
  const clickHandler = () => {
    props.workoutSelectedHandler(true);
  };
  return (
    <div className="workout-template" onClick={clickHandler}>
      <h3 className="workout-title">{props.workout.name}</h3>
      <ul>
        {props.workout.exercises.map((exercise) => {
          return (
            <li key={exercise.id}>
              {exercise.title}{" "}
              <strong>
                {exercise.sets}x{exercise.reps}
              </strong>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default WorkoutTemplate;
