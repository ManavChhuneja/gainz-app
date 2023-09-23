import Navbar from "../Navbar/Navbar";
import FinalGrid from "../Grid/FinalGrid/FinalGrid";
import Workout from "../Workout/Workout";
import { useState } from "react";

function App() {
  const [isWorkoutSelected, setIsWorkoutSelected] = useState(false);
  const workoutSelectedHandler = (data) => {
    setIsWorkoutSelected(data);
  };
  const workoutIdSelector = () => {};
  return (
    <>
      <Navbar />
      {!isWorkoutSelected && (
        <FinalGrid workoutSelectedHandler={workoutSelectedHandler} />
      )}
      {isWorkoutSelected && (
        <Workout finishWorkoutHandler={workoutSelectedHandler} />
      )}
    </>
  );
}

export default App;
