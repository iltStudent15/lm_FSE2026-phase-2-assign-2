import BookList from '../components/BookList'
import Card from '../components/Card'
import { useSavedNotes } from '../context/SavedNotesContext'
import { useBooks } from '../hooks/useBooks'

function HomePage() {
  const { books, loading, error } = useBooks()
  const { notes } = useSavedNotes()

  return (
    <div>
      <Card title="Saved Notes Count">
        <p>You have saved {notes.length} note(s).</p>
      </Card>

      <Card title="Book List">
        {loading && <p>Loading books...</p>}
        {!loading && error && <p className="error">Error: {error}</p>}
        {!loading && !error && <BookList books={books} />}
      </Card>
    </div>
  )
}

export default HomePage
