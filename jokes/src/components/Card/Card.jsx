import styles from "./Card.module.scss";
import { useState } from "react";

const Card = ({ task, priority }) => {
  const [visible, setVisible] = useState(true);

  const toggleVisibility = (event) => {
    console.log(event);
    setVisible(false);
  };
  return (
    <>
      {visible ? (
        <div className={styles.card}>
          <h2>{task}</h2>
          <p style={{ color: "blue" }}>{priority}</p>
          <button onClick={toggleVisibility}>Delete Task</button>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Card;
