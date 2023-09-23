import Headline from "../Headline/Headline";
import WorkoutTemplate from "../WorkoutTemplate/WorkoutTemplate";
import styles from "./FinalGrid.module.css";
import startingStrength from "../../../../public/startingStrength";

const FinalGrid = (props) => {
  return (
    <>
      <div className={styles.secondGridContainer}>
        <Headline text="Workout Routines" />
        <WorkoutTemplate
          workout={startingStrength[0]}
          id="0"
          workoutSelectedHandler={props.workoutSelectedHandler}
        />
        <WorkoutTemplate
          workout={startingStrength[1]}
          id="1"
          workoutSelectedHandler={props.workoutSelectedHandler}
        />
      </div>
    </>
  );
};
export default FinalGrid;
