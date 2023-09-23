import styles from "./Workout.module.css";
import startingStrength from "../../../public/startingStrength";
import Exercise from "./Exercise/Exercise";

const Workout = () => {
  const selectedWorkout = startingStrength["Workout A"];
  return (
    <>
      <h2 className={styles.workoutTitle}>Workout A</h2>
      <div className={styles.gridContainer}>
        {selectedWorkout.exercises.map((exercise) => {
          return <Exercise title={exercise.title} sets={exercise.sets} />;
        })}
      </div>
    </>
  );
};

export default Workout;
