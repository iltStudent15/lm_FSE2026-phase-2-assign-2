import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'

export interface NoteFormValues {
  title: string
  note: string
  email: string
}

interface NoteFormProps {
  onSubmit: (values: NoteFormValues) => void
}

interface FormErrors {
  title?: string
  note?: string
  email?: string
}

const initialValues: NoteFormValues = {
  title: '',
  note: '',
  email: '',
}

function NoteForm({ onSubmit }: NoteFormProps) {
  const [values, setValues] = useState<NoteFormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target

    setValues((previousValues) => ({
      ...previousValues,
      [name]: value,
    }))
  }

  function validate(): FormErrors {
    const nextErrors: FormErrors = {}

    if (!values.title.trim()) {
      nextErrors.title = 'Title is required.'
    }

    if (!values.note.trim()) {
      nextErrors.note = 'Note is required.'
    }

    if (!values.email.trim()) {
      nextErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = 'Email format is invalid.'
    }

    return nextErrors
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const nextErrors = validate()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      onSubmit(values)
      setValues(initialValues)
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label htmlFor="title">Book title</label>
      <input id="title" name="title" value={values.title} onChange={handleChange} />
      {errors.title && <p className="error">{errors.title}</p>}

      <label htmlFor="note">Your note</label>
      <textarea id="note" name="note" value={values.note} onChange={handleChange} />
      {errors.note && <p className="error">{errors.note}</p>}

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <button type="submit">Save note</button>
    </form>
  )
}

export default NoteForm
