import { NavLink } from 'react-router-dom'
import type { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="app-shell">
      <header>
        <h1>Book Notes</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/new">Add Note</NavLink>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
