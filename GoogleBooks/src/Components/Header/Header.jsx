import styles from "./Header.module.scss"

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Google Books Search Engine</h1>
      <p>Search for books and get details about them</p>
    </header>

  )
}

export default Header;