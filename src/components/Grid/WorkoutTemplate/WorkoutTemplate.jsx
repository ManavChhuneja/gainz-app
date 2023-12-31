import "./WorkoutTemplate.css";

const WorkoutTemplate = (props) => {
  const clickHandler = () => {
    // conditionally updating the selection handler state if user is logged in
    if (props.userAuthStatus) {
      props.workoutSelectedHandler(true);
    } else {
      alert("Please log in or sign up to continue");
    }
    props.workoutIdManager(parseInt(props.id)); // changing the workoutID state in the App to render the component that was clicked.
    props.historyHandler(false);
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
