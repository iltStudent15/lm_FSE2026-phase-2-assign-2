import { Link, useParams } from 'react-router-dom'
import Card from '../components/Card'
import { useBooks } from '../hooks/useBooks'

function BookDetailPage() {
  const { id } = useParams()
  const { books, loading, error } = useBooks()

  const bookId = Number(id)
  const book = books.find((item) => item.id === bookId)

  if (loading) {
    return <p>Loading book details...</p>
  }

  if (error) {
    return <p className="error">Error: {error}</p>
  }

  if (!book) {
    return (
      <div>
        <p>Book not found.</p>
        <Link to="/">Back to home</Link>
      </div>
    )
  }

  return (
    <Card title={book.title}>
      <p>
        <strong>Author:</strong> {book.author}
      </p>
      <p>{book.summary}</p>
      <Link to="/">Back to home</Link>
    </Card>
  )
}

export default BookDetailPage
