import Headline from "../Headline/Headline";
import WorkoutTemplate from "../WorkoutTemplate/WorkoutTemplate";
import styles from "./FinalGrid.module.css";
import startingStrength from "../../../../public/startingStrength";

const FinalGrid = (props) => {
  return (
    <>
      <div className={styles.secondGridContainer}>
        <Headline text="Workout Routines" />
        {startingStrength.map((workout, index) => {
          return (
            <WorkoutTemplate
              workout={workout}
              id={index}
              key={index}
              workoutSelectedHandler={props.workoutSelectedHandler}
              workoutIdManager={props.workoutIdManager}
              userAuthStatus={props.userAuthStatus}
            />
          );
        })}
      </div>
    </>
  );
};
export default FinalGrid;
