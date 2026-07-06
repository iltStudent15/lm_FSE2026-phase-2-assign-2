import { useEffect, useState } from 'react'
import type { Book } from '../types'

interface UseBooksResult {
  books: Book[]
  loading: boolean
  error: string
}

export function useBooks(): UseBooksResult {
  const [books, setBooks] = useState<Book[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const controller = new AbortController()

    async function loadBooks() {
      try {
        setLoading(true)
        setError('')

        const response = await fetch('/books.json', { signal: controller.signal })

        if (!response.ok) {
          throw new Error('Failed to load books')
        }

        const data = (await response.json()) as Book[]
        setBooks(data)
      } catch (err) {
        if (err instanceof Error && err.name !== 'AbortError') {
          setError(err.message)
        }
      } finally {
        setLoading(false)
      }
    }

    void loadBooks()

    return () => {
      controller.abort()
    }
  }, [])

  return { books, loading, error }
}
