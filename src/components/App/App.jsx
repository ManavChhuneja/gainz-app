import Navbar from "../Navbar/Navbar";
import FinalGrid from "../Grid/FinalGrid/FinalGrid";
import Workout from "../Workout/Workout";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import History from "../History/History";

function App() {
  const [isWorkoutSelected, setIsWorkoutSelected] = useState(false);
  const workoutSelectedHandler = (data) => {
    setIsWorkoutSelected(data);
  };
  const [workoutId, setWorkoutId] = useState(0);
  const workoutIdSelector = (workout) => {
    setWorkoutId(workout);
  };
  const [user, loading, error] = useAuthState(auth);
  return (
    <>
      <Navbar userAuthStatus={user} />
      {!isWorkoutSelected && (
        <FinalGrid
          workoutSelectedHandler={workoutSelectedHandler}
          workoutIdManager={workoutIdSelector}
          userAuthStatus={user}
        />
      )}
      {user && isWorkoutSelected && (
        <Workout
          user={user}
          finishWorkoutHandler={workoutSelectedHandler}
          workoutId={workoutId}
        />
      )}
      <History />
    </>
  );
}

export default App;
