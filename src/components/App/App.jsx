import Navbar from "../Navbar/Navbar";
import FinalGrid from "../Grid/FinalGrid/FinalGrid";
import Workout from "../Workout/Workout";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import History from "../History/History";

function App() {
  // managing state for the workouts - when users click on the workouts, the state changes and causes re-render
  const [isWorkoutSelected, setIsWorkoutSelected] = useState(false);
  const [historySelected, setHistorySelected] = useState(false);
  const workoutSelectedHandler = (data) => {
    setIsWorkoutSelected(data);
    // defining the function to be passed down as props to components which will trigger the state change
  };
  // setting state to conditionally render the workout component when users are successfully logged in and click on the workout
  const [workoutId, setWorkoutId] = useState(0);
  const workoutIdSelector = (workout) => {
    setWorkoutId(workout);
  };
  const historyHandler = (value) => {
    if (value === false) {
      setHistorySelected(false);
    } else {
      setHistorySelected((prevState) => {
        return !prevState;
      });
    }
  };

  // managing auth state using react firebase hooks library
  const [user, loading, error] = useAuthState(auth);
  console.log(loading);
  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Navbar userAuthStatus={user} historyHandler={historyHandler} />
          {!isWorkoutSelected && (
            <FinalGrid
              workoutSelectedHandler={workoutSelectedHandler}
              workoutIdManager={workoutIdSelector}
              userAuthStatus={user}
              historyHandler={historyHandler}
            />
          )}
          {user && isWorkoutSelected && (
            <Workout
              user={user}
              finishWorkoutHandler={workoutSelectedHandler}
              workoutId={workoutId}
            />
          )}
          {user && historySelected && (
            <>
              <History user={user} />
            </>
          )}
        </>
      )}
    </>
  );
}

export default App;
