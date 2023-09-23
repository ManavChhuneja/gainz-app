import styles from "./Workout.module.css";
import startingStrength from "../../../public/startingStrength";
import Exercise from "./Exercise/Exercise";

const Workout = () => {
  const selectedWorkout = startingStrength.workoutA;
  return (
    <div className={styles.gridContainer}>
      {selectedWorkout.exercises.map((exercise) => {
        return <Exercise title={exercise.title} sets={exercise.sets} />;
      })}
    </div>
  );
};

export default Workout;
