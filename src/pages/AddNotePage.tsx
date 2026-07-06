import Card from '../components/Card'
import NoteForm from '../components/NoteForm'
import { useSavedNotes } from '../context/SavedNotesContext'

function AddNotePage() {
  const { addNote } = useSavedNotes()

  return (
    <Card title="Add Note">
      <NoteForm onSubmit={addNote} />
    </Card>
  )
}

export default AddNotePage
