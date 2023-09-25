import styles from "./Workout.module.css";
import startingStrength from "../../../startingStrength";
import Exercise from "./Exercise/Exercise";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

const Workout = (props) => {
  const selectedWorkoutID = parseInt(props.workoutId);
  const selectedWorkout = startingStrength[selectedWorkoutID];
  const cancelWorkoutHandler = () => {
    props.finishWorkoutHandler(false);
  };
  const [exerciseData, setExerciseData] = useState(
    selectedWorkout.exercises.map((exercise) => ({
      id: exercise.id,
      name: exercise.title,
      weights: Array(exercise.sets).fill(null),
      reps: Array(exercise.sets).fill(null),
      completed: Array(exercise.sets).fill(false),
    }))
  );
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
  const clickHandler = () => {
    const docRef = addDoc(collection(db, "workout"), {
      uid: props.user.uid,
      workoutName: selectedWorkout.name,
      workoutID: selectedWorkout.id,
      exercises: exerciseData,
    })
      .then((success) => {
        console.log("Workout logged successfully");
      })
      .catch((error) => {
        console.log("Error logging workout");
      });
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
