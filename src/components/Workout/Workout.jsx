import styles from "./Workout.module.css";
import startingStrength from "../../../startingStrength";
import Exercise from "./Exercise/Exercise";
import { useState } from "react";
import setData from "./setData";

const Workout = (props) => {
  const selectedWorkoutID = parseInt(props.workoutId);
  const selectedWorkout = startingStrength[selectedWorkoutID]; // rendering workout based on workoutID assuming position in array matches workout ID
  // changing the isWorkoutSelected state in the app component when users click cancel workout
  const cancelWorkoutHandler = () => {
    props.finishWorkoutHandler(false);
  };
  // defining state to manage the workout data being logged by users in the Exercise component
  const [exerciseData, setExerciseData] = useState(
    selectedWorkout.exercises.map((exercise) => ({
      id: exercise.id,
      name: exercise.title,
      weights: Array(exercise.sets).fill(null),
      reps: Array(exercise.sets).fill(null),
      completed: Array(exercise.sets).fill(false),
    }))
  );

  // defining function to be passed down as props to Exercise to change the state
  const handleInputChange = (exerciseId, setType, setIndex, value) => {
    const updatedData = [...exerciseData];
    const exercise = updatedData.find((ex) => ex.id === exerciseId);

    if (setType === "weight") {
      exercise.weights[setIndex] = value;
    } else if (setType === "reps") {
      exercise.reps[setIndex] = value;
    } else if (setType === "completed") {
      exercise.completed[setIndex] = value;
    }

    setExerciseData(updatedData);
  };

  // defining click handler to push the state value when users click finish to the firestore database to the workout collection
  const clickHandler = () => {
    setData(
      props.user.uid,
      selectedWorkout.name,
      selectedWorkout.id,
      exerciseData
    );

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
          <h2 className={styles.workoutTitle} onClick={cancelWorkoutHandler}>
            Cancel Workout
          </h2>
        </div>
      </div>
      <div className={styles.gridContainer}>
        {selectedWorkout.exercises.map((exercise) => {
          return (
            <Exercise
              id={exercise.id}
              key={exercise.id}
              title={exercise.title}
              sets={exercise.sets}
              onChangeInput={handleInputChange}
            />
          );
        })}
      </div>
    </>
  );
};

export default Workout;
