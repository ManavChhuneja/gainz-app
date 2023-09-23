import styles from "./Exercise.module.css";

const Exercise = (props) => {
  return (
    <div className={styles.gridContainer}>
      <h3 className={styles.exerciseTitle}>{props.title}</h3>
      <h4 className={styles.gridItem}>Set</h4>
      <h4 className={styles.gridItem}>Weight (lbs)</h4>
      <h4 className={styles.gridItem}>Reps</h4>
      <h4>Completed</h4>
      {Array.from({ length: props.sets }).map((_, index) => (
        <>
          <div className={styles.gridItem} key={index}>
            Set {index + 1}
          </div>
          <input
            className={`${styles.gridItem} ${styles.inputElement}`}
            type="number"
            pattern="\d+"
            placeholder="200"
            key={index}
          />
          <input
            className={`${styles.gridItem} ${styles.inputElement}`}
            type="number"
            pattern="\d+"
            placeholder="5"
            key={index}
          />
          <input className={styles.gridItem} type="checkbox" key={index} />
        </>
      ))}
    </div>
  );
};

export default Exercise;

{
  /* <h3 className={styles.exerciseTitle}>Hack Squat</h3>
      <h4>Set</h4>
      <h4>Weight (lbs)</h4>
      <h4>Reps</h4>
      <h4>Completed</h4> */
}
