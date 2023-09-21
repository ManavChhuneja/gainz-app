import GridContainer from "../GridContainer/GridContainer";
import Headline from "../Headline/Headline";
import WorkoutTemplate from "../WorkoutTemplate/WorkoutTemplate";

const FinalGrid = () => {
  return (
    <>
      <GridContainer>
        <Headline text="Workout Routines" />
        <Headline text="Build your own routine (coming soon)" />
        <WorkoutTemplate />
        <WorkoutTemplate />
        <WorkoutTemplate />
      </GridContainer>
    </>
  );
};
export default FinalGrid;
