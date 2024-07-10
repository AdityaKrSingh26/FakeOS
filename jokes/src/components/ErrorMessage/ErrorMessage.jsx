import styles from "./ErrorMessage.module.scss";

const Message = ({ message, variant = "success" }) => {
  return <p className={styles[variant]}>{message}</p>;
};
export default Message;
