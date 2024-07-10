import styles from "./FlexBox.module.scss";
const FlexBox = ({ children, direction = "row" }) => {
  console.log(children);
  return (
    <div style={{ flexDirection: direction }} className={styles.flex}>
      {children}
    </div>
  );
};

export default FlexBox;
