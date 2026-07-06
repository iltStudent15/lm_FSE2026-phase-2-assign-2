import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import NoteForm from './NoteForm'

describe('NoteForm', () => {
  it('shows required validation errors when submitted empty', async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn()

    render(<NoteForm onSubmit={onSubmit} />)

    await user.click(screen.getByRole('button', { name: 'Save note' }))

    expect(screen.getByText('Title is required.')).toBeInTheDocument()
    expect(screen.getByText('Note is required.')).toBeInTheDocument()
    expect(screen.getByText('Email is required.')).toBeInTheDocument()
    expect(onSubmit).not.toHaveBeenCalled()
  })

  it('submits valid values', async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn()

    render(<NoteForm onSubmit={onSubmit} />)

    await user.type(screen.getByLabelText('Book title'), 'Refactoring')
    await user.type(screen.getByLabelText('Your note'), 'Important chapters: 1 and 2')
    await user.type(screen.getByLabelText('Email'), 'student@example.com')
    await user.click(screen.getByRole('button', { name: 'Save note' }))

    expect(onSubmit).toHaveBeenCalledTimes(1)
    expect(onSubmit).toHaveBeenCalledWith({
      title: 'Refactoring',
      note: 'Important chapters: 1 and 2',
      email: 'student@example.com',
    })
  })
})
