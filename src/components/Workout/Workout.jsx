import styles from "./Workout.module.css";
import startingStrength from "../../../public/startingStrength";
import Exercise from "./Exercise/Exercise";

const Workout = (props) => {
  const selectedWorkoutID = parseInt(props.workoutId);
  const selectedWorkout = startingStrength[selectedWorkoutID];
  const clickHandler = () => {
    props.finishWorkoutHandler(false);
  };
  return (
    <>
      <div className={styles.flexContainer}>
        <h2 className={styles.workoutTitle}>{selectedWorkout.name}</h2>
        <div className={styles.flexContainerTwo}>
        <h2 className={styles.workoutTitle} onClick={clickHandler}>
          Finish Workout
        </h2>
        <h2 className={styles.workoutTitle} onClick={clickHandler}>
          Cancel Workout
          </h2>
          </div>
      </div>
      <div className={styles.gridContainer}>
        {selectedWorkout.exercises.map((exercise) => {
          return <Exercise key={exercise.id} title={exercise.title} sets={exercise.sets} />;
        })}
      </div>
    </>
  );
};

export default Workout;
