import styles from "./Exercise.module.css";
import React from "react";

const Exercise = (props) => {
  return (
    <div className={styles.gridContainer}>
      <h3 className={styles.exerciseTitle}>{props.title}</h3>
      <h4 className={styles.gridItem}>Set</h4>
      <h4 className={styles.gridItem}>Weight (lbs)</h4>
      <h4 className={styles.gridItem}>Reps</h4>
      <h4>Completed</h4>
      {Array.from({ length: props.sets }).map((_, index) => (
        <React.Fragment key={index}>
          <div className={styles.gridItem} key={index + 1}>
            Set {index + 1}
          </div>
          <input
            className={`${styles.gridItem} ${styles.inputElement}`}
            type="number"
            pattern="\d+"
            placeholder="200"
            key={index + 2}
            max="800"
            name="weight"
            onChange={(e) =>
              props.onChangeInput(props.id, "weight", index, e.target.value)
            }
          />
          <input
            className={`${styles.gridItem} ${styles.inputElement}`}
            type="number"
            pattern="\d+"
            placeholder="5"
            key={index + 3}
            max="100"
            name="reps"
            onChange={(e) =>
              props.onChangeInput(props.id, "reps", index, e.target.value)
            }
          />
          <input
            name="completed"
            className={styles.gridItem}
            type="checkbox"
            key={index + 4}
            onChange={(e) =>
              props.onChangeInput(
                props.id,
                "completed",
                index,
                e.target.checked
              )
            }
          />
        </React.Fragment>
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
