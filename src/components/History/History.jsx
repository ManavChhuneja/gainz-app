import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import styles from "./History.module.css";

const History = () => {
  getDocs(collection(db, "workout"))
    .then((documents) => {
      documents.forEach((document) => console.log(document.data()));
    })
    .catch((error) => {
      console.log(error);
    });
  return null;
};

export default History;
