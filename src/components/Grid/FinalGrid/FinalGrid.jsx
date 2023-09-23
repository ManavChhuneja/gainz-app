import Headline from "../Headline/Headline";
import WorkoutTemplate from "../WorkoutTemplate/WorkoutTemplate";
import styles from "./FinalGrid.module.css";

const FinalGrid = () => {
  return (
    <>
      <div className={styles.secondGridContainer}>
        <Headline text="Workout Routines" />
        <WorkoutTemplate />
        <WorkoutTemplate />
      </div>
    </>
  );
};
export default FinalGrid;
