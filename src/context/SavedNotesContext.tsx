import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import type { SavedNote } from '../types'

interface SavedNotesContextValue {
  notes: SavedNote[]
  addNote: (note: Omit<SavedNote, 'id'>) => void
}

const SavedNotesContext = createContext<SavedNotesContextValue | undefined>(undefined)

interface SavedNotesProviderProps {
  children: ReactNode
}

export function SavedNotesProvider({ children }: SavedNotesProviderProps) {
  const [notes, setNotes] = useState<SavedNote[]>([])

  function addNote(note: Omit<SavedNote, 'id'>) {
    setNotes((previousNotes) => {
      const newNote: SavedNote = {
        id: Date.now(),
        ...note,
      }

      return [...previousNotes, newNote]
    })
  }

  return (
    <SavedNotesContext.Provider value={{ notes, addNote }}>
      {children}
    </SavedNotesContext.Provider>
  )
}

export function useSavedNotes() {
  const context = useContext(SavedNotesContext)

  if (!context) {
    throw new Error('useSavedNotes must be used within SavedNotesProvider')
  }

  return context
}
