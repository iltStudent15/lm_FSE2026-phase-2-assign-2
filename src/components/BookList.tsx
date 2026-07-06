import { Link } from 'react-router-dom'
import type { Book } from '../types'

interface BookListProps {
  books: Book[]
}

function BookList({ books }: BookListProps) {
  return (
    <ul className="book-list">
      {books.map((book) => (
        <li key={book.id}>
          <p>
            <strong>{book.title}</strong> by {book.author}
          </p>
          <Link to={`/book/${book.id}`}>View details</Link>
        </li>
      ))}
    </ul>
  )
}

export default BookList
