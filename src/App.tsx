import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import AddNotePage from './pages/AddNotePage'
import BookDetailPage from './pages/BookDetailPage'
import HomePage from './pages/HomePage'
import './App.css'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book/:id" element={<BookDetailPage />} />
        <Route path="/new" element={<AddNotePage />} />
      </Routes>
    </Layout>
  )
}

export default App
