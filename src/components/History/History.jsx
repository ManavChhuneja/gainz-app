import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import styles from "./History.module.css";
import { useEffect } from "react";

const History = () => {
  useEffect(() => {
    // This code will run only once when the History component is initially mounted
    getDocs(collection(db, "workout"))
      .then((snapshot) => {
        snapshot.forEach((snap) => console.log(snap.data()));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return null;
};

export default History;
