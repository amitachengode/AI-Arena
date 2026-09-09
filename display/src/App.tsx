import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DebatePage from './pages/DebatePage'
import TopicSelectionPage from './pages/TopicSelectionPage'

function App() {
  return (
    <>
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/debate" element={<DebatePage />} />
        <Route path="/topic" element={<TopicSelectionPage />} />
      </Routes>
    </div>
    </>
  )
}

export default App
