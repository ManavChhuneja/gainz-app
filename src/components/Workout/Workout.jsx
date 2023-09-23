import styles from "./Workout.module.css";
import startingStrength from "../../../public/startingStrength";
import Exercise from "./Exercise/Exercise";

const Workout = (props) => {
  const selectedWorkout = startingStrength[0];
  const clickHandler = () => {
    props.finishWorkoutHandler(false);
  };
  return (
    <>
      <div className={styles.flexContainer}>
        <h2 className={styles.workoutTitle}>{selectedWorkout.name}</h2>
        <h2 className={styles.workoutTitle} onClick={clickHandler}>
          Finish Workout
        </h2>
      </div>
      <div className={styles.gridContainer}>
        {selectedWorkout.exercises.map((exercise) => {
          return <Exercise title={exercise.title} sets={exercise.sets} />;
        })}
      </div>
    </>
  );
};

export default Workout;
