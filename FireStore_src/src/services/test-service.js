import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firestore";

export const getTestCollection = async () => {
  const collectionRef = collection(db, "test"); // reference to the collection inside database
  const snapshot = await getDocs(collectionRef);
  console.log(snapshot);
  const cleanedData = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(), // the doc has a method called data() that returns the data of the document
  }));
  console.log(cleanedData);
  return cleanedData;
};

// const data = () => {
//     return data of the document
// }
