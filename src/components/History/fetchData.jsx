import { useEffect } from "react";
import { query, collection, getDocs, where } from "firebase/firestore";
import { db } from "../../firebase";

const fetchData = (userID, stateHandler) => {
  const q = query(collection(db, "workout"), where("uid", "==", userID));

  getDocs(q)
    .then((snapshot) => {
      const fetchedWorkouts = snapshot.docs.map((doc) => doc.data());
      stateHandler(fetchedWorkouts);
    })
    .catch((error) => {
      console.error("Error fetching workouts:", error);
    });
};

export default fetchData;
