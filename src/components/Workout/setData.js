import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

const setData = (userID, workoutName, workoutID, exerciseData) => {
  const today = new Date();
  const docRef = addDoc(collection(db, "workout"), {
    uid: userID,
    workoutName: workoutName,
    workoutID: workoutID,
    exercises: exerciseData,
    date: `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(today.getDate()).padStart(2, "0")}`,
  })
    .then((success) => {
      console.log("Workout logged successfully");
    })
    .catch((error) => {
      console.log("Error logging workout");
    });
};

export default setData;
