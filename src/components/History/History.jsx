import { query, collection, getDocs, where } from "firebase/firestore";
import { db } from "../../firebase";
import styles from "./History.module.css";
import { useEffect, useState } from "react";

const History = (props) => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "workout"),
      where("uid", "==", props.user.uid)
    );

    getDocs(q)
      .then((snapshot) => {
        const fetchedWorkouts = snapshot.docs.map((doc) => doc.data());
        setWorkouts(fetchedWorkouts);
      })
      .catch((error) => {
        console.error("Error fetching workouts:", error);
      });
  }, [props.user.uid]);

  return (
    <div className={styles.history}>
      <h2>History</h2>
      {workouts.map((workout) => (
        <div key={workout.workoutID} className={styles.workout}>
          {" "}
          {/* Assuming workoutID is unique */}
          <div className={styles.flexContainer}>
            <h3>{workout.workoutName}</h3>
            <div>{workout.date}</div>
          </div>
          {workout.exercises.map((exercise, idx) => (
            <div key={idx} className={styles.exercises}>
              <h4>{exercise.name}</h4>
              <div className={styles.gridContainer}>
                <h4>Weight</h4>
                {exercise.weights.map((weight, idx) => (
                  <p key={idx}>{weight ? weight : 0}</p>
                ))}
                <h4>Reps</h4>
                {exercise.reps.map((rep, idx) => (
                  <p key={idx}>{rep ? rep : 0}</p>
                ))}
                <h4>Completed</h4>
                {exercise.completed.map((done, idx) => (
                  <p key={idx}>{done ? "Yes" : "No"}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default History;
