import Navbar from "../Navbar/Navbar";
import FinalGrid from "../Grid/FinalGrid/FinalGrid";
import Workout from "../Workout/Workout";
import { useState } from "react";

function App() {
  const [isWorkoutSelected, setIsWorkoutSelected] = useState(false);
  const workoutSelectedHandler = (data) => {
    setIsWorkoutSelected(data);
  };
  const [workoutId, setWorkoutId] = useState(0);
  const workoutIdSelector = (workout) => {
    setWorkoutId(workout);
  };
  return (
    <>
      <Navbar />
      {!isWorkoutSelected && (
        <FinalGrid
          workoutSelectedHandler={workoutSelectedHandler}
          workoutIdManager={workoutIdSelector}
        />
      )}
      {isWorkoutSelected && (
        <Workout
          finishWorkoutHandler={workoutSelectedHandler}
          workoutId={workoutId}
        />
      )}
    </>
  );
}

export default App;
