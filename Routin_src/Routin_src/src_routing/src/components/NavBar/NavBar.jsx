import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const linkStyles = ({ isActive }) => {
    return isActive ? `${styles.Link} ${styles.Link_active}` : styles.Link;
  };

  return (
    <nav className={styles.NavBar}>
      <NavLink className={linkStyles} to="/">
        Home
      </NavLink>
      <NavLink className={linkStyles} to="/about">
        About
      </NavLink>
      <NavLink className={linkStyles} to="/books">
        Books
      </NavLink>
    </nav>
  );
};

export default NavBar;
