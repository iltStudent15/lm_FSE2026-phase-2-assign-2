import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Card from './Card'

describe('Card', () => {
  it('renders title and children content', () => {
    render(
      <Card title="Test Title">
        <p>Child text</p>
      </Card>,
    )

    expect(screen.getByRole('heading', { name: 'Test Title' })).toBeInTheDocument()
    expect(screen.getByText('Child text')).toBeInTheDocument()
  })
})
