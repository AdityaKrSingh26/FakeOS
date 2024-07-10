import styles from "./Message.module.scss";

const Message = ({ message, variant = "success" }) => {
  return <p className={styles[variant]}>{message}</p>;
};
export default Message;
