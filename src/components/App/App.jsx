import Navbar from "../Navbar/Navbar";
import FinalGrid from "../Grid/FinalGrid/FinalGrid";
import Workout from "../Workout/Workout";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import History from "../History/History";

function App() {
  // managing state for the workouts - when users click on the workouts, the state changes and causes re-render
  const [isWorkoutSelected, setIsWorkoutSelected] = useState(false);
  const workoutSelectedHandler = (data) => {
    setIsWorkoutSelected(data);
    // defining the function to be passed down as props to components which will trigger the state change
  };
  // setting state to conditionally render the workout component when users are successfully logged in and click on the workout
  const [workoutId, setWorkoutId] = useState(0);
  const workoutIdSelector = (workout) => {
    setWorkoutId(workout);
  };

  // managing auth state using react firebase hooks library
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
