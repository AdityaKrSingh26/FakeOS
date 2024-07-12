import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firestore";

export const getAllMovies = async () => {
  const collectionRef = collection(db, "movies");
  const snapshot = await getDocs(collectionRef);
  console.log(snapshot);
  const cleanData = snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  console.log(cleanData);
  return cleanData;
};
