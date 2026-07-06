import type { ReactNode } from 'react'

interface CardProps {
  title: string
  children: ReactNode
}

function Card({ title, children }: CardProps) {
  return (
    <section className="card">
      <h3>{title}</h3>
      <div>{children}</div>
    </section>
  )
}

export default Card
