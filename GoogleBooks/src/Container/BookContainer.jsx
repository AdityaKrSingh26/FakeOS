import styles from "./BookContainer.module.scss"
import BookCard from "../components/BookCard/BookCard"

const BookContainer = ({books, onBookClick}) => {
  return (
    <div className = {styles.bookGrid}>
      {books.map((book)=>(
        <BookCard key ={book.id} book={book} onBookClick={onBookClick}/>
      ))}
    </div>
  )
}

export default BookContainer